import {errorCard} from './utils.js';
import  {sendData} from'./fetchAPI.js';
import  {getAddress} from'./map.js';
import  {resetMap} from'./map.js';


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

const initForm =() =>{
  priceInput.setAttribute('min', MIN_FLAT_PRICE_VALUE );
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


const onRoomChanger = (evt) => {
  if (roomNumberSelect.value === 100 && capacitySelect.value === 0) {
    capacitySelect.setCustomValidity('');
  } else if (roomNumberSelect.value === 100 && capacitySelect.value !== 0) {
    capacitySelect.setCustomValidity('Помещение не предназначено для гостей');
    evt.preventDefault();
  }  else if (capacitySelect.value > roomNumberSelect.value) {
    capacitySelect.setCustomValidity('Количество гостей не может превышать количество комнат');
    evt.preventDefault();
  } else {
    capacitySelect.setCustomValidity('');
  }

  capacitySelect.reportValidity();
};
const validateForm = () => {
  initForm();
  capacitySelect.addEventListener('change', onRoomChanger);
  roomNumberSelect.addEventListener('change', onRoomChanger);
  addForm.addEventListener('submit', onRoomChanger);
  timeInSelect.addEventListener('change', setTimeOut);
  timeOutSelect.addEventListener('change', setTimeIn);
};


const returnToInitState = (evt) => {
  evt.preventDefault();
  initForm();
  getAddress();
  resetMap();
  //очистить поля формы
};

const setUserFormSubmit = (onSuccess) => {
  addForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSuccess(), //вот сюда хочу добавить функцию returntoInitState, но туплю и не пониманию как мне передать ее туда, потому что вместо onSuccess - у меня встает функция показа удачной карточки.
      () => errorCard(),
      new FormData(evt.target),
    );
  });
};

resetButton.addEventListener('click', returnToInitState);


// Filters
/*
const mapFilters = document.querySelector('.map__filters');
const mapFilterType = mapFilters.querySelector('#housing-type');
const mapFilterPrice = mapFilters.querySelector('#housing-price');
const mapFilterRooms = mapFilters.querySelector('#housing-rooms');
const mapFilterGuests = mapFilters.querySelector('#housing-guests');
const mapFilterFeatures = mapFilters.querySelector('#housing-features');
*/

export {setUserFormSubmit};
export {validateForm};
export {returnToInitState};

