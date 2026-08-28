import type { AboutContent } from '@/pages/AboutPageView';
import type { AdvantagesContent, AdvantageBlock } from '@/pages/AdvantagesPageView';
import type {
  LicenseDetail,
  LicenseOffice,
  LicensesContent,
} from '@/pages/LicensesPageView';
import type { PageContentPayload, PageDocument } from '@/types/pageContent';

/** Raw Mongo / API page document (Phase 4+). */
export type ApiPageDocument = {
  slug: string;
  title: string;
  pageType?: string;
  content?: PageContentPayload;
  hero?: {
    heading?: string;
    subheading?: string;
    description?: string;
    image?: string;
    imageAlt?: string;
    backgroundImage?: string;
    logoSrc?: string;
    brandTagline?: string;
  };
  sections?: ApiSection[];
};

type ApiSection = {
  key?: string;
  type?: string;
  heading?: string;
  subheading?: string;
  description?: string;
  image?: string;
  sortOrder?: number;
  features?: { title: string; description?: string; icon?: string; image?: string }[];
  offices?: LicenseOffice[];
  gallery?: { url: string; alt?: string; caption?: string }[];
  leadership?: {
    title: string;
    name: string;
    experience?: string;
    image?: string;
    imageAlt?: string;
  }[];
  marketAdvantages?: AdvantageBlock[];
  achievements?: {
    title: string;
    description?: string;
    points?: string[];
    image: string;
    imageAlt?: string;
  }[];
  cards?: {
    title: string;
    subtitle?: string;
    description?: string;
    image?: string;
    imageAlt?: string;
    icon?: string;
    points?: string[];
  }[];
};

function sortedSections(sections: ApiSection[] | undefined): ApiSection[] {
  if (!sections?.length) return [];
  return [...sections].sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
}

function sectionByType(sections: ApiSection[], type: string): ApiSection | undefined {
  return sections.find((s) => s.type === type);
}

function sectionByKey(sections: ApiSection[], key: string): ApiSection | undefined {
  return sections.find((s) => s.key === key);
}

function mapLicensesContent(doc: ApiPageDocument): LicensesContent {
  const sections = sortedSections(doc.sections);
  const officesSection =
    sectionByType(sections, 'offices') || sectionByKey(sections, 'offices');
  const footerSection =
    sectionByKey(sections, 'footer-points') ||
    sections.find((s) => s.type === 'features' && s.key !== 'pillars');

  const offices: LicenseOffice[] = (officesSection?.offices || []).map((office, index) => ({
    number: office.number ?? index + 1,
    country: office.country,
    flagSrc: office.flagSrc || undefined,
    details: (office.details as LicenseDetail[] | undefined) || undefined,
    officeLocation: office.officeLocation || undefined,
    licenseImage: office.licenseImage,
    licenseImageAlt: office.licenseImageAlt || undefined,
    officeImage: office.officeImage,
    officeImageAlt: office.officeImageAlt || undefined,
  }));

  return {
    layout: 'licenses',
    logoSrc: doc.hero?.logoSrc || undefined,
    heading: doc.hero?.heading || officesSection?.heading || undefined,
    subtitle: doc.hero?.subheading || officesSection?.subheading || undefined,
    heroImage: doc.hero?.image || undefined,
    heroImageAlt: doc.hero?.imageAlt || undefined,
    offices,
    footerPoints: (footerSection?.features || []).map((f) => ({
      title: f.title,
      description: f.description || '',
      icon: f.icon || undefined,
    })),
  };
}

