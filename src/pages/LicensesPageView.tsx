import PageShell from '@/components/PageShell';
import ScaledCanvas from '@/components/ScaledCanvas';
import LicenseOfficeCard from '@/components/LicenseOfficeCard';
import SafeImage from '@/components/SafeImage';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export type LicenseDetail = {
  label: string;
  value: string;
};

export type LicenseOffice = {
  number?: number;
  country: string;
  flagSrc?: string;
  details?: LicenseDetail[];
  /** @deprecated kept for older Mongo docs */
  licenseType?: string;
  issuingBody?: string;
  company?: string;
  registrationNumber?: string;
  licenseNumber?: string;
  issueDate?: string;
  expiryDate?: string;
  companyType?: string;
  officeLocation?: string;
  licenseImage: string;
  licenseImageAlt?: string;
  officeImage: string;
  officeImageAlt?: string;
};

export type LicensesContent = {
  layout: 'licenses';
  logoSrc?: string;
  heading?: string;
  subtitle?: string;
  heroImage?: string;
  heroImageAlt?: string;
  offices?: LicenseOffice[];
  footerPoints?: { title: string; description: string; icon?: string }[];
};

function FooterPointIcon({ icon }: { icon?: string }) {
  const common = 'h-11 w-11 shrink-0 text-[#c09038]';
  switch (icon) {
    case 'shield':
      return (
        <svg className={common} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path d="M24 4L8 10v12c0 10.5 6.8 17.8 16 20 9.2-2.2 16-9.5 16-20V10L24 4z" />
          <path d="M16 23l5.5 5.5L33 17" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'globe':
      return (
        <svg className={common} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <circle cx="24" cy="24" r="16" />
          <ellipse cx="24" cy="24" rx="7" ry="16" />
          <path d="M8 24h32M24 8c4 4.5 6.5 10 6.5 16S28 35.5 24 40M24 8c-4 4.5-6.5 10-6.5 16S20 35.5 24 40" />
        </svg>
      );
    case 'handshake':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="m11 17 2 2a1 1 0 1 0 3-3" />
          <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
          <path d="m21 3 1 11h-2" />
          <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
          <path d="M3 4h8" />
        </svg>
      );
    case 'trophy':
      return (
        <svg className={common} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M16 10h16v10a8 8 0 01-16 0V10z" />
          <path d="M16 14H10a4 4 0 004 8h2M32 14h6a4 4 0 01-4 8h-2" />
          <path d="M24 28v6M18 40h12M20 34h8v6h-8z" />
        </svg>
      );
    default:
      return (
        <svg className={common} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path d="M24 4L8 10v12c0 10.5 6.8 17.8 16 20 9.2-2.2 16-9.5 16-20V10L24 4z" />
        </svg>
      );
  }
}

/** Decorative gold rule with a center diamond — matches design reference. */
function GoldFlourishDivider() {
  return (
    <div className="relative mx-auto flex h-4 max-w-5xl items-center px-4" aria-hidden>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c09038]/80 to-[#c09038]/50" />
      <span className="mx-2 inline-block h-2 w-2 rotate-45 border border-[#c09038] bg-[#c09038]/40" />
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#c09038]/80 to-[#c09038]/50" />
    </div>
  );
}

export default function LicensesPageView({ content }: { content: LicensesContent }) {
  const offices = content.offices || [];
  const footerPoints = (content.footerPoints || []).filter(
    (p) => p.title?.trim() || p.description?.trim(),
  );

  return (
    <PageShell logoSrc={content.logoSrc}>
      <ScaledCanvas>
      <section className="relative mx-auto grid w-full grid-cols-[1.15fr_1fr] items-center gap-10 px-6 py-12">
        <Link
          to="/"
          aria-label="Back to home"
          className="absolute top-6 left-6 z-10 inline-flex items-center gap-1.5 rounded-sm border border-[#c09038]/70 bg-[#0a0502]/85 px-3 py-1.5 text-sm tracking-wide text-[#c09038] backdrop-blur-sm transition hover:border-[#c09038] hover:bg-[#c09038]/20 hover:text-white"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Back
        </Link>
        <div className="flex min-w-0 flex-col items-start pt-8 text-left">
          <SafeImage
            src={content.logoSrc}
            alt="JD Gold"
            preview={false}
            className="mb-5 h-14 w-auto"
          />
          {content.heading ? (
            <h1 className="break-words font-['Alice:Regular',Georgia,serif] text-4xl leading-snug tracking-[0.04em] text-[#c09038] uppercase">
              {content.heading}
            </h1>
          ) : null}
          {content.subtitle ? (
            <p className="mt-3 max-w-xl text-sm tracking-[0.18em] text-white uppercase">
              {content.subtitle}
            </p>
          ) : null}
        </div>
        <div className="relative h-60 overflow-hidden rounded-2xl border border-[#c09038] shadow-[0_0_24px_rgba(192,144,56,0.18)]">
          <SafeImage
            src={content.heroImage}
            alt={content.heroImageAlt || ''}
            className="absolute inset-0 size-full object-cover object-center"
          />
        </div>
      </section>

      {offices.length ? (
        <>
          <GoldFlourishDivider />
          <div className="mx-auto w-full space-y-8 px-6 py-10">
            {offices.map((office, index) => (
              <div key={`${office.country}-${office.number ?? index}`}>
                <LicenseOfficeCard office={office} index={index} />
                {index < offices.length - 1 ? (
                  <div className="mt-8">
                    <GoldFlourishDivider />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </>
      ) : null}

      {footerPoints.length ? (
        <section className="gold-void border-t border-[#c09038]/40">
          <div className="mx-auto grid w-full grid-cols-4 gap-6 px-6 py-10">
            {footerPoints.map((point) => (
              <div key={point.title} className="flex flex-col items-center text-center">
                <div className="mb-3">
                  <FooterPointIcon icon={point.icon} />
                </div>
                <h3 className="mb-2 break-words font-['Alice:Regular',Georgia,serif] text-lg tracking-[0.06em] text-[#c09038] uppercase">
                  {point.title}
                </h3>
                <p className="max-w-[220px] text-xs leading-relaxed text-[#e5e5e5]/90">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <footer className="border-t border-[#c09038]/30 bg-[#100b02]">
        <div className="mx-auto flex w-full flex-col items-center px-6 py-5">
          <p className="text-center font-['Alice:Regular',Georgia,serif] text-sm text-[#c09038]">
            © {new Date().getFullYear()} JD Gold. All Rights Reserved.
          </p>
        </div>
      </footer>
      </ScaledCanvas>
    </PageShell>
  );
}
