import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { Text } from '../../styles/SharedStyles';

const CheckUser = ({
  currencyValue,
  onChangeCurrency,
  onValidateIdn,
  loading,
  idnError,
}) => (
    <>
      <Text>Ingrese la cedula del solicitante</Text>
      <Input
        value={currencyValue}
        placeholder="Cedula"
        onChange={onChangeCurrency}
        inputError={idnError}
      />
      <Button
        text="validar"
        type="button"
        loading={loading}
        clicked={onValidateIdn}
      />
    </>
  );

CheckUser.propTypes = {
  currencyValue: PropTypes.any,
  onChangeCurrency: PropTypes.func,
  onValidateIdn: PropTypes.func,
  loading: PropTypes.bool,
  idnError: PropTypes.string,
};

export default CheckUser;
