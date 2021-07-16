import {blockPageEements, markersForMap} from './map.js';
import {unlockPageEements} from './map.js';
import {validateForm} from'./form.js';
import {getData} from'./fetchAPI.js';
import {setUserFormSubmit}  from './form.js';
import { errorCard, showAlert, successCard } from './messages.js';
//import './avatar.js';


const SIMILAR_ADV_COUNT = 10;

blockPageEements();

getData((offersFromSerever) => {
  unlockPageEements();
  validateForm();
  markersForMap(offersFromSerever.slice(0, SIMILAR_ADV_COUNT));
}, () => showAlert('не удалось загрузить данные с сервера'));

setUserFormSubmit(successCard, errorCard);
