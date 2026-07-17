/* eslint-disable @next/next/no-img-element */
import { faqs, processSteps, projects, proofPoints, services } from "./content";

const Arrow = () => <span aria-hidden="true">↗</span>;

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a className="logo" href="#top" aria-label="SHUNEI LAB トップへ">
      <span className="logo-symbol" aria-hidden="true">
        <span>S</span><span>L</span><i />
      </span>
      {!compact && <span className="logo-type"><strong>SHUNEI</strong><b>LAB</b><small>駿英ラボ</small></span>}
    </a>
  );
}

function SectionHead({ index, eyebrow, title, text, dark = false }: { index: string; eyebrow: string; title: string; text: string; dark?: boolean }) {
  return (
    <div className={`section-head ${dark ? "section-head--dark" : ""}`}>
      <div className="section-index">{index}</div>
      <div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>
      <p className="section-intro">{text}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main id="top">
      <a className="skip-link" href="#main-content">本文へ移動</a>
      <header className="site-header">
        <div className="shell header-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="メインナビゲーション">
            <a href="#work">実績</a><a href="#services">サービス</a><a href="#about">強み</a><a href="#process">進め方</a>
          </nav>
          <a className="header-cta" href="#contact">相談する <Arrow /></a>
          <details className="mobile-nav">
            <summary aria-label="メニューを開く"><span /><span /></summary>
            <nav aria-label="モバイルナビゲーション">
              <a href="#work">実績</a><a href="#services">サービス</a><a href="#about">強み</a><a href="#process">進め方</a><a href="#contact">相談する</a>
            </nav>
          </details>
        </div>
      </header>

      <div id="main-content">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hero-label"><span /> INDEPENDENT PRODUCT ENGINEER · JAPAN</p>
            <h1 id="hero-title"><span>現場の課題を、</span><span><em>動くプロダクト</em>へ。</span></h1>
            <p className="hero-lead">SHUNEI LABは、現場を知る開発者がAI・Web・iPhoneアプリを企画から公開まで一貫してつくる、個人プロダクトスタジオです。</p>
            <div className="hero-actions">
              <a className="button button--primary" href="#contact">プロジェクトを相談する <Arrow /></a>
              <a className="button button--ghost" href="#work">実績から判断する <span aria-hidden="true">↓</span></a>
            </div>
            <p className="availability"><i /> 新規プロジェクトのご相談を受付中</p>
          </div>

          <aside className="hero-proof" aria-label="SHUNEI LABの特徴">
            <div className="proof-top">
              <p>WHY SHUNEI LAB</p><span>01 — 03</span>
            </div>
            <div className="proof-core" aria-hidden="true">
              <span className="proof-word">SHUN</span><span className="proof-word proof-word--outline">EI</span>
              <div className="proof-node"><b>SL</b><small>IDEA TO IMPACT</small></div>
            </div>
            <div className="proof-list">
              {proofPoints.map((item, index) => <div key={item.value}><span>0{index + 1}</span><strong>{item.value}</strong><p>{item.label}</p></div>)}
            </div>
          </aside>
        </section>

        <section className="trust-strip" aria-label="対応領域">
          <div className="shell"><span>課題整理</span><i /><span>UI / UX</span><i /><span>AI・Web・iOS開発</span><i /><span>公開と改善</span></div>
        </section>

        <section className="section section--ink" id="work" aria-labelledby="work-title">
          <div className="shell">
            <SectionHead index="01" eyebrow="SELECTED WORK" title="実績を、判断材料に。" text="見栄えの良いモックではなく、何を考え、どこまでつくり、何を前に進めたかを公開します。" dark />
            <div className="case-studies">
              {projects.map((project, index) => (
                <article className={`case-study case-study--${index + 1}`} key={project.title}>
                  <div className="case-visual">
                    {index === 0 ? (
                      <div className="app-stage">
                        <div className="app-stage__copy"><span>LIVE PRODUCT</span><strong>親子で楽しめる<br />恐竜あそび</strong></div>
                        <figure className="device device--one"><img src="./work/rui/touch-dino.jpg" alt="ティラノサウルスをタップして遊ぶ画面" width="739" height="1600" /></figure>
                        <figure className="device device--two"><img src="./work/rui/rui-adventure.jpg" alt="ブラキオサウルスが表示されたプレイ画面" width="739" height="1600" loading="lazy" /></figure>
                      </div>
                    ) : (
                      <div className="ops-stage" aria-label="8店舗の業務状況を一覧する画面イメージ">
                        <div className="ops-head"><span>STORE OPS / 08</span><strong>Today&apos;s tasks</strong><i>6 / 8 completed</i></div>
                        <div className="ops-grid">{["A1","A2","B1","B2","C1","C2","D1","D2"].map((store, itemIndex) => <div className={itemIndex > 5 ? "is-open" : ""} key={store}><span>{store}</span><b>{itemIndex > 5 ? "OPEN" : "DONE"}</b></div>)}</div>
                        <p>発信 → 対応 → 完了確認を一つの流れに</p>
                      </div>
                    )}
                  </div>
                  <div className="case-body">
                    <div className="case-meta"><span>{project.label}</span><span>{project.year}</span></div>
                    <h3>{project.title}</h3><p className="case-summary">{project.summary}</p>
                    <dl className="case-details">
                      <div><dt>課題</dt><dd>{project.challenge}</dd></div>
                      <div><dt>設計・工夫</dt><dd>{project.solution}</dd></div>
                      <div><dt>成果</dt><dd>{project.outcome}</dd></div>
                    </dl>
                    <div className="case-facts"><p><span>担当範囲</span>{project.role}</p><p><span>開発状況</span>{project.period}</p></div>
                    <ul className="tags">{project.technologies.map(technology => <li key={technology}>{technology}</li>)}</ul>
                    {project.href && <a className="case-link" href={project.href} target="_blank" rel="noreferrer">{project.linkLabel} <Arrow /></a>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section shell" id="services" aria-labelledby="services-title">
          <SectionHead index="02" eyebrow="SERVICES" title="つくるものではなく、変えることから考える。" text="手段ありきではなく、課題に合う最小の方法を選びます。曖昧な相談段階からでも進められます。" />
          <div className="services" id="services-title">
            {services.map(service => (
              <article className="service" key={service.title}>
                <span className="service-number">{service.number}</span>
                <div><p>{service.title}</p><h3>{service.lead}</h3></div>
                <div><p className="service-description">{service.description}</p><ul>{service.deliverables.map(item => <li key={item}>{item}</li>)}</ul></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section about" id="about" aria-labelledby="about-title">
          <div className="shell">
            <SectionHead index="03" eyebrow="WHY ME" title="現場と開発、その両方を見る。" text="SHUNEI LABの差は、技術だけではなく、実際に人が動く現場の解像度です。" />
            <div className="about-grid">
              <div className="about-statement"><p>複数店舗のマネジメントで培った現場視点と、AI・Web・アプリを形にする実装力。</p><p>「作れる」だけでなく、「使われる」までを設計します。</p></div>
              <div className="about-points">
                <article><span>01</span><h3>課題を翻訳する</h3><p>現場の言葉を、必要な機能と優先順位へ変換。要件が曖昧な段階から整理します。</p></article>
                <article><span>02</span><h3>分断せずにつくる</h3><p>企画、コピー、UI、実装を横断し、意図が途中で薄まらない体験をつくります。</p></article>
                <article><span>03</span><h3>運用まで想像する</h3><p>導入後の更新、追加、日々の使い方まで考え、長く育てられる構成を残します。</p></article>
              </div>
            </div>
          </div>
        </section>

        <section className="section shell" id="process" aria-labelledby="process-title">
          <SectionHead index="04" eyebrow="PROCESS" title="迷いを減らす、4つの工程。" text="各段階で判断材料を共有し、大きく作ってから戻るリスクを減らします。" />
          <div className="process" id="process-title">
            {processSteps.map(step => <article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p><small>OUTPUT — {step.output}</small></article>)}
          </div>
        </section>

        <section className="section faq shell" aria-labelledby="faq-title">
          <div className="faq-title"><p className="eyebrow">FAQ</p><h2 id="faq-title">相談前の不安を、<br />先に解消します。</h2></div>
          <div className="faq-list">{faqs.map((faq, index) => <details key={faq.q} open={index === 0}><summary><span>0{index + 1}</span>{faq.q}<i>＋</i></summary><p>{faq.a}</p></details>)}</div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="shell">
            <p className="contact-kicker"><i /> PROJECT INQUIRY · OPEN</p>
            <div className="contact-grid">
              <div><h2 id="contact-title">まだ曖昧な課題から、<br /><em>一緒に整理します。</em></h2></div>
              <div className="contact-copy"><p>必要なのは「解決したい課題」「使う人」「希望時期」の3つだけ。仕様書がなくても問題ありません。</p><a className="button button--light" href="https://github.com/Shunei-Lab" target="_blank" rel="noreferrer">相談窓口を開く <Arrow /></a><small>現在はGitHubプロフィールからご連絡いただけます。</small></div>
            </div>
            <div className="contact-steps"><span>01 課題を共有</span><span>02 進め方を整理</span><span>03 合う場合のみご提案</span></div>
          </div>
        </section>
      </div>

      <footer>
        <div className="shell footer-inner"><div><Logo /><p>現場の課題を、動くプロダクトへ。</p></div><div className="footer-links"><a href="#work">実績</a><a href="#services">サービス</a><a href="https://github.com/Shunei-Lab" target="_blank" rel="noreferrer">GitHub ↗</a></div><div className="footer-end"><a href="#top">ページ上部へ ↑</a><small>© 2026 SHUNEI LAB / 駿英ラボ</small></div></div>
      </footer>
    </main>
  );
}
