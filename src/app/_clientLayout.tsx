'use client';

import { Container, Theme } from '@radix-ui/themes';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from './layout.module.css';

// this is a must until radix-ui fixes https://github.com/radix-ui/primitives/issues/3542

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Theme accentColor="red" grayColor="gray">
      <Container size="4" className={styles.container}>
        <Header />
        <div className={styles.blob} />
        {children}
      </Container>
      <Footer />
      <Theme accentColor="gray">
        <div id="dialog-portal" />
      </Theme>
    </Theme>
  );
};

export default ClientLayout;
