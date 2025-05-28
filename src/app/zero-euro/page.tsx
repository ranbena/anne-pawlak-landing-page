import { Container, Section } from '@radix-ui/themes';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zero Euro',
};

const ZeroEuro = () => {
  return (
    <Section>
      <Container size="4">
        <h1>Zero Euro</h1>
      </Container>
    </Section>
  );
};

export default ZeroEuro;
