import { describe, expect, it } from 'vitest';
import { padCmsSlots } from '@/lib/cmsSlots';
import { GOLD_PRODUCTS_COUNT, resolveGoldProductsSection } from '@/figma-home/goldProductsSection';
import { GALLERY_SLOT_COUNTS, resolveHomeRightGallery } from '@/figma-home/homeRightGallery';

describe('padCmsSlots', () => {
  it('keeps later empty slots so the layout does not collapse', () => {
    const padded = padCmsSlots([{ image: '/a.jpg' }], 3, () => ({ image: '' }));
    expect(padded).toEqual([{ image: '/a.jpg' }, { image: '' }, { image: '' }]);
  });
});

describe('home product and gallery slots', () => {
  it('always renders the full gold products row', () => {
    const resolved = resolveGoldProductsSection({
      heading: 'Products',
      products: [{ label: 'Bars', image: '' }],
    });
    expect(resolved.products).toHaveLength(GOLD_PRODUCTS_COUNT);
    expect(resolved.products[0].label).toBe('Bars');
    expect(resolved.products[1].image).toBe('');
  });

  it('keeps home right-gallery rows even without uploads', () => {
    const gallery = resolveHomeRightGallery({
      staff: { title: 'Staff', slots: [{ image: '', alt: 'Pending' }] },
    });
    expect(gallery.staff.slots).toHaveLength(GALLERY_SLOT_COUNTS.staff);
    expect(gallery.staff.slots[0].alt).toBe('Pending');
    expect(gallery.licenseOffice.slots).toHaveLength(GALLERY_SLOT_COUNTS.licenseOffice);
  });
});
