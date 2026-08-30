import { Link, NavLink } from 'react-router-dom';
import type { ReactNode } from 'react';
import GlobalPageBanner from '@/components/GlobalPageBanner';
import SafeImage from '@/components/SafeImage';
import { NAV_ITEMS } from '@/pages/navItems';

type PageShellProps = {
  children: ReactNode;
  logoSrc?: string;
};

export default function PageShell({ children, logoSrc }: PageShellProps) {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#0a0502] text-white">
      <header className="sticky top-0 z-40 border-b border-[#c09038]/30 bg-[#0a0502]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:gap-4 md:px-6">
          <Link to="/" className="flex shrink-0 items-center gap-3">
            <SafeImage
              src={logoSrc || '/images/jd-gold-logo-nav.png'}
              fallbackSrc="/images/jd-gold-logo-nav.png"
              alt="JD Gold"
              className="h-8 w-auto sm:h-9 md:h-10"
            />
          </Link>
          <nav
            aria-label="Primary"
            className="flex min-w-0 flex-1 flex-wrap items-center justify-end gap-x-3 gap-y-1.5 text-[11px] text-[#c09038] sm:gap-x-4 sm:text-sm md:gap-x-5"
          >
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  [
                    'shrink-0 whitespace-nowrap transition',
                    isActive ? 'text-white' : 'hover:text-white',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <GlobalPageBanner />
      {children}
    </div>
  );
}

export function GoldRule() {
  return (
    <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c09038] to-transparent" />
  );
}

export function SectionTitle({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-['Alice:Regular',Georgia,serif] text-lg tracking-wide text-[#c09038] sm:text-2xl md:text-3xl ${className}`}
    >
      {children}
    </h2>
  );
}
