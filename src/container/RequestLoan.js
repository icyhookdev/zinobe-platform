import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form } from '../styles/SharedStyles';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import { onSetLoanValue } from '../store/actions/loanActions';
import useCurrencyInput from '../hooks/useCurrencyInput';

const RequestLoan = ({ onSetLoanValue: setLoanValue, onOpenModal }) => {
  const [inputError, setInputError] = useState('');

  const { currencyValue, onChangeCurrency } = useCurrencyInput(7);
  const onSubmitRequest = e => {
    e.preventDefault();
    if (!currencyValue || currencyValue === '0') {
      setInputError('Por favor ingrese el monto del prestamo');
      return;
    }

    if (
      currencyValue.replace(/\./g, '') < 10000 ||
      currencyValue.replace(/\./g, '') > 100000
    ) {
      setInputError('El monto minimo a solicitar es entre 10.000 y 100.000');
      return;
    }
    onOpenModal();
    setLoanValue(currencyValue);
  };

  return (
    <Form onSubmit={onSubmitRequest}>
      <Input
        value={currencyValue}
        onChange={onChangeCurrency}
        inputError={inputError}
        placeholder="Monto"
      />
      <Button text="Solicitar" type="submit" />
    </Form>
  );
};

RequestLoan.propTypes = {
  onSetLoanValue: PropTypes.func,
  onOpenModal: PropTypes.func,
};

export default connect(null, { onSetLoanValue })(RequestLoan);
