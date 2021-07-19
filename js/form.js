import { errorCard } from './messages.js';
import { sendData } from './fetchAPI.js';
import { getAddress } from './map.js';
import { resetMap, mapFilters } from './map.js';

const setPrice = {
  maxValue: '1000000',
  bungalow: '0',
  flat: '1000',
  hotel: '3000',
  house: '5000',
  palace: '10000',
};

const timeInSelect = document.querySelector('#timein');
const timeOutSelect = document.querySelector('#timeout');
const roomNumberSelect = document.querySelector('#room_number');
const capacitySelect = document.querySelector('#capacity');
const getHousingType = document.querySelector('#type');
const priceInput = document.querySelector('#price');
const addForm = document.querySelector('.ad-form');
const resetButton = document.querySelector('.ad-form__reset');


priceInput.addEventListener('input', () => {
  if (Number(priceInput.value) > setPrice.maxValue) {
    priceInput.setCustomValidity(`Не жадничайте. Маскимальная цена - ${setPrice.maxValue}`);
  }
  else {
    priceInput.setCustomValidity('');
  }
  priceInput.reportValidity();
});

const setTimeIn = () => {
  timeInSelect.value = timeOutSelect.value;

};

const setTimeOut = () => {
  timeOutSelect.value = timeInSelect.value;
};

const initForm = () => {
  priceInput.setAttribute('min', setPrice.flat);
};

getHousingType.addEventListener('change', () => {
  switch (getHousingType.value) {
    case 'bungalow':
      priceInput.setAttribute('min', setPrice[getHousingType.value]);
      priceInput.setAttribute('placeholder', setPrice[getHousingType.value]);
      break;
    case 'flat':
      priceInput.setAttribute('min', setPrice[getHousingType.value]);
      priceInput.setAttribute('placeholder', setPrice[getHousingType.value]);
      break;
    case 'hotel':
      priceInput.setAttribute('min', setPrice[getHousingType.value]);
      priceInput.setAttribute('placeholder', setPrice[getHousingType.value]);
      break;
    case 'house':
      priceInput.setAttribute('min', setPrice[getHousingType.value]);
      priceInput.setAttribute('placeholder', setPrice[getHousingType.value]);
      break;
    case 'palace':
      priceInput.setAttribute('min', setPrice[getHousingType.value]);
      priceInput.setAttribute('placeholder', setPrice[getHousingType.value]);
      break;
  }
  getHousingType.setCustomValidity('');
});

const showErrors = (test) => {
  capacitySelect.setCustomValidity(test);
};

const onRoomChanger = () => {
  const error = {
    flag: true,
    message: '',
  };
  if (Number(roomNumberSelect.value) === 100 && Number(capacitySelect.value) === 0) {
    capacitySelect.setCustomValidity('');
  } else if (Number(roomNumberSelect.value) === 100 && Number(capacitySelect.value) !== 0) {
    error.flag = false;
    error.message = 'Помещение не предназначено для гостей';
    showErrors(error.message);
  } else if (Number(capacitySelect.value) !== 0) {
    if (Number(capacitySelect.value) > Number(roomNumberSelect.value)) {
      error.flag = false;
      error.message = 'Количество гостей не может превышать количество комнат';
      showErrors(error.message);
    }else {capacitySelect.setCustomValidity('');}
  }
  else if (Number(capacitySelect.value) === 0 && Number(roomNumberSelect.value) !== 100) {
    error.flag = false;
    error.message = 'не для гостей только по 100 комнат';
    showErrors(error.message);
  }

  else {
    capacitySelect.setCustomValidity('');
  }
  capacitySelect.reportValidity();
  return error;
};


const validateForm = () => {
  initForm();
  capacitySelect.addEventListener('change', onRoomChanger);
  roomNumberSelect.addEventListener('change', onRoomChanger);
  timeInSelect.addEventListener('change', setTimeOut);
  timeOutSelect.addEventListener('change', setTimeIn);
};

const resetMapForm = () => {
  addForm.reset();
  resetMap();
  getAddress();
  initForm();
  mapFilters.reset();
};

const returnToInitState = (evt) => {
  evt.preventDefault();
  initForm();
  resetMapForm();
};

const setUserFormSubmit = (onSuccess) => {
  addForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const validationResult = onRoomChanger();
    if (validationResult.flag) {
      sendData(
        () => { onSuccess(); resetMapForm(); },
        () => errorCard(),
        new FormData(evt.target),
      );
    } else {
      showErrors(validationResult.message);
    }

  });
};

resetButton.addEventListener('click', returnToInitState);

export { setUserFormSubmit };
export { validateForm };
export { returnToInitState, resetMapForm };
