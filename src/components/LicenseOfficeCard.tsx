import SafeImage from '@/components/SafeImage';
import type { LicenseDetail, LicenseOffice } from '@/pages/LicensesPageView';

export type { LicenseOffice, LicenseDetail };

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
    <p className="text-sm leading-relaxed">
      <span className="font-semibold tracking-wide text-[#c09038]">{label}: </span>
      <span className="break-words text-white">{value}</span>
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
    <div className="flex min-w-0 items-center gap-3">
      <span className="shrink-0 font-['Alice:Regular',Georgia,serif] text-5xl leading-none text-[#c09038]">
        {number}
      </span>
      {flagSrc ? (
        <span className="relative inline-flex h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-[#c09038] bg-[#1a1008] shadow-[0_0_14px_rgba(192,144,56,0.45)]">
          <SafeImage
            src={flagSrc}
            alt={`${country} flag`}
            hideIfEmpty
            className="absolute inset-0 size-full object-cover"
          />
        </span>
      ) : null}
      <h2 className="min-w-0 break-words font-['Alice:Regular',Georgia,serif] text-3xl tracking-[0.08em] text-[#c09038] uppercase">
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

/** Split "City, Country (Office Type)" into place + role without inventing copy. */
function parseOfficeLocation(location: string): { place: string; role?: string } {
  const match = location.match(/^(.*?)\s*\(([^)]+)\)\s*$/);
  if (match) {
    return { place: match[1].trim(), role: match[2].trim() };
  }
  return { place: location };
}

type LicenseOfficeCardProps = {
  office: LicenseOffice;
  /** 1-based display index when `office.number` is omitted */
  index?: number;
};

/**
 * Country license + office row: certificate | details | office image.
 */
export default function LicenseOfficeCard({ office, index = 0 }: LicenseOfficeCardProps) {
  const number = office.number ?? index + 1;
  const details = resolveDetails(office);
  const location = office.officeLocation
    ? parseOfficeLocation(office.officeLocation)
    : null;

  return (
    <article className="min-w-0 overflow-hidden rounded-xl border border-[#c09038]/70 bg-[#120a04]">
      <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="relative min-h-[300px] border-r border-[#c09038]/35 bg-[#1a1008]">
          <SafeImage
            src={office.licenseImage}
            alt={office.licenseImageAlt || `${office.country} license certificate`}
            className="absolute inset-0 size-full object-contain p-4"
          />
        </div>

        <div className="flex min-w-0 flex-col justify-center gap-1.5 border-r border-[#c09038]/35 p-6">
          <div className="mb-3">
            <CountryHeading number={number} country={office.country} flagSrc={office.flagSrc} />
          </div>
          {details.map((row) => (
            <DetailRow key={`${row.label}-${row.value}`} label={row.label} value={row.value} />
          ))}
          {location ? (
            <div className="mt-3 flex items-start gap-2 text-sm">
              <LocationPinIcon />
              <div className="min-w-0">
                <p className="font-semibold tracking-wide text-[#c09038]">OFFICE LOCATION</p>
                <p className="break-words font-semibold text-[#c09038]">{location.place}</p>
                {location.role ? (
                  <p className="text-sm text-white/90">{location.role}</p>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>

        <div className="relative min-h-[300px]">
          <SafeImage
            src={office.officeImage}
            alt={office.officeImageAlt || `${office.country} office`}
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          {office.officeLocation ? (
            <p className="absolute right-3 bottom-3 left-3 break-words font-['Alice:Regular',Georgia,serif] text-sm text-[#c09038]">
              {office.officeLocation}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
