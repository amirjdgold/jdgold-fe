import { useEffect, useState, useRef, useMemo } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import type { HeroBranding, HeroSlide } from '@/hooks/useSiteContent';
import { cn } from '@/lib/utils';

const DEFAULT_HERO_SLIDES: HeroSlide[] = [
  { type: 'video' as const, src: '/videos/hero-1.mp4' },
  { type: 'video' as const, src: '/videos/hero-2.mp4' },
  { type: 'video' as const, src: '/videos/hero-3.mp4' },
  {
    type: 'image' as const,
    src: '/images/hero-slide-gold-bar-hand.png',
    alt: 'JD Gold branded gold bar',
  },
  {
    type: 'image' as const,
    src: '/images/hero-slide-company-wealth.png',
    alt: 'JD Gold — company wealth',
  },
  {
    type: 'image' as const,
    src: '/images/hero-slide-pricing.png',
    alt: 'JD Gold pricing and market leadership',
  },
  {
    type: 'image' as const,
    src: '/images/about-refinery-portrait.png',
    alt: 'JD Gold refinery representative portrait',
  },
  {
    type: 'image' as const,
    src: '/images/hero-slide-whatsapp-01.png',
    alt: 'JD Gold one kilo fine gold bar',
  },
  {
    type: 'image' as const,
    src: '/images/hero-slide-whatsapp-02.png',
    alt: 'JD Gold meeting at waterfront location',
  },
  {
    type: 'image' as const,
    src: '/images/hero-slide-whatsapp-03.png',
    alt: 'JD Gold jewelry production trays',
  },
  {
    type: 'image' as const,
    src: '/images/hero-slide-whatsapp-04.png',
    alt: 'JD Gold bracelet inventory display',
  },
  {
    type: 'image' as const,
    src: '/images/hero-slide-whatsapp-05.png',
    alt: 'JD Gold pendant collection tray',
  },
  {
    type: 'image' as const,
    src: '/images/hero-slide-whatsapp-06.png',
    alt: 'JD Gold engraved pendant assortment',
  },
  {
    type: 'image' as const,
    src: '/images/hero-slide-whatsapp-07.png',
    alt: 'JD Gold chain bundles in production tray',
  },
  {
    type: 'image' as const,
    src: '/images/hero-slide-whatsapp-08.png',
    alt: 'JD Gold machining workshop floor',
  },
  {
    type: 'image',
    src: '/images/hero-slide-whatsapp-09.png',
    alt: 'Gold granules and analyzer device',
  },
];

function isValidSlide(s: unknown): s is HeroSlide {
  if (!s || typeof s !== 'object') return false;
  const o = s as Record<string, unknown>;
  if (o.type === 'video')
    return typeof o.src === 'string' && o.src.length > 0;
  if (o.type === 'image')
    return (
      typeof o.src === 'string' &&
      o.src.length > 0 &&
      typeof o.alt === 'string'
    );
  return false;
}

function resolveHeroSlides(
  prop: HeroSlide[] | null | undefined,
  logoSrc: string,
  logoAlt: string
): HeroSlide[] {
  const logoPlaceholder: HeroSlide[] = [
    { type: 'image', src: logoSrc, alt: logoAlt },
  ];
  if (prop == null) {
    return DEFAULT_HERO_SLIDES;
  }
  if (prop.length === 0) {
    return logoPlaceholder;
  }
  const valid = prop.filter(isValidSlide);
  if (valid.length === 0) {
    return logoPlaceholder;
  }
  return valid;
}

const DEFAULT_BRANDING: HeroBranding = {
  logoSrc: '/images/jd-gold-logo.png',
  logoAlt: 'JD Gold',
  title: 'JD GOLD',
  subtitle: 'Refinery & Jewelry Factory',
};

