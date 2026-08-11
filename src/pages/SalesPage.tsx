import { useSiteContent } from '@/hooks/useSiteContent';
import { GlobalShippingSectionView } from '@/figma-home/globalShippingSection';
import { GetInTouchSectionView } from '@/figma-home/getInTouchSection';
import PageLayout from './PageLayout';

export default function SalesPage() {
  const content = useSiteContent();
  return (
    <PageLayout
      title="Sales & Purchase"
      intro="How we handle global sales, purchase, and secure shipping."
    >
      <GlobalShippingSectionView content={content?.globalShippingSection} />
      <GetInTouchSectionView content={content?.getInTouchSection} />
    </PageLayout>
  );
}
