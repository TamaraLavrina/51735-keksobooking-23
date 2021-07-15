//import { successCard, errorCard } from './utils.js';
import { showAlert } from './utils.js';
//import { markersForMap } from './map.js';
import { unlockPageEements } from './map.js';

//import { validateForm } from './form.js';

const SERVER = 'https://23.javascript.pages.academy/keksobooking';
const getData = (onSuccess) => {
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
      onSuccess(offersFromSerever);
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
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};


