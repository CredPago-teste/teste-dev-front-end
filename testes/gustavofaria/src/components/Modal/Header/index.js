import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Header } from './styles';

import Close from '../../../assets/Close.svg';

import * as ModalActions from '../../../store/actions/modal';

const defaultColor = 'linear-gradient(90deg, #58C8E3 0%, #0DC2EE 50%, #58C8E3 100%), #0DC2EE';

const Component = ({ handleCloseModal, title, color }) => (
  <Header color={color}>
    <p>{title}</p>
    <button type="button" className="transparent" onClick={handleCloseModal}>
      <img src={Close} alt="Close" />
    </button>
  </Header>
);

Component.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Component.defaultProps = { color: defaultColor };

const mapStateToProps = (state) => ({ visible: state.modal.addModal });
const mapDispatchToProps = (dispatch) => ({
  handleCloseModal: () => dispatch(ModalActions.closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
