//import {createMarker} from './map.js';
import {showAlert} from './utils.js';
import {markersForMap} from './map.js';
const SIMILAR_ADV_COUNT = 10;

const getData = () => {
  fetch ('https://23.javascript.pages.academy/keksobooking/data', {
    method: 'GET',
    credentials: 'same-origin',
  },
  )
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw new Error(response.status);
    })
    .then((response) => response.json())
    .then((offersFromSerever) => {
      console.log(offersFromSerever);
      markersForMap (offersFromSerever.slice(0, SIMILAR_ADV_COUNT ));
    })
    .catch(() =>{
      showAlert('Не удалось загрузить данные c сервера. Попробуйте еще раз.');
    });
};

const sendData = (form) => {
  fetch('https://23.javascript.pages.academy/keksobooking', {
    method: 'POST',
    body: new FormData(form),
  })
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw new Error(response.status);
    });
};

export {getData, sendData};

/*

const similarAdverts = new Array(SIMILAR_ADV_COUNT).fill(null).map(() => createAdvert());
similarAdverts.forEach((advert) => {
  createMarker(advert);
});
*/
