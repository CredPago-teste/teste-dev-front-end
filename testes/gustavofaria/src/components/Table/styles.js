import styled from 'styled-components';

export const Table = styled.div`
  width: 100%;

  & > .header,
  & > .row,
  & > .empty-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & > .empty-row p {
    width: 100%;
    text-align: center;
    font-weight: 600;
    color: lightgray;
  }

  & > .header p ,
  & > .row p {
    width: 180px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: gray;
  }

  & > .header p {
    font-size: 16px;
    font-weight: 800;
  }

  & > .row p {
    font-size: 16px;
    font-weight: 400;
  }

  & > .separator {
    width: 100%;
    height: 2px;
    background-color: whitesmoke;
    margin: 12px 0;
  }

  & > .separator:nth-child(2) { background-color: gray; }

  & .table-item {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-right: 8px;
  }

  & .table-item.right { justify-content: flex-end; }
  & .table-item.right p { text-align: right; }
  & .table-item.right button:nth-child(1) { margin-right: 12px; }
`;
