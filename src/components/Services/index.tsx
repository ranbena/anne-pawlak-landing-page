import { getPublicPath } from '@/src/utils';
import { InstagramIcon, MessagesSquareIcon, ShoppingCartIcon } from 'lucide-react';
import BecomeVisibleOnSocialContent from './become-visible-on-social.mdx';
import GrowOnSocialContent from './growing-on-social.mdx';
import SellOnSocialContent from './sell-on-social.mdx';
import styles from './services.module.css';

const Services: React.FC = () => {
  return (
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
  );
};

export default Services;
