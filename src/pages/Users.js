import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import UserList from '../components/UserList/UserList';

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios.get('/users');
      setUsers(data);
    };
    getUsers();
  }, []);

  return <UserList users={users} />;
};

export default Users;
