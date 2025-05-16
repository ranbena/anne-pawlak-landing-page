import * as Dialog from '@radix-ui/react-dialog';
import { IconButton } from '@radix-ui/themes';
import clsx from 'clsx';
import { X } from 'lucide-react';
import React, { ReactNode, useEffect, useState } from 'react';

import styles from './drawer.module.css';

interface Props {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
}

export const Drawer: React.FC<Props> = ({ open, onOpenChange, children }) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </Dialog.Root>
  );
};

export const DrawerTrigger = Dialog.Trigger;

export const DrawerTitle = ({ children }: { children: ReactNode }) => {
  return <Dialog.Title className={styles.title}>{children}</Dialog.Title>;
};

export const DrawerDescription = ({ children }: { children: ReactNode }) => {
  return <Dialog.Description className={styles.description}>{children}</Dialog.Description>;
};

export const DrawerHeader = ({ children }: { children: ReactNode }) => {
  return <div className={styles.header}>{children}</div>;
};

export const DrawerContent = ({
  className,
  children,
  backOnClose = false,
  ...props
}: { backOnClose?: boolean } & Dialog.DialogContentProps) => {
  const [portal, setPortal] = useState<HTMLElement | null>(null);

  useEffect(() => setPortal(document.getElementById('dialog-portal')), []);

  return (
    <Dialog.Portal container={portal}>
      <Dialog.Overlay className={styles.overlay} />
      <Dialog.Content className={clsx(styles.content, className)} {...props}>
        {children}
        <Dialog.Close asChild className={styles.closeBtn}>
          <IconButton variant="ghost" aria-label="Close" size="1">
            <X size={30} />
          </IconButton>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
};
