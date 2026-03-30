/*
 * SOMA SANCTUM — Protocol No. 7 Section
 * Design: Clinical luxury — white-on-dark document aesthetic
 * Layout: Centered document-style layout with clinical data
 * Animation: Line draws, data reveals, staggered fade-ins
 */

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const protocolSpecs = [
  { code: 'SS-07-A', label: 'Expression', value: 'Extra Añejo', note: 'Minimum 36 months' },
  { code: 'SS-07-B', label: 'Agave Variety', value: 'Agave Tequilana Weber', note: 'Blue variety, certified' },
  { code: 'SS-07-C', label: 'Terroir', value: 'Highlands of Jalisco', note: '2,100m elevation' },
  { code: 'SS-07-D', label: 'Distillation', value: 'Triple copper pot', note: 'Artisanal process' },
  { code: 'SS-07-E', label: 'Maturation', value: 'French Limousin oak', note: 'New barrels only' },
  { code: 'SS-07-F', label: 'Proof', value: '40% ABV', note: 'Unfiltered, natural' },
  { code: 'SS-07-G', label: 'Batch Volume', value: '144 bottles', note: 'Per annual release' },
  { code: 'SS-07-H', label: 'Certification', value: 'CRT Certified', note: 'NOM 1234' },
];

const sensoryNotes = [
  { phase: 'Nose', notes: ['Copal incense', 'Dried marigold', 'Dark chocolate', 'Sandalwood'] },
  { phase: 'Palate', notes: ['Roasted agave', 'Vanilla orchid', 'Black pepper', 'Cardamom'] },
  { phase: 'Finish', notes: ['Lingering warmth', 'Dried fig', 'Sacred earth', 'Stillness'] },
];

export default function ProtocolSection() {
  const { ref: headerRef, isVisible: headerVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: docRef, isVisible: docVisible } = useIntersectionObserver({ threshold: 0.05 });
  const { ref: sensoryRef, isVisible: sensoryVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="protocol"
      className="relative py-32 overflow-hidden"
      style={{ background: '#0D0F1F' }}
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(198, 169, 98, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(198, 169, 98, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container relative z-10">

        {/* Section header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className="mb-20 text-center"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.9s ease-out',
          }}
        >
          <span className="protocol-label">Section III</span>
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
            Protocol No. 7
          </h2>
          <p
            className="font-body mt-4 mx-auto"
            style={{
              fontSize: '0.85rem',
              fontWeight: 300,
              color: 'rgba(217, 217, 217, 0.5)',
              letterSpacing: '0.08em',
              maxWidth: '400px',
              lineHeight: 1.9,
            }}
          >
            A document of precision. The complete specification<br />
            of a singular experience.
          </p>
        </div>

        {/* Clinical document */}
        <div
          ref={docRef as React.RefObject<HTMLDivElement>}
          className="max-w-4xl mx-auto"
          style={{
            opacity: docVisible ? 1 : 0,
            transform: docVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 1s ease-out 0.2s',
          }}
        >
          {/* Document header */}
          <div
            className="glass-card p-8 mb-px"
            style={{
              borderBottom: 'none',
              borderRadius: '0',
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <span
                  className="font-mono-soma block mb-1"
                  style={{ fontSize: '0.6rem', letterSpacing: '0.25em', color: 'rgba(198, 169, 98, 0.6)' }}
                >
                  SOMA SANCTUM PRIVATE RESERVE
                </span>
                <span
                  className="font-display text-ivory"
                  style={{ fontSize: '1.4rem', fontWeight: 300, letterSpacing: '0.05em' }}
                >
                  Technical Specification
                </span>
              </div>
              <div className="text-right">
                <span
                  className="font-mono-soma block"
                  style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'rgba(198, 169, 98, 0.5)' }}
                >
                  DOC-SS-007
                </span>
                <span
                  className="font-mono-soma block mt-1"
                  style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'rgba(217, 217, 217, 0.35)' }}
                >
                  REV. 2024 · CONFIDENTIAL
                </span>
              </div>
            </div>
          </div>

          {/* Specs table */}
          <div className="glass-card" style={{ borderRadius: '0', borderTop: 'none' }}>
            {protocolSpecs.map((spec, i) => (
              <div
                key={spec.code}
                className="flex items-center gap-4 px-8 py-4"
                style={{
                  borderBottom: i < protocolSpecs.length - 1 ? '1px solid rgba(198, 169, 98, 0.07)' : 'none',
                  opacity: docVisible ? 1 : 0,
                  transform: docVisible ? 'translateX(0)' : 'translateX(-15px)',
                  transition: `all 0.7s ease-out ${0.3 + i * 0.07}s`,
                }}
              >
                <span
                  className="font-mono-soma flex-shrink-0"
                  style={{
                    fontSize: '0.58rem',
                    letterSpacing: '0.15em',
                    color: 'rgba(198, 169, 98, 0.4)',
                    width: '80px',
                  }}
                >
                  {spec.code}
                </span>
                <span
                  className="font-body flex-shrink-0"
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 300,
                    color: 'rgba(217, 217, 217, 0.5)',
                    letterSpacing: '0.08em',
                    width: '140px',
                  }}
                >
                  {spec.label}
                </span>
                <span
                  className="font-display text-ivory flex-1"
                  style={{
                    fontSize: '1rem',
                    fontWeight: 400,
                    letterSpacing: '0.03em',
                  }}
                >
                  {spec.value}
                </span>
                <span
                  className="font-mono-soma hidden sm:block"
                  style={{
                    fontSize: '0.58rem',
                    letterSpacing: '0.12em',
                    color: 'rgba(217, 217, 217, 0.3)',
                    textAlign: 'right',
                  }}
                >
                  {spec.note}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Sensory notes */}
        <div
          ref={sensoryRef as React.RefObject<HTMLDivElement>}
          className="max-w-4xl mx-auto mt-16"
        >
          <div
            className="mb-10 text-center"
            style={{
              opacity: sensoryVisible ? 1 : 0,
              transition: 'all 0.9s ease-out',
            }}
          >
            <span className="section-label">Sensory Profile</span>
            <div className="gold-line mt-3" style={{ maxWidth: '120px', margin: '0.75rem auto 0' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px">
            {sensoryNotes.map((phase, i) => (
              <div
                key={phase.phase}
                className="glass-card p-8"
                style={{
                  borderRadius: '0',
                  opacity: sensoryVisible ? 1 : 0,
                  transform: sensoryVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.8s ease-out ${0.1 + i * 0.15}s`,
                }}
              >
                <div className="mb-6">
                  <span
                    className="font-mono-soma block mb-2"
                    style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: 'rgba(198, 169, 98, 0.5)' }}
                  >
                    {`0${i + 1}`}
                  </span>
                  <h3
                    className="font-display text-ivory"
                    style={{ fontSize: '1.3rem', fontWeight: 300, letterSpacing: '0.05em' }}
                  >
                    {phase.phase}
                  </h3>
                  <div className="gold-line-left mt-3" style={{ width: '30px' }} />
                </div>
                <ul className="space-y-2.5">
                  {phase.notes.map((note) => (
                    <li
                      key={note}
                      className="flex items-center gap-3"
                    >
                      <span
                        className="flex-shrink-0 rounded-full"
                        style={{
                          width: '3px',
                          height: '3px',
                          background: '#C6A962',
                          opacity: 0.6,
                        }}
                      />
                      <span
                        className="font-body"
                        style={{
                          fontSize: '0.8rem',
                          fontWeight: 300,
                          color: 'rgba(245, 241, 232, 0.65)',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {note}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
