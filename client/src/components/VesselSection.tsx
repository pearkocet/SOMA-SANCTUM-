/*
 * SOMA SANCTUM — The Vessel Section (Product Showcase)
 * Design: Dark, dramatic, bottle as sacred object
 * Layout: Full-viewport centered bottle with orbiting detail callouts
 * Animation: Bottle float, light bloom on hover, detail reveals
 */

import { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const BOTTLE_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663492546214/UdXyViwmHssSrbSWmg7qPW/soma-hero-bottle-K9hKMiUA4sBCH5PfpVsaSe.png';

const bottleDetails = [
  {
    id: 1,
    position: { top: '12%', left: '8%' },
    label: 'Frosted Indigo Glass',
    description: 'Hand-blown, kiln-frosted. Each bottle unique.',
    align: 'right' as const,
  },
  {
    id: 2,
    position: { top: '38%', right: '6%' },
    label: 'Geometric Lotus Seal',
    description: 'Gold-leaf applied by hand. Sacred geometry.',
    align: 'left' as const,
  },
  {
    id: 3,
    position: { bottom: '30%', left: '5%' },
    label: 'Wax-sealed Capsule',
    description: 'Artisanal wax. Numbered by the distiller.',
    align: 'right' as const,
  },
  {
    id: 4,
    position: { bottom: '12%', right: '8%' },
    label: 'Parchment Label',
    description: 'Cotton rag paper. Letterpress printed.',
    align: 'left' as const,
  },
];

export default function VesselSection() {
  const [activeDetail, setActiveDetail] = useState<number | null>(null);
  const [bottleHovered, setBottleHovered] = useState(false);
  const { ref: sectionRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="vessel"
      className="relative py-24 overflow-hidden"
      style={{ background: '#080A18', minHeight: '100vh' }}
    >
      {/* Radial glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center 60%, rgba(26,31,59,0.8) 0%, transparent 65%)',
        }}
      />

      <div className="container relative z-10">

        {/* Section header */}
        <div
          ref={sectionRef as React.RefObject<HTMLDivElement>}
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.9s ease-out',
          }}
        >
          <span className="protocol-label">Section IV</span>
          <div className="gold-line mt-3 mb-8" style={{ maxWidth: '200px', margin: '0.75rem auto 2rem' }} />
          <h2
            className="font-display text-ivory"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
            }}
          >
            The Vessel
          </h2>
          <p
            className="font-display mt-4 mx-auto"
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.3rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'rgba(198, 169, 98, 0.8)',
              letterSpacing: '0.03em',
            }}
          >
            "Engineered for stillness."
          </p>
        </div>

        {/* Bottle showcase */}
        <div
          className="relative mx-auto flex items-center justify-center"
          style={{
            maxWidth: '900px',
            minHeight: '70vh',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 1.2s ease-out 0.3s',
          }}
        >
          {/* Detail callouts */}
          {bottleDetails.map((detail, i) => (
            <div
              key={detail.id}
              className="absolute hidden lg:flex items-center gap-3 cursor-pointer group"
              style={{
                ...detail.position,
                flexDirection: detail.align === 'right' ? 'row-reverse' : 'row',
                opacity: isVisible ? 1 : 0,
                transition: `opacity 0.8s ease-out ${0.6 + i * 0.15}s`,
              }}
              onMouseEnter={() => setActiveDetail(detail.id)}
              onMouseLeave={() => setActiveDetail(null)}
            >
              {/* Text */}
              <div
                className={`text-${detail.align === 'right' ? 'right' : 'left'} max-w-[160px]`}
              >
                <span
                  className="font-mono-soma block mb-1 transition-colors duration-300"
                  style={{
                    fontSize: '0.58rem',
                    letterSpacing: '0.2em',
                    color: activeDetail === detail.id ? '#C6A962' : 'rgba(198, 169, 98, 0.5)',
                  }}
                >
                  {detail.label}
                </span>
                <span
                  className="font-body block transition-all duration-300"
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 300,
                    lineHeight: 1.6,
                    color: activeDetail === detail.id
                      ? 'rgba(245, 241, 232, 0.75)'
                      : 'rgba(245, 241, 232, 0.3)',
                    letterSpacing: '0.03em',
                  }}
                >
                  {detail.description}
                </span>
              </div>

              {/* Connector line */}
              <div
                className="flex-shrink-0 transition-all duration-300"
                style={{
                  width: '40px',
                  height: '1px',
                  background: activeDetail === detail.id
                    ? 'rgba(198, 169, 98, 0.8)'
                    : 'rgba(198, 169, 98, 0.25)',
                }}
              />

              {/* Dot */}
              <div
                className="flex-shrink-0 rounded-full transition-all duration-300"
                style={{
                  width: '5px',
                  height: '5px',
                  background: activeDetail === detail.id ? '#C6A962' : 'rgba(198, 169, 98, 0.4)',
                  boxShadow: activeDetail === detail.id ? '0 0 8px rgba(198, 169, 98, 0.6)' : 'none',
                }}
              />
            </div>
          ))}

          {/* Central bottle */}
          <div
            className="relative z-10 flex items-center justify-center"
            style={{ width: 'min(380px, 70vw)' }}
            onMouseEnter={() => setBottleHovered(true)}
            onMouseLeave={() => setBottleHovered(false)}
          >
            {/* Outer glow ring */}
            <div
              className="absolute rounded-full transition-all duration-1000"
              style={{
                inset: '-20%',
                background: 'radial-gradient(ellipse at center, rgba(198, 169, 98, 0.06) 0%, transparent 70%)',
                opacity: bottleHovered ? 1 : 0.5,
                transform: bottleHovered ? 'scale(1.1)' : 'scale(1)',
              }}
            />

            {/* Inner light bloom */}
            <div
              className="absolute rounded-full transition-all duration-700"
              style={{
                inset: '10%',
                background: 'radial-gradient(ellipse at center, rgba(198, 169, 98, 0.15) 0%, transparent 60%)',
                filter: 'blur(20px)',
                opacity: bottleHovered ? 1 : 0,
              }}
            />

            <img
              src={BOTTLE_URL}
              alt="SOMA SANCTUM — The Vessel"
              className="relative w-full h-auto animate-float"
              style={{
                filter: bottleHovered
                  ? 'drop-shadow(0 0 60px rgba(198, 169, 98, 0.35)) brightness(1.08)'
                  : 'drop-shadow(0 30px 80px rgba(0,0,0,0.9)) brightness(1)',
                transition: 'filter 0.8s ease',
                animationDuration: '7s',
              }}
            />
          </div>
        </div>

        {/* Bottom descriptor */}
        <div
          className="text-center mt-12 max-w-2xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 1s ease-out 0.8s',
          }}
        >
          <div className="grid grid-cols-3 gap-8">
            {[
              { label: 'Material', value: 'Kiln-frosted glass' },
              { label: 'Closure', value: 'Artisanal wax seal' },
              { label: 'Label', value: 'Letterpress cotton' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <span
                  className="font-mono-soma block mb-2"
                  style={{ fontSize: '0.58rem', letterSpacing: '0.2em', color: 'rgba(198, 169, 98, 0.5)' }}
                >
                  {item.label}
                </span>
                <span
                  className="font-display text-ivory block"
                  style={{ fontSize: '0.95rem', fontWeight: 300, letterSpacing: '0.05em' }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
