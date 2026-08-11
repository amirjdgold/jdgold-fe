import { Link } from 'react-router-dom';
import { useId } from 'react';
import type { GetInTouchSection, TeamMember } from '@/hooks/useSiteContent';
import { resolveTeamMembers } from '@/figma-home/teamManagement';
import { resolveGetInTouchSection } from '@/figma-home/getInTouchSection';
import svgPaths from '@/figma-home/svg-paths';

const GOLD = '#c09038';
const HERO_IMG = '/images/hero-slide-gold-bar-hand.png';
const COMMITMENT_IMG = '/images/hero-slide-whatsapp-04.png';
const JEWELLERY_DEPT_IMG = '/images/about-refinery-portrait.png';

const VALUE_CARDS = [
  {
    title: 'Trusted Legacy',
    body: 'Built on decades of trust, integrity, and excellence in the gold industry.',
    icon: 'shield',
  },
  {
    title: 'Premium Quality',
    body: 'We deal in 99.9% pure gold, ensuring the highest international standards.',
    icon: 'diamond',
  },
  {
    title: 'Integrity & Transparency',
    body: 'Our business is built on honesty, transparency, and ethical gold practices.',
    icon: 'handshake',
  },
  {
    title: 'Global Presence',
    body: 'Proudly serving clients across the globe with dedication and professionalism.',
    icon: 'globe',
  },
] as const;

const LEADERSHIP_META = [
  {
    role: 'Director & Founder',
    experience: '45 Years Experience in Gold Industry',
  },
  {
    role: 'Chairman & Founder',
    experience: '15 Years Experience in Gold Industry',
  },
  {
    role: 'CEO & Co-Founder',
    experience: '10 Years Experience in Gold Industry',
  },
] as const;

const JEWELLERY_IMAGES = [
  '/images/management-collage-01.png',
  '/images/management-collage-02.png',
  '/images/management-collage-03.png',
  '/images/management-collage-04.png',
  '/images/management-collage-05.png',
];

const COMMITMENTS = [
  { title: 'Best Quality', icon: 'ribbon' },
  { title: 'Fair Pricing', icon: 'scales' },
  { title: 'Safe & Secure', icon: 'lock' },
  { title: 'Customer Satisfaction', icon: 'people' },
] as const;

