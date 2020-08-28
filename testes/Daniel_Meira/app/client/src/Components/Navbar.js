import React from "react";
import styled from "styled-components";

import cores from "../Configs/cores";
import logo from "../img/logo-credpago.svg";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  width: 95%;
`;

const Link = styled.a`
  color: ${cores.branco};
  font-weight: 500;
  text-transform: uppercase;
`;

const LinksNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 15%;

  @media screen and (max-width: 1024px) {
    width: 25%;
  }
`;

const Logo = styled.img.attrs({
  src: logo,
})`
  height: 60px;
  padding: 10px 0;
  width: 150px;
`;

const MensagemUsuario = styled.h5`
  color: ${cores.branco};
  font-size: 0.9rem;
  font-weight: 500;
`;
const Separador = styled.div`
  border-left: 1px solid ${cores.branco};
  height: 50px;
`;

const Navbar = () => {
  return (
    <Container>
      <Logo />
      <LinksNavbar>
        <Link>Meu Perfil</Link>
        <Separador />
        <Link>Sair</Link>
      </LinksNavbar>
      <MensagemUsuario>Olá, João Corretor</MensagemUsuario>
    </Container>
  );
};

export default Navbar;
