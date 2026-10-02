/** Real CMS photos/videos can open the lightbox; placeholders and empty src cannot. */
export function canPreviewMedia(
  src?: string | null,
  usingPlaceholder = false,
): boolean {
  if (usingPlaceholder) return false;
  const trimmed = typeof src === 'string' ? src.trim() : '';
  if (!trimmed) return false;
  if (trimmed.startsWith('data:image/svg+xml')) return false;
  if (trimmed.endsWith('media-fallback.svg')) return false;
  return true;
}
