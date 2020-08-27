import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { HOME } from 'routes'
import StoreContext from 'components/Store/context'
import logo from 'assets/images/icons/logo-credpago.svg'
import { Container, FormLogin, BoxInput, BoxWrapper } from './styles'

function initialState() {
  return { email: '', password: '' }
}

function LoginIn({ email, password }) {
  if (email === 'credpago@gmail.com' && password === 'admin') {
    return { token: '1234' }
  }

  return { error: 'Email ou senha invalido!' }
}

const Login = () => {
  const [values, setValues] = useState(initialState)
  const { setToken } = useContext(StoreContext)
  const history = useHistory()

  function onChange(e) {
    const { value, name } = e.target

    setValues({
      ...values,
      [name]: value,
    })
  }

  function onSubmit(e) {
    e.preventDefault()

    const { token } = LoginIn(values)

    if (token) {
      setToken(token)
      history.push(HOME)
    }

    setValues(initialState)
  }

  return (
    <Container>
      <img src={logo} alt='Credpago' />
      <FormLogin onSubmit={onSubmit}>
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
              name='password'
              type='password'
              onChange={onChange}
              value={values.password}
            />
          </label>
        </BoxInput>

        <button>Entrar</button>

        <BoxWrapper>
          <Link to='/'>Esqueci minha senha</Link>
          <Link to='/register'>Cadastrar</Link>
        </BoxWrapper>
      </FormLogin>
    </Container>
  )
}

export default Login
