import React from 'react';

import EntryLine from './EntryLine';

export default function HistoryEntryList({
  entries = [],
  deleteEntry,
  openModal,
  setEntry,
}) {
  return entries.map((entry) => (
    <EntryLine
      key={entry.id}
      entry={entry}
      deleteEntry={deleteEntry}
      openModal={openModal}
      setEntry={setEntry}
    />
  ));
}
