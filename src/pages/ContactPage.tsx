import { useSiteContent } from '@/hooks/useSiteContent';
import { GetInTouchSectionView } from '@/figma-home/getInTouchSection';
import PageLayout from './PageLayout';

export default function ContactPage() {
  const content = useSiteContent();
  return (
    <PageLayout title={content?.getInTouchSection?.heading}>
      <GetInTouchSectionView content={content?.getInTouchSection} />
    </PageLayout>
  );
}
