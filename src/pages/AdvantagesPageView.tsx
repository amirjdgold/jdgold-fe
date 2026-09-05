import PageShell from '@/components/PageShell';
import ScaledCanvas from '@/components/ScaledCanvas';
import AdvantageSection, {
  GoldNumberBadge,
  type AdvantageBlock,
} from '@/components/advantages/AdvantageSection';
import AchievementCard from '@/components/advantages/AchievementCard';
import { MottoIcon } from '@/components/advantages/AdvantageIcons';
import SafeImage from '@/components/SafeImage';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  achievementsSubheading?: string;
  achievementsBadge?: string;
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
  const heading = content.heading?.trim() || '';
  const subtitle = content.subtitle?.trim() || '';
  const blocks = content.blocks || [];
  const achievements = content.achievements || [];
  const achievementsBadge = content.achievementsBadge?.trim() || '';
  const achievementsSubheading = content.achievementsSubheading?.trim() || '';
  const achievementsHeading = content.achievementsHeading?.trim() || '';
  const footerMottos = (content.footerMottos || []).filter(
    (m) => m.title?.trim() || m.subtitle?.trim(),
  );
  const showFooter =
    footerMottos.length > 0 ||
    Boolean(content.footerLogoTagline) ||
    Boolean(content.closingLine);

  return (
    <PageShell logoSrc={content.logoSrc}>
      <ScaledCanvas>
      {/* Page header — logo | title | gold imagery (below GlobalPageBanner) */}
      <section className="relative overflow-hidden border-b border-[#c09038]/25">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 30%, rgba(192,144,56,0.22) 0, transparent 42%), radial-gradient(circle at 80% 60%, rgba(212,175,55,0.16) 0, transparent 45%), radial-gradient(1.5px 1.5px at 10% 20%, rgba(255,220,140,0.55), transparent), radial-gradient(1px 1px at 30% 70%, rgba(255,220,140,0.4), transparent), radial-gradient(1.5px 1.5px at 55% 25%, rgba(255,220,140,0.45), transparent), radial-gradient(1px 1px at 75% 55%, rgba(255,220,140,0.35), transparent), radial-gradient(1px 1px at 90% 15%, rgba(255,220,140,0.5), transparent), radial-gradient(1.5px 1.5px at 45% 85%, rgba(255,220,140,0.35), transparent)',
          }}
        />
        <div className="relative mx-auto grid w-full grid-cols-[200px_1fr_280px] items-center gap-6 px-6 py-12">
          <Link
            to="/"
            aria-label="Back to home"
            className="absolute top-6 left-6 z-10 inline-flex items-center gap-1.5 rounded-sm border border-[#c09038]/70 bg-[#0a0502]/85 px-3 py-1.5 text-sm tracking-wide text-[#c09038] backdrop-blur-sm transition hover:border-[#c09038] hover:bg-[#c09038]/20 hover:text-white"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Back
          </Link>
          <div className="flex flex-col items-start pt-8 text-left">
            {content.logoSrc ? (
              <SafeImage
                src={content.logoSrc}
                alt="JD Gold"
                className="h-24 w-auto"
              />
            ) : null}
          </div>

          <div className="min-w-0 text-center">
            {heading ? (
              <h1 className="break-words font-['Alice:Regular',Georgia,serif] text-[2.65rem] leading-[1.12] tracking-[0.06em] text-[#c09038] uppercase">
                {heading}
              </h1>
            ) : null}
            {subtitle ? (
              <p className="mt-4 text-sm tracking-[0.22em] text-[#d4af37] uppercase">
                {subtitle}
              </p>
            ) : null}
          </div>

          {content.heroImage ? (
            <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-[#c09038]/70 shadow-[0_0_28px_rgba(192,144,56,0.22)]">
              <SafeImage
                src={content.heroImage}
                alt={content.heroImageAlt || ''}
                className="absolute inset-0 size-full object-cover object-center"
              />
            </div>
          ) : null}
        </div>
      </section>

      {/* 1–5 Advantage sections */}
      {blocks.length ? (
        <div className="mx-auto w-full space-y-6 px-6 pb-10">
          {blocks.map((block) => (
            <AdvantageSection key={block.number + block.title} block={block} />
          ))}
        </div>
      ) : null}

      {/* 6. Achievements / Projects */}
      {achievements.length ? (
        <section className="mx-auto w-full px-6 pb-12">
          <div className="mb-6 text-center">
            {achievementsBadge || achievementsSubheading ? (
              <div className="flex items-center justify-center gap-3">
                {achievementsBadge ? (
                  <GoldNumberBadge className="size-14 text-[2rem]">
                    {achievementsBadge}
                  </GoldNumberBadge>
                ) : null}
                {achievementsSubheading ? (
                  <h2 className="whitespace-nowrap font-['Alice:Regular',Georgia,serif] text-2xl tracking-[0.08em] text-[#c09038] uppercase">
                    {achievementsSubheading}
                  </h2>
                ) : null}
              </div>
            ) : null}
            {achievementsHeading ? (
              <p className="mx-auto mt-3 max-w-3xl text-sm tracking-[0.08em] text-[#d4af37]/90 uppercase">
                {achievementsHeading}
              </p>
            ) : null}
          </div>

          <div className="grid grid-cols-4 gap-4">
            {achievements.map((item) => (
              <AchievementCard key={item.title} item={item} />
            ))}
          </div>
        </section>
      ) : null}

      {/* Footer mottos */}
      {showFooter ? (
        <section className="border-t border-[#c09038]/40 bg-[#0a0502]">
          <div className="mx-auto grid w-full grid-cols-[repeat(4,1fr)_auto] items-center gap-6 px-6 py-10">
            {footerMottos.map((m) => (
              <div key={m.title} className="flex flex-col items-center text-center">
                <div className="mb-3">
                  <MottoIcon icon={m.icon} />
                </div>
                <p className="break-words font-['Alice:Regular',Georgia,serif] text-lg tracking-[0.08em] text-[#c09038] uppercase">
                  {m.title}
                </p>
                <p className="mt-1 text-xs tracking-wide text-[#e5e5e5]/90 uppercase">{m.subtitle}</p>
              </div>
            ))}

            <div className="flex flex-col items-center pl-4 text-center">
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
            <p className="break-words border-t border-[#c09038]/25 px-4 pt-6 pb-8 text-center font-['Alice:Regular',Georgia,serif] text-sm tracking-[0.12em] text-[#c09038] uppercase">
              {content.closingLine}
            </p>
          ) : null}
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
