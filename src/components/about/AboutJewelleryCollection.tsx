import SafeImage from '@/components/SafeImage';
import { SectionTitle } from '@/components/PageShell';
import type { GalleryImage } from '@/components/about/AboutJewelleryDepartment';

export default function AboutJewelleryCollection({
  heading,
  images,
}: {
  heading?: string;
  images: GalleryImage[];
}) {
  const validImages = images.filter((img) => img?.src?.trim());
  if (!validImages.length) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-6 md:px-6">
      <div className="mb-6 flex items-center gap-2 sm:gap-4">
        <div className="h-px min-w-[1rem] flex-1 bg-gradient-to-r from-transparent via-[#c09038] to-[#c09038]" />
        <SectionTitle className="min-w-0 max-w-[min(100%,17rem)] text-center uppercase leading-snug sm:max-w-[min(100%,22rem)] md:max-w-none">
          {heading || 'OUR JEWELLERY COLLECTION'}
        </SectionTitle>
        <div className="h-px min-w-[1rem] flex-1 bg-gradient-to-l from-transparent via-[#c09038] to-[#c09038]" />
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {validImages.map((img) => (
          <div
            key={img.src + (img.alt || '')}
            className="min-w-0 overflow-hidden rounded-sm border border-[#c09038]"
          >
            <div className="relative aspect-square bg-black">
              <SafeImage
                src={img.src}
                alt={img.alt || ''}
                className="absolute inset-0 size-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
