export type NavItem = { to: string; label: string; disabled?: boolean };

/** Header / primary site navigation (4 links). */
export const NAV_ITEMS: NavItem[] = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/factories-and-refinery', label: 'Factory & Refinery' },
  { to: '/license-and-offices', label: 'License & Offices' },
];

/** Full side navigation on the home screen. */
export const HOME_NAV_ITEMS: NavItem[] = [
  { to: '/about', label: 'About Us' },
  { to: '/factories-and-refinery', label: 'Product & Services' },
  { to: '/management', label: 'Management Gallery', disabled: true },
  { to: '/factories-and-refinery', label: 'Factory & Refinery', disabled: true },
  { to: '/license-and-offices', label: 'License & Office' },
  { to: '/sales', label: 'Sales & Purchase', disabled: true },
  { to: '/contact', label: 'Contact Us', disabled: true },
];
