import Image from 'next/image';

function PlayButton() {
  return (
    <div className="fac-play-btn">
      <div className="fac-play-circle">
        <svg viewBox="0 0 24 24" fill="currentColor" width="42%" height="42%">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  );
}

export default function Facilities() {
  return (
    <section className="fac-section" id="facilities">

      {/* ══ TOP BAND: white-left / navy-green-right ══ */}
      <div className="fac-top-band">
        <div className="fac-top-bg-left" />
        <div className="fac-top-bg-right" />

        <div className="fac-top-content">
          {/* Header sits on white side */}
          <div className="fac-header">
            <div className="fac-title-row">
              <span className="fac-dot" />
              <h2>Facilities</h2>
            </div>
            <p className="fac-subtitle">
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
            </p>
          </div>

          {/* Two cards: Tennis (left/white) + Accommodation (right/colored) */}

        </div>
      </div>

      {/* ══ BOTTOM BAND: full-width colored, cards centered ══ */}
      <div className="fac-bottom-band lg:h-[38vw] h-full relative lg:my-[12vw] my-4">
        <div className="lg:absolute relative  lg:bottom-[19vw] bottom-0">
          <div className="fac-top-cards mb-6 lg:mb-0">
              {/* Tennis */}
              <div className="fac-card mb-6 lg:mb-0">
                <div className="fac-thumb">
                  <Image
                    src="https://images.unsplash.com/photo-1545809074-59472b3f5ecc?w=800&q=80"
                    alt="Tennis court grass close-up"
                    fill style={{ objectFit: 'cover' }}
                    unoptimized
                  />
                  <div className="fac-thumb-overlay" />
                  <p className="fac-thumb-text">
                    Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                  </p>
                  <PlayButton />
                </div>
                <h3 className="fac-card-title" style={{ color: '#fff' }}>Tennis</h3>
                <div className="fac-tags">
                  <span className="fac-tag bg-white">9 Clay Courts</span>
                  <span className="fac-tag bg-white">4 Hard Courts</span>
                </div>
                <p className="fac-card-desc" style={{ color: 'rgba(255,255,255,0.82)' }}>
                  Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                </p>
              </div>

              {/* Accommodation */}
              <div className="fac-card mb-6 lg:mb-0">
                <div className="fac-thumb">
                  <Image
                    src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80"
                    alt="Luxury hotel room"
                    fill style={{ objectFit: 'cover' }}
                    unoptimized
                  />
                  <div className="fac-thumb-overlay" />
                  <p className="fac-thumb-text">
                    Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                  </p>
                  <PlayButton />
                </div>
                <h3 className="fac-card-title" style={{ color: '#fff' }}>Accommodation</h3>
                <div className="fac-tags">
                  <span className="fac-tag bg-white">5 Star Hotel</span>
                </div>
                <p className="fac-card-desc" style={{ color: 'rgba(255,255,255,0.82)' }}>
                  Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                </p>
              </div>
          </div>
        </div>
        {/* Trophy watermark */}
        <div className="fac-trophy-wrap hidden lg:block" aria-hidden="true">
          <svg viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg" className="fac-trophy-svg">
            <path d="M60 110 C60 110 22 90 22 58 L22 24 L98 24 L98 58 C98 90 60 110 60 110Z"
              fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="4" />
            <path d="M22 30 C8 30 4 44 4 54 C4 70 18 76 32 70"
              fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="4" />
            <path d="M98 30 C112 30 116 44 116 54 C116 70 102 76 88 70"
              fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="4" />
            <rect x="48" y="110" width="24" height="24" rx="3"
              fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="4" />
            <rect x="34" y="134" width="52" height="10" rx="5"
              fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="4" />
          </svg>
        </div>

      <div className='lg:absolute relative  lg:top-[23vw] top-0 lg:right-12 right-0'>
        <div className="fac-bottom-cards ">

          {/* Fitness */}
          <div className="fac-card mb-6 lg:mb-0">
            <div className="fac-thumb fac-thumb-bottom">
              <Image
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
                alt="Gym fitness room"
                fill style={{ objectFit: 'cover' }}
                unoptimized
              />
              <PlayButton />
            </div>
            <h3 className="fac-card-title lg:text-[#1a1a1a] text-white" >Fitness</h3>
            <div className="fac-tags">
              <span className="fac-tag lime">Gym</span>
              <span className="fac-tag lime">Fitness Room</span>
            </div>
            <p className="fac-card-desc lg:text-[#1a1a1a] text-gray-100" >
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
            </p>
          </div>

          {/* Recovery */}
          <div className="fac-card mb-6 lg:mb-0">
            <div className="fac-thumb fac-thumb-bottom ">
              <Image
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80"
                alt="Outdoor swimming pool"
                fill style={{ objectFit: 'cover' }}
                unoptimized
              />
              <PlayButton />
            </div>
            <h3 className="fac-card-title lg:text-[#1a1a1a] text-white">Recovery</h3>
            <div className="fac-tags">
              <span className="fac-tag lime">Spa</span>
              <span className="fac-tag lime">Pool</span>
              <span className="fac-tag lime">Massage</span>
            </div>
          </div>

        </div>
        </div>
      </div>
    </section>
  );
}
