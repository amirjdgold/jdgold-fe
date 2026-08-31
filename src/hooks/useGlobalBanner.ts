import { useCallback, useEffect, useState } from 'react';
import { getBanner } from '@/lib/api';
import { toUserFacingError } from '@/lib/userFacingError';

const RETRY_DELAYS_MS = [500, 1000, 2000, 4000, 8000, 15000];

export type BannerMedia = {
  url?: string;
  src?: string;
  alt?: string;
  caption?: string;
  order?: number;
  type?: 'image' | 'video' | string;
  mediaType?: 'image' | 'video' | string;
  mimeType?: string;
  poster?: string;
  posterUrl?: string;
};

export type GlobalBannerDocument = {
  _id?: string;
  title: string;
  /** Legacy image-only field. */
  images?: BannerMedia[];
  /** Current polymorphic media field. */
  media?: BannerMedia[];
  /** Accepted during migration from separate Mongo arrays. */
  videos?: BannerMedia[];
  imageAlt?: string;
  link?: string;
  order?: number;
  active?: boolean;
};

export type BannerSlide = {
  src: string;
  alt: string;
  href?: string;
  kind: 'image' | 'video';
  posterSrc?: string;
};

function inferMediaKind(media: BannerMedia, src: string): 'image' | 'video' {
  const declared = media.mediaType || media.type || media.mimeType || '';
  if (/video/i.test(declared)) return 'video';
  if (/image/i.test(declared)) return 'image';
  return /\.(mp4|webm|ogg|mov|m4v)(?:[?#]|$)/i.test(src) ? 'video' : 'image';
}

/** Flatten active banner docs into ordered, image/video carousel slides. */
export function bannersToSlides(banners: GlobalBannerDocument[]): BannerSlide[] {
  const sorted = banners.filter((banner) => banner.active !== false).sort(
    (a, b) => (a.order ?? 0) - (b.order ?? 0),
  );
  const slides: BannerSlide[] = [];

  for (const banner of sorted) {
    const media = [
      ...(Array.isArray(banner.media) ? banner.media : []),
      ...(Array.isArray(banner.images) ? banner.images : []),
      ...(Array.isArray(banner.videos) ? banner.videos : []),
    ].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
    const fallbackAlt =
      banner.imageAlt?.trim() || banner.title?.trim() || 'JD Gold';
    const href = banner.link?.trim() || undefined;

    for (const item of media) {
      const rawSrc = item?.url ?? item?.src;
      const src = typeof rawSrc === 'string' ? rawSrc.trim() : '';
      if (!src) continue;
      slides.push({
        src,
        alt: item.alt?.trim() || fallbackAlt,
        href,
        kind: inferMediaKind(item, src),
        posterSrc: (item.posterUrl || item.poster)?.trim() || undefined,
      });
    }
  }

  return slides;
}

export function useGlobalBanner() {
  const [retryCount, setRetryCount] = useState(0);
  const [result, setResult] = useState<{
    requestId: number;
    status: 'loading' | 'success' | 'error';
    slides: BannerSlide[];
    error: string | null;
  }>({
    requestId: 0,
    status: 'loading',
    slides: [],
    error: null,
  });

  const retry = useCallback(() => {
    setRetryCount((n) => n + 1);
  }, []);

  useEffect(() => {
    let cancelled = false;
    let retryTimer: ReturnType<typeof setTimeout> | undefined;

    const load = async (attempt = 0) => {
      try {
        const docs = await getBanner();
        if (cancelled) return;
        setResult({
          requestId: retryCount,
          status: 'success',
          slides: bannersToSlides(docs),
          error: null,
        });
      } catch (e: unknown) {
        if (cancelled) return;
        const delay = RETRY_DELAYS_MS[attempt];
        if (delay !== undefined) {
          retryTimer = setTimeout(() => void load(attempt + 1), delay);
          return;
        }

        setResult({
          requestId: retryCount,
          status: 'error',
          slides: [],
          error: toUserFacingError(
            e,
            'Unable to load the gallery banner right now.',
          ),
        });
      }
    };

    void load();

    return () => {
      cancelled = true;
      if (retryTimer) clearTimeout(retryTimer);
    };
  }, [retryCount]);

  const isCurrentRequest = result.requestId === retryCount;

  return {
    slides: isCurrentRequest ? result.slides : [],
    loading: !isCurrentRequest || result.status === 'loading',
    error: isCurrentRequest ? result.error : null,
    retry,
  };
}
