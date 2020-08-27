import React, { useState } from "react";
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
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const [deletingAppointment, setDeletingAppointment] = useState(0);
  const [editingAppointment, setEditingAppointment] = useState(
    {} as Appointment
  );

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
              <tr>
                <td>22/08/2020 11:00</td>
                <td>1235838</td>
                <td>Samuel Silva</td>
                <td>
                  Rua Sombrio, 123 <MdLocationOn />
                </td>
                <td className="actions">
                  <button
                    type="button"
                    className="edit"
                    onClick={() => {
                      setEditingAppointment({
                        address: "Rua Tabatinga",
                        address_number: "1518",
                        date: "28/02/2021",
                        hour: "21:00",
                        id: 1,
                        immobile_id: 1000,
                        visitor_name: "Rodrigo Albino Hammes",
                      });

                      toogleEditModal();
                    }}
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    className="delete"
                    onClick={() => {
                      setDeletingAppointment(1);

                      toogleDeleteModal();
                    }}
                  >
                    Apagar
                  </button>
                </td>
              </tr>
              <tr>
                <td>22/08/2020 11:00</td>
                <td>1235838</td>
                <td>Samuel Silva</td>
                <td>
                  Rua Sombrio, 123 <MdLocationOn />
                </td>
                <td className="actions">
                  <button type="button" className="edit">
                    Editar
                  </button>
                  <button type="button" className="delete">
                    Apagar
                  </button>
                </td>
              </tr>
              <tr>
                <td>22/08/2020 11:00</td>
                <td>1235838</td>
                <td>Samuel Silva</td>
                <td>
                  Rua Sombrio, 123 <MdLocationOn />
                </td>
                <td className="actions">
                  <button type="button" className="edit">
                    Editar
                  </button>
                  <button type="button" className="delete">
                    Apagar
                  </button>
                </td>
              </tr>
              <tr>
                <td>22/08/2020 11:00</td>
                <td>1235838</td>
                <td>Samuel Silva</td>
                <td>
                  Rua Sombrio, 123 <MdLocationOn />
                </td>
                <td className="actions">
                  <button type="button" className="edit">
                    Editar
                  </button>
                  <button type="button" className="delete">
                    Apagar
                  </button>
                </td>
              </tr>
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
        editingAppoinment={{
          address: "Rua Tabatinga",
          address_number: "1518",
          date: "28/02/2021",
          hour: "21:00",
          id: 1,
          immobile_id: 1000,
          visitor_name: "Rodrigo Albino Hammes",
        }}
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
