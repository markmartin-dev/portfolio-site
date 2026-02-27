import styles from './Hero.module.css'
import heroLogo from '../assets/mm-logo.svg'
import resume from '../assets/Mark_Martin_General_Purpose_Resume_v6_ats.pdf'
import { useEffect, useRef } from 'react'

const symbols = ['<', '>', '/>', '{', '}', '()', ';', '=>', '&&', '||', '[]', 'const', 'return', 'import', 'async', 'await', '</>', '.map()', '.then()', 'props', 'state']
const colors = ['rgba(89,131,146,', 'rgba(174,195,176,', 'rgba(41,170,212,', 'rgba(74,53,133,)']
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
    <section ref={sectionRef} id="hero" className={styles.heroWrapper} aria-labelledby="hero-heading">
      <canvas ref={canvasRef} id="hero-canvas" className={styles.heroCanvas} aria-hidden="true"></canvas>
      <div className={styles.heroInner}>
      <img src={heroLogo} alt="Mark Martin Logo" className={styles.heroLogo} />

        <p className={styles.heroTag} aria-label="Status: Available for Opportunities">
          Available for Opportunities
        </p>
        <h1 id="hero-heading" className={styles.heroHeading}>Roentgen Mark Martin</h1>
        <p className={styles.heroDescription}>
          Web Developer building responsive, accessible front-end experiences with React, API integrations, and modern web applications.
        </p>
        <div className={styles.heroButtons}>
          <a href="#contact" className={`${styles.btn} ${styles.btnGhost}`}>Get In Touch</a>
          <a href={resume} download className={`${styles.btn} ${styles.btnDownload}`}>
            <span aria-hidden="true" className='material-symbols-outlined'>download</span> Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
