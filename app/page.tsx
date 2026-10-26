/* eslint-disable @next/next/no-img-element */
import { contact, faqs, processSteps, projects, services, socialChannels, tools, type Project } from "./content";

const Arrow = () => <span aria-hidden="true">↗</span>;
const NewTab = () => <span className="sr-only">（新しいタブで開きます）</span>;

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="SHUNEI LAB トップへ">
      <span className="logo-symbol" aria-hidden="true">
        <span>S</span><span>L</span><i />
      </span>
      <span className="logo-type"><strong>SHUNEI</strong><b>LAB</b><small>駿英ラボ</small></span>
    </a>
  );
}

function SectionHead({ id, index, eyebrow, title, text, dark = false }: { id: string; index: string; eyebrow: string; title: string; text: string; dark?: boolean }) {
  return (
    <div className={`section-head ${dark ? "section-head--dark" : ""}`}>
      <div className="section-index" aria-hidden="true">{index}</div>
      <div><p className="eyebrow">{eyebrow}</p><h2 id={id}>{title}</h2></div>
      <p className="section-intro">{text}</p>
    </div>
  );
}

function CaseVisual({ project }: { project: Project }) {
  if (project.slug === "tokimori") {
    return (
      <div className="tk-stage">
        <div className="tk-stage__copy">
          <img src="./tokimori/assets/icon.png" alt="" width="72" height="72" loading="lazy" />
          <span>MAKE TIME FOR WHAT MATTERS</span>
          <strong>大切な時間を、<br />もっと有意義に。</strong>
        </div>
        <figure className="tk-phone">
          <img src="./tokimori/assets/setup.png" alt="Tokimoriの設定画面の見本。制限中も使えるアプリを選び、ロックする時間を決める。" width="1206" height="2622" loading="lazy" />
          <figcaption>掲載用の画面見本。実アプリの選択アイコンはApple提供のカラー表示です。</figcaption>
        </figure>
      </div>
    );
  }
  if (project.slug === "rui") {
    return (
      <div className="app-stage">
        <div className="app-stage__copy"><span>IN DEVELOPMENT</span><strong>親子で楽しめる<br />恐竜あそび</strong></div>
        <figure className="device device--one"><img src="./work/rui/touch-dino.jpg" alt="ティラノサウルスをタップして遊ぶ画面" width="739" height="1600" loading="lazy" /></figure>
        <figure className="device device--two"><img src="./work/rui/rui-adventure.jpg" alt="ブラキオサウルスが表示されたプレイ画面" width="739" height="1600" loading="lazy" /></figure>
      </div>
    );
  }
  return (
    <div className="site-stage" role="img" aria-label="このサイトをデスクトップとスマートフォンで表示したイメージ">
      <div className="browser">
        <div className="browser-bar"><i /><i /><i /><span>shunei-lab.github.io/shunei-lab-portfolio/</span></div>
        <div className="browser-body">
          <span className="mini-mark">SL</span>
          <strong>現場の課題を、<br /><em>動くプロダクト</em>へ。</strong>
          <div className="mini-lines"><i /><i /><i /></div>
        </div>
      </div>
      <div className="mini-phone">
        <span className="mini-mark">SL</span>
        <strong>現場の課題を、<em>動くプロダクト</em>へ。</strong>
        <div className="mini-lines"><i /><i /></div>
      </div>
      <ul className="site-stage__specs"><li>Static export</li><li>320px〜</li><li>Structured data</li></ul>
    </div>
  );
}

