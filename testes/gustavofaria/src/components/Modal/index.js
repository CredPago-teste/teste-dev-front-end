import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from './styles';

const Component = ({ children }) => (
  <Modal>
    {children}
  </Modal>
);

Component.propTypes = { children: PropTypes.node.isRequired };

export default Component;
