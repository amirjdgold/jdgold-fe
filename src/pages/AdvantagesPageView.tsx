import PageShell from '@/components/PageShell';

export type AdvantageBlock = {
  number: string;
  title: string;
  subtitle?: string;
  image: string;
  imageAlt?: string;
  /** CSS object-position for the photo (e.g. "left center") */
  imageObjectPosition?: string;
  /** cover crops to fill; contain shows the full graphic */
  imageFit?: 'cover' | 'contain';
  /** Optional zoom for cropped hero-style photos */
  imageZoom?: number;
  points?: string[];
  sideItems?: { title: string; icon?: string }[];
  /** Place the photo on the left (default right-of-copy). */
  imageFirst?: boolean;
};

export type AdvantagesContent = {
  layout: 'advantages';
  logoSrc?: string;
  heading?: string;
  subtitle?: string;
  heroImage?: string;
  heroImageAlt?: string;
  blocks?: AdvantageBlock[];
  achievementsHeading?: string;
  achievements?: {
    title: string;
    description?: string;
    points?: string[];
    image: string;
    imageAlt?: string;
  }[];
  footerMottos?: { title: string; subtitle: string; icon?: string }[];
  footerLogoTagline?: string;
  closingLine?: string;
};

function SideItemIcon({ icon, title }: { icon?: string; title: string }) {
  const key = (icon || title).toLowerCase();
  const common = 'h-7 w-7 text-[#c09038]';

  if (key.includes('pure') || key.includes('gold 999')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <rect x="7" y="4" width="10" height="16" rx="1" />
        <path d="M9 8h6M9 12h6M9 16h4" />
      </svg>
    );
  }
  if (key.includes('hidden') || key.includes('transparent trade') || key.includes('flexible') || key.includes('market-aligned') || key.includes('rates')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 3v18M5 7h14M7 7l-3 6h6L7 7zm10 0l-3 6h6l-3-6z" />
      </svg>
    );
  }
  if (key.includes('sustainable') || key.includes('growth') || key.includes('transparent value')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M4 20V10M10 20V4M16 20v-7M20 20H2" strokeLinecap="round" />
      </svg>
    );
  }
  if (key.includes('expansion') || key.includes('globe') || key.includes('global') || key.includes('international') || key.includes('standard') || key.includes('market')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
      </svg>
    );
  }
  if (key.includes('quality control') || key.includes('strict') || key.includes('check')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12l2.5 2.5L16 9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (key.includes('supply') || key.includes('trusted') || key.includes('verified') || key.includes('leaders')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 3l7 4v5c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V7l7-4z" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (key.includes('machiner') || key.includes('advanced')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1" />
      </svg>
    );
  }
  if (key.includes('assay') || key.includes('precision')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="10" cy="10" r="6" />
        <path d="M14.5 14.5L20 20" strokeLinecap="round" />
      </svg>
    );
  }
  if (key.includes('digital') || key.includes('security') || key.includes('secure')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M8 11V8a4 4 0 018 0v3" />
      </svg>
    );
  }
  if (key.includes('innovation')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M9 18h6M10 21h4M12 3a5 5 0 015 5c0 2-1 3.5-2.5 4.5V15H9.5v-2.5C8 11.5 7 10 7 8a5 5 0 015-5z" />
      </svg>
    );
  }
  if (key.includes('decade') || key.includes('experience') || key.includes('clients')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20c1.5-3.5 4-5 7-5s5.5 1.5 7 5" />
      </svg>
    );
  }
  if (key.includes('on time') || key.includes('delivery') || key.includes('24/7') || key.includes('support')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" strokeLinecap="round" />
      </svg>
    );
  }
  if (key.includes('logistic')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M3 7h11v10H3zM14 10h4l3 3v4h-7V10z" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M12 3l2.2 4.5L19 8.2l-3.5 3.4.8 4.9L12 14.8 7.7 16.5l.8-4.9L5 8.2l4.8-.7L12 3z" />
    </svg>
  );
}

