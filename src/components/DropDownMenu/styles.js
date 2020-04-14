import styled from 'styled-components';

export const Container = styled.div`

    &::before {
      content: "";
      display: inline-block;
      vertical-align: middle;
      /* margin-right: 10px; */
      width: 0;
      height: 0;
      position: absolute;
      margin-top: -5px;
      margin-left: -5px;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 5px solid #dddddd;
    }

    width: ${props => props.size.width};
    /* height: ${props => props.size.height}; */
    display: ${props => (props.visible ? 'block' : 'none')};
    background: #fff;
    border: 1px solid #ddd;
    position: absolute;
    margin-top: 16px;
    margin-left: ${props => props.size.right};




    li {
      padding: 5px;
      text-align: left;

      &:hover {
        background: #eee
      }
    }

    li > button {
      background: transparent;
      border: none;
      margin-left: 10px;
    }

`;

export const ContainerModal = styled.div`
  line-height: 2em;
  p {
    margin-bottom: 20px;
  }
`;
