import * as yup from "yup";
import { parse } from "date-fns";

function validaData(value) {
  const regexData = /^(0[1-9]|[1-2]?[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
  const resultadoRegex = regexData.exec(value);

  if (!resultadoRegex) {
    return false;
  }

  const parsedDate = parse(value, "dd/MM/yyyy", new Date());

  if (parsedDate === "Invalid Date") {
    return false;
  }

  return true;
}

const acessoLoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Digite um email válido")
    .required("Digite um email"),
  senha: yup.string().required("Digite uma senha"),
});

const acessoCadastroSchema = yup.object().shape({
  email: yup
    .string()
    .email("Digite um email válido")
    .required("Digite um email"),
  nome: yup.string().required("Digite seu nome"),
  senha: yup
    .string()
    .required("Digite uma senha")
    .min(6, "A senha deve possuir mais que 6 caracteres"),
});

const agendamentoSchema = yup.object().shape({
  data: yup
    .string()
    .test("data-valida", "Data formato invalido", (value) => validaData(value))
    .required("Digite uma data"),
  endereco: yup.string().required("Digite o endereço"),
  idImovel: yup
    .number()
    .typeError("Digite um número valido")
    .required("Digite o id do imóvel"),
  hora: yup
    .string()
    .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Hora no formato inválido")
    .required("Digite uma hora"),
  nomeVisitante: yup.string().required("Digite seu nome"),
  numero: yup
    .number()
    .typeError("Digite um número valido.")
    .required("Digite o numero"),
});

export default {
  acessoLoginSchema,
  acessoCadastroSchema,
  agendamentoSchema,
};
