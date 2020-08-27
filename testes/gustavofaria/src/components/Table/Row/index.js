import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import Location from '../../../assets/Location.svg';

import * as ModalActions from '../../../store/actions/modal';

const Component = ({ handleOpenDeleteModal, handleOpenEditModal, visit }) => (
  <>
    <div className="row">
      <div className="table-item">
        <p>{`${moment(visit.date).format('DD/MM/YYYY')} ${visit.hour}`}</p>
      </div>
      <div className="table-item">
        <p>{`${visit.propertyId}`}</p>
      </div>
      <div className="table-item">
        <p>{`${visit.name}`}</p>
      </div>
      <div className="table-item">
        <p>
          {`${visit.address}, ${visit.number}`}
          {' '}
          <img src={Location} alt="Location icon" />
        </p>
      </div>
      <div className="table-item right">
        <button className="pill" onClick={() => handleOpenEditModal(visit)} type="button">Editar</button>
        <button className="pill danger" onClick={() => handleOpenDeleteModal(visit)} type="button">Apagar</button>
      </div>
    </div>

    <div className="separator" />
  </>
);

Component.propTypes = {
  handleOpenDeleteModal: PropTypes.func.isRequired,
  handleOpenEditModal: PropTypes.func.isRequired,
  visit: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = (state) => ({ state });
const mapDispatchToProps = (dispatch) => ({
  handleOpenDeleteModal: (visit) => dispatch(ModalActions.openDeleteModal(visit)),
  handleOpenEditModal: (visit) => dispatch(ModalActions.openEditModal(visit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
