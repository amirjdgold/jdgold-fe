import { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import HomePage from '@/figma-home/HomePage';
import type {
  BuildingTrustSection,
  GoldProductsSection,
  GoldRefiningProcessSection,
  HomeRightGallery,
  IndustriesWeServeSection,
  GetInTouchSection,
  GlobalShippingSection,
  MiningExtractionSection,
  RefiningGallerySection,
  TeamMember,
  WhyChooseSection,
} from '@/hooks/useSiteContent';
import '@/figma-home/figma-home.css';

const DESIGN_WIDTH = 1512;

type FigmaHomeProps = {
  teamMembers?: TeamMember[];
  homeRightGallery?: HomeRightGallery | null;
  whyChooseSection?: WhyChooseSection | null;
  buildingTrustSection?: BuildingTrustSection | null;
  goldProductsSection?: GoldProductsSection | null;
  goldRefiningProcessSection?: GoldRefiningProcessSection | null;
  refiningGallerySection?: RefiningGallerySection | null;
  industriesWeServeSection?: IndustriesWeServeSection | null;
  miningExtractionSection?: MiningExtractionSection | null;
  globalShippingSection?: GlobalShippingSection | null;
  getInTouchSection?: GetInTouchSection | null;
};

export default function FigmaHome({
  teamMembers,
  homeRightGallery,
  whyChooseSection,
  buildingTrustSection,
  goldProductsSection,
  goldRefiningProcessSection,
  refiningGallerySection,
  industriesWeServeSection,
  miningExtractionSection,
  globalShippingSection,
  getInTouchSection,
}: FigmaHomeProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;

    canvas.style.width = `${DESIGN_WIDTH}px`;
    canvas.style.minWidth = `${DESIGN_WIDTH}px`;
    canvas.style.maxWidth = 'none';

    const applyScale = () => {
      const available = host.clientWidth || window.innerWidth;
      const scale = Math.min(1, available / DESIGN_WIDTH);
      canvas.style.width = `${DESIGN_WIDTH}px`;
      canvas.style.minWidth = `${DESIGN_WIDTH}px`;
      canvas.style.maxWidth = 'none';
      canvas.style.transformOrigin = 'top left';
      canvas.style.transform = `scale(${scale})`;
      const scaledWidth = DESIGN_WIDTH * scale;
      const marginX = Math.max(0, (available - scaledWidth) / 2);
      canvas.style.marginLeft = `${marginX}px`;
      canvas.style.marginRight = `${marginX}px`;
      host.style.overflow = 'hidden';
      host.style.height = `${canvas.scrollHeight * scale}px`;
    };

    applyScale();
    // Remeasure after layout settles (panel swaps / images).
    const raf1 = requestAnimationFrame(() => {
      applyScale();
      requestAnimationFrame(applyScale);
    });

    const ro = new ResizeObserver(applyScale);
    ro.observe(host);
    ro.observe(canvas);

    const onLoad = () => applyScale();
    window.addEventListener('load', onLoad);
    window.addEventListener('resize', applyScale);
    canvas.querySelectorAll('img').forEach((img) => {
      if (!img.complete) img.addEventListener('load', applyScale, { once: true });
    });

    return () => {
      cancelAnimationFrame(raf1);
      ro.disconnect();
      window.removeEventListener('load', onLoad);
      window.removeEventListener('resize', applyScale);
    };
  }, [pathname]);

  return (
    <div ref={hostRef} className="figma-home-root w-full bg-[#010100]">
      <div ref={canvasRef} className="figma-home-canvas" style={{ width: DESIGN_WIDTH }}>
        <HomePage
          teamMembers={teamMembers}
          homeRightGallery={homeRightGallery}
          whyChooseSection={whyChooseSection}
          buildingTrustSection={buildingTrustSection}
          goldProductsSection={goldProductsSection}
          goldRefiningProcessSection={goldRefiningProcessSection}
          refiningGallerySection={refiningGallerySection}
          industriesWeServeSection={industriesWeServeSection}
          miningExtractionSection={miningExtractionSection}
          globalShippingSection={globalShippingSection}
          getInTouchSection={getInTouchSection}
        />
      </div>
    </div>
  );
}
