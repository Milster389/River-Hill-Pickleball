import Image from 'next/image'

interface GalleryItem {
  src: string
  alt: string
  label: string
  wide?: boolean
  tall?: boolean
  contain?: boolean
  placeholder?: boolean
}

const items: GalleryItem[] = [
  {
    src: '/Front of Pball Jersey.jpg',
    alt: 'River Hill Pickleball Jersey Front',
    label: 'Official Club Jersey — Front',
    wide: true,
  },
  {
    src: '/Back of pball jersey 25.jpg',
    alt: 'River Hill Pickleball Jersey Back',
    label: 'Official Club Jersey — Back',
  },
  {
    src: '/Logo.jpeg',
    alt: 'Club Logo',
    label: 'River Hill Pickleball — Official Logo',
    tall: true,
    contain: true,
  },
  {
    src: 'https://placehold.co/400x300/1A2F5E/F5C518?text=Practice+Session',
    alt: 'Practice Session',
    label: 'Practice Session',
    placeholder: true,
  },
  {
    src: 'https://placehold.co/400x300/112347/F5C518?text=Tournament+Play',
    alt: 'Tournament',
    label: 'Tournament Play',
    placeholder: true,
  },
  {
    src: 'https://placehold.co/800x300/0D1B3E/F5C518?text=Club+Group+Photo',
    alt: 'Group Photo',
    label: 'Club Group Photo',
    wide: true,
    placeholder: true,
  },
  {
    src: 'https://placehold.co/400x300/1A2F5E/F5C518?text=Beginner+Clinic',
    alt: 'Beginner Clinic',
    label: 'Beginner Clinic',
    placeholder: true,
  },
  {
    src: 'https://placehold.co/400x300/112347/F5C518?text=Court+Action',
    alt: 'Court Action',
    label: 'Court Action',
    placeholder: true,
  },
  {
    src: 'https://placehold.co/400x300/0D1B3E/F5C518?text=After+School+Practice',
    alt: 'After School Practice',
    label: 'After School Practice',
    placeholder: true,
  },
]

export default function GallerySection() {
  return (
    <section id="gallery">
      <div className="section-tag">Photos</div>
      <h2 className="section-title">Club <em>in Action</em></h2>
      <p className="section-sub">Catch us on the courts. More photos coming soon as we document the season.</p>

      <div className="gallery-grid">
        {items.map((item) => (
          <div
            key={item.label}
            className={`gallery-item${item.wide ? ' wide' : ''}${item.tall ? ' tall' : ''}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              unoptimized={item.placeholder}
              className="gallery-item-img"
              style={{
                objectFit: item.contain ? 'contain' : 'cover',
                background: item.contain ? 'var(--navy)' : undefined,
              }}
            />
            <div className="gallery-overlay">
              <div className="gallery-overlay-text">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
