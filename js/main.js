import {TYPES} from './utils/data.js';
import {TIME} from './utils/data.js';
import {FEATURES} from './utils/data.js';
import {PHOTOS} from './utils/data.js';
import {DESCRIPTIONS} from './utils/data.js';
import {getRandomFloat} from './utils/getRandomFloat.js';
import{getRandomElement} from './utils/getRandomFloat.js';
import{getRandomArrayElement} from './utils/getRandomFloat.js';
import{createAvatar} from './utils/getRandomFloat.js';
import{createLocation} from './utils/getRandomFloat.js';

const SIMILAR_ADV_COUNT = 10;

const createAdvertisement = () => {
  const location = createLocation();

  const offer = {
    title: 'Предложение №',
    address: `${location.lat}, ${location.lng}`,
    price: getRandomFloat(1, 1000000, 0),
    type: getRandomArrayElement(TYPES),
    rooms: getRandomElement(),
    guests: getRandomElement(),
    checkin: getRandomArrayElement(TIME),
    checkout: getRandomArrayElement(TIME),
    features: getRandomArrayElement(FEATURES),
    description: getRandomArrayElement(DESCRIPTIONS),
    photos: getRandomArrayElement(PHOTOS),
  };

  const author = createAvatar();

  return { author, offer, location };
};

const similaraAvertisement = new Array(SIMILAR_ADV_COUNT).fill(null).map(() => createAdvertisement());

similaraAvertisement;
