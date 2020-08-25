import React from 'react';

import logoImg from '../../assets/images/logo-credpago.svg';
import { Container, Header } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
      <img src={logoImg} alt="CredPago"/>
      <div>
        <a href="/">MEU PERFIL</a>
        <hr/>
        <a href="/">SAIR</a>
      </div>
      <div>
        <span>
          Olá João Corretor
        </span>
      </div>
      </Header>
    </Container>
  );
}

export default Dashboard;
