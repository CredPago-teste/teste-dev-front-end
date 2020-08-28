import React from 'react';

import { ButtonStyled } from './styles';
import PropTypes from 'prop-types';

function Button({ type, children, ...props }) {
  return (
    <ButtonStyled aria-label="button" type={type} {...props} ><span>{children}</span></ButtonStyled>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string,
  props: PropTypes.object
}

export default Button;