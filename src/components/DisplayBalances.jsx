import React from 'react';

import { Grid, Segment } from 'semantic-ui-react';

import DisplayBalance from './DisplayBalance';

export default function DisplayBalances({ totalIncome, totalExpense }) {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance
              title="Income"
              value={totalIncome}
              color="green"
              size="tiny"
            />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance
              title="Expense"
              value={totalExpense}
              color="red"
              size="tiny"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
