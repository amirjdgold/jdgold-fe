import { useEffect, useState } from 'react';
import { apiFetch, rewriteUploadUrls } from '@/lib/api';

export type HeroSlide =
  | { type: 'video'; src: string }
  | {
      type: 'image';
      src: string;
      alt: string;
      /** Desktop side strip */
      thumbSrc?: string;
      /** Mobile side strip (< Tailwind `sm`) */
      thumbSrcSm?: string;
      /** Mobile center hero (< `sm`) */
      srcSm?: string;
    };

export type HeroBranding = {
  logoSrc: string;
  logoAlt?: string;
  title: string;
  subtitle: string;
};

export type TeamMember = {
  id: string;
  name: string;
  designation: string;
  image: string;
  imageAlt?: string;
};

export type HomeGallerySlot = {
  image: string;
  alt?: string;
};

export type HomeGallerySection = {
  title: string;
  slots: HomeGallerySlot[];
};

export type HomeRightGallery = {
  staff: HomeGallerySection;
  refinery: HomeGallerySection;
  licenseOffice: HomeGallerySection;
  jewelryFactory: HomeGallerySection;
  products: HomeGallerySection;
};

export type WhyChooseFeature = {
  title: string;
  description: string;
};

export type WhyChooseStat = {
  value: string;
  label: string;
  labelLine2?: string;
};

export type WhyChooseTextBlock = {
  title: string;
  body: string;
};

export type WhyChooseSection = {
  heading: string;
  features: WhyChooseFeature[];
  stats: WhyChooseStat[];
  mission: WhyChooseTextBlock;
  missionImage: string;
  missionImageAlt?: string;
  vision: WhyChooseTextBlock;
  visionIcon: string;
  visionIconAlt?: string;
};

export type BuildingTrustSlot = {
  image: string;
  alt?: string;
};

export type BuildingTrustSection = {
  heading: string;
  slots: BuildingTrustSlot[];
};

export type GoldProductItem = {
  label: string;
  image: string;
  imageAlt?: string;
};

export type GoldProductsSection = {
  heading: string;
  products: GoldProductItem[];
};

export type RefiningProcessStep = {
  step: string;
  title: string;
  image: string;
  imageAlt?: string;
};

export type GoldRefiningProcessSection = {
  heading: string;
  steps: RefiningProcessStep[];
};

export type RefiningGallerySlot = {
  image: string;
  alt?: string;
};

export type RefiningGallerySection = {
  slots: RefiningGallerySlot[];
};

export type IndustryItem = {
  label: string;
};

export type IndustriesWeServeSection = {
  heading: string;
  leftImage: string;
  leftImageAlt?: string;
  rightImage: string;
  rightImageAlt?: string;
  industries: IndustryItem[];
};

export type MiningExtractionSlot = {
  image: string;
  alt?: string;
};

export type MiningExtractionSection = {
  heading: string;
  slots: MiningExtractionSlot[];
};

export type GlobalShippingFeature = {
  title: string;
  description: string;
};

export type GlobalShippingSection = {
  heading: string;
  features: GlobalShippingFeature[];
};

export type GetInTouchImageSlot = {
  image: string;
  alt?: string;
};

export type GetInTouchSection = {
  heading: string;
  topImages: GetInTouchImageSlot[];
  leftImage: string;
  leftImageAlt?: string;
  rightImage: string;
  rightImageAlt?: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
};

export type SiteContent = {
  version?: number;
  hero?: {
    slides: HeroSlide[];
    branding?: Partial<HeroBranding>;
  };
  teamManagement?: {
    members: TeamMember[];
  };
  homeRightGallery?: HomeRightGallery;
  whyChooseSection?: WhyChooseSection;
  buildingTrustSection?: BuildingTrustSection;
  goldProductsSection?: GoldProductsSection;
  goldRefiningProcessSection?: GoldRefiningProcessSection;
  refiningGallerySection?: RefiningGallerySection;
  industriesWeServeSection?: IndustriesWeServeSection;
  miningExtractionSection?: MiningExtractionSection;
  globalShippingSection?: GlobalShippingSection;
  getInTouchSection?: GetInTouchSection;
};

export function useSiteContent() {
  const [content, setContent] = useState<SiteContent | null>(null);

  useEffect(() => {
    let cancelled = false;
    apiFetch('/api/content')
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((data: SiteContent) => {
        if (!cancelled) setContent(rewriteUploadUrls(data));
      })
      .catch(() => {
        if (!cancelled) setContent(null);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return content;
}
