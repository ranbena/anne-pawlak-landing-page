'use client';

import { Flex, Section } from '@radix-ui/themes';
import ContactForm from '../components/ContactForm';
import Hero from '../components/Hero';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.root}>
      <Section>
        <Hero />
      </Section>
      <Section>
        <Flex direction="column" gap="4">
          <h1 id="kontakt">Kontakt</h1>
          <ContactForm />
        </Flex>
      </Section>
    </div>
  );
}
