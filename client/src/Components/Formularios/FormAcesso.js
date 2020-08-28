import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";

import CampoForm from "./CampoForm";
import schemas from "../../Helpers/schemasYup";
import cores from "../../Configs/cores";

const Button = styled.button`
  background-color: ${cores.primario};
  border: none;
  border-radius: 10px;
  color: ${cores.branco};
  cursor: pointer;
  font-size: 1.1rem;
  margin-bottom: 15px;
  outline: none;
  padding: 20px 0;
`;

const Form = styled.form`
  background-color: ${cores.branco};
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 3%;
  width: 35%;

  @media screen and (max-width: 1228px) {
    width: 40%;
  }
  @media screen and (max-width: 900px) {
    width: 50%;
  }
  @media screen and (max-width: 630px) {
    width: 60%;
  }
`;

const LinkRouter = styled(Link)`
  text-decoration: none;
  border-bottom: 2px solid ${cores.cinzaMedio};
  color: ${cores.cinzaTexto};
  width: max-content;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 5px;
`;

const FormAcesso = ({ campos, handleAcesso, labelButton, links, schema }) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schemas[schema]),
  });

  return (
    <Form onSubmit={handleSubmit(handleAcesso)}>
      {campos.map((campo) => (
        <CampoForm
          key={campo.nomeId}
          campoRequirido={campo.campoRequirido}
          erros={errors[campo.nomeId]}
          label={campo.label}
          nomeId={campo.nomeId}
          placeholder={campo.placeholder ? campo.placeholder : ""}
          registro={register}
          tipoCampo={campo.tipoCampo ? campo.tipoCampo : "text"}
        />
      ))}
      <Button type="submit">{labelButton}</Button>
      {links.map((link) => (
        <LinkRouter key={link.id} to={link.url}>
          {link.frase}
        </LinkRouter>
      ))}
    </Form>
  );
};

FormAcesso.propTypes = {
  campos: PropTypes.array.isRequired,
  handleAcesso: PropTypes.func.isRequired,
  labelButton: PropTypes.string.isRequired,
  links: PropTypes.array,
  schema: PropTypes.string.isRequired,
};

export default FormAcesso;
