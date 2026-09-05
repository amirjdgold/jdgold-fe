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
    <section className="mx-auto w-full px-6 py-6">
      {heading ? (
        <div className="mb-8 flex items-center gap-4">
          <div className="h-px min-w-[1rem] flex-1 bg-gradient-to-r from-transparent via-[#c09038] to-[#c09038]" />
          <SectionTitle className="min-w-0 text-center !text-3xl uppercase">
            {heading}
          </SectionTitle>
          <div className="h-px min-w-[1rem] flex-1 bg-gradient-to-l from-transparent via-[#c09038] to-[#c09038]" />
        </div>
      ) : null}

      <div className="grid grid-cols-3 gap-0">
        {leaders.map((leader, index) => (
          <article
            key={leader.name}
            className={[
              'min-w-0 overflow-hidden px-4',
              index > 0 ? 'border-l border-[#c09038]/70' : '',
            ].join(' ')}
          >
            {leader.image ? (
              <div className="relative mx-auto aspect-[3/4] overflow-hidden rounded-sm border border-[#c09038]/50 bg-black">
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
              <h3 className="break-words font-['Alice:Regular',Georgia,serif] text-xl text-[#c09038]">
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
