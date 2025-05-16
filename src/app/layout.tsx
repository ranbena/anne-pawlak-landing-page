import type { Metadata } from 'next';

import { Fraunces } from 'next/font/google';

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
});

import '../styles/globals.css';
import { getPublicPath } from '../utils';
import ClientLayout from './_clientLayout';

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
            --bg_blob: url(${getPublicPath('/bg_blob.png')});
          }
        `}</style>
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
