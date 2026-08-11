import { useId, type ReactNode } from 'react';
import type { HomeGallerySection, HomeGallerySlot, HomeRightGallery } from '@/hooks/useSiteContent';
import {
  imgFrame4,
  imgFrame6,
  imgFrame7,
  imgFrame9,
  imgFrame10,
  imgFrame11,
  imgFrame12,
  imgFrame13,
  imgFrame18,
  imgFrame19,
  imgFrame20,
  imgFrame21,
  imgFrame22,
  imgFrame23,
  imgFrame28,
  imgFrame29,
  imgFrame30,
  imgFrame31,
} from './assetMap';
import svgPaths from './svg-paths';

export const GALLERY_SECTION_KEYS = [
  'staff',
  'refinery',
  'licenseOffice',
  'jewelryFactory',
  'products',
] as const;

export type GallerySectionKey = (typeof GALLERY_SECTION_KEYS)[number];

/** Slot count per section (matches home page layout). */
export const GALLERY_SLOT_COUNTS: Record<GallerySectionKey, number> = {
  staff: 6,
  refinery: 6,
  licenseOffice: 3,
  jewelryFactory: 6,
  products: 6,
};

type SectionDefaults = {
  title: string;
  images: string[];
  alts: string[];
};

const DEFAULTS: Record<GallerySectionKey, SectionDefaults> = {
  staff: {
    title: 'Staff',
    images: [imgFrame9, imgFrame10, imgFrame11, imgFrame12, imgFrame28, imgFrame29],
    alts: [
      'Staff gallery 1',
      'Staff gallery 2',
      'Staff gallery 3',
      'Staff gallery 4',
      'Staff gallery 5',
      'Staff gallery 6',
    ],
  },
  refinery: {
    title: 'Refinery',
    images: [imgFrame6, imgFrame12, imgFrame13, imgFrame29, imgFrame30, imgFrame31],
    alts: ['Refinery 1', 'Refinery 2', 'Refinery 3', 'Refinery 4', 'Refinery 5', 'Refinery 6'],
  },
  licenseOffice: {
    title: 'License & Office',
    images: [imgFrame18, imgFrame19, imgFrame20],
    alts: ['License & office 1', 'License & office 2', 'License & office 3'],
  },
  jewelryFactory: {
    title: 'Jewelry Factory',
    images: [imgFrame4, imgFrame21, imgFrame4, imgFrame6, imgFrame10, imgFrame11],
    alts: [
      'Jewelry factory 1',
      'Jewelry factory 2',
      'Jewelry factory 3',
      'Jewelry factory 4',
      'Jewelry factory 5',
      'Jewelry factory 6',
    ],
  },
  products: {
    title: 'Products',
    images: [imgFrame22, imgFrame23, imgFrame7, imgFrame19, imgFrame20, imgFrame21],
    alts: ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5', 'Product 6'],
  },
};

function normalizeSection(
  key: GallerySectionKey,
  raw?: Partial<HomeGallerySection> | null
): HomeGallerySection {
  const d = DEFAULTS[key];
  const count = GALLERY_SLOT_COUNTS[key];
  const slots: HomeGallerySlot[] = (raw?.slots ?? []).slice(0, count);
  while (slots.length < count) {
    const i = slots.length;
    slots.push({ image: d.images[i], alt: d.alts[i] });
  }
  for (let i = 0; i < count; i++) {
    const im = (slots[i].image || '').trim();
    if (!im) slots[i] = { image: d.images[i], alt: slots[i].alt || d.alts[i] };
  }
  const title = (raw?.title || '').trim() || d.title;
  return {
    title,
    slots: slots.map((s, i) => ({
      image: (s.image || '').trim() || d.images[i],
      alt: (s.alt || '').trim() || d.alts[i],
    })),
  };
}

export function resolveHomeRightGallery(cms?: HomeRightGallery | null): HomeRightGallery {
  const base = (cms || {}) as Partial<HomeRightGallery>;
  return {
    staff: normalizeSection('staff', base.staff),
    refinery: normalizeSection('refinery', base.refinery),
    licenseOffice: normalizeSection('licenseOffice', base.licenseOffice),
    jewelryFactory: normalizeSection('jewelryFactory', base.jewelryFactory),
    products: normalizeSection('products', base.products),
  };
}

