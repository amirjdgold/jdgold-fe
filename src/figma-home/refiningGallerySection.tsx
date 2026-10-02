import SafeImage from '@/components/SafeImage';
import { padCmsSlots } from '@/lib/cmsSlots';
import type { RefiningGallerySection } from '@/hooks/useSiteContent';

export const REFINING_GALLERY_SLOT_COUNT = 3;

export function resolveRefiningGallerySection(
  cms?: RefiningGallerySection | null,
): RefiningGallerySection {
  const raw = (cms || {}) as Partial<RefiningGallerySection>;
  const slots = padCmsSlots(raw.slots, REFINING_GALLERY_SLOT_COUNT, () => ({
    image: '',
    alt: '',
  })).map((s) => ({
    image: (s.image || '').trim(),
    alt: (s.alt || '').trim() || undefined,
  }));
  return { slots };
}

function GalleryImageSlot({ image, alt }: { image: string; alt?: string }) {
  return (
    <div className="relative aspect-[12/5] min-w-px flex-[1_0_0] rounded-[16px]">
      <SafeImage
        alt={alt || ''}
        className="absolute inset-0 size-full max-w-none rounded-[16px] object-cover object-center"
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
        <div className="relative flex w-full shrink-0 items-center gap-[12px]">
          {data.slots.map((slot, i) => (
            <GalleryImageSlot key={i} image={slot.image} alt={slot.alt} />
          ))}
        </div>
      </div>
    </div>
  );
}
