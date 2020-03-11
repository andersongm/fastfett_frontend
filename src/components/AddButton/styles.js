import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AddButton = styled(Link)`
  width: 112px;
  height: 36px;
  background: #7d40e7;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  padding: 5px;
  display: flex;
  align-items: center;

  svg {
      margin-right: 5px;
  }

`;
