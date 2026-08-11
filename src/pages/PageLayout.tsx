import type { ReactNode } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_ITEMS } from './navItems';

const LOGO_SRC = '/images/jd-gold-logo.png';

export default function PageLayout({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#010100]">
      <header className="sticky top-0 z-50 border-b-2 border-[#c09038] bg-black/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-[1400px] items-center gap-[16px] px-[20px] py-[12px]">
          <Link to="/" className="flex shrink-0 items-center no-underline" aria-label="JD Gold home">
            <img src={LOGO_SRC} alt="JD Gold" className="h-[44px] w-auto" />
          </Link>
          <nav
            aria-label="Primary"
            className="flex flex-1 items-center gap-[8px] overflow-x-auto"
          >
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }: { isActive: boolean }) =>
                  [
                    "whitespace-nowrap rounded-[10px] px-[12px] py-[6px] font-['Alice:Regular',sans-serif] text-[18px] no-underline transition-colors",
                    isActive
                      ? 'bg-[#c09038] text-[#010100]'
                      : 'text-[#c09038] hover:bg-[#c09038]/15',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto w-full max-w-[1400px] px-[20px] pt-[32px]">
          <h1 className="font-['Alice:Regular',sans-serif] text-[40px] leading-tight text-[#c09038]">
            {title}
          </h1>
          {intro ? (
            <p className="mt-[8px] max-w-[720px] font-['Alice:Regular',sans-serif] text-[18px] text-white/70">
              {intro}
            </p>
          ) : null}
        </div>
        <div className="mt-[16px] flex flex-col gap-[24px]">{children}</div>
      </main>

      <footer className="mt-[24px] border-t-2 border-[#c09038] bg-[#100b02]">
        <div className="flex flex-col items-center py-[20px]">
          <p className="font-['Alice:Regular',sans-serif] text-[18px] text-[#c09038]">
            © 2026 JD Gold. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
