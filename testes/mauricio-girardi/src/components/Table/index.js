import React, { useState } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'

import ModalNewSheduling from 'components/ModalNewSheduling'
import { Container, BoxTable, ModalDelete, Modal } from './styles'

const Table = () => {
  const [modalDelete, setModalDelete] = useState(false)
  const [isModalVisibleEdite, setIsModalVisibleEdite] = useState(false)

  function handleModalDeleteYesOrNot() {
    setModalDelete(!modalDelete)
  }

  function handleOpenModalEdite() {
    setIsModalVisibleEdite(true)
  }

  function handleCloseModalEdite() {
    setIsModalVisibleEdite(false)
  }

  return (
    <Container>
      <BoxTable>
        <table>
          <thead>
            <tr>
              <th>DATA/HORA</th>
              <th>ID DO IMÓVEL</th>
              <th>VISITANTE</th>
              <th>ENDEREÇO</th>
              <th style={{ textAlign: 'right' }}>AÇÕES</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>22/08/2020 11:00</td>
              <td>11995265</td>
              <td>Samuel Silva</td>
              <td>
                Rua Sombrio,123 <FaMapMarkerAlt />
              </td>
              <td style={{ textAlign: 'right' }}>
                <button onClick={handleOpenModalEdite}>Editar</button>
                <button onClick={handleModalDeleteYesOrNot}>Apagar</button>
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>22/08/2020 11:00</td>
              <td>11995265</td>
              <td>Samuel Silva</td>
              <td>
                Rua Sombrio,123 <FaMapMarkerAlt />
              </td>
              <td style={{ textAlign: 'right' }}>
                <button onClick={handleOpenModalEdite}>Editar</button>
                <button onClick={handleModalDeleteYesOrNot}>Apagar</button>
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>22/08/2020 11:00</td>
              <td>11995265</td>
              <td>Samuel Silva</td>
              <td>
                Rua Sombrio,123 <FaMapMarkerAlt />
              </td>
              <td style={{ textAlign: 'right' }}>
                <button onClick={handleOpenModalEdite}>Editar</button>
                <button onClick={handleModalDeleteYesOrNot}>Apagar</button>
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>22/08/2020 11:00</td>
              <td>11995265</td>
              <td>Samuel Silva</td>
              <td>
                Rua Sombrio,123 <FaMapMarkerAlt />
              </td>
              <td style={{ textAlign: 'right' }}>
                <button onClick={handleOpenModalEdite}>Editar</button>
                <button onClick={handleModalDeleteYesOrNot}>Apagar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </BoxTable>

      {modalDelete && (
        <ModalDelete>
          <Modal>
            <p>Você deseja remover essa visita?</p>

            <div>
              <button onClick={() => setModalDelete(false)}>Cancelar</button>
              <button>Apagar</button>
            </div>
          </Modal>
        </ModalDelete>
      )}

      {isModalVisibleEdite && (
        <ModalNewSheduling
          title='Editar Agendamento'
          titleButton='Editar'
          onClose={handleCloseModalEdite}
        />
      )}
    </Container>
  )
}

export default Table
