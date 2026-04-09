import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-grid">
        <div>
          <div className="section-tag">Our Story</div>
          <h2 className="section-title">
            More Than a Club:<br /><em>A Movement</em>
          </h2>
          <div className="about-text">
            <p>
              River Hill Pickleball Club was <strong>founded in 2023 at River Hill High School</strong> in Clarksville, MD, making it the <strong>first high school pickleball club in all of Howard County</strong>.
            </p>
            <p>
              What started as a vision to bring the fastest-growing sport in America to our school has grown into a community of <strong>80+ members</strong> from first-time players to competitive athletes.
            </p>
          </div>
          <ul className="about-list">
            <li>Open to all skill levels, complete beginners welcome</li>
            <li>Competitive team culture and tournament opportunities</li>
            <li>Growing a sport that is one of the fastest-rising in the US</li>
            <li>A welcoming space for every student at RHHS</li>
            <li>Community outreach and local tournament representation</li>
          </ul>
        </div>

        <div>
          <div className="about-cards">
            <div className="about-card">
              <div className="about-card-title">Our Mission</div>
              <div className="about-card-body">Grow the sport of pickleball in our school and community, build a competitive team culture, and create a welcoming space for everyone.</div>
            </div>
            <div className="about-card">
              <div className="about-card-title">Where We Play</div>
              <div className="about-card-body">River Hill High School in Clarksville, MD. Meeting times are announced in our GroupMe and on Instagram. Follow us to stay in the loop.</div>
            </div>
            <div className="about-card">
              <div className="about-card-title">Who Can Join</div>
              <div className="about-card-body">Any River Hill HS student. No experience needed, just bring your energy. Equipment available for new players.</div>
            </div>
          </div>

          <div className="jersey-showcase">
            <div className="jersey-img">
              <div className="jersey-img-inner" style={{ position: 'relative', width: '100%', aspectRatio: '9/10' }}>
                <Image
                  src="/Front of Pball Jersey.jpg"
                  alt="River Hill Pickleball Jersey Front"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="jersey-caption">Jersey Front</div>
            </div>
            <div className="jersey-img">
              <div className="jersey-img-inner" style={{ position: 'relative', width: '100%', aspectRatio: '9/10' }}>
                <Image
                  src="/Back of pball jersey 25.jpg"
                  alt="River Hill Pickleball Jersey Back"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="jersey-caption">Jersey Back</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
