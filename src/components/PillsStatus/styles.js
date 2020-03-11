import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  background: ${props => (props.cor.back)};
  color: ${props => (props.cor.color)};
  /* background: ${props => (props.texto === 'PENDENTE' ? '#F90' : '#CCC')}; */
  border-radius: 25px;
  padding: 3px;
  font-size: 13px;
  width: 54%;
  justify-content: center;

  span {
    margin-right: 3px;
  }

`;
