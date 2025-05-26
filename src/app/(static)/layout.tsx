import styles from './layout.module.css';

export default function StaticPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={styles.root}>{children}</div>;
}
