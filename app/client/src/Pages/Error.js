import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import ContainerAcesso from "../Containers/ContainerAcesso";
import cores from "../Configs/cores";

const Container = styled.div`
  background-color: ${cores.branco};
  border-radius: 5px;
  width: 50%;
`;

const Button = styled.button`
  background-color: ${cores.primario};
  border: none;
  border-radius: 50px;
  cursor: pointer;
  display: block;
  margin: auto;
  margin-bottom: 30px;
  outline: none;
  padding: 5px 10px;
  width: 30%;

  & > a {
    color: ${cores.branco};
    text-decoration: none;
    font-size: 1rem;
  }
`;

const Mensagem = styled.h3`
  color: ${cores.cinzaTexto};
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
`;

const Error = () => {
  return (
    <ContainerAcesso>
      <Container>
        <Mensagem>Página não encontrada.</Mensagem>
        <Button>
          <Link to="/">Voltar</Link>
        </Button>
      </Container>
    </ContainerAcesso>
  );
};

export default Error;
