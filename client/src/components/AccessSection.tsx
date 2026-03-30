/*
 * SOMA SANCTUM — Private Access Section
 * Design: Exclusive, minimal, form as ritual
 * Layout: Centered, constrained width, clinical form aesthetic
 * Animation: Form reveals, gold accent on focus
 */

import { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { toast } from 'sonner';

const LOTUS_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663492546214/UdXyViwmHssSrbSWmg7qPW/soma-lotus-bg-YLvmbpDYo6cehKgSTAYexw.webp';

export default function AccessSection() {
  const { ref: sectionRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast('Please complete all required fields.');
      return;
    }
    setSubmitted(true);
    toast('Your request has been received. We will be in touch.');
  };

  const inputStyle = (field: string) => ({
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${focused === field ? 'rgba(198, 169, 98, 0.7)' : 'rgba(245, 241, 232, 0.15)'}`,
    padding: '0.875rem 0',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.85rem',
    fontWeight: 300,
    color: '#F5F1E8',
    letterSpacing: '0.04em',
    outline: 'none',
    transition: 'border-color 0.4s ease',
    caretColor: '#C6A962',
  });

  const labelStyle = {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.58rem',
    letterSpacing: '0.25em',
    color: 'rgba(198, 169, 98, 0.6)',
    textTransform: 'uppercase' as const,
    display: 'block',
    marginBottom: '0.25rem',
  };

  return (
    <section
      id="access"
      className="relative py-32 overflow-hidden"
      style={{ background: '#0A0C1A' }}
    >
      {/* Background lotus */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${LOTUS_BG})`,
          backgroundSize: '60%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.04,
        }}
      />

      {/* Indigo gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(26,31,59,0.5) 0%, transparent 70%)',
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div
            ref={sectionRef as React.RefObject<HTMLDivElement>}
            className="text-center mb-16"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.9s ease-out',
            }}
          >
            <span className="protocol-label">Section V</span>
            <div className="gold-line mt-3 mb-8" style={{ maxWidth: '200px', margin: '0.75rem auto 2rem' }} />
            <h2
              className="font-display text-ivory mb-4"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 300,
                lineHeight: 1.05,
                letterSpacing: '-0.01em',
              }}
            >
              Private Access
            </h2>
            <p
              className="font-body mx-auto"
              style={{
                fontSize: '0.85rem',
                fontWeight: 300,
                color: 'rgba(217, 217, 217, 0.5)',
                letterSpacing: '0.06em',
                lineHeight: 1.9,
                maxWidth: '380px',
              }}
            >
              SOMA SANCTUM is not available through conventional channels.
              Access is by invitation or private request only.
            </p>
          </div>

          {/* Exclusivity indicators */}
          <div
            className="grid grid-cols-3 gap-6 mb-16"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.9s ease-out 0.2s',
            }}
          >
            {[
              { value: '144', label: 'Bottles per release' },
              { value: '< 48h', label: 'Response time' },
              { value: 'Private', label: 'Delivery only' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div
                  className="mb-2 pb-4"
                  style={{ borderBottom: '1px solid rgba(198, 169, 98, 0.15)' }}
                >
                  <span
                    className="font-display text-ivory"
                    style={{ fontSize: '1.8rem', fontWeight: 300, letterSpacing: '-0.02em' }}
                  >
                    {item.value}
                  </span>
                </div>
                <span
                  className="font-mono-soma"
                  style={{ fontSize: '0.58rem', letterSpacing: '0.15em', color: 'rgba(198, 169, 98, 0.5)' }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Form */}
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="space-y-8"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.9s ease-out 0.35s',
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    style={inputStyle('name')}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    style={inputStyle('email')}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Country of Residence</label>
                <input
                  type="text"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  onFocus={() => setFocused('country')}
                  onBlur={() => setFocused(null)}
                  style={inputStyle('country')}
                  placeholder="Country"
                />
              </div>

              <div>
                <label style={labelStyle}>Message (Optional)</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  style={{
                    ...inputStyle('message'),
                    resize: 'none',
                    height: '80px',
                    paddingTop: '0.5rem',
                  }}
                  placeholder="How did you hear about SOMA SANCTUM?"
                />
              </div>

              {/* Disclaimer */}
              <p
                className="font-mono-soma"
                style={{
                  fontSize: '0.58rem',
                  letterSpacing: '0.12em',
                  color: 'rgba(217, 217, 217, 0.3)',
                  lineHeight: 1.8,
                }}
              >
                By submitting this form, you acknowledge that SOMA SANCTUM reserves the right
                to decline any request without explanation. All information is treated with
                absolute discretion.
              </p>

              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="soma-btn-primary"
                  style={{ minWidth: '220px' }}
                >
                  Request Access
                </button>
              </div>
            </form>
          ) : (
            <div
              className="text-center py-16 space-y-6"
              style={{
                opacity: 1,
                animation: 'fadeIn 0.8s ease-out forwards',
              }}
            >
              <div
                className="mx-auto mb-8"
                style={{
                  width: '60px',
                  height: '60px',
                  border: '1px solid rgba(198, 169, 98, 0.4)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10L8 14L16 6" stroke="#C6A962" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3
                className="font-display text-ivory"
                style={{ fontSize: '1.8rem', fontWeight: 300, letterSpacing: '0.05em' }}
              >
                Request Received
              </h3>
              <p
                className="font-body"
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 300,
                  color: 'rgba(217, 217, 217, 0.5)',
                  letterSpacing: '0.06em',
                  lineHeight: 1.9,
                }}
              >
                We will review your request and respond within 48 hours.<br />
                Discretion is our protocol.
              </p>
              <div className="gold-line mt-6" style={{ maxWidth: '100px', margin: '1.5rem auto 0' }} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
