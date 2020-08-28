import styled from 'styled-components';

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  
  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: white;

  & > .container {
    margin-top: 80px;
    flex-direction: column;
    align-items: center;
  }

  & .container > .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 64px 0;
  }

  & > .container > .header p {
    font-size: 32px;
    font-weight: 600;
    color: gray; 
  }
`;

export const Navbar = styled.nav`
  position: fixed;
  width: 100vw;
  min-height: 80px;
  max-height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #0DC2EF;

  & > .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & p { 
    color: white; 
    font-weight: 500;
  }

  & .container .nav-items { 
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .container .nav-items p { 
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    margin: 0 16px;
  }

  & .container .nav-items p:hover { opacity: .8; }

  
  & .container .nav-items .separator {
    width: 28px;
    height: 3px;
    background-color: white;
    transform: rotate(90deg);
  }
`;
