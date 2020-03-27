import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  background: ${props => (props.cor.back)};
  color: ${props => (props.cor.color)};
  border-radius: 25px;
  padding: 3px;
  font-size: 13px;
  width: 105px;
  justify-content: center;

  span {
    margin-right: 3px;
    font-weight: bold;
  }

`;
