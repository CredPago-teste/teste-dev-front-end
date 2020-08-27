import React, { useContext } from 'react'
import StoreContext from 'components/Store/context'

import logo from 'assets/images/icons/logo-credpago.svg'
import { Container, BoxHeader, Ul } from './styles'

const Header = () => {
  const { setToken } = useContext(StoreContext)

  function Logout() {
    setToken()
  }

  return (
    <Container>
      <BoxHeader>
        <img src={logo} alt='Credpago' />

        <Ul>
          <li>
            <button>MEU PERFIL</button>
          </li>
          <span />
          <li>
            <button onClick={Logout}>SAIR</button>
          </li>
        </Ul>

        <p>Olá, Mauricio Corretor</p>
      </BoxHeader>
    </Container>
  )
}

export default Header
