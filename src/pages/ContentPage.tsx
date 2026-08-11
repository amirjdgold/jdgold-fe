import { Link } from 'react-router-dom';
import { usePageContent } from '@/hooks/usePageContent';
import AboutPageView, { type AboutContent } from '@/pages/AboutPageView';
import LicensesPageView, { type LicensesContent } from '@/pages/LicensesPageView';
import AdvantagesPageView, { type AdvantagesContent } from '@/pages/AdvantagesPageView';

type ContentPageProps = {
  slug: string;
};

export default function ContentPage({ slug }: ContentPageProps) {
  const { page, loading, error } = usePageContent(slug);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0a0502] text-[#c09038]">
        Loading…
      </div>
    );
  }

  if (error || !page) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#0a0502] text-white">
        <p className="text-[#c09038]">{error || 'Page not found'}</p>
        <Link to="/" className="text-sm underline">
          Back to Home
        </Link>
      </div>
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

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#0a0502] text-white">
      <p className="text-[#c09038]">Unknown page layout</p>
      <Link to="/" className="text-sm underline">
        Back to Home
      </Link>
    </div>
  );
}
