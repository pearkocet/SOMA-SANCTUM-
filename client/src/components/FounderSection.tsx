/*
 * SOMA SANCTUM — Founder's Journey
 * Design: Portrait + narrative, split layout on desktop
 * Pearkocet's transformation story: from excess to ritual
 */

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const FOUNDER_PORTRAIT = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663492546214/UdXyViwmHssSrbSWmg7qPW/pearkocet-founder-portrait-72FqVZXUPohCAbmquUmv2p.webp';

const chapters = [
  {
    number: '01',
    title: 'The Admired Void',
    text: 'The person everyone admired… until I discovered that no one wanted to see me truly awake. Lights, parties, drinks that burned more than the soul: a genuine buffet of excess. Every success felt like a useless trophy; every applause, another golden chain. They called me by my name, Pearkocet, but I was already on permanent vacation from myself.',
  },
  {
    number: '02',
    title: 'The Rupture',
    text: 'One night, after another toast with my reflection in a whiskey glass, I understood that fame would not save me. The first step of my own "Twelve Steps Deluxe" was admitting that… yes, perhaps I had drunk too much from the life of others.',
  },
  {
    number: '03',
    title: 'Ritual as Compass',
    text: 'I surrendered to the idea that the outside world had answers. I traveled to India—to temples, to silence, to the Ganges. I sat with monks who listened better than Instagram ever could. I discovered that ritual is not escape; it is return. It is the architecture of transformation.',
  },
  {
    number: '04',
    title: 'The Twelve Steps, Pearkocet Version',
    text: 'I admitted that flashes and likes could not fill the void. I confessed my excesses to temples and monks. I made an inventory of all the nonsense I had collected. I left my ego behind, slowly, yoga-style with sarcasm. I observed my errors, because not all disappear with meditation. I sought spiritual connection between temples, rivers, and geometric lotus, with a cup of clarity in hand.',
  },
  {
    number: '05',
    title: 'The Ritual of SOMA SANCTUM',
    text: 'It is not tequila. It is a liquid manual of control and irony. Each bottle encapsulates the chaos I left behind, the clarity I found in Indian temples, and the dark humor that saves you when you remember your own excesses. Drinking it is not escape: it is rebirth with style, with an ironic wink to the twelve steps that no one wanted to take seriously before me.',
  },
];

export default function FounderSection() {
  const { ref: headerRef, isVisible: headerVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: contentRef, isVisible: contentVisible } = useIntersectionObserver({ threshold: 0.05 });

  return (
    <section
      id="founder"
      className="relative py-32 overflow-hidden"
      style={{ background: '#0A0C1A' }}
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(198, 169, 98, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(26, 31, 59, 0.1) 0%, transparent 50%)
          `,
        }}
      />

      <div className="container relative z-10">

        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className="text-center mb-20"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.9s ease-out',
          }}
        >
          <span className="protocol-label">Section VI</span>
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
            Pearkocet's Journey
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
            "From excess to awakening. From applause to silence. From drinking to escape, to drinking with intention."
          </p>
        </div>

        {/* Main content: Portrait + Narrative */}
        <div
          ref={contentRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        >

          {/* Left: Portrait */}
          <div
            className="flex justify-center"
            style={{
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'all 1s ease-out 0.2s',
            }}
          >
            <div
              className="relative w-full max-w-sm"
              style={{
                aspectRatio: '3/4',
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow: '0 40px 120px rgba(0, 0, 0, 0.8), inset 0 0 60px rgba(198, 169, 98, 0.1)',
                border: '1px solid rgba(198, 169, 98, 0.2)',
              }}
            >
              <img
                src={FOUNDER_PORTRAIT}
                alt="Pearkocet — Founder of SOMA SANCTUM"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(26,31,59,0.3) 0%, transparent 50%, rgba(198,169,98,0.1) 100%)',
                }}
              />
            </div>
          </div>

          {/* Right: Narrative */}
          <div
            className="space-y-8"
            style={{
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible ? 'translateX(0)' : 'translateX(40px)',
              transition: 'all 1s ease-out 0.3s',
            }}
          >
            {chapters.map((chapter, i) => (
              <div
                key={chapter.number}
                className="space-y-3"
                style={{
                  opacity: contentVisible ? 1 : 0,
                  transform: contentVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.8s ease-out ${0.4 + i * 0.1}s`,
                }}
              >
                <div className="flex items-baseline gap-4">
                  <span
                    className="font-mono-soma flex-shrink-0"
                    style={{
                      fontSize: '1.8rem',
                      letterSpacing: '0.2em',
                      color: 'rgba(198, 169, 98, 0.4)',
                      fontWeight: 300,
                    }}
                  >
                    {chapter.number}
                  </span>
                  <h3
                    className="font-display text-ivory"
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 300,
                      letterSpacing: '0.08em',
                    }}
                  >
                    {chapter.title}
                  </h3>
                </div>
                <p
                  className="font-body pl-20"
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: 'rgba(217, 217, 217, 0.65)',
                    letterSpacing: '0.04em',
                  }}
                >
                  {chapter.text}
                </p>
                {i < chapters.length - 1 && (
                  <div
                    className="gold-line-left mt-4"
                    style={{
                      width: '60px',
                      opacity: 0.3,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy footer */}
        <div
          className="mt-24 max-w-4xl mx-auto text-center space-y-6"
          style={{
            opacity: contentVisible ? 1 : 0,
            transition: 'opacity 1s ease-out 0.8s',
          }}
        >
          <div className="gold-line" style={{ maxWidth: '200px', margin: '0 auto' }} />
          <p
            className="font-display text-ivory"
            style={{
              fontSize: '1.3rem',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.6,
              letterSpacing: '0.02em',
            }}
          >
            Inspired by Indian philosophy:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { concept: 'Dharma', meaning: 'Do what truly matters, even if it means laughing at yourself.' },
              { concept: 'Samsara', meaning: 'Cycles of excess are inevitable, but you can dance through them with grace.' },
              { concept: 'Moksha', meaning: 'Freedom arrives when you stop taking yourself too seriously.' },
            ].map((item) => (
              <div key={item.concept} className="space-y-2">
                <span
                  className="font-display text-gold block"
                  style={{ fontSize: '1rem', fontWeight: 300, letterSpacing: '0.08em' }}
                >
                  {item.concept}
                </span>
                <p
                  className="font-body"
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 300,
                    color: 'rgba(217, 217, 217, 0.5)',
                    lineHeight: 1.7,
                    letterSpacing: '0.05em',
                  }}
                >
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
