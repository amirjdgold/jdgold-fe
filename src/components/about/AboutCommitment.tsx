import SafeImage from '@/components/SafeImage';
import { SectionTitle } from '@/components/PageShell';
import { CommitIcon } from '@/components/about/AboutIcons';

export type AboutCommitmentItem = {
  title: string;
  description?: string;
  icon?: string;
};

export default function AboutCommitment({
  heading,
  body,
  commitments,
  footerImage,
}: {
  heading?: string;
  body?: string;
  commitments: AboutCommitmentItem[];
  footerImage?: string;
}) {
  if (!heading && !body && !commitments.length && !footerImage) return null;

  return (
    <section className="mx-auto w-full px-6 py-10">
      <div className="grid items-center gap-8 grid-cols-[1.15fr_0.95fr]">
        <div>
          {heading ? (
            <SectionTitle className="mb-3 !text-3xl uppercase">{heading}</SectionTitle>
          ) : null}
          {body ? (
            <p className="mb-8 max-w-xl text-base leading-relaxed text-[#e5e5e5]">
              {body}
            </p>
          ) : null}

          {commitments.length ? (
            <div className="grid grid-cols-4 gap-5">
              {commitments.map((c) => (
                <div key={c.title} className="flex flex-col items-center gap-2 text-center">
                  <CommitIcon icon={c.icon} />
                  <p className="break-words text-xs tracking-[0.08em] text-[#c09038] uppercase">
                    {c.title}
                  </p>
                  {c.description ? (
                    <p className="text-[11px] leading-relaxed text-[#d4d4d4]">
                      {c.description}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className="relative min-h-[260px] overflow-hidden rounded-sm border border-[#c09038]/60">
          <SafeImage
            src={footerImage}
            alt=""
            className="absolute inset-0 size-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
