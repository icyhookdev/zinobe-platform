import { useState } from 'react';

const useCurrencyInput = max => {
  const [currencyValue, setCurrencyValue] = useState('');

  const onChangeCurrency = e => {
    const { value } = e.target;
    if (value.length > max) {
      return;
    }
    setCurrencyValue(
      new Intl.NumberFormat('de-DE').format(+value.replace(/[\D\s\._\-]+/g, ''))
    );
  };

  return {
    currencyValue,
    onChangeCurrency,
  };
};

export default useCurrencyInput;
