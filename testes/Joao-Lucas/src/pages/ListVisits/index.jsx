import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { Container, GlobalStyle, Content, TitleButton, Visits, FormAdd, FormDelete } from './styles';

import Header from '../../components/Header';
import Button from '../../components/Button';
import TableVisits from '../../components/TableVisits';
import Modal from '../../components/Modal';
import Input from '../../components/Input';

import { getVisits, updatedVisitor, createdVisitor, deletedVisitor } from '../../services/querys';

function ListVisits() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [modalCreateModifyIsVisible, setModalCreateModifyIsVisible] = useState(false);
  const visitModify = useSelector(state => state.visitModify.payload);
  const visitDelete = useSelector(state => state.visitDelete.payload);
  const { id } = useSelector(state => state.user);

  // After updated, created or deleted visitors get new's visitors
  const getNewsVisitors = async () => {
    let data = await getVisits();
    await Promise.all(data);
    data = data.filter(visit => visit.idUser === id);
    dispatch({ type: 'ADD_VISITS_LIST', payload: data });
  }

  // Get first data
  useEffect(() => {
    (async function() {
      let data = await getVisits();
      await Promise.all(data);
      data = data.filter(visit => visit.idUser === id);
      dispatch({ type: 'ADD_VISITS_LIST', payload: data });
    })()
  }, [])
  
  useEffect(() => {
    if (visitModify) {
      setModalCreateModifyIsVisible(true);
    }
  }, [visitModify])

  // New visitor or updated visitor
  const formAddSchedule = async (data) => {
    if (visitModify) {
      let newDate = data.date.split('-');
      newDate = `${newDate[2]}/${newDate[1]}/${newDate[0]}`;

      data.date = newDate;
      data.idUser = id;
      await updatedVisitor(visitModify.id, data);

    } else {
      let newDate = data.date.split('-');
      newDate = `${newDate[2]}/${newDate[1]}/${newDate[0]}`;

      data.date = newDate;
      data.idUser = id;
      await createdVisitor(data);

    }
    
    getNewsVisitors();
    
    setModalCreateModifyIsVisible(false);
  }

  // Delete visitor
  const formDeleteSchedule = async () => {
    await deletedVisitor(visitDelete.id);

    getNewsVisitors();
  }

  const dateConvert = (date) => {
    let newDate = date.split('/');
    newDate = `${newDate[2]}-${newDate[1]}-${newDate[0]}`
    return newDate;
  }

  return (
    <Container className="container">
      <GlobalStyle />
      <Header />
      <Content>
        <TitleButton>
          <h2>Próximas visitas</h2>
          <Button onClick={() => setModalCreateModifyIsVisible(true)}>+ Novo agendamento</Button>
        </TitleButton>
        <Visits>
          <TableVisits />
        </Visits>
      </Content>
      {modalCreateModifyIsVisible &&
        <Modal title={visitModify ? "Alterar Agendamento" : "Novo Agendamento"} closeModal={() => setModalCreateModifyIsVisible(false)}>
          <FormAdd onSubmit={handleSubmit(formAddSchedule)}>
            <Input type="date" label="Data" placeholder="dd/mm/yyyy" defaultValue={visitModify && dateConvert(visitModify.date)} name="date" required register={register} />
            <Input type="time" label="Hora" placeholder="hh:mm" defaultValue={visitModify && visitModify.time} name="time" required register={register} />
            <Input type="text" label="Nome do visitante" defaultValue={visitModify && visitModify.nameVisit} placeholder="Kleber &quot;Bambam&quot; de Paula" name="nameVisit" required register={register} />
            <div className="inputGroup">
              <Input type="text" label="Endereço" defaultValue={visitModify && visitModify.address} placeholder="Ex.: Rua São Paulo" name="address" required register={register} />
              <Input type="text" label="Número" placeholder="Ex.: 2" defaultValue={visitModify && visitModify.number} name="number" required register={register} />
              <Input type="text" label="ID imóvel" placeholder="Ex.: 6778" defaultValue={visitModify && visitModify.idHouse} name="idHouse" required register={register} />
            </div>
            <Button type="submit" >Cadastrar Agendamento</Button>
          </FormAdd>
        </Modal>
      }
      {visitDelete &&
        <Modal title={"Deletar Agendamento"} isDelete closeModal={() => dispatch({ type: 'ADD_VISIT_DELETE', payload: false })}>
          <FormDelete onSubmit={handleSubmit(formDeleteSchedule)}>
            <h4>Você tem certeza que quer deletar o agendamento selecionado?</h4>
            <div className="ButtonGroup">
              <Button type="button" onClick={() => dispatch({ type: 'ADD_VISIT_DELETE', payload: false })}>Cancelar</Button>
              <Button type="submit" >Deletar Agendamento</Button>
            </div>
          </FormDelete>
        </Modal>
      }
    </Container>
  );
}

export default ListVisits;