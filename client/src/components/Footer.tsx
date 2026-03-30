/*
 * SOMA SANCTUM — Footer
 * Design: Minimal, dark, logo + tagline + discreet navigation
 * Layout: Three-column: logo left, nav center, legal right
 * Typography: DM Mono for labels, Cormorant for tagline
 */

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const footerLinks = [
  { label: 'The Ritual', href: '#ritual' },
  { label: 'Origin', href: '#origin' },
  { label: 'Protocol', href: '#protocol' },
  { label: 'The Vessel', href: '#vessel' },
  { label: 'Private Access', href: '#access' },
];

export default function Footer() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: '#060810', borderTop: '1px solid rgba(198, 169, 98, 0.08)' }}
    >
      {/* Top divider */}
      <div className="gold-line" />

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="container py-16"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.9s ease-out',
        }}
      >
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-16">

          {/* Logo & tagline */}
          <div className="space-y-4">
            <div>
              <span
                className="font-display text-ivory block"
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 300,
                  letterSpacing: '0.25em',
                  lineHeight: 1,
                }}
              >
                SOMA
              </span>
              <span
                className="font-display text-gold block"
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 400,
                  letterSpacing: '0.45em',
                  lineHeight: 1,
                  marginTop: '0.25rem',
                }}
              >
                SANCTUM
              </span>
            </div>
            <div className="gold-line-left" style={{ width: '40px' }} />
            <p
              className="font-display"
              style={{
                fontSize: '0.9rem',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'rgba(245, 241, 232, 0.45)',
                letterSpacing: '0.03em',
                lineHeight: 1.6,
              }}
            >
              "Return to yourself."<br />
              <span style={{ fontSize: '0.75rem', fontWeight: 300, fontStyle: 'normal', color: 'rgba(198, 169, 98, 0.5)' }}>By Pearkocet</span>
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <span
              className="font-mono-soma block mb-6"
              style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: 'rgba(198, 169, 98, 0.4)' }}
            >
              NAVIGATE
            </span>
            {footerLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block transition-colors duration-300"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.78rem',
                  fontWeight: 300,
                  letterSpacing: '0.08em',
                  color: 'rgba(245, 241, 232, 0.35)',
                  textAlign: 'left',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = '#C6A962';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = 'rgba(245, 241, 232, 0.35)';
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Contact & legal */}
          <div className="space-y-4">
            <span
              className="font-mono-soma block mb-6"
              style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: 'rgba(198, 169, 98, 0.4)' }}
            >
              CONTACT
            </span>
            <p
              className="font-body"
              style={{
                fontSize: '0.78rem',
                fontWeight: 300,
                color: 'rgba(245, 241, 232, 0.35)',
                letterSpacing: '0.05em',
                lineHeight: 1.8,
              }}
            >
              Founded by Pearkocet.<br />
              Access by private request only.<br />
              No public distribution.
            </p>
            <a
              href="mailto:sanctum@somasanctum.com"
              className="block transition-colors duration-300"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.65rem',
                letterSpacing: '0.12em',
                color: 'rgba(198, 169, 98, 0.5)',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = '#C6A962';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = 'rgba(198, 169, 98, 0.5)';
              }}
            >
              sanctum@somasanctum.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(198, 169, 98, 0.06)' }}
        >
          <span
            className="font-mono-soma"
            style={{
              fontSize: '0.55rem',
              letterSpacing: '0.15em',
              color: 'rgba(245, 241, 232, 0.2)',
            }}
          >
            © {new Date().getFullYear()} SOMA SANCTUM. ALL RIGHTS RESERVED.
          </span>
          <div className="flex items-center gap-6">
            {['Privacy', 'Terms', 'Responsible Consumption'].map((item) => (
              <button
                key={item}
                className="transition-colors duration-300"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '0.55rem',
                  letterSpacing: '0.12em',
                  color: 'rgba(245, 241, 232, 0.2)',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = 'rgba(198, 169, 98, 0.5)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = 'rgba(245, 241, 232, 0.2)';
                }}
              >
                {item}
              </button>
            ))}
          </div>
          <span
            className="font-mono-soma"
            style={{
              fontSize: '0.55rem',
              letterSpacing: '0.15em',
              color: 'rgba(245, 241, 232, 0.15)',
            }}
          >
            DRINK RESPONSIBLY. 21+
          </span>
        </div>
      </div>
    </footer>
  );
}
