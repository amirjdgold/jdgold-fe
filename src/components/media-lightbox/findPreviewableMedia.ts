import { canPreviewMedia } from '@/components/media-lightbox/canPreviewMedia';

const PREVIEW_MARK = '[data-media-preview="image"], [data-media-preview="video"]';
const LIGHTBOX = '[data-media-lightbox]';
const REAL_CONTROL = 'a[href], button, input, textarea, select, label';

export function isPreviewableMediaElement(
  el: EventTarget | null,
): el is HTMLImageElement | HTMLVideoElement {
  if (!el || typeof el !== 'object' || !('tagName' in el)) return false;
  const tag = String((el as Element).tagName).toUpperCase();
  if (tag !== 'IMG' && tag !== 'VIDEO') return false;
  const media = el as HTMLImageElement | HTMLVideoElement;
  if (media.dataset.placeholder === 'true' || media.dataset.preview === 'false') {
    return false;
  }
  const kind = media.dataset.mediaPreview;
  if (kind !== 'image' && kind !== 'video') return false;
  return canPreviewMedia(media.currentSrc || media.getAttribute('src'));
}

function exclusivePreviewableIn(el: Element | null) {
  if (!el) return null;
  if (isPreviewableMediaElement(el)) return el;
  const marked = el.querySelectorAll(PREVIEW_MARK);
  if (marked.length === 1 && isPreviewableMediaElement(marked[0])) {
    return marked[0];
  }
  return null;
}

/** Walk ancestors until a card with exactly one marked photo/video is found. */
export function findExclusivePreviewableNear(start: EventTarget | null) {
  if (!(start instanceof Element)) return null;
  let current: Element | null = start;
  for (let depth = 0; depth < 8 && current; depth++) {
    if (current.closest(LIGHTBOX)) return null;
    const found = exclusivePreviewableIn(current);
    if (found) return found;
    const marked = current.querySelectorAll(PREVIEW_MARK);
    if (marked.length > 1) return null;
    current = current.parentElement;
  }
  return null;
}

/** Prefer the topmost marked photo/video, including one sitting under a caption overlay. */
export function findPreviewableMediaAtPoint(x: number, y: number) {
  if (typeof document === 'undefined' || typeof document.elementsFromPoint !== 'function') {
    return null;
  }
  const stack = document.elementsFromPoint(x, y);
  for (const el of stack) {
    if (el instanceof HTMLElement && el.closest(LIGHTBOX)) {
      return null;
    }
    if (isPreviewableMediaElement(el)) return el;
    const nearby = findExclusivePreviewableNear(el);
    if (nearby) return nearby;
  }
  return null;
}

export function findPreviewableMediaFromEvent(event: MouseEvent) {
  const target = event.target;
  if (target instanceof Element) {
    if (target.closest(LIGHTBOX)) return null;
    const control = target.closest(REAL_CONTROL);
    // Keep tel/mailto/nav links working unless the photo itself was hit.
    if (control && !isPreviewableMediaElement(target)) {
      return null;
    }
  }
  if (isPreviewableMediaElement(target)) return target;
  const fromTarget = findExclusivePreviewableNear(target);
  if (fromTarget) return fromTarget;
  return findPreviewableMediaAtPoint(event.clientX, event.clientY);
}
