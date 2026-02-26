import appStyles from './components/AppShell.module.css'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useFadeInOnScroll } from './hooks/useFadeInOnScroll'

function App() {
  useFadeInOnScroll()

  return (
    <>
      <a href="#main-content" className={appStyles.skipLink}>Skip to main content</a>
      <Nav />

      <main id="main-content">
        <Hero />
        <div className={appStyles.sectionDivider} role="separator" aria-hidden="true"></div>
        <Experience />
        <div className={appStyles.sectionDivider} role="separator" aria-hidden="true"></div>
        <Skills />
        <div className={appStyles.sectionDivider} role="separator" aria-hidden="true"></div>
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
