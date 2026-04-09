export default function StatsBar() {
  const stats = [
    { num: '80+', label: 'Active Members' },
    { num: '2023', label: 'Year Founded' },
    { num: 'First', label: 'HS Pickleball Club in HoCo' },
    { num: 'RHHS', label: 'River Hill High School' },
  ]

  return (
    <div className="stats-bar">
      {stats.map((stat) => (
        <div key={stat.label} className="stat-item">
          <div className="stat-num">{stat.num}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
