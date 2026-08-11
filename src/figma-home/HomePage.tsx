import { Link, useLocation } from 'react-router-dom';
import { useEffect, useId, type ReactNode } from 'react';
import { NAV_ITEMS } from '@/pages/navItems';
import { AboutSection } from '@/pages/AboutPage';
import { FactorySection } from '@/pages/FactoryPage';
import { LicenseSection } from '@/pages/LicensePage';
import svgPaths from './svg-paths';
import type {
  BuildingTrustSection,
  GoldProductsSection,
  GoldRefiningProcessSection,
  HomeRightGallery,
  IndustriesWeServeSection,
  GetInTouchSection,
  GlobalShippingSection,
  MiningExtractionSection,
  RefiningGallerySection,
  TeamMember,
  WhyChooseSection,
} from '@/hooks/useSiteContent';
import { BuildingTrustGoldSection } from './buildingTrustSection';
import { GoldProductsSectionView } from './goldProductsSection';
import { GoldRefiningProcessSectionView } from './goldRefiningProcessSection';
import { HomeRightGalleryColumn } from './homeRightGallery';
import { RefiningGallerySectionView } from './refiningGallerySection';
import { IndustriesWeServeSectionView } from './industriesWeServeSection';
import { MiningExtractionSectionView } from './miningExtractionSection';
import { GlobalShippingSectionView } from './globalShippingSection';
import { GetInTouchSectionView } from './getInTouchSection';
import { WhyChooseBrandsSection } from './whyChooseSection';
import { resolveTeamMembers, TeamMemberColumn } from './teamManagement';












function Frame9({ members }: { members: TeamMember[] }) {
  return <TeamMemberColumn members={members} />;
}

function DashboardSquare() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="dashboard-square-02">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="dashboard-square-02">
          <path d={svgPaths.p25e57400} id="Vector" stroke="var(--stroke-0, #C09038)" strokeLinejoin="round" strokeWidth="2.75" />
          <path d={svgPaths.p4bb1c71} id="Vector_2" stroke="var(--stroke-0, #C09038)" strokeLinejoin="round" strokeWidth="2.75" />
          <path d={svgPaths.p1d2bca00} id="Vector_3" stroke="var(--stroke-0, #C09038)" strokeLinejoin="round" strokeWidth="2.75" />
          <path d={svgPaths.p11af6200} id="Vector_4" stroke="var(--stroke-0, #C09038)" strokeLinejoin="round" strokeWidth="2.75" />
        </g>
      </svg>
    </div>
  );
}

function SideNavDivider() {
  const uid = useId().replace(/:/g, '');
  const g1 = `nv-${uid}-1`;
  const g2 = `nv-${uid}-2`;
  return (
    <div className="relative my-[10px] flex w-full shrink-0 content-stretch items-center justify-center gap-[8px]">
      <div className="relative h-0 min-w-px flex-[1_0_0]">
        <div className="absolute inset-[-5.77px_-1.7%_-5.77px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344.773 11.547">
            <path d={svgPaths.p3af20d00} fill={`url(#${g1})`} />
            <defs>
              <linearGradient id={g1} gradientUnits="userSpaceOnUse" x1="0" x2="339" y1="6.7735" y2="6.7735">
                <stop stopColor="#C09038" />
                <stop offset="0.5" stopColor="#975E00" />
                <stop offset="1" stopColor="#C09038" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="relative h-0 min-w-px flex-[1_0_0]">
        <div className="absolute inset-[-5.77px_0_-5.77px_-1.7%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344.773 11.547">
            <path d={svgPaths.p1cb0fd00} fill={`url(#${g2})`} />
            <defs>
              <linearGradient id={g2} gradientUnits="userSpaceOnUse" x1="5.7735" x2="344.774" y1="7.2735" y2="7.2735">
                <stop stopColor="#C09038" />
                <stop offset="0.5" stopColor="#975E00" />
                <stop offset="1" stopColor="#C09038" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function SideNavItem({
  to,
  label,
  icon,
}: {
  to: string;
  label: string;
  icon: ReactNode;
}) {
  const { pathname } = useLocation();
  const active = pathname === to;
  return (
    <Link
      to={to}
      className={[
        'content-stretch relative flex shrink-0 flex-col items-center gap-[6px] no-underline transition-opacity',
        active ? 'opacity-100' : 'opacity-80 hover:opacity-100',
      ].join(' ')}
      aria-current={active ? 'page' : undefined}
    >
      <span className="mb-[8px] flex shrink-0">{icon}</span>
      <SideNavDivider />
      <span
        className={[
          "relative shrink-0 whitespace-nowrap text-center font-['Alice:Regular',sans-serif] text-[30px] leading-[normal] not-italic text-[#c09038]",
          active ? 'underline decoration-[#c09038] underline-offset-4' : '',
        ].join(' ')}
      >
        {label}
      </span>
    </Link>
  );
}

function Copy() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="copy-01">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="copy-01">
          <path d={svgPaths.p1991c400} id="Vector" stroke="var(--stroke-0, #C09038)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.75" />
          <path d={svgPaths.pa1ed300} id="Vector_2" stroke="var(--stroke-0, #C09038)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.75" />
        </g>
      </svg>
    </div>
  );
}

