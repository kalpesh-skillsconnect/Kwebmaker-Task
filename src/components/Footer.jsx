import Link from 'next/link';

const footerLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Coaches', href: '#coaches' },
  { label: 'News', href: '#news' },
  { label: 'Matches', href: '#matches' },
  { label: 'Events', href: '#events' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Programs', href: '#programs' },
  { label: 'Amenities', href: '#facilities' },
  { label: 'Blogs', href: '#blogs' },
];

export default function Footer() {
  return (
    <>
      <footer className="footer">
        {/* Nav grid */}
      

        {/* Bottom grid: logo | address | social */}
        <div className="lg:flex inline-block gap-8">
          {/* Logo */}
          <div className="footer-logo w-52 ">
            <div className="logo-text">SSA</div>
            <div className="logo-tagline">Adopt Nurture Deliver</div>
          </div>

          <div className="flex-1 flex flex-col">
          {/* Address */}
          <nav className="footer-nav mb-6" aria-label="Footer navigation">
          {footerLinks.map((l) => (
            <Link key={l.label} href={l.href}>
              {l.label}
            </Link>
          ))}
          </nav>
          <div className="lg:flex inline-block  lg:gap-20 gap-8">
          <div className="footer-address">
            <h4>Signature Slam Academy</h4>
            <p className="addr"><span>30 Wills Hill Road,</span><span> Lovedale, NSW</span></p>
            <div className="footer-contact-item">
              <span className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
                </svg>
              </span>
              <span>+ 91 5642589752</span>
            </div>
            <div className="footer-contact-item">
              <span className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </span>
              <span>info@ssagroup.com</span>
            </div>
          </div>

          {/* Social */}
          <div className="footer-social">
            <h4>Connect with us</h4>
            <div className="social-icons">
              {/* Facebook */}
              <a href="#" className="social-icon" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              {/* X / Twitter */}
              <a href="#" className="social-icon" aria-label="X / Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="social-icon" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className="social-icon" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
                  <polygon fill="#fff" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
                </svg>
              </a>
            </div>
          </div>
          </div>
          </div>
        </div>
      </footer>

      {/* Footer bar */}
      <div className="footer-bar">
        <Link href="#">Terms And Condition</Link>
        <span>© 2023 All Rights Reserved www.signatureslamacademy.com</span>
        <Link href="#">Privacy Policy</Link>
      </div>
    </>
  );
}
