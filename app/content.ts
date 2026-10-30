export type ProjectLink = {
  href: string;
  label: string;
  external?: boolean;
};

export type Project = {
  slug: "tokimori" | "rui" | "portfolio";
  title: string;
  kana?: string;
  category: string;
  year: string;
  status: string;
  statusNote?: string;
  summary: string;
  challenge: string;
  solution: string;
  current: string;
  role: string;
  facts?: { label: string; value: string }[];
  note?: string;
  technologies: string[];
  links: ProjectLink[];
};

export const contact = {
  email: "shunei.kanbara@gmail.com",
  developerX: "https://x.com/shuneilab_dev",
  github: "https://github.com/Shunei-Lab",
};

export const projects: Project[] = [
  {
    slug: "tokimori",
    title: "Tokimori",
    kana: "トキモリ",
    category: "iPhone app",
    year: "2026",
    status: "App Storeで公開中",
    statusNote: "日本向け・バージョン1.1",
    summary: "最低限必要なアプリを残して、決めた時間だけスマホをロックするiPhoneアプリ。",
    challenge: "「少しだけ」のつもりで見続けてしまう時間に、自分で区切りをつくること。ただし連絡など本当に必要なアプリまで止めてしまうと、習慣として続きません。",
    solution: "制限中も使えるアプリを先に選び、「今から何分」か「何時まで」を決めて始める3ステップに絞りました。開始後はアプリ内から途中解除できない設計で、前回の設定は次回もそのまま使えます。",
    current: "日本のApp Storeで公開中です。iOS 17以降のiPhoneに対応。無料で5回試せます。",
    role: "企画 / UI設計 / SwiftUI実装 / 紹介ページ制作",
    facts: [
      { label: "料金（日本）", value: "無料で5回 / 月額150円・年額1,500円" },
    ],
    note: "スクリーンタイムの利用許可が必要です。OS設定からの権限取り消し等を防ぐ機能ではなく、iOSや端末の状態により制限の反映が遅れる場合があります。",
    technologies: ["SwiftUI", "Screen Time", "アプリ内課金", "iOS"],
    links: [
      { href: "./tokimori/", label: "Tokimoriの紹介ページを見る" },
      { href: "https://apps.apple.com/jp/app/id6825358586", label: "App Storeで見る", external: true },
      { href: "https://x.com/tokimori_app", label: "Tokimori 公式X", external: true },
    ],
  },
  {
    slug: "rui",
    title: "琉生くんのぼうけん",
    category: "iPhone app",
    year: "2026",
    status: "開発中・公開準備",
    summary: "子どもが説明を読まなくても遊べる、親子向けのやさしい恐竜アプリ。",
    challenge: "小さな子どもでも迷わず操作でき、短い時間で何度も楽しめる体験をつくること。",
    solution: "タップだけの操作、はっきりした反応、4種類の恐竜、音と動きを組み合わせ、説明に頼らないUIを設計しました。",
    current: "アプリ本体、ストア掲載用の素材、サポートサイトを制作し、公開に向けて準備しています。",
    role: "企画 / UI設計 / SwiftUI実装 / サポートサイト制作",
    technologies: ["SwiftUI", "iOS", "Interaction Design", "Sound & Motion"],
    links: [
      { href: "https://shunei-lab.github.io/codex-demo-site/", label: "サポートサイトを見る", external: true },
    ],
  },
  {
    slug: "portfolio",
    title: "SHUNEI LAB ポートフォリオ",
    category: "Website",
    year: "2026",
    status: "運用中",
    summary: "いまご覧のこのサイトです。何をつくり、どこまで進んでいるかを、誇張せずに伝えるためのWebサイト。",
    challenge: "実績の数がまだ多くない段階でも、判断に必要な情報をきちんと渡すこと。スマートフォンでも読み疲れしない情報量に整えること。",
    solution: "各プロジェクトに課題・設計・現在地と公開状況を明記する構成にしました。静的書き出しでGitHub Pagesに配置し、構造化データ・OGP・サイトマップを設定。320px幅からデスクトップまで崩れないレイアウト、キーボード操作、動きを減らす設定にも対応しています。",
    current: "公開・運用中です。プロジェクトの進捗に合わせて内容を更新しています。",
    role: "情報設計 / コピー / デザイン / 実装 / SEO",
    technologies: ["Next.js", "React", "Vinext", "Static export", "SEO"],
    links: [],
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
    description: "企画整理、画面設計、SwiftUI実装、App Store申請の準備まで一貫して対応します。初めてのアプリ開発でも、必要な判断を整理しながら進めます。",
    deliverables: ["プロトタイプ", "SwiftUI", "ストア素材", "申請準備"],
  },
  {
    number: "04",
    title: "Webサイト・ブランド",
    lead: "見た目だけでなく、選ばれる理由を設計する。",
    description: "事業の強みを言葉と構成から整理し、問い合わせや採用につながる軽いWebサイトをつくります。公開後の更新しやすさと検索性も設計に含めます。",
    deliverables: ["情報設計", "コピー", "デザイン", "SEO"],
  },
];

