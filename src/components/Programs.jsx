import Image from 'next/image';

const programs = [
  {
    title: 'Academy',
    subtitle: 'Live and train with us',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80',
    alt: 'Academy aerial tennis courts',
  },
  {
    title: 'Camps',
    subtitle: 'Train like a pro with us',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=700&q=80',
    alt: 'Tennis camp group training',
  },
  {
    title: 'Performance',
    subtitle: 'Elevate your game with us',
    image: 'https://images.unsplash.com/photo-1599586120429-48281b6f0ece?w=700&q=80',
    alt: 'Performance tennis player',
  },
];

const marqueePhrases = [
  { text: 'ADOPT', outline: false },
  { text: '·', outline: false },
  { text: 'NURTURE', outline: true },
  { text: '·', outline: false },
  { text: 'DELIVER', outline: false },
  { text: '·', outline: false },
  { text: 'ADOPT', outline: true },
  { text: '·', outline: false },
  { text: 'NURTURE', outline: false },
  { text: '·', outline: false },
  { text: 'DELIVER', outline: true },
  { text: '·', outline: false },
];

export default function Programs() {
  return (
    <>
      <section className="programs-section" id="programs">
        <div className="programs-header">
          <div className="left">
            <h2>
              Programs<span className="dot" />
            </h2>
            <p>
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <button className="kf-register-btn">Register Now</button>
        </div>

        <div className="programs-cards">
          {programs.map((p) => (
            <div className="program-card" key={p.title}>
              <Image
                src={p.image}
                alt={p.alt}
                fill
                style={{ objectFit: 'cover' }}
                unoptimized
              />
              <div className="program-card-overlay" />
              <div className="program-card-content">
                <h3>{p.title}</h3>
                <p>{p.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Marquee ticker */}
      <div className="marquee-section">
        <div className="marquee-track">
          {[...marqueePhrases, ...marqueePhrases].map((item, i) => (
            <span key={i} className={item.outline ? 'outline' : ''}>
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
