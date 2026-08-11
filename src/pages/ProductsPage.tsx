import { useSiteContent } from '@/hooks/useSiteContent';
import { GoldProductsSectionView } from '@/figma-home/goldProductsSection';
import { IndustriesWeServeSectionView } from '@/figma-home/industriesWeServeSection';
import PageLayout from './PageLayout';

export default function ProductsPage() {
  const content = useSiteContent();
  return (
    <PageLayout
      title="Product & Services"
      intro="Explore our range of gold products and the industries we serve."
    >
      <GoldProductsSectionView content={content?.goldProductsSection} />
      <IndustriesWeServeSectionView content={content?.industriesWeServeSection} />
    </PageLayout>
  );
}
