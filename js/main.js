import {blockMapFilters, blockPageEements, makeMarkersForMap, unlockMapFilters, unlockPageEements, saveServerData, initMap} from './map.js';
import {validateForm, setUserFormSubmit} from'./form.js';
import {getData} from'./fetchAPI.js';
import { showErrorCard, showAlert, showSuccessCard } from './messages.js';
import {setFilterFormListener} from './filter.js';
import {accomodityPhotoPreview} from './preview.js';

blockPageEements();
blockMapFilters();
initMap().then(unlockPageEements);

getData((offersFromSerever) => {
  saveServerData(offersFromSerever);
  validateForm();
  makeMarkersForMap(offersFromSerever);
  unlockMapFilters();
  setFilterFormListener(offersFromSerever);
  setUserFormSubmit(showSuccessCard, showErrorCard);
}, () => showAlert('не удалось загрузить данные с сервера'));

accomodityPhotoPreview();