function normalizeBranding(
  prop: Partial<HeroBranding> | null | undefined
): HeroBranding {
  if (!prop) return DEFAULT_BRANDING;
  const logoSrc = prop.logoSrc?.trim();
  const title = prop.title?.trim();
  const subtitle = prop.subtitle?.trim();
  if (!logoSrc || !title || !subtitle) return DEFAULT_BRANDING;
  return {
    logoSrc,
    logoAlt: prop.logoAlt?.trim() || DEFAULT_BRANDING.logoAlt,
    title,
    subtitle,
  };
}

const AUTOPLAY_MS = 10000;

const HERO_SIDE_BASIS = 'basis-[13%] max-w-[13%]';
const HERO_CENTER_BASIS = 'basis-[34%] max-w-[34%]';
const HERO_MOBILE_PIC_MEDIA = '(max-width: 639px)';

/** 1px horizontal gold gradient rule below the hero logo. */
function HeroGoldLine({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'h-px w-full shrink-0 bg-gradient-to-r from-[#C09038] via-[#975E00] to-[#C09038]',
        className,
      )}
      aria-hidden
    />
  );
}

type HeroProps = {
  slides?: HeroSlide[] | null;
  branding?: Partial<HeroBranding> | null;
};

const Hero = ({ slides: slidesProp, branding: brandingProp }: HeroProps) => {
  const branding = useMemo(
    () => normalizeBranding(brandingProp),
    [brandingProp]
  );
  const slides = useMemo(
    () =>
      resolveHeroSlides(
        slidesProp,
        branding.logoSrc,
        branding.logoAlt || DEFAULT_BRANDING.logoAlt || 'JD Gold'
      ),
    [slidesProp, branding.logoSrc, branding.logoAlt]
  );
  const fixedTopRef = useRef<HTMLDivElement>(null);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const autoplayPlugin = useMemo(
    () =>
      Autoplay({
        delay: AUTOPLAY_MS,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    []
  );

  useEffect(() => {
    if (!carouselApi) return;

    const syncMedia = () => {
      const i = carouselApi.selectedScrollSnap();
      setSelectedIndex(i);
      slides.forEach((slide, idx) => {
        if (slide.type !== 'video') return;
        const vid = videoRefs.current[idx];
        if (!vid) return;
        if (idx === i) {
          vid.currentTime = 0;
          void vid.play().catch(() => {});
        } else {
          vid.pause();
          vid.currentTime = 0;
        }
      });
    };

    carouselApi.on('select', syncMedia);
    syncMedia();
    return () => {
      carouselApi.off('select', syncMedia);
    };
  }, [carouselApi, slides]);

  useEffect(() => {
    const el = fixedTopRef.current;
    if (!el) return;
    const update = () => {
      const h = Math.ceil(el.getBoundingClientRect().height);
      document.documentElement.style.setProperty('--home-sticky-h', `${h}px`);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener('resize', update);
    window.addEventListener('orientationchange', update);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', update);
      window.removeEventListener('orientationchange', update);
      document.documentElement.style.removeProperty('--home-sticky-h');
    };
  }, []);

  return (
    <>
      <div
        ref={fixedTopRef}
        className="fixed top-0 left-0 right-0 z-40 border-b border-[#D4AF37]/40 bg-[#0A0A0A] pt-[max(0.25rem,env(safe-area-inset-top))] shadow-[0_12px_40px_rgba(0,0,0,0.55)]"
        role="banner"
        aria-label="JD Gold header and media strip"
      >
        <div className="container-custom pb-1 pt-0">
          <div className="flex h-11 w-full items-center justify-center px-3 py-0.5 sm:h-12">
            <img
              src={branding.logoSrc}
              alt={
                branding.logoAlt ||
                branding.title ||
                DEFAULT_BRANDING.logoAlt
              }
              className="mx-auto h-full w-auto max-w-[min(100%,220px)] object-contain object-center sm:max-w-[260px]"
            />
          </div>

          <HeroGoldLine />

          <div className="relative flex w-full flex-col items-stretch">
            <div
              className="pointer-events-none absolute bottom-0 left-1/2 flex w-full -translate-x-1/2 items-center justify-center"
              aria-hidden
            >
              <div className="h-72 w-full max-w-4xl rounded-full bg-[#D4AF37]/15 blur-3xl md:h-96" />
            </div>

            <div className="relative z-10 w-full px-0 py-2 sm:px-2">
              <div className="relative mx-auto w-full max-w-[1512px]">
                <Carousel
                  opts={{ loop: true, align: 'center' }}
                  plugins={[autoplayPlugin]}
                  setApi={setCarouselApi}
                  className="w-full"
                >
                  <CarouselContent className="-ml-0 gap-2 items-center !pl-0">
                    {slides.map((slide, index) => {
                      const isCenter = index === selectedIndex;
                      const imageSrc =
                        slide.type === 'image'
                          ? !isCenter && slide.thumbSrc
                            ? slide.thumbSrc
                            : slide.src
                          : '';
                      const imageFitClass =
                        slide.type === 'image' && (isCenter || !!slide.thumbSrc)
                          ? 'object-contain'
                          : slide.type === 'image'
                            ? 'object-cover object-center'
                            : '';
                      const imgBaseClass =
                        'absolute inset-0 h-full w-full select-none';
                      return (
                        <CarouselItem
                          key={`${index}-${slide.type}-${slide.src}-${slide.type === 'image' ? [slide.thumbSrc, slide.thumbSrcSm, slide.srcSm].join('|') : ''}`}
                          className={cn(
                            '!pl-0 min-w-0 shrink-0 transition-[flex-basis,max-width,transform] duration-300 ease-out',
                            isCenter ? HERO_CENTER_BASIS : HERO_SIDE_BASIS
                          )}
                        >
                          <div
                            className={cn(
                              'relative w-full rounded-lg border border-[#D4AF37] bg-black',
                              isCenter
                                ? 'overflow-visible h-[150px] scale-[1.02] shadow-[0_0_28px_rgba(212,175,55,0.4)] sm:h-[160px]'
                                : 'overflow-hidden h-[120px] opacity-95 sm:h-[130px]'
                            )}
                          >
                            {slide.type === 'image' ? (
                              isCenter && slide.srcSm ? (
                                <picture className="absolute inset-0 block h-full w-full">
                                  <source
                                    media={HERO_MOBILE_PIC_MEDIA}
                                    srcSet={slide.srcSm}
                                  />
                                  <img
                                    src={slide.src}
                                    alt={slide.alt}
                                    className={cn(imgBaseClass, 'object-contain')}
                                  />
                                </picture>
                              ) : !isCenter &&
                                slide.thumbSrc &&
                                slide.thumbSrcSm ? (
                                <picture className="absolute inset-0 block h-full w-full">
                                  <source
                                    media={HERO_MOBILE_PIC_MEDIA}
                                    srcSet={slide.thumbSrcSm}
                                  />
                                  <img
                                    src={slide.thumbSrc}
                                    alt={slide.alt}
                                    className={cn(imgBaseClass, 'object-contain')}
                                  />
                                </picture>
                              ) : (
                                <img
                                  src={imageSrc}
                                  alt={slide.alt}
                                  className={cn(imgBaseClass, imageFitClass)}
                                />
                              )
                            ) : (
                              <video
                                ref={(el) => {
                                  videoRefs.current[index] = el;
                                }}
                                src={slide.src}
                                muted
                                playsInline
                                preload="metadata"
                                className={cn(
                                  'absolute inset-0 z-10 h-full w-full',
                                  isCenter
                                    ? 'object-contain'
                                    : 'object-cover object-center'
                                )}
                              />
                            )}
                          </div>
                        </CarouselItem>
                      );
                    })}
                  </CarouselContent>
                </Carousel>
                <div
                  className="pointer-events-none absolute inset-0 rounded-lg opacity-40 mix-blend-screen shimmer"
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none w-full shrink-0"
        style={{ height: 'var(--home-sticky-h, 280px)' }}
      />
    </>
  );
};

export default Hero;
