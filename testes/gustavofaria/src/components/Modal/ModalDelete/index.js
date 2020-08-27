import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Modal from '..';
import Header from '../Header';
import Form from '../Form';

const color = 'linear-gradient(90deg, #E35858 0%, #EE0D0D 50.52%, #E35858 100%), #EE0D0D;';

const Component = ({ visible }) => (
  <>
    {
      visible
        ? (
          <Modal>
            <div className="wrapper">
              <Header title="Apagar Agendamento?" color={color} />
              <Form type="DELETE" color="danger" />
            </div>
          </Modal>
        )
        : <></>
      }
  </>
);

Component.propTypes = { visible: PropTypes.bool.isRequired };

const mapStateToProps = (state) => ({ visible: state.modal.deleteModal });

export default connect(mapStateToProps)(Component);
