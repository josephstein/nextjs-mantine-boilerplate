import { CONFIG } from '@/config';
import { MetadataRoute } from 'next';
import { Route } from './routes';

type Options = {
  absoluteUrl?: boolean;
};

export const getRouteUrl = (
  route: Route,
  { absoluteUrl = false }: Options = {}
) => {
  const url = (() => {
    if (!absoluteUrl) {
      return '';
    }

    return CONFIG.site.url;
  })();

  const { to, params } = route;
  let baseUrl = `${url}${to}`;

  // Handle dynamic routes with slugs
  if (to.includes(':')) {
    Object.entries(params ?? {}).forEach(([key, value]) => {
      baseUrl = baseUrl.replace(`:${key}`, value);
    });
    // Remove any remaining params from the URL
    const remainingParams: Record<string, string> = { ...params };
    Object.keys(params ?? {}).forEach((key) => {
      if (to.includes(`:${key}`)) {
        delete remainingParams[key];
      }
    });

    // Add remaining params to the URL
    if (Object.keys(remainingParams).length > 0) {
      return `${baseUrl}?${new URLSearchParams(remainingParams).toString()}`;
    }

    return baseUrl;
  }

  if (!params) {
    return baseUrl;
  }
  return `${baseUrl}?${new URLSearchParams(params).toString()}`;
};

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
