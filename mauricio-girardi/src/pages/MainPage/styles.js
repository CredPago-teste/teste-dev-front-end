import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`

export const Main = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 5rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-weight: 600;
    font-size: 2.8rem;
  }

  button {
    border-radius: 0.5rem;
    background-color: #0dc2ee;
    color: #ffffff;
    border: 0;
    width: 21rem;
    height: 4.6rem;
    font-weight: 600;
    cursor: pointer;
    transition: filter 400ms ease-out;
  }

  button:hover {
    filter: opacity(85%);
  }
`
