import type { Metadata } from "next";
import "./globals.css";

const title = "SHUNEI LAB（駿英ラボ）｜AI・Web・アプリ開発";
const description = "技術を、使われる価値へ。AI開発、Webアプリ、iPhoneアプリ、業務効率化システム、ホームページ制作を企画から実装まで一貫して支援します。";
const assetBase = process.env.GITHUB_ACTIONS === "true" ? "/shunei-lab-portfolio" : "";

export const metadata: Metadata = {
  metadataBase: new URL("https://shunei-lab.github.io"),
  title,
  description,
  keywords: ["SHUNEI LAB", "駿英ラボ", "AI開発", "Webアプリ開発", "iPhoneアプリ開発", "業務効率化", "ホームページ制作"],
  authors: [{ name: "SHUNEI LAB" }],
  creator: "SHUNEI LAB",
  alternates: { canonical: "/shunei-lab-portfolio/" },
  openGraph: { title, description, type: "website", locale: "ja_JP", siteName: "SHUNEI LAB", images: [{ url: "/shunei-lab-portfolio/og.png", width: 1200, height: 630, alt: "SHUNEI LAB — 技術を、使われる価値へ。" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/shunei-lab-portfolio/og.png"] },
  icons: { icon: `${assetBase}/favicon.svg`, shortcut: `${assetBase}/favicon.svg` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
