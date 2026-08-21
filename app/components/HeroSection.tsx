import Image from 'next/image'

export default function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <Image
        className="hero-logo"
        src="/logo-cut.png"
        alt=""
        aria-hidden="true"
        width={880}
        height={880}
        priority
      />
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="hero-eyebrow">Est. 2023 &middot; River Hill High School</span>
          <h1 className="hero-title">
            Howard County&rsquo;s <em>first</em> high&nbsp;school pickleball&nbsp;club
          </h1>
          <p className="hero-sub">Every student. Every level. Just show up and play.</p>
          <div className="hero-ctas">
            <a href="#events" className="btn btn-gold">
              Join the Club
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#about" className="btn btn-outline">
              About the Club
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
