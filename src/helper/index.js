export const checkInputValue = value => {
  if (!value) {
    return 'Este campo es requerido';
  }
  return '';
};
