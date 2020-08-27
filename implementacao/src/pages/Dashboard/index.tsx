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

interface Appointment {
  id: number;
  date: string;
  hour: string;
  visitor_name: string;
  addres: string;
  address_number: string;
  immobile_id: number;
}

const Dashboard: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  async function handleAddAppointment(
    appointment: Omit<Appointment, "id">
  ): Promise<void> {
    console.log(appointment);
  }

  function toogleModal(): void {
    setModalOpen(!modalOpen);
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
    </Container>
  );
};

export default Dashboard;
