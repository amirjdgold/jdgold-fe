import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import GlobalPageBanner from '@/components/GlobalPageBanner';
import SafeImage from '@/components/SafeImage';
import { cn } from '@/lib/utils';

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
  logoHref?: string;
};

/** Shared home header: centered logo, gold rule, and gallery banner. */
export default function SiteStickyChrome({
  logoSrc,
  logoAlt = 'JD Gold',
  logoHref,
}: SiteStickyChromeProps) {
  const fixedTopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = fixedTopRef.current;
    if (!el) return;

    const update = () => {
      const h = Math.ceil(el.getBoundingClientRect().height);
      document.documentElement.style.setProperty('--home-sticky-h', `${h}px`);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    window.addEventListener('resize', update);
    window.addEventListener('orientationchange', update);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', update);
      window.removeEventListener('orientationchange', update);
      document.documentElement.style.removeProperty('--home-sticky-h');
    };
  }, []);

  const logo = (
    <SafeImage
      src={logoSrc}
      alt={logoAlt}
      className="mx-auto h-full w-auto max-w-[260px] object-contain object-center"
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
        <div className="container-custom min-w-0 overflow-hidden pt-0 pb-1">
          <div className="flex h-12 w-full items-center justify-center px-3 py-0.5">
            {logoHref ? (
              <Link
                to={logoHref}
                className="flex h-full items-center"
                aria-label="JD Gold home"
              >
                {logo}
              </Link>
            ) : (
              logo
            )}
          </div>
          <GoldLine />
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
}
