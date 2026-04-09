import EventsForm from './EventsForm'

interface EventCard {
  month: string
  day: string
  type: string
  title: string
  location: string
  desc: string
  tags: { label: string; gold?: boolean }[]
  badgeStyle?: React.CSSProperties
  dayStyle?: React.CSSProperties
}

const events: EventCard[] = [
  {
    month: 'Apr',
    day: '26',
    type: 'Tournament',
    title: 'Spring Pickleball Tournament',
    location: 'River Hill HS Courts',
    desc: 'Our biggest event of the semester. Compete in singles or doubles brackets — all skill levels welcome. Prizes for top finishers.',
    tags: [
      { label: 'All Levels', gold: true },
      { label: 'April 2026' },
      { label: 'Singles & Doubles' },
    ],
  },
  {
    month: 'Tue',
    day: 'Thu',
    type: 'Recurring Practice',
    title: 'Open Practice Session',
    location: 'River Hill HS Courts',
    desc: 'Weekly open practices every Tuesday and Thursday after school. Drop in anytime — no registration needed for members.',
    tags: [
      { label: 'Weekly', gold: true },
      { label: 'Members Free' },
      { label: 'All Skill Levels' },
    ],
    badgeStyle: { background: 'rgba(245,197,24,0.15)', color: 'var(--gold)' },
    dayStyle: { fontSize: '1rem' },
  },
  {
    month: 'May',
    day: 'TBD',
    type: 'Clinic',
    title: 'Beginner Clinic',
    location: 'River Hill HS Courts',
    desc: 'New to pickleball? This is your starting point. Coached sessions covering rules, serve mechanics, dinking, and court strategy.',
    tags: [
      { label: 'Beginners', gold: true },
      { label: 'May 2026' },
      { label: 'Coached' },
    ],
  },
]

export default function EventsSection() {
  return (
    <section id="events">
      <div className="events-header">
        <div>
          <div className="section-tag">Schedule</div>
          <h2 className="section-title">
            Upcoming Events<br /><em>&amp; Sign-Ups</em>
          </h2>
        </div>
        <p style={{ color: 'var(--white-dim)', fontSize: '0.9rem', maxWidth: '300px', textAlign: 'right' }}>
          Sign up via the form below or contact us directly at riverhillpickleball@gmail.com
        </p>
      </div>

      <div className="events-grid">
        {events.map((ev) => (
          <div key={ev.title} className="event-card">
            <div className="event-card-top">
              <div className="event-date-badge" style={ev.badgeStyle}>
                <div className="month">{ev.month}</div>
                <div className="day" style={ev.dayStyle}>{ev.day}</div>
              </div>
              <div className="event-meta">
                <div className="event-type">{ev.type}</div>
                <div className="event-title">{ev.title}</div>
                <div className="event-location">{ev.location}</div>
              </div>
            </div>
            <div className="event-card-body">
              <p className="event-desc">{ev.desc}</p>
              <div className="event-tags">
                {ev.tags.map((tag) => (
                  <span key={tag.label} className={`tag${tag.gold ? ' gold' : ''}`}>{tag.label}</span>
                ))}
              </div>
              <a href="#signup-form" className="btn btn-gold btn-full">Register Now →</a>
            </div>
          </div>
        ))}
      </div>

      <EventsForm />
    </section>
  )
}
