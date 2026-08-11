import PageShell, { SectionTitle } from '@/components/PageShell';

export type AboutContent = {
  layout: 'about';
  brandTagline?: string;
  logoSrc?: string;
  heroImage?: string;
  heroImageAlt?: string;
  heroBackgroundImage?: string;
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
    email?: string;
    website?: string;
    address?: string;
  };
  footerImage?: string;
};

function PillarIcon({ icon }: { icon?: string }) {
  const common = 'h-9 w-9 text-[#c09038]';
  switch (icon) {
    case 'diamond':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M6 3h12l4 7-10 11L2 10l4-7z" />
          <path d="M2 10h20M10 3l-2 7 4 11 4-11-2-7" />
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
    case 'globe':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <ellipse cx="12" cy="12" rx="3.5" ry="9" />
          <path d="M3 12h18M12 3c2.5 2.8 4 6 4 9s-1.5 6.2-4 9M12 3c-2.5 2.8-4 6-4 9s1.5 6.2 4 9" />
        </svg>
      );
    case 'shield':
    default:
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9.5C7.5 20.5 4 17 4 12V6l8-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
  }
}

function CommitIcon({ icon }: { icon?: string }) {
  const common = 'h-8 w-8 text-[#c09038]';
  switch (icon) {
    case 'scale':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M12 3v18M5 7h14M7 7l-3 6h6L7 7zm10 0l-3 6h6l-3-6z" />
        </svg>
      );
    case 'lock':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M12 3l7 3v5c0 4.5-3 7.5-7 8.5-4-1-7-4-7-8.5V6l7-3z" />
          <rect x="9" y="11" width="6" height="5" rx="1" />
          <path d="M10.5 11V9.5a1.5 1.5 0 013 0V11" />
        </svg>
      );
    case 'people':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <circle cx="9" cy="8" r="3" />
          <circle cx="16" cy="9" r="2.5" />
          <path d="M3 19c1.5-3 4-4.5 6-4.5S13.5 16 15 19M14 14.5c1.5 0 3.2.8 4.5 3.5" />
        </svg>
      );
    case 'badge':
    default:
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <circle cx="12" cy="10" r="6" />
          <path d="M9.5 10.5l1.8 1.8 3.7-3.8" />
          <path d="M8 15.5l-1.5 5 5.5-2.5 5.5 2.5L16 15.5" />
        </svg>
      );
  }
}

function ContactIcon({ type }: { type: 'phone' | 'email' | 'web' | 'pin' }) {
  const common = 'h-4 w-4 shrink-0 text-[#c09038]';
  if (type === 'phone') {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M6.5 4.5h3l1.5 4-2 1.5a12 12 0 006 6l1.5-2 4 1.5v3a2 2 0 01-2 2A15 15 0 014.5 6.5a2 2 0 012-2z" />
      </svg>
    );
  }
  if (type === 'email') {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 7 9-7" />
      </svg>
    );
  }
  if (type === 'web') {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
      </svg>
    );
  }
  return (
    <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
    </svg>
  );
}

