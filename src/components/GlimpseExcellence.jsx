import Image from 'next/image';

export default function GlimpseExcellence() {
  return (
    <section className="glimpse-section">
      {/* Wavy background */}
      <svg
        className="wave-bg"
        viewBox="0 0 1440 600"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {[...Array(10)].map((_, i) => (
          <path
            key={i}
            d={`M0,${80 + i * 50} C400,${40 + i * 50} 900,${120 + i * 50} 1440,${80 + i * 50}`}
            fill="none"
            stroke="#8DC63F"
            strokeWidth="1.5"
          />
        ))}
      </svg>

      <div className="glimpse-header">
        <div className="left">
          <h2>
            A Glimpse of Excellence<span className="dot" style={{ marginLeft: '0.4vw' }} />
          </h2>
          <p>Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.</p>
        </div>
        <button className="kf-register-btn">Register Now</button>
      </div>

      <div className="glimpse-images">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=700&q=80"
          alt="Tennis player serving – black and white"
          width={600}
          height={500}
          style={{ width: '100%', height: '28vw', objectFit: 'cover', borderRadius: '1vw', filter: 'grayscale(100%)' }}
          unoptimized
        />
        <Image
          src="https://images.unsplash.com/photo-1530549387789-4c1017266635?w=1000&q=80"
          alt="Aerial view of multiple tennis courts"
          width={900}
          height={500}
          style={{ width: '100%', height: '28vw', objectFit: 'cover', borderRadius: '1vw' }}
          unoptimized
        />
      </div>
    </section>
  );
}
