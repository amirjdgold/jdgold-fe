import { useId, type ReactNode } from 'react';
import type { WhyChooseSection } from '@/hooks/useSiteContent';
import { imgFrame22 } from './assetMap';
import svgPaths from './svg-paths';

export const WHY_CHOOSE_FEATURE_COUNT = 5;
export const WHY_CHOOSE_STAT_COUNT = 5;

const DEFAULTS: WhyChooseSection = {
  heading: 'Why Choose JD Gold?',
  features: [
    { title: '99% Pure Gold', description: 'Certified purity ensuring premium quality products.' },
    { title: 'Advanced Technology', description: 'Modern refining processes for maximum efficiency and precision.' },
    { title: 'Trusted Worldwide', description: 'Serving global clients with a strong reputation.' },
    { title: 'Secure Transactions', description: 'Transparent, safe, and fully compliant operations.' },
    { title: 'Expert Team', description: 'Highly skilled professionals with industry expertise.' },
  ],
  stats: [
    { value: '10+', label: 'Years of', labelLine2: 'Experience' },
    { value: '50+', label: 'Expert', labelLine2: 'Employees' },
    { value: '1k +', label: 'Happy', labelLine2: 'Clients' },
    { value: '500kg +', label: 'Gold Produced Monthly' },
    { value: '24/7', label: 'Customer', labelLine2: 'Support' },
  ],
  mission: {
    title: 'Mission',
    body: 'To deliver world-class gold products and services with integrity, innovation, and a commitment to excellence, ensuring long-term value for our clients.',
  },
  missionImage: imgFrame22,
  missionImageAlt: 'JD Gold mission',
  vision: {
    title: 'Vision',
    body: 'To be a global leader in the gold industry, setting new standards in quality, trust, and technological advancement.',
  },
  visionIcon: '/images/why-choose-vision-icon.png',
  visionIconAlt: 'Vision',
};

export function resolveWhyChooseSection(cms?: WhyChooseSection | null): WhyChooseSection {
  const raw = (cms || {}) as Partial<WhyChooseSection>;
  const features = (raw.features ?? []).slice(0, WHY_CHOOSE_FEATURE_COUNT);
  while (features.length < WHY_CHOOSE_FEATURE_COUNT) {
    const i = features.length;
    features.push({ ...DEFAULTS.features[i] });
  }
  const stats = (raw.stats ?? []).slice(0, WHY_CHOOSE_STAT_COUNT);
  while (stats.length < WHY_CHOOSE_STAT_COUNT) {
    const i = stats.length;
    stats.push({ ...DEFAULTS.stats[i] });
  }
  return {
    heading: (raw.heading || '').trim() || DEFAULTS.heading,
    features: features.map((f, i) => ({
      title: (f.title || '').trim() || DEFAULTS.features[i].title,
      description: (f.description || '').trim() || DEFAULTS.features[i].description,
    })),
    stats: stats.map((s, i) => ({
      value: (s.value || '').trim() || DEFAULTS.stats[i].value,
      label: (s.label || '').trim() || DEFAULTS.stats[i].label,
      labelLine2:
        (s.labelLine2 || '').trim() || DEFAULTS.stats[i].labelLine2 || undefined,
    })),
    mission: {
      title: (raw.mission?.title || '').trim() || DEFAULTS.mission.title,
      body: (raw.mission?.body || '').trim() || DEFAULTS.mission.body,
    },
    missionImage: (raw.missionImage || '').trim() || DEFAULTS.missionImage,
    missionImageAlt: (raw.missionImageAlt || '').trim() || DEFAULTS.missionImageAlt,
    vision: {
      title: (raw.vision?.title || '').trim() || DEFAULTS.vision.title,
      body: (raw.vision?.body || '').trim() || DEFAULTS.vision.body,
    },
    visionIcon: (raw.visionIcon || '').trim() || DEFAULTS.visionIcon,
    visionIconAlt: (raw.visionIconAlt || '').trim() || DEFAULTS.visionIconAlt,
  };
}

