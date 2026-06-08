'use client';
import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Matches', href: '#matches' },
  { label: 'Programs', href: '#programs' },
  { label: 'Coaches', href: '#coaches' },
  { label: 'Amenities', href: '#facilities' },
  { label: 'Events', href: '#events' },
  { label: 'News', href: '#news' },
  { label: 'Blogs', href: '#blogs' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <span className="logo-text">SSA</span>
          <span className="logo-tagline">Adopt Nurture Deliver</span>
        </div>

        <ul className="navbar-links">
          {navLinks.map((l) => (
            <li key={l.label}>
              <Link href={l.href}>{l.label}</Link>
            </li>
          ))}
        </ul>

        <button className="navbar-register-btn">Register Now</button>

        <button className="hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          ☰
        </button>
      </nav>

      {/* Mobile overlay */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <button className="mobile-menu-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
          ✕
        </button>
        {navLinks.map((l) => (
          <Link key={l.label} href={l.href} onClick={() => setMenuOpen(false)}>
            {l.label}
          </Link>
        ))}
        <button
          className="navbar-register-btn"
          style={{ fontSize: '1rem', padding: '0.7rem 2rem' }}
          onClick={() => setMenuOpen(false)}
        >
          Register Now
        </button>
      </div>
    </>
  );
}
