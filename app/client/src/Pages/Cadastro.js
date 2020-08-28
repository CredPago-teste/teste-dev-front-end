import React from "react";

import ContainerAcesso from "../Containers/ContainerAcesso";
import FormAcesso from "../Components/Formularios/FormAcesso";

const camposCadastro = [
  {
    campoRequirido: true,
    label: "Nome",
    nomeId: "nome",
  },
  {
    campoRequirido: true,
    label: "Email",
    nomeId: "email",
    placeholder: "seu@email.com",
  },
  {
    campoRequirido: true,
    label: "Senha",
    nomeId: "senha",
    tipoCampo: "password",
  },
];

const linksCadastro = [
  {
    id: 0,
    frase: "Já possui conta? Faça o login.",
    url: "/login",
  },
];

const Cadastro = () => {
  const handleRegistro = (data) => {
    console.log(data);
  };

  return (
    <ContainerAcesso>
      <FormAcesso
        campos={camposCadastro}
        labelButton="Entrar"
        links={linksCadastro}
        handleAcesso={handleRegistro}
        schema="acessoCadastroSchema"
      />
    </ContainerAcesso>
  );
};

export default Cadastro;

//
