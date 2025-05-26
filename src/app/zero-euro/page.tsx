'use client';

import { Container, Section } from '@radix-ui/themes';

interface Props {}

const Impressum: React.FC<Props> = () => {
  return (
    <Section>
      <Container size="4">
        <h1>Zero Euro</h1>
      </Container>
    </Section>
  );
};

export default Impressum;
