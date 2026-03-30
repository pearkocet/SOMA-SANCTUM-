/*
 * SOMA SANCTUM — Origin Section
 * Design: Full-bleed agave image background, text overlay with frosted glass
 * Layout: Split — image left (60%), text right (40%) on desktop
 * Animation: Parallax background, text fade-in from right
 */

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const AGAVE_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663492546214/UdXyViwmHssSrbSWmg7qPW/soma-agave-field-BMKMgCU6ivLuVKQhBRzHrk.webp';
const LOTUS_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663492546214/UdXyViwmHssSrbSWmg7qPW/soma-lotus-bg-YLvmbpDYo6cehKgSTAYexw.webp';

const originData = [
  { label: 'Altitude', value: '2,100 m', unit: 'above sea level' },
  { label: 'Agave Age', value: '12–14', unit: 'years to harvest' },
  { label: 'Distillation', value: 'Triple', unit: 'copper pot still' },
  { label: 'Batch Size', value: '144', unit: 'bottles per release' },
];

export default function OriginSection() {
  const { ref: textRef, isVisible: textVisible } = useIntersectionObserver({ threshold: 0.15 });
  const { ref: statsRef, isVisible: statsVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="origin"
      className="relative overflow-hidden"
      style={{ background: '#0A0C1A', minHeight: '100vh' }}
    >
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${AGAVE_IMG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Gradient overlays */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(to right, rgba(10,12,26,0.3) 0%, rgba(10,12,26,0.75) 50%, rgba(10,12,26,0.97) 100%)',
        }}
      />
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(10,12,26,0.5) 0%, transparent 30%, transparent 70%, rgba(10,12,26,0.9) 100%)',
        }}
      />

      {/* Lotus watermark */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${LOTUS_BG})`,
          backgroundSize: '70%',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
          opacity: 0.04,
        }}
      />

      <div className="container relative z-10 py-32 min-h-screen flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-screen py-20">

          {/* Left spacer / decorative element */}
          <div className="hidden lg:block lg:col-span-4">
            <div
              className="flex flex-col items-start gap-4"
              style={{
                opacity: textVisible ? 1 : 0,
                transform: textVisible ? 'translateX(0)' : 'translateX(-30px)',
                transition: 'all 1s ease-out',
              }}
            >
              <span className="protocol-label">Section II</span>
              <div className="gold-line-left" />
              <p
                className="font-display text-ivory"
                style={{
                  fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                  fontWeight: 300,
                  lineHeight: 1.05,
                  writingMode: 'vertical-rl',
                  textOrientation: 'mixed',
                  transform: 'rotate(180deg)',
                  letterSpacing: '0.1em',
                  color: 'rgba(245, 241, 232, 0.15)',
                }}
              >
                ORIGIN
              </p>
            </div>
          </div>

          {/* Right text column */}
          <div
            ref={textRef as React.RefObject<HTMLDivElement>}
            className="lg:col-span-8 space-y-10"
          >
            {/* Mobile label */}
            <div
              className="lg:hidden"
              style={{
                opacity: textVisible ? 1 : 0,
                transition: 'all 0.9s ease-out',
              }}
            >
              <span className="protocol-label">Section II</span>
              <div className="gold-line-left mt-3" />
            </div>

            <div
              style={{
                opacity: textVisible ? 1 : 0,
                transform: textVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.9s ease-out 0.1s',
              }}
            >
              <h2
                className="font-display text-ivory"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                  fontWeight: 300,
                  lineHeight: 1.05,
                  letterSpacing: '-0.01em',
                }}
              >
                From Earth<br />
                <em style={{ color: '#C6A962', fontStyle: 'italic' }}>to Awareness.</em>
              </h2>
            </div>

            <div
              style={{
                opacity: textVisible ? 1 : 0,
                transform: textVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.9s ease-out 0.25s',
              }}
            >
              <p
                className="font-display text-ivory"
                style={{
                  fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                  fontWeight: 300,
                  lineHeight: 1.65,
                  fontStyle: 'italic',
                  color: 'rgba(245, 241, 232, 0.8)',
                  maxWidth: '560px',
                }}
              >
                "Distilled not for escape, but for return."
              </p>
            </div>

            <div
              style={{
                opacity: textVisible ? 1 : 0,
                transform: textVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.9s ease-out 0.4s',
              }}
            >
              <p
                className="font-body"
                style={{
                  fontSize: '0.88rem',
                  fontWeight: 300,
                  lineHeight: 2,
                  color: 'rgba(217, 217, 217, 0.65)',
                  letterSpacing: '0.04em',
                  maxWidth: '520px',
                }}
              >
                The blue agave grows in volcanic highlands, absorbing minerals and light over a decade
                before it is ready. In Vedic cosmology, the earth itself is sacred — not a resource,
                but a teacher. SOMA SANCTUM honors both traditions: the Mexican terroir and the Indian
                understanding that what we consume becomes who we are.
              </p>
            </div>

            <div
              style={{
                opacity: textVisible ? 1 : 0,
                transform: textVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.9s ease-out 0.55s',
              }}
            >
              <p
                className="font-body"
                style={{
                  fontSize: '0.88rem',
                  fontWeight: 300,
                  lineHeight: 2,
                  color: 'rgba(217, 217, 217, 0.65)',
                  letterSpacing: '0.04em',
                  maxWidth: '520px',
                }}
              >
                Our master distiller trained under both a Jalisco jimador and an Ayurvedic practitioner.
                The result is a spirit that carries the memory of the land and the intention of the maker.
                Every bottle is numbered. Every batch is documented. Nothing is left to chance.
              </p>
            </div>

            {/* Divider */}
            <div
              className="gold-line"
              style={{
                maxWidth: '400px',
                opacity: textVisible ? 0.4 : 0,
                transition: 'opacity 1s ease-out 0.7s',
              }}
            />

            {/* Stats grid */}
            <div
              ref={statsRef as React.RefObject<HTMLDivElement>}
              className="grid grid-cols-2 sm:grid-cols-4 gap-8"
            >
              {originData.map((stat, i) => (
                <div
                  key={stat.label}
                  className="space-y-1"
                  style={{
                    opacity: statsVisible ? 1 : 0,
                    transform: statsVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.8s ease-out ${0.1 + i * 0.1}s`,
                  }}
                >
                  <span
                    className="font-mono-soma"
                    style={{
                      fontSize: '0.6rem',
                      letterSpacing: '0.2em',
                      color: 'rgba(198, 169, 98, 0.6)',
                      textTransform: 'uppercase',
                      display: 'block',
                    }}
                  >
                    {stat.label}
                  </span>
                  <span
                    className="font-display text-ivory block"
                    style={{
                      fontSize: '2rem',
                      fontWeight: 300,
                      lineHeight: 1,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="font-body block"
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 300,
                      color: 'rgba(217, 217, 217, 0.45)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {stat.unit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
