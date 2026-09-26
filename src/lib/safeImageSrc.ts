/** Local asset used as the first missing-image fallback. */
export const DEFAULT_IMAGE_FALLBACK = '/images/media-fallback.svg';

/** Resolve a CMS image URL to a displayable src, using the branded placeholder when empty. */
export function resolveSafeImageSrc(
  src?: string | null,
  fallbackSrc: string = DEFAULT_IMAGE_FALLBACK,
): string {
  const trimmed = typeof src === 'string' ? src.trim() : '';
  return trimmed || fallbackSrc;
}
