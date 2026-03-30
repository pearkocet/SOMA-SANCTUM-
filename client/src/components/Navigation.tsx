/*
 * SOMA SANCTUM — Navigation Component
 * Design: Fixed, minimal, transparent-to-dark on scroll
 * Typography: DM Sans 300, letter-spacing 0.25em, uppercase
 * Color: Ivory text, gold accent on hover, gold border on scroll
 */

import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'The Ritual', href: '#ritual' },
  { label: 'Origin', href: '#origin' },
  { label: 'Protocol', href: '#protocol' },
  { label: 'The Vessel', href: '#vessel' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
      style={{
        background: scrolled
          ? 'rgba(10, 12, 26, 0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(198, 169, 98, 0.12)' : 'none',
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex flex-col items-start gap-0.5 group"
          >
            <span
              className="font-display text-ivory"
              style={{
                fontSize: '1.1rem',
                fontWeight: 300,
                letterSpacing: '0.25em',
                lineHeight: 1,
              }}
            >
              SOMA
            </span>
            <span
              className="font-display text-gold"
              style={{
                fontSize: '0.6rem',
                fontWeight: 400,
                letterSpacing: '0.45em',
                lineHeight: 1,
              }}
            >
              SANCTUM
            </span>
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="section-label transition-colors duration-300 hover:text-gold"
                style={{ color: 'rgba(245, 241, 232, 0.55)' }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => handleNavClick('#access')}
              className="soma-btn-primary"
              style={{ padding: '0.6rem 1.75rem', fontSize: '0.65rem' }}
            >
              Request Access
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="block h-px bg-ivory transition-all duration-300"
              style={{
                width: '24px',
                transform: menuOpen ? 'rotate(45deg) translateY(5px)' : 'none',
                backgroundColor: '#F5F1E8',
              }}
            />
            <span
              className="block h-px transition-all duration-300"
              style={{
                width: '16px',
                backgroundColor: '#C6A962',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block h-px bg-ivory transition-all duration-300"
              style={{
                width: '24px',
                transform: menuOpen ? 'rotate(-45deg) translateY(-5px)' : 'none',
                backgroundColor: '#F5F1E8',
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden transition-all duration-500 overflow-hidden"
        style={{
          maxHeight: menuOpen ? '400px' : '0',
          background: 'rgba(10, 12, 26, 0.97)',
          borderTop: menuOpen ? '1px solid rgba(198, 169, 98, 0.12)' : 'none',
        }}
      >
        <div className="container py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="section-label text-left transition-colors duration-300 hover:text-gold"
              style={{ color: 'rgba(245, 241, 232, 0.55)' }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#access')}
            className="soma-btn-primary mt-4 w-fit"
          >
            Request Access
          </button>
        </div>
      </div>
    </nav>
  );
}
