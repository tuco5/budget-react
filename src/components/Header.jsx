import React from 'react';
import { Header as SemanticHeader } from 'semantic-ui-react';

export default function Header({ children, ...props }) {
  return <SemanticHeader {...props}>{children}</SemanticHeader>;
}
