import { useId } from 'react';
import type { IndustriesWeServeSection } from '@/hooks/useSiteContent';
import { imgFrame31, imgFrame32 } from './assetMap';
import svgPaths from './svg-paths';

export const INDUSTRIES_COUNT = 6;

const COL_CLASSES = ['col-1', 'col-2', 'col-3', 'col-1', 'col-2', 'col-3'] as const;
const ROW_CLASSES = ['row-1', 'row-1', 'row-1', 'row-2', 'row-2', 'row-2'] as const;

const DEFAULTS: IndustriesWeServeSection = {
  heading: 'Industries We Serve',
  leftImage: imgFrame31,
  leftImageAlt: 'Industries we serve',
  rightImage: imgFrame32,
  rightImageAlt: 'Industries we serve',
  industries: [
    { label: 'Jewelry & Fashion' },
    { label: 'Banking & Financial Institutions' },
    { label: 'Electronics Industry' },
    { label: 'Government & Defense' },
    { label: 'Commerce & Traders' },
    { label: 'Global Gold Market' },
  ],
};

export function resolveIndustriesWeServeSection(
  cms?: IndustriesWeServeSection | null,
): IndustriesWeServeSection {
  const raw = (cms || {}) as Partial<IndustriesWeServeSection>;
  const industries = (raw.industries ?? []).slice(0, INDUSTRIES_COUNT);
  while (industries.length < INDUSTRIES_COUNT) {
    const i = industries.length;
    industries.push({ ...DEFAULTS.industries[i] });
  }
  return {
    heading: (raw.heading || '').trim() || DEFAULTS.heading,
    leftImage: (raw.leftImage || '').trim() || DEFAULTS.leftImage,
    leftImageAlt: (raw.leftImageAlt || '').trim() || DEFAULTS.leftImageAlt,
    rightImage: (raw.rightImage || '').trim() || DEFAULTS.rightImage,
    rightImageAlt: (raw.rightImageAlt || '').trim() || DEFAULTS.rightImageAlt,
    industries: industries.map((item, i) => ({
      label: (item.label || '').trim() || DEFAULTS.industries[i].label,
    })),
  };
}

function IndustriesHeading({ title }: { title: string }) {
  const uid = useId().replace(/:/g, '');
  return (
    <div className="relative flex w-full shrink-0 content-stretch items-center justify-center gap-[12px]">
      <div className="relative h-0 min-w-px flex-[1_0_0]">
        <div className="absolute inset-[-5.77px_-0.99%_-5.77px_0]">
          <svg className="block size-full" fill="none" viewBox="0 0 586.773 11.547">
            <path d={svgPaths.p3a1ecd00} fill={`url(#iws-${uid}-a)`} />
            <defs>
              <linearGradient
                id={`iws-${uid}-a`}
                gradientUnits="userSpaceOnUse"
                x1="0"
                x2="581"
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
        <div className="absolute inset-[-5.77px_0_-5.77px_-0.99%]">
          <svg className="block size-full" fill="none" viewBox="0 0 586.773 11.547">
            <path d={svgPaths.p3fb046f0} fill={`url(#iws-${uid}-b)`} />
            <defs>
              <linearGradient
                id={`iws-${uid}-b`}
                gradientUnits="userSpaceOnUse"
                x1="5.7735"
                x2="586.774"
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

function IndustryCard({ label, index }: { label: string; index: number }) {
  return (
    <div
      className={`relative h-[109px] shrink-0 justify-self-stretch rounded-[20px] bg-black ${COL_CLASSES[index]} ${ROW_CLASSES[index]}`}
    >
      <div className="flex size-full flex-col items-center justify-center overflow-clip rounded-[inherit]">
        <div className="relative flex size-full flex-col items-center justify-center p-[14px]">
          <div className="relative flex w-full shrink-0 flex-col justify-center text-center font-['Alice:Regular',sans-serif] text-[24px] leading-[0] not-italic text-[#c09038]">
            <p className="leading-[normal]">{label}</p>
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

export function IndustriesWeServeSectionView({
  content,
}: {
  content?: IndustriesWeServeSection | null;
}) {
  const data = resolveIndustriesWeServeSection(content);

  return (
    <div className="relative w-full shrink-0" data-name="section#brands">
      <div className="relative flex size-full flex-col items-start gap-[12px] bg-[#100b02] px-[20px] py-[10px]">
        <IndustriesHeading title={data.heading} />
        <div className="relative flex w-full shrink-0 items-center gap-[12px]">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <div className="pointer-events-none relative h-full min-w-px flex-[1_0_0] rounded-[16px]">
              <img
                alt={data.leftImageAlt || ''}
                className="absolute inset-0 size-full max-w-none rounded-[16px] object-cover"
                src={data.leftImage}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-[16px] border-2 border-solid border-[#c09038]"
              />
            </div>
          </div>
          <div className="relative grid w-[768px] shrink-0 grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] gap-x-[12px] gap-y-[12px]">
            {data.industries.map((industry, i) => (
              <IndustryCard key={i} label={industry.label} index={i} />
            ))}
          </div>
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <div className="pointer-events-none relative h-full min-w-px flex-[1_0_0] rounded-[16px]">
              <div className="absolute inset-0 overflow-hidden rounded-[16px]">
                <img
                  alt={data.rightImageAlt || ''}
                  className="absolute top-[-114.35%] left-[-153.82%] h-[328.7%] w-[407.65%] max-w-none"
                  src={data.rightImage}
                />
              </div>
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-[16px] border-2 border-solid border-[#c09038]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
