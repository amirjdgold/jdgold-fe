import FeatureList from '@/components/advantages/FeatureList';
import { SideItemIcon } from '@/components/advantages/AdvantageIcons';
import SafeImage, { PRODUCT_IMAGE_FALLBACK } from '@/components/SafeImage';

export type AdvantageSideItem = { title: string; icon?: string };

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
  sideItems?: AdvantageSideItem[];
  /** Place the photo on the left (default right-of-copy). */
  imageFirst?: boolean;
};

const PRICING_SIDE_FALLBACK: AdvantageSideItem[] = [
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

function BlockCopy({ block }: { block: AdvantageBlock }) {
  return (
    <div className="flex h-full min-h-[240px] min-w-0 flex-col justify-center border-b border-[#c09038]/35 p-4 sm:min-h-[280px] sm:p-5 lg:min-h-0 lg:border-b-0 lg:border-r lg:p-6">
      <div className="flex min-w-0 flex-wrap items-baseline gap-2 sm:gap-3">
        <span className="shrink-0 font-['Alice:Regular',Georgia,serif] text-3xl leading-none text-[#c09038] sm:text-4xl md:text-5xl">
          {block.number}
        </span>
        <h2 className="min-w-0 break-words font-['Alice:Regular',Georgia,serif] text-xl tracking-[0.06em] text-[#c09038] uppercase sm:text-2xl md:text-3xl">
          {block.title}
        </h2>
      </div>
      {block.subtitle ? (
        <p className="mt-3 text-xs tracking-[0.14em] text-[#d4af37]/95 uppercase md:text-sm">
          {block.subtitle}
        </p>
      ) : null}
      <FeatureList points={block.points} className="mt-3 space-y-2" />
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
      className={`relative h-full min-h-[240px] overflow-hidden border-b border-[#c09038]/35 bg-[#0c0704] sm:min-h-[280px] lg:min-h-0 lg:border-b-0 lg:border-r ${className}`}
    >
      <SafeImage
        src={block.image}
        alt={block.imageAlt || block.title}
        fallbackSrc={PRODUCT_IMAGE_FALLBACK}
        className={`absolute inset-0 size-full ${fitContain ? 'object-contain p-1' : 'object-cover'}`}
        style={{ objectPosition: position }}
      />
      {!fitContain ? (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      ) : null}
    </div>
  );
}

function BlockSideItems({ items }: { items: AdvantageSideItem[] }) {
  const list = items.filter((item) => item.title?.trim()).slice(0, 4);
  if (!list.length) return null;

  return (
    <div className="grid h-full grid-cols-2 divide-x divide-y divide-[#c09038]/30 lg:flex lg:flex-col lg:divide-x-0">
      {list.map((item) => (
        <div
          key={item.title}
          className="flex flex-col items-center justify-center gap-1.5 px-2 py-4 text-center lg:flex-1 lg:border-b lg:border-[#c09038]/30 lg:px-3 lg:py-2 lg:last:border-b-0"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#c09038] bg-gradient-to-b from-[#2a1a0a] to-[#120a04] shadow-[0_0_16px_rgba(192,144,56,0.4)]">
            <SideItemIcon icon={item.icon} title={item.title} />
          </div>
          <p className="max-w-[9rem] text-[10px] font-semibold leading-snug tracking-[0.06em] text-[#c09038] uppercase sm:max-w-[128px] sm:tracking-[0.08em]">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
}

type AdvantageSectionProps = {
  block: AdvantageBlock;
};

/**
 * Flexible advantage row: copy / image / side icons.
 * Supports image-first (left) or copy-first layouts via `block.imageFirst`.
 */
export default function AdvantageSection({ block: raw }: AdvantageSectionProps) {
  const block = resolveBlockImage(raw);
  const imageFirst = Boolean(block.imageFirst);
  const sideItems = resolveSideItems(block);
  const imageEl = <BlockImage block={block} />;
  const copyEl = <BlockCopy block={block} />;
  const sideEl = <BlockSideItems items={sideItems} />;

  return (
    <article className="grid min-w-0 overflow-hidden rounded-xl border border-[#c09038]/70 bg-[#120a04] lg:min-h-[400px] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.15fr)_minmax(0,0.7fr)] lg:items-stretch">
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
}
