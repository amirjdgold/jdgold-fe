import { cn } from '@/lib/utils';

function Bar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-sm bg-[#c09038]/15',
        className,
      )}
    />
  );
}

/**
 * Full-page loading skeleton for CMS content routes.
 * Black / gold, minimal — does not mimic specific page layouts.
 */
export default function PageContentLoader({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'gold-void flex min-h-screen flex-col text-[#c09038]',
        className,
      )}
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label="Loading page"
    >
      {/* Header chrome */}
      <div className="border-b border-[#c09038]/30 bg-[#0a0502]/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <Bar className="h-9 w-24 md:h-10 md:w-28" />
          <div className="hidden gap-4 sm:flex">
            <Bar className="h-3 w-14" />
            <Bar className="h-3 w-16" />
            <Bar className="h-3 w-12" />
            <Bar className="h-3 w-20" />
          </div>
        </div>
      </div>

      {/* Banner strip placeholder */}
      <div className="border-b border-[#D4AF37]/40 bg-[#0A0A0A]">
        <div className="mx-auto flex h-[150px] max-w-[1512px] items-center justify-center gap-2 px-2 py-2 sm:h-[160px]">
          <div className="h-[120px] w-[13%] shrink-0 animate-pulse rounded-lg border border-[#D4AF37]/30 bg-black/80 sm:h-[130px]" />
          <div className="h-full w-[34%] shrink-0 animate-pulse rounded-lg border border-[#D4AF37]/50 bg-black/80" />
          <div className="h-[120px] w-[13%] shrink-0 animate-pulse rounded-lg border border-[#D4AF37]/30 bg-black/80 sm:h-[130px]" />
        </div>
      </div>

      {/* Hero block */}
      <div className="mx-auto grid w-full max-w-6xl flex-1 items-start gap-8 px-4 py-10 md:grid-cols-[1.15fr_0.95fr] md:gap-10 md:px-6 md:py-14">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <Bar className="h-20 w-20 rounded-full md:h-24 md:w-24" />
          <Bar className="h-4 w-32" />
          <Bar className="mt-4 h-8 w-48 md:w-64" />
          <Bar className="h-3 w-full max-w-md" />
          <Bar className="h-3 w-full max-w-sm" />
          <Bar className="h-3 w-full max-w-xs" />
        </div>
        <div className="hidden md:block">
          <div className="aspect-[3/4] min-h-[320px] animate-pulse rounded-sm border border-[#c09038]/40 bg-[#120a04]" />
        </div>
      </div>

      <p className="sr-only">Loading…</p>
    </div>
  );
}
