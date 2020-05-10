import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ModalWrapper, ModalContent, Close } from './Modal.style';

const Modal = ({ children, onToggleModal, toggleModal }) => {
  useEffect(() => {
    if (toggleModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [toggleModal]);
  return (
    <ModalWrapper>
      <ModalContent>
        <Close onClick={onToggleModal} />
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  onToggleModal: PropTypes.func,
  toggleModal: PropTypes.bool,
};

export default Modal;
