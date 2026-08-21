import Image from 'next/image'

// Photos live in /public/gallery — swap any file to change a tile.
const tiles = [
  { n: 1, span: 'wide' },
  { n: 2, span: '' },
  { n: 3, span: '' },
  { n: 4, span: 'tall' },
  { n: 5, span: '' },
  { n: 6, span: '' },
  { n: 7, span: '' },
  { n: 8, span: '' },
  { n: 9, span: 'wide' },
  { n: 10, span: '' },
  { n: 11, span: '' },
  { n: 12, span: '' },
]

export default function GallerySection() {
  return (
    <section id="gallery" className="gallery">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">On the Court</span>
          <h2 className="section-title">
            Moments from <em>the club</em>
          </h2>
          <p className="section-sub">Matches, meetups, everything in between.</p>
        </div>

        <div className="gallery-grid">
          {tiles.map((t) => (
            <div className={`gallery-item ${t.span}`.trim()} key={t.n}>
              <Image
                src={`/gallery/${t.n}.webp`}
                alt="River Hill Pickleball Club"
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 980px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>

        <div className="gallery-more">
          <a
            className="btn btn-ghost"
            href="https://www.instagram.com/rhhspickleball/"
            target="_blank"
            rel="noopener noreferrer"
          >
            More on @rhhspickleball
          </a>
        </div>
      </div>
    </section>
  )
}
