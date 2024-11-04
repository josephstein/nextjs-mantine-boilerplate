'use client';

import { CONFIG } from '@/config';
import { AppShell as MantineAppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ReactNode } from 'react';
import { Header } from './header';
import { Navbar } from './navbar';

export const AppShell = ({ children }: { children: ReactNode }) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineAppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: CONFIG.mobileBreakpoint,
        collapsed: { mobile: !opened, desktop: true },
      }}
      styles={() => ({
        header: {
          overflow: 'hidden',
        },
        main: {
          paddingLeft: 0,
          paddingRight: 0,
        },
      })}
    >
      <MantineAppShell.Header>
        <Header opened={opened} onToggle={toggle} />
      </MantineAppShell.Header>
      <MantineAppShell.Navbar px="md">
        <Navbar onClick={toggle} />
      </MantineAppShell.Navbar>
      <MantineAppShell.Main>{children}</MantineAppShell.Main>
    </MantineAppShell>
  );
};
