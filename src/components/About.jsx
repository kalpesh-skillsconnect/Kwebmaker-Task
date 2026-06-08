'use client';
import { useState } from 'react';
import Image from 'next/image';

const tabs = ['About Us', 'Coaches', 'Vision', 'Mission'];

const tabContent = {
  'About Us': {
    title: 'About Us',
    description:
      'To be the first venue in the world to have 60 multi surface courts at one location and establish first one stop tennis academy in the Asia Pacific producing grand slam champions.',
    stats: [
      { number: '20', label: 'courts' },
      { number: '12', label: 'coaches' },
      { number: '17', label: 'years' },
      { number: '10', label: 'clubs' },
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1551773188-0801da12ddae?w=800&q=80', alt: 'Tennis players high five on court' },
      { src: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=600&q=80', alt: 'Young tennis player with coach' },
      { src: 'https://skillsconnect.blob.core.windows.net/skillsconnect-stage/media/Screenshot-2026-06-06-104603.png', alt: 'Player on tennis court' },
      { src: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=700&q=80', alt: 'Female tennis player ready to serve' },
    ],
  },
  Coaches: {
    title: 'Our Coaches',
    description:
      'Our world-class coaching staff brings decades of professional experience to help every player reach their full potential on the court.',
    stats: [
      { number: '12', label: 'coaches' },
      { number: '5', label: 'nationalities' },
      { number: '3', label: 'grand slams' },
      { number: '20+', label: 'years exp.' },
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80', alt: 'Tennis coach teaching' },
      { src: 'https://images.unsplash.com/photo-1560012057-4372e14c5085?w=600&q=80', alt: 'Coach on tennis court' },
      { src: 'https://skillsconnect.blob.core.windows.net/skillsconnect-stage/media/Screenshot-2026-06-06-104603.png', alt: 'Coaching session on court' },
      { src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=700&q=80', alt: 'Training session' },
    ],
  },
  Vision: {
    title: 'Our Vision',
    description:
      'To be recognised as the best tennis performance centre in the world and create an environment ideal for building craft. We aim to develop grand slam champions from the Asia Pacific region.',
    stats: [
      { number: '60', label: 'courts planned' },
      { number: '1st', label: 'Asia Pacific' },
      { number: '∞', label: 'potential' },
      { number: '#1', label: 'world ranking' },
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80', alt: 'Tennis complex aerial' },
      { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80', alt: 'Outdoor tennis courts' },
      { src: 'https://images.unsplash.com/photo-1520452112805-c6692c840af0?w=700&q=80', alt: 'Player training' },
      { src: 'https://skillsconnect.blob.core.windows.net/skillsconnect-stage/media/Screenshot-2026-06-06-104603.png', alt: 'Tennis stadium' },
    ],
  },
  Mission: {
    title: 'Our Mission',
    description:
      'Adopt, Nurture, and Deliver: creating a pathway for aspiring tennis players through world-class facilities, expert coaching, and a community that champions excellence at every level.',
    stats: [
      { number: '3', label: 'pillars' },
      { number: '100%', label: 'dedication' },
      { number: '#1', label: 'goal' },
      { number: '60+', label: 'programs' },
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?w=800&q=80', alt: 'Team celebration' },
      { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80', alt: 'Tennis practice drills' },
      { src: 'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?w=700&q=80', alt: 'Tennis match' },
      { src: 'https://images.unsplash.com/photo-1504652517000-ae1068478c59?w=700&q=80', alt: 'Award ceremony' },
    ],
  },
};

export default function About() {
  const [activeTab, setActiveTab] = useState('About Us');
  const content = tabContent[activeTab];

  return (
    <>
      {/* ── Intro band ── */}
      <div className="intro-section" id="about">
        <p>
          To be the first venue in the world to have{' '}
          <strong>60 multi surface courts</strong>
          <br />
          at one location and establish first one stop tennis academy
          <br />
          in the Asia Pacific producing grand slam champions.
        </p>
      </div>

      {/* ── Tabbed About section ── */}
      <section className="about-section">
        {/* Large "A" watermark — positioned top-left, clipped */}
        <span className="about-watermark-a" aria-hidden="true">A</span>

        {/* Tabs row — offset right to clear the watermark */}
        <div className="about-tabs-row text-center">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`about-tab${activeTab === tab ? ' active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Two-column content */}
        <div className="about-content">

          {/* Left: text + stats */}
          <div className="about-left">
            <div className="about-title-row">
              <span className="about-dot" />
              <h2>{content.title}</h2>
            </div>

            <p className="about-desc">{content.description}</p>

            <div className="about-stats">
              {content.stats.map((s) => (
                <div className="about-stat" key={s.label}>
                  <div className="stat-number">{s.number}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            <button className="about-read-more">Read More</button>
          </div>

          {/* Right: 2×2 photo grid */}
          <div className="about-photo-grid">
            {/* Top row: large left + small right */}
            <div className="photo-grid-top">
              <Image
                src={content.images[0].src}
                alt={content.images[0].alt}
                width={620}
                height={220}
                className="photo-top-left"
                unoptimized
              />
              <Image
                src={content.images[1].src}
                alt={content.images[1].alt}
                width={280}
                height={220}
                className="photo-top-right"
                unoptimized
              />
            </div>
            {/* Bottom row: two equal images */}
            <div className="photo-grid-bottom">
              <Image
                src={content.images[2].src}
                alt={content.images[2].alt}
                width={430}
                height={190}
                className="photo-bottom"
                unoptimized
              />
              <Image
                src={content.images[3].src}
                alt={content.images[3].alt}
                width={430}
                height={190}
                className="photo-bottom"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Quote banner ── */}
      <div className="quote-banner quote-banner-dark">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=70"
          alt=""
          fill
          style={{ objectFit: 'cover', opacity: 0.08 }}
          unoptimized
          aria-hidden="true"
        />
        <blockquote>
          &ldquo; We have created an environment ideal for building craft. Our goal is to be recognized as the
          best tennis performance centre in the world. &rdquo;
        </blockquote>
      </div>
    </>
  );
}
