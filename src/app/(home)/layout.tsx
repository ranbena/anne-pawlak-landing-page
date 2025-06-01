import Header from '@/src/components/Header';
import type { Metadata } from 'next';
import styles from './layout.module.css';

export const metadata: Metadata = {
  title: {
    absolute: 'Anne Pawlak',
  },
};

export default function HomepageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className={styles.blob} />
      {children}
    </>
  );
}
