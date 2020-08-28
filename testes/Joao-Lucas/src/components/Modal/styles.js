import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #0005;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: ${props => props.isDelete ? '30%' : '40%'};
  max-width: 600px;
  background: white;
  border-radius: 5px;

  .children {
    height: ${props => props.isDelete ? '200px' : '400px'};
  }

  @media only screen and (max-width: 700px) {
    width: 90%;
    height: 75%;
  }
`;

export const Header = styled.div`
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  background: #4bc7e5;
  border-radius: 5px 5px 0 0;
  color: white;
  svg path {
    stroke: white;
  }
  svg {
    cursor: pointer;
    font-size: 2rem;
  }
`;