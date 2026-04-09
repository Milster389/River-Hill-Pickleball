'use client'

import { useState } from 'react'

export default function EventsForm() {
  const [showToast, setShowToast] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.currentTarget.reset()
    setShowToast(true)
    setTimeout(() => setShowToast(false), 4000)
  }

  return (
    <>
      <div id="signup-form" className="signup-section">
        <h3>Sign Up for an Event</h3>
        <p>Fill out the form below and we&apos;ll reach out to confirm your spot.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" placeholder="Your full name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="your@email.com" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="grade">Grade</label>
              <select id="grade" name="grade" required defaultValue="">
                <option value="" disabled>Select your grade</option>
                <option value="9">9th Grade (Freshman)</option>
                <option value="10">10th Grade (Sophomore)</option>
                <option value="11">11th Grade (Junior)</option>
                <option value="12">12th Grade (Senior)</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="event">Event Interest</label>
              <select id="event" name="event" required defaultValue="">
                <option value="" disabled>Select an event</option>
                <option value="tournament">Spring Pickleball Tournament</option>
                <option value="practice">Open Practice Sessions</option>
                <option value="clinic">Beginner Clinic</option>
                <option value="all">All Events</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="experience">Skill Level</label>
            <select id="experience" name="experience" defaultValue="">
              <option value="" disabled>How experienced are you?</option>
              <option value="never">Never played before</option>
              <option value="beginner">Beginner (played a few times)</option>
              <option value="intermediate">Intermediate (play regularly)</option>
              <option value="advanced">Advanced / Competitive</option>
            </select>
          </div>
          <button type="submit" className="btn btn-gold form-submit">Submit Registration →</button>
          <p className="form-note">
            We&apos;ll respond within 24 hours. Questions? Email{' '}
            <a href="mailto:riverhillpickleball@gmail.com" style={{ color: 'var(--gold)' }}>
              riverhillpickleball@gmail.com
            </a>
          </p>
        </form>
      </div>

      <div className={`toast${showToast ? ' show' : ''}`}>✓ You&apos;re registered! We&apos;ll be in touch soon.</div>
    </>
  )
}
