import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

type PageShellProps = {
  children: ReactNode;
  logoSrc?: string;
};

export default function PageShell({ children, logoSrc }: PageShellProps) {
  return (
    <div className="min-h-screen bg-[#0a0502] text-white">
      <header className="sticky top-0 z-40 border-b border-[#c09038]/30 bg-[#0a0502]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoSrc || '/images/jd-gold-logo-nav.png'}
              alt="JD Gold"
              className="h-9 w-auto md:h-10"
            />
          </Link>
          <nav className="hidden items-center gap-5 text-sm text-[#c09038] sm:flex">
            <Link className="hover:text-white" to="/about">
              About
            </Link>
            <Link className="hover:text-white" to="/license-and-offices">
              License & Offices
            </Link>
            <Link className="hover:text-white" to="/factories-and-refinery">
              Advantages
            </Link>
          </nav>
          <Link
            to="/"
            className="rounded border border-[#c09038]/50 px-3 py-1.5 text-xs text-[#c09038] transition hover:bg-[#c09038]/10 md:text-sm"
          >
            ← Home
          </Link>
        </div>
      </header>
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
      className={`font-['Alice:Regular',Georgia,serif] text-2xl tracking-wide text-[#c09038] md:text-3xl ${className}`}
    >
      {children}
    </h2>
  );
}
