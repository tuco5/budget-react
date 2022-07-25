import { Container } from 'semantic-ui-react';

import Header from './components/Header';

import './App.css';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';

function App() {
  return (
    <Container>
      <Header as="h1">Budget</Header>
      <DisplayBalance title="Balance" value="2550.53" size="small" />
      <DisplayBalances />

      <Header as="h3">History</Header>
      <EntryLine description="Salary" value="1000" income />
      <EntryLine description="Nintendo" value="500" />

      <Header as="h3">Add new transaction</Header>
      <NewEntryForm />
    </Container>
  );
}

export default App;
