import { Container, Section } from '@radix-ui/themes';
import Text from './_text.mdx';

interface Props {}

const Impressum: React.FC<Props> = () => {
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
