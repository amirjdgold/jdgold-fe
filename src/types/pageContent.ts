import type { AboutContent } from '@/pages/AboutPageView';
import type { LicensesContent } from '@/pages/LicensesPageView';
import type { AdvantagesContent } from '@/pages/AdvantagesPageView';
import type { FactoryRefineryContent } from '@/pages/FactoryRefineryPageView';
import type { ManagementGalleryContent } from '@/pages/ManagementGalleryPageView';
import type { SalesPurchaseContent } from '@/pages/SalesPurchasePageView';
import type { ContactUsContent } from '@/pages/ContactUsPageView';

export type PageContentPayload =
  | AboutContent
  | LicensesContent
  | AdvantagesContent
  | FactoryRefineryContent
  | ManagementGalleryContent
  | SalesPurchaseContent
  | ContactUsContent;

/** Normalized document returned by usePageContent after CMS mapping. */
export type PageDocument = {
  slug: string;
  title: string;
  pageType?: string;
  content: PageContentPayload;
};
