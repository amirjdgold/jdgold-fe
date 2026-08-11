import type { ComponentType } from 'react';
import type { GetInTouchSection } from '@/hooks/useSiteContent';
import {
  imgFrame33,
  imgFrame34,
  imgFrame35,
  imgFrame36,
  imgFrame37,
} from './assetMap';
import svgPaths from './svg-paths';

export const GET_IN_TOUCH_TOP_IMAGE_COUNT = 3;

const TOP_IMAGE_CLASSES = [
  'absolute h-[148.14%] left-[-2.3%] max-w-none top-[-33.88%] w-[102.3%]',
  'absolute inset-0 size-full max-w-none rounded-[16px] object-cover',
  'absolute top-[-67.89%] left-[-33.34%] h-[188%] w-[166.68%] max-w-none',
] as const;

const DEFAULTS: GetInTouchSection = {
  heading: 'Get in Touch',
  topImages: [
    { image: imgFrame33, alt: 'Gallery' },
    { image: imgFrame34, alt: 'Gallery' },
    { image: imgFrame35, alt: 'License' },
  ],
  leftImage: imgFrame36,
  leftImageAlt: 'Hong Kong license',
  rightImage: imgFrame37,
  rightImageAlt: 'USA license',
  phone: '+92 300 1234567',
  whatsapp: '+86 18340320420',
  email: 'info@jdgold.com',
  address: 'Suite #01, Gold Tower, Main Boulevard, Karachi, Pakistan',
};

export function resolveGetInTouchSection(cms?: GetInTouchSection | null): GetInTouchSection {
  const raw = (cms || {}) as Partial<GetInTouchSection>;
  const topImages = (raw.topImages ?? []).slice(0, GET_IN_TOUCH_TOP_IMAGE_COUNT);
  while (topImages.length < GET_IN_TOUCH_TOP_IMAGE_COUNT) {
    const i = topImages.length;
    topImages.push({ ...DEFAULTS.topImages[i] });
  }
  return {
    heading: (raw.heading || '').trim() || DEFAULTS.heading,
    topImages: topImages.map((s, i) => ({
      image: (s.image || '').trim() || DEFAULTS.topImages[i].image,
      alt: (s.alt || '').trim() || DEFAULTS.topImages[i].alt,
    })),
    leftImage: (raw.leftImage || '').trim() || DEFAULTS.leftImage,
    leftImageAlt: (raw.leftImageAlt || '').trim() || DEFAULTS.leftImageAlt,
    rightImage: (raw.rightImage || '').trim() || DEFAULTS.rightImage,
    rightImageAlt: (raw.rightImageAlt || '').trim() || DEFAULTS.rightImageAlt,
    phone: (raw.phone || '').trim() || DEFAULTS.phone,
    whatsapp: (raw.whatsapp || '').trim() || DEFAULTS.whatsapp,
    email: (raw.email || '').trim() || DEFAULTS.email,
    address: (raw.address || '').trim() || DEFAULTS.address,
  };
}

function CallIcon() {
  return (
    <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 24 24">
      <path d={svgPaths.p33a03300} stroke="#C09038" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 24 24">
      <path d={svgPaths.p1eef8c00} stroke="#C09038" strokeLinejoin="round" strokeWidth="1.5" />
      <path d={svgPaths.p37d7f700} stroke="#C09038" strokeWidth="1.5" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 24 24">
      <path d={svgPaths.p1e53b00} stroke="#C09038" strokeLinejoin="round" strokeWidth="1.5" />
      <path d={svgPaths.p2475d280} stroke="#C09038" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 24 24">
      <path d={svgPaths.p2b6b3780} stroke="#C09038" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d={svgPaths.p202e2800} stroke="#C09038" strokeWidth="1.5" />
      <path d={svgPaths.p39702600} stroke="#C09038" strokeWidth="1.5" />
    </svg>
  );
}

const CONTACT_ROWS = [
  { Icon: CallIcon, key: 'phone' as const },
  { Icon: WhatsappIcon, key: 'whatsapp' as const },
  { Icon: MailIcon, key: 'email' as const },
  { Icon: LocationIcon, key: 'address' as const },
];