function GalleryThumb({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-[160px] min-w-px flex-[1_0_0] rounded-[16px]">
      <img
        alt={alt}
        className="absolute inset-0 size-full max-w-none rounded-[16px] object-cover"
        src={src}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[16px] border-2 border-solid border-[#c09038]"
      />
    </div>
  );
}

function GalleryRow({ slots }: { slots: HomeGallerySlot[] }) {
  return (
    <div className="pointer-events-none relative flex w-full shrink-0 content-stretch items-center gap-[12px]">
      {slots.map((slot, i) => (
        <GalleryThumb key={i} src={slot.image} alt={slot.alt || `Gallery ${i + 1}`} />
      ))}
    </div>
  );
}

function HeaderStaff({ title }: { title: string }) {
  const uid = useId().replace(/:/g, '');
  const g1 = `hg-${uid}-g1`;
  const g2 = `hg-${uid}-g2`;
  return (
    <div className="relative flex w-full shrink-0 content-stretch items-center justify-center gap-[12px]">
      <div className="relative h-0 min-w-px flex-[1_0_0]">
        <div className="absolute inset-[-5.77px_-2.19%_-5.77px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 269.773 11.547">
            <path d={svgPaths.p7033e00} fill={`url(#${g1})`} />
            <defs>
              <linearGradient id={g1} gradientUnits="userSpaceOnUse" x1="0" x2="264" y1="6.7735" y2="6.7735">
                <stop stopColor="#C09038" />
                <stop offset="0.5" stopColor="#975E00" />
                <stop offset="1" stopColor="#C09038" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <p className="relative shrink-0 whitespace-nowrap text-center font-['Alice:Regular',sans-serif] text-[32px] leading-[normal] not-italic text-[#c09038]">
        {title}
      </p>
      <div className="relative h-0 min-w-px flex-[1_0_0]">
        <div className="absolute inset-[-5.77px_0_-5.77px_-2.19%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 269.773 11.547">
            <path d={svgPaths.p1c1dc400} fill={`url(#${g2})`} />
            <defs>
              <linearGradient id={g2} gradientUnits="userSpaceOnUse" x1="5.7735" x2="269.774" y1="7.2735" y2="7.2735">
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

function HeaderRefinery({ title }: { title: string }) {
  const uid = useId().replace(/:/g, '');
  const g1 = `hg-${uid}-r1`;
  const g2 = `hg-${uid}-r2`;
  return (
    <div className="relative flex w-full shrink-0 content-stretch items-center justify-center gap-[12px]">
      <div className="relative h-0 min-w-px flex-[1_0_0]">
        <div className="absolute inset-[-5.77px_-1.7%_-5.77px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344.773 11.547">
            <path d={svgPaths.p3af20d00} fill={`url(#${g1})`} />
            <defs>
              <linearGradient id={g1} gradientUnits="userSpaceOnUse" x1="0" x2="339" y1="6.7735" y2="6.7735">
                <stop stopColor="#C09038" />
                <stop offset="0.5" stopColor="#975E00" />
                <stop offset="1" stopColor="#C09038" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <p className="relative shrink-0 whitespace-nowrap text-center font-['Alice:Regular',sans-serif] text-[32px] leading-[normal] not-italic text-[#c09038]">
        {title}
      </p>
      <div className="relative h-0 min-w-px flex-[1_0_0]">
        <div className="absolute inset-[-5.77px_0_-5.77px_-1.7%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344.773 11.547">
            <path d={svgPaths.p1cb0fd00} fill={`url(#${g2})`} />
            <defs>
              <linearGradient id={g2} gradientUnits="userSpaceOnUse" x1="5.7735" x2="344.774" y1="7.2735" y2="7.2735">
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

function HeaderLicense({ title }: { title: string }) {
  const uid = useId().replace(/:/g, '');
  const g1 = `hg-${uid}-l1`;
  const g2 = `hg-${uid}-l2`;
  return (
    <div className="relative flex w-full shrink-0 content-stretch items-center justify-center gap-[12px]">
      <div className="relative h-0 min-w-px flex-[1_0_0]">
        <div className="absolute inset-[-5.77px_-2.05%_-5.77px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 287.773 11.547">
            <path d={svgPaths.p2d915000} fill={`url(#${g1})`} />
            <defs>
              <linearGradient id={g1} gradientUnits="userSpaceOnUse" x1="0" x2="282" y1="6.7735" y2="6.7735">
                <stop stopColor="#C09038" />
                <stop offset="0.5" stopColor="#975E00" />
                <stop offset="1" stopColor="#C09038" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <p className="relative shrink-0 whitespace-nowrap text-center font-['Alice:Regular',sans-serif] text-[32px] leading-[normal] not-italic text-[#c09038]">
        {title}
      </p>
      <div className="relative h-0 min-w-px flex-[1_0_0]">
        <div className="absolute inset-[-5.77px_0_-5.77px_-2.05%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 287.773 11.547">
            <path d={svgPaths.p1b176f00} fill={`url(#${g2})`} />
            <defs>
              <linearGradient id={g2} gradientUnits="userSpaceOnUse" x1="5.7735" x2="287.774" y1="7.2735" y2="7.2735">
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

function HeaderJewelry({ title }: { title: string }) {
  const uid = useId().replace(/:/g, '');
  const g1 = `hg-${uid}-j1`;
  const g2 = `hg-${uid}-j2`;
  return (
    <div className="relative flex w-full shrink-0 content-stretch items-center justify-center gap-[12px]">
      <div className="relative h-0 min-w-px flex-[1_0_0]">
        <div className="absolute inset-[-5.77px_-1.99%_-5.77px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 295.773 11.547">
            <path d={svgPaths.p33840f00} fill={`url(#${g1})`} />
            <defs>
              <linearGradient id={g1} gradientUnits="userSpaceOnUse" x1="0" x2="290" y1="6.7735" y2="6.7735">
                <stop stopColor="#C09038" />
                <stop offset="0.5" stopColor="#975E00" />
                <stop offset="1" stopColor="#C09038" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <p className="relative shrink-0 whitespace-nowrap text-center font-['Alice:Regular',sans-serif] text-[32px] leading-[normal] not-italic text-[#c09038]">
        {title}
      </p>
      <div className="relative h-0 min-w-px flex-[1_0_0]">
        <div className="absolute inset-[-5.77px_0_-5.77px_-1.99%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 295.773 11.547">
            <path d={svgPaths.pb03f900} fill={`url(#${g2})`} />
            <defs>
              <linearGradient id={g2} gradientUnits="userSpaceOnUse" x1="5.7735" x2="295.774" y1="7.2735" y2="7.2735">
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

function HeaderProducts({ title }: { title: string }) {
  const uid = useId().replace(/:/g, '');
  const g1 = `hg-${uid}-p1`;
  const g2 = `hg-${uid}-p2`;
  return (
    <div className="relative flex w-full shrink-0 content-stretch items-center justify-center gap-[12px]">
      <div className="relative h-0 min-w-px flex-[1_0_0]">
        <div className="absolute inset-[-5.77px_-1.72%_-5.77px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 341.274 11.547">
            <path d={svgPaths.pcaaef00} fill={`url(#${g1})`} />
            <defs>
              <linearGradient id={g1} gradientUnits="userSpaceOnUse" x1="0" x2="335.5" y1="6.7735" y2="6.7735">
                <stop stopColor="#C09038" />
                <stop offset="0.5" stopColor="#975E00" />
                <stop offset="1" stopColor="#C09038" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <p className="relative shrink-0 whitespace-nowrap text-center font-['Alice:Regular',sans-serif] text-[32px] leading-[normal] not-italic text-[#c09038]">
        {title}
      </p>
      <div className="relative h-0 min-w-px flex-[1_0_0]">
        <div className="absolute inset-[-5.77px_0_-5.77px_-1.72%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 341.273 11.547">
            <path d={svgPaths.p3aea1c80} fill={`url(#${g2})`} />
            <defs>
              <linearGradient id={g2} gradientUnits="userSpaceOnUse" x1="5.7735" x2="341.274" y1="7.2735" y2="7.2735">
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

function GallerySectionBlock({
  header,
  section,
  sectionKey,
}: {
  header: ReactNode;
  section: HomeGallerySection;
  sectionKey: GallerySectionKey;
}) {
  const row1 = section.slots.slice(0, 3);
  const row2 =
    GALLERY_SLOT_COUNTS[sectionKey] > 3 ? section.slots.slice(3, 6) : null;

  return (
    <div className="relative flex w-full shrink-0 flex-col content-stretch items-center gap-[12px] overflow-clip bg-[#010100]">
      {header}
      <GalleryRow slots={row1} />
      {row2 ? <GalleryRow slots={row2} /> : null}
    </div>
  );
}

export function HomeRightGalleryColumn({ gallery }: { gallery?: HomeRightGallery | null }) {
  const g = resolveHomeRightGallery(gallery);
  return (
    <>
      <GallerySectionBlock header={<HeaderStaff title={g.staff.title} />} section={g.staff} sectionKey="staff" />
      <GallerySectionBlock header={<HeaderRefinery title={g.refinery.title} />} section={g.refinery} sectionKey="refinery" />
      <GallerySectionBlock header={<HeaderLicense title={g.licenseOffice.title} />} section={g.licenseOffice} sectionKey="licenseOffice" />
      <GallerySectionBlock header={<HeaderJewelry title={g.jewelryFactory.title} />} section={g.jewelryFactory} sectionKey="jewelryFactory" />
      <GallerySectionBlock header={<HeaderProducts title={g.products.title} />} section={g.products} sectionKey="products" />
    </>
  );
}
