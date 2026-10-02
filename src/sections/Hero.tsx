import { useMemo } from 'react';
import SiteStickyChrome from '@/components/SiteStickyChrome';
import type { HeroBranding } from '@/hooks/useSiteContent';

function normalizeBranding(
  prop: Partial<HeroBranding> | null | undefined,
): HeroBranding {
  return {
    logoSrc: prop?.logoSrc?.trim() || undefined,
    logoAlt: prop?.logoAlt?.trim() || undefined,
    title: prop?.title?.trim() || undefined,
    subtitle: prop?.subtitle?.trim() || undefined,
  };
}

type HeroProps = {
  branding?: Partial<HeroBranding> | null;
};

const Hero = ({ branding: brandingProp }: HeroProps) => {
  const branding = useMemo(
    () => normalizeBranding(brandingProp),
    [brandingProp],
  );

  return (
    <SiteStickyChrome
      logoSrc={branding.logoSrc}
      logoAlt={branding.logoAlt || branding.title || 'JD Gold'}
      logoHref="/"
    />
  );
};

export default Hero;
