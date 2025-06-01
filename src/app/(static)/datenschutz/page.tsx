import { Container } from '@radix-ui/themes';
import { Metadata } from 'next';
import Text from './_text.mdx';

export const metadata: Metadata = {
  robots: 'noindex',
  title: 'Datenschutz',
};

const Datenschutz = () => {
  return (
    <Container size="4">
      <h1>Datenschutz</h1>
      <Text />
    </Container>
  );
};

export default Datenschutz;
