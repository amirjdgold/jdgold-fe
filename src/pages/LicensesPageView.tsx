import PageShell from '@/components/PageShell';

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
  const common = 'h-10 w-10 shrink-0 text-[#c09038] md:h-11 md:w-11';
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

function LocationPinIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-[#c09038]"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
    </svg>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <p className="text-[13px] leading-relaxed md:text-sm">
      <span className="font-semibold tracking-wide text-[#c09038]">{label}: </span>
      <span className="text-white">{value}</span>
    </p>
  );
}

function CountryHeading({
  number,
  country,
  flagSrc,
}: {
  number: number;
  country: string;
  flagSrc?: string;
}) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="font-['Alice:Regular',Georgia,serif] text-4xl leading-none text-[#c09038] md:text-5xl">
        {number}
      </span>
      {flagSrc ? (
        <span className="relative inline-flex h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-[#c09038] bg-[#1a1008] shadow-[0_0_14px_rgba(192,144,56,0.45)] md:h-12 md:w-12">
          <img
            src={flagSrc}
            alt={`${country} flag`}
            className="absolute inset-0 size-full object-cover"
          />
        </span>
      ) : null}
      <h2 className="font-['Alice:Regular',Georgia,serif] text-2xl tracking-[0.08em] text-[#c09038] uppercase md:text-3xl">
        {country}
      </h2>
    </div>
  );
}

function resolveDetails(office: LicenseOffice): LicenseDetail[] {
  if (office.details?.length) return office.details;

  const legacy: LicenseDetail[] = [];
  if (office.licenseType) legacy.push({ label: 'LICENSE TYPE', value: office.licenseType });
  if (office.issuingBody) legacy.push({ label: 'LICENSE / CERTIFICATE', value: office.issuingBody });
  if (office.company) legacy.push({ label: 'REGISTERED COMPANY', value: office.company });
  if (office.registrationNumber)
    legacy.push({ label: 'REGISTRATION NUMBER', value: office.registrationNumber });
  if (office.licenseNumber) legacy.push({ label: 'LICENSE NUMBER', value: office.licenseNumber });
  if (office.issueDate) legacy.push({ label: 'ISSUE DATE', value: office.issueDate });
  if (office.expiryDate) legacy.push({ label: 'EXPIRY DATE', value: office.expiryDate });
  if (office.companyType) legacy.push({ label: 'COMPANY TYPE', value: office.companyType });
  return legacy;
}

export default function LicensesPageView({ content }: { content: LicensesContent }) {
  return (
    <PageShell logoSrc={content.logoSrc}>
      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 md:grid-cols-[1.15fr_1fr] md:gap-10 md:px-6 md:py-12">
        <div className="flex flex-col items-start">
          <img
            src={content.logoSrc || '/images/jd-gold-logo.png'}
            alt="JD Gold"
            className="mb-5 h-12 w-auto md:h-14"
          />
          <h1 className="font-['Alice:Regular',Georgia,serif] text-[1.75rem] leading-tight tracking-[0.04em] text-[#c09038] uppercase md:text-4xl md:leading-snug">
            {content.heading || 'JD GOLD LICENSE & OFFICES'}
          </h1>
          <p className="mt-3 max-w-xl text-[11px] tracking-[0.16em] text-white uppercase md:text-sm md:tracking-[0.18em]">
            {content.subtitle || 'GLOBAL LICENSES. WORLDWIDE OFFICES. TRUSTED EVERYWHERE.'}
          </p>
        </div>
        {content.heroImage ? (
          <div className="relative h-44 overflow-hidden rounded-2xl border border-[#c09038] shadow-[0_0_24px_rgba(192,144,56,0.18)] md:h-56 lg:h-60">
            <img
              src={content.heroImage}
              alt={content.heroImageAlt || 'JD GOLD Fine Gold 999.9 bar'}
              className="absolute inset-0 size-full object-cover object-center"
            />
          </div>
        ) : null}
      </section>

      <div className="mx-auto max-w-6xl space-y-6 px-4 pb-12 md:px-6">
        {(content.offices || []).map((office, index) => {
          const number = office.number ?? index + 1;
          const details = resolveDetails(office);
          return (
            <article
              key={office.country}
              className="grid overflow-hidden rounded-xl border border-[#c09038]/70 bg-[#120a04] md:grid-cols-[1fr_1.15fr_1fr]"
            >
              <div className="relative min-h-[220px] border-b border-[#c09038]/35 bg-black md:border-b-0 md:border-r">
                <img
                  src={office.licenseImage}
                  alt={office.licenseImageAlt || `${office.country} license`}
                  className="absolute inset-0 size-full object-contain bg-[#1a1008] p-3"
                />
              </div>

              <div className="flex flex-col justify-center gap-1.5 border-b border-[#c09038]/35 p-5 md:border-b-0 md:border-r md:p-6">
                <CountryHeading
                  number={number}
                  country={office.country}
                  flagSrc={office.flagSrc}
                />
                {details.map((row) => (
                  <DetailRow key={row.label} label={row.label} value={row.value} />
                ))}
                {office.officeLocation ? (
                  <div className="mt-2 flex items-start gap-2 text-[13px] md:text-sm">
                    <LocationPinIcon />
                    <p>
                      <span className="font-semibold tracking-wide text-[#c09038]">
                        OFFICE LOCATION:{' '}
                      </span>
                      <span className="text-white">{office.officeLocation}</span>
                    </p>
                  </div>
                ) : null}
              </div>

              <div className="relative min-h-[220px]">
                <img
                  src={office.officeImage}
                  alt={office.officeImageAlt || `${office.country} office`}
                  className="absolute inset-0 size-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 font-['Alice:Regular',Georgia,serif] text-sm text-[#c09038]">
                  {office.officeLocation}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      <section className="border-t border-[#c09038]/40 bg-[#0a0502]">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 md:px-6">
          {(content.footerPoints || []).map((point) => (
            <div key={point.title} className="flex flex-col items-center text-center">
              <div className="mb-3">
                <FooterPointIcon icon={point.icon} />
              </div>
              <h3 className="mb-2 font-['Alice:Regular',Georgia,serif] text-base tracking-[0.06em] text-[#c09038] uppercase md:text-lg">
                {point.title}
              </h3>
              <p className="max-w-[220px] text-xs leading-relaxed text-[#e5e5e5]/90">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
