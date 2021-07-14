import { successCard, errorCard } from './utils.js';
import { showAlert } from './utils.js';
import { markersForMap } from './map.js';
import { unlockPageEements } from './map.js';
import { validateForm } from './form.js';
const SIMILAR_ADV_COUNT = 10;
const SERVER = 'https://23.javascript.pages.academy/keksobooking';
const addForm = document.querySelector('.ad-form');
//const submit = addForm.querySelector('.ad-form__submit');

const getData = () => {
  fetch(`${SERVER}/data`, {
    method: 'GET',
    credentials: 'same-origin',
  },
  )
    .then((response) => {
      if (response.ok) {
        unlockPageEements();
        return response;
      }
      throw new Error(response.status);
    })
    .then((response) => response.json())
    .then((offersFromSerever) => {
      markersForMap(offersFromSerever.slice(0, SIMILAR_ADV_COUNT));
    })
    .catch(() => {
      showAlert('Не удалось загрузить данные c сервера. Попробуйте еще раз.');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    SERVER,
    {
      method: 'POST',
      credentials: 'same-origin',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch (() => {
      onFail();
    });
};

const setUserFormSubmit = (onSuccess) => {
  addForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (validateForm()) {
      const formData = new FormData(evt.target);

      sendData(
        onSuccess,
        formData,
      );
      successCard();
    } else {
      errorCard();
    }
  });
};


export { getData, setUserFormSubmit };


