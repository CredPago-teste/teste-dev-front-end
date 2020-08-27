import styled from "styled-components";
import { Form as Unform } from "@unform/web";
import { shade } from "polished";

export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  background: #0dc2ef;

  strong {
    font-size: 32px;
    color: #ffffff;
    font-family: "Roboto-slab", sans-serif;
  }

  button {
    border: none;
    background: none;
  }

  @media only screen and (max-width: 425px) {
    strong {
      font-size: 25px;
    }
  }
`;

export const Form = styled(Unform)`
  padding: 15px 15px 50px 15px;

  div.column-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;

    div.column-2 {
      input {
        max-width: 137px;
      }
    }

    @media only screen and (max-width: 425px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  footer {
    margin-top: 30px;

    button {
      display: flex;
      align-items: center;
      background: #0dc2ee;
      border: none;
      color: #ffffff;
      padding: 10px 20px;
      font-size: 18px;
      border-radius: 5px;

      &:hover {
        background: ${shade(0.1, "#0DC2EE")};
      }
    }
  }
`;
