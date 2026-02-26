function Footer() {
  return (
    <footer aria-label="Site footer">
      <div className="footer-logo" aria-hidden="true">
        <svg viewBox="0 0 120 138" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <polygon points="60,7 111,34 111,104 60,131 9,104 9,34" fill="none" stroke="rgba(239,246,224,0.18)" strokeWidth="8" strokeLinejoin="round" />
          <polyline points="22,96 40,70 57,87 60,83 63,87 80,70 98,96" fill="none" stroke="rgba(89,131,146,0.6)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="57,87 60,83 63,87" fill="none" stroke="rgba(89,131,146,0.4)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <p>
        Designed &amp; built by <span>Roentgen Mark Martin</span> &middot; Brampton, ON &middot; <span>mark@roentgenmartin.com</span>
      </p>
      <p style={{ marginTop: '.4rem' }}>
        <small>&#169; 2026 All rights reserved.</small>
      </p>
    </footer>
  )
}

export default Footer
