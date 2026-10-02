import { ArrowLeft, Globe2, Handshake, Lock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageShell from '@/components/PageShell';
import ScaledCanvas from '@/components/ScaledCanvas';
import SafeImage from '@/components/SafeImage';
import { type FactoryCard } from '@/data/factoryRefinery';

export type FactoryRefineryContent = {
  layout: 'factory-refinery';
  logoSrc?: string;
  titleLine1?: string;
  titleLine2?: string;
  tagline?: string;
  heroImage?: string;
  heroImageAlt?: string;
  refineryHeading?: string;
  refineryIntro?: string;
  refineryHeroImage?: string;
  refineryHeroImageAlt?: string;
  refinerySteps?: FactoryCard[];
  factoryHeading?: string;
  factoryIntro?: string;
  factoryHeroImage?: string;
  factoryHeroImageAlt?: string;
  factorySteps?: FactoryCard[];
  productsHeading?: string;
  products?: FactoryCard[];
  servicesHeading?: string;
  services?: FactoryCard[];
  trustPoints?: { value: string; label: string }[];
};

function GoldBanner({ children }: { children: string }) {
  return (
    <div className="mx-auto mb-3 flex w-full max-w-3xl items-center justify-center border border-[#c09038] bg-[#080604] px-8 py-2 shadow-[0_0_18px_rgba(192,144,56,0.16)]">
      <h2 className="text-center font-['Alice:Regular',Georgia,serif] text-2xl tracking-[0.08em] text-[#c09038] uppercase">
        {children}
      </h2>
    </div>
  );
}

function FlourishTitle({ children }: { children: string }) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <div className="h-px min-w-[1rem] flex-1 bg-gradient-to-r from-transparent via-[#c09038] to-[#c09038]" />
      <h2 className="whitespace-nowrap font-['Alice:Regular',Georgia,serif] text-3xl tracking-[0.12em] text-[#c09038] uppercase">
        {children}
      </h2>
      <div className="h-px min-w-[1rem] flex-1 bg-gradient-to-l from-transparent via-[#c09038] to-[#c09038]" />
    </div>
  );
}

function ProcessCard({ item }: { item: FactoryCard }) {
  return (
    <article className="flex min-w-0 flex-col border border-[#c09038]/70 bg-black/80 p-2">
      <div className="min-h-[54px] text-center">
        <h3 className="font-['Alice:Regular',Georgia,serif] text-sm leading-5 font-bold tracking-wide text-[#c09038] uppercase">
          {item.title}
        </h3>
        {item.subtitle ? (
          <p className="text-[11px] font-semibold tracking-wide text-[#e8d5a8] uppercase">
            {item.subtitle}
          </p>
        ) : null}
      </div>
      <div className="aspect-[4/3] overflow-hidden border border-[#c09038]/50">
        <SafeImage
          src={item.image}
          alt={item.imageAlt || item.title}
          className="size-full object-cover object-center"
        />
      </div>
      <p className="flex-1 px-2 py-3 text-sm leading-6 font-medium text-[#f2f2f2]">
        {item.description}
      </p>
    </article>
  );
}

function TrustIcon({ index }: { index: number }) {
  const className = 'size-8 shrink-0 text-[#c09038]';
  if (index === 1) return <Globe2 className={className} />;
  if (index === 2) return <Handshake className={className} />;
  if (index === 3) return <Lock className={className} />;
  if (index === 4) return <Star className={className} />;
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4 18h16l-2-10H6L4 18zm4-12h8l1 2H7l1-2z" />
    </svg>
  );
}

