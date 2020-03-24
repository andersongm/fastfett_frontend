import React from 'react';
import { MdClose } from 'react-icons/md';
import { Container, Header, Title, CloseButton, Content, ModalView } from './styles';

export default function Modal({showModal, onHide, title, children }) {

  return (
    <Container className={showModal ? 'modal-on' : 'modal-off'} >
      <ModalView>
        <Header>
          <Title>{title}</Title>
          <CloseButton><MdClose color="#fff" size={20} onClick={onHide} /></CloseButton>
        </Header>
        <Content>
          {children}
        </Content>
      </ModalView>
    </Container>
  );
}
