'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const scrollTo = (id: string) => {
    closeMenu()
    const target = document.querySelector(id)
    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <a href="#home" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollTo('#home') }}>
          <Image
            src="/Logo.jpeg"
            alt="River Hill Pickleball Eagle Mascot"
            width={48}
            height={48}
            className="nav-logo-img"
          />
          <div className="nav-logo-text">
            River Hill Pickleball
            <span>Club · Est. 2023</span>
          </div>
        </a>

        <ul className="nav-links">
          {['home', 'about', 'events', 'contact'].map((id) => (
            <li key={id}>
              <a href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(`#${id}`) }}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <a href="#events" className="btn-nav" style={{ color: '#0D1B3E' }} onClick={(e) => { e.preventDefault(); scrollTo('#events') }}>
              Join Us
            </a>
          </li>
        </ul>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {['home', 'about', 'events', 'contact'].map((id) => (
          <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(`#${id}`) }}>
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
        <a href="#events" className="btn-nav-mobile" onClick={(e) => { e.preventDefault(); scrollTo('#events') }}>
          Join Us →
        </a>
      </div>
    </>
  )
}
