import React, { useState, useEffect } from "react";
import { MdAdd, MdLocationOn } from "react-icons/md";

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
import api from "../../services/api";

interface Appointment {
  id: number;
  date: string;
  hour: string;
  visitor_name: string;
  address: string;
  address_number: string;
  immobile_id: number;
}

const Dashboard: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const [deletingAppointment, setDeletingAppointment] = useState(0);
  const [editingAppointment, setEditingAppointment] = useState(
    {} as Appointment
  );

  useEffect(() => {
    async function loadAppointments(): Promise<void> {
      const response = await api.get("appointments");

      setAppointments(response.data);
    }

    loadAppointments();
  }, []);

  async function handleAddAppointment(
    appointment: Omit<Appointment, "id">
  ): Promise<void> {
    console.log(appointment);
  }

  async function handleDeleteAppointment(): Promise<void> {
    console.log("deleted");

    setDeletingAppointment(0);
    setModalDeleteOpen(false);
  }

  async function handleUpdateAppointment(
    appointment: Omit<Appointment, "id">
  ): Promise<void> {
    console.log(appointment);
  }

  function toogleModal(): void {
    setModalOpen(!modalOpen);
  }

  function toogleDeleteModal(): void {
    setModalDeleteOpen(!modalDeleteOpen);
  }

  function toogleEditModal(): void {
    setModalEditOpen(!modalEditOpen);
  }

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="CredPago" />
          <div>
            <a href="/">MEU PERFIL</a>
            <hr />
            <a href="/">SAIR</a>
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
              {appointments.map((appointment) => (
                <tr>
                  <td>22/08/2020 11:00</td>
                  <td>1235838</td>
                  <td>{appointment.visitor_name}</td>
                  <td>
                    Rua Sombrio, 123 <MdLocationOn />
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
                        setDeletingAppointment(appointment.id);

                        toogleDeleteModal();
                      }}
                    >
                      Apagar
                    </button>
                  </td>
                </tr>
              ))}
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
