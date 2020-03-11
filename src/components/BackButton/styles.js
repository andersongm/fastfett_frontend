import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 112px;
  height: 36px;
  background: #ccc;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-weight: bold;

  svg {
      margin-right: 5px;
  }

`;