function Image() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="image-01">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="image-01">
          <path d={svgPaths.pb9df880} id="Vector" stroke="var(--stroke-0, #C09038)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.75" />
          <path d={svgPaths.p6509a00} id="Vector_2" stroke="var(--stroke-0, #C09038)" strokeWidth="2.75" />
          <path d={svgPaths.p2aa03840} id="Vector_3" stroke="var(--stroke-0, #C09038)" strokeWidth="2.75" />
        </g>
      </svg>
    </div>
  );
}

function Factory() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="factory-02">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="factory-02">
          <path d={svgPaths.p1e9290f0} id="Vector" stroke="var(--stroke-0, #C09038)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.75" />
          <path d={svgPaths.p775d200} id="Vector_2" stroke="var(--stroke-0, #C09038)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.75" />
          <path d="M7.33333 11H14.6667" id="Vector_3" stroke="var(--stroke-0, #C09038)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.75" />
          <path d="M22 27.5H25.6667" id="Vector_4" stroke="var(--stroke-0, #C09038)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.75" />
          <path d="M31.1667 27.5H34.8333" id="Vector_5" stroke="var(--stroke-0, #C09038)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.75" />
        </g>
      </svg>
    </div>
  );
}

function Office() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="office">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="office">
          <path d={svgPaths.p1c659480} id="Vector" stroke="var(--stroke-0, #C09038)" strokeLinecap="round" strokeWidth="2.75" />
          <path d={svgPaths.p2ed0f680} id="Vector_2" stroke="var(--stroke-0, #C09038)" strokeLinecap="round" strokeWidth="2.75" />
          <path d={svgPaths.p301f3d80} id="Vector_3" stroke="var(--stroke-0, #C09038)" strokeLinecap="round" strokeWidth="2.75" />
          <path d={svgPaths.p1411ec00} id="Vector_4" stroke="var(--stroke-0, #C09038)" strokeLinecap="round" strokeWidth="2.75" />
        </g>
      </svg>
    </div>
  );
}

function SaleTag() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="sale-tag-02">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="sale-tag-02">
          <path d={svgPaths.p3ed82d00} id="Vector" stroke="var(--stroke-0, #C09038)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.75" />
          <path d={svgPaths.pef34d40} id="Vector_2" stroke="var(--stroke-0, #C09038)" strokeWidth="2.75" />
          <path d={svgPaths.p21ee5280} id="Vector_3" stroke="var(--stroke-0, #C09038)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.75" />
        </g>
      </svg>
    </div>
  );
}

function Contact() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="contact">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="contact">
          <path d={svgPaths.p38978400} id="Vector" stroke="var(--stroke-0, #C09038)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.75" />
          <path d="M14.6667 7.33333V3.66667" id="Vector_2" stroke="var(--stroke-0, #C09038)" strokeLinecap="round" strokeWidth="2.75" />
          <path d="M29.3333 7.33333V3.66667" id="Vector_3" stroke="var(--stroke-0, #C09038)" strokeLinecap="round" strokeWidth="2.75" />
          <path d={svgPaths.p3b0a99c0} id="Vector_4" stroke="var(--stroke-0, #C09038)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.75" />
          <path d={svgPaths.p3ba07c00} id="Vector_5" stroke="var(--stroke-0, #C09038)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.75" />
        </g>
      </svg>
    </div>
  );
}

const NAV_ICONS: Record<string, ReactNode> = {
  'About Us': <DashboardSquare />,
  'Product & Services': <Copy />,
  'Management Gallery': <Image />,
  'Factory & Refinery': <Factory />,
  'License & Office': <Office />,
  'Sales & Purchase': <SaleTag />,
  'Contact Us': <Contact />,
};

function Frame11() {
  return (
    <div className="relative shrink-0 self-stretch rounded-[16px] bg-[#010100]">
      <div className="flex size-full flex-col items-center justify-center overflow-clip rounded-[inherit]">
        <nav className="relative flex size-full flex-col content-stretch items-center justify-evenly gap-[12px] px-[12px] py-[24px]">
          {NAV_ITEMS.map((item) => (
            <SideNavItem
              key={item.to}
              to={item.to}
              label={item.label}
              icon={NAV_ICONS[item.label]}
            />
          ))}
        </nav>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[16px] border-2 border-solid border-[#c09038]"
      />
    </div>
  );
}

function Frame12({ gallery }: { gallery?: HomeRightGallery | null }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
      <HomeRightGalleryColumn gallery={gallery} />
    </div>
  );
}

