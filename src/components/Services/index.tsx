import { getPublicPath } from '@/src/utils/getPublicPath';
import { Button } from '@radix-ui/themes';
import { InstagramIcon, MessagesSquareIcon, ShoppingCartIcon } from 'lucide-react';
import BecomeVisibleOnSocialContent from './become-visible-on-social.mdx';
import GrowOnSocialContent from './growing-on-social.mdx';
import SellOnSocialContent from './sell-on-social.mdx';
import styles from './services.module.css';

const Services: React.FC = () => {
  return (
    <>
      <h1>Womit kann ich DICH unterstützen?</h1>
      <div className={styles.root}>
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
        <img
          src={getPublicPath('/services-phone.png')}
          alt="Phone screenshot"
          width={280}
          height={549}
        />
      </div>
      <h1>Dann bist du hier richtig!</h1>
      <p>
        Ich kreier Content für Social Media & Landingpages, die verkaufen, und helfe dir bei der
        Funnel-Umsetzung – ohne, Rumraten oder Rumtanzen.
      </p>
      <a href={getPublicPath('/#loslegen')}>
        <Button size="4" radius="full">
          Starte für 0 €
        </Button>
      </a>
    </>
  );
};

export default Services;
