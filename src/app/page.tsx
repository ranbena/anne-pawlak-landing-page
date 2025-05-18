'use client';

import { Button, Section } from '@radix-ui/themes';
import ContactForm from '../components/ContactForm';
import Hero from '../components/Hero';
import Services from '../components/Services';
import { getPublicPath } from '../utils';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.root}>
      <Section>
        <Hero />
      </Section>
      <Section className={styles.services}>
        <h1>Womit kann ich DICH unterstützen?</h1>
        <Services />
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
      </Section>
      <Section id="kontakt">
        <h1 className="secondaryTitle">Kontakt</h1>
        <ContactForm />
      </Section>
    </div>
  );
}
