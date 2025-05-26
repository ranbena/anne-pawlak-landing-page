'use client';

import { Section } from '@radix-ui/themes';
import About from '../../components/About';
import BoosterGuide from '../../components/BoosterGuide';
import ContactForm from '../../components/ContactForm';
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.root}>
      <Section>
        <Hero />
      </Section>
      <Section className={styles.services}>
        <Services />
      </Section>
      <Section className={styles.about} id="about">
        <About />
      </Section>
      <Section className={styles.boosterGuide}>
        <BoosterGuide />
      </Section>
      <Section id="kontakt">
        <ContactForm />
      </Section>
    </div>
  );
}
