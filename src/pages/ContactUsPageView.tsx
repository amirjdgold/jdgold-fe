import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContactIcon } from '@/components/about/AboutIcons';
import PageShell, { SectionTitle } from '@/components/PageShell';
import ScaledCanvas from '@/components/ScaledCanvas';
import SafeImage from '@/components/SafeImage';
import AboutJewelleryCollection from '@/components/about/AboutJewelleryCollection';
import PhotoCollage from '@/components/management/PhotoCollage';
import type { GalleryImage } from '@/components/about/AboutJewelleryDepartment';

export type ContactIconType = 'phone' | 'whatsapp' | 'email' | 'web' | 'pin';

export type ContactCard = {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  icon?: string;
  link?: string;
};

export type ContactCardBand = {
  key?: string;
  heading?: string;
  items: ContactCard[];
};

export type ContactGalleryBand = {
  key?: string;
  heading?: string;
  images: GalleryImage[];
};

export type ContactUsContent = {
  layout: 'contact-us';
  logoSrc?: string;
  heading?: string;
  subtitle?: string;
  heroImage?: string;
  heroImageAlt?: string;
  bands?: ContactCardBand[];
  galleries?: ContactGalleryBand[];
};

export default function ContactUsPageView({
  content,
}: {
  content: ContactUsContent;
}) {
  const bands = (content.bands || []).filter((band) =>
    band.items.some((item) => item?.title?.trim() || item?.description?.trim() || item?.image?.trim()),
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
                preview={false}
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

        {bands.map((band) => (
          <ContactCardGrid
            key={(band.key || band.heading || '') + band.items.map((item) => item.title).join('|')}
            heading={band.heading}
            items={band.items}
            compact={!band.items.some((item) => item.image?.trim())}
          />
        ))}

        {galleries.map((band) => {
          const isCollage =
            band.key === 'offices-gallery' ||
            /office/i.test(band.heading || '');
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

function contactHref(item: ContactCard): string | undefined {
  const explicit = item.link?.trim();
  if (explicit) return explicit;
  const value = (item.description || '').trim();
  if (!value) return undefined;
  if (/phone|call|tel/i.test(item.title)) {
    return `tel:${value.replace(/[^\d+]/g, '')}`;
  }
  if (/whatsapp/i.test(item.title)) {
    return `https://wa.me/${value.replace(/\D/g, '')}`;
  }
  if (/email|mail/i.test(item.title)) {
    return `mailto:${value}`;
  }
  if (/web/i.test(item.title)) {
    return /^https?:\/\//i.test(value) ? value : `https://${value}`;
  }
  return undefined;
}

function contactIconType(item: ContactCard): ContactIconType | null {
  const icon = (item.icon || '').trim().toLowerCase();
  if (icon === 'phone' || icon === 'call' || icon === 'tel') return 'phone';
  if (icon === 'whatsapp') return 'whatsapp';
  if (icon === 'email' || icon === 'mail') return 'email';
  if (icon === 'web' || icon === 'globe' || icon === 'website') return 'web';
  if (icon === 'pin' || icon === 'location' || icon === 'address' || icon === 'map') return 'pin';
  const title = item.title || '';
  if (/phone|call|tel/i.test(title)) return 'phone';
  if (/whatsapp/i.test(title)) return 'whatsapp';
  if (/email|mail/i.test(title)) return 'email';
  if (/web/i.test(title)) return 'web';
  if (/address|location/i.test(title)) return 'pin';
  return null;
}

function ContactCardVisual({ item }: { item: ContactCard }) {
  const hasPhoto = Boolean(item.image?.trim());
  const iconType = hasPhoto ? null : contactIconType(item);

  if (iconType) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-[#1a1008] to-[#0a0502]">
        <div className="flex size-28 items-center justify-center rounded-full border-2 border-[#c09038] bg-[#120a04] shadow-[0_0_28px_rgba(192,144,56,0.4)]">
          <ContactIcon type={iconType} className="h-14 w-14 shrink-0 text-[#c09038]" />
        </div>
      </div>
    );
  }

  return (
    <SafeImage
      src={item.image}
      alt={item.imageAlt || item.title}
      className="absolute inset-0 size-full object-cover object-top"
    />
  );
}

function ContactCardGrid({
  heading,
  items,
  compact,
}: {
  heading?: string;
  items: ContactCard[];
  compact: boolean;
}) {
  const valid = items.filter(
    (item) => item?.title?.trim() || item?.description?.trim() || item?.image?.trim(),
  );
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

      <div className={compact ? 'grid grid-cols-5 gap-4' : 'grid grid-cols-4 gap-4'}>
        {valid.map((item, index) => {
          const href = contactHref(item);
          const inner = (
            <>
              <div className="relative aspect-[3/4]">
                <ContactCardVisual item={item} />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] bg-black/50 px-3 py-2 text-center">
                  <h3 className="font-['Alice:Regular',Georgia,serif] text-xl leading-tight text-[#c09038] uppercase">
                    {item.title}
                  </h3>
                  {item.subtitle ? (
                    <p className="mt-0.5 text-sm text-[#e8d5a8] uppercase">{item.subtitle}</p>
                  ) : null}
                </div>
              </div>
              {item.description ? (
                <p className="px-3 py-3 text-sm leading-6 text-[#f2f2f2]">{item.description}</p>
              ) : null}
            </>
          );

          const className =
            'gold-glow overflow-hidden rounded-[16px] border-2 border-solid border-[#c09038] bg-[#100b02] transition hover:border-[#c09038] hover:bg-[#c09038]/10';

          if (href) {
            const isExternal = /^https?:\/\//i.test(href);
            return (
              <a
                key={`${item.title}-${index}`}
                href={href}
                className={`${className} block no-underline`}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noreferrer' : undefined}
              >
                {inner}
              </a>
            );
          }

          return (
            <article key={`${item.title}-${index}`} className={className}>
              {inner}
            </article>
          );
        })}
      </div>
    </section>
  );
}
