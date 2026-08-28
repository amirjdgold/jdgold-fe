import SafeImage from '@/components/SafeImage';
import { SectionTitle } from '@/components/PageShell';

export type AboutLeader = {
  title: string;
  name: string;
  experience: string;
  image: string;
  imageAlt?: string;
};

export default function AboutLeadership({
  heading,
  leaders,
}: {
  heading?: string;
  leaders: AboutLeader[];
}) {
  if (!leaders.length) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-6 md:px-6">
      <div className="mb-6 flex items-center gap-2 sm:mb-8 sm:gap-4">
        <div className="h-px min-w-[1rem] flex-1 bg-gradient-to-r from-transparent via-[#c09038] to-[#c09038]" />
        <SectionTitle className="min-w-0 max-w-[min(100%,18rem)] text-center uppercase sm:max-w-none">
          {heading || 'OUR LEADERSHIP'}
        </SectionTitle>
        <div className="h-px min-w-[1rem] flex-1 bg-gradient-to-l from-transparent via-[#c09038] to-[#c09038]" />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-0">
        {leaders.map((leader, index) => (
          <article
            key={leader.name}
            className={[
              'min-w-0 overflow-hidden md:px-3 lg:px-4',
              index > 0 ? 'md:border-l md:border-[#c09038]/70' : '',
            ].join(' ')}
          >
            {leader.image ? (
              <div className="relative mx-auto aspect-[3/4] max-w-sm overflow-hidden rounded-sm border border-[#c09038]/50 bg-black md:max-w-none">
                <SafeImage
                  src={leader.image}
                  alt={leader.imageAlt || leader.name}
                  className="absolute inset-0 size-full object-cover object-top"
                />
              </div>
            ) : null}
            <div className="space-y-1 px-2 py-4 text-center">
              <p className="font-['Alice:Regular',Georgia,serif] text-[11px] tracking-[0.16em] text-[#c09038] uppercase">
                {leader.title}
              </p>
              <h3 className="break-words font-['Alice:Regular',Georgia,serif] text-base text-[#c09038] sm:text-lg md:text-xl">
                {leader.name}
              </h3>
              {leader.experience ? (
                <p className="text-xs leading-relaxed text-[#cfcfcf]">{leader.experience}</p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
