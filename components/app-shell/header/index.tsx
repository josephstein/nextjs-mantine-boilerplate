import { getRouteUrl } from '@/routing/get-route-url';
import { Burger, Button, Container, Flex } from '@mantine/core';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

import { Logo } from '@/components/logo';
import { ColorSchemeButton } from '@/components/ui/color-scheme-button';
import { CONFIG } from '@/config';
import { NAVIGATION_LINKS } from '@/routing/navigation-links';
import classes from './index.module.css';

export type HeaderProps = {
  onToggle: () => void;
  opened: boolean;
};

export const Header = ({ opened, onToggle }: HeaderProps) => {
  const pathname = usePathname();

  return (
    <header className={classes.header}>
      <Container size="xl" h="100%" px="xs">
        <Flex justify="space-between" align="center" h="100%" gap="xs">
          <Flex align="center" gap={8}>
            <Burger
              opened={opened}
              onClick={onToggle}
              hiddenFrom={CONFIG.mobileBreakpoint}
            />
            <NextLink
              href={getRouteUrl({ to: '/' })}
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <Logo priority />
            </NextLink>
          </Flex>
          <Flex align="center">
            {NAVIGATION_LINKS.map((l) => (
              <Button
                key={l.title}
                variant="subtle"
                component={NextLink}
                href={getRouteUrl(l.route)}
                size="xs"
                data-active={pathname.startsWith(l.route.to) ? true : undefined}
              >
                {l.title}
              </Button>
            ))}
          </Flex>
          <Flex align="center">
            <ColorSchemeButton />
          </Flex>
        </Flex>
      </Container>
    </header>
  );
};
