import React, { useState, useEffect } from "react";
import { MdAdd, MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo-credpago.svg";
import {
  Container,
  Header,
  HeaderContent,
  Content,
  TitleContainer,
  Main,
  AppointmentsTable,
} from "./styles";
import ModalAddAppointment from "../../Components/ModalAddAppointment";
import ModalDeleteAppointment from "../../Components/ModalDeleteAppointment";
import ModalEditAppointment from "../../Components/ModalEditAppointment";
import { useToast } from "../../hooks/toast";
import api from "../../services/api";

interface Appointment {
  id: number;
  date: string;
  hour: string;
  visitor_name: string;
  address: string;
  address_number: string;
  immobile_id: string;
}

const Dashboard: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const [deletingAppointment, setDeletingAppointment] = useState<Appointment>(
    {} as Appointment
  );
  const [editingAppointment, setEditingAppointment] = useState<Appointment>(
    {} as Appointment
  );

  const { addToast } = useToast();

  useEffect(() => {
    async function loadAppointments(): Promise<void> {
      const response = await api.get("appointments");

      setAppointments(response.data);
    }

    loadAppointments();
  }, []);

  function toogleModal(): void {
    setModalOpen(!modalOpen);
  }

  function toogleDeleteModal(): void {
    setModalDeleteOpen(!modalDeleteOpen);
  }

  function toogleEditModal(): void {
    setModalEditOpen(!modalEditOpen);
  }

  async function handleAddAppointment(
    appointment: Omit<Appointment, "id">
  ): Promise<void> {
    try {
      const response = await api.post("appointments", appointment);

      setAppointments([...appointments, response.data]);

      toogleModal();
      addToast({
        title: "Cadastro realizado!",
        description: "Seu agendamento foi cadastrado com sucesso!",
        type: "success",
      });
    } catch (err) {
      addToast({
        title: "Ops! Algo deu errado",
        description:
          "Não foi possível cadastrar este agendamento. Tente novamente.",
        type: "error",
      });
    }
  }

  async function handleDeleteAppointment(): Promise<void> {
    try {
      await api.delete(`appointments/${deletingAppointment.id}`);

      const appointmentsFiltered = appointments.filter(
        (item) => item.id !== deletingAppointment.id
      );

      setAppointments(appointmentsFiltered);

      addToast({
        title: "Agendamento removido!",
        description: "Seu agendamento foi removido com sucesso!",
        type: "success",
      });
    } catch (err) {
      addToast({
        title: "Ops! Algo deu errado",
        description:
          "Não foi possível remover este agendamento. Tente novamente.",
        type: "error",
      });
    }

    setModalDeleteOpen(false);
  }

  async function handleUpdateAppointment(
    appointment: Omit<Appointment, "id">
  ): Promise<void> {
    try {
      const response = await api.put(
        `/appointments/${editingAppointment.id}`,
        appointment
      );

      const findIndex = appointments.findIndex(
        (findAppointment) => findAppointment.id === editingAppointment.id
      );

      const updatedAppointments = [...appointments];

      updatedAppointments[findIndex] = response.data;

      setAppointments(updatedAppointments);

      toogleEditModal();

      addToast({
        title: "Agendamento alterado!",
        description: "Seu agendamento foi alterado com sucesso!",
        type: "success",
      });
    } catch (err) {
      addToast({
        title: "Ops! Algo deu errado",
        description:
          "Não foi possível alterar este agendamento. Tente novamente.",
        type: "error",
      });
    }
  }

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="CredPago" />
          <div>
            <a href="/">MEU PERFIL</a>
            <hr />
            <Link to="/">SAIR</Link>
          </div>
          <div>
            <span>Olá João Corretor</span>
          </div>
        </HeaderContent>
      </Header>
      <Content>
        <TitleContainer>
          <h1>Próximas Visitas</h1>

          <div>
            <button type="button" onClick={toogleModal}>
              <MdAdd /> Novo agendamento
            </button>
          </div>
        </TitleContainer>
        <Main>
          <AppointmentsTable>
            <thead>
              <tr>
                <th>DATA/HORA</th>
                <th>ID DO IMÓVEL</th>
                <th>VISITANTE</th>
                <th>ENDEREÇO</th>
                <th className="actions">AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              {!appointments ? (
                <strong>Olá</strong>
              ) : (
                appointments.map((appointment) => (
                  <tr key={appointment.id}>
                    <td>{`${appointment.date} ${appointment.hour}`}</td>
                    <td>{appointment.immobile_id}</td>
                    <td>{appointment.visitor_name}</td>
                    <td>
                      {`${appointment.address}, ${appointment.address_number}`}{" "}
                      <MdLocationOn />
                    </td>
                    <td className="actions">
                      <button
                        type="button"
                        className="edit"
                        onClick={() => {
                          setEditingAppointment(appointment);
                          toogleEditModal();
                        }}
                      >
                        Editar
                      </button>
                      <button
                        type="button"
                        className="delete"
                        onClick={() => {
                          setDeletingAppointment(appointment);
                          toogleDeleteModal();
                        }}
                      >
                        Apagar
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </AppointmentsTable>
        </Main>
      </Content>

      <ModalAddAppointment
        isOpen={modalOpen}
        setIsOpen={toogleModal}
        handleAddAppointment={handleAddAppointment}
      />

      <ModalEditAppointment
        isOpen={modalEditOpen}
        setIsOpen={toogleEditModal}
        editingAppoinment={editingAppointment}
        handleUpdateAppointment={handleUpdateAppointment}
      />

      <ModalDeleteAppointment
        isOpen={modalDeleteOpen}
        setIsOpen={toogleDeleteModal}
        handleDeleteAppointment={handleDeleteAppointment}
      />
    </Container>
  );
};

export default Dashboard;
