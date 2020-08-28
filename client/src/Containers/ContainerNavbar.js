import React from "react";
import styled from "styled-components";

import cores from "../Configs/cores";
import Navbar from "../Components/Navbar";

const Container = styled.div`
  background-color: ${cores.primario};
`;

const ContainerNavbar = () => {
  return (
    <Container>
      <Navbar />
    </Container>
  );
};

export default ContainerNavbar;
