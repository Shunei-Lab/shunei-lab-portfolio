import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

test("exports the complete SHUNEI LAB sales site", async () => {
  const html = await read("out/index.html");
  assert.match(html, /<html lang="ja">/);
  assert.match(html, /SHUNEI LAB（駿英ラボ）｜現場課題を解くAI・Web・iPhoneアプリ開発/);
  assert.match(html, /現場の課題を、/);
  assert.match(html, /動くプロダクト/);
  for (const id of ["work", "tools", "updates", "contact"]) {
    assert.match(html, new RegExp(`id="${id}"`), `missing section #${id}`);
  }
  assert.match(html, /課題/);
  assert.match(html, /設計・工夫/);
  assert.match(html, /現在地/);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview|react-loading-skeleton/);
});

test("features Tokimori first with its published status and local landing page", async () => {
  const html = await read("out/index.html");
  const work = html.slice(html.indexOf('id="work"'));
  const order = ["case-tokimori", "case-rui", "case-portfolio"].map((id) => work.indexOf(`id="${id}"`));
  assert.ok(order.every((index) => index > -1), "all three case studies render");
  assert.deepEqual([...order].sort((a, b) => a - b), order, "Tokimori is the first case study");

  assert.match(html, /App Storeで公開中/);
  assert.match(html, /日本語・英語対応・バージョン1.1/);
  assert.match(html, /月額150円・年額1,500円/);
  assert.match(html, /途中解除できない/);
  assert.match(html, /権限取り消し等を防ぐ機能ではなく/);
  assert.match(html, /href="\.\/tokimori\/"/);
  assert.match(html, /src="\.\/tokimori\/assets\/setup\.png"/);
  assert.match(html, /掲載用の画面見本/);
  assert.match(html, /Apple提供のカラー表示/);
  assert.match(html, /href="https:\/\/apps\.apple\.com\/jp\/app\/id6825358586"/);
});

test("states honest statuses for the other projects", async () => {
  const html = await read("out/index.html");
  assert.match(html, /琉生くんのぼうけん/);
  assert.match(html, /開発中・公開準備/);
  assert.match(html, /https:\/\/shunei-lab\.github\.io\/codex-demo-site\//);
  assert.match(html, /\.\/work\/rui\/touch-dino\.jpg/);
  assert.doesNotMatch(html, /LIVE PRODUCT/);
  assert.match(html, /SHUNEI LAB ポートフォリオ/);
  assert.match(html, /運用中/);
  assert.doesNotMatch(html, /店舗業務ボード/);
});

test("separates developer and app social channels and offers real contact routes", async () => {
  const html = await read("out/index.html");
  const updates = html.slice(html.indexOf('id="updates"'), html.indexOf('id="contact"'));
  assert.match(updates, /DEVELOPER/);
  assert.match(updates, /APP UPDATES/);
  assert.match(updates, /href="https:\/\/x\.com\/shuneilab_dev"/);
  assert.match(updates, /href="https:\/\/x\.com\/tokimori_app"/);
  assert.match(updates, /href="https:\/\/www\.tiktok\.com\/@tokimori5"/);

  const footer = html.slice(html.indexOf("<footer"));
  for (const href of ["https://x.com/shuneilab_dev", "https://x.com/tokimori_app", "https://www.tiktok.com/@tokimori5"]) {
    assert.ok(footer.includes(`href="${href}"`), `footer links to ${href}`);
  }

  const contactSection = html.slice(html.indexOf('id="contact"'), html.indexOf("<footer"));
  assert.match(contactSection, /href="mailto:shunei\.kanbara@gmail\.com"/);
  assert.match(contactSection, /href="https:\/\/x\.com\/shuneilab_dev"/);
  assert.doesNotMatch(contactSection, /相談窓口を開く/);

  assert.match(html, /"sameAs":\["https:\/\/github\.com\/Shunei-Lab","https:\/\/x\.com\/shuneilab_dev"\]/);
});

test("uses unique ids and labelled sections", async () => {
  const html = await read("out/index.html");
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  assert.deepEqual(duplicates, [], `duplicate ids: ${duplicates.join(", ")}`);

  for (const [, target] of html.matchAll(/aria-labelledby="([^"]+)"/g)) {
    assert.ok(ids.includes(target), `aria-labelledby target #${target} exists`);
  }
  for (const id of ["tools-title", "updates-title"]) {
    assert.match(html, new RegExp(`<h2 id="${id}"`), `#${id} is a heading`);
  }
});

test("exports SEO and social assets", async () => {
  const [html, robots, sitemap, og] = await Promise.all([
    read("out/index.html"), read("out/robots.txt"), read("out/sitemap.xml"), stat(new URL("out/og.png", root)),
  ]);
  assert.match(html, /name="description"/);
  assert.match(html, /property="og:image"/);
  assert.match(html, /name="twitter:card" content="summary_large_image"/);
  assert.match(html, /rel="canonical"/);
  assert.match(robots, /Sitemap:/);
  assert.match(sitemap, /shunei-lab-portfolio/);
  assert.ok(og.size > 100_000);
});

test("uses the GitHub Pages base path for generated assets", async () => {
  const html = await read("out/index.html");
  assert.match(html, /\/shunei-lab-portfolio\/_next\/static\//);
  assert.match(html, /\/shunei-lab-portfolio\/favicon\.png/);
});
