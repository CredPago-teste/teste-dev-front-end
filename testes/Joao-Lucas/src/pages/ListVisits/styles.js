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
`;

export const TitleButton = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  margin: auto;
  margin-top: 5vh;
  button {
    width: 20%;
    margin-top: 0;
  }
  @media only screen and (max-width: 700px) {
    width: 100%;
    h2 {
      font-size: 1.3rem;
    }

    button {
      width: 50%;
      font-size: 3rem;
    }

    span {
      display: none;
    }
    button:after {
      content: '+';
    }
  }
`;

export const Visits = styled.div`
  width: 80%;
  padding: 0 10%;
  margin: auto;
  margin-top: 5vh;


  @media only screen and (max-width: 700px) {
    overflow: auto;
    font-size: 0.7rem;
    padding: 0;
    width: 90%;
  }
`;

export const FormAdd = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
        "input1 input1 input2 input2"
        "input3 input3 . ."
        "input4 input4 input4 input4"
        "button button . .";
  grid-gap: 1%;
  padding: 0 5%;

  > div:nth-child(1) {
    grid-area: input1;
  }
  > div:nth-child(2) {
    grid-area: input2;
  }
  > div:nth-child(3) {
    grid-area: input3;
  }
  > div:nth-child(4) {
    grid-area: input4;
  }

  .inputGroup {
    display: flex;
    grid-gap: 1%;

    div:nth-child(1) {
      width: 50%
    }
    div:nth-child(2) {
      width: 25%
    }
    div:nth-child(3) {
      width: 25%
    }
  }

  button {
    grid-area: button;
    height: 50px;
  }
  
  @media only screen and (max-width: 700px) {
    font-size: 1rem;
    
    button {
      font-size: 1rem;
    }
  }
  
`;

export const FormDelete = styled.form`
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-red);

  h4 {
    transform: translateY(-50%);
    text-align: center;
  }

  .ButtonGroup {
    display: flex;
    width: 100%;
    position: absolute;
    bottom: 5%;
    button {
      width: 45% !important;
      margin: auto;
    }

    button:nth-child(1) {
      background: transparent;
      border: 1px solid #000;
      color: #000;
    }

    button:nth-child(2) {
      background: var(--color-red);
      border: 1px solid var(--color-red);
      color: white;
    }
  }
`;