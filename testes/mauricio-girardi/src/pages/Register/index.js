import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'

import logo from 'assets/images/icons/logo-credpago.svg'
import { Container, FormLogin, BoxInput, Header } from './styles'
import { LOGIN } from 'routes'

function initialState() {
  return {
    name: '',
    email: '',
    password: '',
  }
}

const Register = () => {
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

  return (
    <Container>
      <img src={logo} alt='Credpago' />
      <FormLogin onSubmit={onSubmit}>
        <Header>
          <Link to={LOGIN}>
            <BiArrowBack />
          </Link>
          <h2>Cadastro</h2>
        </Header>
        <BoxInput>
          <label>
            Nome completo<span>*</span>:
            <input
              type='text'
              name='name'
              onChange={onChange}
              value={values.name}
            />
          </label>
        </BoxInput>

        <BoxInput>
          <label>
            Email<span>*</span>:
            <input
              type='email'
              name='email'
              placeholder='seu@email.com'
              onChange={onChange}
              value={values.email}
            />
          </label>
        </BoxInput>

        <BoxInput>
          <label>
            Senha<span>*</span>:
            <input
              type='password'
              name='password'
              onChange={onChange}
              value={values.password}
            />
          </label>
        </BoxInput>

        <button>Cadastrar</button>
      </FormLogin>
    </Container>
  )
}

export default Register
