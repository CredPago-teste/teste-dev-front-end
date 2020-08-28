import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import PropTypes from "prop-types";
import styled from "styled-components";

import CampoForm from "./CampoForm";
import cores from "../../Configs/cores";
import schemas from "../../Helpers/schemasYup";
import { useDadosAgendamentos } from "../../Context/DadosAgendamentos";
import { useShowModalAgendamento } from "../../Context/ShowModalAgendamento";
import { useIdAtualizacao } from "../../Context/IdAtualizacao";

import apiJson from "../../api/callApi";

const ButtonCadastrar = styled.button`
  background-color: ${cores.primario};
  border: none;
  border-radius: 15px;
  color: ${cores.branco};
  cursor: pointer;
  font-size: 1.1rem;
  margin-bottom: 15px;
  outline: none;
  padding: 10px 0;
  width: 40%;
`;

const Fieldset = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const FieldSetEndereco = styled(Fieldset)`
  & > div {
    width: 25%;
  }
  & > div:first-child {
    width: 40%;
  }
`;

const FieldSetData = styled(Fieldset)`
  & > div {
    width: 48%;
  }
`;

const FieldSetNome = styled(Fieldset)`
  display: inline;
  width: 48%;
`;

const Form = styled.form`
  background-color: ${cores.branco};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 15px 30px;
  width: 100%;
`;

const FormAgendamento = ({
  camposData,
  camposEndereco,
  campoNomeVisitante,
}) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schemas.agendamentoSchema),
  });

  const { setShowModalAgendamento } = useShowModalAgendamento();

  const { dadosAgendamentos, setDadosAgendamentos } = useDadosAgendamentos();
  const { idAtualizacao, setIdAtualizacao } = useIdAtualizacao();

  const [valoresDefault, setValoresDefault] = useState([]);

  const getData = async (id) => {
    try {
      const res = await apiJson.getAgendamento(id);
      setValoresDefault(res.data);
    } catch (error) {
      console.log("Não foi possivel obter o agendamento com esse ID.", error);
    }
  };

  useEffect(() => {
    idAtualizacao.id !== undefined && getData(idAtualizacao.id);
  }, []);

  const createData = async (data) => {
    try {
      const res = await apiJson.createAgendamento(data);
      setDadosAgendamentos([...dadosAgendamentos, res.data]);
    } catch (error) {
      console.log("Não foi possivel criar o Agendamento.", error);
    }
  };

  const updateData = async (id, data) => {
    try {
      const res = await apiJson.updateAgendamento(id, data);
      const dadosAtualizados = dadosAgendamentos.filter(
        (dado) => dado.id !== id
      );

      setDadosAgendamentos([...dadosAtualizados, res.data]);

      setValoresDefault(res.data);
      setIdAtualizacao({});
    } catch (error) {
      console.log("Não foi possível atualizar o agendamento.", error);
    }
  };

  const handleFormSubmit = (data) => {
    idAtualizacao.id !== undefined
      ? updateData(idAtualizacao.id, data)
      : createData(data);

    setShowModalAgendamento(false);
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <FieldSetData>
        {camposData.map((campo) => (
          <CampoForm
            key={campo.nomeId}
            campoRequirido={campo.campoRequirido}
            erros={errors[campo.nomeId]}
            label={campo.label}
            nomeId={campo.nomeId}
            placeholder={campo.placeholder ? campo.placeholder : ""}
            registro={register}
            tipoCampo={campo.tipoCampo ? campo.tipoCampo : "text"}
            valorDefault={
              valoresDefault[campo.nomeId] !== undefined
                ? valoresDefault[campo.nomeId]
                : ""
            }
          />
        ))}
      </FieldSetData>
      <FieldSetNome>
        {campoNomeVisitante.map((campo) => (
          <CampoForm
            key={campo.nomeId}
            campoRequirido={campo.campoRequirido}
            erros={errors[campo.nomeId]}
            label={campo.label}
            nomeId={campo.nomeId}
            placeholder={campo.placeholder ? campo.placeholder : ""}
            registro={register}
            tipoCampo={campo.tipoCampo ? campo.tipoCampo : "text"}
            valorDefault={
              valoresDefault[campo.nomeId] !== undefined
                ? valoresDefault[campo.nomeId]
                : ""
            }
          />
        ))}
      </FieldSetNome>
      <FieldSetEndereco>
        {camposEndereco.map((campo) => (
          <CampoForm
            key={campo.nomeId}
            campoRequirido={campo.campoRequirido}
            erros={errors[campo.nomeId]}
            label={campo.label}
            nomeId={campo.nomeId}
            placeholder={campo.placeholder ? campo.placeholder : ""}
            registro={register}
            tipoCampo={campo.tipoCampo ? campo.tipoCampo : "text"}
            valorDefault={
              valoresDefault[campo.nomeId] !== undefined
                ? valoresDefault[campo.nomeId]
                : ""
            }
          />
        ))}
      </FieldSetEndereco>
      <ButtonCadastrar type="submit">Cadastrar Agendamento</ButtonCadastrar>
    </Form>
  );
};

FormAgendamento.propTypes = {
  camposData: PropTypes.array.isRequired,
  camposEndereco: PropTypes.array.isRequired,
  campoNomeVisitante: PropTypes.array.isRequired,
};

export default FormAgendamento;
