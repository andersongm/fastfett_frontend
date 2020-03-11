import styled from 'styled-components';

export const Container = styled.div`

    background: '#f90';
    width: 100px;
    height: 100px;
    background: #fff;
    border: 1px solid #ccc;
    display: ${props => (props.visible ? 'block' : 'none')};
    position: absolute;
    left: ${props => ((props.position[0] - 120 ) +"px")};
    top: ${props => ((props.position[1] - 4 )+"px")};

    li {
      padding: 5px;
      margin-top: 2px;

      &:hover {
        background: #777
      }
    }

    li > button {
      background: transparent;
      border: none;
      margin-left: 10px;
    }

`;
