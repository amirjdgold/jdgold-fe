import { Link } from 'react-router-dom';
import { useId } from 'react';
import svgPaths from '@/figma-home/svg-paths';

type OfficeRow = {
  number: string;
  country: string;
  flag: string;
  licenseImage: string;
  licenseAlt: string;
  fields: { label: string; value: string }[];
  officeLocation: string;
  officeImage: string;
  officeAlt: string;
};

const OFFICES: OfficeRow[] = [
  {
    number: '1',
    country: 'China',
    flag: '🇭🇰',
    licenseImage: '/images/license-hong-kong-incorporation.png',
    licenseAlt: 'Hong Kong Certificate of Incorporation',
    fields: [
      { label: 'License Type', value: 'Certificate of Incorporation' },
      { label: 'Issue Date', value: '2018' },
      { label: 'Company Name', value: 'Golden Ants Group Company Limited' },
      { label: 'Authority', value: 'Hong Kong Companies Registry' },
    ],
    officeLocation: 'Hong Kong, China',
    officeImage: '/images/management-collage-10.png',
    officeAlt: 'JD Gold China office',
  },
  {
    number: '2',
    country: 'Dubai',
    flag: '🇦🇪',
    licenseImage: '/images/license-dubai-ded-commercial-license.png',
    licenseAlt: 'Dubai Commercial License',
    fields: [
      { label: 'License Type', value: 'Commercial License' },
      { label: 'Issue Date', value: '2020' },
      { label: 'Company Name', value: 'JD Gold Trading LLC' },
      { label: 'Authority', value: 'Dubai Economy & Tourism (DED)' },
    ],
    officeLocation: 'Dubai, United Arab Emirates',
    officeImage: '/images/location-dubai-refinery.png',
    officeAlt: 'JD Gold Dubai office',
  },
  {
    number: '3',
    country: 'Qatar',
    flag: '🇶🇦',
    licenseImage: '/images/license-qatar-commercial-registration.png',
    licenseAlt: 'Qatar Commercial Registration',
    fields: [
      { label: 'License Type', value: 'Commercial Registration' },
      { label: 'Issue Date', value: '2021' },
      { label: 'Company Name', value: 'JD Gold Trading' },
      { label: 'Authority', value: 'Ministry of Commerce & Industry' },
    ],
    officeLocation: 'Doha, Qatar',
    officeImage: '/images/management-collage-12.png',
    officeAlt: 'JD Gold Qatar office',
  },
  {
    number: '4',
    country: 'Pakistan',
    flag: '🇵🇰',
    licenseImage: '/images/license-pakistan-secp-incorporation.png',
    licenseAlt: 'Pakistan Certificate of Incorporation',
    fields: [
      { label: 'License Type', value: 'Certificate of Incorporation' },
      { label: 'Issue Date', value: '2016' },
      { label: 'Company Name', value: 'JD Gold' },
      { label: 'Authority', value: 'SECP — Securities & Exchange Commission' },
    ],
    officeLocation: 'Karachi, Pakistan',
    officeImage: '/images/management-collage-14.png',
    officeAlt: 'JD Gold Pakistan office',
  },
  {
    number: '5',
    country: 'USA',
    flag: '🇺🇸',
    licenseImage: '/images/license-usa-jd-gold-trading.png',
    licenseAlt: 'USA Trading License',
    fields: [
      { label: 'License Type', value: 'Certificate of Trading License' },
      { label: 'Issue Date', value: '2022' },
      { label: 'Company Name', value: 'JD Gold Trading' },
      { label: 'Authority', value: 'Financial Service Commission' },
    ],
    officeLocation: 'United States of America',
    officeImage: '/images/management-collage-16.png',
    officeAlt: 'JD Gold USA office',
  },
  {
    number: '6',
    country: 'Uganda',
    flag: '🇺🇬',
    licenseImage: '/images/license-uganda-certificate-of-incorporation.png',
    licenseAlt: 'Uganda Certificate of Incorporation',
    fields: [
      { label: 'License Type', value: 'Certificate of Incorporation' },
      { label: 'Issue Date', value: '2023' },
      { label: 'Company Name', value: 'JD Gold Uganda' },
      { label: 'Authority', value: 'Ministry of Commerce' },
    ],
    officeLocation: 'Kampala, Uganda',
    officeImage: '/images/management-collage-18.png',
    officeAlt: 'JD Gold Uganda office',
  },
];

const FOOTER_FEATURES = [
  {
    title: 'Legally Licensed',
    body: 'All licenses are valid and issued by respective government authorities.',
    icon: 'shield',
  },
  {
    title: 'Global Presence',
    body: 'Strategic offices in key markets around the world.',
    icon: 'globe',
  },
  {
    title: 'Trust & Transparency',
    body: 'Committed to legal compliance and ethical business practices.',
    icon: 'handshake',
  },
  {
    title: 'Excellence',
    body: 'Delivering quality, value and excellence worldwide.',
    icon: 'trophy',
  },
] as const;

