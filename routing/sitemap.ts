import { MetadataRoute } from 'next';
import { getRouteUrl } from './get-route-url';
import { Route } from './routes';

export const kSitemapRoutes: Partial<
  Record<Route['to'], MetadataRoute.Sitemap[number]>
> = {
  '/': {
    url: getRouteUrl({ to: '/' }, { absoluteUrl: true }),
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
  },
};
