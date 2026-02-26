import styles from './Footer.module.css'
import mmLogoWhite from '../assets/mm-logo-white.svg'

function Footer() {
  return (
    <footer className={styles.footerWrapper} aria-label="Site footer">
      <img src={mmLogoWhite} className={styles.footerLogo} alt="" />
      {/* <p>
        Designed &amp; built by <span>Roentgen Mark Martin</span> &middot; Brampton, ON &middot; <span>mark@roentgenmartin.com</span>
      </p> */}
      <p style={{ marginTop: '.4rem' }}>
        <small>&#169; 2026 All rights reserved.</small>
      </p>
    </footer>
  )
}

export default Footer
