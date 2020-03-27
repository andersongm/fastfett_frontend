import React from 'react';
import { Container } from './styles';
import { getLetterColor } from '~/util/Util';

export default function Letters({letters}) {
  return (
    <Container color={getLetterColor(letters.slice(0,1))} >
      {letters}
    </Container>
  )
}
