import styled from 'styled-components';

export const Modal = styled.main`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #00000060;
  z-index: 2;

  & > .wrapper {
    width: 528px;
    border-radius: 4px;
    overflow: hidden;
  }
`;