export default function FactoryRefineryPageView({
  content,
}: {
  content?: FactoryRefineryContent;
}) {
  const logoSrc = content?.logoSrc;
  const titleLine1 = content?.titleLine1?.trim() || '';
  const titleLine2 = content?.titleLine2?.trim() || '';
  const tagline = content?.tagline?.trim() || '';
  const heroImage = content?.heroImage;
  const heroImageAlt = content?.heroImageAlt || '';
  const refineryHeading = content?.refineryHeading?.trim() || '';
  const refineryIntro = content?.refineryIntro?.trim() || '';
  const refineryHeroImage = content?.refineryHeroImage;
  const refinerySteps = content?.refinerySteps || [];
  const factoryHeading = content?.factoryHeading?.trim() || '';
  const factoryIntro = content?.factoryIntro?.trim() || '';
  const factoryHeroImage = content?.factoryHeroImage;
  const factorySteps = content?.factorySteps || [];
  const productsHeading = content?.productsHeading?.trim() || '';
  const products = content?.products || [];
  const servicesHeading = content?.servicesHeading?.trim() || '';
  const services = content?.services || [];
  const trustPoints = content?.trustPoints || [];
  const showRefinery =
    Boolean(refineryHeading || refineryIntro || refineryHeroImage || refinerySteps.length);
  const showFactory =
    Boolean(factoryHeading || factoryIntro || factoryHeroImage || factorySteps.length);
  const showProducts = Boolean(productsHeading || products.length);
  const showServices = Boolean(servicesHeading || services.length);

  return (
    <PageShell logoSrc={logoSrc}>
      <ScaledCanvas width={1152}>
        <section className="relative overflow-hidden border-b border-[#c09038]/30">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(192,144,56,0.12),transparent_42%)]" />
          <div className="relative mx-auto grid w-full grid-cols-[1.15fr_0.85fr] items-center gap-10 px-6 py-12">
            <Link
              to="/"
              aria-label="Back to home"
              className="absolute top-6 left-6 z-10 inline-flex items-center gap-1.5 rounded-sm border border-[#c09038]/70 bg-[#0a0502]/85 px-3 py-1.5 text-sm tracking-wide text-[#c09038] backdrop-blur-sm transition hover:border-[#c09038] hover:bg-[#c09038]/20 hover:text-white"
            >
              <ArrowLeft className="size-4" aria-hidden />
              Back
            </Link>
            <div className="flex min-w-0 items-center gap-5 pt-8 text-left">
              <SafeImage
                  src={logoSrc}
                  alt="JD Gold"
                  preview={false}
                  className="h-32 w-auto shrink-0"
                />
              <div className="min-w-0">
                {titleLine1 || titleLine2 ? (
                  <h1 className="font-['Alice:Regular',Georgia,serif] text-[1.75rem] leading-[1.15] tracking-[0.06em] text-[#c09038] uppercase">
                    {titleLine1 ? (
                      <span className="block whitespace-nowrap">{titleLine1}</span>
                    ) : null}
                    {titleLine2 ? (
                      <span className="block whitespace-nowrap">{titleLine2}</span>
                    ) : null}
                  </h1>
                ) : null}
                {tagline ? (
                  <p className="mt-3 text-sm font-medium tracking-[0.06em] text-white uppercase">
                    {tagline}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="relative flex w-full justify-end">
            <div className="relative aspect-[3/4] w-full max-w-[360px] overflow-hidden">
              <SafeImage
                src={heroImage}
                alt={heroImageAlt}
                className="absolute inset-0 size-full object-cover object-center"
              />
            </div>
            </div>
          </div>
        </section>

        <div className="px-6 py-8">
          {showRefinery ? (
            <section>
              {refineryHeading ? <GoldBanner>{refineryHeading}</GoldBanner> : null}
              {refineryIntro ? (
                <p className="mb-4 text-center text-sm font-semibold tracking-[0.04em] text-[#f2f2f2] uppercase">
                  {refineryIntro}
                </p>
              ) : null}
              <div className="mb-4 aspect-[4/1] overflow-hidden border border-[#c09038]/70">
                <SafeImage
                  src={refineryHeroImage}
                  alt={content?.refineryHeroImageAlt || ''}
                  className="size-full object-cover object-center"
                />
              </div>
              {refinerySteps.length ? (
                <div className="grid grid-cols-4 gap-2">
                  {refinerySteps.map((item) => (
                    <ProcessCard key={item.title} item={item} />
                  ))}
                </div>
              ) : null}
            </section>
          ) : null}

          {showFactory ? (
            <section className="mt-10">
              {factoryHeading ? <GoldBanner>{factoryHeading}</GoldBanner> : null}
              {factoryIntro ? (
                <p className="mb-4 text-center text-sm font-semibold tracking-[0.04em] text-[#f2f2f2] uppercase">
                  {factoryIntro}
                </p>
              ) : null}
              <div className="mb-4 aspect-[4/1] overflow-hidden border border-[#c09038]/70">
                <SafeImage
                  src={factoryHeroImage}
                  alt={content?.factoryHeroImageAlt || ''}
                  className="size-full object-cover object-center"
                />
              </div>
              {factorySteps.length ? (
                <div className="grid grid-cols-5 gap-2">
                  {factorySteps.map((item) => (
                    <ProcessCard key={item.title} item={item} />
                  ))}
                </div>
              ) : null}
            </section>
          ) : null}

          {showProducts ? (
            <section className="mt-10">
              {productsHeading ? <FlourishTitle>{productsHeading}</FlourishTitle> : null}
              {products.length ? (
                <div className="grid grid-cols-4 gap-3">
                  {products.map((item) => (
                    <ProcessCard key={item.title} item={item} />
                  ))}
                </div>
              ) : null}
            </section>
          ) : null}

          {showServices ? (
            <section className="mt-10">
              {servicesHeading ? <FlourishTitle>{servicesHeading}</FlourishTitle> : null}
              {services.length ? (
                <div className="grid grid-cols-5 gap-2">
                  {services.map((item) => (
                    <ProcessCard key={item.title} item={item} />
                  ))}
                </div>
              ) : null}
            </section>
          ) : null}
        </div>

        {trustPoints.length ? (
          <section className="border-t border-[#c09038]/40 bg-[#0a0502]">
            <div className="grid grid-cols-5 items-center gap-4 px-6 py-8">
              {trustPoints.map((point, index) => (
                <div
                  key={point.label}
                  className="flex shrink-0 items-center justify-center gap-3 border-r border-[#c09038]/30 px-2 text-center last:border-r-0"
                >
                  <TrustIcon index={index} />
                  <div>
                    <p className="font-['Alice:Regular',Georgia,serif] text-sm font-medium tracking-wide text-[#c09038] uppercase">
                      {point.value}
                    </p>
                    <p className="text-[10px] font-semibold tracking-wide text-[#f2f2f2] uppercase">
                      {point.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

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
