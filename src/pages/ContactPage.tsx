import { useSiteContent } from '@/hooks/useSiteContent';
import { GetInTouchSectionView } from '@/figma-home/getInTouchSection';
import PageLayout from './PageLayout';

export default function ContactPage() {
  const content = useSiteContent();
  return (
    <PageLayout title="Contact Us" intro="Get in touch with the JD Gold team.">
      <GetInTouchSectionView content={content?.getInTouchSection} />
    </PageLayout>
  );
}
