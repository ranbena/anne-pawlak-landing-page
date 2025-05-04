import { Button, Flex, Heading, Text } from '@radix-ui/themes';
import styles from './page.module.css';

export default function Home() {
  return (
    <section className={styles.hero}>
      <Flex direction="row" gap="4">
        <Flex direction="column" gap="6">
          <Heading as="h2" className={styles.heroHeading}>
            Verwandle deine <span>Online-Präsenz</span> in ein Online Business.
          </Heading>
          <Text className={styles.heroText}>
            Für Künstler, Designer und Creators.
            <br />
            Verwandel <span>‘<strong>Likes und Follows</strong>’</span> zu <span>‘<strong>Klicks und Verkäufe</strong>‘</span>
          </Text>
          <Button asChild variant="solid" radius="full" size="4" className={styles.heroButton}>
            <a href="/#start">Hier loslegen!</a>
          </Button>
        </Flex>
        <div className={styles.heroImage}>
        
        </div>
        </Flex>
    </section>
  );
}
