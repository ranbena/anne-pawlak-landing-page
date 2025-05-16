import { IconButton, Popover } from '@radix-ui/themes';
import clsx from 'clsx';
import React from 'react';

import { XIcon } from 'lucide-react';
import styles from './iframepopover.module.css';

interface Props {
  isOpen: boolean;
  close: () => void;
  children: React.ReactNode;
}

const IframePopover: React.FC<Props> = ({ isOpen, close, children }) => {
  return (
    <Popover.Root open={true}>
      <Popover.Trigger>
        <div className={styles.trigger} />
      </Popover.Trigger>
      <Popover.Content className={clsx(styles.content, { [styles.open]: isOpen })}>
        <IconButton
          onClick={close}
          className={styles.closeBtn}
          variant="ghost"
          size="1"
          color="gray"
        >
          <XIcon size={14} />
        </IconButton>
        {children}
      </Popover.Content>
    </Popover.Root>
  );
};

export default IframePopover;
