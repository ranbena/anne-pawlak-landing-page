'use client';

import { getPublicPath } from '@/src/utils';
import { Button, Heading, IconButton } from '@radix-ui/themes';
import clsx from 'clsx';
import { MenuIcon } from 'lucide-react';
import React, { useCallback, useState } from 'react';
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from '../Drawer';
import styles from './header.module.css';

interface Props {
  className?: string;
}

const Header: React.FC<Props> = ({ className }) => {
  const [open, setOpen] = useState(false);

  // or else the menu button regains focus, causing the window to scroll up to it
  const onCloseAutoFocus = useCallback((e: Event) => {
    e.preventDefault();
  }, []);

  return (
    <header className={clsx(styles.root, className)}>
      <Heading as="h1" className={styles.logo}>
        <img src={getPublicPath('/logo.png')} alt="Cooking Content" />
      </Heading>
      <nav className={styles.desktop}>
        <div>
          <a href={getPublicPath('/#about')}>
            <Button variant="ghost" size="4" color="gray" highContrast radius="full">
              About
            </Button>
          </a>
          <a href={getPublicPath('/#angebot')}>
            <Button variant="ghost" size="4" color="gray" highContrast radius="full">
              Angebot
            </Button>
          </a>
          <a href={getPublicPath('/#kontakt')}>
            <Button variant="ghost" size="4" color="gray" highContrast radius="full">
              Kontakt
            </Button>
          </a>
          <a href={getPublicPath('/#loslegen')}>
            <Button variant="solid" radius="full" size="4">
              Für 0 € loslegen
            </Button>
          </a>
        </div>
      </nav>
      <nav className={styles.mobile}>
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <IconButton variant="ghost" size="4" highContrast radius="full">
              <MenuIcon size={44} />
            </IconButton>
          </DrawerTrigger>
          <DrawerContent className={styles.mobileMenu} onCloseAutoFocus={onCloseAutoFocus}>
            <div className={styles.mobileMenuItems}>
              <DrawerTitle className={styles.mobileMenuTitle}>Cooking Content</DrawerTitle>
              <a href={getPublicPath('/#about')} onClick={() => setOpen(false)}>
                About
              </a>
              <a href={getPublicPath('/#angebot')} onClick={() => setOpen(false)}>
                Angebot
              </a>
              <a href={getPublicPath('/#kontakt')} onClick={() => setOpen(false)}>
                Kontakt
              </a>
              <a href={getPublicPath('/#loslegen')} onClick={() => setOpen(false)}>
                <Button variant="solid" radius="full" size="4" color="red">
                  Für 0 € loslegen
                </Button>
              </a>
            </div>
          </DrawerContent>
        </Drawer>
      </nav>
    </header>
  );
};

export default Header;
