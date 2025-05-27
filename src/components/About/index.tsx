import { getPublicPath } from '@/src/utils/getPublicPath';
import { Button, Container } from '@radix-ui/themes';
import styles from './about.module.css';
import Text from './text.mdx';

const About: React.FC = () => {
  return (
    <div className={styles.root}>
      <Container size="4" className={styles.container}>
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
      </Container>
      <div
        className={styles.blob}
        style={{ backgroundImage: `url(${getPublicPath('/bg_blob_contact.webp')})` }}
      />
    </div>
  );
};

export default About;
