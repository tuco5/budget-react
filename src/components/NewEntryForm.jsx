import React, { Fragment } from 'react';

import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from './EntryForm';

export default function NewEntryForm({
  addEntry,
  entry,
  setEntry,
  resetEntry,
}) {
  return (
    <Fragment>
      <EntryForm setEntry={setEntry} entry={entry} />
      <ButtonSaveOrCancel
        addEntry={addEntry}
        entry={entry}
        resetEntry={resetEntry}
      />
    </Fragment>
  );
}
