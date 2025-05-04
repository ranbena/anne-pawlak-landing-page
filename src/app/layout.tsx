import { Button, Container, Heading, Theme } from '@radix-ui/themes';
import type { Metadata } from 'next';
import styles from './layout.module.css';

import { Fraunces } from 'next/font/google';

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
});


import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Anne Pawlak',
  description: 'Verwandle deine Online-Präsenz in ein Online Business',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
          :root {
            --fraunces: ${fraunces.style.fontFamily};
          }
        `}</style>
      </head>
      <body>
        <Theme accentColor="red" grayColor="gray">
          <Container size="4" className={styles.container}>
            <div className={styles.blob} />
            <header className={styles.header}>
              <nav>
                <Button asChild variant="ghost" size="4" color="gray" highContrast>
                  <a href="/#about">About</a>
                </Button>
                <Button asChild variant="ghost" size="4" color="gray" highContrast>
                  <a href="/#offer">Angebot</a>
                </Button>
                <Button asChild variant="ghost" size="4" color="gray" highContrast>
                  <a href="/#work-with-me">Arbeite mit mir</a>
                </Button>
                <Button asChild variant="solid" radius="full" size="4">
                  <a href="/#start">Für 0 € loslegen</a>
                </Button>
              </nav>
            </header>
            <Heading as="h1" className={styles.logo}></Heading>
            {children}
          </Container>
        </Theme>
      </body>
    </html>
  );
}
