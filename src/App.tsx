import './App.css'

function App() {

  return (
    <>
      {/* Skip to main content */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* NAV */}
      <nav aria-label="Primary navigation">
        <a href="#hero" className="nav-brand" aria-label="Mark Martin — go to top">
          <svg viewBox="0 0 120 138" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <defs><linearGradient id="hg_nav" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="rgba(174,195,176,0.6)"/><stop offset="100%" stopColor="rgba(89,131,146,0.6)"/></linearGradient></defs>
            <polygon points="60,7 111,34 111,104 60,131 9,104 9,34" fill="none" stroke="url(#hg_nav)" strokeWidth="8" strokeLinejoin="round"/>
            <polyline points="22,96 40,70 57,87 60,83 63,87 80,70 98,96" fill="none" stroke="#29AAD4" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="57,87 60,83 63,87" fill="none" stroke="#4A3585" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div>
            <div className="nav-brand-name">Mark Martin</div>
            <div className="nav-brand-title" aria-hidden="true">Software Developer</div>
          </div>
        </a>
        <ul className="nav-links" role="list">
          <li><a href="#hero">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="nav-toggle" id="nav-toggle" aria-label="Open navigation menu" aria-expanded="false" aria-controls="nav-drawer">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </nav>

    {/* MOBILE DRAWER */}
    <div className="nav-drawer" id="nav-drawer" role="dialog" aria-modal="true" aria-label="Navigation menu">
      <button className="nav-drawer-close" id="nav-drawer-close" aria-label="Close navigation menu">&#10005;</button>
      <div className="nav-drawer-logo" aria-hidden="true">
        <svg viewBox="0 0 120 138" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <defs><linearGradient id="hg_drawer" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C4CADF"/><stop offset="100%" stopColor="#9DD4E0"/></linearGradient></defs>
          <polygon points="60,7 111,34 111,104 60,131 9,104 9,34" fill="none" stroke="url(#hg_drawer)" strokeWidth="8" strokeLinejoin="round"/>
          <polyline points="22,96 40,70 57,87 60,83 63,87 80,70 98,96" fill="none" stroke="#29AAD4" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="57,87 60,83 63,87" fill="none" stroke="#4A3585" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <a href="#hero" className="drawer-link">About</a>
      <a href="#experience" className="drawer-link">Experience</a>
      <a href="#skills" className="drawer-link">Skills</a>
      <a href="#contact" className="drawer-link">Contact</a>
    </div>
    {/* MAIN CONTENT */}
<main id="main-content">

  {/* HERO */}
  <section id="hero" aria-labelledby="hero-heading">
    <canvas id="hero-canvas" aria-hidden="true"></canvas>
    <div className="hero-inner">
      <div className="hero-logo" aria-hidden="true">
        <svg viewBox="0 0 120 138" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <defs><linearGradient id="hg_hero" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C4CADF"/><stop offset="50%" stopColor="#A8C4DC"/><stop offset="100%" stopColor="#9DD4E0"/></linearGradient></defs>
          <polygon points="60,7 111,34 111,104 60,131 9,104 9,34" fill="none" stroke="url(#hg_hero)" strokeWidth="8" strokeLinejoin="round"/>
          <polyline points="22,96 40,70 57,87 60,83 63,87 80,70 98,96" fill="none" stroke="#29AAD4" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="57,87 60,83 63,87" fill="none" stroke="#4A3585" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <p className="hero-tag" aria-label="Status: Available for Opportunities">Available for Opportunities</p>
      <h1 id="hero-heading">Roentgen Mark Martin</h1>
      <p>Software Developer specializing in React &amp; JavaScript front-end engineering, API integration, and cloud-connected web applications &mdash; 5+ years of production experience.</p>
      <div className="hero-btns">
        <a href="#contact" className="btn btn-ghost">Get In Touch</a>
        <a href="Mark_Martin_EunaSolutions_Software_Developer_Resume.pdf" download className="btn btn-download">
          <span aria-hidden="true">&#11015;</span> Download Resume
        </a>
      </div>
    </div>
  </section>
  <div className="section-divider" role="separator" aria-hidden="true"></div>

  {/* EXPERIENCE */}
  <section id="experience" aria-labelledby="experience-heading">
    <h2 id="experience-heading" className="section-title fade-up">Professional Experience</h2>
    <div className="accent-line fade-up" aria-hidden="true"></div>
    <p className="section-sub fade-up">Building impactful web products since 2019</p>
    <div className="timeline" role="list">
      <article className="timeline-item fade-up" role="listitem">
        <div className="tl-dot" aria-hidden="true"></div>
        <div className="tl-card">
          <p className="tl-company">Idea Theorem Inc. &mdash; Toronto, ON</p>
          <h3 className="tl-role">Senior Web Developer</h3>
          <p className="tl-date"><time dateTime="2024-05">May 2024</time> &ndash; <time dateTime="2025-03">Mar 2025</time></p>
          <ul aria-label="Responsibilities and achievements">
            <li>Built and maintained React-based UI components for production apps, improving delivery speed via reusable patterns.</li>
            <li>Integrated API-driven features to support reliable user experiences across production apps.</li>
            <li>Achieved 40% decrease in load time by optimizing images, reducing bundle size &amp; refactoring CSS (Core Web Vitals).</li>
            <li>Improved accessibility audit scores by 25% applying WCAG 2.1 AA standards using axe &amp; Lighthouse.</li>
            <li>Configured AWS S3 + CloudFront for asset delivery across production pages.</li>
            <li>Collaborated in Agile sprints; participated in peer code reviews and iterative releases.</li>
          </ul>
        </div>
      </article>
      <article className="timeline-item fade-up" role="listitem">
        <div className="tl-dot" aria-hidden="true"></div>
        <div className="tl-card">
          <p className="tl-company">Idea Theorem Inc. &mdash; Toronto, ON</p>
          <h3 className="tl-role">Junior Web Developer</h3>
          <p className="tl-date"><time dateTime="2019-07">Jul 2019</time> &ndash; <time dateTime="2024-05">May 2024</time></p>
          <ul aria-label="Responsibilities and achievements">
            <li>Developed responsive front-end experiences using HTML5, CSS/SASS, JavaScript &amp; React.</li>
            <li>Supported React/Next.js UI updates, component enhancements, bug fixes &amp; API-connected user flows.</li>
            <li>Worked with PHP-based &amp; CMS-driven websites for front-end customization and structured content delivery.</li>
            <li>Translated Figma designs into responsive layouts, reducing QA layout issues by 30%.</li>
            <li>Resolved 100+ rendering and layout issues through cross-browser testing &amp; regression checks.</li>
            <li>Collaborated in Agile sprints using Jira and Git/Bitbucket.</li>
          </ul>
        </div>
      </article>
    </div>

    <h2 id="education-heading" className="section-title fade-up" style={{ marginTop: '4rem' }}>Education</h2>
    <div className="accent-line fade-up" aria-hidden="true"></div>
    <div className="edu-cards fade-up" role="list" aria-labelledby="education-heading">
      <article className="edu-card" role="listitem">
        <p className="edu-school">Humber Polytechnic</p>
        <h3 className="edu-degree">Web Development Program</h3>
        <p className="edu-year"><time dateTime="2018">2018</time> &ndash; <time dateTime="2019">2019</time> &middot; Toronto, Canada</p>
      </article>
      <article className="edu-card" role="listitem">
        <p className="edu-school">Universidad de Dagupan</p>
        <h3 className="edu-degree">B.S. Computer Science</h3>
        <p className="edu-year"><time dateTime="2008">2008</time> &ndash; <time dateTime="2013">2013</time> &middot; Philippines</p>
      </article>
    </div>
  </section>
  <div className="section-divider" role="separator" aria-hidden="true"></div>

  {/* SKILLS */}
  <section id="skills" aria-labelledby="skills-heading">
    <h2 id="skills-heading" className="section-title fade-up">Core Technical Skills</h2>
    <div className="accent-line fade-up" aria-hidden="true"></div>
    <p className="section-sub fade-up">5+ years of hands-on web development expertise</p>
    <div className="skills-grid">

      <div className="skill-category fade-up" role="region" aria-labelledby="cat-lang">
        <h3 id="cat-lang" className="skill-cat-title">Languages &amp; Frameworks</h3>
        <ul className="tech-list" role="list" aria-label="Languages and Frameworks">
          <li className="tech-item"><i className="devicon-javascript-plain colored" aria-hidden="true"></i> JavaScript (ES6+)</li>
          <li className="tech-item"><i className="devicon-typescript-plain colored" aria-hidden="true"></i> TypeScript</li>
          <li className="tech-item"><i className="devicon-react-original colored" aria-hidden="true"></i> React</li>
          <li className="tech-item"><i className="devicon-nextjs-plain" aria-hidden="true"></i> Next.js</li>
          <li className="tech-item"><i className="devicon-nodejs-plain colored" aria-hidden="true"></i> Node.js</li>
          <li className="tech-item"><i className="devicon-php-plain colored" aria-hidden="true"></i> PHP</li>
          <li className="tech-item"><i className="devicon-html5-plain colored" aria-hidden="true"></i> HTML5</li>
          <li className="tech-item"><i className="devicon-css3-plain colored" aria-hidden="true"></i> CSS3</li>
          <li className="tech-item"><i className="devicon-sass-plain colored" aria-hidden="true"></i> SASS</li>
        </ul>
      </div>

      <div className="skill-category fade-up" role="region" aria-labelledby="cat-data">
        <h3 id="cat-data" className="skill-cat-title">Data &amp; APIs</h3>
        <ul className="tech-list" role="list" aria-label="Data and APIs">
          <li className="tech-item"><span className="ti-emoji" aria-hidden="true">&#128279;</span> REST APIs</li>
          <li className="tech-item"><span className="ti-emoji" aria-hidden="true">&#128196;</span> JSON</li>
          <li className="tech-item"><i className="devicon-mysql-plain colored" aria-hidden="true"></i> MySQL</li>
          <li className="tech-item"><span className="ti-emoji" aria-hidden="true">&#128451;</span> SQL</li>
          <li className="tech-item"><i className="devicon-reactrouter-plain colored" aria-hidden="true"></i> TanStack Query</li>
        </ul>
      </div>

      <div className="skill-category fade-up" role="region" aria-labelledby="cat-a11y">
        <h3 id="cat-a11y" className="skill-cat-title">Testing &amp; Accessibility</h3>
        <ul className="tech-list" role="list" aria-label="Testing and Accessibility">
          <li className="tech-item"><span className="ti-emoji" aria-hidden="true">&#127760;</span> Cross-browser Testing</li>
          <li className="tech-item"><span className="ti-emoji" aria-hidden="true">&#128260;</span> Regression Checks</li>
          <li className="tech-item">
            <span className="ti-img" aria-hidden="true"><img src="data:image/jpeg;base64,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" alt=""/></span> aXe (Deque)
          </li>
          <li className="tech-item"><i className="devicon-google-plain colored" aria-hidden="true"></i> Lighthouse</li>
          <li className="tech-item"><span className="ti-emoji" aria-hidden="true">&#9855;</span> WCAG 2.1 AA</li>
          <li className="tech-item"><i className="devicon-html5-plain colored" aria-hidden="true"></i> Semantic HTML</li>
          <li className="tech-item">
            <span className="ti-svg" aria-hidden="true">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><circle cx="12" cy="4" r="2"/><path d="M15.5 8.5A3.5 3.5 0 0 0 12 5a3.5 3.5 0 0 0-3.5 3.5V13h2v-2h3v2h2V8.5zM10.5 9V8.5a1.5 1.5 0 0 1 3 0V9h-3zM9 14l-2 7h2l1-3.5L11.5 20h1l1.5-2.5L15 21h2l-2-7H9z"/></svg>
            </span> ARIA
          </li>
        </ul>
      </div>

      <div className="skill-category fade-up" role="region" aria-labelledby="cat-cloud">
        <h3 id="cat-cloud" className="skill-cat-title">Cloud &amp; DevOps</h3>
        <ul className="tech-list" role="list" aria-label="Cloud and DevOps">
          <li className="tech-item"><i className="devicon-amazonwebservices-plain-wordmark colored" aria-hidden="true"></i> AWS S3</li>
          <li className="tech-item"><i className="devicon-amazonwebservices-plain-wordmark colored" aria-hidden="true"></i> AWS CloudFront</li>
          <li className="tech-item"><i className="devicon-git-plain colored" aria-hidden="true"></i> Git</li>
          <li className="tech-item"><i className="devicon-github-plain" aria-hidden="true"></i> GitHub Actions</li>
          <li className="tech-item"><i className="devicon-bitbucket-plain colored" aria-hidden="true"></i> Bitbucket Pipelines</li>
        </ul>
      </div>

      <div className="skill-category fade-up" role="region" aria-labelledby="cat-tools">
        <h3 id="cat-tools" className="skill-cat-title">Tools &amp; Workflow</h3>
        <ul className="tech-list" role="list" aria-label="Tools and Workflow">
          <li className="tech-item"><i className="devicon-jira-plain colored" aria-hidden="true"></i> Jira</li>
          <li className="tech-item"><i className="devicon-figma-plain colored" aria-hidden="true"></i> Figma</li>
          <li className="tech-item"><i className="devicon-wordpress-plain colored" aria-hidden="true"></i> WordPress</li>
          <li className="tech-item"><i className="devicon-vitejs-plain colored" aria-hidden="true"></i> Vite</li>
          <li className="tech-item"><i className="devicon-gulp-plain colored" aria-hidden="true"></i> Gulp</li>
          <li className="tech-item">
            <span className="ti-svg" aria-hidden="true">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M21 8.5l-9-5-9 5v7l9 5 9-5v-7zm-9-3.3L19.5 9 12 12.8 4.5 9 12 5.2zM3 10.2l8 4.4V19l-8-4.4v-4.4zm10 8.8v-4.4l8-4.4v4.4l-8 4.4z"/></svg>
            </span> Parcel
          </li>
          <li className="tech-item"><span className="ti-emoji" aria-hidden="true">&#128257;</span> Agile / Scrum</li>
          <li className="tech-item"><span className="ti-emoji" aria-hidden="true">&#128065;</span> Code Reviews</li>
          <li className="tech-item"><span className="ti-emoji" aria-hidden="true">&#128221;</span> Documentation</li>
        </ul>
      </div>

      <div className="skill-category fade-up" role="region" aria-labelledby="cat-perf">
        <h3 id="cat-perf" className="skill-cat-title">Performance</h3>
        <ul className="tech-list" role="list" aria-label="Performance">
          <li className="tech-item"><span className="ti-emoji" aria-hidden="true">&#9889;</span> Core Web Vitals</li>
          <li className="tech-item"><span className="ti-emoji" aria-hidden="true">&#128230;</span> Bundle Optimization</li>
          <li className="tech-item"><span className="ti-emoji" aria-hidden="true">&#128444;</span> Image Optimization</li>
          <li className="tech-item"><span className="ti-emoji" aria-hidden="true">&#127785;</span> CDN / CloudFront</li>
          <li className="tech-item"><span className="ti-emoji" aria-hidden="true">&#127912;</span> CSS Refactoring</li>
        </ul>
      </div>

    </div>
  </section>
  <div className="section-divider" role="separator" aria-hidden="true"></div>

  {/* CONTACT */}
  <section id="contact" aria-labelledby="contact-heading">
    <div className="contact-inner">
      <h2 id="contact-heading" className="section-title fade-up">Get In Touch</h2>
      <div className="accent-line fade-up" aria-hidden="true"></div>
      <p className="fade-up">Based in Brampton, ON and available for Toronto-area and remote opportunities. Whether you have a role to discuss or a project in mind &mdash; reach out through any channel below.</p>
      <div className="contact-cards fade-up" role="list">
        <a href="mailto:mark@roentgenmartin.com" className="contact-card" role="listitem" aria-label="Send email to mark@roentgenmartin.com">
          <span className="contact-card-icon" aria-hidden="true">&#9993;&#65039;</span>
          <span className="contact-card-label">Email</span>
          <span className="contact-card-value">mark@roentgenmartin.com</span>
        </a>
        <a href="tel:6472165701" className="contact-card" role="listitem" aria-label="Call 647-216-5701">
          <span className="contact-card-icon" aria-hidden="true">&#128222;</span>
          <span className="contact-card-label">Phone</span>
          <span className="contact-card-value">647-216-5701</span>
        </a>
        <a href="https://linkedin.com/in/markmartin" target="_blank" rel="noopener noreferrer" className="contact-card" role="listitem" aria-label="Visit LinkedIn profile (opens in new tab)">
          <span className="contact-card-icon" aria-hidden="true">&#128188;</span>
          <span className="contact-card-label">LinkedIn</span>
          <span className="contact-card-value">linkedin.com/in/markmartin</span>
        </a>
        <a href="https://github.com/markmartin" target="_blank" rel="noopener noreferrer" className="contact-card" role="listitem" aria-label="Visit GitHub profile (opens in new tab)">
          <span className="contact-card-icon" aria-hidden="true">&#128025;</span>
          <span className="contact-card-label">GitHub</span>
          <span className="contact-card-value">github.com/markmartin</span>
        </a>
      </div>
      <div className="availability fade-up" role="status" aria-live="polite" aria-label="Availability status: Open to work in Toronto and remote, full-time or contract">
        <div className="avail-dot" aria-hidden="true"></div>
        <p className="avail-text"><strong>Open to work</strong> &middot; Toronto &amp; remote &middot; Full-time or contract</p>
      </div>
    </div>
  </section>

    </main>

    {/* FOOTER */}
    <footer aria-label="Site footer">
      <div className="footer-logo" aria-hidden="true">
        <svg viewBox="0 0 120 138" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <polygon points="60,7 111,34 111,104 60,131 9,104 9,34" fill="none" stroke="rgba(239,246,224,0.18)" strokeWidth="8" strokeLinejoin="round"/>
          <polyline points="22,96 40,70 57,87 60,83 63,87 80,70 98,96" fill="none" stroke="rgba(89,131,146,0.6)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="57,87 60,83 63,87" fill="none" stroke="rgba(89,131,146,0.4)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <p>Designed &amp; built by <span>Roentgen Mark Martin</span> &middot; Brampton, ON &middot; <span>mark@roentgenmartin.com</span></p>
      <p style={{ marginTop: '.4rem' }}><small>&#169; 2026 All rights reserved.</small></p>
    </footer>
    </>
  )
}

export default App

