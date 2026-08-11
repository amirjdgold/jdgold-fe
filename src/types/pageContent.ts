import type { AboutContent } from '@/pages/AboutPageView';
import type { LicensesContent } from '@/pages/LicensesPageView';
import type { AdvantagesContent } from '@/pages/AdvantagesPageView';

export type PageContentPayload = AboutContent | LicensesContent | AdvantagesContent;

export type PageDocument = {
  slug: string;
  title: string;
  content: PageContentPayload;
};
