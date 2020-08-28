import styled from 'styled-components';

export const Form = styled.form`
  padding: 32px;
  background-color: white;

  & .divider { 
    display: flex; 
    justify-content: space-between;
    align-items: center;
  }

  & .divider:nth-child(4) { margin-top: 32px; }
  & .divider:nth-child(4) button:nth-child(1) { margin-right: 16px; }
`;
