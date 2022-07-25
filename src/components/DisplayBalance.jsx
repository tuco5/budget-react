import React from 'react';

import { Statistic } from 'semantic-ui-react';

export default function DisplayBalance({ title, value, ...props }) {
  return (
    <Statistic {...props}>
      <Statistic.Label style={{ textAlign: 'left' }}>{title}</Statistic.Label>
      <Statistic.Value>${value}</Statistic.Value>
    </Statistic>
  );
}
