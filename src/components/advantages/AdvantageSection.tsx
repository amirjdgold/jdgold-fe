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

function BlockCopy({ block }: { block: AdvantageBlock }) {
  return (
    <div className="flex h-full min-h-0 min-w-0 flex-col justify-center border-r border-[#c09038]/35 p-6">
      <div className="flex min-w-0 flex-wrap items-baseline gap-3">
        <span className="shrink-0 font-['Alice:Regular',Georgia,serif] text-5xl leading-none text-[#c09038]">
          {block.number}
        </span>
        <h2 className="min-w-0 break-words font-['Alice:Regular',Georgia,serif] text-3xl tracking-[0.06em] text-[#c09038] uppercase">
          {block.title}
        </h2>
      </div>
      {block.subtitle ? (
        <p className="mt-3 text-sm tracking-[0.14em] text-[#d4af37]/95 uppercase">
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
      className={`relative h-full min-h-0 overflow-hidden border-r border-[#c09038]/35 bg-[#0c0704] ${className}`}
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
    <div className="flex h-full flex-col divide-y divide-[#c09038]/30">
      {list.map((item) => (
        <div
          key={item.title}
          className="flex flex-1 flex-col items-center justify-center gap-1.5 px-3 py-2 text-center last:border-b-0"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#c09038] bg-gradient-to-b from-[#2a1a0a] to-[#120a04] shadow-[0_0_16px_rgba(192,144,56,0.4)]">
            <SideItemIcon icon={item.icon} title={item.title} />
          </div>
          <p className="max-w-[128px] text-[10px] font-semibold leading-snug tracking-[0.08em] text-[#c09038] uppercase">
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
  const block = raw;
  const imageFirst = Boolean(block.imageFirst);
  const sideItems = resolveSideItems(block);
  const imageEl = <BlockImage block={block} />;
  const copyEl = <BlockCopy block={block} />;
  const sideEl = <BlockSideItems items={sideItems} />;

  return (
    <article className="grid min-h-[400px] min-w-0 grid-cols-[minmax(0,1.05fr)_minmax(0,1.15fr)_minmax(0,0.7fr)] items-stretch overflow-hidden rounded-xl border border-[#c09038]/70 bg-[#120a04]">
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
