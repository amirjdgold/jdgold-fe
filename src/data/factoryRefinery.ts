export type FactoryCard = {
  title: string;
  subtitle?: string;
  image: string;
  description: string;
};

export const REFINERY_STEPS: FactoryCard[] = [
  {
    title: '1. PROCESSING RAW GOLD',
    subtitle: '(FROM MINING, SCRAP, OR JEWELRY)',
    image: '/assets/jd-gold/refinery-1.png',
    description:
      'We process raw gold from mines, scrap, and used jewelry. All materials are carefully sorted, weighed, and prepared for refining.',
  },
  {
    title: '2. PURIFICATION TO HIGH PURITY',
    subtitle: '(E.G., 99.99%)',
    image: '/assets/jd-gold/refinery-2.png',
    description:
      'Using advanced refining technology, we remove impurities and other metals to achieve a purity level of up to 99.99%.',
  },
  {
    title: '3. ASSAYING AND TESTING',
    image: '/assets/jd-gold/refinery-3.png',
    description:
      'Every batch is assayed and tested in our in-house laboratory for purity and quality assurance using latest testing equipment.',
  },
  {
    title: '4. RECOVERY OF PRECIOUS METALS',
    image: '/assets/jd-gold/refinery-4.png',
    description:
      'We ensure maximum recovery of gold and other precious metals with minimum wastage, following environmentally responsible processes.',
  },
];

export const FACTORY_STEPS: FactoryCard[] = [
  {
    title: '1. GOLD BAR PRODUCTION',
    image: '/assets/jd-gold/factory-1.png',
    description:
      'We produce a wide range of gold bars in different weights and purities with international standards.',
  },
  {
    title: '2. JEWELRY MANUFACTURING',
    subtitle: '(IF APPLICABLE)',
    image: '/assets/jd-gold/factory-2.png',
    description:
      'Our skilled artisans design and manufacture beautiful gold jewelry with perfection and precision.',
  },
  {
    title: '3. CUSTOM GOLD PRODUCTS',
    image: '/assets/jd-gold/factory-3.png',
    description:
      'We create custom-made gold products as per client requirements with unique designs and branding.',
  },
  {
    title: '4. CASTING & MOLDING',
    image: '/assets/jd-gold/factory-4.png',
    description:
      'Using modern casting and molding techniques, we ensure accurate shapes and superior quality.',
  },
  {
    title: '5. FINISHING & POLISHING',
    image: '/assets/jd-gold/factory-5.png',
    description:
      'Every piece is finely polished and inspected to ensure a perfect finish and lasting shine.',
  },
];

export const FACTORY_PRODUCTS: FactoryCard[] = [
  {
    title: 'GOLD BARS',
    subtitle: '(BULLION)',
    image: '/assets/jd-gold/product-bars.png',
    description: 'Available in various weights from 1g to 1kg with 99.99% purity.',
  },
  {
    title: 'GOLD GRAINS',
    image: '/assets/jd-gold/product-grains.png',
    description:
      'High purity gold grains suitable for refining, manufacturing and investment.',
  },
  {
    title: 'JEWELRY',
    image: '/assets/jd-gold/product-jewelry.png',
    description:
      'Wide range of gold jewelry designed with elegance and crafted to perfection.',
  },
  {
    title: 'CUSTOM-MADE GOLD ITEMS',
    image: '/assets/jd-gold/product-custom.png',
    description:
      'Custom designs including coins, medallions, corporate gifts and special orders.',
  },
];

export const FACTORY_SERVICES: FactoryCard[] = [
  {
    title: '1. GOLD REFINING',
    image: '/assets/jd-gold/service-1.png',
    description:
      'Professional refining of raw gold to 99.99% purity using advanced technology.',
  },
  {
    title: '2. SMELTING',
    image: '/assets/jd-gold/service-2.png',
    description:
      'High temperature smelting for efficient extraction and separation of metals.',
  },
  {
    title: '3. ASSAYING (PURITY TESTING)',
    image: '/assets/jd-gold/service-3.png',
    description: 'Accurate purity testing and hallmarking with certified equipment.',
  },
  {
    title: '4. CUSTOM MANUFACTURING',
    image: '/assets/jd-gold/service-4.png',
    description:
      'We manufacture custom gold products as per your unique requirements.',
  },
  {
    title: '5. SECURE STORAGE / LOGISTICS',
    image: '/assets/jd-gold/service-5.png',
    description: 'Safe, insured and secure storage with reliable global logistics.',
  },
];

export const FACTORY_TRUST_POINTS = [
  { value: '99.99%', label: 'PURE GOLD' },
  { value: 'INTERNATIONAL', label: 'QUALITY STANDARD' },
  { value: 'TRUSTED BY CLIENTS', label: 'WORLDWIDE' },
  { value: 'SECURE & RELIABLE', label: 'OPERATIONS' },
  { value: 'EXCELLENCE IN', label: 'EVERY STEP' },
] as const;
