import { Link } from 'react-router-dom';
import { useId } from 'react';
import svgPaths from '@/figma-home/svg-paths';

const LOGO = '/images/jd-gold-logo.png';
const HEADER_IMG = '/images/hero-slide-gold-bar-hand.png';
const REFINERY_HERO = '/images/hero-slide-whatsapp-03.png';
const FACTORY_HERO = '/images/management-collage-08.png';

const REFINERY_STEPS = [
  {
    title: '1. Processing Raw Gold',
    image: '/images/product-gold-nuggets.png',
    body: 'We carefully sort, weigh, and prepare raw gold from mines, scrap, and other sources before refining begins.',
  },
  {
    title: '2. Purification to High Purity',
    image: '/images/hero-slide-whatsapp-01.png',
    body: 'Advanced refining methods remove impurities to achieve up to 99.99% pure gold for international standards.',
  },
  {
    title: '3. Assaying and Testing',
    image: '/images/management-gallery-4.png',
    body: 'Every batch is tested in our laboratory to verify purity and quality before it moves to production.',
  },
  {
    title: '4. Recovery of Precious Metals',
    image: '/images/product-gold-pellets.png',
    body: 'We maximize recovery of gold and other precious metals with minimal waste and responsible processes.',
  },
] as const;

const FACTORY_STEPS = [
  {
    title: '1. Gold Bar Production',
    image: '/images/product-cast-gold-bars.png',
    body: 'We produce investment-grade gold bars in multiple weights and purities for trading and storage.',
  },
  {
    title: '2. Jewelry Manufacturing',
    image: '/images/management-collage-02.png',
    body: 'Skilled artisans craft elegant gold jewelry with precision, creativity, and lasting craftsmanship.',
  },
  {
    title: '3. Custom Gold Products',
    image: '/images/management-collage-03.png',
    body: 'From branded bars to special designs, we create custom gold products tailored to client needs.',
  },
  {
    title: '4. Casting & Molding',
    image: '/images/hero-slide-whatsapp-02.png',
    body: 'Modern casting and molding techniques deliver accurate shapes and consistent quality every time.',
  },
  {
    title: '5. Finishing & Polishing',
    image: '/images/management-collage-05.png',
    body: 'Each piece is inspected, finished, and polished to a premium shine before delivery.',
  },
] as const;

const PRODUCTS = [
  {
    title: 'Gold Bars (Bullion)',
    image: '/images/product-investment-grade-bar.png',
    body: 'Available in various weights from 1g to 1kg with 99.99% purity.',
  },
  {
    title: 'Gold Grains',
    image: '/images/product-refined-nuggets.png',
    body: 'High purity gold grains suitable for refining, manufacturing and investment.',
  },
  {
    title: 'Jewelry',
    image: '/images/management-collage-01.png',
    body: 'Wide range of gold jewelry designed with elegance and crafted to perfection.',
  },
  {
    title: 'Custom-Made Gold Items',
    image: '/images/management-collage-04.png',
    body: 'Custom designs including coins, medallions, corporate gifts and special orders.',
  },
] as const;

const SERVICES = [
  {
    title: '1. Gold Refining',
    body: 'Professional refining of raw and scrap gold to high international purity standards.',
    icon: 'crucible',
  },
  {
    title: '2. Smelting',
    body: 'Controlled smelting processes for clean melting and accurate metal preparation.',
    icon: 'ladle',
  },
  {
    title: '3. Assaying (Purity Testing)',
    body: 'Accurate laboratory testing to confirm gold purity and composition.',
    icon: 'assay',
  },
  {
    title: '4. Custom Manufacturing',
    body: 'End-to-end production of bars, jewelry, and bespoke gold products.',
    icon: 'gear',
  },
  {
    title: '5. Secure Storage / Logistics',
    body: 'Safe handling, storage, and logistics support for valuable gold shipments.',
    icon: 'safe',
  },
] as const;

const TRUST_BADGES = [
  { title: '99.99% Pure Gold', icon: 'badge' },
  { title: 'International Quality Standard', icon: 'globe' },
  { title: 'Trusted by Clients Worldwide', icon: 'handshake' },
  { title: 'Secure & Reliable Operations', icon: 'lock' },
  { title: 'Excellence in Every Step', icon: 'star' },
] as const;

