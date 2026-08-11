import { useId } from 'react';
import type { GoldRefiningProcessSection } from '@/hooks/useSiteContent';
import {
  imgDivCardElevated,
  imgFrame6,
  imgFrame7,
  imgFrame12,
  imgFrame24,
  imgFrame27,
} from './assetMap';
import svgPaths from './svg-paths';

export const REFINING_PROCESS_STEP_COUNT = 6;

const DEFAULTS: GoldRefiningProcessSection = {
  heading: 'Our Gold Refining Process',
  steps: [
    { step: '01', title: 'Raw Material', image: imgFrame27, imageAlt: 'Raw material' },
    { step: '02', title: 'Melting', image: imgFrame6, imageAlt: 'Melting' },
    { step: '03', title: 'Refining', image: imgFrame12, imageAlt: 'Refining' },
    { step: '04', title: 'Casting', image: imgFrame7, imageAlt: 'Casting' },
    { step: '05', title: 'Quality Check', image: imgFrame24, imageAlt: 'Quality check' },
    { step: '06', title: 'Packaging', image: imgDivCardElevated, imageAlt: 'Packaging' },
  ],
};

export function resolveGoldRefiningProcessSection(
  cms?: GoldRefiningProcessSection | null,
): GoldRefiningProcessSection {
  const raw = (cms || {}) as Partial<GoldRefiningProcessSection>;
  const steps = (raw.steps ?? []).slice(0, REFINING_PROCESS_STEP_COUNT);
  while (steps.length < REFINING_PROCESS_STEP_COUNT) {
    const i = steps.length;
    steps.push({ ...DEFAULTS.steps[i] });
  }
  return {
    heading: (raw.heading || '').trim() || DEFAULTS.heading,
    steps: steps.map((s, i) => ({
      step: (s.step || '').trim() || DEFAULTS.steps[i].step,
      title: (s.title || '').trim() || DEFAULTS.steps[i].title,
      image: (s.image || '').trim() || DEFAULTS.steps[i].image,
      imageAlt: (s.imageAlt || '').trim() || DEFAULTS.steps[i].imageAlt,
    })),
  };
}

function ProcessHeading({ title }: { title: string }) {
  const uid = useId().replace(/:/g, '');
  return (
    <div className="relative flex w-full shrink-0 content-stretch items-center justify-center gap-[12px]">
      <div className="relative h-0 min-w-px flex-[1_0_0]">
        <div className="absolute inset-[-5.77px_-1.08%_-5.77px_0]">
          <svg className="block size-full" fill="none" viewBox="0 0 542.273 11.547">
            <path d={svgPaths.p167e0880} fill={`url(#grp-${uid}-a)`} />
            <defs>
              <linearGradient
                id={`grp-${uid}-a`}
                gradientUnits="userSpaceOnUse"
                x1="0"
                x2="536.5"
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
        <div className="absolute inset-[-5.77px_0_-5.77px_-1.08%]">
          <svg className="block size-full" fill="none" viewBox="0 0 542.273 11.547">
            <path d={svgPaths.p36560f80} fill={`url(#grp-${uid}-b)`} />
            <defs>
              <linearGradient
                id={`grp-${uid}-b`}
                gradientUnits="userSpaceOnUse"
                x1="5.7735"
                x2="542.274"
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

function ProcessStepCard({
  step,
  title,
  image,
  imageAlt,
  stepSizeClass,
}: {
  step: string;
  title: string;
  image: string;
  imageAlt?: string;
  stepSizeClass?: string;
}) {
  return (
    <div className="relative min-w-px flex-[1_0_0] self-stretch rounded-[20px]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[20px]">
        <div className="absolute inset-0 rounded-[20px] bg-[#100b02]" />
        <img
          alt={imageAlt || ''}
          className="absolute size-full max-w-none rounded-[20px] object-cover opacity-24"
          src={image}
        />
      </div>
      <div className="relative flex size-full flex-col items-center overflow-clip rounded-[inherit]">
        <div className="relative flex size-full flex-col items-center gap-[12px] p-[34px] text-center font-['Alice:Regular',sans-serif] not-italic text-[#c09038]">
          <div className={`flex w-full flex-col justify-center ${stepSizeClass ?? 'text-[36px]'} leading-[56px]`}>
            {step}
          </div>
          <div className="flex w-full flex-col justify-center text-[24px] leading-[normal]">{title}</div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[20px] border-2 border-solid border-[#c09038] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]"
      />
    </div>
  );
}

export function GoldRefiningProcessSectionView({
  content,
}: {
  content?: GoldRefiningProcessSection | null;
}) {
  const data = resolveGoldRefiningProcessSection(content);

  return (
    <div className="relative w-full shrink-0 bg-[#100b02]" data-name="section#brands">
      <div className="relative flex size-full flex-col items-start gap-[12px] px-[20px] py-[10px]">
        <ProcessHeading title={data.heading} />
        <div className="relative flex h-[163px] w-full shrink-0 items-start gap-[12px]">
          {data.steps.map((item, i) => (
            <ProcessStepCard
              key={i}
              step={item.step}
              title={item.title}
              image={item.image}
              imageAlt={item.imageAlt}
              stepSizeClass={item.step === '04' ? 'text-[32px]' : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
