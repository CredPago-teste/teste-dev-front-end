import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgb(0,133,195);
  background: linear-gradient(210deg, rgba(0,133,195,1) 0%, rgba(0,139,204,1) 35%, rgba(0,155,226,1) 100%);

  img {
    width: 130px;
  }
`;

export const LoginBox = styled.div`
  background: #FFFFFF;
  border-radius: 5px;
  padding: 20px;
  margin-top: 30px;
  max-width: 320px;
  width: 100%;

  form {
    > div {
      width: 100%;
      padding: 10px;
      display: flex;
      flex-direction: column;

      label {
        color: #474747;
        font-size: 18px;

        > span {
          color: #ea0531;
        }
      }

      input {
        margin-top: 5px;
        padding: 10px;
        background: #F1F1F1;
        border: 1px solid #cfcfcf;
        border-radius: 5px;
      }

      > button {
        background: #0DC2EE;
        border: none;
        color: #FFFFFF;
        padding: 10px;
        font-size: 18px;

        &:hover {
          background: ${shade(0.1, '#0DC2EE')}
        }
      }

      > a {
        color: #838383;
        font-size: 14px;
      }


    }
  }
`;
