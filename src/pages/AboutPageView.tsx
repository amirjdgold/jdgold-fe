import PageShell from '@/components/PageShell';
import ScaledCanvas from '@/components/ScaledCanvas';
import AboutHero from '@/components/about/AboutHero';
import AboutPillars from '@/components/about/AboutPillars';
import AboutLeadership from '@/components/about/AboutLeadership';
import AboutJewelleryDepartment from '@/components/about/AboutJewelleryDepartment';
import AboutJewelleryCollection from '@/components/about/AboutJewelleryCollection';
import AboutCommitment from '@/components/about/AboutCommitment';
import AboutContactBar from '@/components/about/AboutContactBar';

export type AboutContent = {
  layout: 'about';
  brandTagline?: string;
  logoSrc?: string;
  heroImage?: string;
  heroImageAlt?: string;
  aboutHeading?: string;
  aboutBody?: string;
  aboutBodySecondary?: string;
  pillars?: { title: string; description: string; icon?: string }[];
  leadershipHeading?: string;
  leaders?: {
    title: string;
    name: string;
    experience: string;
    image: string;
    imageAlt?: string;
  }[];
  jewelleryDeptHeading?: string;
  jewelleryDeptManagedBy?: string;
  jewelleryDeptBody?: string;
  jewelleryDeptImages?: { src: string; alt?: string }[];
  collectionHeading?: string;
  collectionImages?: { src: string; alt?: string }[];
  commitmentHeading?: string;
  commitmentBody?: string;
  commitments?: { title: string; description?: string; icon?: string }[];
  contact?: {
    phone?: string;
    whatsapp?: string;
    email?: string;
    website?: string;
    address?: string;
  };
  footerImage?: string;
};

export default function AboutPageView({ content }: { content: AboutContent }) {
  return (
    <PageShell logoSrc={content.logoSrc}>
      <ScaledCanvas>
        <AboutHero
          logoSrc={content.logoSrc}
          brandTagline={content.brandTagline}
          aboutHeading={content.aboutHeading}
          aboutBody={content.aboutBody}
          aboutBodySecondary={content.aboutBodySecondary}
          heroImage={content.heroImage}
          heroImageAlt={content.heroImageAlt}
        />

        <AboutPillars pillars={content.pillars || []} />

        <AboutLeadership
          heading={content.leadershipHeading}
          leaders={content.leaders || []}
        />

        <AboutJewelleryDepartment
          heading={content.jewelleryDeptHeading}
          managedBy={content.jewelleryDeptManagedBy}
          body={content.jewelleryDeptBody}
          images={content.jewelleryDeptImages || []}
        />

        <AboutJewelleryCollection
          heading={content.collectionHeading}
          images={content.collectionImages || []}
        />

        <AboutCommitment
          heading={content.commitmentHeading}
          body={content.commitmentBody}
          commitments={content.commitments || []}
          footerImage={content.footerImage}
        />

        <AboutContactBar contact={content.contact} />

        <footer className="border-t border-[#c09038]/30 bg-[#100b02]">
          <div className="mx-auto flex w-full flex-col items-center px-6 py-5">
            <p className="font-['Alice:Regular',Georgia,serif] text-sm text-[#c09038]">
              © {new Date().getFullYear()} JD Gold. All Rights Reserved.
            </p>
          </div>
        </footer>
      </ScaledCanvas>
    </PageShell>
  );
}
