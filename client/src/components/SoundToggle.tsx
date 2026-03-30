/*
 * SOMA SANCTUM — Sound Toggle
 * Floating minimal button to indicate ambient sound capability
 * (Visual only — no actual audio file needed for demo)
 */

import { useState } from 'react';
import { toast } from 'sonner';

export default function SoundToggle() {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
    if (!active) {
      toast('Ambient soundscape activated — breathe.');
    } else {
      toast('Silence restored.');
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="fixed bottom-8 right-8 z-40 flex items-center gap-2.5 transition-all duration-400 group"
      aria-label="Toggle ambient sound"
      style={{
        background: 'rgba(10, 12, 26, 0.8)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(198, 169, 98, 0.2)',
        padding: '0.6rem 1rem',
      }}
    >
      {/* Sound wave icon */}
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        style={{ transition: 'opacity 0.3s ease' }}
      >
        {active ? (
          <>
            <path d="M1 5H3L5 2V12L3 9H1V5Z" stroke="#C6A962" strokeWidth="0.8" strokeLinejoin="round" />
            <path d="M7 4.5C8.2 5.2 9 6 9 7C9 8 8.2 8.8 7 9.5" stroke="#C6A962" strokeWidth="0.8" strokeLinecap="round" />
            <path d="M9.5 2.5C11.5 3.8 12.5 5.3 12.5 7C12.5 8.7 11.5 10.2 9.5 11.5" stroke="#C6A962" strokeWidth="0.8" strokeLinecap="round" />
          </>
        ) : (
          <>
            <path d="M1 5H3L5 2V12L3 9H1V5Z" stroke="rgba(198,169,98,0.4)" strokeWidth="0.8" strokeLinejoin="round" />
            <path d="M8 5L12 9M12 5L8 9" stroke="rgba(198,169,98,0.4)" strokeWidth="0.8" strokeLinecap="round" />
          </>
        )}
      </svg>

      <span
        className="font-mono-soma"
        style={{
          fontSize: '0.55rem',
          letterSpacing: '0.2em',
          color: active ? '#C6A962' : 'rgba(198, 169, 98, 0.4)',
          transition: 'color 0.3s ease',
        }}
      >
        {active ? 'SOUND ON' : 'SOUND OFF'}
      </span>
    </button>
  );
}
