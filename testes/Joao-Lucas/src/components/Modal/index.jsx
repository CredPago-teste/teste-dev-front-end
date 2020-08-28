import React from 'react';

import { Container, Content, Header } from './styles';
import { GrClose } from 'react-icons/gr';

import PropTypes from 'prop-types';

function Modal({ children, title, isDelete, closeModal }) {
  return (
    <Container>
      <Content isDelete={isDelete}>
        <Header>
          <h2>{title}</h2>
          <GrClose onClick={closeModal}></GrClose>
        </Header>
        <div className="children">
          { children }
        </div>
      </Content>
    </Container>
  );
}

Modal.propTypes = {
  children: PropTypes.object,
  title: PropTypes.string,
  isDelete: PropTypes.bool,
  closeModal: PropTypes.func,
}

export default Modal;