import Image from 'next/image';

export default function CoachesEvents() {
  return (
    <section className="coaches-events mt-12" id="events">
      {/* Coaches panel */}
      <div className="ce-panel coaches-panel">
        <Image
          src="https://images.unsplash.com/photo-1562077772-3bd90403f7f0?w=900&q=80"
          alt="Tennis coach at the net with tennis balls"
          fill
          className="bg-img"
          style={{ objectFit: 'cover' }}
          unoptimized
        />
        <div className="overlay coaches-panel" />
        <div className="ce-content">
          <div className="ce-dot" />
          <h2>Our Coaches</h2>
          <p>
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
          </p>
          <a href="#" className="read-more-link">
            Read More &nbsp;⟶
          </a>
        </div>
      </div>

      {/* Events panel */}
      <div className="ce-panel events-panel">
        <Image
          src="https://images.unsplash.com/photo-1588534333275-62e7cc95d912?w=900&q=80"
          alt="Tennis player silhouette celebrating"
          fill
          className="bg-img"
          style={{ objectFit: 'cover', opacity: 0.25 }}
          unoptimized
        />
        <div className="overlay events-panel" />
        <div className="ce-content">
          <div className="ce-dot" />
          <h2>Events</h2>
          <p>
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
          </p>
          <a href="#" className="read-more-link">
            Read More &nbsp;⟶
          </a>
        </div>
      </div>
    </section>
  );
}
