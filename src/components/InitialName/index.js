import React from 'react';
import { Container } from './styles';
import { getAleatoryColor } from '~/util/Util';

// function getAleatoryColor() {
//   return "#"+((1<<12)*Math.random()|0).toString(6)
// }

export default function InitialName({ letters }) {
  return (
    <Container bkcolor={getAleatoryColor()} color={getAleatoryColor()}>
      {letters}
    </Container>
  );
}
