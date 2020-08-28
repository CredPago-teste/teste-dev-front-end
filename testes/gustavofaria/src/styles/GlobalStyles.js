import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
    user-select: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body { overflow-x: hidden; }

  & .container {
    width: 950px;
    display: flex;
  }

  button {
    width: auto; 
    height: 38px;
    padding: 16px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: white;
    font-weight: bold;
    font-size: 16px;

    background-color: #0DC2EF;
    border-radius: 4px;
    border: none;
    outline: none;

    &:hover {
      cursor: pointer;
      opacity: .8;
    }

    &.big { height: 56px; }

    &.danger { background-color: red; }
    &.secondary { background-color: lightgray; }
    &.transparent { background-color: #FFFFFF00; }

    &.stretched { 
      width: 100%;
      padding: 0;
    }

    &.pill { 
      width: 64px; 
      height: 24px;
      padding: 8px;

      border-radius: 24px;

      font-size: 12px;
    }
  }

  a { text-decoration: none; }
`;
