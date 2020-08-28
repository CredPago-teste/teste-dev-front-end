import axios from "axios";

const createAgendamento = async (data) => {
  const novoAgendamento = await axios.post(
    "http://localhost:8000/agendamentos",
    data
  );
  return novoAgendamento;
};

const deleteAgendamento = async (id) => {
  await axios.delete("http://localhost:8000/agendamentos/" + id);
};

const getAgendamentos = async () => {
  const agendamentos = await axios.get("http://localhost:8000/agendamentos");
  return agendamentos;
};

const getAgendamento = async (id) => {
  const agendamento = await axios.get(
    "http://localhost:8000/agendamentos/" + id
  );
  return agendamento;
};

const updateAgendamento = async (id, data) => {
  const agendamentoAtualizado = await axios.put(
    "http://localhost:8000/agendamentos/" + id,
    data
  );
  return agendamentoAtualizado;
};

export default {
  createAgendamento,
  deleteAgendamento,
  getAgendamento,
  getAgendamentos,
  updateAgendamento,
};
