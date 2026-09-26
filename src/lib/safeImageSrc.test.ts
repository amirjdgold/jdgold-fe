import { describe, expect, it } from 'vitest';
import { DEFAULT_IMAGE_FALLBACK, resolveSafeImageSrc } from '@/lib/safeImageSrc';

describe('resolveSafeImageSrc', () => {
  it('keeps a real CMS upload path', () => {
    expect(resolveSafeImageSrc('/uploads/cms/portrait.webp')).toBe(
      '/uploads/cms/portrait.webp',
    );
  });

  it('uses the branded placeholder when the CMS image is missing', () => {
    expect(resolveSafeImageSrc('')).toBe(DEFAULT_IMAGE_FALLBACK);
    expect(resolveSafeImageSrc('   ')).toBe(DEFAULT_IMAGE_FALLBACK);
    expect(resolveSafeImageSrc(null)).toBe(DEFAULT_IMAGE_FALLBACK);
    expect(resolveSafeImageSrc(undefined)).toBe(DEFAULT_IMAGE_FALLBACK);
  });
});