function FeatureIcon({ kind }: { kind: (typeof FOOTER_FEATURES)[number]['icon'] }) {
  const common = {
    className: 'size-[28px] shrink-0',
    fill: 'none',
    stroke: '#c09038',
    strokeWidth: 1.6,
    viewBox: '0 0 24 24',
  };
  if (kind === 'shield') {
    return (
      <svg {...common}>
        <path d="M12 3l7 3v5c0 4.5-3 8.2-7 9.5C8 19.2 5 15.5 5 11V6l7-3z" />
        <path d="M9.5 12l1.8 1.8L15 10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (kind === 'globe') {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" />
        <ellipse cx="12" cy="12" rx="3.5" ry="8" />
        <path d="M4 12h16" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === 'handshake') {
    return (
      <svg {...common}>
        <path d="M8 12l2.2 2.2a1.8 1.8 0 002.5 0L15.5 12" strokeLinecap="round" />
        <path d="M4 10l3.5-2.5h2.5L12 9.5 14 7.5h2.5L20 10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M8 18V9l4-2 4 2v9" strokeLinejoin="round" />
      <path d="M8 12h8M10 18v-3h4v3" strokeLinecap="round" />
    </svg>
  );
}

function LocationPin() {
  return (
    <svg className="size-[16px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="#c09038" strokeWidth="1.8">
      <path d="M12 21s-6-5.2-6-10a6 6 0 1112 0c0 4.8-6 10-6 10z" strokeLinejoin="round" />
      <circle cx="12" cy="11" r="2.2" />
    </svg>
  );
}

function OrnamentRule() {
  const uid = useId().replace(/:/g, '');
  const g1 = `lo-${uid}-1`;
  return (
    <div className="relative h-0 w-full">
      <div className="absolute inset-[-4px_0]">
        <svg className="block h-[8px] w-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344.773 11.547">
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
  );
}

/** License & Offices content panel embedded in the home Frame8 area. */
export function LicenseSection() {
  return (
    <div className="figma-panel-page relative w-full overflow-hidden rounded-[16px] border-2 border-solid border-[#c09038] bg-[#010100]">
      <div className="px-[28px] py-[24px]">
        <div className="mb-[16px] flex justify-start">
          <Link
            to="/"
            className="font-['Alice:Regular',sans-serif] text-[14px] text-[#c09038] no-underline underline-offset-4 hover:underline"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Header */}
        <section className="relative overflow-hidden rounded-[4px] border border-[#c09038]/35 bg-gradient-to-r from-[#1a1208] via-[#100b02] to-[#1a1208] px-[24px] py-[22px]">
          <div className="text-center">
            <h1 className="font-['Alice:Regular',sans-serif] text-[36px] leading-tight tracking-[0.06em] text-[#c09038]">
              JD GOLD LICENSE &amp; OFFICES
            </h1>
            <p className="mt-[8px] font-['Alice:Regular',sans-serif] text-[12px] tracking-[0.14em] text-white/85">
              GLOBAL LICENSES. WORLDWIDE OFFICES. TRUSTED EVERYWHERE.
            </p>
          </div>
        </section>

        {/* Office rows */}
        <div className="mt-[28px] flex flex-col gap-[28px]">
          {OFFICES.map((office, index) => (
            <section key={office.country}>
              <div
                className="grid items-center gap-[20px]"
                style={{ gridTemplateColumns: '420px 1fr 420px' }}
              >
                {/* License document */}
                <div className="overflow-hidden rounded-[8px] border border-[#c09038]/50 bg-[#0a0a0a] p-[8px]">
                  <img
                    src={office.licenseImage}
                    alt={office.licenseAlt}
                    className="aspect-[4/3] w-full object-contain object-center"
                  />
                </div>

                {/* Details */}
                <div className="px-[4px]">
                  <div className="flex items-center gap-[12px]">
                    <span className="font-['Alice:Regular',sans-serif] text-[44px] leading-none text-[#c09038]">
                      {office.number}
                    </span>
                    <span className="text-[28px] leading-none" aria-hidden="true">
                      {office.flag}
                    </span>
                    <h2 className="font-['Alice:Regular',sans-serif] text-[28px] tracking-[0.08em] text-[#c09038]">
                      {office.country.toUpperCase()}
                    </h2>
                  </div>
                  <dl className="mt-[14px] space-y-[8px]">
                    {office.fields.map((field) => (
                      <div key={field.label} className="grid grid-cols-[140px_1fr] gap-[8px]">
                        <dt className="font-['Alice:Regular',sans-serif] text-[12px] tracking-[0.04em] text-[#c09038]">
                          {field.label.toUpperCase()}
                        </dt>
                        <dd className="font-['Alice:Regular',sans-serif] text-[13px] text-white/85">
                          {field.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-[14px] flex items-start gap-[8px]">
                    <LocationPin />
                    <div>
                      <p className="font-['Alice:Regular',sans-serif] text-[12px] tracking-[0.04em] text-[#c09038]">
                        OFFICE LOCATION
                      </p>
                      <p className="mt-[2px] font-['Alice:Regular',sans-serif] text-[14px] text-white/90">
                        {office.officeLocation}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Office photo */}
                <div className="overflow-hidden rounded-[8px] border border-[#c09038]/50">
                  <img
                    src={office.officeImage}
                    alt={office.officeAlt}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </div>
              {index < OFFICES.length - 1 ? (
                <div className="mt-[28px]">
                  <OrnamentRule />
                </div>
              ) : null}
            </section>
          ))}
        </div>

        {/* Footer features */}
        <footer className="mt-[36px] border-t border-[#c09038] bg-[#100b02] px-[12px] py-[20px]">
          <div className="grid gap-[16px]" style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }}>
            {FOOTER_FEATURES.map((item) => (
              <div key={item.title} className="flex gap-[10px]">
                <FeatureIcon kind={item.icon} />
                <div>
                  <h3 className="font-['Alice:Regular',sans-serif] text-[13px] tracking-[0.04em] text-[#c09038]">
                    {item.title.toUpperCase()}
                  </h3>
                  <p className="mt-[4px] font-['Alice:Regular',sans-serif] text-[12px] leading-[1.5] text-white/75">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}

export default LicenseSection;
