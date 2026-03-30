/*
 * SOMA SANCTUM — Age Gate
 * Design: Full-screen overlay, minimal, ritualistic
 * Appears on first visit, stores consent in sessionStorage
 */

import { useState, useEffect } from 'react';

const LOTUS_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663492546214/UdXyViwmHssSrbSWmg7qPW/soma-lotus-bg-YLvmbpDYo6cehKgSTAYexw.webp';

export default function AgeGate() {
  const [visible, setVisible] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    const verified = sessionStorage.getItem('soma-age-verified');
    if (!verified) {
      setTimeout(() => setVisible(true), 200);
    }
  }, []);

  const handleConfirm = () => {
    setAnimateOut(true);
    setTimeout(() => {
      sessionStorage.setItem('soma-age-verified', 'true');
      setVisible(false);
    }, 800);
  };

  const handleDecline = () => {
    window.location.href = 'https://www.responsibility.org/';
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{
        background: '#0A0C1A',
        opacity: animateOut ? 0 : 1,
        transition: 'opacity 0.8s ease-out',
      }}
    >
      {/* Background lotus */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${LOTUS_BG})`,
          backgroundSize: '50%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.06,
        }}
      />

      <div
        className="relative z-10 text-center px-8 max-w-md"
        style={{
          opacity: animateOut ? 0 : 1,
          transform: animateOut ? 'translateY(-20px)' : 'translateY(0)',
          transition: 'all 0.8s ease-out',
        }}
      >
        {/* Logo */}
        <div className="mb-10">
          <span
            className="font-display text-ivory block"
            style={{ fontSize: '1.5rem', fontWeight: 300, letterSpacing: '0.3em' }}
          >
            SOMA
          </span>
          <span
            className="font-display text-gold block"
            style={{ fontSize: '0.7rem', fontWeight: 400, letterSpacing: '0.5em', marginTop: '0.25rem' }}
          >
            SANCTUM
          </span>
        </div>

        <div className="gold-line mb-10" style={{ maxWidth: '80px', margin: '0 auto 2.5rem' }} />

        <p
          className="font-display text-ivory mb-3"
          style={{ fontSize: '1.4rem', fontWeight: 300, letterSpacing: '0.03em', lineHeight: 1.4 }}
        >
          This sanctuary is reserved<br />
          for those of legal age.
        </p>

        <p
          className="font-body mb-10"
          style={{
            fontSize: '0.78rem',
            fontWeight: 300,
            color: 'rgba(217, 217, 217, 0.45)',
            letterSpacing: '0.06em',
            lineHeight: 1.9,
          }}
        >
          Please confirm you are of legal drinking age<br />
          in your country of residence.
        </p>

        <div className="flex flex-col gap-4 items-center">
          <button
            onClick={handleConfirm}
            className="soma-btn-primary"
            style={{ minWidth: '200px' }}
          >
            I am of legal age
          </button>
          <button
            onClick={handleDecline}
            className="soma-btn-ghost"
            style={{ fontSize: '0.65rem' }}
          >
            I am not of legal age
          </button>
        </div>

        <p
          className="font-mono-soma mt-10"
          style={{
            fontSize: '0.55rem',
            letterSpacing: '0.15em',
            color: 'rgba(245, 241, 232, 0.2)',
            lineHeight: 1.8,
          }}
        >
          SOMA SANCTUM advocates responsible consumption.<br />
          Do not share with minors.
        </p>
      </div>
    </div>
  );
}
