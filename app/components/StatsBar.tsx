export default function StatsBar() {
  const stats = [
    { num: '83+', label: 'Active Members' },
    { num: '#1', label: 'In Howard County' },
    { num: '2024', label: 'Year Founded' },
    { num: 'HoCo', label: '1st HS Pickleball Club' },
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
