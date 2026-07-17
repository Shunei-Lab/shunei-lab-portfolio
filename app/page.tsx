import { projects, services, processSteps, principles, faqs } from "./content";

const Arrow = () => <span aria-hidden="true">↗</span>;

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a className={`brand ${compact ? "brand--compact" : ""}`} href="#top" aria-label="SHUNEI LAB トップへ">
      <span className="brand-mark" aria-hidden="true"><b>SL</b><i /></span>
      <span className="brand-copy">
        <strong>SHUNEI LAB</strong>
        {!compact && <small>駿英ラボ</small>}
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <div className="shell header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="メインナビゲーション">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="header-cta" href="#contact">相談する <Arrow /></a>
          <details className="mobile-nav">
            <summary aria-label="メニューを開く"><span /><span /></summary>
            <div>
              <a href="#about">About</a><a href="#work">Work</a>
              <a href="#services">Services</a><a href="#contact">Contact</a>
            </div>
          </details>
        </div>
      </header>

      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-kicker"><span /> DIGITAL PRODUCT STUDIO · TOKYO / JAPAN</div>
        <h1 id="hero-title">技術を、<br /><em>使われる価値</em>へ。</h1>
        <div className="hero-bottom">
          <p>AI・Web・iPhoneアプリ・業務システムを、企画から実装まで。現場の課題を、迷わず使えるデジタルプロダクトに変えます。</p>
          <div className="hero-actions">
            <a className="button button--primary" href="#contact">プロジェクトを相談する <Arrow /></a>
            <a className="text-link" href="#work">制作実績を見る <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="orbit orbit--one" /><div className="orbit orbit--two" />
          <div className="visual-core"><span>SL</span><small>IDEA → IMPACT</small></div>
          <p>Strategy<br />Design<br />Engineering</p>
        </div>
        <div className="hero-meta">
          <span>01 / DISCOVER</span><span>02 / DESIGN</span><span>03 / BUILD</span><span>04 / GROW</span>
        </div>
      </section>

      <section className="statement" aria-label="ブランドステートメント">
        <div className="marquee" aria-hidden="true"><span>BUILD WHAT MATTERS — SHUNEI LAB — BUILD WHAT MATTERS — SHUNEI LAB — </span></div>
      </section>

      <section className="section shell" id="about" aria-labelledby="about-title">
        <div className="section-label"><span>01</span> About</div>
        <div className="about-grid">
          <div>
            <p className="eyebrow">WHY SHUNEI LAB</p>
            <h2 id="about-title">つくる前に、<br />何を解くかから考える。</h2>
          </div>
          <div className="about-copy">
            <p className="lead">SHUNEI LABは、ビジネスと現場の間にある「まだ言葉になっていない課題」を、使える仕組みに変えるデジタルプロダクトスタジオです。</p>
            <p>複数店舗のマネジメントで培った現場視点と、AI・Web・アプリ開発の実装力。その両方を持つからこそ、見た目だけでも、機能だけでもない、本当に定着するプロダクトを目指します。</p>
            <div className="principles">
              {principles.map((item, index) => (
                <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark" id="work" aria-labelledby="work-title">
        <div className="shell">
          <div className="section-label section-label--light"><span>02</span> Selected work</div>
          <div className="section-heading">
            <div><p className="eyebrow">SELECTED PROJECTS</p><h2 id="work-title">課題から、成果まで。</h2></div>
            <p>企画・設計・デザイン・実装を横断し、プロダクトとして一貫した体験をつくります。</p>
          </div>
          <div className="projects">
            {projects.map((project, index) => (
              <article className={`project project--${index + 1}`} key={project.title}>
                <div className="project-visual">
                  <span className="project-number">0{index + 1}</span>
                  {index === 0 ? (
                    <div className="project-showcase" aria-label="琉生くんのぼうけん アプリ画面">
                      <span className="project-live">LIVE iOS PRODUCT</span>
                      <figure className="phone-shot phone-shot--back">
                        <img src="./work/rui/rui-adventure.jpg" alt="琉生くんのぼうけん ブラキオサウルスのプレイ画面" width="739" height="1600" loading="lazy" />
                      </figure>
                      <figure className="phone-shot phone-shot--front">
                        <img src="./work/rui/touch-dino.jpg" alt="琉生くんのぼうけん ティラノサウルスのプレイ画面" width="739" height="1600" loading="lazy" />
                      </figure>
                    </div>
                  ) : (
                    <div className="project-ui" aria-hidden="true">
                      <i /><i /><i /><b>{project.monogram}</b>
                    </div>
                  )}
                </div>
                <div className="project-info">
                  <div><span>{project.type}</span><span>{project.year}</span></div>
                  <h3>{project.title}</h3><p>{project.description}</p>
                  <ul>{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
                  {project.href ? <a href={project.href} target="_blank" rel="noreferrer">View project <Arrow /></a> : <span className="status">{project.status}</span>}
                </div>
              </article>
            ))}
          </div>
          <p className="work-note"><span>+</span> 新しいプロジェクトは、完成後ここへ継続的に追加していきます。</p>
        </div>
      </section>

      <section className="section shell" id="services" aria-labelledby="services-title">
        <div className="section-label"><span>03</span> Services</div>
        <div className="section-heading section-heading--light">
          <div><p className="eyebrow">WHAT I DO</p><h2 id="services-title">構想を、動くものに。</h2></div>
          <p>相談段階の曖昧なアイデアからでも大丈夫です。目的整理から公開後の改善まで、一貫して伴走します。</p>
        </div>
        <div className="service-list">
          {services.map((service, index) => (
            <article key={service.title}>
              <span>0{index + 1}</span><div><h3>{service.title}</h3><small>{service.en}</small></div>
              <p>{service.description}</p><i aria-hidden="true">↗</i>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section" aria-labelledby="process-title">
        <div className="shell">
          <div className="section-label"><span>04</span> Process</div>
          <div className="process-intro"><p className="eyebrow">HOW WE WORK</p><h2 id="process-title">小さく始めて、<br />確かな価値へ育てる。</h2></div>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <article key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell faq" aria-labelledby="faq-title">
        <div className="section-label"><span>05</span> FAQ</div>
        <div className="faq-grid"><h2 id="faq-title">よくあるご質問</h2><div>
          {faqs.map((faq, index) => <details key={faq.q} open={index === 0}><summary>{faq.q}<span>＋</span></summary><p>{faq.a}</p></details>)}
        </div></div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div className="shell contact-inner">
          <div className="section-label section-label--light"><span>06</span> Contact</div>
          <p className="eyebrow">START A PROJECT</p>
          <h2 id="contact-title">次のアイデアを、<br /><em>一緒に形に。</em></h2>
          <div className="contact-bottom">
            <p>「まだ要件が固まっていない」「何から始めるべきか分からない」という段階でも歓迎です。課題やアイデアをお聞かせください。</p>
            <a className="button button--white" href="https://github.com/Shunei-Lab" target="_blank" rel="noreferrer">GitHubから相談する <Arrow /></a>
          </div>
          <div className="contact-note">CONTACT WINDOW <span>現在はGitHubプロフィールから受付中</span></div>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner"><Brand compact /><p>AI × WEB × APP × AUTOMATION</p><div><a href="#top">Back to top ↑</a><small>© 2026 SHUNEI LAB</small></div></div>
      </footer>
    </main>
  );
}
