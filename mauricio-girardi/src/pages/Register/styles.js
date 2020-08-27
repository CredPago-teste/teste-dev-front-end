import styled from 'styled-components'

export const Container = styled.div`
  background-color: #0091d4;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 15rem;
  }
`

export const FormLogin = styled.form`
  background-color: #ffffff;
  border-radius: 0.5rem;
  width: 40rem;
  height: 47rem;
  margin-top: 3.5rem;
  padding: 3rem;

  @media (max-width: 500px) {
    width: 35rem;
  }

  button {
    border-radius: 0.5rem;
    background-color: #0dc2ee;
    color: #ffffff;
    border: 0;
    width: 100%;
    height: 4.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: filter 400ms ease-out;
  }

  button:hover {
    filter: opacity(85%);
  }
`

export const BoxInput = styled.div`
  margin-bottom: 2.5rem;

  label {
    color: #525252;
  }

  span {
    color: #f36969;
  }

  input {
    border-radius: 0.5rem;
    background-color: #f1f1f1;
    border: 1px solid #d6d6d6;
    padding-left: 1rem;
    width: 100%;
    height: 4.3rem;
    margin-top: 0.5rem;
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;

  h2 {
    font-weight: 600;
    color: #525252;
  }

  a {
    font-size: 2.5rem;
    color: #525252;
    transition: 400ms;
  }

  a:hover {
    color: #0dc2ee;
  }
`
