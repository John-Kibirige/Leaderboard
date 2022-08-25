const createMessage = (msg) => {
  const error = document.createElement('small');
  error.classList.add('error');
  error.innerText = msg;
  setTimeout(() => {
    error.innerText = '';
  }, 2000);
  return error;
};

export default createMessage;