function MottoIcon({ icon }: { icon?: string }) {
  const common = 'h-10 w-10 text-[#c09038] md:h-11 md:w-11';
  switch (icon) {
    case 'shield':
      return (
        <svg className={common} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path d="M24 4L8 10v12c0 10.5 6.8 17.8 16 20 9.2-2.2 16-9.5 16-20V10L24 4z" />
          <path d="M16 23l5.5 5.5L33 17" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'bars':
      return (
        <svg className={common} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <rect x="8" y="18" width="12" height="18" rx="1" />
          <rect x="18" y="12" width="12" height="24" rx="1" />
          <rect x="28" y="16" width="12" height="20" rx="1" />
        </svg>
      );
    case 'handshake':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="m11 17 2 2a1 1 0 1 0 3-3" />
          <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
          <path d="m21 3 1 11h-2" />
          <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
          <path d="M3 4h8" />
        </svg>
      );
    case 'star':
      return (
        <svg className={common} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path d="M24 6l5.2 10.5L41 18l-8.5 8.3L34.4 38 24 32.5 13.6 38l1.9-11.7L7 18l11.8-1.5L24 6z" />
        </svg>
      );
    default:
      return (
        <svg className={common} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path d="M24 4L8 10v12c0 10.5 6.8 17.8 16 20 9.2-2.2 16-9.5 16-20V10L24 4z" />
        </svg>
      );
  }
}

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-[#c09038]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BlockCopy({ block }: { block: AdvantageBlock }) {
  return (
    <div className="flex h-full min-h-[280px] flex-col justify-center overflow-hidden border-b border-[#c09038]/35 p-5 md:min-h-0 md:border-b-0 md:border-r md:p-6">
      <div className="flex items-baseline gap-3">
        <span className="font-['Alice:Regular',Georgia,serif] text-4xl leading-none text-[#c09038] md:text-5xl">
          {block.number}
        </span>
        <h2 className="font-['Alice:Regular',Georgia,serif] text-2xl tracking-[0.06em] text-[#c09038] uppercase md:text-3xl">
          {block.title}
        </h2>
      </div>
      {block.subtitle ? (
        <p className="mt-3 text-xs tracking-[0.14em] text-[#d4af37]/95 uppercase md:text-sm">
          {block.subtitle}
        </p>
      ) : null}
      <ul className="mt-3 space-y-2 overflow-y-auto">
        {(block.points || []).map((point) => (
          <li key={point} className="flex gap-2.5 text-[13px] leading-snug text-[#e8e8e8] md:text-sm">
            <CheckIcon />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BlockImage({
  block,
  className = '',
}: {
  block: AdvantageBlock;
  className?: string;
}) {
  const position = block.imageObjectPosition || 'center';
  const fitContain = block.imageFit === 'contain';
  return (
    <div
      className={`relative h-full min-h-[280px] overflow-hidden border-b border-[#c09038]/35 bg-[#0c0704] md:min-h-0 md:border-b-0 md:border-r ${className}`}
    >
      <img
        src={block.image}
        alt={block.imageAlt || block.title}
        className={`absolute inset-0 size-full ${fitContain ? 'object-contain p-1' : 'object-cover'}`}
        style={{ objectPosition: position }}
      />
      {!fitContain ? (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      ) : null}
    </div>
  );
}

function BlockSideItems({ items }: { items: { title: string; icon?: string }[] }) {
  const list = items.filter((item) => item.title?.trim()).slice(0, 4);
  if (!list.length) return null;

  return (
    <div className="grid h-full grid-cols-2 divide-x divide-y divide-[#c09038]/30 md:flex md:flex-col md:divide-x-0">
      {list.map((item) => (
        <div
          key={item.title}
          className="flex flex-col items-center justify-center gap-1.5 px-2 py-4 text-center md:flex-1 md:border-b md:border-[#c09038]/30 md:px-3 md:py-2 md:last:border-b-0"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#c09038] bg-gradient-to-b from-[#2a1a0a] to-[#120a04] shadow-[0_0_16px_rgba(192,144,56,0.4)]">
            <SideItemIcon icon={item.icon} title={item.title} />
          </div>
          <p className="max-w-[128px] text-[9px] font-semibold leading-tight tracking-[0.08em] text-[#c09038] uppercase md:text-[10px]">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
}

const PRICING_SIDE_FALLBACK = [
  { title: 'MARKET-ALIGNED RATES' },
  { title: 'NO HIDDEN CHARGES' },
  { title: 'FLEXIBLE SOLUTIONS' },
  { title: 'TRANSPARENT TRADE' },
];

function isPricingBlock(block: AdvantageBlock) {
  return block.title?.toUpperCase().includes('PRICING');
}

function resolveSideItems(block: AdvantageBlock) {
  const fromContent = (block.sideItems || []).filter((s) => s.title?.trim());
  if (fromContent.length) return fromContent;
  if (isPricingBlock(block)) return PRICING_SIDE_FALLBACK;
  return [];
}

function resolveBlockImage(block: AdvantageBlock): AdvantageBlock {
  if (!isPricingBlock(block)) return block;
  const oddFlyer = block.image?.includes('hero-slide-pricing');
  return {
    ...block,
    image: oddFlyer ? '/images/product-cast-gold-bars.png' : block.image,
    imageAlt: block.imageAlt || 'JD Gold bars — fair market pricing',
    imageFit: 'cover',
    imageObjectPosition: 'center',
  };
}

export default function AdvantagesPageView({ content }: { content: AdvantagesContent }) {
  const heading =
    content.heading || 'JD GOLD MARKET, ADVANTAGES & ACHIEVEMENTS';
  const headingLines = (() => {
    const upper = heading.toUpperCase();
    if (upper.includes('MARKET') && upper.includes('ADVANTAGES')) {
      return ['JD GOLD', 'MARKET, ADVANTAGES', '& ACHIEVEMENTS'];
    }
    return [heading];
  })();

  return (
    <PageShell logoSrc={content.logoSrc}>
      {/* Banner header — logo | title | gold imagery */}
      <section className="relative overflow-hidden border-b border-[#c09038]/25">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 30%, rgba(192,144,56,0.22) 0, transparent 42%), radial-gradient(circle at 80% 60%, rgba(212,175,55,0.16) 0, transparent 45%), radial-gradient(1.5px 1.5px at 10% 20%, rgba(255,220,140,0.55), transparent), radial-gradient(1px 1px at 30% 70%, rgba(255,220,140,0.4), transparent), radial-gradient(1.5px 1.5px at 55% 25%, rgba(255,220,140,0.45), transparent), radial-gradient(1px 1px at 75% 55%, rgba(255,220,140,0.35), transparent), radial-gradient(1px 1px at 90% 15%, rgba(255,220,140,0.5), transparent), radial-gradient(1.5px 1.5px at 45% 85%, rgba(255,220,140,0.35), transparent)',
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 md:grid-cols-[180px_1fr_240px] md:gap-6 md:px-6 md:py-12 lg:grid-cols-[200px_1fr_280px]">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <img
              src={content.logoSrc || '/images/jd-gold-logo.png'}
              alt="JD Gold"
              className="h-20 w-auto md:h-24"
            />
            <p className="mt-3 font-['Alice:Regular',Georgia,serif] text-lg tracking-[0.2em] text-[#c09038] md:text-xl">
              JD GOLD
            </p>
          </div>

          <div className="text-center">
            <h1 className="font-['Alice:Regular',Georgia,serif] text-[1.65rem] leading-[1.15] tracking-[0.06em] text-[#c09038] uppercase md:text-4xl md:leading-[1.12] lg:text-[2.65rem]">
              {headingLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-4 text-[11px] tracking-[0.18em] text-[#d4af37] uppercase md:text-sm md:tracking-[0.22em]">
              {content.subtitle || 'A LEADER IN PURITY. A LEGACY OF TRUST.'}
            </p>
          </div>

          <div className="relative mx-auto h-40 w-full max-w-[280px] overflow-hidden rounded-2xl border border-[#c09038]/70 shadow-[0_0_28px_rgba(192,144,56,0.22)] md:mx-0 md:h-48 md:max-w-none lg:h-56">
            <img
              src={content.heroImage || '/images/product-cast-gold-bars.png'}
              alt={content.heroImageAlt || 'JD GOLD Fine Gold bar and coins'}
              className="absolute inset-0 size-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Advantage blocks — same height & 3-column grid for all 5 */}
      <div className="mx-auto max-w-6xl space-y-6 px-4 pb-10 md:px-6">
        {(content.blocks || []).map((raw) => {
          const block = resolveBlockImage(raw);
          const imageFirst = Boolean(block.imageFirst);
          const sideItems = resolveSideItems(block);
          const imageEl = <BlockImage block={block} />;
          const copyEl = <BlockCopy block={block} />;
          const sideEl = <BlockSideItems items={sideItems} />;

          return (
            <article
              key={block.number + block.title}
              className="grid overflow-hidden rounded-xl border border-[#c09038]/70 bg-[#120a04] md:h-[400px] md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.15fr)_minmax(0,0.7fr)] md:items-stretch"
            >
              {imageFirst ? (
                <>
                  {imageEl}
                  {copyEl}
                  {sideEl}
                </>
              ) : (
                <>
                  {copyEl}
                  {imageEl}
                  {sideEl}
                </>
              )}
            </article>
          );
        })}
      </div>

      {/* Achievements */}
      <section className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <div className="mb-6 text-center">
          <p className="font-['Alice:Regular',Georgia,serif] text-3xl text-[#c09038]/50 md:text-4xl">
            06
          </p>
          <h2 className="mt-1 font-['Alice:Regular',Georgia,serif] text-xl tracking-[0.08em] text-[#c09038] uppercase md:text-2xl">
            Achievements / Projects
          </h2>
          {content.achievementsHeading ? (
            <p className="mx-auto mt-3 max-w-3xl text-xs tracking-[0.08em] text-[#d4af37]/90 uppercase md:text-sm">
              {content.achievementsHeading}
            </p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {(content.achievements || []).map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-xl border border-[#c09038]/70 bg-[#120a04]"
            >
              <div className="relative aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.imageAlt || item.title}
                  className="absolute inset-0 size-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120a04] via-transparent to-transparent" />
              </div>
              <div className="space-y-2 p-4">
                <h3 className="text-center font-['Alice:Regular',Georgia,serif] text-lg tracking-[0.06em] text-[#c09038] uppercase">
                  {item.title}
                </h3>
                {item.points?.length ? (
                  <ul className="space-y-2">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-[11px] leading-relaxed text-[#d4d4d4] md:text-xs"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#c09038]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : item.description ? (
                  <p className="text-center text-xs leading-relaxed text-[#d4d4d4]">
                    {item.description}
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer mottos */}
      <section className="border-t border-[#c09038]/40 bg-[#0a0502]">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-[repeat(4,1fr)_auto] md:gap-6 md:px-6 md:items-center">
          {(content.footerMottos || []).map((m) => (
            <div key={m.title} className="flex flex-col items-center text-center">
              <div className="mb-3">
                <MottoIcon icon={m.icon} />
              </div>
              <p className="font-['Alice:Regular',Georgia,serif] text-base tracking-[0.08em] text-[#c09038] uppercase md:text-lg">
                {m.title}
              </p>
              <p className="mt-1 text-xs tracking-wide text-[#e5e5e5]/90 uppercase">{m.subtitle}</p>
            </div>
          ))}

          <div className="flex flex-col items-center text-center sm:col-span-2 lg:col-span-1 lg:pl-4">
            <img
              src={content.logoSrc || '/images/jd-gold-logo.png'}
              alt="JD Gold"
              className="mb-2 h-14 w-auto"
            />
            {content.footerLogoTagline ? (
              <p className="max-w-[180px] text-[10px] tracking-[0.1em] text-[#d4af37]/90 uppercase">
                {content.footerLogoTagline}
              </p>
            ) : null}
          </div>
        </div>

        {content.closingLine ? (
          <p className="border-t border-[#c09038]/25 px-4 pb-8 pt-6 text-center font-['Alice:Regular',Georgia,serif] text-sm tracking-[0.12em] text-[#c09038] uppercase">
            {content.closingLine}
          </p>
        ) : null}
      </section>
    </PageShell>
  );
}
