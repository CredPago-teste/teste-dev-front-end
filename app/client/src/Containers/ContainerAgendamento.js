import React, { useEffect } from "react";
import styled from "styled-components";

import apiJson from "../api/callApi";
import HeaderHome from "../Components/HeaderHome";
import ModalAgendamento from "../Components/Modais/ModalAgendamento";
import ModalContainer from "./ContainerModal";
import TabelaAgendamento from "../Components/Tabelas/TabelaAgendamento";
import { useDadosAgendamentos } from "../Context/DadosAgendamentos";
import { useShowModalAgendamento } from "../Context/ShowModalAgendamento";

const Container = styled.div`
  margin: auto;
  width: 95%;
`;

const ContainerAgendamento = () => {
  const { setDadosAgendamentos } = useDadosAgendamentos();
  const {
    showModalAgendamento,
    setShowModalAgendamento,
  } = useShowModalAgendamento();

  const getData = async () => {
    try {
      const res = await apiJson.getAgendamentos();
      setDadosAgendamentos(res.data);
    } catch (error) {
      console.log("Não foi possivel receber os dados do servidor.", error);
    }
  };

  useEffect(() => {
    getData();
    setShowModalAgendamento(false);
  }, []);

  return (
    <Container>
      <HeaderHome />
      <TabelaAgendamento />
      {showModalAgendamento && (
        <ModalContainer>
          <ModalAgendamento />
        </ModalContainer>
      )}
    </Container>
  );
};

export default ContainerAgendamento;
