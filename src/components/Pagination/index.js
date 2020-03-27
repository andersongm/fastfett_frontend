import React from 'react';
import { MdFirstPage, MdChevronLeft, MdChevronRight, MdLastPage } from 'react-icons/md';

import { Container } from './styles';

export default function Pagination({ currentPage, totalRecords, handleChangePage }) {

  const startPage = 1;
  const endPage = Math.ceil(totalRecords / 5);


  function nextPage() {
    if (endPage === currentPage) {
      return;
    }
    handleChangePage(currentPage + 1);
  }
  function prevPage() {
    if (startPage === currentPage) {
      return;
    }
    handleChangePage(currentPage - 1);
  }
  function firstPage() {
    if (startPage === currentPage) {
      return;
    }
    handleChangePage(startPage);
  }
  function lastPage() {
    if (endPage === currentPage) {
      return;
    }
    handleChangePage(endPage);
  }

  return (
      <Container>
        <button onClick={firstPage}><MdFirstPage size={24} /></button>
        <button onClick={prevPage}><MdChevronLeft size={24} /></button>
        <button onClick={nextPage}><MdChevronRight size={24} /></button>
        <button onClick={lastPage}><MdLastPage size={24} /></button>
      </Container>
  );
}
