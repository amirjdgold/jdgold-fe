import { describe, expect, it } from 'vitest';
import { resolveCmsAssetUrl, rewriteUploadUrls } from '@/lib/api';

describe('CMS asset URL handling', () => {
  it('normalizes managed upload paths and preserves external URLs', () => {
    expect(resolveCmsAssetUrl(' uploads/banner.jpg ')).toMatch(
      /\/uploads\/banner\.jpg$/,
    );
    expect(resolveCmsAssetUrl('https://cdn.example.com/banner.jpg')).toBe(
      'https://cdn.example.com/banner.jpg',
    );
    expect(resolveCmsAssetUrl('data:image/png;base64,abc')).toBe(
      'data:image/png;base64,abc',
    );
  });

  it('rewrites nested upload values without changing regular content', () => {
    const result = rewriteUploadUrls({
      title: 'uploads are managed',
      media: [{ url: '/uploads/a.jpg' }, { poster: 'uploads/a-poster.jpg' }],
    });

    expect(result.title).toBe('uploads are managed');
    expect(result.media[0].url).toMatch(/\/uploads\/a\.jpg$/);
    expect(result.media[1].poster).toMatch(/\/uploads\/a-poster\.jpg$/);
  });
});
