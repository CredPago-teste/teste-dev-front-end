import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background: #fff;
  }
`;

export const Container = styled.div`
  max-width: 100vw !important;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5vh;
`;

export const User = styled.div`
  background: #e8e8e8;
  width: 30vw;
  border-radius: 5px;
  @media only screen and (max-width: 700px) {
    width: 90vw;
  }
`;

export const FormUser = styled.form`
  padding: 10%;

  h2 {
    display: flex;
    justify-content: center;
  }

  p {
    display: flex;
    justify-content: center;
    margin-top: 1.3rem;
    height: 1rem;
  }

  .error {
    color: var(--color-red);
  }

  .success {
    color: green;
  }
`;