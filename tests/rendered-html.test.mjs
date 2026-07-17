import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

test("exports the complete SHUNEI LAB sales site", async () => {
  const html = await read("out/index.html");
  assert.match(html, /<html lang="ja">/);
  assert.match(html, /SHUNEI LAB（駿英ラボ）｜AI・Web・アプリ開発/);
  assert.match(html, /技術を、/);
  assert.match(html, /使われる価値/);
  assert.match(html, /id="about"/);
  assert.match(html, /id="work"/);
  assert.match(html, /id="services"/);
  assert.match(html, /id="contact"/);
  assert.match(html, /琉生くんのぼうけん/);
  assert.match(html, /店舗業務ボード/);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview|react-loading-skeleton/);
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
  assert.match(html, /\/shunei-lab-portfolio\/favicon\.svg/);
});
