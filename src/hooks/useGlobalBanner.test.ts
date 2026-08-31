import { describe, expect, it } from 'vitest';
import { bannersToSlides } from '@/hooks/useGlobalBanner';

describe('bannersToSlides', () => {
  it('maps legacy images and current image/video media in order', () => {
    const slides = bannersToSlides([
      {
        title: 'Campaign',
        order: 2,
        link: ' https://example.com ',
        images: [{ url: '/uploads/legacy.jpg', order: 3 }],
        media: [
          {
            url: '/uploads/launch.mp4?version=2',
            type: 'video',
            alt: 'Launch film',
            posterUrl: '/uploads/poster.jpg',
            order: 1,
          },
          { src: '/uploads/detail.webp', mimeType: 'image/webp', order: 2 },
        ],
      },
    ]);

    expect(slides).toEqual([
      {
        src: '/uploads/launch.mp4?version=2',
        alt: 'Launch film',
        href: 'https://example.com',
        kind: 'video',
        posterSrc: '/uploads/poster.jpg',
      },
      {
        src: '/uploads/detail.webp',
        alt: 'Campaign',
        href: 'https://example.com',
        kind: 'image',
        posterSrc: undefined,
      },
      {
        src: '/uploads/legacy.jpg',
        alt: 'Campaign',
        href: 'https://example.com',
        kind: 'image',
        posterSrc: undefined,
      },
    ]);
  });

  it('infers video extensions and ignores inactive or empty records', () => {
    expect(
      bannersToSlides([
        { title: 'Inactive', active: false, images: [{ url: '/hidden.jpg' }] },
        {
          title: 'Visible',
          imageAlt: 'Banner fallback',
          videos: [{ src: 'https://cdn.example.com/banner.webm#clip' }, { url: ' ' }],
        },
      ]),
    ).toEqual([
      {
        src: 'https://cdn.example.com/banner.webm#clip',
        alt: 'Banner fallback',
        href: undefined,
        kind: 'video',
        posterSrc: undefined,
      },
    ]);
  });
});
