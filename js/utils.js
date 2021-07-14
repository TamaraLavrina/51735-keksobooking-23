const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 1;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = '#f0f0ea';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 5000);
};

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';
const errorButton = document.querySelector('.error__button');
const successModal = document.createElement('div');
const errorModal = document.createElement('div');

successModal.classList.add('hidden');
errorModal.classList.add('hidden');
const successCard = () => {
  const successTemplate = document.querySelector('#success');
  const successTemplateElement = successTemplate.content.querySelector('.success');
  const successMessage = successTemplateElement.cloneNode(true);

  successModal.appendChild(successMessage);
  document.body.append(successModal);
  openSuccessCard();
};

const errorCard = () => {
  const errorTemplate = document.querySelector('#error');
  const errorTemplateElement = errorTemplate.content.querySelector('.error');
  const errorMessage = errorTemplateElement.cloneNode(true);
  errorModal.appendChild(errorMessage);
  document.body.append(errorModal);
  openErrorCard();
};

const onCloseSuccessCard = (evt) => {
  if (!successModal.contains(evt.target) || isEscEvent) {
    evt.preventDefault();
    successModal.classList.add('hidden');
    document.removeEventListener('keydown', onCloseSuccessCard);
  }
};

const openSuccessCard = () => {
  successModal.classList.remove('hidden');
  document.addEventListener('keydown', onCloseSuccessCard);
};

const closeErrorCard = () => {
  errorModal.classList.add('hidden');
  document.removeEventListener('keydown', onCloseErrorCard);
};


const onCloseErrorCard = (evt) => {
  if (!errorModal.contains(evt.target) || isEscEvent || errorButton(evt.target)) {
    evt.preventDefault();
    closeErrorCard();
  }
};
const openErrorCard = () => {
  errorModal.classList.remove('hidden');
  document.addEventListener('keydown', onCloseErrorCard);
};


export {successCard, errorCard};
export {showAlert};
