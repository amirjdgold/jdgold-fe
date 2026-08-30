import { PillarIcon } from '@/components/about/AboutIcons';

export type AboutPillar = {
  title: string;
  description: string;
  icon?: string;
};

export default function AboutPillars({ pillars }: { pillars: AboutPillar[] }) {
  if (!pillars.length) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-10">
      <div className="overflow-hidden rounded-sm border border-[#c09038]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, index) => (
            <div
              key={p.title}
              className={[
                'bg-[#120a04]/90 p-5 text-center sm:p-6',
                index > 0 ? 'border-t border-[#c09038] lg:border-t-0 lg:border-l' : '',
                index === 1 ? 'sm:border-t-0 sm:border-l' : '',
                index === 2 ? 'sm:border-t lg:border-t-0' : '',
                index === 3 ? 'sm:border-l' : '',
              ].join(' ')}
            >
              <div className="mb-3 flex justify-center">
                <PillarIcon icon={p.icon} />
              </div>
              <h3 className="mb-2 break-words font-['Alice:Regular',Georgia,serif] text-sm tracking-[0.08em] text-[#c09038] uppercase">
                {p.title}
              </h3>
              <p className="text-xs leading-relaxed text-[#e5e5e5]">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
