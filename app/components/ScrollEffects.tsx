'use client'

import { useEffect } from 'react'

export default function ScrollEffects() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Smooth in-page scrolling with a nav-height offset.
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      const a = target?.closest?.('a[href^="#"]') as HTMLAnchorElement | null
      if (!a) return
      const id = a.getAttribute('href')
      if (!id || id === '#') return
      const el = document.querySelector(id)
      if (!el) return
      e.preventDefault()
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 84,
        behavior: reduce ? 'auto' : 'smooth',
      })
    }
    document.addEventListener('click', onClick)

    // Reveal-on-scroll
    const targets = Array.from(document.querySelectorAll('.reveal'))
    let obs: IntersectionObserver | undefined
    let fallback: number | undefined

    if (reduce || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('visible'))
    } else {
      targets.forEach((el, i) => {
        ;(el as HTMLElement).style.transitionDelay = `${Math.min(i % 4, 3) * 70}ms`
      })
      obs = new IntersectionObserver(
        (entries, o) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add('visible')
              o.unobserve(en.target)
            }
          })
        },
        { threshold: 0.12 },
      )
      targets.forEach((el) => obs!.observe(el))
      fallback = window.setTimeout(() => targets.forEach((el) => el.classList.add('visible')), 1600)
    }

    return () => {
      document.removeEventListener('click', onClick)
      obs?.disconnect()
      if (fallback) window.clearTimeout(fallback)
    }
  }, [])

  return null
}
