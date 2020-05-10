import { useState } from 'react';

const useInput = initialState => {
  const [inputValue, setInput] = useState(initialState);

  const onChange = e => {
    const { value } = e.target;

    setInput(value);
  };

  return {
    inputValue,
    onChange,
  };
};

export default useInput;