function mapAboutContent(doc: ApiPageDocument): AboutContent {
  const sections = sortedSections(doc.sections);
  const intro = sectionByKey(sections, 'about-intro') || sectionByType(sections, 'text');
  const pillars = sectionByKey(sections, 'pillars');
  const leadership = sectionByKey(sections, 'leadership') || sectionByType(sections, 'leadership');
  const jewellery =
    sectionByKey(sections, 'jewellery-department') || sectionByKey(sections, 'jewelry-department');
  const collection =
    sectionByKey(sections, 'jewellery-collection') || sectionByKey(sections, 'jewelry-collection');
  const commitment =
    sectionByKey(sections, 'commitment') || sectionByKey(sections, 'our-commitment');
  const contact = sectionByKey(sections, 'contact');
  const contactCards = contact?.cards || [];

  return {
    layout: 'about',
    brandTagline: doc.hero?.brandTagline || doc.hero?.subheading || undefined,
    logoSrc: doc.hero?.logoSrc || undefined,
    heroImage: doc.hero?.image || undefined,
    heroImageAlt: doc.hero?.imageAlt || undefined,
    heroBackgroundImage: doc.hero?.backgroundImage || undefined,
    aboutHeading: intro?.heading || doc.hero?.heading || undefined,
    aboutBody: intro?.description || doc.hero?.description || undefined,
    aboutBodySecondary: intro?.subheading || undefined,
    pillars: pillars?.features?.map((f) => ({
      title: f.title,
      description: f.description || '',
      icon: f.icon || undefined,
    })),
    leadershipHeading: leadership?.heading || undefined,
    leaders: leadership?.leadership?.map((l) => ({
      title: l.title,
      name: l.name,
      experience: l.experience || '',
      image: l.image || '',
      imageAlt: l.imageAlt || undefined,
    })),
    jewelleryDeptHeading: jewellery?.heading || undefined,
    jewelleryDeptManagedBy: jewellery?.subheading || undefined,
    jewelleryDeptBody: jewellery?.description || undefined,
    jewelleryDeptImages: jewellery?.gallery?.map((g) => ({
      src: g.url,
      alt: g.alt || undefined,
    })),
    collectionHeading: collection?.heading || undefined,
    collectionImages: collection?.gallery?.map((g) => ({
      src: g.url,
      alt: g.alt || undefined,
    })),
    commitmentHeading: commitment?.heading || undefined,
    commitmentBody: commitment?.description || undefined,
    commitments: commitment?.features?.map((f) => ({
      title: f.title,
      description: f.description || undefined,
      icon: f.icon || undefined,
    })),
    contact: contact
      ? {
          phone: contactCards.find((c) => /phone/i.test(c.title))?.description,
          email: contactCards.find((c) => /email/i.test(c.title))?.description,
          website: contactCards.find((c) => /web/i.test(c.title))?.description,
          address: contactCards.find((c) => /address|location/i.test(c.title))?.description,
        }
      : undefined,
    footerImage: commitment?.image || collection?.image || undefined,
  };
}

function mapAdvantagesContent(doc: ApiPageDocument): AdvantagesContent {
  const sections = sortedSections(doc.sections);
  const market =
    sectionByType(sections, 'market-advantages') ||
    sectionByKey(sections, 'market-advantages');
  const achievements =
    sectionByType(sections, 'achievements') || sectionByKey(sections, 'achievements');
  const mottos =
    sectionByKey(sections, 'footer-mottos') ||
    sections.find((s) => s.type === 'features' && /motto|powered/i.test(s.heading || ''));

  return {
    layout: 'advantages',
    logoSrc: doc.hero?.logoSrc || undefined,
    heading: doc.hero?.heading || undefined,
    subtitle: doc.hero?.subheading || undefined,
    heroImage: doc.hero?.image || undefined,
    heroImageAlt: doc.hero?.imageAlt || undefined,
    blocks: (market?.marketAdvantages || []).map((b) => ({
      number: b.number || '',
      title: b.title,
      subtitle: b.subtitle,
      image: b.image || '',
      imageAlt: b.imageAlt,
      imageFirst: b.imageFirst,
      imageObjectPosition: b.imageObjectPosition,
      imageFit: b.imageFit,
      imageZoom: b.imageZoom,
      points: b.points,
      sideItems: (b.sideItems || []).map((s) => ({
        title: s.title,
        icon: s.icon,
      })),
    })),
    achievementsHeading: achievements?.heading || undefined,
    achievements: (achievements?.achievements || []).map((a) => ({
      title: a.title,
      description: a.description,
      points: a.points,
      image: a.image || '',
      imageAlt: a.imageAlt,
    })),
    footerMottos: mottos?.features?.map((f) => ({
      title: f.title,
      subtitle: f.description || '',
      icon: f.icon || undefined,
    })),
    // Seed: subheading under logo; heading as closing brand line
    footerLogoTagline: mottos?.subheading || undefined,
    closingLine: mottos?.heading || undefined,
  };
}

/**
 * Normalize API page payloads into the view-layer `content.layout` shape.
 * Passes through documents that already include `content.layout`.
 */
export function mapApiPageToDocument(raw: ApiPageDocument): PageDocument {
  if (raw.content?.layout) {
    return {
      slug: raw.slug,
      title: raw.title,
      content: raw.content,
    };
  }

  const pageType = raw.pageType || '';
  let content: PageContentPayload;

  if (pageType === 'license-offices' || raw.sections?.some((s) => s.type === 'offices')) {
    content = mapLicensesContent(raw);
  } else if (pageType === 'about') {
    content = mapAboutContent(raw);
  } else if (
    pageType === 'market-advantages' ||
    raw.sections?.some((s) => s.type === 'market-advantages')
  ) {
    content = mapAdvantagesContent(raw);
  } else {
    // Unknown CMS shape — ContentPage will show "Unknown page layout"
    content = { layout: 'unknown' } as unknown as PageContentPayload;
  }

  return {
    slug: raw.slug,
    title: raw.title,
    content,
  };
}
