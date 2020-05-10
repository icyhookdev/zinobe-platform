import { useState } from 'react';

const useModal = () => {
  const [toggleModal, setToggleModal] = useState(false);

  const onToggleModal = () => setToggleModal(!toggleModal);

  return { toggleModal, onToggleModal };
};

export default useModal;
