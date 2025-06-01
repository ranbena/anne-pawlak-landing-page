import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';
import styles from './layout.module.css';

export default function StaticPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.root}>
      <Link href="/" className={styles.back}>
        <ArrowLeftIcon size={16} />
        Startseite
      </Link>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
