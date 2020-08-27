import React, { useState } from 'react'

import Header from 'components/Header'
import Table from 'components/Table'
import ModalNewSheduling from 'components/ModalNewSheduling'

import { Container, Main } from './styles'

const MainPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  function handleOpenModal() {
    setIsModalVisible(true)
  }

  function handleCloseModal() {
    setIsModalVisible(false)
  }

  return (
    <Container>
      <Header />
      <Main>
        <h1>Próximas Visitas</h1>
        <button onClick={handleOpenModal}>+ Novo agendamento</button>
      </Main>
      <Table />
      {isModalVisible && (
        <ModalNewSheduling
          title=' Novo Agendamento'
          titleButton='Cadastrar Agendamento'
          onClose={handleCloseModal}
        />
      )}
    </Container>
  )
}

export default MainPage
