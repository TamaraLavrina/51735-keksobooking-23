import {blockMapFilters, blockPageEements, markersForMap, unlockMapFilters} from './map.js';
import {unlockPageEements} from './map.js';
import {validateForm} from'./form.js';
import {getData} from'./fetchAPI.js';
import {setUserFormSubmit}  from './form.js';
import { errorCard, showAlert, successCard } from './messages.js';
import './filter.js';

//

blockPageEements();
blockMapFilters();

getData((offersFromSerever) => {
  unlockPageEements();
  unlockMapFilters();
  validateForm();
  markersForMap(offersFromSerever);
  setUserFormSubmit(successCard, errorCard);
}, () => showAlert('не удалось загрузить данные с сервера'));


