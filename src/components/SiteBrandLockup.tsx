import SafeImage from '@/components/SafeImage';
import { cn } from '@/lib/utils';

type SiteBrandLockupProps = {
  logoSrc?: string;
  logoAlt?: string;
  title?: string;
  subtitle?: string;
  compact?: boolean;
  className?: string;
};

export default function SiteBrandLockup({
  logoSrc,
  logoAlt = 'JD Gold',
  title,
  subtitle,
  compact = false,
  className,
}: SiteBrandLockupProps) {
  const heading = title?.trim() || '';
  const tagline = subtitle?.trim() || '';

  return (
    <div
      className={cn(
        'flex min-w-0 items-center transition-[gap] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none',
        compact ? 'gap-3' : 'gap-3 md:gap-4',
        className,
      )}
    >
      <span
        className={cn(
          'relative shrink-0 overflow-hidden transition-[width,height] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none',
          compact ? 'size-16 md:size-20 lg:size-24' : 'size-20 sm:size-24 md:size-28 lg:size-36',
        )}
      >
        <SafeImage
          src={logoSrc}
          alt={logoAlt || heading || 'JD Gold'}
          preview={false}
          className="absolute inset-0 size-full bg-transparent object-cover object-[52%_50%]"
        />
      </span>
      {heading || tagline ? (
        <div className="flex min-w-0 flex-col justify-center text-left">
          {heading ? (
            <p
              className={cn(
                "font-['Alice:Regular',Georgia,serif] leading-tight tracking-[0.08em] text-[#c09038] uppercase transition-[font-size] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none",
                compact ? 'text-xl md:text-2xl' : 'text-xl sm:text-2xl md:text-3xl lg:text-[2.35rem]',
              )}
            >
              {heading}
            </p>
          ) : null}
          {tagline ? (
            <p
              className={cn(
                'mt-0.5 tracking-[0.12em] text-[#e8d5a8] uppercase transition-[font-size] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none',
                compact ? 'text-xs md:text-sm' : 'text-xs sm:text-sm md:text-base lg:text-lg',
              )}
            >
              {tagline}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
