import styled from 'styled-components';

export const Header = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
  background: ${(props) => props.color};

  & p {
    font-size: 24px;
    font-weight: 600;
    color: white;
  }
`;
