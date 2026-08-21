const items = [
  'River Hill Pickleball',
  'First in Howard County',
  'Est. 2023',
  '80+ Members',
  'All Skill Levels',
  'Clarksville, MD',
]

function Run() {
  return (
    <div className="ticker-run">
      {items.map((t) => (
        <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 34 }}>
          <span>{t}</span>
          <i>&#9679;</i>
        </span>
      ))}
    </div>
  )
}

export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        <Run />
        <Run />
      </div>
    </div>
  )
}
