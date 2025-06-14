import { Button, Container } from '@radix-ui/themes';
import { InstagramIcon, MessagesSquareIcon, ShoppingCartIcon } from 'lucide-react';
import Link from 'next/link';
import BecomeVisibleOnSocialContent from './become-visible-on-social.mdx';
import GrowOnSocialContent from './growing-on-social.mdx';
import SellOnSocialContent from './sell-on-social.mdx';
import styles from './services.module.css';

const Services: React.FC = () => {
  return (
    <Container size="4" className={styles.root}>
      <h1>Womit kann ich DICH unterstützen?</h1>
      <div className={styles.services}>
        <div className={styles.service}>
          <h4>
            <InstagramIcon size={24} />
            SICHTBAR WERDEN AUF SOCIAL
          </h4>
          <BecomeVisibleOnSocialContent />
        </div>
        <div className={styles.service}>
          <h4>
            <ShoppingCartIcon size={30} />
            VERKAUFEN AUF SOCIAL
          </h4>
          <SellOnSocialContent />
        </div>
        <div className={styles.service}>
          <h4>
            <MessagesSquareIcon size={34} />
            WACHSEN AUF SOCIAL
          </h4>
          <GrowOnSocialContent />
        </div>
        <img src="/services-phone.png" alt="Phone screenshot" width={280} height={549} />
      </div>
      <h1>Dann bist du hier richtig!</h1>
      <p>
        Ich kreier Content für Social Media & Landingpages, die verkaufen, und helfe dir bei der
        Funnel-Umsetzung – ohne, Rumraten oder Rumtanzen.
      </p>
      <Link href="/zero-euro">
        <Button size="4" radius="full">
          Starte für 0 €
        </Button>
      </Link>
    </Container>
  );
};

export default Services;
