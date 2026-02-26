function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="section-title fade-up">Core Technical Skills</h2>
      <div className="accent-line fade-up" aria-hidden="true"></div>
      <p className="section-sub fade-up">5+ years of hands-on web development expertise</p>

      <div className="skills-grid">
        <div className="skill-category fade-up" role="region" aria-labelledby="cat-lang">
          <h3 id="cat-lang" className="skill-cat-title">Languages &amp; Frameworks</h3>
          <ul className="tech-list" role="list" aria-label="Languages and Frameworks">
            <li className="tech-item">JavaScript (ES6+)</li>
            <li className="tech-item">TypeScript</li>
            <li className="tech-item">React</li>
            <li className="tech-item">Next.js</li>
            <li className="tech-item">Node.js</li>
            <li className="tech-item">PHP</li>
            <li className="tech-item">HTML5</li>
            <li className="tech-item">CSS3</li>
            <li className="tech-item">SASS</li>
          </ul>
        </div>

        <div className="skill-category fade-up" role="region" aria-labelledby="cat-data">
          <h3 id="cat-data" className="skill-cat-title">Data &amp; APIs</h3>
          <ul className="tech-list" role="list" aria-label="Data and APIs">
            <li className="tech-item">REST APIs</li>
            <li className="tech-item">JSON</li>
            <li className="tech-item">MySQL</li>
            <li className="tech-item">SQL</li>
            <li className="tech-item">TanStack Query</li>
          </ul>
        </div>

        <div className="skill-category fade-up" role="region" aria-labelledby="cat-a11y">
          <h3 id="cat-a11y" className="skill-cat-title">Testing &amp; Accessibility</h3>
          <ul className="tech-list" role="list" aria-label="Testing and Accessibility">
            <li className="tech-item">Cross-browser Testing</li>
            <li className="tech-item">Regression Checks</li>
            <li className="tech-item">axe (Deque)</li>
            <li className="tech-item">Lighthouse</li>
            <li className="tech-item">WCAG 2.1 AA</li>
            <li className="tech-item">Semantic HTML</li>
            <li className="tech-item">ARIA</li>
          </ul>
        </div>

        <div className="skill-category fade-up" role="region" aria-labelledby="cat-cloud">
          <h3 id="cat-cloud" className="skill-cat-title">Cloud &amp; DevOps</h3>
          <ul className="tech-list" role="list" aria-label="Cloud and DevOps">
            <li className="tech-item">AWS S3</li>
            <li className="tech-item">AWS CloudFront</li>
            <li className="tech-item">Git</li>
            <li className="tech-item">GitHub Actions</li>
            <li className="tech-item">Bitbucket Pipelines</li>
          </ul>
        </div>

        <div className="skill-category fade-up" role="region" aria-labelledby="cat-tools">
          <h3 id="cat-tools" className="skill-cat-title">Tools &amp; Workflow</h3>
          <ul className="tech-list" role="list" aria-label="Tools and Workflow">
            <li className="tech-item">Jira</li>
            <li className="tech-item">Figma</li>
            <li className="tech-item">WordPress</li>
            <li className="tech-item">Vite</li>
            <li className="tech-item">Gulp</li>
            <li className="tech-item">Parcel</li>
            <li className="tech-item">Agile / Scrum</li>
            <li className="tech-item">Code Reviews</li>
            <li className="tech-item">Documentation</li>
          </ul>
        </div>

        <div className="skill-category fade-up" role="region" aria-labelledby="cat-perf">
          <h3 id="cat-perf" className="skill-cat-title">Performance</h3>
          <ul className="tech-list" role="list" aria-label="Performance">
            <li className="tech-item">Core Web Vitals</li>
            <li className="tech-item">Bundle Optimization</li>
            <li className="tech-item">Image Optimization</li>
            <li className="tech-item">CDN / CloudFront</li>
            <li className="tech-item">CSS Refactoring</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills
