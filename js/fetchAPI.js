//import { successCard, errorCard } from './utils.js';
import { showAlert } from './utils.js';
//import { markersForMap } from './map.js';
import { unlockPageEements } from './map.js';
//import { validateForm } from './form.js';

const SERVER = 'https://23.javascript.pages.academy/keksobooking';
const addForm = document.querySelector('.ad-form');
//const submit = addForm.querySelector('.ad-form__submit');

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
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};


/*
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
      )
        .then(() => onSuccess());
    } else {
      errorCard();
    }
  });
};
*/

const setUserFormSubmit = (onSuccess) => {
  addForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    fetch(
      SERVER,
      {
        method: 'POST',
        body: formData,
      },
    )
      .then((response) => {
        if (response.ok) {
          onSuccess();
        } else {
          showAlert('Не удалось отправить форму. Попробуйте ещё раз');
        }
      })
      .catch(() => {
        showAlert('Не удалось отправить форму. Попробуйте ещё раз');
      });
  });
};

export {getData, sendData};
export { setUserFormSubmit };


