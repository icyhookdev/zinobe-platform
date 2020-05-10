import React from 'react';
import PropTypes from 'prop-types';
import { ListWrapper } from '../UserList/UserList.style';
import HistoryCard from '../HistoryCard/HistoryCard';
import { Text } from '../../styles/SharedStyles';

const UserHistory = ({ credits = [] }) => (
  <>
    <Text mb>Usuarios Registrados</Text>
    <ListWrapper>
      {credits.map(credit => (
        <HistoryCard
          key={credit.id}
          creditStatus={credit.creditStatus}
          amount={credit.amount}
          paid={credit.paid}
        />
      ))}
    </ListWrapper>
  </>
);

UserHistory.propTypes = {
  credits: PropTypes.array,
};

export default UserHistory;
