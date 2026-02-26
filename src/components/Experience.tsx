function Experience() {
  return (
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
            <p className="tl-date">
              <time dateTime="2024-05">May 2024</time> &ndash; <time dateTime="2025-03">Mar 2025</time>
            </p>
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
            <p className="tl-date">
              <time dateTime="2019-07">Jul 2019</time> &ndash; <time dateTime="2024-05">May 2024</time>
            </p>
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
          <p className="edu-year">
            <time dateTime="2018">2018</time> &ndash; <time dateTime="2019">2019</time> &middot; Toronto, Canada
          </p>
        </article>
        <article className="edu-card" role="listitem">
          <p className="edu-school">Universidad de Dagupan</p>
          <h3 className="edu-degree">B.S. Computer Science</h3>
          <p className="edu-year">
            <time dateTime="2008">2008</time> &ndash; <time dateTime="2013">2013</time> &middot; Philippines
          </p>
        </article>
      </div>
    </section>
  )
}

export default Experience
