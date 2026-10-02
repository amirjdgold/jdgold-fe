import { useId } from 'react';
import SafeImage from '@/components/SafeImage';
import { padCmsSlots } from '@/lib/cmsSlots';
import type { GoldProductsSection } from '@/hooks/useSiteContent';
import svgPaths from './svg-paths';

export const GOLD_PRODUCTS_COUNT = 6;

const DEFAULTS: GoldProductsSection = {
  heading: 'Our Gold Products',
  products: [],
};

export function resolveGoldProductsSection(cms?: GoldProductsSection | null): GoldProductsSection {
  const raw = (cms || {}) as Partial<GoldProductsSection>;
  const products = padCmsSlots(raw.products, GOLD_PRODUCTS_COUNT, () => ({
    label: '',
    image: '',
    imageAlt: '',
  }));
  return {
    heading: (raw.heading || '').trim() || DEFAULTS.heading,
    products: products.map((p) => ({
      label: (p.label || '').trim(),
      image: (p.image || '').trim(),
      imageAlt: (p.imageAlt || '').trim() || undefined,
    })),
  };
}

function ProductsHeading({ title }: { title: string }) {
  const uid = useId().replace(/:/g, '');
  return (
    <div className="relative flex w-full shrink-0 content-stretch items-center justify-center gap-[12px]">
      <div className="relative h-0 min-w-px flex-[1_0_0]">
        <div className="absolute inset-[-5.77px_-0.98%_-5.77px_0]">
          <svg className="block size-full" fill="none" viewBox="0 0 596.273 11.547">
            <path d={svgPaths.p1be7cff0} fill={`url(#gp-${uid}-a)`} />
            <defs>
              <linearGradient
                id={`gp-${uid}-a`}
                gradientUnits="userSpaceOnUse"
                x1="0"
                x2="590.5"
                y1="6.7735"
                y2="6.7735"
              >
                <stop stopColor="#C09038" />
                <stop offset="0.5" stopColor="#975E00" />
                <stop offset="1" stopColor="#C09038" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <p className="relative shrink-0 whitespace-nowrap font-['Alice:Regular',sans-serif] text-[32px] leading-[normal] not-italic text-[#c09038]">
        {title}
      </p>
      <div className="relative h-0 min-w-px flex-[1_0_0]">
        <div className="absolute inset-[-5.77px_0_-5.77px_-0.98%]">
          <svg className="block size-full" fill="none" viewBox="0 0 596.273 11.547">
            <path d={svgPaths.p1962d900} fill={`url(#gp-${uid}-b)`} />
            <defs>
              <linearGradient
                id={`gp-${uid}-b`}
                gradientUnits="userSpaceOnUse"
                x1="5.7735"
                x2="596.274"
                y1="7.2735"
                y2="7.2735"
              >
                <stop stopColor="#C09038" />
                <stop offset="0.5" stopColor="#975E00" />
                <stop offset="1" stopColor="#C09038" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function ProductCard({
  label,
  image,
  imageAlt,
}: {
  label: string;
  image: string;
  imageAlt?: string;
}) {
  return (
    <div className="flex min-w-px flex-[1_0_0] flex-row items-center self-stretch">
      <div className="relative aspect-[5/4] min-w-px flex-[1_0_0] rounded-[16px]">
        <SafeImage
          alt={imageAlt || label}
          className="absolute inset-0 size-full max-w-none rounded-[16px] object-cover object-center"
          src={image}
        />
        <div className="pointer-events-none flex size-full flex-col justify-end overflow-clip rounded-[inherit]">
          <div className="relative flex size-full flex-col items-start justify-end pt-[140px]">
            <div className="relative w-full shrink-0 bg-[rgba(0,0,0,0.7)]">
              <div className="flex size-full flex-col items-center justify-center overflow-clip rounded-[inherit] px-[12px] py-[8px]">
                <p className="w-full text-center font-['Alice:Regular',sans-serif] text-[24px] leading-[normal] not-italic text-[#c09038]">
                  {label}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[16px] border-2 border-solid border-[#c09038]"
        />
      </div>
    </div>
  );
}

export function GoldProductsSectionView({ content }: { content?: GoldProductsSection | null }) {
  const data = resolveGoldProductsSection(content);

  return (
    <div className="relative w-full shrink-0">
      <div className="size-full overflow-clip rounded-[inherit]">
        <div className="relative flex size-full flex-col items-start gap-[12px] bg-black px-[20px] py-[10px]">
          <ProductsHeading title={data.heading} />
          <div className="relative flex w-full shrink-0 items-stretch gap-[12px]">
            {data.products.map((product, i) => (
              <ProductCard
                key={i}
                label={product.label}
                image={product.image}
                imageAlt={product.imageAlt}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
