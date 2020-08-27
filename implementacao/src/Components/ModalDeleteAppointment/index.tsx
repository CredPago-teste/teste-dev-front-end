import React from "react";
import { MdClose } from "react-icons/md";
import { ModalHeader, Content } from "./styles";
import Modal from "../Modal";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleDeleteAppointment: () => void;
}

const ModalDeleteAppointment: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  handleDeleteAppointment,
}) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <ModalHeader>
        <strong>Remover agendamento</strong>
        <button type="button" onClick={setIsOpen}>
          <MdClose size={30} />
        </button>
      </ModalHeader>
      <Content>
        <div>
          <p>Você confirma a exclusão deste agendamento?</p>
        </div>
        <footer>
          <button type="button" className="cancel" onClick={setIsOpen}>
            Cancelar
          </button>
          <button
            type="button"
            className="confirm"
            onClick={handleDeleteAppointment}
          >
            Remover
          </button>
        </footer>
      </Content>
    </Modal>
  );
};

export default ModalDeleteAppointment;
