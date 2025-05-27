import type { Metadata } from 'next';

import Footer from '@/src/components/Footer';
import { Theme } from '@radix-ui/themes';
import { Fraunces } from 'next/font/google';
import styles from './layout.module.css';

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
        <Theme accentColor="red" grayColor="gray" className={styles.root}>
          <main>{children}</main>
          <Footer />
          <Theme accentColor="gray">
            <div id="dialog-portal" />
          </Theme>
        </Theme>
      </body>
    </html>
  );
}
