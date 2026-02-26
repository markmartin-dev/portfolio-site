import './Skills.module.css'

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
            <li className="tech-item"><span className="ti-emoji" aria-hidden="true">&#9989;</span> axe (Deque)</li>
            <li className="tech-item"><i className="devicon-google-plain colored" aria-hidden="true"></i> Lighthouse</li>
            <li className="tech-item"><span className="ti-emoji" aria-hidden="true">&#9855;</span> WCAG 2.1 AA</li>
            <li className="tech-item"><i className="devicon-html5-plain colored" aria-hidden="true"></i> Semantic HTML</li>
            <li className="tech-item"><span className="ti-emoji" aria-hidden="true">&#9675;</span> ARIA</li>
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
            <li className="tech-item"><span className="ti-emoji" aria-hidden="true">&#128230;</span> Parcel</li>
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
  )
}

export default Skills
