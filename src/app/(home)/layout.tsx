import Header from '@/src/components/Header';
import type { Metadata } from 'next';
import styles from './layout.module.css';

export const metadata: Metadata = {
  title: 'Anne Pawlak',
  description: 'Verwandle deine Online-Präsenz in ein Online Business',
};

export default function HomepageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className={styles.topBlob} />
      {children}
    </>
  );
}
