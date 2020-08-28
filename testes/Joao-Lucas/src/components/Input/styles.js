import styled from 'styled-components';

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0.6rem 0;
`;

export const InputStyled = styled.input`
  outline: none;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #dbdbdb;
  background: ${props => props.error ? '#ff9595' : '#f1f1f1'};
  border-color: ${props=> props.error && 'red'};
`;

export const Label = styled.label`
  margin: 0.5rem 0.1rem;

  span {
    color: var(--color-red);
  }
`;