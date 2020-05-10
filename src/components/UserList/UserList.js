import React from 'react';
import PropTypes from 'prop-types';
import { ListWrapper } from './UserList.style';
import Card from '../Card/Card';
import { Text } from '../../styles/SharedStyles';

const UserList = ({ users = [] }) => (
  <>
    <Text mb>Usuarios Registrados</Text>
    <ListWrapper>
      {users.map(user => (
        <Card
          key={user.id}
          name={user.name}
          email={user.email}
          idn={user.idn}
          id={user.id}
        />
      ))}
      ;
    </ListWrapper>
  </>
);

UserList.propTypes = {
  users: PropTypes.array,
};

export default UserList;
