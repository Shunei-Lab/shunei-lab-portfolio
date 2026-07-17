export type Project = {
  title: string;
  label: string;
  year: string;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  role: string;
  period: string;
  technologies: string[];
  href?: string;
  linkLabel?: string;
};

export const proofPoints = [
  { value: "8店舗", label: "現場マネジメントの視点" },
  { value: "0→公開", label: "企画・設計・実装を一貫" },
  { value: "AI / Web / iOS", label: "目的に合わせた技術選定" },
];

export const projects: Project[] = [
  {
    title: "琉生くんのぼうけん",
    label: "iPhone app / Case study 01",
    year: "2026",
    summary: "子どもが説明を読まなくても遊べる、親子向けのやさしい恐竜アプリ。",
    challenge: "小さな子どもでも迷わず操作でき、短い時間で何度も楽しめる体験をつくること。",
    solution: "タップだけの操作、明確な反応、4種類の恐竜、音と動きを組み合わせ、説明に頼らないUIを設計しました。",
    outcome: "iPhoneアプリ本体に加え、App Store掲載素材と公開用サポートサイトまで一貫して制作しました。",
    role: "企画 / UI設計 / SwiftUI実装 / 公開支援",
    period: "個人開発・継続改善中",
    technologies: ["SwiftUI", "iOS", "Interaction Design", "App Store"],
    href: "https://shunei-lab.github.io/codex-demo-site/",
    linkLabel: "サポートサイトを見る",
  },
  {
    title: "店舗業務ボード",
    label: "Operations tool / Case study 02",
    year: "2026",
    summary: "複数店舗の突発業務を、発信から完了確認まで一画面で追える業務ツール。",
    challenge: "電話や個別連絡に分散する依頼をまとめ、どの店舗が未完了かをすぐ判断できる状態にすること。",
    solution: "8店舗の状態、担当、期限、完了報告を一つの流れに統合。現場が覚える操作を最小限にしました。",
    outcome: "運営経験から要件を整理し、現場導入を想定したプロトタイプとして設計・検証しています。",
    role: "課題定義 / 情報設計 / UI設計 / Web実装",
    period: "Prototype",
    technologies: ["Next.js", "TypeScript", "PWA", "Operations"],
  },
];

export const services = [
  {
    number: "01",
    title: "AI・業務効率化",
    lead: "人が判断すべき仕事に、時間を戻す。",
    description: "生成AI、定型処理、自動集計を既存業務へ無理なく組み込みます。まず業務の流れを整理し、効果が見える小さな範囲から始めます。",
    deliverables: ["業務整理", "AIツール", "自動化フロー", "管理画面"],
  },
  {
    number: "02",
    title: "Webアプリ・業務システム",
    lead: "複雑な業務を、迷わない画面へ。",
    description: "予約、進捗、顧客、店舗運営など、現場固有のルールに合わせて設計します。使われ続けることを最優先に、更新しやすい土台までつくります。",
    deliverables: ["要件定義", "UI/UX", "Web開発", "運用改善"],
  },
  {
    number: "03",
    title: "iPhoneアプリ",
    lead: "アイデアを、手の中で使える体験に。",
    description: "企画整理、画面設計、SwiftUI実装、App Store公開準備まで一貫対応。初めてのアプリ開発でも、必要な判断を整理しながら進めます。",
    deliverables: ["プロトタイプ", "SwiftUI", "ストア素材", "公開支援"],
  },
  {
    number: "04",
    title: "Webサイト・ブランド",
    lead: "見た目を整えるだけでなく、選ばれる理由を設計する。",
    description: "事業の強みを言葉と構成から整理し、問い合わせや採用につながる高速なWebサイトを制作します。公開後の更新性と検索性も設計に含めます。",
    deliverables: ["情報設計", "コピー", "デザイン", "SEO"],
  },
];

export const processSteps = [
  { number: "01", title: "目的を定める", text: "課題・利用者・成功条件を整理し、つくる理由を共有します。", output: "課題整理 / 優先順位" },
  { number: "02", title: "小さく確かめる", text: "画面と操作を早く可視化し、認識のズレと不要な開発を減らします。", output: "構成案 / プロトタイプ" },
  { number: "03", title: "使える形にする", text: "保守性、速度、アクセシビリティを含めて本番品質へ実装します。", output: "実装 / テスト / 公開" },
  { number: "04", title: "育てる", text: "利用状況と反応を見ながら、効果の高い改善を積み重ねます。", output: "改善案 / 機能追加" },
];

export const faqs = [
  { q: "仕様書がなくても相談できますか？", a: "はい。解決したい課題、使う人、希望時期の3点が分かれば十分です。最初に目的と優先順位から整理します。" },
  { q: "小さな試作や既存サイトの改善も依頼できますか？", a: "対応できます。全面開発だけでなく、検証用プロトタイプ、UI改善、部分的な業務自動化から始める進め方も歓迎です。" },
  { q: "どこまで担当できますか？", a: "課題整理、情報設計、UI/UX、フロントエンド実装、公開、公開後の改善まで一貫して対応します。専門領域との連携が必要な場合も、必要な範囲を明確にします。" },
  { q: "相談したらすぐ契約になりますか？", a: "いいえ。まず課題と実現可能性を確認し、進め方が合う場合に次の提案をします。相談段階で無理に依頼を勧めることはありません。" },
];
