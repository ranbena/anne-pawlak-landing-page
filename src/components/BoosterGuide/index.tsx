import { getPublicPath } from '@/src/utils/getPublicPath';
import { Button } from '@radix-ui/themes';
import React from 'react';
import styles from './boosterguide.module.css';
import Text from './text.mdx';

const BoosterGuide: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.details}>
        <h1>
          <span className={styles.top}>Insta Bio</span>
          <span className={styles.bottom}>
            Booster
            <br />
            Guide
          </span>
        </h1>
        <div className={styles.txt}>
          <Text />
        </div>
        <Button size="4" radius="full" className={styles.btn}>
          Hier loslegen!
        </Button>
      </div>
      <div className={styles.img}>
        <img src={getPublicPath('/instabio.png')} loading="lazy" />
      </div>
    </div>
  );
};

export default BoosterGuide;
