import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, PageControl, SearchBar } from './styles';
import { MdSearch, MdClear } from 'react-icons/md';
import RegisterButton from '../AddButton';

export default function HeaderPage({ pathButton, title, placeholderSearch, onChange, value, clear  }) {

  return (
    <Container>
      <Title>{title}</Title>
      <PageControl hide={pathButton !== '' ? false : true}>
        <SearchBar>
          <MdSearch size={14} className="search-icon"/>
          <input
            name="search"
            placeholder={placeholderSearch}
            onChange={onChange}
            value={value}
           />
          <button onClick={() => clear()}>
            <MdClear size={14} />
          </button>
        </SearchBar>
        <RegisterButton to={pathButton}>CADASTRAR</RegisterButton>
      </PageControl>
    </Container>
  );
}

HeaderPage.propTypes = {
  pathButton: PropTypes.string,
};

HeaderPage.defaultProps = {
  pathButton: ''
};