function FeatureIcon({ index }: { index: number }) {
  switch (index) {
    case 0:
      return (
        <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 24 24">
          <path d={svgPaths.p1210a0} stroke="#C09038" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2ee6a7c0} stroke="#C09038" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      );
    case 1:
      return (
        <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 24 24">
          <path d={svgPaths.pf380900} stroke="#C09038" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p17244b17} stroke="#C09038" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3d5b55e0} stroke="#C09038" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2d9d3b40} stroke="#C09038" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3e0c32f0} stroke="#C09038" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p18b08300} stroke="#C09038" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p15276000} stroke="#C09038" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p10f3ce00} stroke="#C09038" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p22795b80} stroke="#C09038" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      );
    case 2:
      return (
        <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 24 24">
          <path d={svgPaths.p2965b300} stroke="#C09038" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      );
    case 3:
      return (
        <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 24 24">
          <path d={svgPaths.p34c98f00} stroke="#C09038" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1e756600} stroke="#C09038" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      );
    default:
      return (
        <div className="relative size-[24px] overflow-clip">
          <div className="absolute inset-[69.42%_12.5%_12.5%_69.42%]">
            <svg className="block size-full" fill="none" viewBox="0 0 6.34 6.34">
              <path d="M5.34 5.34L1 1" stroke="#C09038" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
          <div className="absolute inset-[12.5%_20.83%_20.83%_12.5%]">
            <svg className="block size-full" fill="none" viewBox="0 0 18 18">
              <path d={svgPaths.pedb3a30} stroke="#C09038" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      );
  }
}

function StatIcon({ index }: { index: number }) {
  switch (index) {
    case 0:
      return (
        <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 24 24">
          <path d={svgPaths.p57def80} stroke="#C09038" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p38b4a000} stroke="#C09038" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3b217c00} stroke="#C09038" strokeWidth="1.5" />
          <path d={svgPaths.p58e900} stroke="#C09038" strokeWidth="1.5" />
          <path d={svgPaths.p33330bc0} stroke="#C09038" strokeLinecap="round" strokeWidth="1.5" />
        </svg>
      );
    case 1:
      return (
        <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 24 24">
          <path d={svgPaths.p19133780} stroke="#C09038" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p254e0880} stroke="#C09038" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p848cf80} stroke="#C09038" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p399ce100} stroke="#C09038" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      );
    case 2:
      return (
        <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 24 24">
          <path d={svgPaths.pe8cfd00} stroke="#C09038" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p317e2180} stroke="#C09038" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p252b2c80} stroke="#C09038" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3ab6ba00} stroke="#C09038" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      );
    case 3:
      return (
        <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 24 24">
          <path d={svgPaths.p3e180700} stroke="#C09038" strokeWidth="1.5" />
          <path d={svgPaths.pb0e2a40} stroke="#C09038" strokeLinecap="round" strokeWidth="1.5" />
          <path d={svgPaths.p2316e400} stroke="#C09038" strokeLinecap="round" strokeWidth="1.5" />
        </svg>
      );
    default:
      return (
        <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 24 24">
          <path d={svgPaths.p4fc3d00} stroke="#C09038" strokeWidth="1.5" />
          <path d={svgPaths.p2c52e080} stroke="#C09038" strokeWidth="1.5" />
          <path d={svgPaths.pe6aca20} stroke="#C09038" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p18ab7480} stroke="#C09038" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      );
  }
}

