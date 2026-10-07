import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import GlobalPageBanner from '@/components/GlobalPageBanner';
import SiteBrandLockup from '@/components/SiteBrandLockup';
import { cn } from '@/lib/utils';

const DESKTOP_MQ = '(min-width: 1024px)';
const DOCK_BRAND_AFTER_PX = 24;
const BRAND_EASE = 'duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none';

function GoldLine({ className }: { className?: string }) {
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

type SiteStickyChromeProps = {
  logoSrc?: string;
  logoAlt?: string;
  title?: string;
  subtitle?: string;
  logoHref?: string;
};

/** Shared home header: centered brand above the banner; docks beside it on desktop scroll. */
export default function SiteStickyChrome({
  logoSrc,
  logoAlt = 'JD Gold',
  title,
  subtitle,
  logoHref,
}: SiteStickyChromeProps) {
  const fixedTopRef = useRef<HTMLDivElement>(null);
  const [dockBrandOnDesktop, setDockBrandOnDesktop] = useState(false);
  const [spacerPx, setSpacerPx] = useState(280);

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_MQ);
    const sync = () => {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      setDockBrandOnDesktop(mq.matches && y > DOCK_BRAND_AFTER_PX);
    };

    sync();
    window.addEventListener('scroll', sync, { passive: true });
    mq.addEventListener('change', sync);
    return () => {
      window.removeEventListener('scroll', sync);
      mq.removeEventListener('change', sync);
    };
  }, []);

  useLayoutEffect(() => {
    const header = fixedTopRef.current;
    if (!header) return;

    const update = () => {
      const h = Math.ceil(header.getBoundingClientRect().height);
      setSpacerPx(h);
      document.documentElement.style.setProperty('--home-sticky-h', `${h}px`);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(header);
    window.addEventListener('resize', update);
    window.addEventListener('orientationchange', update);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', update);
      window.removeEventListener('orientationchange', update);
      document.documentElement.style.removeProperty('--home-sticky-h');
    };
  }, [dockBrandOnDesktop, logoSrc, title, subtitle]);

  const brand = (
    <SiteBrandLockup
      logoSrc={logoSrc}
      logoAlt={logoAlt}
      title={title}
      subtitle={subtitle}
      compact={dockBrandOnDesktop}
    />
  );

  return (
    <>
      <div
        ref={fixedTopRef}
        className="fixed top-0 right-0 left-0 z-40 overflow-x-clip border-b border-[#D4AF37]/40 bg-[#0A0A0A] pt-[max(0.25rem,env(safe-area-inset-top))] shadow-[0_12px_40px_rgba(0,0,0,0.55)]"
        role="banner"
        aria-label="JD Gold header and media strip"
      >
        <div
          className={cn(
            'flex w-full min-w-0 flex-col overflow-hidden px-4 pt-0 pb-1 sm:px-6 lg:px-0',
            BRAND_EASE,
            dockBrandOnDesktop && 'lg:flex-row lg:items-center lg:gap-4 lg:px-4',
          )}
        >
          <div
            className={cn(
              'flex w-full items-center justify-center px-3 py-2 md:py-3',
              BRAND_EASE,
              dockBrandOnDesktop && 'lg:w-auto lg:shrink-0 lg:justify-start lg:px-0 lg:py-2',
            )}
          >
            {logoHref ? (
              <Link
                to={logoHref}
                className="flex h-full max-w-full items-center no-underline"
                aria-label={title?.trim() || 'JD Gold home'}
              >
                {brand}
              </Link>
            ) : (
              brand
            )}
          </div>
          <GoldLine
            className={cn(
              'transition-opacity',
              BRAND_EASE,
              dockBrandOnDesktop ? 'lg:hidden' : 'opacity-100',
            )}
          />
          <div
            aria-hidden
            className={cn(
              'hidden h-16 w-px shrink-0 bg-gradient-to-b from-[#C09038] via-[#975E00] to-[#C09038]',
              dockBrandOnDesktop && 'lg:block',
            )}
          />
          <GlobalPageBanner
            embedded
            className={cn('min-w-0 w-full', dockBrandOnDesktop && 'lg:flex-1')}
          />
        </div>
      </div>
      <div
        aria-hidden
        className={cn('pointer-events-none w-full shrink-0 transition-[height]', BRAND_EASE)}
        style={{ height: spacerPx }}
      />
    </>
  );
}
