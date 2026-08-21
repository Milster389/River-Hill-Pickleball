const stats = [
  { num: '80', accent: '+', label: 'Active members' },
  { num: '20', accent: '23', label: 'Year founded' },
  { num: '1', accent: 'st', label: 'HS club in Howard County' },
  { num: 'All', accent: '', label: 'Skill levels welcome' },
]

export default function StatsBar() {
  return (
    <div className="stats">
      <div className="wrap">
        <div className="stats-grid">
          {stats.map((s) => (
            <div className="stat reveal" key={s.label}>
              <div className="stat-num">
                {s.num}
                {s.accent && <span>{s.accent}</span>}
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