export default function Home() {
  const [featured, ...others] = projects;

  return (
    <main id="top">
      <a className="skip-link" href="#main-content">本文へ移動</a>
      <header className="site-header">
        <div className="shell header-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="メインナビゲーション">
            <a href="#work">実績</a><a href="#services">サービス</a><a href="#about">強み</a><a href="#process">進め方</a><a href="#updates">更新情報</a>
          </nav>
          <a className="header-cta" href="#contact">相談する <Arrow /></a>
          <details className="mobile-nav">
            <summary><span className="sr-only">メニュー</span><i aria-hidden="true" /><i aria-hidden="true" /></summary>
            <nav aria-label="モバイルナビゲーション">
              <a href="#work">実績</a><a href="#services">サービス</a><a href="#about">強み</a><a href="#process">進め方</a><a href="#updates">更新情報</a><a href="#contact">相談する</a>
            </nav>
          </details>
        </div>
      </header>

      <div id="main-content">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hero-label"><span aria-hidden="true" /> INDEPENDENT PRODUCT STUDIO · JAPAN</p>
            <h1 id="hero-title"><span>現場の課題を、</span><span><em>動くプロダクト</em>へ。</span></h1>
            <p className="hero-lead">SHUNEI LABは、個人で営むプロダクトスタジオです。店舗運営の現場で見てきた「困りごと」を出発点に、iPhoneアプリとWebを、企画から実装・検証まで自分の手でつくっています。</p>
            <div className="hero-actions">
              <a className="button button--primary" href="#contact">プロジェクトを相談する <Arrow /></a>
              <a className="button button--ghost" href="#work">つくったものを見る <span aria-hidden="true">↓</span></a>
            </div>
          </div>

          <aside className="hero-now" aria-labelledby="now-title">
            <div className="now-top"><h2 id="now-title">NOW</h2><span>2026.10.26 時点</span></div>
            <a className="now-feature" href="./tokimori/">
              <img src="./tokimori/assets/icon.png" alt="" width="64" height="64" />
              <span className="now-feature__text">
                <strong>{featured.title}<small>{featured.kana}</small></strong>
                <span>{featured.summary}</span>
              </span>
              <span className="status-badge status-badge--review">{featured.status}</span>
            </a>
            <ul className="now-list">
              {others.map(project => (
                <li key={project.slug}><a href={`#case-${project.slug}`}><span>{project.title}</span><b>{project.status}</b></a></li>
              ))}
            </ul>
            <p className="now-foot"><span className="now-mark" aria-hidden="true">SL</span>8店舗のマネジメント経験を、つくる理由の土台に。</p>
          </aside>
        </section>

        <section className="trust-strip" aria-label="対応領域">
          <div className="shell"><span>課題整理</span><i aria-hidden="true" /><span>UI / UX</span><i aria-hidden="true" /><span>iOS・Web開発</span><i aria-hidden="true" /><span>公開と改善</span></div>
        </section>

        <section className="section section--ink" id="work" aria-labelledby="work-title">
          <div className="shell">
            <SectionHead id="work-title" index="01" eyebrow="SELECTED WORK" title="つくったものと、その現在地。" text="何を考え、どこまでつくり、いまどの段階にあるのか。公開状況も含めて、そのまま載せています。" dark />
            <div className="case-studies">
              {projects.map((project, index) => (
                <article className={`case-study case-study--${project.slug} ${index % 2 ? "case-study--reverse" : ""}`} id={`case-${project.slug}`} key={project.slug} aria-labelledby={`case-${project.slug}-title`}>
                  <div className="case-visual"><CaseVisual project={project} /></div>
                  <div className="case-body">
                    <div className="case-meta"><span>{String(index + 1).padStart(2, "0")} / {project.category}</span><span>{project.year}</span></div>
                    <h3 id={`case-${project.slug}-title`}>{project.title}{project.kana && <small>{project.kana}</small>}</h3>
                    <p className="case-status"><span className={`status-badge ${project.slug === "tokimori" ? "status-badge--review" : project.slug === "portfolio" ? "status-badge--live" : "status-badge--dev"}`}>{project.status}</span>{project.statusNote && <small>{project.statusNote}</small>}</p>
                    <p className="case-summary">{project.summary}</p>
                    <dl className="case-details">
                      <div><dt>課題</dt><dd>{project.challenge}</dd></div>
                      <div><dt>設計・工夫</dt><dd>{project.solution}</dd></div>
                      <div><dt>現在地</dt><dd>{project.current}</dd></div>
                    </dl>
                    <dl className="case-facts">
                      <div><dt>担当範囲</dt><dd>{project.role}</dd></div>
                      {project.facts?.map(fact => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}
                    </dl>
                    {project.note && <p className="case-note">{project.note}</p>}
                    <ul className="tags" aria-label="使用技術">{project.technologies.map(technology => <li key={technology}>{technology}</li>)}</ul>
                    {project.links.length > 0 && (
                      <div className="case-links">
                        {project.links.map(link => link.external
                          ? <a className="case-link" href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label}<NewTab /> <Arrow /></a>
                          : <a className="case-link" href={link.href} key={link.href}>{link.label} <span aria-hidden="true">→</span></a>)}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section shell" id="services" aria-labelledby="services-title">
          <SectionHead id="services-title" index="02" eyebrow="SERVICES" title="つくるものより先に、変えたいことを。" text="手段ありきではなく、課題に合う最小の方法を選びます。曖昧な相談段階からでも進められます。" />
          <div className="services">
            {services.map(service => (
              <article className="service" key={service.title}>
                <span className="service-number" aria-hidden="true">{service.number}</span>
                <div><p>{service.title}</p><h3>{service.lead}</h3></div>
                <div><p className="service-description">{service.description}</p><ul aria-label={`${service.title}の主な内容`}>{service.deliverables.map(item => <li key={item}>{item}</li>)}</ul></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section about" id="about" aria-labelledby="about-title">
          <div className="shell">
            <SectionHead id="about-title" index="03" eyebrow="WHY ME" title="現場と開発、その両方を見る。" text="技術だけでなく、実際に人が動く現場の解像度を持ってつくります。" />
            <div className="about-grid">
              <div className="about-statement"><p>8店舗のマネジメントで培った現場の視点と、アプリやWebを形にする実装力。</p><p>「作れる」だけでなく、「使われる」までを考えます。</p></div>
              <div className="about-points">
                <article><span aria-hidden="true">01</span><h3>課題を翻訳する</h3><p>現場の言葉を、必要な機能と優先順位へ置き換えます。要件が曖昧な段階から整理します。</p></article>
                <article><span aria-hidden="true">02</span><h3>分断せずにつくる</h3><p>企画、コピー、UI、実装を一人で通すので、意図が途中で薄まりません。</p></article>
                <article><span aria-hidden="true">03</span><h3>運用まで想像する</h3><p>導入後の更新や日々の使い方まで考え、長く育てられる構成を残します。</p></article>
              </div>
            </div>
          </div>
        </section>

        <section className="section shell" id="process" aria-labelledby="process-title">
          <SectionHead id="process-title" index="04" eyebrow="PROCESS" title="迷いを減らす、4つの工程。" text="各段階で判断材料を共有し、大きく作ってから戻るリスクを減らします。" />
          <ol className="process">
            {processSteps.map(step => <li key={step.number}><span aria-hidden="true">{step.number}</span><h3>{step.title}</h3><p>{step.text}</p><small>OUTPUT — {step.output}</small></li>)}
          </ol>
        </section>

        <section className="tools" id="tools" aria-labelledby="tools-title">
          <div className="shell tools-inner">
            <div className="tools-copy">
              <p className="eyebrow">05 · TOOLS &amp; WORKFLOW</p>
              <h2 id="tools-title">AIは道具として。<br />判断と確認は、自分で。</h2>
              <p>調査、設計、実装、検証の場面ごとに、AIツールを使い分けています。どのツールを使っても、最終的な品質はコード・テスト・実際の表示で確かめます。</p>
            </div>
            <ul className="tool-list">
              {tools.map(tool => <li key={tool.name}><strong>{tool.name}</strong><span>{tool.use}</span></li>)}
            </ul>
            <p className="tool-note">各名称は提供元の製品名です。個人として利用しているもので、提供元との提携や推奨を示すものではありません。</p>
          </div>
        </section>

        <section className="section shell" id="updates" aria-labelledby="updates-title">
          <SectionHead id="updates-title" index="06" eyebrow="UPDATES" title="進捗は、ここで発信しています。" text="開発者としての発信と、アプリごとのお知らせはアカウントを分けています。" />
          <div className="updates-grid">
            {[socialChannels.developer, socialChannels.app].map(channel => (
              <article className={`update-panel ${channel === socialChannels.app ? "update-panel--app" : ""}`} key={channel.owner}>
                <p className="update-kind">{channel.kind}</p>
                <h3>
                  {channel === socialChannels.app
                    ? <img src="./tokimori/assets/icon.png" alt="" width="40" height="40" loading="lazy" />
                    : <span className="update-mark" aria-hidden="true">SL</span>}
                  {channel.owner}
                </h3>
                <p>{channel.description}</p>
                <ul className="channel-list">
                  {channel.links.map(link => (
                    <li key={link.href}><a href={link.href} target="_blank" rel="noreferrer"><span>{link.service}</span><b>{link.handle}</b><NewTab /><Arrow /></a></li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section faq shell" aria-labelledby="faq-title">
          <div className="faq-title"><p className="eyebrow">FAQ</p><h2 id="faq-title">相談前の不安を、<br />先に解消します。</h2></div>
          <div className="faq-list">{faqs.map((faq, index) => <details key={faq.q} open={index === 0}><summary><span aria-hidden="true">0{index + 1}</span>{faq.q}<i aria-hidden="true">＋</i></summary><p>{faq.a}</p></details>)}</div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="shell">
            <p className="contact-kicker"><i aria-hidden="true" /> PROJECT INQUIRY · OPEN</p>
            <div className="contact-grid">
              <div><h2 id="contact-title">まだ曖昧な課題から、<br /><em>一緒に整理します。</em></h2></div>
              <div className="contact-copy">
                <p>必要なのは「解決したい課題」「使う人」「希望時期」の3つだけ。仕様書がなくても問題ありません。</p>
                <a className="button button--light" href={`mailto:${contact.email}`}>メールで相談する <Arrow /></a>
                <a className="button button--outline-light" href={contact.developerX} target="_blank" rel="noreferrer">開発者Xで連絡する<NewTab /> <Arrow /></a>
                <small>メール：{contact.email}</small>
              </div>
            </div>
            <div className="contact-steps"><span>01 課題を共有</span><span>02 進め方を整理</span><span>03 合う場合のみご提案</span></div>
          </div>
        </section>
      </div>

      <footer>
        <div className="shell footer-inner">
          <div className="footer-brand"><Logo /><p>現場の課題を、動くプロダクトへ。</p></div>
          <nav className="footer-links" aria-label="フッターナビゲーション">
            <a href="#work">実績</a><a href="#services">サービス</a><a href="#updates">更新情報</a><a href="#contact">相談する</a><a href="./tokimori/">Tokimori</a>
          </nav>
          <ul className="footer-social" aria-label="SNS・外部リンク">
            <li><a href={contact.developerX} target="_blank" rel="noreferrer">開発者X<NewTab /> <Arrow /></a></li>
            <li><a href="https://x.com/tokimori_app" target="_blank" rel="noreferrer">Tokimori X<NewTab /> <Arrow /></a></li>
            <li><a href="https://www.tiktok.com/@tokimori5" target="_blank" rel="noreferrer">Tokimori TikTok<NewTab /> <Arrow /></a></li>
            <li><a href={contact.github} target="_blank" rel="noreferrer">GitHub<NewTab /> <Arrow /></a></li>
          </ul>
          <div className="footer-end"><a href="#top">ページ上部へ <span aria-hidden="true">↑</span></a><small>© 2026 SHUNEI LAB / 駿英ラボ</small></div>
        </div>
      </footer>
    </main>
  );
}
