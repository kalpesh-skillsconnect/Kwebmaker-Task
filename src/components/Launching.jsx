import Image from 'next/image';

const connectivity = [
  { name: 'Hunter Valley Golf And Country Club', distance: '220m', hasIcon: true },
  { name: 'Rydges Resort Hunter Valley', distance: '550m', hasIcon: true },
  { name: 'Cressnock Airport', distance: '1.7km', hasIcon: true },
  { name: 'Cressnock CBD', distance: '7km', hasIcon: true },
  { name: 'Nulkaba Public School', distance: '4.8km', hasIcon: true },
  { name: 'Cressnock Hospital', distance: '7.3km', hasIcon: true },
  { name: 'Mcdonalds, KFC, Oporto', distance: '7km', hasIcon: true },
];

function LocationIcon() {
  return (
    <svg
      className="launch-icon"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="3.5" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
      <path
        d="M12 21C12 21 4 14.5 4 9a8 8 0 0116 0c0 5.5-8 12-8 12z"
        stroke="rgba(255,255,255,0.8)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Launching() {
  return (
    <section className="launching-section">
      {/* ── Left: green gradient panel ── */}
      <div className="launching-left">
        <p className="launch-label">LAUNCHING</p>

        <h2 className="launch-title">
          Signature Slam Academy<br />Hunter Valley
        </h2>

        <p className="launch-subtitle">SSA Connectivity</p>

        <ul className="launch-list">
          {connectivity.map((item) => (
            <li className="launch-item" key={item.name}>
              <span className="launch-icon-wrap">
                {item.hasIcon ? <LocationIcon /> : <span className="launch-icon-placeholder" />}
              </span>
              <span className="launch-name">{item.name}</span>
              <span className="launch-dots" aria-hidden="true" />
              <span className="launch-distance">{item.distance}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Right: photo with slider dots ── */}
      <div className="launching-right">
        <Image
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=85"
          alt="Aerial view of Hunter Valley resort, golf course and surrounds"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          unoptimized
        />
        {/* Slider dots */}
        <div className="launch-slider-dots">
          <span className="launch-dot active" />
          <span className="launch-dot" />
          <span className="launch-dot" />
        </div>
      </div>
    </section>
  );
}
