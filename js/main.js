import {blockPageEements, markersForMap} from './map.js';
//import {unlockPageEements} from './map.js';
//import {renderCard} from './renderCard.js';
import  {validateForm} from'./form.js';
import  {getData} from'./fetchAPI.js';
import {setUserFormSubmit}  from'./fetchAPI.js';
import { successCard } from './utils.js';


const SIMILAR_ADV_COUNT = 10;

getData((offersFromSerever) => {
  markersForMap(offersFromSerever.slice(0, SIMILAR_ADV_COUNT));
});

blockPageEements();
//unlockPageEements();
validateForm();
setUserFormSubmit(successCard);
//setSimplePinsOnMap();
