import{createAdvert} from './utils/createAdvertisement.js';
import  './createPopup.js';
import {blockPageEements} from './map.js';
import {unlockPageEements} from './map.js';
import { renderCard} from './createPopup.js';

//const SIMILAR_ADV_COUNT = 10;
//const similarAvertisement = new Array(SIMILAR_ADV_COUNT).fill(null).map(() => createAdvert());
//similarAvertisement
// пока в итоге массив то нам и не нужен, но в задании он был, оставлю в виде коммента

renderCard(createAdvert());

blockPageEements();
unlockPageEements();


