import { useEffect, useRef } from 'react'

const symbols = ['<', '>', '/>', '{', '}', '()', ';', '=>', '&&', '||', '[]', 'const', 'return', 'import', 'async', 'await', '</>', '.map()', '.then()', 'props', 'state']
const colors = ['rgba(89,131,146,', 'rgba(174,195,176,', 'rgba(41,170,212,', 'rgba(74,53,133,']

type Particle = {
  x: number
  y: number
  text: string
  size: number
  speed: number
  opacity: number
  color: string
  drift: number
}

function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const section = sectionRef.current
    const canvas = canvasRef.current

    if (prefersReduced || !section || !canvas) {
      return
    }

    const ctx = canvas.getContext('2d')
    if (!ctx) {
      return
    }

    let particles: Particle[] = []
    let frame = 0

    const resizeCanvas = () => {
      canvas.width = section.offsetWidth
      canvas.height = section.offsetHeight
    }

    const makeParticle = (randomY: boolean): Particle => {
      const color = colors[Math.floor(Math.random() * colors.length)]
      return {
        x: Math.random() * canvas.width,
        y: randomY ? Math.random() * canvas.height : canvas.height + 20,
        text: symbols[Math.floor(Math.random() * symbols.length)],
        size: Math.floor(Math.random() * 8 + 10),
        speed: Math.random() * 0.35 + 0.12,
        opacity: Math.random() * 0.14 + 0.04,
        color,
        drift: (Math.random() - 0.5) * 0.25,
      }
    }

    const initParticles = () => {
      particles = []
      for (let i = 0; i < 45; i += 1) {
        particles.push(makeParticle(true))
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i]
        ctx.font = `${p.size}px "Courier New", monospace`
        ctx.fillStyle = `${p.color}${p.opacity})`
        ctx.fillText(p.text, p.x, p.y)
        p.y -= p.speed
        p.x += p.drift

        if (p.y < -30) {
          particles[i] = makeParticle(false)
        }
      }

      frame = window.requestAnimationFrame(animate)
    }

    const onResize = () => {
      resizeCanvas()
      initParticles()
    }

    resizeCanvas()
    initParticles()
    animate()
    window.addEventListener('resize', onResize)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('resize', onResize)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  }, [])

  return (
    <section ref={sectionRef} id="hero" aria-labelledby="hero-heading">
      <canvas ref={canvasRef} id="hero-canvas" aria-hidden="true"></canvas>
      <div className="hero-inner">
        <div className="hero-logo" aria-hidden="true">
          <svg viewBox="0 0 120 138" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <defs>
              <linearGradient id="hg_hero" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C4CADF" />
                <stop offset="50%" stopColor="#A8C4DC" />
                <stop offset="100%" stopColor="#9DD4E0" />
              </linearGradient>
            </defs>
            <polygon points="60,7 111,34 111,104 60,131 9,104 9,34" fill="none" stroke="url(#hg_hero)" strokeWidth="8" strokeLinejoin="round" />
            <polyline points="22,96 40,70 57,87 60,83 63,87 80,70 98,96" fill="none" stroke="#29AAD4" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points="57,87 60,83 63,87" fill="none" stroke="#4A3585" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <p className="hero-tag" aria-label="Status: Available for Opportunities">
          Available for Opportunities
        </p>
        <h1 id="hero-heading">Roentgen Mark Martin</h1>
        <p>
          Software Developer specializing in React &amp; JavaScript front-end engineering, API integration, and cloud-connected
          web applications &mdash; 5+ years of production experience.
        </p>
        <div className="hero-btns">
          <a href="#contact" className="btn btn-ghost">Get In Touch</a>
          <a href="Mark_Martin_EunaSolutions_Software_Developer_Resume.pdf" download className="btn btn-download">
            <span aria-hidden="true">&#11015;</span> Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
