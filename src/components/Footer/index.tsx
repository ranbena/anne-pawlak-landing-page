'use client';

import { getPublicPath } from '@/src/utils';
import { Button, IconButton, Separator } from '@radix-ui/themes';
import clsx from 'clsx';
import { InstagramIcon } from 'lucide-react';
import React from 'react';
import styles from './footer.module.css';
import PinterestIcon from './pinterest-icon';

interface Props {
  className?: string;
}

const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={clsx(styles.root, className)}>
      <nav>
        <div>
          <a>
            <IconButton variant="ghost" size="2" color="gray" highContrast>
              <InstagramIcon className={clsx(styles.icon, styles.instagramIcon)} />
            </IconButton>
          </a>
          <a>
            <IconButton variant="ghost" size="2" color="gray" highContrast>
              <PinterestIcon className={styles.icon} />
            </IconButton>
          </a>
        </div>
        <div>
          <a href={getPublicPath('/#impressum')}>
            <Button variant="ghost" color="gray" highContrast size="3">
              Impressum
            </Button>
          </a>
          <Separator orientation="vertical" />
          <a href={getPublicPath('/#datenschutz')}>
            <Button variant="ghost" color="gray" highContrast size="3">
              Datenschutzerklärung
            </Button>
          </a>
          <Separator orientation="vertical" />
          <a href={getPublicPath('/#agb')}>
            <Button variant="ghost" color="gray" highContrast size="3">
              AGB
            </Button>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
