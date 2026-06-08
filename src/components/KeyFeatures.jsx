const features = [
  { text: 'First venue in the world', bold: false },
  {
    text: 'First venue in the world to have 60 multi surface courts (20 clay & 30 hard + 10 natural grass) at one location alongside a stadium',
    bold: false,
  },
  {
    text: 'First facility in the world to have capabilities to hold WTA & ATP events on any three court surface at one location',
    bold: true,
  },
  {
    text: 'First tennis academy in the world to have capabilities to stage WTA & ATP events too',
    bold: false,
  },
  {
    text: 'First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium, 5 Star Hunter Valley resort and airport all in 500 meters radius',
    bold: false,
  },
  { text: 'First one stop tennis academy in Asia Pacific', bold: false },
];

function FeatureList() {
  return (
    <div className="kf-list">
      {features.map((f, i) => (
        <div className="kf-item" key={i}>
          <span className="kf-arrow">→</span>
          <p className={f.bold ? 'kf-text bold' : 'kf-text'}>{f.text}</p>
        </div>
      ))}
    </div>
  );
}

export default function KeyFeatures() {
  return (
    <section className="key-features">
      {/* Dense topographic / contour wave SVG background */}
      {/* <svg
        className="wave-bg"
        viewBox="0 0 1440 800"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {[...Array(30)].map((_, i) => {
          const y = 20 + i * 26;
          const amp = 18 + (i % 5) * 8;
          const freq = 0.004 + (i % 3) * 0.001;
          const points = Array.from({ length: 145 }, (__, j) => {
            const x = j * 10;
            const wave =
              Math.sin(x * freq + i * 0.6) * amp +
              Math.sin(x * freq * 2.3 + i * 0.3) * (amp * 0.4);
            return `${j === 0 ? 'M' : 'L'}${x},${y + wave}`;
          }).join(' ');
          return (
            <path
              key={i}
              d={points}
              fill="none"
              stroke="#c8d8b0"
              strokeWidth="0.8"
            />
          );
        })}
      </svg> */}

      {/* Header */}
      <div className="key-features-header">
        <div className="left">
          <h2>
            Key Features<span className="kf-dot" />
          </h2>
          <p>Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.</p>
        </div>
        <button className="kf-register-btn">Register Now</button>
      </div>

      {/* Two identical columns */}
      <div className="kf-columns">
        <FeatureList />
        <FeatureList />
      </div>
    </section>
  );
}
