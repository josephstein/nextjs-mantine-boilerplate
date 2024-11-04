import { CONFIG } from '@/config';
import { BoxProps, Flex } from '@mantine/core';
import classes from './index.module.css';

import NextImage from 'next/image';

type LogoProps = BoxProps & {
  priority?: boolean;
  width?: number;
  height?: number;
};

export const Logo = ({
  priority,
  width = 138,
  height = 23,
  ...flexProps
}: LogoProps) => (
  <Flex align="center" {...flexProps}>
    <NextImage
      className={classes.light}
      src="/logo-light.png"
      width={width}
      height={height}
      alt={`${CONFIG.site.name}`}
      priority={priority}
    />
    <NextImage
      className={classes.dark}
      src="/logo-dark.png"
      width={width}
      height={height}
      alt={`${CONFIG.site.name}`}
      priority={priority}
    />
  </Flex>
);
