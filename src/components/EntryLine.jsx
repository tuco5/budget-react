import React from 'react';

import { Grid, Segment, Icon } from 'semantic-ui-react';

export default function EntryLine({ description, value, income = false }) {
  return (
    <Segment color={income ? 'green' : 'red'}>
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column width={10}>{description}</Grid.Column>
          <Grid.Column width={3}>${value}</Grid.Column>
          <Grid.Column width={3}>
            <Icon name="edit" bordered />
            <Icon name="trash" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
