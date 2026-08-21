import Image from 'next/image'

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="wordmark">
              <Image src="/logo-mark2.jpg" alt="River Hill Pickleball emblem" width={46} height={46} />
              <span className="wordmark-text">
                River Hill Pickleball
                <span>Est. 2023 &middot; Clarksville, MD</span>
              </span>
            </a>
            <p>Howard County&rsquo;s first high school pickleball club.</p>
            <div className="footer-social">
              <a
                href="https://www.instagram.com/rhhspickleball/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://groupme.com/join_group/103600066/Ve5FZ2w1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GroupMe"
                title="GroupMe"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 4.925 0 11c0 3.472 1.677 6.558 4.3 8.605L3 24l4.578-2.307C8.951 22.218 10.438 22.5 12 22.5c6.627 0 12-4.925 12-11S18.627 0 12 0zm1.2 14.8H7.2v-1.6h6v1.6zm3.2-3.2H7.2V10h9.2v1.6z" />
                </svg>
              </a>
              <a href="mailto:riverhillpickleball@gmail.com" aria-label="Email" title="Email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#events">Events</a>
              </li>
              <li>
                <a href="https://groupme.com/join_group/103600066/Ve5FZ2w1" target="_blank" rel="noopener noreferrer">
                  Join GroupMe
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>River Hill High School</li>
              <li>Clarksville, MD 21029</li>
              <li style={{ marginTop: 6 }}>
                <a href="mailto:riverhillpickleball@gmail.com">riverhillpickleball@gmail.com</a>
              </li>
              <li>
                <a href="https://www.instagram.com/rhhspickleball/" target="_blank" rel="noopener noreferrer">
                  @rhhspickleball
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 River Hill Pickleball Club. All rights reserved.</p>
          <div className="footer-badge">Howard County&rsquo;s First HS Pickleball Club</div>
        </div>
      </div>
    </footer>
  )
}
