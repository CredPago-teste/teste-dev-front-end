import React, { useState, useEffect } from "react";
import styled from "styled-components";

import BodyTabela from "./BodyTabela";
import ContainerModal from "../../Containers/ContainerModal";
import HeadTabela from "./HeadTabela";
import ModalExclusao from "../Modais/ModalExclusao";
import { useDadosAgendamentos } from "../../Context/DadosAgendamentos";
import { useShowModalAgendamento } from "../../Context/ShowModalAgendamento";
import { useIdAtualizacao } from "../../Context/IdAtualizacao";

import apiJson from "../../api/callApi";

const colunas = [
  {
    id: 0,
    label: "data/hora",
    path: "data",
  },
  {
    id: 1,
    label: "id do imóvel",
    path: "idImovel",
  },
  {
    id: 2,
    label: "visitante",
    path: "nomeVisitante",
  },
  {
    id: 3,
    label: "endereço",
    path: "endereco",
  },
  {
    id: 4,
    label: "ações",
    path: "acoes",
  },
];

const Tabela = styled.table`
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
`;

const TabelaAgendamento = () => {
  const { dadosAgendamentos, setDadosAgendamentos } = useDadosAgendamentos();
  const { setShowModalAgendamento } = useShowModalAgendamento();
  const { setIdAtualizacao } = useIdAtualizacao();

  const [confirmacaoExclusao, setConfirmacaoExclusao] = useState(false);
  const [idExclusao, setIdExclusao] = useState(null);
  const [dadosFormatados, setDadosFormatados] = useState([]);

  const handleCancelaExclusao = () => {
    setIdExclusao(null);
    setConfirmacaoExclusao(!confirmacaoExclusao);
  };

  const handleConfirmaExclusao = async () => {
    try {
      await apiJson.deleteAgendamento(idExclusao);
      const dadosAtualizados = dadosAgendamentos.filter(
        (dado) => dado.id !== idExclusao
      );
      setDadosAgendamentos(dadosAtualizados);
      setIdExclusao(null);
    } catch (error) {
      console.log("Não foi possivel excluir o agendamento.", error);
    }
    setConfirmacaoExclusao(!confirmacaoExclusao);
  };

  const handleExclusao = (id) => {
    setIdExclusao(id);
    setConfirmacaoExclusao(!confirmacaoExclusao);
  };

  const handleEdicao = (id) => {
    setIdAtualizacao({ id: id });
    setShowModalAgendamento(true);
  };

  const getData = async (id) => {
    try {
      const res = await apiJson.getAgendamentos();
      const dados = res.data.map((dado) => {
        dado.data = `${dado.data} ${dado.hora}`;
        dado.endereco = `${dado.endereco}, ${dado.numero}`;
        return dado;
      });
      setDadosFormatados(dados);
    } catch (error) {
      console.log("Não foi possivel obter o agendamento com esse ID.", error);
    }
  };

  useEffect(() => {
    getData();
  }, [dadosAgendamentos]);

  return (
    <>
      <Tabela>
        <HeadTabela colunas={colunas} />
        <BodyTabela
          colunas={colunas}
          dados={dadosFormatados}
          handleExclusao={handleExclusao}
          handleEdicao={handleEdicao}
        />
      </Tabela>
      {confirmacaoExclusao && (
        <ContainerModal>
          <ModalExclusao
            handleCancelaExclusao={handleCancelaExclusao}
            handleConfirmaExclusao={handleConfirmaExclusao}
          />
        </ContainerModal>
      )}
    </>
  );
};

export default TabelaAgendamento;
