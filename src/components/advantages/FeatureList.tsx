import { CheckIcon } from '@/components/advantages/AdvantageIcons';

type FeatureListProps = {
  points?: string[];
  className?: string;
  itemClassName?: string;
};

/** Gold-checkmark bullet list used inside advantage blocks. */
export default function FeatureList({
  points = [],
  className = 'mt-3 space-y-2 overflow-y-auto',
          itemClassName = 'flex min-w-0 gap-2.5 text-sm leading-snug text-[#e8e8e8]',
}: FeatureListProps) {
  if (!points.length) return null;

  return (
    <ul className={className}>
      {points.map((point) => (
        <li key={point} className={itemClassName}>
          <CheckIcon />
          <span className="min-w-0 break-words">{point}</span>
        </li>
      ))}
    </ul>
  );
}
