import PageShell from '@/components/PageShell';
import AdvantageSection, {
  type AdvantageBlock,
} from '@/components/advantages/AdvantageSection';
import AchievementCard from '@/components/advantages/AchievementCard';
import { MottoIcon } from '@/components/advantages/AdvantageIcons';
import SafeImage from '@/components/SafeImage';

export type { AdvantageBlock };

export type AdvantagesContent = {
  layout: 'advantages';
  logoSrc?: string;
  heading?: string;
  subtitle?: string;
  heroImage?: string;
  heroImageAlt?: string;
  blocks?: AdvantageBlock[];
  achievementsHeading?: string;
  achievements?: {
    title: string;
    description?: string;
    points?: string[];
    image: string;
    imageAlt?: string;
  }[];
  footerMottos?: { title: string; subtitle: string; icon?: string }[];
  footerLogoTagline?: string;
  closingLine?: string;
};

export default function AdvantagesPageView({ content }: { content: AdvantagesContent }) {
  const heading =
    content.heading || 'JD GOLD MARKET, ADVANTAGES & ACHIEVEMENTS';
  const headingLines = (() => {
    const upper = heading.toUpperCase();
    if (upper.includes('MARKET') && upper.includes('ADVANTAGES')) {
      return ['JD GOLD', 'MARKET, ADVANTAGES', '& ACHIEVEMENTS'];
    }
    return [heading];
  })();

  const blocks = content.blocks || [];
  const achievements = content.achievements || [];
  const footerMottos = (content.footerMottos || []).filter(
    (m) => m.title?.trim() || m.subtitle?.trim(),
  );
  const showFooter =
    footerMottos.length > 0 ||
    Boolean(content.footerLogoTagline) ||
    Boolean(content.closingLine);

  return (
    <PageShell logoSrc={content.logoSrc}>
      {/* Page header — logo | title | gold imagery (below GlobalPageBanner) */}
      <section className="relative overflow-hidden border-b border-[#c09038]/25">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 30%, rgba(192,144,56,0.22) 0, transparent 42%), radial-gradient(circle at 80% 60%, rgba(212,175,55,0.16) 0, transparent 45%), radial-gradient(1.5px 1.5px at 10% 20%, rgba(255,220,140,0.55), transparent), radial-gradient(1px 1px at 30% 70%, rgba(255,220,140,0.4), transparent), radial-gradient(1.5px 1.5px at 55% 25%, rgba(255,220,140,0.45), transparent), radial-gradient(1px 1px at 75% 55%, rgba(255,220,140,0.35), transparent), radial-gradient(1px 1px at 90% 15%, rgba(255,220,140,0.5), transparent), radial-gradient(1.5px 1.5px at 45% 85%, rgba(255,220,140,0.35), transparent)',
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-6 px-4 py-8 sm:gap-8 sm:py-10 md:px-6 md:py-12 lg:grid-cols-[200px_1fr_280px] lg:gap-6">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {content.logoSrc ? (
              <SafeImage
                src={content.logoSrc}
                alt="JD Gold"
                className="h-16 w-auto sm:h-20 md:h-24"
              />
            ) : null}
            <p className="mt-3 font-['Alice:Regular',Georgia,serif] text-lg tracking-[0.2em] text-[#c09038] md:text-xl">
              JD GOLD
            </p>
          </div>

          <div className="min-w-0 text-center">
            <h1 className="break-words font-['Alice:Regular',Georgia,serif] text-[1.35rem] leading-[1.15] tracking-[0.06em] text-[#c09038] uppercase sm:text-[1.65rem] md:text-4xl md:leading-[1.12] lg:text-[2.65rem]">
              {headingLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-4 text-[11px] tracking-[0.14em] text-[#d4af37] uppercase sm:tracking-[0.18em] md:text-sm md:tracking-[0.22em]">
              {content.subtitle || 'A LEADER IN PURITY. A LEGACY OF TRUST.'}
            </p>
          </div>

          {content.heroImage ? <div className="relative mx-auto h-36 w-full max-w-[280px] overflow-hidden rounded-2xl border border-[#c09038]/70 shadow-[0_0_28px_rgba(192,144,56,0.22)] sm:h-40 md:h-48 lg:mx-0 lg:h-56 lg:max-w-none">
            <SafeImage
              src={content.heroImage}
              alt={content.heroImageAlt || 'JD GOLD Fine Gold bar and coins'}
              className="absolute inset-0 size-full object-cover object-center"
            />
          </div> : null}
        </div>
      </section>

      {/* 1–5 Advantage sections */}
      {blocks.length ? (
        <div className="mx-auto max-w-6xl space-y-6 px-4 pb-10 md:px-6">
          {blocks.map((block) => (
            <AdvantageSection key={block.number + block.title} block={block} />
          ))}
        </div>
      ) : null}

      {/* 6. Achievements / Projects */}
      {achievements.length ? (
        <section className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
          <div className="mb-6 text-center">
            <p className="font-['Alice:Regular',Georgia,serif] text-3xl text-[#c09038]/50 md:text-4xl">
              06
            </p>
            <h2 className="mt-1 font-['Alice:Regular',Georgia,serif] text-xl tracking-[0.08em] text-[#c09038] uppercase md:text-2xl">
              Achievements / Projects
            </h2>
            {content.achievementsHeading ? (
              <p className="mx-auto mt-3 max-w-3xl text-xs tracking-[0.08em] text-[#d4af37]/90 uppercase md:text-sm">
                {content.achievementsHeading}
              </p>
            ) : null}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((item) => (
              <AchievementCard key={item.title} item={item} />
            ))}
          </div>
        </section>
      ) : null}

      {/* Footer mottos */}
      {showFooter ? (
        <section className="border-t border-[#c09038]/40 bg-[#0a0502]">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 px-4 py-10 sm:grid-cols-2 sm:gap-8 md:gap-6 md:px-6 lg:grid-cols-[repeat(4,1fr)_auto] lg:items-center">
            {footerMottos.map((m) => (
              <div key={m.title} className="flex flex-col items-center text-center">
                <div className="mb-3">
                  <MottoIcon icon={m.icon} />
                </div>
                <p className="break-words font-['Alice:Regular',Georgia,serif] text-base tracking-[0.08em] text-[#c09038] uppercase md:text-lg">
                  {m.title}
                </p>
                <p className="mt-1 text-xs tracking-wide text-[#e5e5e5]/90 uppercase">{m.subtitle}</p>
              </div>
            ))}

            <div className="flex flex-col items-center text-center sm:col-span-2 lg:col-span-1 lg:pl-4">
              {content.logoSrc ? (
                <SafeImage
                  src={content.logoSrc}
                  alt="JD Gold"
                  className="mb-2 h-14 w-auto"
                />
              ) : null}
              {content.footerLogoTagline ? (
                <p className="max-w-[180px] text-[10px] leading-relaxed tracking-[0.1em] text-[#d4af37]/90 uppercase">
                  {content.footerLogoTagline}
                </p>
              ) : null}
            </div>
          </div>

          {content.closingLine ? (
            <p className="break-words border-t border-[#c09038]/25 px-4 pb-8 pt-6 text-center font-['Alice:Regular',Georgia,serif] text-xs tracking-[0.12em] text-[#c09038] uppercase sm:text-sm">
              {content.closingLine}
            </p>
          ) : null}
        </section>
      ) : null}

      <footer className="border-t border-[#c09038]/30 bg-[#100b02]">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-5 md:px-6">
          <p className="text-center font-['Alice:Regular',Georgia,serif] text-sm text-[#c09038]">
            © {new Date().getFullYear()} JD Gold. All Rights Reserved.
          </p>
        </div>
      </footer>
    </PageShell>
  );
}
