import SafeImage from '@/components/SafeImage';
import { SectionTitle } from '@/components/PageShell';
import type { GalleryImage } from '@/components/about/AboutJewelleryDepartment';

const TILE_SPANS = [
  'col-span-4 row-span-2',
  'col-span-2',
  'col-span-2',
  'col-span-2',
  'col-span-2',
  'col-span-2',
  'col-span-3 row-span-2',
  'col-span-3',
  'col-span-3',
  'col-span-2',
  'col-span-2',
  'col-span-2',
  'col-span-4',
  'col-span-2',
  'col-span-3',
  'col-span-3',
];

export default function PhotoCollage({
  heading,
  images,
}: {
  heading?: string;
  images: GalleryImage[];
}) {
  const validImages = images || [];
  if (!validImages.length) return null;

  const hasLastRow = validImages.length > 2;
  const collageImages = hasLastRow ? validImages.slice(0, -2) : validImages;
  const lastRowImages = hasLastRow ? validImages.slice(-2) : [];

  return (
    <section className="mx-auto w-full px-6 py-6">
      {heading ? (
        <div className="mb-6 flex items-center gap-4">
          <div className="h-px min-w-[1rem] flex-1 bg-gradient-to-r from-transparent via-[#c09038] to-[#c09038]" />
          <SectionTitle className="min-w-0 text-center !text-3xl leading-snug uppercase">
            {heading}
          </SectionTitle>
          <div className="h-px min-w-[1rem] flex-1 bg-gradient-to-l from-transparent via-[#c09038] to-[#c09038]" />
        </div>
      ) : null}

      <div className="grid grid-cols-6 auto-rows-[140px] gap-3">
        {collageImages.map((img, index) => (
          <div
            key={(img.src || 'pending') + (img.alt || '') + index}
            className={`relative min-w-0 overflow-hidden rounded-sm border border-[#c09038] bg-black ${TILE_SPANS[index % TILE_SPANS.length]}`}
          >
            <SafeImage
              src={img.src}
              alt={img.alt || ''}
              className="absolute inset-0 size-full object-cover object-center"
            />
          </div>
        ))}
        {lastRowImages.map((img, index) => (
          <div
            key={(img.src || 'pending') + (img.alt || '') + 'last' + index}
            className={`relative min-w-0 overflow-hidden rounded-sm border border-[#c09038] bg-black col-span-3 row-span-2 ${index === 0 ? 'col-start-1' : ''}`}
          >
            <SafeImage
              src={img.src}
              alt={img.alt || ''}
              className="absolute inset-0 size-full object-cover object-center"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
