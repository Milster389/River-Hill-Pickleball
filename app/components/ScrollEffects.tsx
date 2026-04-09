'use client'

import { useEffect } from 'react'

export default function ScrollEffects() {
  useEffect(() => {
    // Intersection Observer for fade-in on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll<HTMLElement>('.event-card, .about-card, .gallery-item, .stat-item').forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(24px)'
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
      observer.observe(el)
    })

    // Active nav link on scroll
    const sections = document.querySelectorAll<HTMLElement>('section[id], footer[id]')
    const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-links a')

    const handleScroll = () => {
      let current = ''
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 100) {
          current = section.getAttribute('id') || ''
        }
      })
      navLinks.forEach((link) => {
        link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--gold)' : ''
      })
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return null
}