function OrnamentTitle({ title }: { title: string }) {
  const uid = useId().replace(/:/g, '');
  const g1 = `ab-${uid}-1`;
  const g2 = `ab-${uid}-2`;
  return (
    <div className="relative flex w-full shrink-0 content-stretch items-center justify-center gap-[12px]">
      <div className="relative h-0 min-w-px flex-[1_0_0]">
        <div className="absolute inset-[-5.77px_-1.7%_-5.77px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344.773 11.547">
            <path d={svgPaths.p3af20d00} fill={`url(#${g1})`} />
            <defs>
              <linearGradient id={g1} gradientUnits="userSpaceOnUse" x1="0" x2="339" y1="6.7735" y2="6.7735">
                <stop stopColor="#C09038" />
                <stop offset="0.5" stopColor="#975E00" />
                <stop offset="1" stopColor="#C09038" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <h2 className="relative shrink-0 whitespace-nowrap text-center font-['Alice:Regular',sans-serif] text-[28px] tracking-[0.06em] text-[#c09038]">
        {title}
      </h2>
      <div className="relative h-0 min-w-px flex-[1_0_0]">
        <div className="absolute inset-[-5.77px_0_-5.77px_-1.7%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344.773 11.547">
            <path d={svgPaths.p1cb0fd00} fill={`url(#${g2})`} />
            <defs>
              <linearGradient id={g2} gradientUnits="userSpaceOnUse" x1="5.7735" x2="344.774" y1="7.2735" y2="7.2735">
                <stop stopColor="#C09038" />
                <stop offset="0.5" stopColor="#975E00" />
                <stop offset="1" stopColor="#C09038" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function ValueIcon({ kind }: { kind: (typeof VALUE_CARDS)[number]['icon'] }) {
  const common = {
    className: 'size-[32px]',
    fill: 'none',
    stroke: GOLD,
    strokeWidth: 1.6,
    viewBox: '0 0 24 24',
  };
  if (kind === 'shield') {
    return (
      <svg {...common}>
        <path d="M12 3l7 3v5c0 4.5-3 8.2-7 9.5C8 19.2 5 15.5 5 11V6l7-3z" />
        <path d="M9.5 12l1.8 1.8L15 10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (kind === 'diamond') {
    return (
      <svg {...common}>
        <path d="M3 9l4-5h10l4 5-9 11L3 9z" strokeLinejoin="round" />
        <path d="M3 9h18M8 4l-1.5 5L12 20 17.5 9 16 4" strokeLinejoin="round" />
      </svg>
    );
  }
  if (kind === 'handshake') {
    return (
      <svg {...common}>
        <path d="M8 12l2.5 2.5a2 2 0 002.8 0L16 12" strokeLinecap="round" />
        <path d="M3 10l4-3h3l2 2 2-2h3l4 3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 14l-2 2M17 14l2 2" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <path d="M3 12h18M4.5 7.5h15M4.5 16.5h15" strokeLinecap="round" />
    </svg>
  );
}

function CommitmentIcon({ kind }: { kind: (typeof COMMITMENTS)[number]['icon'] }) {
  const common = {
    className: 'size-[26px]',
    fill: 'none',
    stroke: GOLD,
    strokeWidth: 1.6,
    viewBox: '0 0 24 24',
  };
  if (kind === 'ribbon') {
    return (
      <svg {...common}>
        <circle cx="12" cy="10" r="5" />
        <path d="M9 14.5L8 21l4-2.5L16 21l-1-6.5" strokeLinejoin="round" />
        <path d="M10.5 9.5l1.2 1.2L14 8.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (kind === 'scales') {
    return (
      <svg {...common}>
        <path d="M12 4v14M8 18h8M5 8h14" strokeLinecap="round" />
        <path d="M5 8l-2 5h4L5 8zM19 8l-2 5h4l-2-5z" strokeLinejoin="round" />
      </svg>
    );
  }
  if (kind === 'lock') {
    return (
      <svg {...common}>
        <path d="M12 3l7 3v5c0 4.5-3 8.2-7 9.5C8 19.2 5 15.5 5 11V6l7-3z" />
        <rect x="9.5" y="10" width="5" height="4" rx="0.8" />
        <path d="M11 10V9a1 1 0 012 0v1" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <circle cx="9" cy="8" r="2.5" />
      <circle cx="15.5" cy="8.5" r="2" />
      <path d="M4.5 17c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5" strokeLinecap="round" />
      <path d="M13 17c.3-1.8 1.8-3.2 3.7-3.2 1.4 0 2.6.8 3.2 1.9" strokeLinecap="round" />
    </svg>
  );
}

/** About content panel embedded in the home Frame8 area. */
export function AboutSection({
  teamMembers,
  getInTouch,
}: {
  teamMembers?: TeamMember[];
  getInTouch?: GetInTouchSection | null;
}) {
  const leaders = resolveTeamMembers(teamMembers).slice(0, 3);
  const contact = resolveGetInTouchSection(getInTouch);

  return (
    <div className="figma-panel-page relative w-full overflow-hidden rounded-[16px] border-2 border-solid border-[#c09038] bg-[#010100]">
      <div className="px-[28px] py-[24px]">
        <div className="mb-[16px] flex justify-start">
          <Link
            to="/"
            className="font-['Alice:Regular',sans-serif] text-[14px] text-[#c09038] no-underline underline-offset-4 hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
        {/* Hero */}
        <section
          className="grid items-center gap-[32px]"
          style={{ gridTemplateColumns: '1.05fr 0.95fr' }}
        >
          <div>
            <p className="font-['Alice:Regular',sans-serif] text-[16px] tracking-[0.2em] text-[#c09038]">
              ABOUT
            </p>
            <h1 className="mt-[4px] font-['Alice:Regular',sans-serif] text-[48px] leading-none tracking-[0.04em] text-[#c09038]">
              JD GOLD
            </h1>
            <div className="mt-[16px] max-w-[540px] space-y-[12px] font-['Alice:Regular',sans-serif] text-[15px] leading-[1.7] text-white/85">
              <p>
                JD GOLD is a trusted name in the gold industry, known for excellence, authenticity, and
                long-standing relationships. With decades of experience, we have built our reputation on
                purity, honesty, and transparent dealings.
              </p>
              <p>
                From refining and trading to jewellery craftsmanship, every part of our business reflects a
                commitment to quality and ethical practices that our clients can rely on.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[4px] border border-[#c09038]/50">
            <img
              src={HERO_IMG}
              alt="JD Gold fine gold bars and nuggets"
              className="aspect-[5/4] w-full object-cover"
            />
          </div>
        </section>

        {/* Values */}
        <section className="mt-[32px] grid gap-[12px]" style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }}>
          {VALUE_CARDS.map((card) => (
            <article
              key={card.title}
              className="flex flex-col items-center border border-[#c09038] bg-[#0a0a0a] px-[12px] py-[18px] text-center"
            >
              <ValueIcon kind={card.icon} />
              <h3 className="mt-[12px] font-['Alice:Regular',sans-serif] text-[13px] tracking-[0.04em] text-[#c09038]">
                {card.title.toUpperCase()}
              </h3>
              <p className="mt-[8px] font-['Alice:Regular',sans-serif] text-[12px] leading-[1.55] text-white/75">
                {card.body}
              </p>
            </article>
          ))}
        </section>

        {/* Leadership */}
        <section className="mt-[40px]">
          <OrnamentTitle title="OUR LEADERSHIP" />
          <div className="mt-[24px] grid gap-[14px]" style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
            {leaders.map((leader, i) => {
              const meta = LEADERSHIP_META[i] ?? LEADERSHIP_META[0];
              return (
                <article
                  key={leader.id}
                  className="overflow-hidden border border-[#c09038] bg-[#0a0a0a]"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={leader.image}
                      alt={leader.imageAlt || leader.name}
                      className="absolute inset-0 size-full object-cover object-top"
                    />
                  </div>
                  <div className="px-[12px] py-[14px] text-center">
                    <p className="font-['Alice:Regular',sans-serif] text-[12px] tracking-[0.08em] text-[#c09038]">
                      {meta.role.toUpperCase()}
                    </p>
                    <h3 className="mt-[4px] font-['Alice:Regular',sans-serif] text-[16px] text-white">
                      {leader.name}
                    </h3>
                    <p className="mt-[4px] font-['Alice:Regular',sans-serif] text-[12px] text-white/70">
                      {meta.experience}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Jewellery Department */}
        <section
          className="mt-[40px] grid items-center gap-[20px] border border-[#c09038]/40 bg-[#0a0a0a]"
          style={{ gridTemplateColumns: '1fr 1fr' }}
        >
          <div className="px-[28px] py-[24px]">
            <h2 className="font-['Alice:Regular',sans-serif] text-[26px] leading-tight tracking-[0.04em] text-[#c09038]">
              JD GOLD
              <br />
              JEWELLERY DEPARTMENT
            </h2>
            <p className="mt-[12px] font-['Alice:Regular',sans-serif] text-[13px] tracking-[0.06em] text-white/70">
              Managed By
            </p>
            <p className="mt-[4px] font-['Alice:Regular',sans-serif] text-[18px] text-[#c09038]">
              Ma&apos;am Dilara Amir Bukhari
            </p>
            <p className="mt-[14px] max-w-[420px] font-['Alice:Regular',sans-serif] text-[13px] leading-[1.7] text-white/80">
              Under her leadership, the jewellery department blends creativity with craftsmanship —
              ensuring every piece reflects JD Gold&apos;s standards of purity, design excellence, and
              lasting quality.
            </p>
          </div>
          <div className="relative min-h-[320px] overflow-hidden">
            <img
              src={JEWELLERY_DEPT_IMG}
              alt="JD Gold jewellery department"
              className="absolute inset-0 size-full object-cover"
            />
          </div>
        </section>

        {/* Jewellery Collection */}
        <section className="mt-[40px]">
          <OrnamentTitle title="OUR JEWELLERY COLLECTION" />
          <div className="mt-[24px] grid gap-[10px]" style={{ gridTemplateColumns: 'repeat(5, minmax(0, 1fr))' }}>
            {JEWELLERY_IMAGES.map((src, i) => (
              <div
                key={src}
                className="relative aspect-square overflow-hidden border border-[#c09038]"
              >
                <img
                  src={src}
                  alt={`Jewellery collection ${i + 1}`}
                  className="absolute inset-0 size-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Commitment */}
        <section className="mt-[40px]">
          <OrnamentTitle title="OUR COMMITMENT" />
          <div
            className="mt-[24px] grid items-center gap-[24px]"
            style={{ gridTemplateColumns: '1.2fr 0.8fr' }}
          >
            <div>
              <p className="max-w-[640px] font-['Alice:Regular',sans-serif] text-[14px] leading-[1.75] text-white/85">
                At JD GOLD, we are committed to delivering excellence in every transaction and every
                piece we craft. Your trust is our greatest asset — and we protect it through quality,
                fairness, security, and dedicated service.
              </p>
              <div className="mt-[24px] grid gap-[16px]" style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }}>
                {COMMITMENTS.map((item) => (
                  <div key={item.title} className="flex flex-col items-center text-center">
                    <CommitmentIcon kind={item.icon} />
                    <p className="mt-[8px] font-['Alice:Regular',sans-serif] text-[12px] tracking-[0.04em] text-[#c09038]">
                      {item.title.toUpperCase()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden border border-[#c09038]/50">
              <img
                src={COMMITMENT_IMG}
                alt="JD Gold commitment to quality"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Footer contact */}
        <footer className="mt-[40px] border-t border-[#c09038] pt-[18px] pb-[8px]">
          <div className="flex flex-wrap items-center justify-center gap-x-[24px] gap-y-[10px] font-['Alice:Regular',sans-serif] text-[13px] text-[#c09038]">
            <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="no-underline text-[#c09038]">
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="no-underline text-[#c09038]">
              {contact.email}
            </a>
            <span>www.jdgold.com</span>
            <span className="max-w-[420px] text-center">{contact.address}</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default AboutSection;
