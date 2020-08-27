import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export const Header = styled.header`
  padding: 15px;
  background: #0dc2ef;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 960px;
  margin: 0 auto;

  img {
    width: 150px;
  }

  div {
    display: flex;
    align-items: center;

    > a {
      color: #fff;
      text-decoration: none;
      font-size: 22px;

      & + a {
        margin-left: 10px;
      }
    }

    hr {
      width: 1px;
      height: 30px;
      background: #fff;
      margin: 0 30px;
      border: none;
      display: inline-block;
    }

    > span {
      color: #fff;
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 425px) {
    display: grid;
    grid-template-areas:
      "LOGO WCM WCM"
      "MENU MENU MENU";
    grid-gap: 10px;
    place-content: center;

    img {
      grid-area: LOGO;
      width: 100px;
    }

    div {
      &.welcome {
        grid-area: WCM;
      }

      &.menu {
        grid-area: MENU;
        width: 100%;
        place-content: center;
      }
    }
  }
`;

export const Content = styled.div`
  max-width: 960px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 15px 0;
  margin: 45px auto 0;

  @media only screen and (max-width: 768px) {
    padding: 15px;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-weight: 700;
  }

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

    svg {
      margin-right: 5px;
    }
  }

  @media only screen and (max-width: 425px) {
    h1 {
      font-size: 30px;
    }

    button {
      span {
        display: none;
      }

      svg {
        margin: 0;
        font-size: 30px;
      }
    }
  }
`;

export const Main = styled.main`
  width: 100%;
`;

export const AppointmentsTable = styled.table`
  width: 100%;
  margin-top: 45px;
  border-collapse: collapse;

  th,
  td {
    text-align: left;

    &.actions {
      text-align: right;
    }
  }

  thead {
    border-bottom: 2px solid #e9e9e9;

    tr {
      th {
        padding: 10px 0;
        font-size: 18px;
        color: #a8a8a8;
      }
    }
  }

  tbody {
    tr {
      border-bottom: 1px solid #e9e9e9;

      td {
        padding: 15px 0;

        button {
          padding: 5px 10px;
          color: #ffffff;
          border: none;
          border-radius: 15px;

          &.edit {
            background: #0dc0f3;

            &:hover {
              background: ${shade(0.1, "#0dc0f3")};
            }
          }

          &.delete {
            background: #ee6c62;

            &:hover {
              background: ${shade(0.1, "#ee6c62")};
            }
          }

          & + button {
            margin-left: 5px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 760px),
    (min-device-width: 768px) and (max-device-width: 1024px) {
    display: block;

    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    /* Hide table headers (but not display: none;, for accessibility) */
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr {
      border: 1px solid #ccc;
    }

    td {
      padding: 10px 5px 10px 50% !important;
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      text-align: initial;

      &.actions {
        text-align: initial;
      }
    }

    td:before {
      position: absolute;
      top: 11px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
    }

    td:nth-of-type(1):before {
      content: "DATA/HORA";
    }
    td:nth-of-type(2):before {
      content: "ID DO IMÓVEL";
    }
    td:nth-of-type(3):before {
      content: "VISITANTE";
    }
    td:nth-of-type(4):before {
      content: "ENDEREÇO";
    }
    td:nth-of-type(5):before {
      content: "AÇÕES";
    }
  }
`;
