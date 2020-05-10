import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PageWrapper, Title } from '../styles/SharedStyles';
import RequestLoan from '../container/RequestLoan';
import Modal from '../components/Modal/Modal';
import useModal from '../hooks/useModal';
import AuthUser from '../container/AuthUser';
import { resetAuthUserStatus } from '../store/actions/authActions';

const Home = ({ loanAmount, resetAuthUserStatus: onResetAuthState }) => {
  const { toggleModal, onToggleModal } = useModal();
  const changeToggleModal = () => {
    onToggleModal();
    onResetAuthState();
  };
  return (
    <PageWrapper>
      <Title>Solicitud de prestamo</Title>
      <RequestLoan onOpenModal={onToggleModal} />
      {toggleModal && (
        <Modal onToggleModal={changeToggleModal} toggleModal={toggleModal}>
          <AuthUser />
        </Modal>
      )}
    </PageWrapper>
  );
};

Home.propTypes = {
  loanAmount: PropTypes.any,
  resetAuthUserStatus: PropTypes.func,
};

const mapStateToProps = ({ loan }) => ({ loanAmount: loan.loanAmount });

export default connect(mapStateToProps, { resetAuthUserStatus })(Home);
