import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from '../../axios';
import UserHistory from '../components/UserHistory/UserHistory';

const History = ({ id }) => {
  const [userCredits, setUserCredits] = useState([]);
  console.log(id);
  useEffect(() => {
    const getUserCredits = async () => {
      const { data } = await axios.get('/credits');
      const credits = data.filter(credit => credit.userId === id);
      setUserCredits(credits);
    };
    getUserCredits();
  }, [id]);

  return <UserHistory credits={userCredits} />;
};

History.propTypes = {
  id: PropTypes.string,
};

export default History;
