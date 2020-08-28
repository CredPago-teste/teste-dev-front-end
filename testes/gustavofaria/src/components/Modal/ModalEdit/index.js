import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Modal from '..';
import Header from '../Header';
import Form from '../Form';

const Component = ({ visible }) => (
  <>
    {
      visible
        ? (
          <Modal>
            <div className="wrapper">
              <Header title="Editar Agendamento" />
              <Form type="EDIT" />
            </div>
          </Modal>
        )
        : <></>
      }
  </>
);

Component.propTypes = { visible: PropTypes.bool.isRequired };

const mapStateToProps = (state) => ({ visible: state.modal.editModal });

export default connect(mapStateToProps)(Component);
