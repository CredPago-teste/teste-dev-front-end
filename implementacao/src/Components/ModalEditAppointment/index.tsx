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
  address: string;
  address_number: string;
  immobile_id: number;
}

interface AppointmentData {
  date: string;
  hour: string;
  visitor_name: string;
  address: string;
  address_number: string;
  immobile_id: number;
}

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  editingAppoinment: Appointment;
  handleUpdateAppointment: (appointment: AppointmentData) => void;
}

const ModalEditAppointment: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  editingAppoinment,
  handleUpdateAppointment,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: AppointmentData) => {
    const {
      address,
      address_number,
      date,
      hour,
      immobile_id,
      visitor_name,
    } = data;

    handleUpdateAppointment({
      address,
      address_number,
      date,
      hour,
      immobile_id,
      visitor_name,
    });

    setIsOpen();
  }, []);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <ModalHeader>
        <strong>Novo agendamento</strong>
        <button type="button" onClick={setIsOpen}>
          <MdClose size={30} />
        </button>
      </ModalHeader>
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        initialData={editingAppoinment}
      >
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
          <button type="submit">Atualizar agendamento</button>
        </footer>
      </Form>
    </Modal>
  );
};

export default ModalEditAppointment;
