import { useEffect, useMemo, useRef } from 'react';
import GlobalPageBanner from '@/components/GlobalPageBanner';
import type { HeroBranding } from '@/hooks/useSiteContent';
import { cn } from '@/lib/utils';

const DEFAULT_BRANDING: HeroBranding = {
  logoSrc: '/images/jd-gold-logo.png',
  logoAlt: 'JD Gold',
  title: 'JD GOLD',
  subtitle: 'Refinery & Jewelry Factory',
};

function normalizeBranding(
  prop: Partial<HeroBranding> | null | undefined,
): HeroBranding {
  if (!prop) return DEFAULT_BRANDING;
  const logoSrc = prop.logoSrc?.trim();
  const title = prop.title?.trim();
  const subtitle = prop.subtitle?.trim();
  if (!logoSrc || !title || !subtitle) return DEFAULT_BRANDING;
  return {
    logoSrc,
    logoAlt: prop.logoAlt?.trim() || DEFAULT_BRANDING.logoAlt,
    title,
    subtitle,
  };
}

/** 1px horizontal gold gradient rule below the hero logo. */
function HeroGoldLine({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'h-px w-full shrink-0 bg-gradient-to-r from-[#C09038] via-[#975E00] to-[#C09038]',
        className,
      )}
      aria-hidden
    />
  );
}

type HeroProps = {
  branding?: Partial<HeroBranding> | null;
};

const Hero = ({ branding: brandingProp }: HeroProps) => {
  const branding = useMemo(
    () => normalizeBranding(brandingProp),
    [brandingProp],
  );
  const fixedTopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = fixedTopRef.current;
    if (!el) return;
    const update = () => {
      const h = Math.ceil(el.getBoundingClientRect().height);
      document.documentElement.style.setProperty('--home-sticky-h', `${h}px`);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener('resize', update);
    window.addEventListener('orientationchange', update);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', update);
      window.removeEventListener('orientationchange', update);
      document.documentElement.style.removeProperty('--home-sticky-h');
    };
  }, []);

  return (
    <>
      <div
        ref={fixedTopRef}
        className="fixed top-0 left-0 right-0 z-40 overflow-x-clip border-b border-[#D4AF37]/40 bg-[#0A0A0A] pt-[max(0.25rem,env(safe-area-inset-top))] shadow-[0_12px_40px_rgba(0,0,0,0.55)]"
        role="banner"
        aria-label="JD Gold header and media strip"
      >
        <div className="container-custom min-w-0 overflow-hidden pb-1 pt-0">
          <div className="flex h-11 w-full items-center justify-center px-3 py-0.5 sm:h-12">
            <img
              src={branding.logoSrc}
              alt={
                branding.logoAlt ||
                branding.title ||
                DEFAULT_BRANDING.logoAlt
              }
              className="mx-auto h-full w-auto max-w-[min(100%,220px)] object-contain object-center sm:max-w-[260px]"
            />
          </div>

          <HeroGoldLine />

          <GlobalPageBanner embedded />
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none w-full shrink-0"
        style={{ height: 'var(--home-sticky-h, 280px)' }}
      />
    </>
  );
};

export default Hero;
