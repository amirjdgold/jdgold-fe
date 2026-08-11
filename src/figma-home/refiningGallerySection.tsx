import type { RefiningGallerySection } from '@/hooks/useSiteContent';
import { imgFrame28, imgFrame29, imgFrame30 } from './assetMap';

export const REFINING_GALLERY_SLOT_COUNT = 3;

const DEFAULTS: RefiningGallerySection = {
  slots: [
    { image: imgFrame28, alt: 'Refining gallery 1' },
    { image: imgFrame29, alt: 'Refining gallery 2' },
    { image: imgFrame30, alt: 'Refining gallery 3' },
  ],
};

export function resolveRefiningGallerySection(
  cms?: RefiningGallerySection | null,
): RefiningGallerySection {
  const raw = (cms || {}) as Partial<RefiningGallerySection>;
  const slots = (raw.slots ?? []).slice(0, REFINING_GALLERY_SLOT_COUNT);
  while (slots.length < REFINING_GALLERY_SLOT_COUNT) {
    const i = slots.length;
    slots.push({ ...DEFAULTS.slots[i] });
  }
  return {
    slots: slots.map((s, i) => ({
      image: (s.image || '').trim() || DEFAULTS.slots[i].image,
      alt: (s.alt || '').trim() || DEFAULTS.slots[i].alt,
    })),
  };
}

function GalleryImageSlot({ image, alt }: { image: string; alt?: string }) {
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

export function RefiningGallerySectionView({ content }: { content?: RefiningGallerySection | null }) {
  const data = resolveRefiningGallerySection(content);

  return (
    <div className="relative w-full shrink-0" data-name="section#brands">
      <div className="relative flex size-full flex-col items-start bg-black px-[20px] py-[10px]">
        <div className="relative flex w-full shrink-0 items-center gap-[12px] pointer-events-none">
          {data.slots.map((slot, i) => (
            <GalleryImageSlot key={i} image={slot.image} alt={slot.alt} />
          ))}
        </div>
      </div>
    </div>
  );
}
