import { useState, type ImgHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export const DEFAULT_IMAGE_FALLBACK = '/images/jd-gold-logo.png';
export const PRODUCT_IMAGE_FALLBACK = '/images/product-cast-gold-bars.png';

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
 * Missing or failed sources fall back to a local JD Gold asset
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
  const [failed, setFailed] = useState(false);

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
        setFailed(true);
      }}
    />
  );
}