function SectionHeading({ title }: { title: string }) {
  const uid = useId().replace(/:/g, '');
  return (
    <div className="relative flex w-full shrink-0 content-stretch items-center justify-center gap-[12px]" data-name="motion.div.text-center">
      <div className="relative h-0 min-w-px flex-[1_0_0]">
        <div className="absolute inset-[-5.77px_-1.01%_-5.77px_0]">
          <svg className="block size-full" fill="none" viewBox="0 0 576.773 11.547">
            <path d={svgPaths.p214b7f00} fill={`url(#wc-${uid}-a)`} />
            <defs>
              <linearGradient id={`wc-${uid}-a`} gradientUnits="userSpaceOnUse" x1="0" x2="571" y1="6.7735" y2="6.7735">
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
        <div className="absolute inset-[-5.77px_0_-5.77px_-1.01%]">
          <svg className="block size-full" fill="none" viewBox="0 0 576.773 11.547">
            <path d={svgPaths.p16248a00} fill={`url(#wc-${uid}-b)`} />
            <defs>
              <linearGradient id={`wc-${uid}-b`} gradientUnits="userSpaceOnUse" x1="5.7735" x2="576.774" y1="7.2735" y2="7.2735">
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

function FeatureCard({
  title,
  description,
  iconIndex,
}: {
  title: string;
  description: string;
  iconIndex: number;
}) {
  return (
    <div className="relative min-w-px flex-[1_0_0] self-stretch rounded-[20px] bg-black" data-name="motion.div.card-elevated">
      <div className="size-full overflow-clip rounded-[inherit]">
        <div className="relative flex size-full flex-col content-stretch items-start gap-[12px] p-[14px]">
          <div className="relative w-full shrink-0">
            <div className="relative flex size-full content-stretch items-center gap-[12px]">
              <div className="relative flex size-[44px] shrink-0 items-center justify-center rounded-[12px] bg-[rgba(186,116,1,0.3)]">
                <div className="relative size-[24px]">
                  <FeatureIcon index={iconIndex} />
                </div>
              </div>
              <div className="flex min-w-px flex-[1_0_0] flex-col justify-center font-['Alice:Regular',sans-serif] text-[24px] leading-[23px] not-italic text-[#c09038]">
                <p>{title}</p>
              </div>
            </div>
          </div>
          <p className="w-full font-['Aeonik:Regular',sans-serif] text-[15px] leading-[25.5px] text-[#f2f2f2]">{description}</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[20px] border-2 border-solid border-[#c09038] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]"
      />
    </div>
  );
}

function StatCard({
  value,
  label,
  labelLine2,
  iconIndex,
}: {
  value: string;
  label: string;
  labelLine2?: string;
  iconIndex: number;
}) {
  const valueSize = value.length > 4 ? 'text-[32px]' : 'text-[36px]';
  return (
    <div className="relative min-w-px flex-[1_0_0] self-stretch rounded-[20px] bg-[#100b02]" data-name="motion.div.card-elevated">
      <div className="size-full overflow-clip rounded-[inherit]">
        <div className="relative flex size-full flex-col content-stretch items-start gap-[12px] p-[14px]">
          <div className="relative w-full shrink-0">
            <div className="relative flex size-full content-stretch items-center gap-[16px]">
              <div className="relative flex size-[56px] shrink-0 items-center justify-center rounded-[12px] bg-[rgba(186,116,1,0.3)]">
                <div className="relative size-[24px]">
                  <StatIcon index={iconIndex} />
                </div>
              </div>
              <div className={`font-['Alice:Regular',sans-serif] ${valueSize} leading-[56px] text-right not-italic text-[#c09038] whitespace-nowrap`}>
                {value}
              </div>
            </div>
          </div>
          <div className="w-full font-['Alice:Regular',sans-serif] text-[28px] leading-[normal] not-italic text-[#c09038]">
            {labelLine2 ? (
              <>
                <p className="mb-0">{label}</p>
                <p>{labelLine2}</p>
              </>
            ) : (
              <p>{label}</p>
            )}
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

function TextBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="relative w-full shrink-0">
      <div className="relative flex size-full flex-col content-stretch items-start gap-[12px] not-italic">
        <p className="relative shrink-0 whitespace-nowrap font-['Alice:Regular',sans-serif] text-[32px] leading-[normal] text-[#c09038]">
          {title}
        </p>
        <p className="min-w-full font-['Aeonik:Regular',sans-serif] text-[18px] leading-[1.5] text-[#f2f2f2] w-[min-content]">
          {body}
        </p>
      </div>
    </div>
  );
}

/** Bullseye / target mark (Figma target path, centered in 24×24). */
function MissionIcon() {
  return (
    <svg className="block size-full" fill="none" viewBox="0 0 24 24" aria-hidden>
      <g transform="translate(6, 6)">
        <path
          d={svgPaths.p20303900}
          stroke="#C09038"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}

/** Eye mark (Figma paths) when no custom vision icon URL is set. */
function VisionIconSvg() {
  return (
    <svg className="block size-full" fill="none" viewBox="0 0 24 24" aria-hidden>
      <path
        d={svgPaths.p2475d280}
        stroke="#C09038"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path d={svgPaths.p202e2800} stroke="#C09038" strokeWidth="1.5" />
    </svg>
  );
}

function CenteredIconBadge({
  iconSrc,
  iconAlt,
  fallback,
}: {
  iconSrc?: string;
  iconAlt?: string;
  fallback: ReactNode;
}) {
  return (
    <div
      className="flex size-[56px] shrink-0 items-center justify-center rounded-[12px] bg-[rgba(186,116,1,0.3)]"
      aria-hidden={!iconAlt}
    >
      <div className="relative size-[24px]">
        {iconSrc ? (
          <img src={iconSrc} alt={iconAlt || ''} className="size-full object-contain" />
        ) : (
          fallback
        )}
      </div>
    </div>
  );
}

function MissionBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="relative flex size-full min-h-[188px] w-full flex-col items-center p-[14px]">
      <TextBlock title={title} body={body} />
      <div className="mt-auto flex w-full flex-1 flex-col items-center justify-center pt-6">
        <CenteredIconBadge fallback={<MissionIcon />} />
      </div>
    </div>
  );
}

function VisionBlock({
  title,
  body,
  iconSrc,
  iconAlt,
}: {
  title: string;
  body: string;
  iconSrc: string;
  iconAlt?: string;
}) {
  return (
    <div className="relative flex size-full min-h-[188px] w-full flex-col items-center p-[14px]">
      <TextBlock title={title} body={body} />
      <div className="mt-auto flex w-full flex-1 flex-col items-center justify-center pt-6">
        <CenteredIconBadge iconSrc={iconSrc} iconAlt={iconAlt} fallback={<VisionIconSvg />} />
      </div>
    </div>
  );
}

export function WhyChooseBrandsSection({ content }: { content?: WhyChooseSection | null }) {
  const data = resolveWhyChooseSection(content);

  return (
    <div className="relative w-full shrink-0 bg-[#100b02]" data-name="section#brands">
      <div className="relative flex size-full flex-col content-stretch items-start gap-[12px] px-[20px] py-[10px]">
        <div className="relative flex w-full shrink-0 flex-col content-stretch items-start gap-[24px]">
          <SectionHeading title={data.heading} />
          <div className="relative flex h-[137px] w-full shrink-0 content-stretch items-start gap-[12px]">
            {data.features.map((f, i) => (
              <FeatureCard key={i} title={f.title} description={f.description} iconIndex={i} />
            ))}
          </div>
        </div>
        <div className="relative flex h-[160px] w-full shrink-0 content-stretch items-start gap-[12px]" data-name="motion.div.grid-3">
          {data.stats.map((s, i) => (
            <StatCard key={i} value={s.value} label={s.label} labelLine2={s.labelLine2} iconIndex={i} />
          ))}
        </div>
        <div className="relative flex w-full shrink-0 content-stretch items-stretch gap-[12px]">
          <div className="relative min-w-px flex-[1_0_0] self-stretch rounded-[20px] bg-[#100b02] drop-shadow-[0px_2px_4px_rgba(0,0,0,0.04)]">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[20px] border-2 border-solid border-[#c09038]" />
            <MissionBlock title={data.mission.title} body={data.mission.body} />
          </div>
          <div className="pointer-events-none relative h-[300px] w-[615px] shrink-0 rounded-[16px]">
            <img
              alt={data.missionImageAlt || ''}
              className="absolute inset-0 size-full max-w-none rounded-[16px] object-cover"
              src={data.missionImage}
            />
            <div aria-hidden="true" className="absolute inset-0 rounded-[16px] border-2 border-solid border-[#c09038]" />
          </div>
          <div className="relative min-w-px flex-[1_0_0] self-stretch rounded-[20px] bg-[#100b02] drop-shadow-[0px_2px_4px_rgba(0,0,0,0.04)]">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[20px] border-2 border-solid border-[#c09038]" />
            <VisionBlock
              title={data.vision.title}
              body={data.vision.body}
              iconSrc={data.visionIcon}
              iconAlt={data.visionIconAlt}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
