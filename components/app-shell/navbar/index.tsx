import { getRouteUrl } from '@/routing/get-route-url';
import { NAVIGATION_LINKS } from '@/routing/navigation-links';
import {
  Box,
  List,
  MantineSize,
  ScrollArea,
  Text,
  TextProps,
} from '@mantine/core';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

const LinkText = ({
  children,
  href,
  active,
  onClick,
  fz = 24,
  ...textProps
}: TextProps & {
  children: React.ReactNode;
  href?: string;
  active?: boolean;
  fz?: MantineSize | number | undefined;
  onClick?: () => void;
}) => {
  if (href) {
    return (
      <Text
        component={NextLink}
        href={href}
        fz={fz}
        fw={600}
        py={4}
        display="block"
        c={active ? 'indigo' : 'var(--mantine-color-text)'}
        onClick={onClick}
        {...textProps}
      >
        {children}
      </Text>
    );
  }

  return (
    <Text
      fz={fz}
      fw={600}
      py={4}
      display="block"
      c={active ? 'indigo' : 'var(--mantine-color-text)'}
      onClick={onClick}
      {...textProps}
    >
      {children}
    </Text>
  );
};

export const Navbar = ({ onClick }: { onClick: () => void }) => {
  const pathname = usePathname();

  return (
    <ScrollArea>
      {NAVIGATION_LINKS.map(({ title, links }) => (
        <Box key={title}>
          <Text fw="bold" c="gray.5">
            {title}
          </Text>

          <List listStyleType="none">
            {links.map(({ label, route }) => (
              <List.Item key={label}>
                <LinkText
                  href={getRouteUrl(route)}
                  active={pathname === getRouteUrl(route)}
                  onClick={onClick}
                >
                  {label}
                </LinkText>
              </List.Item>
            ))}
          </List>
        </Box>
      ))}
    </ScrollArea>
  );
};
