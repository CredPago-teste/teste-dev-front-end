import styled from "styled-components";
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

export const Content = styled.div`
  padding: 15px 15px 15px 15px;

  div {
  }

  footer {
    display: flex;
    margin-top: 30px;
    align-items: center;

    button {
      display: flex;
      align-items: center;
      background: #0dc2ee;
      border: none;
      color: #ffffff;
      padding: 10px 20px;
      font-size: 18px;
      border-radius: 5px;

      &.confirm {
        background: #ee6c62;

        &:hover {
          background: ${shade(0.1, "#ee6c62")};
        }
      }

      &.cancel {
        background: #0dc0f3;

        &:hover {
          background: ${shade(0.1, "#0dc0f3")};
        }
      }

      & + button {
        margin-left: 5px;
      }
    }
  }
`;
