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
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav />

      <main id="main-content">
        <Hero />
        <div className="section-divider" role="separator" aria-hidden="true"></div>
        <Experience />
        <div className="section-divider" role="separator" aria-hidden="true"></div>
        <Skills />
        <div className="section-divider" role="separator" aria-hidden="true"></div>
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
