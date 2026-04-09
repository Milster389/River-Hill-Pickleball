// ─── CURRENT EVENTS ────────────────────────────────────────────────────────
// To show an event: active: true  |  To hide: active: false
// link: Google Form URL, or '' for no button
interface CurrentEvent { active: boolean; date: string; title: string; location: string; desc: string; tags: string[]; link: string }
const currentEvents: CurrentEvent[] = [
  // {
  //   active: true,
  //   date: 'May 15',
  //   title: 'Next Event Title',
  //   location: 'River Hill HS',
  //   desc: 'Description here.',
  //   tags: ['Tag1', 'Tag2'],
  //   link: '',
  // },
]

// ─── PAST EVENTS ───────────────────────────────────────────────────────────
// Add past events here after they happen. Newest first.
interface PastEvent { date: string; title: string; desc: string; tags: string[] }
const pastEvents: PastEvent[] = [
  {
    date: 'Apr 11, 2025',
    title: 'Club Fundraiser with Heroes United',
    desc: 'Come support the River Hill Pickleball Club and Heroes United at our fundraiser for the HoCo Police Foundation!',
    tags: ['Fundraiser', 'Community'],
  },
]
// ───────────────────────────────────────────────────────────────────────────

const activeEvents = currentEvents.filter((e) => e.active)

export default function EventsSection() {
  return (
    <section id="events">
      {/* Header */}
      <div className="events-header">
        <div>
          <div className="section-tag">Get Involved</div>
          <h2 className="section-title">
            Events &amp;<br /><em>Connect With Us</em>
          </h2>
        </div>
        <p style={{ color: 'var(--white-dim)', fontSize: '0.9rem', maxWidth: '300px', textAlign: 'right' }}>
          Follow us on Instagram and join the GroupMe to stay up to date on everything.
        </p>
      </div>

      {/* Instagram + GroupMe cards */}
      <div className="connect-grid">
        <a
          href="https://www.instagram.com/rhhspickleball/"
          target="_blank"
          rel="noopener noreferrer"
          className="connect-card"
        >
          <div className="connect-card-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" width="36" height="36">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </div>
          <div className="connect-card-label">Instagram</div>
          <div className="connect-card-handle">@rhhspickleball</div>
          <div className="connect-card-desc">Photos, announcements, and event updates.</div>
          <div className="connect-card-btn">Follow Us</div>
        </a>

        <a
          href="https://groupme.com/join_group/103600066/Ve5FZ2w1"
          target="_blank"
          rel="noopener noreferrer"
          className="connect-card"
        >
          <div className="connect-card-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" width="36" height="36">
              <path d="M12 0C5.373 0 0 4.925 0 11c0 3.472 1.677 6.558 4.3 8.605L3 24l4.578-2.307C8.951 22.218 10.438 22.5 12 22.5c6.627 0 12-4.925 12-11S18.627 0 12 0zm1.2 14.8H7.2v-1.6h6v1.6zm3.2-3.2H7.2V10h9.2v1.6z" />
            </svg>
          </div>
          <div className="connect-card-label">GroupMe</div>
          <div className="connect-card-handle">80+ members</div>
          <div className="connect-card-desc">Meeting times and club news announced here first.</div>
          <div className="connect-card-btn">Join the Group</div>
        </a>
      </div>

      {/* Current Events — only shows when there are active ones */}
      {activeEvents.length > 0 && (
        <div style={{ marginTop: '4rem' }}>
          <div className="section-tag">Coming Up</div>
          <h3 className="section-title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '2rem' }}>
            Upcoming <em>Events</em>
          </h3>
          <div className="events-grid">
            {activeEvents.map((ev) => {
              const [month, day] = ev.date.split(' ')
              return (
                <div key={ev.title} className="event-card">
                  <div className="event-card-top">
                    <div className="event-date-badge">
                      <div className="month">{month}</div>
                      <div className="day">{day}</div>
                    </div>
                    <div className="event-meta">
                      <div className="event-type">{ev.tags[0]}</div>
                      <div className="event-title">{ev.title}</div>
                      <div className="event-location">{ev.location}</div>
                    </div>
                  </div>
                  <div className="event-card-body">
                    <p className="event-desc">{ev.desc}</p>
                    <div className="event-tags">
                      {ev.tags.map((tag) => (
                        <span key={tag} className="tag gold">{tag}</span>
                      ))}
                    </div>
                    {ev.link && (
                      <a href={ev.link} target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-full">
                        Sign Up →
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

    </section>
  )
}
