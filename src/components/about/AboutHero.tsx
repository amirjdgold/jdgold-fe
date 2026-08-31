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

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 md:grid-cols-[1.15fr_0.95fr] md:gap-10 md:px-6 md:py-14">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          {logoSrc ? (
            <SafeImage
              src={logoSrc}
              alt="JD Gold"
              className="mb-3 h-20 w-auto md:h-24"
            />
          ) : null}
          <p className="font-['Alice:Regular',Georgia,serif] text-2xl tracking-[0.18em] text-[#c09038] md:text-3xl">
            JD GOLD
          </p>
          {brandTagline ? (
            <p className="mt-2 text-sm tracking-wide text-[#e8d5a8]/90 md:text-base">
              {brandTagline}
            </p>
          ) : null}

          {hasCopy ? (
            <div className="mt-8 w-full max-w-xl">
              {aboutHeading ? (
                <h1 className="mb-4 break-words font-['Alice:Regular',Georgia,serif] text-2xl tracking-[0.08em] text-[#c09038] uppercase sm:text-3xl md:text-4xl lg:text-[2.75rem]">
                  {aboutHeading}
                </h1>
              ) : null}
              <div className="space-y-3 text-sm leading-relaxed text-[#f0e2c0] md:text-[15px]">
                {aboutBody ? <p>{aboutBody}</p> : null}
                {aboutBodySecondary ? <p>{aboutBodySecondary}</p> : null}
              </div>
            </div>
          ) : null}
        </div>

        {heroImage ? (
          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-[#c09038]/80 shadow-[0_0_40px_rgba(192,144,56,0.28)] md:aspect-[3/4] md:min-h-[420px]">
              <SafeImage
                src={heroImage}
                alt={heroImageAlt || ''}
                className="absolute inset-0 size-full object-cover object-center"
              />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
