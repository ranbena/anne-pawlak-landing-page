import { Button, Container, Flex, Text } from '@radix-ui/themes';
import Link from 'next/link';
import styles from './hero.module.css';

interface Props {}

const Hero: React.FC<Props> = () => {
  return (
    <Container size="4">
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
          <Link href="/zero-euro">
            <Button radius="full" size="4" className={styles.button}>
              Hier loslegen!
            </Button>
          </Link>
        </Flex>
        <div className={styles.image}>
          <img src="/headshot.jpeg" alt="Anne Pawlak" loading="lazy" />
        </div>
      </Flex>
    </Container>
  );
};

export default Hero;
