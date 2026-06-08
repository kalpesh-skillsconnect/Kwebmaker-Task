import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=1800&q=80"
        alt="Tennis courts aerial view at sunset – SSA Hunter Valley"
        fill
        priority
        className="hero-bg"
        style={{ objectFit: 'cover' }}
        unoptimized
      />

      {/* Dark overlay */}
      <div className="hero-overlay" />

      {/* Main content */}
      <div className="hero-content">
        <p className="hero-eyebrow">SSA Hunter Valley</p>
        <h1 className="hero-title">
          Grow your game with the
          <span>Professionals</span>
        </h1>

        <div className="hero-tagline">
          <span>ADOPT</span>
          <span className="dot" />
          <span>NURTURE</span>
          <span className="dot" />
          <span>DELIVER</span>
        </div>

        <button className="hero-btn">Register Now</button>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-arrow">↓</div>

      {/* Upcoming event widget */}
      <div className="hero-events-widget">
        <span className="event-label">Hunter Valley</span>
        <span className="event-date">19</span>
        <span className="event-name">Upcoming Match</span>
      </div>
    </section>
  );
}
