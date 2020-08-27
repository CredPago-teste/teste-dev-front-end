import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

import {
  Container,
  HeaderModal,
  ModalBox,
  MainForm,
  BoxInputWrapper,
  BoxInput,
  BoxInputAdress,
} from './styles'

function initialState() {
  return {
    date: '',
    hour: '',
    name: '',
    street: '',
    numberAddress: '',
    propertyId: '',
  }
}

const Modal = ({ title, titleButton, onClose, id = 'modal' }) => {
  const [values, setValues] = useState(initialState)

  function onChange(e) {
    const { value, name } = e.target

    setValues({
      ...values,
      [name]: value,
    })
  }

  function onSubmit(e) {
    e.preventDefault()
  }

  function handleOutsideClick(e) {
    if (e.target.id === id) {
      onClose()
    }
  }

  return (
    <Container id={id} onClick={handleOutsideClick}>
      <ModalBox>
        <HeaderModal>
          <h1>{title}</h1>

          <button onClick={onClose}>
            <AiOutlineClose />
          </button>
        </HeaderModal>
        <MainForm onSubmit={onSubmit}>
          <BoxInputWrapper>
            <label>
              Data<span>*</span>:
              <input
                type='text'
                placeholder='dd/mm/yyyy'
                name='date'
                onChange={onChange}
                value={values.date}
              />
            </label>

            <label>
              Hora<span>*</span>:
              <input
                type='text'
                placeholder='hh:mm'
                name='hour'
                onChange={onChange}
                value={values.hour}
              />
            </label>
          </BoxInputWrapper>

          <BoxInput>
            <label>
              Nome do visitante<span>*</span>:
              <input
                type='text'
                placeholder='Kleber "Bambam" de Paula'
                name='name'
                onChange={onChange}
                value={values.name}
              />
            </label>
          </BoxInput>

          <BoxInputAdress>
            <label>
              Endereço<span>*</span>:
              <input
                type='text'
                placeholder='Ex: Rua São Paulo'
                name='street'
                onChange={onChange}
                value={values.street}
              />
            </label>

            <label>
              Número<span>*</span>:
              <input
                type='text'
                placeholder='Ex: 2'
                name='numberAddress'
                onChange={onChange}
                value={values.numberAddress}
              />
            </label>

            <label>
              ID Imóvel<span>*</span>:
              <input
                type='text'
                placeholder='EX: 6778'
                name='propertyId'
                onChange={onChange}
                value={values.propertyId}
              />
            </label>
          </BoxInputAdress>

          <button>{titleButton}</button>
        </MainForm>
      </ModalBox>
    </Container>
  )
}

export default Modal
