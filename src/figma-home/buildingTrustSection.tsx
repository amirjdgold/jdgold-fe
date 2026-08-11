import { useId } from 'react';
import type { BuildingTrustSection } from '@/hooks/useSiteContent';
import { imgFrame6, imgFrame12, imgFrame21, imgFrame24, imgFrame25 } from './assetMap';
import svgPaths from './svg-paths';

export const BUILDING_TRUST_SLOT_COUNT = 5;

const DEFAULTS: BuildingTrustSection = {
  heading: 'Building Trust in Gold',
  slots: [
    { image: imgFrame6, alt: 'Gold production' },
    { image: imgFrame24, alt: 'Gold weighed' },
    { image: imgFrame25, alt: 'Dubai refinery' },
    { image: imgFrame21, alt: 'Gold pellets' },
    { image: imgFrame12, alt: 'JD Gold operations' },
  ],
};

export function resolveBuildingTrustSection(
  cms?: BuildingTrustSection | null,
): BuildingTrustSection {
  const raw = (cms || {}) as Partial<BuildingTrustSection>;
  const slots = (raw.slots ?? []).slice(0, BUILDING_TRUST_SLOT_COUNT);
  while (slots.length < BUILDING_TRUST_SLOT_COUNT) {
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

function TrustHeading({ title }: { title: string }) {
  const uid = useId().replace(/:/g, '');
  return (
    <div className="content-stretch flex w-full shrink-0 items-center justify-center gap-[12px]">
      <div className="relative h-0 min-w-px flex-[1_0_0]">
        <div className="absolute inset-[-5.77px_-1.02%_-5.77px_0]">
          <svg className="block size-full" fill="none" viewBox="0 0 572.273 11.547">
            <path d={svgPaths.p223a68f0} fill={`url(#bt-${uid}-a)`} />
            <defs>
              <linearGradient
                id={`bt-${uid}-a`}
                gradientUnits="userSpaceOnUse"
                x1="0"
                x2="566.5"
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
        <div className="absolute inset-[-5.77px_0_-5.77px_-1.02%]">
          <svg className="block size-full" fill="none" viewBox="0 0 572.273 11.547">
            <path d={svgPaths.p2c747680} fill={`url(#bt-${uid}-b)`} />
            <defs>
              <linearGradient
                id={`bt-${uid}-b`}
                gradientUnits="userSpaceOnUse"
                x1="5.7735"
                x2="572.274"
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

function TrustImageSlot({ image, alt }: { image: string; alt?: string }) {
  return (
    <div className="relative min-w-px flex-[1_0_0] h-[200px] rounded-[16px]">
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

export function BuildingTrustGoldSection({ content }: { content?: BuildingTrustSection | null }) {
  const data = resolveBuildingTrustSection(content);

  return (
    <div className="relative w-full shrink-0 bg-[#010100]">
      <div className="size-full overflow-clip rounded-[inherit]">
        <div className="relative flex size-full flex-col items-center gap-[12px] px-[20px] py-[10px]">
          <TrustHeading title={data.heading} />
          <div className="relative flex w-full shrink-0 items-center gap-[12px] pointer-events-none">
            {data.slots.map((slot, i) => (
              <TrustImageSlot key={i} image={slot.image} alt={slot.alt} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
