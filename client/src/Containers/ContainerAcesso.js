import React from "react";
import styled from "styled-components";

import cores from "../Configs/cores";
import logo from "../img/logo-credpago.svg";

const Container = styled.div`
  background-image: linear-gradient(
    to right,
    ${cores.azulGradiente},
    ${cores.azulEscuroGradiente}
  );
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

const Logo = styled.img.attrs({
  src: logo,
})`
  height: 70px;
  margin-bottom: 50px;
  width: 180px;

  @media screen and (min-width: 1400px) {
    height: 90px;
    width: 220px;
  }
`;

const ContainerAcesso = ({ children }) => {
  return (
    <Container>
      <Logo />
      {children}
    </Container>
  );
};

export default ContainerAcesso;
