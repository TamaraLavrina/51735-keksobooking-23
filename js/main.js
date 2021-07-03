import{createAdvert} from './utils/createAdvertisement.js';
import {blockPageEements} from './map.js';
import {unlockPageEements} from './map.js';
import {renderCard} from './renderCard.js';
import  {validateForm} from'./form.js';
//import{setSimplePinsOnMap}  from './map.js';

renderCard(createAdvert());

blockPageEements();
unlockPageEements();
validateForm();
//setSimplePinsOnMap();
