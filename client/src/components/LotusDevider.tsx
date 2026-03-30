/*
 * SOMA SANCTUM — Lotus Divider
 * Animated SVG lotus as section separator
 */

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface LotusDividerProps {
  bgColor?: string;
}

export default function LotusDivider({ bgColor = '#0A0C1A' }: LotusDividerProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.5 });

  return (
    <div
      className="relative py-12 flex items-center justify-center overflow-hidden"
      style={{ background: bgColor }}
    >
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="flex items-center gap-6"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 1s ease-out',
        }}
      >
        {/* Left line */}
        <div
          style={{
            width: isVisible ? '80px' : '0px',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(198, 169, 98, 0.5))',
            transition: 'width 1.2s ease-out 0.3s',
          }}
        />

        {/* Lotus SVG */}
        <svg
          width="32"
          height="28"
          viewBox="0 0 32 28"
          fill="none"
          className="animate-slow-rotate"
          style={{ animationDuration: '20s' }}
        >
          {/* Outer petals */}
          <path
            d="M16 26 C16 26 6 20 6 12 C6 8 10 4 16 4 C22 4 26 8 26 12 C26 20 16 26 16 26Z"
            stroke="rgba(198, 169, 98, 0.5)"
            strokeWidth="0.6"
            fill="none"
          />
          {/* Inner petals */}
          <path
            d="M16 22 C16 22 9 17 9 12 C9 9 12 6 16 6 C20 6 23 9 23 12 C23 17 16 22 16 22Z"
            stroke="rgba(198, 169, 98, 0.4)"
            strokeWidth="0.6"
            fill="none"
          />
          {/* Side petals */}
          <path
            d="M4 14 C4 14 2 10 6 8 C8 7 10 8 10 10"
            stroke="rgba(198, 169, 98, 0.35)"
            strokeWidth="0.6"
            fill="none"
          />
          <path
            d="M28 14 C28 14 30 10 26 8 C24 7 22 8 22 10"
            stroke="rgba(198, 169, 98, 0.35)"
            strokeWidth="0.6"
            fill="none"
          />
          {/* Center dot */}
          <circle cx="16" cy="12" r="1.5" fill="rgba(198, 169, 98, 0.6)" />
        </svg>

        {/* Right line */}
        <div
          style={{
            width: isVisible ? '80px' : '0px',
            height: '1px',
            background: 'linear-gradient(to left, transparent, rgba(198, 169, 98, 0.5))',
            transition: 'width 1.2s ease-out 0.3s',
          }}
        />
      </div>
    </div>
  );
}
