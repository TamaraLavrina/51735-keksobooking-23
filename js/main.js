import{similarAvertisement} from './utils/createAdvertisement.js';
import{createAdvertisement} from './utils/createAdvertisement.js';
import  './createPopup.js';
import {openPage} from './map.js';
import {downloadMap} from './map.js';
import { renderCard} from './createPopup.js';

similarAvertisement;
renderCard(createAdvertisement());

openPage();
downloadMap();


