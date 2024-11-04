/** Remember to update the Sitemap if applicable */
export type Route =
  | { to: '/'; params?: never }
  | { to: '/docs'; params?: never }
  | { to: '/docs/install-nextjs'; params?: never }
  | { to: '/docs/install-mantine'; params?: never }
  | { to: '/docs/cli'; params?: never }
  | { to: '/blocks'; params?: never }
  | { to: '/blocks/hero'; params?: never }
  | { to: '/blocks/footer'; params?: never }
  | { to: '/components'; params?: never }
  | { to: '/components/color-scheme-button'; params?: never }
  | { to: '/components/timeline'; params?: never }
  | { to: '/signup'; params?: { variantId?: string } };
