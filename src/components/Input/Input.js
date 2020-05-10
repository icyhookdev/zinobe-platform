import React from 'react';
import PropTypes from 'prop-types';
import { InputComp, InputError, InputWrapper } from './Input.style';

const Input = ({ value, onChange, inputError, placeholder }) => (
  <InputWrapper>
    <InputComp
      placeholder={placeholder}
      type="text"
      onChange={onChange}
      value={value}
      inputError={inputError}
    />
    <InputError>{inputError}</InputError>
  </InputWrapper>
);

Input.propTypes = {
  value: PropTypes.string,
  inputError: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
