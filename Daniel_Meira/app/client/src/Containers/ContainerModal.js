import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: rgba(0, 0, 0, 0.3);
  left: 0;
  height: 100%;
  position: fixed;
  top: 0;
  width: 100%;
`;

const ContainerModal = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ContainerModal;
