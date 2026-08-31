import { useEffect, useMemo, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import SafeMedia from '@/components/SafeMedia';
import { useGlobalBanner, type BannerSlide } from '@/hooks/useGlobalBanner';
import { cn } from '@/lib/utils';

const AUTOPLAY_MS = 10000;
/** Side slides peek; center is dominant. Mobile uses a wider center so frames stay readable. */
const HERO_SIDE_BASIS =
  'basis-[16%] max-w-[16%] sm:basis-[13%] sm:max-w-[13%]';
const HERO_CENTER_BASIS =
  'basis-[48%] max-w-[48%] sm:basis-[34%] sm:max-w-[34%]';

type GlobalPageBannerProps = {
  /**
   * When true, render only the media strip (used inside the home Hero shell).
   * When false, wrap with page-level chrome below the site header/nav.
   */
  embedded?: boolean;
  className?: string;
};

function BannerCarousel({ slides }: { slides: BannerSlide[] }) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const autoplayPlugin = useMemo(
    () =>
      Autoplay({
        delay: AUTOPLAY_MS,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    [],
  );

  useEffect(() => {
    if (!carouselApi) return;
    const sync = () => setSelectedIndex(carouselApi.selectedScrollSnap());
    carouselApi.on('select', sync);
    sync();
    return () => {
      carouselApi.off('select', sync);
    };
  }, [carouselApi]);

  return (
    <div className="relative flex w-full min-w-0 flex-col items-stretch overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 flex w-full max-w-full -translate-x-1/2 items-center justify-center overflow-hidden"
        aria-hidden
      >
        <div className="h-40 w-[min(100%,36rem)] rounded-full bg-[#D4AF37]/15 blur-3xl sm:h-72 sm:w-full sm:max-w-4xl md:h-96" />
      </div>

      <div className="relative z-10 w-full min-w-0 overflow-hidden px-0 py-2 sm:px-2">
        <div className="relative mx-auto w-full min-w-0 max-w-[1512px] overflow-hidden">
          <Carousel
            opts={{ loop: true, align: 'center' }}
            plugins={[autoplayPlugin]}
            setApi={setCarouselApi}
            className="w-full min-w-0 overflow-hidden"
          >
            {/* Force both axes clipped — overflow-y:visible on the shared carousel breaks x clipping */}
            <div className="overflow-hidden">
              <CarouselContent className="-ml-0 items-center gap-1.5 !pl-0 sm:gap-2">
                {slides.map((slide, index) => {
                  const isCenter = index === selectedIndex;
                  const fitClass = isCenter
                    ? 'object-contain'
                    : 'object-cover object-center';
                  const media = (
                    <SafeMedia
                      src={slide.src}
                      kind={slide.kind}
                      alt={slide.alt}
                      posterSrc={slide.posterSrc}
                      className={cn(
                        'absolute inset-0 h-full w-full select-none',
                        fitClass,
                      )}
                      controls={slide.kind === 'video'}
                    />
                  );
                  return (
                    <CarouselItem
                      key={`${index}-${slide.src}`}
                      className={cn(
                        '!pl-0 min-w-0 shrink-0 transition-[flex-basis,max-width,transform] duration-300 ease-out',
                        isCenter ? HERO_CENTER_BASIS : HERO_SIDE_BASIS,
                      )}
                    >
                      <div
                        className={cn(
                          'relative w-full overflow-hidden rounded-lg border border-[#D4AF37] bg-black',
                          isCenter
                            ? 'h-[130px] shadow-[0_0_28px_rgba(212,175,55,0.4)] sm:h-[160px] sm:scale-[1.02]'
                            : 'h-[100px] opacity-95 sm:h-[130px]',
                        )}
                      >
                        {slide.href && slide.kind === 'image' ? (
                          <a
                            href={slide.href}
                            className="absolute inset-0 block"
                            aria-label={slide.alt}
                          >
                            {media}
                          </a>
                        ) : (
                          <>
                            {media}
                            {slide.href ? (
                              <a
                                href={slide.href}
                                className="absolute bottom-2 right-2 rounded bg-black/75 px-2 py-1 text-xs text-white underline"
                              >
                                Learn more
                              </a>
                            ) : null}
                          </>
                        )}
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </div>
          </Carousel>
          <div
            className="pointer-events-none absolute inset-0 rounded-lg opacity-40 mix-blend-screen shimmer"
            aria-hidden
          />
        </div>
      </div>
    </div>
  );
}

function BannerSkeleton() {
  return (
    <div
      className="relative w-full min-w-0 overflow-hidden px-0 py-2 sm:px-2"
      aria-hidden
    >
      <div className="mx-auto flex h-[130px] w-full max-w-[1512px] items-center justify-center gap-1.5 sm:h-[160px] sm:gap-2">
        <div className="h-[100px] w-[16%] shrink-0 animate-pulse rounded-lg border border-[#D4AF37]/40 bg-black/80 sm:h-[130px] sm:w-[13%]" />
        <div className="h-full w-[48%] shrink-0 animate-pulse rounded-lg border border-[#D4AF37]/60 bg-black/80 sm:w-[34%]" />
        <div className="h-[100px] w-[16%] shrink-0 animate-pulse rounded-lg border border-[#D4AF37]/40 bg-black/80 sm:h-[130px] sm:w-[13%]" />
      </div>
    </div>
  );
}

function BannerError({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-3 px-4 py-6">
      <p className="text-xs tracking-wide text-[#c09038]/90 md:text-sm">
        Gallery could not be loaded.
      </p>
      <button
        type="button"
        onClick={onRetry}
        className="rounded-sm border border-[#c09038]/60 px-3 py-1 text-xs tracking-wide text-[#c09038] transition hover:bg-[#c09038]/15"
      >
        Retry
      </button>
    </div>
  );
}

/**
 * Site-wide top horizontal banner / gallery.
 * Visual treatment matches the existing home Hero media strip.
 * Data: GET /api/banner
 */
export default function GlobalPageBanner({
  embedded = false,
  className,
}: GlobalPageBannerProps) {
  const { slides, loading, error, retry } = useGlobalBanner();

  // Empty success → hide entirely (no empty boxes).
  if (!loading && !error && slides.length === 0) {
    return null;
  }

  const strip = loading ? (
    <BannerSkeleton />
  ) : error ? (
    <BannerError onRetry={retry} />
  ) : (
    <BannerCarousel slides={slides} />
  );

  if (embedded) {
    return (
      <div
        className={cn('w-full min-w-0 overflow-hidden', className)}
        role="region"
        aria-label="JD Gold gallery banner"
        aria-busy={loading || undefined}
      >
        {strip}
      </div>
    );
  }

  return (
    <div
      className={cn(
        'w-full min-w-0 overflow-hidden border-b border-[#D4AF37]/40 bg-[#0A0A0A]',
        className,
      )}
      role="region"
      aria-label="JD Gold gallery banner"
      aria-busy={loading || undefined}
    >
      <div className="container-custom min-w-0 overflow-hidden pb-1 pt-0">{strip}</div>
    </div>
  );
}
