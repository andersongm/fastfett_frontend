import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/fastfeet-logo.png';

import { Container, Content, ItemMenu, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          <ul>
            <ItemMenu>
              <Link to="/deliveries">ENCOMENDAS</Link>
            </ItemMenu>
            <ItemMenu>
              <Link to="/deliverymans">ENTREGADORES</Link>
            </ItemMenu>
            <ItemMenu>
              <Link to="/recipients">DESTINATARIOS</Link>
            </ItemMenu>
            <ItemMenu>
              <Link to="/problems">PROBLEMAS</Link>
            </ItemMenu>
          </ul>
        </nav>
        <Profile>
          <div>
            <strong>Anderson Martins</strong>
            <Link to="/profile">Meu perfil</Link>
          </div>
        </Profile>
      </Content>
    </Container>
  );
}