function OrnamentTitle({ title }: { title: string }) {
  const uid = useId().replace(/:/g, '');
  const g1 = `ff-${uid}-1`;
  const g2 = `ff-${uid}-2`;
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
      <h2 className="relative shrink-0 whitespace-nowrap text-center font-['Alice:Regular',sans-serif] text-[28px] tracking-[0.08em] text-[#c09038]">
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

function BoxedHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="inline-flex border border-[#c09038] px-[28px] py-[10px]">
        <h2 className="font-['Alice:Regular',sans-serif] text-[24px] tracking-[0.08em] text-[#c09038]">
          {title}
        </h2>
      </div>
      <p className="mt-[10px] font-['Alice:Regular',sans-serif] text-[13px] tracking-[0.04em] text-white/70">
        {subtitle}
      </p>
    </div>
  );
}

function ServiceIcon({ kind }: { kind: (typeof SERVICES)[number]['icon'] }) {
  const common = {
    className: 'size-[42px]',
    fill: 'none',
    stroke: '#c09038',
    strokeWidth: 1.5,
    viewBox: '0 0 24 24',
  };
  if (kind === 'crucible') {
    return (
      <svg {...common}>
        <path d="M8 4h8M9 4v3l-3 8h12l-3-8V4" strokeLinejoin="round" />
        <path d="M6 20h12" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === 'ladle') {
    return (
      <svg {...common}>
        <path d="M14 4l-4 8h8l-4-8z" strokeLinejoin="round" />
        <path d="M10 12c0 3 1.5 6 4 8" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === 'assay') {
    return (
      <svg {...common}>
        <circle cx="10" cy="10" r="5" />
        <path d="M14 14l5 5" strokeLinecap="round" />
        <path d="M8 10h4M10 8v4" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === 'gear') {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect x="5" y="9" width="14" height="11" rx="1" />
      <path d="M9 9V7a3 3 0 016 0v2" strokeLinecap="round" />
      <circle cx="12" cy="14.5" r="1.2" fill="#c09038" stroke="none" />
    </svg>
  );
}

function TrustIcon({ kind }: { kind: (typeof TRUST_BADGES)[number]['icon'] }) {
  const common = {
    className: 'size-[22px] shrink-0',
    fill: 'none',
    stroke: '#c09038',
    strokeWidth: 1.6,
    viewBox: '0 0 24 24',
  };
  if (kind === 'badge') {
    return (
      <svg {...common}>
        <circle cx="12" cy="10" r="5" />
        <path d="M10 10.2l1.3 1.3L14.2 8.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 15l-1 5 4-2 4 2-1-5" strokeLinejoin="round" />
      </svg>
    );
  }
  if (kind === 'globe') {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" />
        <ellipse cx="12" cy="12" rx="3.5" ry="8" />
        <path d="M4 12h16" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === 'handshake') {
    return (
      <svg {...common}>
        <path d="M8 12l2.2 2.2a1.8 1.8 0 002.5 0L15.5 12" strokeLinecap="round" />
        <path d="M4 10l3.5-2.5h2.5L12 9.5 14 7.5h2.5L20 10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (kind === 'lock') {
    return (
      <svg {...common}>
        <rect x="7" y="11" width="10" height="8" rx="1" />
        <path d="M9 11V8.5a3 3 0 016 0V11" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path
        d="M12 3.5l2.1 4.3 4.7.7-3.4 3.3.8 4.7L12 14.8 7.8 16.5l.8-4.7L5.2 8.5l4.7-.7L12 3.5z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Factory & Refinery content panel embedded in the home Frame8 area. */
export function FactorySection() {
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

        {/* Header */}
        <section
          className="grid items-center gap-[20px]"
          style={{ gridTemplateColumns: 'auto 1fr 180px' }}
        >
          <img src={LOGO} alt="JD Gold" className="h-[72px] w-auto justify-self-start" />
          <div className="text-center">
            <h1 className="font-['Alice:Regular',sans-serif] text-[40px] leading-none tracking-[0.06em] text-[#c09038]">
              JD GOLD
            </h1>
            <p className="mt-[6px] font-['Alice:Regular',sans-serif] text-[32px] leading-tight tracking-[0.04em] text-[#c09038]">
              REFINER &amp; FACTORY
            </p>
            <p className="mt-[10px] font-['Alice:Regular',sans-serif] text-[13px] tracking-[0.12em] text-white/85">
              PURE GOLD. PRECISION REFINED. PERFECTION DELIVERED.
            </p>
          </div>
          <div className="overflow-hidden border border-[#c09038]/40">
            <img src={HEADER_IMG} alt="JD Gold bar" className="aspect-[4/3] w-full object-cover" />
          </div>
        </section>

        {/* A. Gold Refinery */}
        <section className="mt-[36px]">
          <BoxedHeading
            title="A. GOLD REFINERY"
            subtitle="Precision refining operations from raw intake to certified purity."
          />
          <div className="mt-[18px] overflow-hidden border border-[#c09038]/50">
            <img
              src={REFINERY_HERO}
              alt="JD Gold refinery operations"
              className="aspect-[21/8] w-full object-cover"
            />
          </div>
          <div className="mt-[16px] grid gap-[12px]" style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }}>
            {REFINERY_STEPS.map((step) => (
              <article
                key={step.title}
                className="flex flex-col border border-[#c09038] bg-[#0a0a0a] p-[10px]"
              >
                <h3 className="font-['Alice:Regular',sans-serif] text-[13px] leading-snug tracking-[0.03em] text-[#c09038]">
                  {step.title.toUpperCase()}
                </h3>
                <div className="relative mt-[10px] aspect-[16/10] overflow-hidden border border-[#c09038]/40">
                  <img src={step.image} alt={step.title} className="absolute inset-0 size-full object-cover" />
                </div>
                <p className="mt-[10px] font-['Alice:Regular',sans-serif] text-[12px] leading-[1.55] text-white/75">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* B. Gold Factory */}
        <section className="mt-[40px]">
          <BoxedHeading
            title="B. GOLD FACTORY (MANUFACTURING)"
            subtitle="From bars to jewelry — production craftsmanship at every stage."
          />
          <div className="mt-[18px] overflow-hidden border border-[#c09038]/50">
            <img
              src={FACTORY_HERO}
              alt="JD Gold factory manufacturing floor"
              className="aspect-[21/8] w-full object-cover"
            />
          </div>
          <div className="mt-[16px] grid gap-[12px]" style={{ gridTemplateColumns: 'repeat(5, minmax(0, 1fr))' }}>
            {FACTORY_STEPS.map((step) => (
              <article
                key={step.title}
                className="flex flex-col border border-[#c09038] bg-[#0a0a0a] p-[10px]"
              >
                <h3 className="font-['Alice:Regular',sans-serif] text-[12px] leading-snug tracking-[0.03em] text-[#c09038]">
                  {step.title.toUpperCase()}
                </h3>
                <div className="relative mt-[10px] aspect-[16/10] overflow-hidden border border-[#c09038]/40">
                  <img src={step.image} alt={step.title} className="absolute inset-0 size-full object-cover" />
                </div>
                <p className="mt-[10px] font-['Alice:Regular',sans-serif] text-[11px] leading-[1.55] text-white/75">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Products */}
        <section className="mt-[40px]">
          <OrnamentTitle title="PRODUCTS" />
          <div className="mt-[24px] grid gap-[14px]" style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }}>
            {PRODUCTS.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[8px] border border-[#c09038] bg-[#0a0a0a]"
              >
                <div className="relative aspect-[5/4] overflow-hidden">
                  <img src={item.image} alt={item.title} className="absolute inset-0 size-full object-cover" />
                </div>
                <div className="px-[12px] py-[14px] text-center">
                  <h3 className="font-['Alice:Regular',sans-serif] text-[14px] tracking-[0.04em] text-[#c09038]">
                    {item.title.toUpperCase()}
                  </h3>
                  <p className="mt-[8px] font-['Alice:Regular',sans-serif] text-[12px] leading-[1.55] text-white/75">
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="mt-[40px]">
          <OrnamentTitle title="SERVICES" />
          <div className="mt-[24px] grid gap-[12px]" style={{ gridTemplateColumns: 'repeat(5, minmax(0, 1fr))' }}>
            {SERVICES.map((item) => (
              <article
                key={item.title}
                className="flex flex-col items-center border border-[#c09038] bg-[#0a0a0a] px-[12px] py-[18px] text-center"
              >
                <h3 className="font-['Alice:Regular',sans-serif] text-[12px] tracking-[0.03em] text-[#c09038]">
                  {item.title.toUpperCase()}
                </h3>
                <div className="my-[14px]">
                  <ServiceIcon kind={item.icon} />
                </div>
                <p className="font-['Alice:Regular',sans-serif] text-[11px] leading-[1.55] text-white/75">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Trust badges */}
        <footer className="mt-[36px] border-t border-[#c09038] pt-[18px] pb-[8px]">
          <div className="flex flex-wrap items-center justify-center gap-x-[22px] gap-y-[12px]">
            {TRUST_BADGES.map((badge) => (
              <div key={badge.title} className="flex items-center gap-[8px]">
                <TrustIcon kind={badge.icon} />
                <span className="font-['Alice:Regular',sans-serif] text-[12px] tracking-[0.04em] text-[#c09038]">
                  {badge.title.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}

export default FactorySection;
