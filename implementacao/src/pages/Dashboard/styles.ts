import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: #0dc2ef;

  img {
    width: 150px;
  }

  div {
    display: flex;
    align-items: center;

    > a {
      color: #FFF;
      text-decoration: none;
      font-size: 22px;

      & + a {
        margin-left: 10px;
      }
    }

    hr {
      width: 1px;
      height: 30px;
      background: #FFF;
      margin: 0 30px;
      border: none;
      display: inline-block;
    }

    > span {
      color: #FFF;
      font-size: 18px;
    }
  }
`;