export const processSteps = [
  { number: "01", title: "目的を定める", text: "課題・利用者・成功条件を整理し、つくる理由を共有します。", output: "課題整理 / 優先順位" },
  { number: "02", title: "小さく確かめる", text: "画面と操作を早く見える形にし、認識のズレと不要な開発を減らします。", output: "構成案 / プロトタイプ" },
  { number: "03", title: "使える形にする", text: "保守性、速度、アクセシビリティを含めて本番品質へ実装します。", output: "実装 / テスト / 公開" },
  { number: "04", title: "育てる", text: "利用状況と反応を見ながら、効果の高い改善を積み重ねます。", output: "改善案 / 機能追加" },
];

export const tools = [
  { name: "Codex", use: "仕様の整理、実装、コードレビューの補助" },
  { name: "Claude Code", use: "まとまった実装、リファクタリング、テストの整備" },
  { name: "Gemini", use: "下調べ、案の比較、文章の見直し" },
  { name: "Antigravity", use: "構成案の比較、デザインのレビュー" },
];

export const socialChannels = {
  developer: {
    owner: "SHUNEI LAB",
    kind: "DEVELOPER",
    description: "開発の進捗、つくりながら考えたこと、新しいプロジェクトのお知らせ。ご相談の窓口も兼ねています。",
    links: [
      { service: "X", handle: "@shuneilab_dev", href: "https://x.com/shuneilab_dev" },
    ],
  },
  app: {
    owner: "Tokimori",
    kind: "APP UPDATES",
    description: "公開のお知らせやアップデート情報は、アプリの公式アカウントで発信します。",
    links: [
      { service: "X", handle: "@tokimori_app", href: "https://x.com/tokimori_app" },
      { service: "TikTok", handle: "@tokimori5", href: "https://www.tiktok.com/@tokimori5" },
    ],
  },
};

export const faqs = [
  { q: "仕様書がなくても相談できますか？", a: "はい。解決したい課題、使う人、希望時期の3点が分かれば十分です。最初に目的と優先順位から整理します。" },
  { q: "小さな試作や既存サイトの改善も依頼できますか？", a: "対応できます。全面開発だけでなく、検証用プロトタイプ、UI改善、部分的な業務自動化から始める進め方も歓迎です。" },
  { q: "どこまで担当できますか？", a: "課題整理、情報設計、UI/UX、フロントエンド実装、公開、公開後の改善まで一人で通して対応します。専門領域との連携が必要な場合も、必要な範囲を明確にします。" },
  { q: "相談したらすぐ契約になりますか？", a: "いいえ。まず課題と実現可能性を確認し、進め方が合う場合に次の提案をします。相談段階で無理に依頼を勧めることはありません。" },
];
