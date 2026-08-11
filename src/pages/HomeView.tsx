import { useSiteContent } from '@/hooks/useSiteContent';
import Hero from '@/sections/Hero';
import FigmaHome from '@/sections/FigmaHome';

export default function HomeView() {
  const siteContent = useSiteContent();

  return (
    <>
      <Hero
        slides={siteContent?.hero?.slides}
        branding={siteContent?.hero?.branding}
      />
      <FigmaHome
        teamMembers={siteContent?.teamManagement?.members}
        homeRightGallery={siteContent?.homeRightGallery}
        whyChooseSection={siteContent?.whyChooseSection}
        buildingTrustSection={siteContent?.buildingTrustSection}
        goldProductsSection={siteContent?.goldProductsSection}
        goldRefiningProcessSection={siteContent?.goldRefiningProcessSection}
        refiningGallerySection={siteContent?.refiningGallerySection}
        industriesWeServeSection={siteContent?.industriesWeServeSection}
        miningExtractionSection={siteContent?.miningExtractionSection}
        globalShippingSection={siteContent?.globalShippingSection}
        getInTouchSection={siteContent?.getInTouchSection}
      />
    </>
  );
}
