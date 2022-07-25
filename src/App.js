import {
  Container,
  Header,
  Statistic,
  Grid,
  Segment,
  Icon,
  Form,
  Button,
} from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Container>
      <Header as="h1">Budget</Header>

      <Statistic size="small">
        <Statistic.Label style={{ textAlign: 'left' }}>
          Your balance:
        </Statistic.Label>
        <Statistic.Value>2,550.53</Statistic.Value>
      </Statistic>

      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size="tiny" color="green">
                <Statistic.Label style={{ textAlign: 'left' }}>
                  Income:
                </Statistic.Label>
                <Statistic.Value>1,045.50</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size="tiny" color="red">
                <Statistic.Label style={{ textAlign: 'left' }}>
                  Expense:
                </Statistic.Label>
                <Statistic.Value>623.50</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as="h3">History</Header>
      <Segment color="red">
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={10}>Something</Grid.Column>
            <Grid.Column width={3}>$10.00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as="h3">Add new transaction</Header>
      <Form unstackable>
        <Form.Group>
          <Form.Input
            icon="tags"
            width={12}
            label="Description"
            placeholder="New shinny thing"
          />
          <Form.Input
            width={4}
            label="value"
            placeholder="100.00"
            icon="dollar"
            iconPosition="left"
          ></Form.Input>
        </Form.Group>
        <Button.Group style={{ marginTop: 20 }}>
          <Button>Cancel</Button>
          <Button.Or></Button.Or>
          <Button primary>Ok</Button>
        </Button.Group>
      </Form>
    </Container>
  );
}

export default App;
