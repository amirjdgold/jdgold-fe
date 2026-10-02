import SafeImage from '@/components/SafeImage';
import { SectionTitle } from '@/components/PageShell';

export type GalleryImage = {
  src: string;
  alt?: string;
};

export default function AboutJewelleryDepartment({
  heading,
  managedBy,
  body,
  images,
}: {
  heading?: string;
  managedBy?: string;
  body?: string;
  images: GalleryImage[];
}) {
  const validImages = images || [];
  const hasCopy = Boolean(heading || managedBy || body);

  if (!hasCopy && !validImages.length) return null;

  return (
    <section className="mx-auto w-full px-6 py-10">
      <div
        className={`grid overflow-hidden rounded-sm border border-[#c09038] ${
          validImages.length ? 'grid-cols-[1fr_1.35fr]' : ''
        }`}
      >
        {hasCopy ? (
          <div className="flex flex-col justify-center bg-[#140c05] p-8">
            {heading ? (
              <SectionTitle className="mb-2 !text-2xl uppercase">
                {heading}
              </SectionTitle>
            ) : null}
            {managedBy ? (
              <p className="mb-4 font-['Alice:Regular',Georgia,serif] text-sm tracking-wide text-[#d4af37]">
                {managedBy}
              </p>
            ) : null}
            {body ? (
              <p className="text-sm leading-relaxed break-words text-[#e5e5e5]">{body}</p>
            ) : null}
          </div>
        ) : null}
        {validImages.length ? (
          <div
            className={`grid min-h-[220px] ${validImages.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}
          >
            {validImages.map((img, index) => (
              <div key={(img.src || 'pending') + (img.alt || '') + index} className="relative aspect-[4/3] min-h-[220px] bg-black">
                <SafeImage
                  src={img.src}
                  alt={img.alt || ''}
                  className="absolute inset-0 size-full object-cover object-center"
                />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
