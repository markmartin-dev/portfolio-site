import './Nav.module.css'
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
      drawer.classList.add('open')
      toggle.classList.add('open')
      toggle.setAttribute('aria-expanded', 'true')
      toggle.setAttribute('aria-label', 'Close navigation menu')
      document.body.style.overflow = 'hidden'
      window.setTimeout(() => drawerClose.focus(), 50)
    }

    const closeDrawer = () => {
      drawer.classList.remove('open')
      toggle.classList.remove('open')
      toggle.setAttribute('aria-expanded', 'false')
      toggle.setAttribute('aria-label', 'Open navigation menu')
      document.body.style.overflow = ''
      toggle.focus()
    }

    const onDrawerKeydown = (event: KeyboardEvent) => {
      if (!drawer.classList.contains('open')) {
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
      if (drawer.classList.contains('open')) {
        closeDrawer()
      } else {
        openDrawer()
      }
    }

    const onDrawerLinkClick = () => closeDrawer()

    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'))
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.nav-links a'))

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

    const drawerLinks = Array.from(drawer.querySelectorAll<HTMLAnchorElement>('.drawer-link'))

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
      <nav aria-label="Primary navigation">
        <a href="#hero" className="nav-brand" aria-label="Mark Martin - go to top">
          <svg viewBox="0 0 120 138" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <defs>
              <linearGradient id="hg_nav" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(174,195,176,0.6)" />
                <stop offset="100%" stopColor="rgba(89,131,146,0.6)" />
              </linearGradient>
            </defs>
            <polygon points="60,7 111,34 111,104 60,131 9,104 9,34" fill="none" stroke="url(#hg_nav)" strokeWidth="8" strokeLinejoin="round" />
            <polyline points="22,96 40,70 57,87 60,83 63,87 80,70 98,96" fill="none" stroke="#29AAD4" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points="57,87 60,83 63,87" fill="none" stroke="#4A3585" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div>
            <div className="nav-brand-name">Mark Martin</div>
            <div className="nav-brand-title" aria-hidden="true">Software Developer</div>
          </div>
        </a>

        <ul className="nav-links" role="list">
          {DRAWER_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <button
          ref={toggleRef}
          className="nav-toggle"
          aria-label="Open navigation menu"
          aria-expanded="false"
          aria-controls="nav-drawer"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </nav>

      <div ref={drawerRef} className="nav-drawer" id="nav-drawer" role="dialog" aria-modal="true" aria-label="Navigation menu">
        <button ref={closeRef} className="nav-drawer-close" aria-label="Close navigation menu">
          &#10005;
        </button>
        <div className="nav-drawer-logo" aria-hidden="true">
          <svg viewBox="0 0 120 138" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <defs>
              <linearGradient id="hg_drawer" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C4CADF" />
                <stop offset="100%" stopColor="#9DD4E0" />
              </linearGradient>
            </defs>
            <polygon points="60,7 111,34 111,104 60,131 9,104 9,34" fill="none" stroke="url(#hg_drawer)" strokeWidth="8" strokeLinejoin="round" />
            <polyline points="22,96 40,70 57,87 60,83 63,87 80,70 98,96" fill="none" stroke="#29AAD4" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points="57,87 60,83 63,87" fill="none" stroke="#4A3585" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {DRAWER_LINKS.map((link) => (
          <a key={link.href} href={link.href} className="drawer-link">
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}

export default Nav
