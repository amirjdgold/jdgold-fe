import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageShell, { SectionTitle } from '@/components/PageShell';
import ScaledCanvas from '@/components/ScaledCanvas';
import SafeImage from '@/components/SafeImage';
import AboutJewelleryCollection from '@/components/about/AboutJewelleryCollection';
import PhotoCollage from '@/components/management/PhotoCollage';
import type { GalleryImage } from '@/components/about/AboutJewelleryDepartment';

export type SalesOffer = {
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  imageAlt?: string;
};

export type SalesGalleryBand = {
  key?: string;
  heading?: string;
  images: GalleryImage[];
};

export type SalesOfferBand = {
  key?: string;
  heading?: string;
  items: SalesOffer[];
};

export type SalesPurchaseContent = {
  layout: 'sales-purchase';
  logoSrc?: string;
  heading?: string;
  subtitle?: string;
  heroImage?: string;
  heroImageAlt?: string;
  offerings?: SalesOfferBand[];
  galleries?: SalesGalleryBand[];
};

export default function SalesPurchasePageView({
  content,
}: {
  content: SalesPurchaseContent;
}) {
  const offerings = (content.offerings || []).filter((band) =>
    band.items.some((item) => item?.image?.trim() || item?.title?.trim()),
  );
  const galleries = content.galleries || [];

  return (
    <PageShell logoSrc={content.logoSrc}>
      <ScaledCanvas>
        <section className="relative mx-auto grid w-full grid-cols-[1.15fr_1fr] items-center gap-10 px-6 py-12">
          <Link
            to="/"
            aria-label="Back to home"
            className="absolute top-6 left-6 z-30 inline-flex items-center gap-1.5 rounded-sm border border-[#c09038]/70 bg-[#0a0502]/85 px-3 py-1.5 text-sm tracking-wide text-[#c09038] backdrop-blur-sm transition hover:border-[#c09038] hover:bg-[#c09038]/20 hover:text-white"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Back
          </Link>
          <div className="flex min-w-0 flex-col items-start text-left">
            <SafeImage
                src={content.logoSrc}
                alt="JD Gold"
                className="pointer-events-none mb-3 h-32 w-auto"
              />
            {content.heading ? (
              <h1 className="break-words font-['Alice:Regular',Georgia,serif] text-4xl leading-snug tracking-[0.04em] text-[#c09038] uppercase">
                {content.heading}
              </h1>
            ) : null}
            {content.subtitle ? (
              <p className="mt-2 max-w-xl text-sm tracking-[0.18em] text-white uppercase">
                {content.subtitle}
              </p>
            ) : null}
          </div>
          <div className="relative h-60 overflow-hidden rounded-2xl border border-[#c09038] shadow-[0_0_24px_rgba(192,144,56,0.18)]">
            <SafeImage
              src={content.heroImage}
              alt={content.heroImageAlt || ''}
              className="absolute inset-0 size-full object-cover object-center"
            />
          </div>
        </section>

        {offerings.map((band) => (
          <OfferGrid
            key={(band.key || band.heading || '') + band.items.map((item) => item.title).join('|')}
            heading={band.heading}
            items={band.items}
          />
        ))}

        {galleries.map((band) => {
          const isCollage =
            band.key === 'purchase-gallery' ||
            /purchase|buy/i.test(band.heading || '');
          const Gallery = isCollage ? PhotoCollage : AboutJewelleryCollection;
          return (
            <Gallery
              key={(band.key || band.heading || '') + band.images.map((img) => img.src).join('|')}
              heading={band.heading}
              images={band.images}
            />
          );
        })}

        <footer className="border-t border-[#c09038]/30 bg-[#100b02]">
          <div className="mx-auto flex w-full flex-col items-center px-6 py-5">
            <p className="text-center font-['Alice:Regular',Georgia,serif] text-sm text-[#c09038]">
              © {new Date().getFullYear()} JD Gold. All Rights Reserved.
            </p>
          </div>
        </footer>
      </ScaledCanvas>
    </PageShell>
  );
}

function OfferGrid({
  heading,
  items,
}: {
  heading?: string;
  items: SalesOffer[];
}) {
  const valid = items.filter((item) => item?.title?.trim() || item?.image?.trim());
  if (!valid.length) return null;

  return (
    <section className="mx-auto w-full px-6 py-6">
      {heading ? (
        <div className="mb-8 flex items-center gap-4">
          <div className="h-px min-w-[1rem] flex-1 bg-gradient-to-r from-transparent via-[#c09038] to-[#c09038]" />
          <SectionTitle className="min-w-0 text-center !text-3xl uppercase">
            {heading}
          </SectionTitle>
          <div className="h-px min-w-[1rem] flex-1 bg-gradient-to-l from-transparent via-[#c09038] to-[#c09038]" />
        </div>
      ) : null}

      <div className="grid grid-cols-4 gap-4">
        {valid.map((item, index) => (
          <article
            key={`${item.title}-${index}`}
            className="overflow-hidden rounded-[16px] border-2 border-solid border-[#c09038] bg-[#010100]"
          >
            <div className="relative aspect-[3/4]">
              <SafeImage
                src={item.image}
                alt={item.imageAlt || item.title}
                className="absolute inset-0 size-full object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 z-[1] bg-black/50 px-3 py-2 text-center">
                <h3 className="font-['Alice:Regular',Georgia,serif] text-xl leading-tight text-[#c09038] uppercase">
                  {item.title}
                </h3>
                {item.subtitle ? (
                  <p className="mt-0.5 text-sm text-[#e8d5a8] uppercase">
                    {item.subtitle}
                  </p>
                ) : null}
              </div>
            </div>
            {item.description ? (
              <p className="px-3 py-3 text-sm leading-6 text-[#f2f2f2]">
                {item.description}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
