import styled from 'styled-components';

export const Container = styled.div`

    /* display: none; */
    background: #ccc;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    position: absolute;
    display: flex;

`;

export const ModalView = styled.div`
    width: 450px;
    height: 350px;
    /* border: 1px solid; */
    background: #fff;
    align-self: center;

`;


export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  background: #301858cc;
  align-items: center;
  padding: 5px;
  color: #fff;

`;

export const Title = styled.h2`
  font-size: 14px;
  margin-left: 5px;
`;
export const CloseButton = styled.div`
  /* background: #f90; */
`;
export const Content = styled.div`
  /* background: #f90; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  hr {
    width: 95%;
    align-self: center;
  }


  p {
    padding: 6px 10px;
  }

  div.modal-img {
    display: flex;
    align-items: center;
    height: 100px;
    flex-direction: column;
    justify-content: center;
  }

`;

export const RecipientSignature = styled.img`
  width:100px;
  height: 100px;
  align-items: center;

`
