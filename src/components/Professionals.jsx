import Image from 'next/image';

const coaches = [
  {
    name: 'Craig Tiley',
    role: 'CEO Tennis Australia & Australian Open',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80',
    alt: 'Craig Tiley – CEO Tennis Australia',
  },
  {
    name: 'Stephen Farrow',
    role: 'Director – Tournament, Players & International Relations',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=80',
    alt: 'Stephen Farrow – Director',
  },
  {
    name: 'Cameron Pearson',
    role: 'Head Major Events – Tennis Australia',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&q=80',
    alt: 'Cameron Pearson – Head Major Events',
  },
];

export default function Professionals() {
  return (
    <section className="professionals-section" id="coaches">
      <div className="professionals-header">
        <div className="left">
          <h2>
            Meet our professionals<span className="dot" />
          </h2>
          <p className='lg:text-md text-sm'>Lorem ipsum has been the industry&apos;s standard dummy text ever since the 1500s,</p>
        </div>
        <button className="view-all-btn">View All</button>
      </div>

      <div className="professionals-grid">
        {coaches.map((c) => (
          <div className="pro-card" key={c.name}>
            <Image
              src={c.image}
              alt={c.alt}
              width={400}
              height={350}
             
              unoptimized
            />
            <h3>{c.name}</h3>
            <p>{c.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
