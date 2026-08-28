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
  const validImages = images.filter((img) => img?.src?.trim());
  const hasCopy = Boolean(heading || managedBy || body);

  if (!hasCopy && !validImages.length) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <div
        className={`grid overflow-hidden rounded-sm border border-[#c09038] ${
          validImages.length ? 'md:grid-cols-[1fr_1.35fr]' : ''
        }`}
      >
        {hasCopy ? (
          <div className="flex flex-col justify-center bg-[#140c05] p-6 md:p-8">
            {heading ? (
              <SectionTitle className="mb-2 text-xl uppercase md:text-2xl">
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
            className={`grid min-h-[220px] ${validImages.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}
          >
            {validImages.map((img) => (
              <div key={img.src + (img.alt || '')} className="relative min-h-[220px] bg-black">
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
