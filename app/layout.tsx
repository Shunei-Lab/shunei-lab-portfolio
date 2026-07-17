import type { Metadata } from "next";
import "./globals.css";

const title = "SHUNEI LAB（駿英ラボ）｜現場課題を解くAI・Web・iPhoneアプリ開発";
const description = "現場の課題を、動くプロダクトへ。SHUNEI LABは、AI・Webアプリ・iPhoneアプリ・業務効率化を企画、UI/UX、実装、公開まで一貫して支援します。";
const assetBase = process.env.GITHUB_ACTIONS === "true" ? "/shunei-lab-portfolio" : "";
const siteUrl = "https://shunei-lab.github.io/shunei-lab-portfolio/";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "SHUNEI LAB",
  alternateName: ["駿英ラボ", "Shunei Lab"],
  url: siteUrl,
  slogan: "現場の課題を、動くプロダクトへ。",
  description,
  areaServed: "JP",
  sameAs: ["https://github.com/Shunei-Lab"],
  knowsAbout: ["AI開発", "Webアプリ開発", "iPhoneアプリ開発", "UI/UXデザイン", "業務効率化システム", "ホームページ制作"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "開発サービス",
    itemListElement: ["AI・業務効率化", "Webアプリ・業務システム", "iPhoneアプリ", "Webサイト・ブランド"].map(name => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://shunei-lab.github.io"),
  title,
  description,
  keywords: ["SHUNEI LAB", "駿英ラボ", "AI開発", "Webアプリ開発", "iPhoneアプリ開発", "UI UX", "業務効率化", "ホームページ制作"],
  authors: [{ name: "SHUNEI LAB" }],
  creator: "SHUNEI LAB",
  verification: { google: "bTsp_T8y2WjxwLerajOxWB4aQaqSHYz9CQiOwj4upqk" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: "/shunei-lab-portfolio/" },
  openGraph: { title, description, type: "website", locale: "ja_JP", siteName: "SHUNEI LAB", images: [{ url: "/shunei-lab-portfolio/og.png", width: 1200, height: 630, alt: "SHUNEI LAB — 現場の課題を、動くプロダクトへ。" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/shunei-lab-portfolio/og.png"] },
  icons: { icon: `${assetBase}/favicon.png`, shortcut: `${assetBase}/favicon.png`, apple: `${assetBase}/favicon.png` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
      </body>
    </html>
  );
}
