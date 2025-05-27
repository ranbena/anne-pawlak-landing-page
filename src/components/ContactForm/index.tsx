'use client';

import { Button, Container, Grid, Select, TextArea, TextField } from '@radix-ui/themes';
import { SendHorizontalIcon } from 'lucide-react';
import { useCallback, useState } from 'react';

import { getPublicPath } from '@/src/utils/getPublicPath';
import IframePopover from '../IframePopover';
import styles from './contactform.module.css';

const formId = '1FAIpQLSfkHixpm61i87K7pixgulqV99z0QMplcLD5C0QcP-T3cBwNyQ';
const googleFormUrl = `https://docs.google.com/forms/u/0/d/e/${formId}/formResponse`;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showIframe, setShowIframe] = useState(false);

  // toggles the original <select> required value, so it's tooltip doesn't remain visible when dropdown is open
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const onSubmit = useCallback(() => {
    setIsSubmitting(true);
  }, []);

  const onIframeLoad = useCallback(() => {
    setIsSubmitting(false);
    setShowIframe(true);
  }, []);

  return (
    <div className={styles.root}>
      <Container size="4">
        <h1 className="secondaryTitle">Kontakt</h1>
        <Grid
          columns={{
            initial: '1',
            md: '2',
          }}
          gap="4"
        >
          <h3 className={styles.heroHeading}>Du hast eine Frage oder möchtest zusammenarbeiten?</h3>
          <div className={styles.root}>
            <form
              action={googleFormUrl}
              onSubmit={onSubmit}
              className={styles.form}
              id="contact-form"
            >
              <TextField.Root
                type="text"
                name="entry.760257597"
                placeholder="NAME"
                required
                variant="surface"
                size="3"
              />
              <TextField.Root
                type="email"
                name="entry.2103074590"
                placeholder="EMAIL"
                required
                variant="surface"
                size="3"
              />
              <TextField.Root
                type="text"
                name="entry.1652608311"
                placeholder="WEBSITE"
                variant="surface"
                size="3"
              />
              <TextField.Root
                type="text"
                name="entry.62845363"
                placeholder="SOCIAL MEDIA HANDLE"
                variant="surface"
                size="3"
              />
              <div className={styles.select}>
                <Select.Root
                  name="entry.1036041765"
                  required={!isDropdownOpen}
                  size="3"
                  onOpenChange={setIsDropdownOpen}
                >
                  <Select.Trigger placeholder="HERAUSFORDERUNG" variant="surface" />
                  <Select.Content position="popper" variant="soft">
                    <Select.Item value="Exposure">Sichtbar werden</Select.Item>
                    <Select.Item value="Growth">Mehr Wachstum</Select.Item>
                    <Select.Item value="Sales">Verkaufen</Select.Item>
                    <Select.Item value="All">Etwas von Allem</Select.Item>
                  </Select.Content>
                </Select.Root>
              </div>
              <div className={styles.select}>
                <Select.Root
                  name="entry.892576425"
                  required={!isDropdownOpen}
                  size="3"
                  onOpenChange={setIsDropdownOpen}
                >
                  <Select.Trigger placeholder="DEIN BUDGET" variant="surface" />
                  <Select.Content position="popper" variant="soft">
                    <Select.Item value="100">Bis zu 100€</Select.Item>
                    <Select.Item value="500">100 - 500€</Select.Item>
                    <Select.Item value="1000">500 - 1000€</Select.Item>
                    <Select.Item value="Above">Über 1000€</Select.Item>
                  </Select.Content>
                </Select.Root>
              </div>
              <TextArea
                className={styles.textarea}
                name="entry.1595123500"
                placeholder="ICH MELD MICH HEUT BEI DIR WEIL..."
                variant="surface"
                size="3"
              />
            </form>
            <Button
              className={styles.button}
              size="3"
              type="submit"
              loading={isSubmitting}
              form="contact-form"
              formTarget="google-form-iframe"
              radius="full"
            >
              Abschicken
              <SendHorizontalIcon />
            </Button>
            <IframePopover isOpen={showIframe} close={() => setShowIframe(false)}>
              <iframe
                src="about:blank"
                name="google-form-iframe"
                onLoad={onIframeLoad}
                className={styles.iframe}
              />
            </IframePopover>
          </div>
        </Grid>
      </Container>
      <div
        className={styles.blob}
        style={{ backgroundImage: `url(${getPublicPath('/bg_blob_contact.webp')})` }}
      />
    </div>
  );
};

export default ContactForm;
