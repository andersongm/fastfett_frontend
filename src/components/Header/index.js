import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../../assets/fastfeet-logo.png';
import { signOut } from '~/store/modules/auth/actions';

import { Container, Content, ItemMenu, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

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
            <strong>{profile.name}</strong>
            {/* <Link to="/profile">Sair do Sistema</Link> */}
            <button onClick={handleSignOut} type="button">
              Sair do Sistema
            </button>
          </div>
        </Profile>
      </Content>
    </Container>
  );
}
