/*
 * SOMA SANCTUM — The Ritual Section
 * Design: Asymmetric layout, large display text left, product image right
 * Typography: Cormorant Garamond display, DM Sans body
 * Animation: Fade-in on scroll, floating product image
 */

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const RITUAL_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663492546214/UdXyViwmHssSrbSWmg7qPW/soma-ritual-closeup-ZZ4hQJ7ELkFgCTGkeZvw4e.webp';

const ritualPrinciples = [
  {
    number: 'I',
    title: 'Intention',
    body: 'Every pour begins before the glass is raised. The ritual starts in the mind — a deliberate choice, not an impulse.',
  },
  {
    number: 'II',
    title: 'Measure',
    body: 'Excess is the enemy of experience. SOMA SANCTUM is calibrated for clarity, not consumption.',
  },
  {
    number: 'III',
    title: 'Return',
    body: 'The final note of every ritual is stillness. Not departure — arrival. A return to the self.',
  },
];

export default function RitualSection() {
  const { ref: sectionRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: imgRef, isVisible: imgVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section
      id="ritual"
      className="relative py-32 overflow-hidden"
      style={{ background: '#0A0C1A' }}
    >
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 80% 50%, rgba(26,31,59,0.6) 0%, transparent 60%)',
        }}
      />

      <div className="container relative z-10">
        {/* Section header */}
        <div
          ref={sectionRef as React.RefObject<HTMLDivElement>}
          className="mb-20"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.9s ease-out',
          }}
        >
          <span className="protocol-label">Section I</span>
          <div className="gold-line-left mt-3 mb-6" />
          <h2
            className="font-display text-ivory"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
            }}
          >
            The Ritual
          </h2>
        </div>

        {/* Main content — asymmetric layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left text column — 7/12 */}
          <div className="lg:col-span-7 space-y-12">
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.9s ease-out 0.2s',
              }}
            >
              <p
                className="font-display text-ivory"
                style={{
                  fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)',
                  fontWeight: 300,
                  lineHeight: 1.6,
                  letterSpacing: '0.01em',
                  fontStyle: 'italic',
                }}
              >
                "This is not a drink. It is a protocol.<br />
                A controlled encounter with the self."
              </p>
            </div>

            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.9s ease-out 0.35s',
              }}
            >
              <p
                className="font-body text-ash"
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  lineHeight: 1.95,
                  letterSpacing: '0.04em',
                  maxWidth: '520px',
                  color: 'rgba(217, 217, 217, 0.75)',
                }}
              >
                In ancient Vedic tradition, soma was the sacred elixir — not consumed for pleasure,
                but administered as a passage. A threshold between the ordinary and the elevated.
                SOMA SANCTUM reclaims this lineage. Each bottle is a prescription, each pour a ceremony.
              </p>
            </div>

            {/* Principles */}
            <div className="space-y-8 pt-4">
              {ritualPrinciples.map((principle, i) => (
                <div
                  key={principle.number}
                  className="flex gap-6 items-start"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `all 0.9s ease-out ${0.5 + i * 0.15}s`,
                  }}
                >
                  <div className="flex-shrink-0 pt-1">
                    <span
                      className="font-display text-gold"
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                      }}
                    >
                      {principle.number}
                    </span>
                  </div>
                  <div
                    className="flex-shrink-0 pt-2.5"
                    style={{
                      width: '1px',
                      height: '40px',
                      background: 'rgba(198, 169, 98, 0.3)',
                    }}
                  />
                  <div>
                    <h3
                      className="font-display text-ivory mb-2"
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: 400,
                        letterSpacing: '0.08em',
                      }}
                    >
                      {principle.title}
                    </h3>
                    <p
                      className="font-body"
                      style={{
                        fontSize: '0.82rem',
                        fontWeight: 300,
                        lineHeight: 1.85,
                        color: 'rgba(217, 217, 217, 0.6)',
                        letterSpacing: '0.03em',
                      }}
                    >
                      {principle.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right image column — 5/12 */}
          <div
            ref={imgRef as React.RefObject<HTMLDivElement>}
            className="lg:col-span-5 relative"
            style={{
              opacity: imgVisible ? 1 : 0,
              transform: imgVisible ? 'translateX(0)' : 'translateX(40px)',
              transition: 'all 1.1s ease-out 0.3s',
            }}
          >
            {/* Decorative frame */}
            <div
              className="absolute -inset-4 pointer-events-none"
              style={{
                border: '1px solid rgba(198, 169, 98, 0.1)',
                transform: 'translate(12px, 12px)',
              }}
            />

            {/* Image */}
            <div className="relative overflow-hidden" style={{ aspectRatio: '4/5' }}>
              <img
                src={RITUAL_IMG}
                alt="SOMA SANCTUM — Ritual Close-up"
                className="w-full h-full object-cover"
                style={{
                  filter: 'brightness(0.85) contrast(1.05)',
                }}
              />
              {/* Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(26,31,59,0.2) 0%, transparent 60%, rgba(10,12,26,0.4) 100%)',
                }}
              />
            </div>

            {/* Caption */}
            <div className="mt-4 flex items-center gap-3">
              <div className="gold-line-left" style={{ width: '24px' }} />
              <span
                className="font-mono-soma"
                style={{
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                  color: 'rgba(198, 169, 98, 0.6)',
                  textTransform: 'uppercase',
                }}
              >
                Compound I — Geometric Lotus Mark
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
