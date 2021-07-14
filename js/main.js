import {blockPageEements} from './map.js';
//import {unlockPageEements} from './map.js';
import {renderCard} from './renderCard.js';
import  {validateForm} from'./form.js';
import  {getData} from'./fetchAPI.js';
import {setUserFormSubmit}  from'./fetchAPI.js';
import './fetchAPI.js';

const adverts = getData();
adverts.forEach((advert) => {renderCard(advert);
});

blockPageEements();
//unlockPageEements();
validateForm();
setUserFormSubmit();
//setSimplePinsOnMap();
