import React from 'react';

import { Modal, Button } from 'semantic-ui-react';
import EntryForm from './EntryForm';

export default function ModalEdit({
  isOpen,
  setIsOpen,
  entry,
  setEntry,
  editEntry,
}) {
  function handleSubmit() {
    setIsOpen(false);
    editEntry(entry);
  }
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit entry</Modal.Header>
      <Modal.Content>
        <EntryForm setEntry={setEntry} entry={entry} />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
        <Button onClick={handleSubmit} primary>
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
