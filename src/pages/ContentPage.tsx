import PageContentError from '@/components/content/PageContentError';
import PageContentLoader from '@/components/content/PageContentLoader';
import { usePageContent } from '@/hooks/usePageContent';
import AboutPageView, { type AboutContent } from '@/pages/AboutPageView';
import LicensesPageView, { type LicensesContent } from '@/pages/LicensesPageView';
import AdvantagesPageView, { type AdvantagesContent } from '@/pages/AdvantagesPageView';
import FactoryRefineryPageView, {
  type FactoryRefineryContent,
} from '@/pages/FactoryRefineryPageView';
import ManagementGalleryPageView, {
  type ManagementGalleryContent,
} from '@/pages/ManagementGalleryPageView';
import SalesPurchasePageView, {
  type SalesPurchaseContent,
} from '@/pages/SalesPurchasePageView';
import ContactUsPageView, {
  type ContactUsContent,
} from '@/pages/ContactUsPageView';

type ContentPageProps = {
  slug: string;
};

export default function ContentPage({ slug }: ContentPageProps) {
  const { page, loading, error, retry } = usePageContent(slug);

  if (loading) {
    return <PageContentLoader />;
  }

  if (error || !page) {
    return (
      <PageContentError
        message={
          error ||
          'This content is currently unavailable.'
        }
        onRetry={retry}
      />
    );
  }

  const layout = page.content?.layout;

  if (layout === 'about') {
    return <AboutPageView content={page.content as AboutContent} />;
  }
  if (layout === 'licenses') {
    return <LicensesPageView content={page.content as LicensesContent} />;
  }
  if (layout === 'advantages') {
    return <AdvantagesPageView content={page.content as AdvantagesContent} />;
  }
  if (layout === 'factory-refinery') {
    return (
      <FactoryRefineryPageView content={page.content as FactoryRefineryContent} />
    );
  }
  if (layout === 'management-gallery') {
    return (
      <ManagementGalleryPageView content={page.content as ManagementGalleryContent} />
    );
  }
  if (layout === 'sales-purchase') {
    return (
      <SalesPurchasePageView content={page.content as SalesPurchaseContent} />
    );
  }
  if (layout === 'contact-us') {
    return <ContactUsPageView content={page.content as ContactUsContent} />;
  }

  return (
    <PageContentError
      message="This page could not be displayed."
      onRetry={retry}
    />
  );
}
