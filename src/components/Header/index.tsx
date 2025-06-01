'use client';

import { useIsIOS } from '@/src/utils/isIOS';
import { Button, Container, Heading, IconButton } from '@radix-ui/themes';
import clsx from 'clsx';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useCallback, useState } from 'react';
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from '../Drawer';
import styles from './header.module.css';

interface Props {
  className?: string;
}

const Header: React.FC<Props> = ({ className }) => {
  const [open, setOpen] = useState(false);
  const isIOS = useIsIOS();

  // or else the menu button regains focus, causing the window to scroll up to it
  const onCloseAutoFocus = useCallback((e: Event) => {
    e.preventDefault();
  }, []);

  return (
    <header className={clsx(styles.root, className)}>
      <Container size="4">
        <Heading as="h1" className={styles.logo}>
          <img src="/logo.png" alt="Cooking Content" loading="lazy" />
        </Heading>
      </Container>
      <nav className={styles.desktop}>
        <Container size="4" className={styles.desktopContainer}>
          <div>
            <Link href="/#about">
              <Button variant="ghost" size="4" color="gray" highContrast radius="full">
                About
              </Button>
            </Link>
            <Link href="/#angebot">
              <Button variant="ghost" size="4" color="gray" highContrast radius="full">
                Angebot
              </Button>
            </Link>
            <Link href="/#kontakt">
              <Button variant="ghost" size="4" color="gray" highContrast radius="full">
                Kontakt
              </Button>
            </Link>
            <Link href="/zero-euro">
              <Button radius="full" size="4">
                Für 0 € loslegen
              </Button>
            </Link>
          </div>
        </Container>
      </nav>
      <nav className={styles.mobile}>
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <IconButton
              variant="ghost"
              size="4"
              highContrast
              radius="full"
              className={clsx(styles.mobileMenuTrigger, { [styles.ios]: isIOS })}
            >
              <MenuIcon size={44} />
            </IconButton>
          </DrawerTrigger>
          <DrawerContent className={styles.mobileMenu} onCloseAutoFocus={onCloseAutoFocus}>
            <div className={styles.mobileMenuItems}>
              <DrawerTitle className={styles.mobileMenuTitle}>Cooking Content</DrawerTitle>
              <Link href="/#about" onClick={() => setOpen(false)}>
                About
              </Link>
              <Link href="/#angebot" onClick={() => setOpen(false)}>
                Angebot
              </Link>
              <Link href="/#kontakt" onClick={() => setOpen(false)}>
                Kontakt
              </Link>
              <Link href="/zero-euro" onClick={() => setOpen(false)}>
                <Button radius="full" size="4" color="red">
                  Für 0 € loslegen
                </Button>
              </Link>
            </div>
          </DrawerContent>
        </Drawer>
      </nav>
    </header>
  );
};

export default Header;
