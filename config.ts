import { MantineSize } from '@mantine/core';
import { isDevelopment } from './utils/is-development';

export const CONFIG: {
  site: {
    url: string;
    name: string;
  };
  mobileBreakpoint: MantineSize;
} = {
  site: {
    url: isDevelopment ? 'http://localhost:3000' : 'https://www.titanium.dev',
    name: 'Titanium',
  },
  mobileBreakpoint: 'xs',
} as const;
