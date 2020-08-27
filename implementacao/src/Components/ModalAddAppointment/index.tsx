import React, { useRef, useCallback } from "react";
import { FormHandles } from "@unform/core";
import { MdClose } from "react-icons/md";
import * as Yup from "yup";
import { ModalHeader, Form } from "./styles";
import Modal from "../Modal";
import Input from "../Input";
import InputMask from "../InputMask";
import getValidationErrors from "../../utils/getValidationErrors";

interface Appointment {
  id: number;
  date: string;
  hour: string;
  visitor_name: string;
  address: string;
  address_number: string;
  immobile_id: string;
}

interface AppointmentData {
  date: string;
  hour: string;
  visitor_name: string;
  address: string;
  address_number: string;
  immobile_id: string;
}

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddAppointment: (appointment: AppointmentData) => void;
}

const ModalAddAppointment: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddAppointment,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: AppointmentData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          date: Yup.string().required("Data é um campo obrigatório"),
          hour: Yup.string().required("Hora é um campo obrigatório"),
          visitor_name: Yup.string().required(
            "Nome do visitante é um campo obrigatório"
          ),
          address: Yup.string().required("Endereço é um campo obrigatório"),
          address_number: Yup.string().required(
            "Número é um campo obrigatório"
          ),
          immobile_id: Yup.string().required(
            "ID do Imóvel é um campo obrigatório"
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        handleAddAppointment(data);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [handleAddAppointment]
  );

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
            <InputMask
              name="date"
              placeholder="DD/MM/YYYY"
              label="Data"
              mask="99/99/9999"
            />
            <InputMask
              name="hour"
              placeholder="hh:mm"
              label="Hora"
              mask="99:99"
            />
          </div>
          <div className="column-2">
            <Input
              name="visitor_name"
              placeholder='Kleber "Bambam" de Paula'
              label="Nome do visitante"
            />
          </div>

          <div className="column-2">
            <Input
              name="address"
              placeholder="Ex.: Rua São Paulo"
              label="Endereço"
            />

            <div className="column-2">
              <Input
                name="address_number"
                placeholder="Ex.: 2"
                label="Número"
              />
              <Input
                name="immobile_id"
                placeholder="Ex.: 6778"
                label="ID Imóvel"
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
