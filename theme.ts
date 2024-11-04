'use client';

import {
  createTheme,
  CSSVariablesResolver,
  Modal,
  virtualColor,
} from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'primary',
  defaultGradient: {
    from: 'violet',
    to: 'indigo',
  },

  primaryShade: 6,
  autoContrast: true,
  components: {
    Anchor: {
      styles: {
        root: {
          textDecoration: 'underline',
        },
      },
    },
    Badge: {
      styles: {
        label: {
          textTransform: 'none',
        },
      },
    },
    Modal: Modal.extend({
      styles: {
        title: {
          fontSize: 'var(--mantine-font-size-xl)',
          fontWeight: 'var(--mantine-h3-font-weight)',
        },
      },
      defaultProps: {
        padding: 'lg',
        overlayProps: {
          blur: 5,
          backgroundOpacity: 0.55,
        },
      },
    }),
  },
  colors: {
    black: [
      '#999999',
      '#7f7f7f',
      '#666666',
      '#4d4d4d',
      '#333333',
      '#262626',
      '#1a1a1a',
      '#0d0d0d',
      '#080808',
      '#000000',
    ],
    white: [
      '#ffffff',
      '#f2f2f2',
      '#e6e6e6',
      '#d9d9d9',
      '#cccccc',
      '#bfbfbf',
      '#b3b3b3',
      '#a6a6a6',
      '#999999',
      '#8c8c8c',
    ],
    primary: virtualColor({
      name: 'primary',
      dark: 'white',
      light: 'black',
    }),
  },
});

export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {},
  light: {
    '--mantine-color-body': theme.colors.white[0],
  },
  dark: {
    '--mantine-color-body': theme.colors.black[9],
  },
});
