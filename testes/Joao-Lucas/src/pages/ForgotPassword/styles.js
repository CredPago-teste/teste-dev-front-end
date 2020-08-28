import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background: var(--color-background-login);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Content = styled.div`
  height: 100%;
  width: 28%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 25%;
    margin-bottom: 2rem;
  }
  
  @media only screen and (max-width: 1600px) {
    width: 40%;
  }

  @media only screen and (max-width: 1200px) {
    width: 75%;
  }

  @media only screen and (max-width: 700px) {
    width: 90%;
    img {
      width: 30%;
    }
  }

`;

export const FormForgotPassword = styled.form`
  background: white;
  width: 100%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8% 10%;
  
  a {
    align-self: flex-start;
    margin: auto;
    margin-top: 1.3rem;
    color: #5c5c5c; 
  }

  button {
    margin-top: 0.8rem !important;
  }
`;

