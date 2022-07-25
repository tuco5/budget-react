/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Form, Segment, Checkbox } from 'semantic-ui-react';

export default function EntryForm({ setEntry, entry }) {
  const [description, setDescription] = useState(entry.description);
  const [value, setValue] = useState(entry.value);
  const [income, setIncome] = useState(entry.income);

  useEffect(() => {
    if (entry && entry.id) {
      setEntry({ description, value, income, id: entry.id });
    } else {
      setEntry({ description, value, income });
    }
  }, [description, value, income]);

  useEffect(() => {
    setDescription(entry.description);
    setValue(entry.value);
    setIncome(entry.income);
  }, [entry]);

  return (
    <Form unstackable>
      <Form.Group widths={3}>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder="New shinny thing"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Form.Input
          width={4}
          label="Value"
          placeholder="100.00"
          icon="dollar"
          iconPosition="left"
          value={value}
          onChange={(event) => setValue(event.target.value * 1)}
        ></Form.Input>
      </Form.Group>
      <Segment compact>
        <Checkbox
          toggle
          label="Is Income"
          checked={income}
          onChange={() => setIncome((prevState) => !prevState)}
        />
      </Segment>
    </Form>
  );
}
