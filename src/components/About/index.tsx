import { getPublicPath } from '@/src/utils/getPublicPath';
import { Button } from '@radix-ui/themes';
import styles from './about.module.css';
import Text from './text.mdx';

const About: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.img}>
        <img src={getPublicPath('/anne-portrait.jpeg')} alt="Anne Pawlak" loading="lazy" />
        <Button radius="full" size="4" className={styles.btn}>
          Zusammenarbeit anfragen
        </Button>
      </div>
      <div className={styles.txt}>
        <Text />
        <img src={getPublicPath('/anne-landscape.jpeg')} alt="Anne Pawlak" loading="lazy" />
        <Button radius="full" size="4" className={styles.btn}>
          Zusammenarbeit anfragen
        </Button>
      </div>
    </div>
  );
};

export default About;
