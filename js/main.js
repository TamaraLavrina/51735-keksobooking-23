import {blockMapFilters, blockPageEements, markersForMap, unlockMapFilters, unlockPageEements} from './map.js';
import {validateForm, setUserFormSubmit} from'./form.js';
import {getData} from'./fetchAPI.js';
import { errorCard, showAlert, successCard } from './messages.js';
import {setFilterFormListener} from './filter.js';

blockPageEements();
blockMapFilters();

getData((offersFromSerever) => {
  unlockPageEements();
  setFilterFormListener(offersFromSerever);
  validateForm();
  markersForMap(offersFromSerever);
  unlockMapFilters();
  setUserFormSubmit(successCard, errorCard);
}, () => showAlert('не удалось загрузить данные с сервера'));
