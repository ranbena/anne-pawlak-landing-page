'use client';

import { getPublicPath } from '@/src/utils';
import { Button, IconButton, Separator } from '@radix-ui/themes';
import clsx from 'clsx';
import { FacebookIcon, InstagramIcon } from 'lucide-react';
import React from 'react';
import styles from './footer.module.css';

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
              <FacebookIcon />
            </IconButton>
          </a>
          <a>
            <IconButton variant="ghost" size="2" color="gray" highContrast>
              <InstagramIcon />
            </IconButton>
          </a>
        </div>
        <div>
          <a href={getPublicPath('/#kontakt')}>
            <Button variant="ghost" color="gray" highContrast size="3">
              Kontakt
            </Button>
          </a>
          <Separator orientation="vertical" />
          <a href={getPublicPath('/#faq')}>
            <Button variant="ghost" color="gray" highContrast size="3">
              FAQ
            </Button>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
