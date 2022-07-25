import React from 'react';
import { Button } from 'semantic-ui-react';

export default function Header({ addEntry, entry, resetEntry }) {
  return (
    <Button.Group style={{ marginTop: 20 }}>
      <Button onClick={resetEntry}>Cancel</Button>
      <Button.Or></Button.Or>
      <Button primary onClick={() => addEntry(entry)}>
        Ok
      </Button>
    </Button.Group>
  );
}
