import React from "react";
import styled from "styled-components";

import FormAgendamento from "../Formularios/FormAgendamento";
import closeIcon from "../../img/close-icon.svg";
import cores from "../../Configs/cores";
import { useShowModalAgendamento } from "../../Context/ShowModalAgendamento";
import { useIdAtualizacao } from "../../Context/IdAtualizacao";

const camposData = [
  {
    campoRequirido: true,
    label: "Data",
    nomeId: "data",
    placeholder: "dd/mm/yyyy",
  },
  {
    campoRequirido: true,
    label: "Hora",
    nomeId: "hora",
    placeholder: "hh:mm",
  },
];
const campoNomeVisitante = [
  {
    campoRequirido: true,
    label: "Nome do Visitante",
    nomeId: "nomeVisitante",
    placeholder: "Kleber 'Bambam' de Paula",
  },
];

const camposEndereco = [
  {
    campoRequirido: true,
    label: "Endereço",
    nomeId: "endereco",
    placeholder: "Ex: Rua São Paulo",
  },
  {
    campoRequirido: true,
    label: "Número",
    nomeId: "numero",
    placeholder: "Ex: 2",
    tipoCampo: "number",
  },
  {
    campoRequirido: true,
    label: "Id Imóvel",
    nomeId: "idImovel",
    placeholder: "Ex: 1245",
    tipoCampo: "number",
  },
];

const CloseIcon = styled.img.attrs({
  src: closeIcon,
})`
  cursor: pointer;
  width: 20px;
`;

const Container = styled.div`
  position: fixed;
  height: auto;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
`;

const Header = styled.div`
  background-color: ${cores.primario};
  display: flex;
  justify-content: space-between;
  padding: 30px;
`;

const Titulo = styled.h2`
  color: ${cores.branco};
  margin: 0;
`;

const ModalAgendamento = () => {
  const { setShowModalAgendamento } = useShowModalAgendamento();
  const { setIdAtualizacao } = useIdAtualizacao();

  const handleCloseModalAgendamento = () => {
    setShowModalAgendamento(false);
    setIdAtualizacao({});
  };

  return (
    <Container>
      <Header>
        <Titulo>Novo Agendamento</Titulo>
        <CloseIcon onClick={() => handleCloseModalAgendamento()} />
      </Header>
      <FormAgendamento
        camposData={camposData}
        camposEndereco={camposEndereco}
        campoNomeVisitante={campoNomeVisitante}
      />
    </Container>
  );
};

export default ModalAgendamento;
