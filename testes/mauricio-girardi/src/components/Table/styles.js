import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  max-width: 1000px;
  margin: 0 auto;
`
export const BoxTable = styled.main`
  width: 100%;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 0.8rem;
    text-align: left;
    color: #9d9d9d;
    border-bottom: 1px solid #ddd;
  }

  button + button {
    background-color: #ef6968;
    margin-left: 1.6rem;
  }

  button {
    border-radius: 5rem;
    background-color: #0dc2ee;
    color: #ffffff;
    border: 0;
    width: 7rem;
    height: 2.3rem;
    font-weight: 600;
    font-size: 1.4rem;
    cursor: pointer;
    transition: filter 400ms ease-out;
    outline: 0;
  }

  button:hover {
    filter: opacity(85%);
  }
`

export const ModalDelete = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
`

export const Modal = styled.div`
  background-color: #ffffff;
  padding: 5rem 4rem;
  border-radius: 0.5rem;
  position: relative;

  div {
    position: absolute;
    right: 1.6rem;
    bottom: 1.6rem;
  }

  p {
    margin-bottom: 2rem;
  }

  button + button {
    background-color: #ef6968;
    margin-left: 1.6rem;
  }

  button {
    border-radius: 5rem;
    background-color: #0dc2ee;
    color: #ffffff;
    border: 0;
    width: 8.5rem;
    height: 2.3rem;
    font-weight: 600;
    font-size: 1.4rem;
    cursor: pointer;
    transition: filter 400ms ease-out;
    outline: 0;
  }
`
