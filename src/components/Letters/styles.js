import styled from 'styled-components';

export const Container = styled.div`
  /* background: #ccc; */
  color: ${props => (props.color)};
  background: ${props => (props.color)+'30'};
  margin-right: 5px;
  border-radius: 53px;
  padding: 4px;
  font-size: 14px;
  width: 25px;
  height: 25px;
  justify-content: center;
  align-items: center;
  display: flex;
`;
