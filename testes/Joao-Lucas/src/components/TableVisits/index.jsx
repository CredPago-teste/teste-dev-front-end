import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FaMapMarkerAlt } from 'react-icons/fa';

import Button from '../Button';

import { Table, Row } from './styles';

function TableVisits() {
  const dispatch = useDispatch();
  const visits = useSelector(state => state.visits);

  const openModalEdit = (visit) => {
    dispatch({ type: 'ADD_VISIT_MODIFY', payload: visit })
  }

  const openDelete = (id) => {
    dispatch({ type: 'ADD_VISIT_DELETE', payload: { id: id } })
  }

  return (
    <Table>
      <thead>
      <tr>
        <th>DATA/HORA</th>
        <th>ID DO IMÓVEL</th>
        <th>VISITANTE</th>
        <th>ENDEREÇO</th>
        <th>AÇÕES</th>
      </tr>
      </thead>
      <tbody>
        {visits.map((visit, index) => ( 
        <Row key={visit.id}>
            <td>{visit.date} {visit.time}</td>
            <td>{visit.idHouse}</td>
            <td>{visit.nameVisit}</td>
            <td>{visit.address}, {visit.number}  <FaMapMarkerAlt /></td>
            <td>
              <div className="divButton">
                <Button id="button" onClick={() => openModalEdit(visit)}>Editar</Button>
                <Button id="button" onClick={() => openDelete(visit.id)}>Apagar</Button>
              </div>
            </td>
          </Row>))}
      
      </tbody>
    </Table>
  );
}

export default TableVisits;