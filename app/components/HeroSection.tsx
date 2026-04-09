import Image from 'next/image'

export default function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg" />
      <div className="hero-court-lines" />
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-badge">Howard County&apos;s First HS Pickleball Club · Est. 2023</div>
          <h1 className="hero-title">
            River Hill<br />
            <span className="gold">Pickleball</span><br />
            Club
          </h1>
          <p className="hero-sub">
            Building Howard County&apos;s most competitive pickleball community, one rally at a time. Open to all skill levels at River Hill High School, Clarksville MD.
          </p>
          <div className="hero-ctas">
            <a href="#events" className="btn btn-gold">Join Us →</a>
            <a href="#events" className="btn btn-outline">View Events</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-logo-wrap">
            <div className="hero-logo-glow" />
            <Image
              src="/Logo.jpeg"
              alt="River Hill Pickleball Eagle Mascot"
              fill
              className="hero-logo-img"
              priority
              style={{ position: 'absolute' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
