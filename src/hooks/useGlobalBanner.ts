import { useCallback, useEffect, useState } from 'react';
import { getBanner } from '@/lib/api';
import { toUserFacingError } from '@/lib/userFacingError';

export type BannerImage = {
  url: string;
  alt?: string;
  caption?: string;
  order?: number;
};

export type GlobalBannerDocument = {
  _id?: string;
  title: string;
  images: BannerImage[];
  imageAlt?: string;
  link?: string;
  order?: number;
  active?: boolean;
};

export type BannerSlide = {
  src: string;
  alt: string;
  href?: string;
};

/** Flatten active banner docs into ordered carousel slides. */
export function bannersToSlides(banners: GlobalBannerDocument[]): BannerSlide[] {
  const sorted = [...banners].sort(
    (a, b) => (a.order ?? 0) - (b.order ?? 0),
  );
  const slides: BannerSlide[] = [];

  for (const banner of sorted) {
    const images = Array.isArray(banner.images) ? [...banner.images] : [];
    images.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
    const fallbackAlt =
      banner.imageAlt?.trim() || banner.title?.trim() || 'JD Gold';
    const href = banner.link?.trim() || undefined;

    for (const image of images) {
      const src = typeof image?.url === 'string' ? image.url.trim() : '';
      if (!src) continue;
      slides.push({
        src,
        alt: image.alt?.trim() || fallbackAlt,
        href,
      });
    }
  }

  return slides;
}

export function useGlobalBanner() {
  const [slides, setSlides] = useState<BannerSlide[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  const retry = useCallback(() => {
    setRetryCount((n) => n + 1);
  }, []);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    getBanner()
      .then((docs) => {
        if (cancelled) return;
        setSlides(bannersToSlides(docs));
      })
      .catch((e: unknown) => {
        if (cancelled) return;
        setSlides([]);
        setError(
          toUserFacingError(
            e,
            'Unable to load the gallery banner right now.',
          ),
        );
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [retryCount]);

  return { slides, loading, error, retry };
}
