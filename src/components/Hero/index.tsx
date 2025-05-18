import { Button, Flex, Text } from '@radix-ui/themes';
import { getPublicPath } from '../../utils';
import styles from './hero.module.css';

interface Props {}

const Hero: React.FC<Props> = () => {
  return (
    <Flex
      direction={{
        initial: 'column',
        md: 'row',
      }}
      align="center"
      gap="4"
    >
      <Flex direction="column" gap="6">
        <h2 className={styles.heading}>
          Verwandle deine <span>Online-Präsenz</span> in ein Online Business.
        </h2>
        <Text className={styles.text}>
          Für Künstler, Designer und Creators.
          <br />
          Verwandel{' '}
          <span>
            '<strong>Likes und Follows</strong>'
          </span>{' '}
          zu{' '}
          <span>
            '<strong>Klicks und Verkäufe</strong>'
          </span>
        </Text>
        <a href={getPublicPath('/#loslegen')}>
          <Button radius="full" size="4" className={styles.button}>
            Hier loslegen!
          </Button>
        </a>
      </Flex>
      <div className={styles.image}>
        <img src={getPublicPath('/headshot.jpeg')} alt="Anne Pawlak" loading="lazy" />
      </div>
    </Flex>
  );
};

export default Hero;
