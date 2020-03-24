import styled from 'styled-components';

export const Container = styled.div`
  /* background: #ccc; */
  color: ${props => (props.color)};
  background: ${props => (props.bkcolor)};
  margin-right: 3px;
  border-radius: 53px;
  padding: 4px;
  font-size: 15px;
  width: 25px;
  height: 25px;
  justify-content: center;
  display: flex;
`;
