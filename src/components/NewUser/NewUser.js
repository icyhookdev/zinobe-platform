import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import { Form, Text } from '../../styles/SharedStyles';
import Button from '../Button/Button';

const NewUser = ({ onSubmit, email, name, idn, loading, errors }) => (
  <Form onSubmit={onSubmit}>
    <Text>Ingrese los datos del nuevo usuario</Text>
    <Input
      placeholder="Nombre"
      value={name.inputValue}
      onChange={name.onChange}
      inputError={errors.name}
    />
    <Input
      placeholder="Correo"
      value={email.inputValue}
      onChange={email.onChange}
      inputError={errors.email}
    />
    <Input placeholder="Cedula" value={idn} onChange={e => e.target} />
    <Button text="Registrar Usuario" type="submit" loading={loading} />
  </Form>
);

NewUser.propTypes = {
  onSubmit: PropTypes.func,
  email: PropTypes.object,
  name: PropTypes.object,
  errors: PropTypes.object,
  idn: PropTypes.string,
  loading: PropTypes.bool,
};

export default NewUser;
