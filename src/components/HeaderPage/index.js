import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, PageControl, SearchBar } from './styles';
import { MdSearch } from 'react-icons/md';
import RegisterButton from '../AddButton';

export default function HeaderPage({ pathButton, title, placeholderSearch, onChange, value  }) {

  return (
    <Container>
      <Title>{title}</Title>
      <PageControl hide={pathButton !== '' ? false : true}>
        <SearchBar>
          <MdSearch size={14} />
          <input
            name="search"
            placeholder={placeholderSearch}
            onChange={onChange}
            value={value}
           />
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
