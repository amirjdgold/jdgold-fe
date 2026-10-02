import { describe, expect, it } from 'vitest';
import { isPreviewableMediaElement } from '@/components/media-lightbox/findPreviewableMedia';

function image(attrs: Record<string, string>) {
  return {
    tagName: 'IMG',
    dataset: {
      placeholder: attrs['data-placeholder'],
      preview: attrs['data-preview'],
      mediaPreview: attrs['data-media-preview'],
    },
    currentSrc: '',
    getAttribute: (name: string) => (name === 'src' ? attrs.src ?? null : null),
  } as unknown as EventTarget;
}

describe('isPreviewableMediaElement', () => {
  it('accepts a marked content photo', () => {
    expect(
      isPreviewableMediaElement(
        image({
          src: '/images/product-gold-nuggets.png',
          'data-media-preview': 'image',
        }),
      ),
    ).toBe(true);
  });

  it('rejects logos, placeholders, and unmarked images', () => {
    expect(
      isPreviewableMediaElement(
        image({ src: '/images/jd-gold-logo.png', 'data-preview': 'false' }),
      ),
    ).toBe(false);
    expect(
      isPreviewableMediaElement(
        image({
          src: '/images/x.png',
          'data-placeholder': 'true',
          'data-media-preview': 'image',
        }),
      ),
    ).toBe(false);
    expect(isPreviewableMediaElement(image({ src: '/images/x.png' }))).toBe(false);
  });
});
