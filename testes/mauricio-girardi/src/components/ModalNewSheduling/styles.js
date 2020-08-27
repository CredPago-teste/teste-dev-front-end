import styled from 'styled-components'

export const Container = styled.div`
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
export const ModalBox = styled.div`
  max-width: 550px;
  width: 100%;
`

export const HeaderModal = styled.header`
  background: linear-gradient(
    90deg,
    rgba(105, 217, 244, 1) 3%,
    rgba(0, 212, 255, 1) 51%,
    rgba(105, 217, 244, 1) 100%
  );
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;

  width: 100%;
  height: 8rem;

  h1 {
    color: #ffffff;
    font-size: 2.5rem;
    font-weight: 600;
  }

  button {
    background: transparent;
    cursor: pointer;
    border: 0;
    outline: 0;
    font-size: 2.5rem;
    line-height: 3rem;
  }
`

export const MainForm = styled.form`
  background-color: #ffffff;
  padding: 4rem;

  button {
    border-radius: 0.5rem;
    background-color: #0dc2ee;
    color: #ffffff;
    border: 0;
    width: 50%;
    height: 4.7rem;
    font-weight: 600;
    cursor: pointer;
    transition: filter 400ms ease-out;
  }

  button:hover {
    filter: opacity(85%);
  }
`

export const BoxInputWrapper = styled.div`
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  label {
    color: #525252;
    display: block;
    width: 100%;
    max-width: 22rem;
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
    max-width: 22rem;
    height: 4.3rem;
    margin-top: 0.5rem;
  }
`

export const BoxInputAdress = styled.div`
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  label {
    color: #525252;
    display: block;
    width: 100%;
    max-width: 18rem;
  }

  label + label {
    max-width: 12rem;
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
    max-width: 18rem;
    height: 4.3rem;
    margin-top: 0.5rem;
  }

  input + input {
    max-width: 12rem;
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
    margin-top: 0.5rem;
    border-radius: 0.5rem;
    background-color: #f1f1f1;
    border: 1px solid #d6d6d6;
    padding-left: 1rem;
    width: 100%;
    height: 4.3rem;
    box-sizing: border-box;
  }
`
