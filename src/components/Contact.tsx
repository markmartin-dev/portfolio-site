function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="contact-inner">
        <h2 id="contact-heading" className="section-title fade-up">Get In Touch</h2>
        <div className="accent-line fade-up" aria-hidden="true"></div>
        <p className="fade-up">
          Based in Brampton, ON and available for Toronto-area and remote opportunities. Whether you have a role to
          discuss or a project in mind &mdash; reach out through any channel below.
        </p>

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
  )
}

export default Contact
