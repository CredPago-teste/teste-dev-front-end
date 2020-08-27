import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import { Form } from './styles';

import Input from '../../Input';

import * as ModalActions from '../../../store/actions/modal';
import * as VisitsActions from '../../../store/actions/visits';

const Component = ({
  visit, handleCloseModal, handleAddVisit, handleEditVisit, handleDeleteVisit, type, color,
}) => {
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [propertyId, setPropertyId] = useState('');
  const [address, setAddress] = useState('');

  const [buttonText, setButtonText] = useState('');

  useEffect(() => {
    if (visit) {
      setDate(visit.date);
      setHour(visit.hour);
      setName(visit.name);
      setNumber(visit.number);
      setPropertyId(visit.propertyId);
      setAddress(visit.address);
    }
    switch (type) {
      case 'ADD':
        setButtonText('Cadastrar Agendamento');
        break;
      case 'EDIT':
        setButtonText('Confirmar Agendamento');
        break;
      case 'DELETE':
        setButtonText('Apagar Agendamento');
        break;
      default:
        handleCloseModal();
    }
  }, [visit, type, handleCloseModal]);

  const handleAdd = () => {
    const id = uuidv4();
    const newVisit = {
      id, date, hour, name, number, propertyId, address,
    };
    handleAddVisit(newVisit);
    handleCloseModal();
  };

  const handleDelete = () => {
    handleDeleteVisit(visit.id);
    handleCloseModal();
  };

  const handleEdit = () => {
    const newVisit = {
      id: visit.id, date, hour, name, number, propertyId, address,
    };
    handleEditVisit(newVisit);
    handleCloseModal();
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    switch (type) {
      case 'ADD':
        handleAdd();
        break;
      case 'DELETE':
        handleDelete();
        break;
      case 'EDIT':
        handleEdit();
        break;
      default:
        handleCloseModal();
    }
    window.location.reload();
  };

  const isDelete = () => type === 'DELETE';

  return (
    <Form onSubmit={handleOnSubmit}>
      <div className="divider">
        <Input type="date" className="size-2" label="Data" placeHolder="Data" inputValue={date} setInputValue={setDate} required disabled={isDelete()} />
        <Input type="time" className="size-2" label="Hora" placeHolder="Hora" inputValue={hour} setInputValue={setHour} required disabled={isDelete()} />
      </div>
      <div className="divider">
        <Input type="text" className="size-1" label="Nome do visitante" placeHolder="Nome do visitante" inputValue={name} setInputValue={setName} required disabled={isDelete()} />
      </div>
      <div className="divider">
        <Input type="text" className="size-2" label="Endereço" placeHolder="Endereço" inputValue={address} setInputValue={setAddress} required disabled={isDelete()} />
        <Input type="number" className="size-4" label="Número" placeHolder="Número" inputValue={number} setInputValue={setNumber} required disabled={isDelete()} />
        <Input type="number" className="size-4" label="ID Imóvel" placeHolder="ID Imóvel" inputValue={propertyId} setInputValue={setPropertyId} required disabled={isDelete()} />
      </div>
      <div className="divider">
        <button type="button" className="stretched secondary" onClick={handleCloseModal}>Cancelar</button>
        <button type="submit" className={`stretched ${color}`}>{buttonText}</button>
      </div>
    </Form>
  );
};

Component.propTypes = {
  visit: PropTypes.instanceOf(Object),
  handleCloseModal: PropTypes.func.isRequired,
  handleAddVisit: PropTypes.func.isRequired,
  handleDeleteVisit: PropTypes.func.isRequired,
  handleEditVisit: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Component.defaultProps = {
  visit: null,
  color: '',
};

const mapStateToProps = (state) => ({ visit: state.modal.visit });
const mapDispatchToProps = (dispatch) => ({
  handleCloseModal: () => dispatch(ModalActions.closeModal()),
  handleAddVisit: (visit) => dispatch(VisitsActions.addVisit(visit)),
  handleEditVisit: (visit) => dispatch(VisitsActions.editVisit(visit)),
  handleDeleteVisit: (id) => dispatch(VisitsActions.deleteVisit(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
