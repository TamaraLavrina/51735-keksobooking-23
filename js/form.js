import { errorCard } from './utils.js';
import { sendData } from './fetchAPI.js';
import { getAddress } from './map.js';
import { resetMap } from './map.js';


const MAX_PRICE_VALUE = 1000000;
const MIN_BUNGALOW_PRICE_VALUE = 0;
const MIN_FLAT_PRICE_VALUE = 1000;
const MIN_HOTEL_PRICE_VALUE = 3000;
const MIN_HOUSE_PRICE_VALUE = 5000;
const MIN_PALACE_PRICE_VALUE = 10000;

const timeInSelect = document.querySelector('#timein');
const timeOutSelect = document.querySelector('#timeout');
const roomNumberSelect = document.querySelector('#room_number');
const capacitySelect = document.querySelector('#capacity');
const getHousingType = document.querySelector('#type');
const priceInput = document.querySelector('#price');
const addForm = document.querySelector('.ad-form');
const resetButton = document.querySelector('.ad-form__reset');

priceInput.addEventListener('input', () => {
  if (priceInput.value > MAX_PRICE_VALUE) {
    priceInput.setCustomValidity(`Не жадничайте. Маскимальная цена - ${MAX_PRICE_VALUE}`);
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
  priceInput.setAttribute('min', MIN_FLAT_PRICE_VALUE);
};

getHousingType.addEventListener('change', () => {
  switch (getHousingType.value) {
    case 'bungalow':
      priceInput.setAttribute('min', MIN_BUNGALOW_PRICE_VALUE);
      priceInput.setAttribute('placeholder', MIN_BUNGALOW_PRICE_VALUE);
      break;
    case 'flat':
      priceInput.setAttribute('min', MIN_FLAT_PRICE_VALUE);
      priceInput.setAttribute('placeholder', MIN_FLAT_PRICE_VALUE);
      break;
    case 'hotel':
      priceInput.setAttribute('min', MIN_HOTEL_PRICE_VALUE);
      priceInput.setAttribute('placeholder', MIN_HOTEL_PRICE_VALUE);
      break;
    case 'house':
      priceInput.setAttribute('min', MIN_HOUSE_PRICE_VALUE);
      priceInput.setAttribute('placeholder', MIN_HOUSE_PRICE_VALUE);
      break;
    case 'palace':
      priceInput.setAttribute('min', MIN_PALACE_PRICE_VALUE);
      priceInput.setAttribute('placeholder', MIN_PALACE_PRICE_VALUE);
      break;
  }
  getHousingType.setCustomValidity('');
});


// const onRoomChanger = (evt) => {
//   if (roomNumberSelect.value === 100 && capacitySelect.value === 0) {
//     capacitySelect.setCustomValidity('');
//   } else if (roomNumberSelect.value === 100 && capacitySelect.value !== 0) {
//     capacitySelect.setCustomValidity('Помещение не предназначено для гостей');
//     evt.preventDefault();
//   }  else if (capacitySelect.value > roomNumberSelect.value) {
//     capacitySelect.setCustomValidity('Количество гостей не может превышать количество комнат');
//     evt.preventDefault();
//   } else {
//     capacitySelect.setCustomValidity('');

//   }
//   capacitySelect.reportValidity();

// };

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
    //evt.preventDefault();
  } else if (Number(capacitySelect.value) !== 0) {
    if (Number(capacitySelect.value) > Number(roomNumberSelect.value)) {
      error.flag = false;
      error.message = 'Количество гостей не может превышать количество комнат';
      showErrors(error.message);
      //evt.preventDefault();
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
  //addForm.addEventListener('submit', onRoomChanger);
  timeInSelect.addEventListener('change', setTimeOut);
  timeOutSelect.addEventListener('change', setTimeIn);
};

const resetMapForm = () => {
  addForm.reset();
  resetMap();
  getAddress();
  initForm();
};

const returnToInitState = (evt) => {
  evt.preventDefault();
  initForm();
  resetMapForm();
};

// const setUserFormSubmit = (onSuccess) => {
//   addForm.addEventListener('submit', (evt) => {
//     evt.preventDefault();

//     sendData(
//       () => onSuccess(),
//       () => errorCard(),
//       new FormData(evt.target),
//     );
//     resetMapForm();
//   });
// };

const setUserFormSubmit = (onSuccess) => {
  addForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const testTest = onRoomChanger();
    if (testTest.flag) {
      sendData(
        () => { onSuccess(); resetMapForm(); },
        () => errorCard(),
        new FormData(evt.target),
      );
    } else {
      showErrors(testTest.message);
    }

  });
};

resetButton.addEventListener('click', returnToInitState);

export { setUserFormSubmit };
export { validateForm };
export { returnToInitState, resetMapForm };

