'use client';

import { Button, Heading, IconButton, VisuallyHidden } from '@radix-ui/themes';
import clsx from 'clsx';
import { MenuIcon } from 'lucide-react';
import React, { useState } from 'react';
import { getPublicPath } from '../../utils';
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from '../Drawer';
import styles from './header.module.css';

interface Props {
  className?: string;
}

const Header: React.FC<Props> = ({ className }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className={clsx(styles.root, className)}>
      <Heading as="h1" className={styles.logo}>
        <img src={getPublicPath('/logo.png')} alt="Cooking Content" />
      </Heading>
      <nav className={styles.desktop}>
        <div>
          <a href="/#about">
            <Button variant="ghost" size="4" color="gray" highContrast radius="full">
              About
            </Button>
          </a>
          <a href="/#angebot">
            <Button variant="ghost" size="4" color="gray" highContrast radius="full">
              Angebot
            </Button>
          </a>
          <a href="/#kontakt">
            <Button variant="ghost" size="4" color="gray" highContrast radius="full">
              Kontakt
            </Button>
          </a>
          <a href="/#loslegen">
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
          <DrawerContent className={styles.mobileMenu}>
            <VisuallyHidden>
              <DrawerTitle>Mobile Menu</DrawerTitle>
            </VisuallyHidden>
            <div className={styles.mobileMenuItems}>
              <div className={styles.mobileMenuTitle}>Cooking Content</div>
              <a href="/#about" onClick={() => setOpen(false)}>
                About
              </a>
              <a href="/#angebot" onClick={() => setOpen(false)}>
                Angebot
              </a>
              <a href="/#kontakt" onClick={() => setOpen(false)}>
                Kontakt
              </a>
              <a href="/#loslegen" onClick={() => setOpen(false)}>
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
