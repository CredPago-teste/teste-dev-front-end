import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import cores from "../../Configs/cores";

const ColunasHead = styled.td`
  border-bottom: 2px solid ${cores.cinzaClaro};
  color: ${cores.cinzaTexto};
  font-size: 1.2rem;
  font-weight: 500;
  padding: 5px 0;
  text-transform: uppercase;

  &:last-child {
    text-align: right;
  }
`;

const HeadTabela = ({ colunas }) => {
  return (
    <thead>
      <tr>
        {colunas.map((coluna) => (
          <ColunasHead key={coluna.id}>{coluna.label}</ColunasHead>
        ))}
      </tr>
    </thead>
  );
};

HeadTabela.propTypes = {
  colunas: PropTypes.array.isRequired,
};

export default HeadTabela;