export default function AboutPageView({ content }: { content: AboutContent }) {
  const jewelleryImages = content.jewelleryDeptImages || [];
  const heroBar =
    content.heroImage || '/images/product-investment-grade-bar.png';
  const heroBg =
    content.heroBackgroundImage || '/images/product-cast-gold-bars.png';

  return (
    <PageShell logoSrc={content.logoSrc}>
      {/* Top hero — logo + about copy left, gold bar right */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <img
            src={heroBg}
            alt=""
            className="absolute inset-0 size-full object-cover opacity-[0.22]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0502] via-[#0a0502]/92 to-[#0a0502]/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0502]/40 via-transparent to-[#0a0502]" />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 md:grid-cols-[1.15fr_0.95fr] md:gap-10 md:px-6 md:py-14">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <img
              src={content.logoSrc || '/images/jd-gold-logo.png'}
              alt="JD Gold"
              className="mb-3 h-20 w-auto md:h-24"
            />
            <p className="font-['Alice:Regular',Georgia,serif] text-2xl tracking-[0.18em] text-[#c09038] md:text-3xl">
              JD GOLD
            </p>
            <p className="mt-2 text-sm tracking-wide text-[#e8d5a8]/90 md:text-base">
              {content.brandTagline || 'Building Trust In Gold'}
            </p>

            <div className="mt-8 w-full max-w-xl">
              <div className="mb-3 flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c09038]" />
                <p className="shrink-0 text-[11px] tracking-[0.28em] text-[#c09038] uppercase">
                  About
                </p>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#c09038]" />
              </div>
              <h1 className="mb-4 font-['Alice:Regular',Georgia,serif] text-3xl tracking-[0.08em] text-[#c09038] uppercase md:text-4xl">
                JD GOLD
              </h1>
              <div className="space-y-3 text-sm leading-relaxed text-[#f0e2c0] md:text-[15px]">
                <p>
                  {content.aboutBody ||
                    'JD GOLD is a name of trust, excellence and quality in the gold industry. With decades of experience, a commitment to purity, and customer satisfaction, we continue to set new benchmarks in the world of gold trading, refining, and jewelry.'}
                </p>
                <p>
                  {content.aboutBodySecondary ||
                    'We believe in honesty, transparency, and building lasting relationships with our clients worldwide.'}
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#c09038]/80 shadow-[0_0_40px_rgba(192,144,56,0.28)] md:aspect-[3/4] md:min-h-[420px]">
              <img
                src={heroBar}
                alt={content.heroImageAlt || 'JD GOLD Fine Gold 999.9 1000g bar'}
                className="absolute inset-0 size-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {(content.pillars || []).map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-[#c09038] bg-[#120a04]/90 p-5 text-center"
            >
              <div className="mb-3 flex justify-center">
                <PillarIcon icon={p.icon} />
              </div>
              <h3 className="mb-2 font-['Alice:Regular',Georgia,serif] text-sm tracking-[0.08em] text-[#c09038] uppercase">
                {p.title}
              </h3>
              <p className="text-xs leading-relaxed text-[#e5e5e5]">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="mx-auto max-w-6xl px-4 py-6 md:px-6">
        <div className="mb-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c09038] to-[#c09038]" />
          <SectionTitle className="shrink-0 text-center">
            {content.leadershipHeading || 'OUR LEADERSHIP'}
          </SectionTitle>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#c09038] to-[#c09038]" />
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {(content.leaders || []).map((leader) => (
            <article
              key={leader.name}
              className="overflow-hidden rounded-xl border-2 border-[#c09038] bg-[#120a04]"
            >
              <div className="relative aspect-[3/4] bg-black">
                <img
                  src={leader.image}
                  alt={leader.imageAlt || leader.name}
                  className="absolute inset-0 size-full object-cover object-top"
                />
              </div>
              <div className="space-y-1 border-t border-[#c09038]/40 p-4 text-center">
                <p className="text-[11px] tracking-[0.16em] text-[#c09038] uppercase">
                  {leader.title}
                </p>
                <h3 className="font-['Alice:Regular',Georgia,serif] text-lg text-white">
                  {leader.name}
                </h3>
                <p className="text-xs text-[#cfcfcf]">{leader.experience}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Jewellery department */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <div className="grid overflow-hidden rounded-xl border-2 border-[#c09038] md:grid-cols-[1fr_1.35fr]">
          <div className="flex flex-col justify-center bg-[#140c05] p-6 md:p-8">
            <SectionTitle className="mb-2 text-xl md:text-2xl">
              {content.jewelleryDeptHeading || 'JD GOLD JEWELLERY DEPARTMENT'}
            </SectionTitle>
            {content.jewelleryDeptManagedBy ? (
              <p className="mb-4 text-sm tracking-wide text-[#d4af37]">
                {content.jewelleryDeptManagedBy}
              </p>
            ) : null}
            <p className="text-sm leading-relaxed text-[#e5e5e5]">{content.jewelleryDeptBody}</p>
          </div>
          <div
            className={`grid min-h-[240px] ${jewelleryImages.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}
          >
            {jewelleryImages.map((img) => (
              <img
                key={img.src + (img.alt || '')}
                src={img.src}
                alt={img.alt || ''}
                className="h-full min-h-[240px] w-full object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Collection */}
      <section className="mx-auto max-w-6xl px-4 py-6 md:px-6">
        <SectionTitle className="mb-6 text-center">
          {content.collectionHeading || 'OUR JEWELLERY COLLECTION'}
        </SectionTitle>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {(content.collectionImages || []).map((img) => (
            <div
              key={img.src + (img.alt || '')}
              className="overflow-hidden rounded-lg border border-[#c09038]"
            >
              <img
                src={img.src}
                alt={img.alt || ''}
                className="aspect-square w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Commitment */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <SectionTitle className="mb-3 text-center">
          {content.commitmentHeading || 'OUR COMMITMENT'}
        </SectionTitle>
        <p className="mx-auto mb-8 max-w-3xl text-center text-sm leading-relaxed text-[#e5e5e5] md:text-base">
          {content.commitmentBody}
        </p>

        <div className="grid items-center gap-8 md:grid-cols-[1.2fr_1fr]">
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
            {(content.commitments || []).map((c) => (
              <div key={c.title} className="flex flex-col items-center gap-2 text-center">
                <CommitIcon icon={c.icon} />
                <p className="text-xs tracking-[0.08em] text-[#c09038] uppercase">{c.title}</p>
                {c.description ? (
                  <p className="text-[11px] leading-relaxed text-[#d4d4d4]">{c.description}</p>
                ) : null}
              </div>
            ))}
          </div>
          {content.footerImage ? (
            <div className="relative min-h-[180px] overflow-hidden rounded-xl border border-[#c09038]/60 md:min-h-[220px]">
              <img
                src={content.footerImage}
                alt="JD GOLD bars and coins"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
          ) : null}
        </div>
      </section>

      {/* Contact bar */}
      <section className="border-t border-[#c09038]/40 bg-[#0a0502]">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-6 text-sm text-[#e5e5e5] sm:grid-cols-2 lg:grid-cols-4 md:px-6">
          {content.contact?.phone ? (
            <div className="flex items-center gap-2">
              <ContactIcon type="phone" />
              <span>{content.contact.phone}</span>
            </div>
          ) : null}
          {content.contact?.email ? (
            <div className="flex items-center gap-2">
              <ContactIcon type="email" />
              <span>{content.contact.email}</span>
            </div>
          ) : null}
          {content.contact?.website ? (
            <div className="flex items-center gap-2">
              <ContactIcon type="web" />
              <span>{content.contact.website}</span>
            </div>
          ) : null}
          {content.contact?.address ? (
            <div className="flex items-start gap-2">
              <ContactIcon type="pin" />
              <span>{content.contact.address}</span>
            </div>
          ) : null}
        </div>
      </section>
    </PageShell>
  );
}
