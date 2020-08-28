import React from "react";
import styled from "styled-components";

import cores from "../Configs/cores";
import { useShowModalAgendamento } from "../Context/ShowModalAgendamento";

const ButtonNovoAgendamento = styled.button`
  background-color: ${cores.primario};
  border-radius: 5px;
  border: none;
  color: ${cores.branco};
  cursor: pointer;
  font-size: 1rem;
  outline: none;
  padding: 10px 15px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
`;

const Titulo = styled.h1`
  color: ${cores.cinzaEscuro};
  font-weight: bold;
  text-transform: capitalize;
`;

const HeaderHome = () => {
  const {
    showModalAgendamento,
    setShowModalAgendamento,
  } = useShowModalAgendamento();

  return (
    <Container>
      <Titulo>Próximas Visitas</Titulo>
      <ButtonNovoAgendamento
        onClick={() => setShowModalAgendamento(!showModalAgendamento)}
      >
        + Novo agendamento
      </ButtonNovoAgendamento>
    </Container>
  );
};

export default HeaderHome;
