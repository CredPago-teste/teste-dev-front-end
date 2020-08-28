import React from "react";

import ContainerAgendamento from "../Containers/ContainerAgendamento";
import ContainerNavbar from "../Containers/ContainerNavbar";
import DadosAgendamentoProvider from "../Context/DadosAgendamentos";
import IdAtualizacaoProvider from "../Context/IdAtualizacao";
import ShowModalAgendamentoProvider from "../Context/ShowModalAgendamento";

const Home = () => {
  return (
    <>
      <ContainerNavbar />
      <DadosAgendamentoProvider>
        <ShowModalAgendamentoProvider>
          <IdAtualizacaoProvider>
            <ContainerAgendamento />
          </IdAtualizacaoProvider>
        </ShowModalAgendamentoProvider>
      </DadosAgendamentoProvider>
    </>
  );
};

export default Home;
