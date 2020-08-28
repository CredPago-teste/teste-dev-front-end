import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import { InputText } from './styles';

const Component = ({
  type, className, label, placeHolder, inputValue, setInputValue, required, disabled,
}) => {
  const id = uuidv4();

  const handleOnChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  return (
    <InputText htmlFor={id} className={className}>
      <p>{`${label}:`}</p>
      <input
        type={type}
        placeholder={placeHolder}
        id={id}
        required={required}
        value={inputValue}
        onChange={handleOnChange}
        disabled={disabled}
      />
    </InputText>
  );
};

Component.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

Component.defaultProps = {
  className: '',
  required: false,
  disabled: false,
};

export default Component;
