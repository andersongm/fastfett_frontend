import React from 'react';
import { MdBrightness1 } from 'react-icons/md';

import { Container } from './styles';

export default function PillsStatus({ color, children }) {

  return (
    <Container cor={color}>
      <span><MdBrightness1 size={10} /></span>
      {children}
    </Container>
  );
}
