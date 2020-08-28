import React from 'react';

import { InputGroup, InputStyled, Label } from './styles';
import PropTypes from 'prop-types';

function Input({ label, required, register, error, ...props }) {
  return (
    <InputGroup>
      <Label>{label}{required && <span>*</span>}:</Label>
      <InputStyled error={error} ref={register({ required })} required {...props} />
    </InputGroup>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  register: PropTypes.func,
  error: PropTypes.bool,
  props: PropTypes.object
}

export default Input;