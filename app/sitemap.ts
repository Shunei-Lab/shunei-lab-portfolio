import type { MetadataRoute } from "next";
export const dynamic = "force-static";

const base = "https://shunei-lab.github.io/shunei-lab-portfolio/";
// Content revision dates, rather than the time of every unrelated deployment.
const updated = "2026-11-07";
const pairs = [
  { ja: "tokimori/", en: "tokimori/en/" },
  { ja: "timeback/support.html", en: "timeback/support-en.html" },
  { ja: "timeback/privacy.html", en: "timeback/privacy-en.html" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, lastModified: updated, changeFrequency: "monthly", priority: 1 },
    ...pairs.flatMap(pair => [pair.ja, pair.en].map(path => ({
      url: base + path,
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority: path.startsWith("tokimori/") ? 0.8 : 0.4,
      alternates: { languages: { ja: base + pair.ja, en: base + pair.en, "x-default": base + pair.en } },
    }))),
  ];
}