function Frame8({
  members,
  homeRightGallery,
  getInTouch,
}: {
  members: TeamMember[];
  homeRightGallery?: HomeRightGallery | null;
  getInTouch?: GetInTouchSection | null;
}) {
  const { pathname } = useLocation();
  const showAbout = pathname === '/about';
  const showFactory = pathname === '/factory';
  const showLicense = pathname === '/license';
  const showPanel = showAbout || showFactory || showLicense;

  useEffect(() => {
    if (!showPanel) return;
    document.getElementById('home-main-panel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [showPanel]);

  return (
    <div id="home-main-panel" className="relative w-full shrink-0">
      <div className="relative w-full bg-[#000000] px-[20px] py-[10px]">
        {showAbout ? (
          <AboutSection teamMembers={members} getInTouch={getInTouch} />
        ) : showFactory ? (
          <FactorySection />
        ) : showLicense ? (
          <LicenseSection />
        ) : (
          <div className="relative flex w-full content-stretch items-stretch gap-[12px]">
            <Frame9 members={members} />
            <Frame11 />
            <Frame12 gallery={homeRightGallery} />
          </div>
        )}
      </div>
    </div>
  );
}

function SectionBrands({ whyChoose }: { whyChoose?: WhyChooseSection | null }) {
  return <WhyChooseBrandsSection content={whyChoose} />;
}



function DivTextCenter8() {
  return (
    <div className="content-stretch flex flex-col items-center py-[20px] relative shrink-0 w-full" data-name="div.text-center">
      <div className="flex flex-col font-['Alice:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c09038] text-[18px] text-center w-full">
        <p className="leading-[normal]">© 2026 JD Gold. All Rights Reserved.</p>
      </div>
    </div>
  );
}

function HomeFooter() {
  return (
    <div className="relative w-full shrink-0">
      <DivTextCenter8 />
    </div>
  );
}

function SectionBrands5({ getInTouch }: { getInTouch?: GetInTouchSection | null }) {
  return (
    <div
      className="relative flex w-full shrink-0 flex-col items-start gap-[20px] bg-[#100b02] pt-[20px]"
      data-name="section#brands"
    >
      <GetInTouchSectionView content={getInTouch} />
      <HomeFooter />
    </div>
  );
}

type HomePageProps = {
  teamMembers?: TeamMember[];
  homeRightGallery?: HomeRightGallery | null;
  whyChooseSection?: WhyChooseSection | null;
  buildingTrustSection?: BuildingTrustSection | null;
  goldProductsSection?: GoldProductsSection | null;
  goldRefiningProcessSection?: GoldRefiningProcessSection | null;
  refiningGallerySection?: RefiningGallerySection | null;
  industriesWeServeSection?: IndustriesWeServeSection | null;
  miningExtractionSection?: MiningExtractionSection | null;
  globalShippingSection?: GlobalShippingSection | null;
  getInTouchSection?: GetInTouchSection | null;
};

export default function HomePage({
  teamMembers,
  homeRightGallery,
  whyChooseSection,
  buildingTrustSection,
  goldProductsSection,
  goldRefiningProcessSection,
  refiningGallerySection,
  industriesWeServeSection,
  miningExtractionSection,
  globalShippingSection,
  getInTouchSection,
}: HomePageProps) {
  const members = resolveTeamMembers(teamMembers);
  const { pathname } = useLocation();
  const showPanel = pathname === '/about' || pathname === '/factory' || pathname === '/license';

  return (
    <div
      className="relative flex w-[1512px] min-w-[1512px] flex-col content-stretch items-start bg-[#010100]"
      data-name="Home"
    >
      <Frame8
        members={members}
        homeRightGallery={homeRightGallery}
        getInTouch={getInTouchSection}
      />
      {!showPanel ? (
        <>
          <SectionBrands whyChoose={whyChooseSection} />
          <BuildingTrustGoldSection content={buildingTrustSection} />
          <GoldProductsSectionView content={goldProductsSection} />
          <GoldRefiningProcessSectionView content={goldRefiningProcessSection} />
          <RefiningGallerySectionView content={refiningGallerySection} />
          <IndustriesWeServeSectionView content={industriesWeServeSection} />
          <MiningExtractionSectionView content={miningExtractionSection} />
          <GlobalShippingSectionView content={globalShippingSection} />
          <SectionBrands5 getInTouch={getInTouchSection} />
        </>
      ) : null}
    </div>
  );
}