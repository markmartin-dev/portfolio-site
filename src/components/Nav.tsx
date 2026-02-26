import styles from './Nav.module.css'
import navBarLogo from '../assets/mm-logo.svg'
import { useEffect, useRef } from 'react'

const DRAWER_LINKS = [
  { href: '#hero', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

function Nav() {
  const toggleRef = useRef<HTMLButtonElement>(null)
  const drawerRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const toggle = toggleRef.current
    const drawer = drawerRef.current
    const drawerClose = closeRef.current

    if (!toggle || !drawer || !drawerClose) {
      return
    }

    const focusableSelectors = 'a[href], button:not([disabled])'

    const openDrawer = () => {
      drawer.classList.add(styles.open)
      toggle.classList.add(styles.open)
      toggle.setAttribute('aria-expanded', 'true')
      toggle.setAttribute('aria-label', 'Close navigation menu')
      document.body.style.overflow = 'hidden'
      window.setTimeout(() => drawerClose.focus(), 50)
    }

    const closeDrawer = () => {
      drawer.classList.remove(styles.open)
      toggle.classList.remove(styles.open)
      toggle.setAttribute('aria-expanded', 'false')
      toggle.setAttribute('aria-label', 'Open navigation menu')
      document.body.style.overflow = ''
      toggle.focus()
    }

    const onDrawerKeydown = (event: KeyboardEvent) => {
      if (!drawer.classList.contains(styles.open)) {
        return
      }

      const focusable = Array.from(drawer.querySelectorAll<HTMLElement>(focusableSelectors))
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.key === 'Tab' && first && last) {
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }

      if (event.key === 'Escape') {
        closeDrawer()
      }
    }

    const onToggleClick = () => {
      if (drawer.classList.contains(styles.open)) {
        closeDrawer()
      } else {
        openDrawer()
      }
    }

    const onDrawerLinkClick = () => closeDrawer()

    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'))
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(`.${styles.navLinks} a`))

    const updateNav = () => {
      let current = ''
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 120) {
          current = section.id
        }
      })

      navLinks.forEach((link) => {
        const isCurrent = link.getAttribute('href') === `#${current}`
        link.style.color = isCurrent ? '#AEC3B0' : ''
        if (isCurrent) {
          link.setAttribute('aria-current', 'page')
        } else {
          link.removeAttribute('aria-current')
        }
      })
    }

    const drawerLinks = Array.from(drawer.querySelectorAll<HTMLAnchorElement>(`.${styles.drawerLink}`))

    drawer.addEventListener('keydown', onDrawerKeydown)
    toggle.addEventListener('click', onToggleClick)
    drawerClose.addEventListener('click', closeDrawer)
    drawerLinks.forEach((link) => link.addEventListener('click', onDrawerLinkClick))
    window.addEventListener('scroll', updateNav)
    updateNav()

    return () => {
      drawer.removeEventListener('keydown', onDrawerKeydown)
      toggle.removeEventListener('click', onToggleClick)
      drawerClose.removeEventListener('click', closeDrawer)
      drawerLinks.forEach((link) => link.removeEventListener('click', onDrawerLinkClick))
      window.removeEventListener('scroll', updateNav)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <>
      <nav className={styles.navBar} aria-label="Primary navigation">
        <a href="#hero" className={styles.navBrand} aria-label="Mark Martin - go to top">
          <img src={navBarLogo} className={styles.navBarLogo} alt="Mark Martin Logo" />
          <div>
            <div className={styles.navBrandName}>Mark Martin</div>
            <div className={styles.navBrandTitle} aria-hidden="true">Software Developer</div>
          </div>
        </a>

        <ul className={styles.navLinks} role="list">
          {DRAWER_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <button
          ref={toggleRef}
          className={styles.navToggle}
          aria-label="Open navigation menu"
          aria-expanded="false"
          aria-controls="nav-drawer"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </nav>

      <div ref={drawerRef} className={styles.navDrawer} id="nav-drawer" role="dialog" aria-modal="true" aria-label="Navigation menu">
        <button ref={closeRef} className={styles.navDrawerClose} aria-label="Close navigation menu">
          &#10005;
        </button>
        <div className={styles.navDrawerLogo} aria-hidden="true">
          <img src={navBarLogo} alt="Mark Martin Logo" className={styles.navDrawerLogo}/>
        </div>

        {DRAWER_LINKS.map((link) => (
          <a key={link.href} href={link.href} className={styles.drawerLink}>
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}

export default Nav
