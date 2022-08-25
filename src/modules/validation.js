const createError = () => {
  const error = document.createElement('small');
  error.classList.add('error');
  error.innerText = 'Invalid input or empty field';
  setTimeout(() => {
    error.innerText = '';
  }, 2000);
  return error;
};

const validInput = (nameInput, scoreInput) =>
  nameInput.value.trim() !== '' &&
  scoreInput.value.trim() !== '' &&
  !isNaN(scoreInput.value);

const handleValidation = (nameInput, scoreInput) => {
  const parent = nameInput.parentElement.parentElement.parentElement;
  if (!validInput(nameInput, scoreInput)) {
    parent.appendChild(createError());
  }
};

export { validInput, handleValidation };
