//import{createAdvert} from './utils/createAdvert.js';
import {blockPageEements} from './map.js';
import {unlockPageEements} from './map.js';
import {renderCard} from './renderCard.js';
import  {validateForm} from'./form.js';
import  {getData} from'./fetchAPI.js';
//import{setSimplePinsOnMap}  from './map.js';

renderCard(getData());

blockPageEements();
unlockPageEements();
validateForm();
//setSimplePinsOnMap();
