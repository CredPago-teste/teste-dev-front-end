import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  td, th {
    text-align: left;
    padding: 10px;
  }
  thead tr {
    border-bottom: 2px solid #ededed;
    color: #9b9b9b;
    th:last-child {
      text-align: end;
    }
  }

  @media only screen and (max-width: 700px) {
    tbody tr td > div {
      flex-direction: column;
      
    }
    tbody tr td > div #button {
      width: 100% !important;
      margin: 2px 0;
    }

    td, th {
      padding: 0;
    }
    
    th:last-child {
      display: none;
    }
  }
`;

export const Row = styled.tr`
  border-bottom: 1px solid #f3f3f3;
  svg path {
    fill: #9b9b9b;
  }
  .divButton {
    display: flex;
    button {
      width: 40% !important;
      height: 30px !important;
      margin: auto;
      border-radius: 30px;
      font-size: 1.2rem;
      font-weight: 600;
    }

    button:nth-child(2) {
      background: var(--color-red);
    }
  }

  .modalDelete {
    position: absolute;
  }

  @media only screen and (max-width: 700px) {
    td:last-child {
      display: none;
    }
  }
`;