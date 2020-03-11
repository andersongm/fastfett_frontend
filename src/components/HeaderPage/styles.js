import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
`;

export const Title = styled.h2`
  /* background: #f90; */
  margin-top:20px;
`;

export const PageControl = styled.div`
  display: flex;
  /* background: #C78; */
  justify-content: space-between;
  margin: 10px 0 10px 0;

  input {
        border-radius: 4px;
        padding: 5px;
        margin-top: 5px;
        height: 30px;
        font-size: 16px;
        width: 300px;
  }

`;

export const SearchBar = styled.div`

  svg {
    left: 24px;
    position: relative;
  }

  input {
    padding: 0 0 0 30px;
  }

`;
