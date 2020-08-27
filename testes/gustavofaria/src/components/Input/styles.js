import styled from 'styled-components';

export const InputText = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-bottom: 16px;

  &.size-4 { width: 104px; }
  &.size-2 { width: 224px; }
  &.size-1 { width: 464px; }

  & p {
    font-size: 14px;
    font-weight: 500;
    color: gray;
  }

  & input {
    padding-left: 8px;
    
    margin-top: 8px;
    height: 40px;
    border-radius: 4px;
    outline: none;

    border: 1px solid lightgray;
    background-color: whitesmoke;
  }
`;