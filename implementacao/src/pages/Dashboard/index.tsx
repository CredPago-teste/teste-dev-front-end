import React from "react";
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

const Dashboard: React.FC = () => {
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
            <button type="button">
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
    </Container>
  );
};

export default Dashboard;
