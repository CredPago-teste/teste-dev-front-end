import styled, { css } from "styled-components";

interface InputContainerProps {
  isFocused: boolean;
  isErrored: boolean;
  isFilled: boolean;
}

export const Container = styled.div`
  margin-top: 10px;
`;

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  align-items: center;
  background: #f1f1f1;
  border-radius: 8px;
  padding: 10px 15px;
  margin: 5px 0 0 0;
  width: 100%;
  font-size: 16px;
  border: 1px solid #d6d6d6;

  & + div {
    margin-top: 24px;
  }

  h1 {
    margin-bottom: 40px;
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
  }

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #0dc2ef;
    `}

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #e53935;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #212121;

    &::placeholder {
      color: #d6d6d6;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
