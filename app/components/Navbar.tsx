'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#events', label: 'Events' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const brand = (
    <a href="#home" className="wordmark" onClick={() => setOpen(false)}>
      <Image src="/logo-mark2.jpg" alt="River Hill Pickleball emblem" width={46} height={46} priority />
      <span className="wordmark-text">
        River Hill Pickleball
        <span>Est. 2023 &middot; Clarksville, MD</span>
      </span>
    </a>
  )

  return (
    <>
      <nav className={`navbar${scrolled || open ? ' scrolled' : ''}`}>
        <div className="wrap">
          {brand}
          <ul className="nav-links">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
            <li>
              <a href="#events" className="btn btn-gold btn-sm">
                Join the Club
              </a>
            </li>
          </ul>
          <button
            className={`hamburger${open ? ' open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="#events" className="btn btn-gold" onClick={() => setOpen(false)}>
          Join the Club
        </a>
      </div>
    </>
  )
}
