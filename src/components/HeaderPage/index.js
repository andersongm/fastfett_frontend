import React from 'react';

import { Container, Title, PageControl, SearchBar } from './styles';
import { MdSearch } from 'react-icons/md';
import RegisterButton from '../AddButton';

export default function HeaderPage({ pathButton, title }) {

  function setSearchValue(e) {
    console.log(e);
  }

  return (
    <Container>
      <Title>{title}</Title>
      <PageControl>
        <SearchBar>
          <MdSearch size={14} />
          <input
            name="encomendas"
            placeholder="Buscar por encomendas"
            onChange={e => {
            setSearchValue(e.target.value);
          }} />
        </SearchBar>
        <RegisterButton to={pathButton}>CADASTRAR</RegisterButton>
      </PageControl>
    </Container>
  );
}
