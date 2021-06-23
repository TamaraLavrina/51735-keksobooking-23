import {getRandomFloat} from './getRandom.js';
import {getRandomArrayElement} from './getRandom.js';
import {getRandomElement} from './getRandom.js';

const TYPES= [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const TIME = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  //'washer',
  //'elevator',
  // 'conditioner',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const DESCRIPTIONS = [
  'красивое светлое и мухи не кусают. Ну и конечно, евроремонт',
  'для славян без кошек и детей - Кекс не рекомендует',
  'можно всех и с детьми, и с кошкамии, и на девичник тоже',
];

const SIMILAR_ADV_COUNT = 10;


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
    features: FEATURES,
    description: getRandomArrayElement(DESCRIPTIONS),
    photos: PHOTOS,
  };
  return offer;
};

const createAdvertisement = () => {
  const advert = {
    location:createLocation(),
    offer:createOffer(),
    author:  createAvatar(),
  };

  return advert;
};

createAdvertisement();
const similarAvertisement = new Array(SIMILAR_ADV_COUNT).fill(null).map(() => createAdvertisement());
export {similarAvertisement};
export {createAdvertisement};
