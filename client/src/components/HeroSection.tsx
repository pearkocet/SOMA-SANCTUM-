/*
 * SOMA SANCTUM — Hero Section
 * Design: Full-viewport, deep indigo background, floating bottle, cinematic
 * Layout: Centered bottle with asymmetric text positioning
 * Animation: Bottle float, particle lights, fade-in text sequence
 */

import { useEffect, useRef, useState } from 'react';

const BOTTLE_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663492546214/UdXyViwmHssSrbSWmg7qPW/soma-hero-bottle-K9hKMiUA4sBCH5PfpVsaSe.png';
const HERO_BG_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663492546214/UdXyViwmHssSrbSWmg7qPW/soma-hero-bg-PCm7icLyQEc3QEbYjNmkw3.webp';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: 20 + Math.random() * 60,
    y: 20 + Math.random() * 60,
    size: 1 + Math.random() * 2,
    duration: 4 + Math.random() * 6,
    delay: Math.random() * 5,
  }));
}

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [particles] = useState(() => generateParticles(12));
  const [bottleHovered, setBottleHovered] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioPlaying, setAudioPlaying] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleEnterSanctum = () => {
    const el = document.querySelector('#ritual');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#0A0C1A' }}
    >
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${HERO_BG_URL})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.6,
        }}
      />

      {/* Deep gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(26,31,59,0.3) 0%, rgba(10,12,26,0.85) 70%, #0A0C1A 100%)',
        }}
      />

      {/* Ambient particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: '#C6A962',
              boxShadow: `0 0 ${p.size * 4}px rgba(198, 169, 98, 0.8)`,
              animation: `particleFloat ${p.duration}s ease-in-out ${p.delay}s infinite`,
              opacity: 0,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-5xl mx-auto">

        {/* Top label */}
        <div
          className="mb-12 transition-all duration-1000"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '0.2s',
          }}
        >
          <span className="protocol-label">Private Reserve · Batch 001 · Protocol No. 7</span>
        </div>

        {/* Bottle — the altar piece */}
        <div
          className="relative mb-12 cursor-pointer"
          style={{ width: 'min(320px, 55vw)' }}
          onMouseEnter={() => setBottleHovered(true)}
          onMouseLeave={() => setBottleHovered(false)}
        >
          {/* Light bloom on hover */}
          <div
            className="absolute inset-0 rounded-full transition-all duration-700"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(198, 169, 98, 0.25) 0%, transparent 70%)',
              opacity: bottleHovered ? 1 : 0,
              transform: bottleHovered ? 'scale(1.3)' : 'scale(0.8)',
              filter: 'blur(20px)',
            }}
          />

          {/* Ambient glow always present */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(198, 169, 98, 0.08) 0%, transparent 65%)',
              filter: 'blur(30px)',
              transform: 'scale(1.2)',
            }}
          />

          <img
            src={BOTTLE_URL}
            alt="SOMA SANCTUM Tequila Bottle"
            className="relative w-full h-auto animate-float"
            style={{
              filter: bottleHovered
                ? 'drop-shadow(0 0 40px rgba(198, 169, 98, 0.4)) brightness(1.05)'
                : 'drop-shadow(0 20px 60px rgba(0,0,0,0.8))',
              transition: 'filter 0.7s ease',
            }}
          />
        </div>

        {/* Main headline */}
        <h1
          className="font-display text-ivory mb-4 transition-all duration-1000"
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 300,
            lineHeight: 1.15,
            letterSpacing: '0.02em',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: '0.5s',
            maxWidth: '700px',
          }}
        >
          I disappeared to find myself.<br />
          <em style={{ fontStyle: 'italic', color: '#C6A962', fontWeight: 300 }}>Now you can drink the ritual.</em>
        </h1>

        {/* Brand name */}
        <div
          className="mb-8 transition-all duration-1000"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '0.7s',
          }}
        >
          <div className="gold-line mb-5" style={{ width: '80px', margin: '0 auto 1.25rem' }} />
          <p
            className="section-label"
            style={{ letterSpacing: '0.5em', fontSize: '0.65rem' }}
          >
            SOMA SANCTUM
          </p>
        </div>

        {/* Subtext */}
        <p
          className="font-body text-ash mb-12 transition-all duration-1000"
          style={{
            fontSize: '0.85rem',
            fontWeight: 300,
            letterSpacing: '0.08em',
            lineHeight: 1.9,
            maxWidth: '520px',
            opacity: loaded ? 0.65 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '0.9s',
          }}
        >
          By Pearkocet. From excess to awakening.<br />
          SOMA SANCTUM is the ritual of transformation.
        </p>

        {/* CTA */}
        <div
          className="flex flex-col sm:flex-row items-center gap-6 transition-all duration-1000"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '1.1s',
          }}
        >
          <button
            onClick={handleEnterSanctum}
            className="soma-btn-primary"
          >
            Discover the Ritual
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-1000"
          style={{
            opacity: loaded ? 0.4 : 0,
            transitionDelay: '1.5s',
          }}
        >
          <span
            className="font-mono-soma"
            style={{ fontSize: '0.55rem', letterSpacing: '0.3em', color: '#C6A962' }}
          >
            SCROLL
          </span>
          <div
            className="w-px bg-gold animate-pulse-gold"
            style={{ height: '40px', background: '#C6A962' }}
          />
        </div>
      </div>

      {/* Bottom vignette */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #0A0C1A)',
        }}
      />
    </section>
  );
}
