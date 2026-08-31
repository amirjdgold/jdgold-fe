import { useState, type ImgHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

/** The only bundled content-media fallback. Keep this asset deliberately tiny. */
export const DEFAULT_IMAGE_FALLBACK = '/images/media-fallback.svg';
/** @deprecated Use DEFAULT_IMAGE_FALLBACK. */
export const PRODUCT_IMAGE_FALLBACK = DEFAULT_IMAGE_FALLBACK;

type SafeImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  src?: string | null;
  /** Used when `src` is missing or the image fails to load. */
  fallbackSrc?: string;
  /**
   * When true and there is no usable `src` (or load failed), render nothing
   * instead of the fallback. Useful for optional decorative images (flags).
   */
  hideIfEmpty?: boolean;
};

/**
 * Image that never shows the browser's broken-image icon.
 * Missing or failed sources fall back to a tiny neutral local asset
 * (unless `hideIfEmpty` is set).
 */
export default function SafeImage({
  src,
  fallbackSrc = DEFAULT_IMAGE_FALLBACK,
  hideIfEmpty = false,
  alt = '',
  className,
  onError,
  ...rest
}: SafeImageProps) {
  const trimmed = typeof src === 'string' ? src.trim() : '';
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const failed = Boolean(trimmed) && failedSrc === trimmed;

  if ((!trimmed || failed) && hideIfEmpty) {
    return null;
  }

  const resolved = !trimmed || failed ? fallbackSrc : trimmed;

  return (
    <img
      {...rest}
      src={resolved}
      alt={alt}
      className={cn(className)}
      onError={(event) => {
        onError?.(event);
        if (resolved === fallbackSrc) {
          // Avoid infinite error loops if the fallback itself is missing.
          event.currentTarget.style.visibility = 'hidden';
          return;
        }
        setFailedSrc(trimmed);
      }}
    />
  );
}
