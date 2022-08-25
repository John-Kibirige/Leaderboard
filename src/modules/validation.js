import createMessage from './error.js';

const validInput = (nameInput, scoreInput) => nameInput.value.trim() !== ''
  && scoreInput.value.trim() !== ''
  && !Number.isNaN(scoreInput.value);

const handleValidation = (nameInput, scoreInput) => {
  const parent = nameInput.parentElement.parentElement.parentElement;
  if (!validInput(nameInput, scoreInput)) {
    parent.appendChild(createMessage('Invalid input or empty field'));
  }
};

export { validInput, handleValidation };
