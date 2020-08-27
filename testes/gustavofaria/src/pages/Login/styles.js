import styled from 'styled-components';

export const Login = styled.main`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(270deg, #0085C3 0%, #1DA3E1 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > form {
    width: 384px;
    background-color: white;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    padding: 32px;
    margin-top: 32px;
  }

  & button {
    margin: 16px 0;
  }

  & .forgot-password {
    text-align: right;
    font-size: 12px;
    font-weight: 500;
    color: gray;
  }

  & .forgot-password:hover {
    text-decoration: underline;
  }

  & .login-error {
    height: 14px;

    & p {
      font-size: 12px;
      color: red;
    }
  }

  & .footer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: gray;

    & button {
      font-size: 14px;
      padding: 0 6px;
      margin: 0;
      color: #0DC2EF;
    }
  }
`;
