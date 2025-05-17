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

export const DrawerTitle = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <Dialog.Title className={clsx(styles.title, className)}>{children}</Dialog.Title>;
};

export const DrawerDescription = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <Dialog.Description className={clsx(styles.description, className)}>
      {children}
    </Dialog.Description>
  );
};

export const DrawerHeader = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={clsx(styles.header, className)}>{children}</div>;
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
