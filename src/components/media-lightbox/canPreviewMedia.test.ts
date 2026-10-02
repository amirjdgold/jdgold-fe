import { describe, expect, it } from 'vitest';
import { canPreviewMedia } from '@/components/media-lightbox/canPreviewMedia';

describe('canPreviewMedia', () => {
  it('allows a real CMS image or video src', () => {
    expect(canPreviewMedia('/images/product-gold-nuggets.png')).toBe(true);
    expect(canPreviewMedia('https://cdn.example.com/clip.mp4')).toBe(true);
  });

  it('rejects empty, placeholder, and fallback sources', () => {
    expect(canPreviewMedia('')).toBe(false);
    expect(canPreviewMedia('   ')).toBe(false);
    expect(canPreviewMedia(null)).toBe(false);
    expect(canPreviewMedia('/images/ok.png', true)).toBe(false);
    expect(canPreviewMedia('/images/media-fallback.svg')).toBe(false);
    expect(canPreviewMedia('data:image/svg+xml;charset=utf-8,x')).toBe(false);
  });
});