function TopGalleryImage({
  image,
  alt,
  index,
}: {
  image: string;
  alt?: string;
  index: number;
}) {
  const imgClass = TOP_IMAGE_CLASSES[index] ?? TOP_IMAGE_CLASSES[1];
  const needsOverflow = index !== 1;
  return (
    <div className="relative h-[200px] min-w-px flex-[1_0_0] rounded-[16px]">
      {needsOverflow ? (
        <div className="absolute inset-0 overflow-hidden rounded-[16px]">
          <img alt={alt || ''} className={imgClass} src={image} />
        </div>
      ) : (
        <img alt={alt || ''} className={imgClass} src={image} />
      )}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[16px] border-2 border-solid border-[#c09038]"
      />
    </div>
  );
}

function ContactRow({
  Icon,
  value,
  multiline,
}: {
  Icon: ComponentType;
  value: string;
  multiline?: boolean;
}) {
  return (
    <div className="relative flex w-full shrink-0 items-center gap-[12px]">
      <div className="relative size-[24px] shrink-0">
        <Icon />
      </div>
      <div
        className={`relative flex flex-col justify-center font-['Aeonik:Regular',sans-serif] text-[22px] leading-[0] not-italic text-[#f2f2f2] ${
          multiline ? 'min-w-px flex-[1_0_0]' : 'shrink-0 whitespace-nowrap'
        }`}
      >
        <p className="leading-[normal]">{value}</p>
      </div>
    </div>
  );
}

export function GetInTouchSectionView({ content }: { content?: GetInTouchSection | null }) {
  const data = resolveGetInTouchSection(content);
  const contactValues = {
    phone: data.phone,
    whatsapp: data.whatsapp,
    email: data.email,
    address: data.address,
  };

  return (
    <div className="relative w-full shrink-0">
      <div className="relative flex size-full flex-col items-start gap-[12px] px-[20px]">
        <div className="pointer-events-none relative flex w-full shrink-0 items-center gap-[12px]">
          {data.topImages.map((slot, i) => (
            <TopGalleryImage key={i} image={slot.image} alt={slot.alt} index={i} />
          ))}
        </div>
        <div className="relative flex w-full shrink-0 items-start gap-[12px]">
          <div className="pointer-events-none relative min-w-px flex-[1_0_0] self-stretch rounded-[16px]">
            <img
              alt={data.leftImageAlt || ''}
              className="absolute inset-0 size-full max-w-none rounded-[16px] object-cover"
              src={data.leftImage}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[16px] border-2 border-solid border-[#c09038]"
            />
          </div>
          <div className="relative min-w-px flex-[1_0_0] rounded-[20px] bg-[#100b02] drop-shadow-[0px_2px_4px_rgba(0,0,0,0.04)]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[20px] border-2 border-solid border-[#c09038]"
            />
            <div className="relative flex size-full flex-col items-start gap-[24px] p-[14px]">
              <div className="relative flex w-full shrink-0 flex-col justify-center font-['Alice:Regular',sans-serif] text-[24px] leading-[0] tracking-[-0.4px] not-italic text-[#c09038]">
                <p className="leading-[23px]">{data.heading}</p>
              </div>
              <div className="relative flex w-full shrink-0 flex-col items-start gap-[12px]">
                {CONTACT_ROWS.map(({ Icon, key }) => (
                  <ContactRow
                    key={key}
                    Icon={Icon}
                    value={contactValues[key]}
                    multiline={key === 'address'}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="pointer-events-none relative min-w-px flex-[1_0_0] self-stretch rounded-[16px]">
            <div className="absolute inset-0 overflow-hidden rounded-[16px]">
              <img
                alt={data.rightImageAlt || ''}
                className="absolute top-[-50.06%] left-[-0.06%] h-[200.12%] w-[196.01%] max-w-none"
                src={data.rightImage}
              />
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[16px] border-2 border-solid border-[#c09038]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
