import React, { useEffect, useRef, useState, useCallback } from "react";

import ReactInputMask, { Props as MaskProps } from "react-input-mask";
import { useField } from "@unform/core";
import { Container, InputContainer } from "./styles";

interface InputProps extends MaskProps {
  name: string;
  label?: string;
}

const InputMask: React.FC<InputProps> = ({
  name,
  label,
  required,
  ...rest
}) => {
  const inputRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {label && (
        <label htmlFor={fieldName}>
          {label} {required && <span>*</span>}
        </label>
      )}
      <InputContainer isFocused={isFocused} isErrored={!!error}>
        <ReactInputMask
          ref={inputRef}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          required={!!required}
          {...rest}
        />
      </InputContainer>

      {error && <span className="error">{error}</span>}
    </Container>
  );
};

export default InputMask;
