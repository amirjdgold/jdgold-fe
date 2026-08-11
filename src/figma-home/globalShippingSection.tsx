import { useId } from 'react';
import type { GlobalShippingSection } from '@/hooks/useSiteContent';
import svgPaths from './svg-paths';

export const GLOBAL_SHIPPING_FEATURE_COUNT = 5;

const DEFAULTS: GlobalShippingSection = {
  heading: 'Global Shipping & Secure Delivery',
  features: [
    {
      title: 'Worldwide Shipping',
      description: 'Serving clients across international markets.',
    },
    {
      title: 'Fully Insured',
      description: 'All shipments are protected for maximum security.',
    },
    {
      title: 'Secure Packaging',
      description: 'Tamper-proof and high-security packaging standards.',
    },
    {
      title: 'Real-Time Tracking',
      description: 'Track shipments with complete transparency.',
    },
    {
      title: 'Timely Delivery',
      description: 'Fast and reliable logistics solutions.',
    },
  ],
};

export function resolveGlobalShippingSection(
  cms?: GlobalShippingSection | null,
): GlobalShippingSection {
  const raw = (cms || {}) as Partial<GlobalShippingSection>;
  const features = (raw.features ?? []).slice(0, GLOBAL_SHIPPING_FEATURE_COUNT);
  while (features.length < GLOBAL_SHIPPING_FEATURE_COUNT) {
    const i = features.length;
    features.push({ ...DEFAULTS.features[i] });
  }
  return {
    heading: (raw.heading || '').trim() || DEFAULTS.heading,
    features: features.map((f, i) => ({
      title: (f.title || '').trim() || DEFAULTS.features[i].title,
      description: (f.description || '').trim() || DEFAULTS.features[i].description,
    })),
  };
}

