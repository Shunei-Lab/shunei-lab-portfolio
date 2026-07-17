import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap { return [{ url:"https://shunei-lab.github.io/shunei-lab-portfolio/", lastModified:new Date(), changeFrequency:"monthly", priority:1 }]; }
