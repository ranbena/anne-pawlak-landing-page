import { Container, Section } from '@radix-ui/themes';
import { Metadata } from 'next';
import Text from './_text.mdx';

export const metadata: Metadata = {
  robots: 'noindex',
  title: 'Impressum',
};

const Impressum = () => {
  return (
    <Section>
      <Container size="4">
        <h1>Impressum</h1>
        <Text />
      </Container>
    </Section>
  );
};

export default Impressum;
