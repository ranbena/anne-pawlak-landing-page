import { Button, IconButton, Separator } from '@radix-ui/themes';
import clsx from 'clsx';
import { InstagramIcon } from 'lucide-react';
import Link from 'next/link';
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
          <a href="https://www.instagram.com/thisisannepawlak/" target="_blank">
            <IconButton variant="ghost" size="2" color="gray" highContrast>
              <InstagramIcon className={clsx(styles.icon, styles.instagramIcon)} />
            </IconButton>
          </a>
          <a>
            <IconButton variant="ghost" size="2" color="gray" highContrast disabled>
              <PinterestIcon className={styles.icon} />
            </IconButton>
          </a>
        </div>
        <div>
          <Link href="/impressum">
            <Button variant="ghost" color="gray" highContrast size="3">
              Impressum
            </Button>
          </Link>
          <Separator orientation="vertical" />
          <Link href="/datenschutz">
            <Button variant="ghost" color="gray" highContrast size="3">
              Datenschutzerklärung
            </Button>
          </Link>
          <Separator orientation="vertical" />
          <Link href="/agb">
            <Button variant="ghost" color="gray" highContrast size="3">
              AGB
            </Button>
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
