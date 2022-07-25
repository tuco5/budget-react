import React, { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import { v4 as uuid } from 'uuid';

import Header from './components/Header';
import HistoryEntryList from './components/HistoryEntryList';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import ModalEdit from './components/ModalEdit';

import './App.css';

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [entry, setEntry] = useState(initialEntryState);
  const [isOpen, setIsOpen] = useState(false);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let income = 0;
    let expense = 0;
    entries.map((entry) => {
      if (entry.income) return (income += entry.value);
      return (expense += entry.value);
    });

    setTotal(income - expense);
    setTotalExpense(expense);
    setTotalIncome(income);
  }, [entries]);

  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  }

  function editEntry(updatedEntry) {
    const newEntries = entries.map((entry) => {
      if (entry.id === updatedEntry.id) {
        return updatedEntry;
      }
      return entry;
    });
    setEntries(newEntries);
  }

  function addEntry(entry) {
    const result = entries.concat({
      id: uuid(),
      ...entry,
    });

    setEntries(result);
    resetEntry();
  }

  function resetEntry() {
    setEntry(initialEntryState);
  }

  return (
    <Container>
      <Header as="h1">Budget</Header>
      <DisplayBalance title="Balance" value={total} size="small" />
      <DisplayBalances totalIncome={totalIncome} totalExpense={totalExpense} />

      <Header as="h3">History</Header>
      <HistoryEntryList
        entries={entries}
        deleteEntry={deleteEntry}
        openModal={setIsOpen}
        setEntry={setEntry}
      />

      <Header as="h3">Add new transaction</Header>
      <NewEntryForm
        addEntry={addEntry}
        entry={entry}
        setEntry={setEntry}
        resetEntry={resetEntry}
      />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        entry={entry}
        editEntry={editEntry}
        setEntry={setEntry}
      />
    </Container>
  );
}

export default App;

var initialEntries = [
  {
    id: 1,
    description: 'Work income',
    value: 1000.0,
    income: true,
  },
  {
    id: 2,
    description: 'Water bill',
    value: 20.0,
    income: false,
  },
  {
    id: 3,
    description: 'Rent',
    value: 300.0,
    income: false,
  },
  {
    id: 4,
    description: 'Power bill',
    value: 50.0,
    income: false,
  },
];

var initialEntryState = {
  description: '',
  value: '',
  income: false,
};
