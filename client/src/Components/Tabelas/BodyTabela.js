import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import cores from "../../Configs/cores";

const ButtonAcoes = styled.button`
  background-color: ${cores.primario};
  border: none;
  border-radius: 50px;
  color: ${cores.branco};
  cursor: pointer;
  font-size: 1rem;
  outline: none;
  padding: 5px 10px;
  width: 30%;

  &:last-child {
    background-color: ${cores.vermelhoAviso};
    margin-left: 20px;
  }

  @media screen and (max-width: 1080px) {
    width: 80%;
    &:last-child {
      background-color: ${cores.vermelhoAviso};
      margin-top: 10px;
    }
  }
`;

const ColunasBody = styled.td`
  &:last-child {
    text-align: right;
  }

  color: ${cores.cinzaTexto};
  font-size: 1.1rem;
  padding: 10px 0;
  text-transform: capitalize;
`;

const BodyTabela = ({ colunas, dados, handleEdicao, handleExclusao }) => {
  const geraKey = (id, path) => {
    return id + path;
  };

  return (
    <tbody>
      {dados.map((dado) => (
        <tr key={dado.id}>
          {colunas.map((coluna) =>
            coluna.path === "acoes" ? (
              <ColunasBody key={geraKey(dado.id, coluna.path)}>
                <ButtonAcoes onClick={() => handleEdicao(dado.id)}>
                  Editar
                </ButtonAcoes>
                <ButtonAcoes onClick={() => handleExclusao(dado.id)}>
                  Apagar
                </ButtonAcoes>
              </ColunasBody>
            ) : (
              <ColunasBody key={geraKey(dado.id, coluna.path)}>
                {dado[coluna.path]}
              </ColunasBody>
            )
          )}
        </tr>
      ))}
    </tbody>
  );
};

BodyTabela.propTypes = {
  colunas: PropTypes.array.isRequired,
  dados: PropTypes.array.isRequired,
  handleEdicao: PropTypes.func.isRequired,
  handleExclusao: PropTypes.func.isRequired,
};

export default BodyTabela;
