import styled from 'styled-components'

export const Container = styled.div`
  background-color: #0dc2ef;
  width: 100vw;
`

export const BoxHeader = styled.header`
  width: 100vw;
  height: 100vh;
  max-width: 1000px;
  max-height: 8rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 13rem;
  }

  p {
    color: #ffffff;
    font-size: 1.4rem;
  }
`

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20rem;

  span {
    width: 2px;
    height: 3.5rem;
    background-color: #2ccbf2;
  }

  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 1.8rem;
    letter-spacing: 0.2rem;
  }

  button {
    color: #ffffff;
    font-size: 1.8rem;
    letter-spacing: 0.2rem;
    background: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
  }
`
