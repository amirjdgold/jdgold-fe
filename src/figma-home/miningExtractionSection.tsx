import { useId } from 'react';
import type { MiningExtractionSection } from '@/hooks/useSiteContent';
import { imgFrame6, imgFrame12, imgFrame21, imgFrame24, imgFrame25 } from './assetMap';
import svgPaths from './svg-paths';

export const MINING_EXTRACTION_SLOT_COUNT = 5;

const DEFAULTS: MiningExtractionSection = {
  heading: 'Mining & Extraction',
  slots: [
    { image: imgFrame6, alt: 'Mining operations' },
    { image: imgFrame24, alt: 'Gold weighed' },
    { image: imgFrame25, alt: 'Dubai refinery' },
    { image: imgFrame21, alt: 'Gold pellets' },
    { image: imgFrame12, alt: 'Extraction process' },
  ],
};

export function resolveMiningExtractionSection(
  cms?: MiningExtractionSection | null,
): MiningExtractionSection {
  const raw = (cms || {}) as Partial<MiningExtractionSection>;
  const slots = (raw.slots ?? []).slice(0, MINING_EXTRACTION_SLOT_COUNT);
  while (slots.length < MINING_EXTRACTION_SLOT_COUNT) {
    const i = slots.length;
    slots.push({ ...DEFAULTS.slots[i] });
  }
  return {
    heading: (raw.heading || '').trim() || DEFAULTS.heading,
    slots: slots.map((s, i) => ({
      image: (s.image || '').trim() || DEFAULTS.slots[i].image,
      alt: (s.alt || '').trim() || DEFAULTS.slots[i].alt,
    })),
  };
}

function MiningHeading({ title }: { title: string }) {
  const uid = useId().replace(/:/g, '');
  return (
    <div className="relative flex w-full shrink-0 content-stretch items-center justify-center gap-[12px]">
      <div className="relative h-0 min-w-px flex-[1_0_0]">
        <div className="absolute inset-[-5.77px_-1%_-5.77px_0]">
          <svg className="block size-full" fill="none" viewBox="0 0 581.273 11.547">
            <path d={svgPaths.pe759af0} fill={`url(#me-${uid}-a)`} />
            <defs>
              <linearGradient
                id={`me-${uid}-a`}
                gradientUnits="userSpaceOnUse"
                x1="0"
                x2="575.5"
                y1="6.7735"
                y2="6.7735"
              >
                <stop stopColor="#C09038" />
                <stop offset="0.5" stopColor="#975E00" />
                <stop offset="1" stopColor="#C09038" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <p className="relative shrink-0 whitespace-nowrap font-['Alice:Regular',sans-serif] text-[32px] leading-[normal] not-italic text-[#c09038]">
        {title}
      </p>
      <div className="relative h-0 min-w-px flex-[1_0_0]">
        <div className="absolute inset-[-5.77px_0_-5.77px_-1%]">
          <svg className="block size-full" fill="none" viewBox="0 0 581.273 11.547">
            <path d={svgPaths.p23052bc0} fill={`url(#me-${uid}-b)`} />
            <defs>
              <linearGradient
                id={`me-${uid}-b`}
                gradientUnits="userSpaceOnUse"
                x1="5.7735"
                x2="581.274"
                y1="7.2735"
                y2="7.2735"
              >
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

function MiningImageSlot({ image, alt }: { image: string; alt?: string }) {
  return (
    <div className="relative h-[200px] min-w-px flex-[1_0_0] rounded-[16px]">
      <img
        alt={alt || ''}
        className="absolute inset-0 size-full max-w-none rounded-[16px] object-cover"
        src={image}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[16px] border-2 border-solid border-[#c09038]"
      />
    </div>
  );
}

export function MiningExtractionSectionView({
  content,
}: {
  content?: MiningExtractionSection | null;
}) {
  const data = resolveMiningExtractionSection(content);

  return (
    <div className="relative w-full shrink-0 bg-[#010100]">
      <div className="size-full overflow-clip rounded-[inherit]">
        <div className="relative flex size-full flex-col items-center gap-[12px] px-[20px] py-[10px]">
          <MiningHeading title={data.heading} />
          <div className="pointer-events-none relative flex w-full shrink-0 items-center gap-[12px]">
            {data.slots.map((slot, i) => (
              <MiningImageSlot key={i} image={slot.image} alt={slot.alt} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
