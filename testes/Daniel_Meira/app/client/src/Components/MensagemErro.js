import React from "react";

import styled from "styled-components";

const Erro = styled.p`
  color: #f47373;
  margin: 0;
  position: absolute;
`;

const MensagemErro = ({ erro }) => {
  if (!erro) return null;

  return <Erro>{erro}</Erro>;
};

export default MensagemErro;
