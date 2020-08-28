import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import closeIcon from "../../img/close-icon.svg";
import cores from "../../Configs/cores";

const Button = styled.button`
  background-color: ${cores.primario};
  border: none;
  border-radius: 15px;
  color: ${cores.branco};
  cursor: pointer;
  font-size: 1.1rem;
  margin-bottom: 15px;
  outline: none;
  padding: 10px 0;
  text-transform: capitalize;
  width: 40%;

  &:first-child {
    background-color: ${cores.vermelhoAviso};
  }
`;

const CloseIcon = styled.img.attrs({
  src: closeIcon,
})`
  cursor: pointer;
  width: 20px;
`;

const Container = styled.div`
  height: auto;
  left: 50%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
`;

const ContainerButtons = styled.div`
  background-color: ${cores.branco};
  display: flex;
  justify-content: space-around;
  padding: 50px 0;
`;

const Header = styled.div`
  background-color: ${cores.primario};
  display: flex;
  justify-content: space-between;
  padding: 30px;
`;

const Titulo = styled.h2`
  color: ${cores.branco};
  margin: 0;
  width: 70%;
`;

const ModalExclusao = ({ handleCancelaExclusao, handleConfirmaExclusao }) => {
  return (
    <Container>
      <Header>
        <Titulo>Têm certeza que deseja apagar o agendamento?</Titulo>
        <CloseIcon onClick={() => handleCancelaExclusao()} />
      </Header>
      <ContainerButtons>
        <Button onClick={() => handleConfirmaExclusao()}>apagar</Button>
        <Button onClick={() => handleCancelaExclusao()}>cancelar</Button>
      </ContainerButtons>
    </Container>
  );
};

ModalExclusao.propTypes = {
  handleCancelaExclusao: PropTypes.func.isRequired,
  handleConfirmaExclusao: PropTypes.func.isRequired,
};

export default ModalExclusao;
