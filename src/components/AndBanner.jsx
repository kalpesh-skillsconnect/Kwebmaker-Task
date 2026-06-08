import Image from 'next/image';

export default function AndBanner() {
  return (
    <div className="and-banner">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=1800&q=60"
        alt=""
        fill
        style={{ objectFit: 'cover' }}
        unoptimized
        aria-hidden="true"
      />

      {/* Lime green overlay */}
      <div className="and-banner-overlay" />

      {/* Text */}
      <div className="and-banner-text">
        <span>ADOPT</span>
        <span className="and-separator">·</span>
        <span>NURTURE</span>
        <span className="and-separator">·</span>
        <span>DELIVER</span>
      </div>
    </div>
  );
}
