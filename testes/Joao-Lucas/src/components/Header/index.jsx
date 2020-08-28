import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Container, Content, Options, NameUser } from './styles';
import logo from '../../assets/img/logo-credpago.svg';

import { logout } from '../../services/auth';

function Header() {

  const history = useHistory();
  const user = useSelector(state => state.user);

  const logoutNow = () => {
    logout();
    history.push('/');
  }
  
  return (
    <Container>
      <Content>
        <img src={logo} alt="Logo" aria-label="Logo" />
        <Options>
          <ul>
            <li onClick={() => history.push('/main')}>Início</li>
            <li onClick={() => history.push('/profile')}>Meu Perfil</li>
            <li onClick={logoutNow}>Sair</li>
          </ul>
        </Options>
        <NameUser>Olá {user && user.name}</NameUser>
      </Content>
    </Container>
  );
}

export default Header;