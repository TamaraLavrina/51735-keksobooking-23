import {TYPES} from './data.js';
import {TIME} from './data.js';
import {FEATURES} from './data.js';
import {PHOTOS} from './data.js';
import {DESCRIPTIONS} from './data.js';
import {getRandomFloat} from './getRandom.js';
import {getRandomArrayElement} from './getRandom.js';
import {getRandomElement} from './getRandom.js';
import {SIMILAR_ADV_COUNT} from './data.js';

const createAvatar = () => {
  const advAvatar = getRandomFloat(1, 10, 0);
  const advAvatarString = String(advAvatar);
  return {
    avatar: `img/avatars/user${advAvatarString.padStart( 2 , '0')}.png`,
  };
};

const createLocation = () => {
  const location = {
    lat: getRandomFloat(35.65000, 35.70000, 5),
    lng: getRandomFloat(139.70000, 139.80000, 5),
  };

  return  location;
};

const createOffer = () => {
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
  return offer;
};

const createAdvertisement = () => {
  const location = createLocation();
  const offer = createOffer();
  const author = createAvatar();

  return { author, offer, location };
};

const similarAvertisement = new Array(SIMILAR_ADV_COUNT).fill(null).map(() => createAdvertisement());
export {similarAvertisement};
export {createAdvertisement};
