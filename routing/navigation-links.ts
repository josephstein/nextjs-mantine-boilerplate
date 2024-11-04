import { Route } from './routes';

type NavigationLink = {
  route: Route;
  label: string;
};

type NavigationLinkGroup = {
  title: string;
  route: Route;
  links: NavigationLink[];
};

export const NAVIGATION_LINKS: NavigationLinkGroup[] = [
  {
    title: 'Docs',
    route: { to: '/docs' },
    links: [
      {
        route: { to: '/docs/install-nextjs' },
        label: 'Install Next.js',
      },
      {
        route: { to: '/docs/install-mantine' },
        label: 'Install Mantine',
      },
      {
        route: { to: '/docs/cli' },
        label: 'CLI',
      },
    ],
  },
  {
    title: 'Components',
    route: { to: '/components' },
    links: [
      {
        route: { to: '/components/timeline' },
        label: 'Timeline',
      },
      {
        route: { to: '/components/color-scheme-button' },
        label: 'Color Scheme Button',
      },
    ],
  },
  {
    title: 'Blocks',
    route: { to: '/blocks' },
    links: [
      {
        route: { to: '/blocks/hero' },
        label: 'Hero',
      },
      {
        route: { to: '/blocks/footer' },
        label: 'Footer',
      },
    ],
  },
];
