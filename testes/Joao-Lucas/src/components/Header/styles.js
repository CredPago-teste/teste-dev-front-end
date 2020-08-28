import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 8vh;
  background: #0dc2ef;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 80%;
    align-self: center;
  }
  @media only screen and (min-width: 700px) {
    img {
      width: 20%;
    }

    > h3 {
      width: 20%;
    }
  }
  @media only screen and (max-width: 700px) {
    img {
      width: 20%;
    }
    > div {
      width: 80%;
      display: flex;
      justify-content: flex-end;
      font-size: 1rem;
    }
  }
`;

export const Options = styled.div`
  ul {
    display: flex;
    list-style: none;

    li {
      padding: 5px 10px;
      text-transform: uppercase;
      color: white;
      cursor: pointer;
      transition: all 0.5s linear;

      :hover {
        color: #0D0106;
      }
    }

    li:nth-child(2) {
      border-left: 1px solid white;
      border-right: 1px solid white;
    }
  }
`;

export const NameUser = styled.h3`
  color: #FBFBFF;
  cursor: pointer;
  transition: all 0.5s linear;

  :hover {
    color: #0D0106;
  }

  @media only screen and (max-width: 700px) {
    display: none;
  }
`;