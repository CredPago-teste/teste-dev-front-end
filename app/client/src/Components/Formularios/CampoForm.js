import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import cores from "../../Configs/cores";
import MensagemErro from "../MensagemErro";

const FieldSet = styled.div`
  margin-bottom: 30px;
`;

const Input = styled.input`
  &::placeholder {
    color: ${cores.cinzaPlaceholder};
  }

  background-color: ${cores.cinzaClaro};
  border: 2px solid ${cores.cinzaMedio};
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 1rem;
  outline: none;
  padding: 15px;
  width: 100%;
`;

const Label = styled.label`
  color: ${cores.cinzaTexto};
  display: block;
  font-size: 1.1rem;
  margin-bottom: 5px;
`;

const RequiredSymbol = styled.span`
  color: ${cores.vermelhoAviso};
  font-weight: bold;
`;

const CampoForm = ({
  campoRequirido,
  erros,
  label,
  nomeId,
  placeholder,
  registro,
  tipoCampo,
  valorDefault,
}) => {
  return (
    <FieldSet>
      <Label>
        {label}
        {campoRequirido && <RequiredSymbol>*</RequiredSymbol>}:
      </Label>
      <Input
        placeholder={placeholder}
        type={tipoCampo}
        name={nomeId}
        ref={registro}
        defaultValue={valorDefault}
      ></Input>
      {erros && <MensagemErro erro={erros.message} />}
    </FieldSet>
  );
};

CampoForm.propTypes = {
  campoRequirido: PropTypes.bool,
  erros: PropTypes.object,
  label: PropTypes.string.isRequired,
  nomeId: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  registro: PropTypes.func.isRequired,
  tipoCampo: PropTypes.string,
  valorDefault: PropTypes.any,
};

export default CampoForm;