function GlobeIcon() {
  return (
    <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 24 24">
      <g>
        <path d="M12.5 19V22" stroke="#C09038" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d="M10.5 22H14.5" stroke="#C09038" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d={svgPaths.p23973d40} stroke="#C09038" strokeLinecap="round" strokeWidth="1.5" />
        <path d={svgPaths.p1193f800} stroke="#C09038" strokeLinejoin="round" strokeWidth="1.5" />
        <path d={svgPaths.p2d46980} stroke="#C09038" strokeLinejoin="round" strokeWidth="1.5" />
        <path d={svgPaths.p322f9d80} stroke="#C09038" strokeLinecap="round" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

function TeachingIcon() {
  return (
    <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 24 24">
      <g>
        <path d={svgPaths.p1b261a40} stroke="#C09038" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d={svgPaths.p2c0fa880} stroke="#C09038" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d={svgPaths.p25db6c00} stroke="#C09038" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d="M12 7H18M18 11H15" stroke="#C09038" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

function DeliverySecureIcon() {
  return (
    <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 24 24">
      <g>
        <path d={svgPaths.p2f384880} stroke="#C09038" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d={svgPaths.p1da2b180} stroke="#C09038" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d="M12 7.5V2.5" stroke="#C09038" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d="M10 10.5H14" stroke="#C09038" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d={svgPaths.p2cdfe040} stroke="#C09038" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d={svgPaths.pcea8280} stroke="#C09038" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

function PackageProcessIcon() {
  return (
    <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 24 24">
      <g>
        <path d={svgPaths.p9953e80} stroke="#C09038" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d={svgPaths.p152ba000} stroke="#C09038" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d={svgPaths.p36cb6480} stroke="#C09038" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d="M5 12L7 13" stroke="#C09038" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d="M16 4L6 9" stroke="#C09038" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

function DeliveryDelayIcon() {
  return (
    <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 24 24">
      <g>
        <path d={svgPaths.p3e46f00} stroke="#C09038" strokeWidth="1.5" />
        <path d={svgPaths.p23aa6880} stroke="#C09038" strokeWidth="1.5" />
        <path d={svgPaths.p1cfd4800} stroke="#C09038" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d={svgPaths.p20303900} stroke="#C09038" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

const FEATURE_ICONS = [GlobeIcon, TeachingIcon, DeliverySecureIcon, PackageProcessIcon, DeliveryDelayIcon];

function ShippingHeading({ title }: { title: string }) {
  const uid = useId().replace(/:/g, '');
  return (
    <div className="relative flex w-full shrink-0 content-stretch items-center justify-center gap-[12px]">
      <div className="relative h-0 min-w-px flex-[1_0_0]">
        <div className="absolute inset-[-5.77px_-1.21%_-5.77px_0]">
          <svg className="block size-full" fill="none" viewBox="0 0 482.273 11.547">
            <path d={svgPaths.p2a218080} fill={`url(#gs-${uid}-a)`} />
            <defs>
              <linearGradient
                id={`gs-${uid}-a`}
                gradientUnits="userSpaceOnUse"
                x1="0"
                x2="476.5"
                y1="6.7735"
                y2="6.7735"
              >
                <stop stopColor="#C09038" />
                <stop offset="0.5" stopColor="#975E00" />
                <stop offset="1" stopColor="#C09038" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <p className="relative shrink-0 whitespace-nowrap font-['Alice:Regular',sans-serif] text-[32px] leading-[normal] not-italic text-[#c09038]">
        {title}
      </p>
      <div className="relative h-0 min-w-px flex-[1_0_0]">
        <div className="absolute inset-[-5.77px_0_-5.77px_-1.21%]">
          <svg className="block size-full" fill="none" viewBox="0 0 482.273 11.547">
            <path d={svgPaths.p353fe580} fill={`url(#gs-${uid}-b)`} />
            <defs>
              <linearGradient
                id={`gs-${uid}-b`}
                gradientUnits="userSpaceOnUse"
                x1="5.7735"
                x2="482.274"
                y1="7.2735"
                y2="7.2735"
              >
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

function ShippingFeatureCard({
  title,
  description,
  iconIndex,
}: {
  title: string;
  description: string;
  iconIndex: number;
}) {
  const Icon = FEATURE_ICONS[iconIndex] ?? GlobeIcon;
  return (
    <div className="relative min-w-px flex-[1_0_0] self-stretch rounded-[20px] bg-[#100b02]">
      <div className="size-full overflow-clip rounded-[inherit]">
        <div className="relative flex size-full flex-col items-start gap-[12px] p-[14px]">
          <div className="relative w-full shrink-0">
            <div className="relative flex w-full items-center gap-[12px]">
              <div className="relative flex size-[56px] shrink-0 items-center justify-center rounded-[12px] bg-[rgba(186,116,1,0.3)]">
                <div className="relative size-[24px]">
                  <Icon />
                </div>
              </div>
              <div className="relative flex min-w-px flex-[1_0_0] flex-col justify-center font-['Alice:Regular',sans-serif] text-[24px] leading-[0] tracking-[-0.4px] not-italic text-[#c09038]">
                <p className="leading-[23px]">{title}</p>
              </div>
            </div>
          </div>
          <div className="relative w-full shrink-0">
            <p className="font-['Aeonik:Regular',sans-serif] text-[15px] leading-[normal] not-italic text-[#f2f2f2]">
              {description}
            </p>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[20px] border-2 border-solid border-[#c09038] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]"
      />
    </div>
  );
}

export function GlobalShippingSectionView({
  content,
}: {
  content?: GlobalShippingSection | null;
}) {
  const data = resolveGlobalShippingSection(content);

  return (
    <div className="relative w-full shrink-0" data-name="section#brands">
      <div className="relative flex size-full flex-col items-start gap-[12px] bg-[#100b02] px-[20px] py-[10px]">
        <ShippingHeading title={data.heading} />
        <div className="relative flex h-[132px] w-full shrink-0 items-start gap-[12px]">
          {data.features.map((feature, i) => (
            <ShippingFeatureCard
              key={i}
              title={feature.title}
              description={feature.description}
              iconIndex={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
