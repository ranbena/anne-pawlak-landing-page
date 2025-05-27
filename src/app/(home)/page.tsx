import About from '@/src/components/About';
import BoosterGuide from '@/src/components/BoosterGuide';
import ContactForm from '@/src/components/ContactForm';
import Hero from '@/src/components/Hero';
import Services from '@/src/components/Services';
import { Section } from '@radix-ui/themes';
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
