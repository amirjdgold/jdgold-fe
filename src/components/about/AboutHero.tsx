import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SafeImage from '@/components/SafeImage';

type AboutHeroProps = {
  logoSrc?: string;
  brandTagline?: string;
  aboutHeading?: string;
  aboutBody?: string;
  aboutBodySecondary?: string;
  heroImage?: string;
  heroImageAlt?: string;
  heroBackgroundImage?: string;
};

export default function AboutHero({
  logoSrc,
  brandTagline,
  aboutHeading,
  aboutBody,
  aboutBodySecondary,
  heroImage,
  heroImageAlt,
  heroBackgroundImage,
}: AboutHeroProps) {
  const hasCopy = Boolean(aboutHeading || aboutBody || aboutBodySecondary);

  return (
    <section className="relative overflow-hidden">
      {heroBackgroundImage ? (
        <div className="pointer-events-none absolute inset-0">
          <SafeImage
            src={heroBackgroundImage}
            alt=""
            hideIfEmpty
            className="absolute inset-0 size-full object-cover opacity-[0.22]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0502] via-[#0a0502]/92 to-[#0a0502]/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0502]/40 via-transparent to-[#0a0502]" />
        </div>
      ) : null}

      <div className="relative grid w-full grid-cols-[1.15fr_0.95fr] items-center gap-10 px-6 py-14">
        <Link
          to="/"
          aria-label="Back to home"
          className="absolute top-6 left-6 z-10 inline-flex items-center gap-1.5 rounded-sm border border-[#c09038]/70 bg-[#0a0502]/85 px-3 py-1.5 text-sm tracking-wide text-[#c09038] backdrop-blur-sm transition hover:border-[#c09038] hover:bg-[#c09038]/20 hover:text-white"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Back
        </Link>
        <div className="flex flex-col items-start text-left">
          <SafeImage
              src={logoSrc}
              alt="JD Gold"
              className="mb-3 h-24 w-auto"
            />
          {brandTagline ? (
            <p className="mt-2 text-base tracking-wide text-[#e8d5a8]/90">
              {brandTagline}
            </p>
          ) : null}

          {hasCopy ? (
            <div className="mt-8 w-full max-w-xl">
              {aboutHeading ? (
                <h1 className="mb-4 break-words font-['Alice:Regular',Georgia,serif] text-[2.75rem] tracking-[0.08em] text-[#c09038] uppercase">
                  {aboutHeading}
                </h1>
              ) : null}
              <div className="space-y-3 text-[15px] leading-relaxed text-[#f0e2c0]">
                {aboutBody ? <p>{aboutBody}</p> : null}
                {aboutBodySecondary ? <p>{aboutBodySecondary}</p> : null}
              </div>
            </div>
          ) : null}
        </div>

          <div className="relative w-full">
            <div className="relative aspect-[3/4] min-h-[420px] overflow-hidden rounded-sm border border-[#c09038]/80 shadow-[0_0_40px_rgba(192,144,56,0.28)]">
              <SafeImage
                src={heroImage}
                alt={heroImageAlt || ''}
                className="absolute inset-0 size-full object-cover object-center"
              />
            </div>
          </div>
      </div>
    </section>
  );
}
