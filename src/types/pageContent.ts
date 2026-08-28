import type { AboutContent } from '@/pages/AboutPageView';
import type { LicensesContent } from '@/pages/LicensesPageView';
import type { AdvantagesContent } from '@/pages/AdvantagesPageView';

export type PageContentPayload = AboutContent | LicensesContent | AdvantagesContent;

/** Normalized document returned by usePageContent after CMS mapping. */
export type PageDocument = {
  slug: string;
  title: string;
  pageType?: string;
  content: PageContentPayload;
};
