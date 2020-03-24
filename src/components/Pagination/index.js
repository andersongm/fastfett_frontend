import React, { useState, useContext } from 'react';
import { MdFirstPage, MdChevronLeft, MdChevronRight, MdLastPage } from 'react-icons/md';

import { Container } from './styles';
import PaginationContext from '~/components/Context';

export default function Pagination() {

  const { nextPage, setCurentPage } = useContext(PaginationContext)

  console.log(setCurentPage);

  return (
      <Container>
        opa
        <button onClick={setCurentPage}>Teste</button>
      </Container>
  );
}
