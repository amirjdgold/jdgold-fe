import { type ReactNode } from 'react';
import SiteStickyChrome from '@/components/SiteStickyChrome';
import { useSiteContent } from '@/hooks/useSiteContent';
import { cn } from '@/lib/utils';

type PageShellProps = {
  children: ReactNode;
  logoSrc?: string;
};

export default function PageShell({ children, logoSrc }: PageShellProps) {
  const siteContent = useSiteContent();
  const branding = siteContent?.hero?.branding;
  const headerLogoSrc = branding?.logoSrc?.trim() || logoSrc;

  return (
    <div className="gold-void min-h-screen overflow-x-clip text-white">
      <SiteStickyChrome
        logoSrc={headerLogoSrc}
        logoAlt={branding?.logoAlt || branding?.title || 'JD Gold'}
        title={branding?.title}
        subtitle={branding?.subtitle}
        logoHref="/"
      />
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
      className={cn(
        "gradient-text-gold font-['Alice:Regular',Georgia,serif] text-3xl tracking-wide text-[#c09038]",
        className,
      )}
    >
      {children}
    </h2>
  );
}
