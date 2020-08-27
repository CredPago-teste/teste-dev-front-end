import React, { useRef, useCallback } from "react";
import { FormHandles } from "@unform/core";
import { MdClose } from "react-icons/md";
import { ModalHeader, Form } from "./styles";
import Modal from "../Modal";
import Input from "../Input";

interface Appointment {
  id: number;
  date: string;
  hour: string;
  visitor_name: string;
  addres: string;
  address_number: string;
  immobile_id: number;
}

interface AppointmentData {
  date: string;
  hour: string;
  visitor_name: string;
  addres: string;
  address_number: string;
  immobile_id: number;
}

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddAppointment: (appointment: Omit<Appointment, "id">) => void;
}

const ModalAddAppointment: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddAppointment,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: AppointmentData) => {
    console.log(data);
  }, []);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <ModalHeader>
        <strong>Novo agendamento</strong>
        <button type="button" onClick={setIsOpen}>
          <MdClose size={30} />
        </button>
      </ModalHeader>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <div>
          <div className="column-2">
            <Input name="date" placeholder="DD/MM/YYYY" label="Data" required />
            <Input name="hour" placeholder="hh:mm" label="Hora" required />
          </div>
          <div className="column-2">
            <Input
              name="visitor_name"
              placeholder='Kleber "Bambam" de Paula'
              label="Nome do visitante"
              required
            />
          </div>

          <div className="column-2">
            <Input
              name="address"
              placeholder="Ex.: Rua São Paulo"
              label="Endereço"
              required
            />

            <div className="column-2">
              <Input
                name="address_number"
                placeholder="Ex.: 2"
                label="Número"
                required
              />
              <Input
                name="immobile_id"
                placeholder="Ex.: 6778"
                label="ID Imóvel"
                required
              />
            </div>
          </div>
        </div>
        <footer>
          <button type="submit">Cadastrar agendamento</button>
        </footer>
      </Form>
    </Modal>
  );
};

export default ModalAddAppointment;
