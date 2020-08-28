import React from "react";

import ContainerAcesso from "../Containers/ContainerAcesso";
import FormAcesso from "../Components/Formularios/FormAcesso";

const camposLogin = [
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

const linksLogin = [
  {
    id: 0,
    frase: "Esqueci minha senha",
    url: "#",
  },
  {
    id: 1,
    frase: "Não possui cadastro? Registre-se",
    url: "/cadastro",
  },
];

const Login = () => {
  const handleLogin = async (data) => {
    console.log(data);
  };

  return (
    <ContainerAcesso>
      <FormAcesso
        campos={camposLogin}
        labelButton="Entrar"
        links={linksLogin}
        handleAcesso={handleLogin}
        schema="acessoLoginSchema"
      />
    </ContainerAcesso>
  );
};

export default Login;

//
