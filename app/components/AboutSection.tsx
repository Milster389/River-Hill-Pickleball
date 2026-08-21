import Image from 'next/image'

const facts = [
  { k: 'When', v: 'Times drop in the GroupMe and on Instagram.' },
  { k: 'Where', v: 'River Hill High School, Clarksville, MD.' },
  { k: 'Who', v: 'Any River Hill student. Paddles provided.' },
]

export default function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="wrap">
        <div className="about-grid">
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 className="section-title">
              More than a club. <em>A&nbsp;movement.</em>
            </h2>
            <div className="about-copy">
              <p>
                <strong>Founded in 2023</strong> at River Hill High School. The{' '}
                <strong>first high school pickleball club in Howard County</strong>.
              </p>
              <p>Now 80+ members strong, from first-time players to competitive athletes.</p>
            </div>
            <div className="facts">
              {facts.map((f) => (
                <div className="fact" key={f.k}>
                  <div className="fact-k">{f.k}</div>
                  <div className="fact-v">{f.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="jerseys">
            <div className="jersey reveal">
              <div className="jersey-img">
                <Image src="/jersey-front.jpg" alt="River Hill Pickleball jersey front" fill sizes="(max-width: 980px) 45vw, 260px" />
              </div>
              <div className="jersey-cap">Jersey Front</div>
            </div>
            <div className="jersey reveal">
              <div className="jersey-img">
                <Image src="/jersey-back.jpg" alt="River Hill Pickleball jersey back" fill sizes="(max-width: 980px) 45vw, 260px" />
              </div>
              <div className="jersey-cap">Jersey Back</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
