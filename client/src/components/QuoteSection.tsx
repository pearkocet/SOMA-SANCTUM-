/*
 * SOMA SANCTUM — Quote Section
 * Design: Full-width, centered, minimal — a breath between sections
 * Used as visual separator between major sections
 */

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface QuoteSectionProps {
  quote: string;
  attribution?: string;
  bgColor?: string;
}

export default function QuoteSection({
  quote,
  attribution,
  bgColor = '#0A0C1A',
}: QuoteSectionProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: bgColor }}
    >
      {/* Horizontal gold lines */}
      <div
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          top: '50%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(198, 169, 98, 0.15), transparent)',
        }}
      />

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="container text-center"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 1s ease-out',
        }}
      >
        <div className="max-w-3xl mx-auto">
          {/* Opening mark */}
          <span
            className="font-display text-gold block mb-6"
            style={{ fontSize: '4rem', fontWeight: 300, lineHeight: 0.5, opacity: 0.4 }}
          >
            "
          </span>

          <blockquote
            className="font-display text-ivory"
            style={{
              fontSize: 'clamp(1.3rem, 3vw, 2.2rem)',
              fontWeight: 300,
              lineHeight: 1.5,
              letterSpacing: '0.02em',
              fontStyle: 'italic',
            }}
          >
            {quote}
          </blockquote>

          {attribution && (
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="gold-line-left" style={{ width: '30px' }} />
              <span
                className="font-mono-soma"
                style={{
                  fontSize: '0.6rem',
                  letterSpacing: '0.25em',
                  color: 'rgba(198, 169, 98, 0.6)',
                  textTransform: 'uppercase',
                }}
              >
                {attribution}
              </span>
              <div className="gold-line-left" style={{ width: '30px' }} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
