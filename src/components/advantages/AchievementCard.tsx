import SafeImage, { PRODUCT_IMAGE_FALLBACK } from '@/components/SafeImage';

export type AchievementCardData = {
  title: string;
  description?: string;
  points?: string[];
  image: string;
  imageAlt?: string;
};

/** Vertical achievement card: image, gold header, bullet points. */
export default function AchievementCard({ item }: { item: AchievementCardData }) {
  return (
    <article className="min-w-0 overflow-hidden rounded-xl border border-[#c09038]/70 bg-[#120a04]">
      <div className="relative aspect-[4/3]">
        <SafeImage
          src={item.image}
          alt={item.imageAlt || item.title}
          fallbackSrc={PRODUCT_IMAGE_FALLBACK}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#120a04] via-transparent to-transparent" />
      </div>
      <div className="space-y-2 p-4">
        <h3 className="break-words text-center font-['Alice:Regular',Georgia,serif] text-lg tracking-[0.06em] text-[#c09038] uppercase">
          {item.title}
        </h3>
        {item.points?.length ? (
          <ul className="space-y-2">
            {item.points.map((point) => (
              <li
                key={point}
                className="flex gap-2 text-xs leading-relaxed text-[#d4d4d4]"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#c09038]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        ) : item.description ? (
          <p className="text-center text-xs leading-relaxed text-[#d4d4d4]">{item.description}</p>
        ) : null}
      </div>
    </article>
  );
}
