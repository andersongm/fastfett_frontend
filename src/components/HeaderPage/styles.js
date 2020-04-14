import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
`;

export const Title = styled.h2`
  margin-top:20px;
  /* margin-bottom: ${props => (props.display ? '20px' : '0px')}; */
  margin-bottom: 20px;
`;

export const PageControl = styled.div`
  display: ${props => (props.hide ? 'none' : 'flex')};
  justify-content: space-between;
  margin: 10px 0px 10px -14px;

`;

export const SearchBar = styled.div`

  display: ${props => (props.display ? 'none' : '')};

  /* svg {
    left: 24px;
    position: relative;
  } */

  .search-icon {
    left: 24px;
    position: relative;
  }

  button {

    left: -20px;
    position: relative;
    border: none;
    background: transparent;

  }

  input {
    padding: 0 0 0 30px;
    border-radius: 4px;
    margin-top: 5px;
    height: 30px;
    font-size: 16px;
    width: 300px;
  }

`;
