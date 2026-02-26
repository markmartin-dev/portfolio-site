import { useEffect } from 'react'

export function useFadeInOnScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.fade-up'))

    if (prefersReduced) {
      elements.forEach((el) => el.classList.add('visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
