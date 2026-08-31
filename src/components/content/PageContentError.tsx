import { Link } from 'react-router-dom';
import SafeImage from '@/components/SafeImage';
import { cn } from '@/lib/utils';

type PageContentErrorProps = {
  message: string;
  onRetry?: () => void;
  className?: string;
};

/**
 * User-facing error panel for CMS content routes.
 * Shows friendly copy only — never raw API / database details.
 */
export default function PageContentError({
  message,
  onRetry,
  className,
}: PageContentErrorProps) {
  return (
    <div
      className={cn(
        'flex min-h-screen flex-col items-center justify-center gap-6 bg-[#0a0502] px-4 text-center',
        className,
      )}
      role="alert"
    >
      <SafeImage
        alt="Media unavailable"
        className="h-16 w-auto opacity-90"
      />
      <div className="max-w-md space-y-2">
        <h1 className="font-['Alice:Regular',Georgia,serif] text-xl tracking-[0.08em] text-[#c09038] uppercase md:text-2xl">
          Unable to load page
        </h1>
        <p className="text-sm leading-relaxed text-[#e5e5e5]/90">{message}</p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {onRetry ? (
          <button
            type="button"
            onClick={onRetry}
            className="rounded-sm border border-[#c09038] bg-[#c09038]/15 px-5 py-2 text-sm tracking-wide text-[#c09038] transition hover:bg-[#c09038]/25 hover:text-[#f0e2c0]"
          >
            Try again
          </button>
        ) : null}
        <Link
          to="/"
          className="rounded-sm border border-[#c09038]/40 px-5 py-2 text-sm tracking-wide text-[#e5e5e5]/90 transition hover:border-[#c09038] hover:text-[#c09038]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
