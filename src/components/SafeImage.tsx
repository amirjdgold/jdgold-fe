import { useState, type ImgHTMLAttributes } from 'react';
import { DEFAULT_IMAGE_FALLBACK } from '@/lib/safeImageSrc';
import { cn } from '@/lib/utils';

const PLACEHOLDER_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Image coming soon"><rect width="800" height="600" fill="#100b02"/><rect x="24" y="24" width="752" height="552" rx="28" fill="none" stroke="#c09038" stroke-width="4"/><rect x="300" y="168" width="200" height="148" rx="18" fill="none" stroke="#c09038" stroke-width="6"/><circle cx="400" cy="242" r="28" fill="none" stroke="#c09038" stroke-width="6"/><path d="M348 168l18-22h68l18 22" fill="none" stroke="#c09038" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><text x="400" y="380" text-anchor="middle" fill="#c09038" font-family="Georgia, 'Times New Roman', serif" font-size="42">JD GOLD</text><text x="400" y="428" text-anchor="middle" fill="#e8d5a8" font-family="Arial, Helvetica, sans-serif" font-size="22">Image coming soon</text></svg>`;

export { DEFAULT_IMAGE_FALLBACK } from '@/lib/safeImageSrc';
/** Always-available last resort if the SVG file itself cannot load. */
export const INLINE_IMAGE_PLACEHOLDER =
  'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(PLACEHOLDER_SVG);
/** @deprecated Use DEFAULT_IMAGE_FALLBACK. */
export const PRODUCT_IMAGE_FALLBACK = DEFAULT_IMAGE_FALLBACK;

type SafeImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  src?: string | null;
  /** Used when `src` is missing or the image fails to load. */
  fallbackSrc?: string;
  /**
   * When true and there is no usable `src` (or load failed), render nothing
   * instead of the fallback. Used for optional decorative backgrounds.
   */
  hideIfEmpty?: boolean;
};

/**
 * Image that never shows the browser's broken-image icon.
 * Missing or failed CMS uploads fall back to the JD Gold placeholder
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

  const usingPlaceholder = !trimmed || failed;
  const resolved = usingPlaceholder ? fallbackSrc : trimmed;
  const placeholderAlt = alt?.trim() ? alt : 'Image coming soon';

  return (
    <img
      {...rest}
      src={resolved}
      alt={usingPlaceholder ? placeholderAlt : alt}
      data-placeholder={usingPlaceholder ? 'true' : undefined}
      className={cn('bg-[#100b02]', className)}
      onError={(event) => {
        onError?.(event);
        if (event.currentTarget.src === INLINE_IMAGE_PLACEHOLDER) {
          return;
        }
        if (usingPlaceholder || event.currentTarget.src.endsWith('media-fallback.svg')) {
          event.currentTarget.src = INLINE_IMAGE_PLACEHOLDER;
          return;
        }
        setFailedSrc(trimmed);
      }}
    />
  );
}
