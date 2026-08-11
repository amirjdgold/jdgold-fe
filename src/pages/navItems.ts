export type NavItem = { to: string; label: string };

/** Single source of truth for the site's primary navigation. */
export const NAV_ITEMS: NavItem[] = [
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Product & Services' },
  { to: '/management', label: 'Management Gallery' },
  { to: '/factory', label: 'Factory & Refinery' },
  { to: '/license', label: 'License & Office' },
  { to: '/sales', label: 'Sales & Purchase' },
  { to: '/contact', label: 'Contact Us' },
];
