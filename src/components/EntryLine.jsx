import React from 'react';

import { Grid, Segment, Icon } from 'semantic-ui-react';

export default function EntryLine({ entry, deleteEntry, openModal, setEntry }) {
  function handleEdit() {
    setEntry(entry);
    openModal(true);
  }
  const { income, description, value, id } = entry;
  return (
    <>
      <Segment color={income ? 'green' : 'red'}>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={10}>{description}</Grid.Column>
            <Grid.Column width={3}>${value}</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered onClick={handleEdit} />
              <Icon name="trash" onClick={() => deleteEntry(id)} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
}
