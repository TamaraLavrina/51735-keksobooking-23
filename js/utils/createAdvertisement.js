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

/*
const createAvatar = () => {
  const advAvatar = getRandomFloat(1, 10, 0);
  const advAvatarString = String(advAvatar);
  return {
    avatar: `img/avatars/user${advAvatarString.padStart( 2 , '0')}.png`,
  };
};

//const createLocation = () => {
//  const location = {
//    lat: getRandomFloat(35.65000, 35.70000, 5),
//    lng: getRandomFloat(139.70000, 139.80000, 5),
//  };
//
//  return  location;
//};
*/
const createAdvert = () => {
  const advAvatar = getRandomFloat(1, 10, 0);
  const advAvatarString = String(advAvatar);
  const avatar = {
    avatar: `img/avatars/user${advAvatarString.padStart( 2 , '0')}.png`,
  };
  const location = {
    lat: getRandomFloat(35.65000, 35.70000, 5),
    lng: getRandomFloat(139.70000, 139.80000, 5),
  };

  const title = 'Предложение №';
  const address = `${location.lat}, ${location.lng}`;
  const price = getRandomFloat(1, 1000000, 0);
  const type = getRandomArrayElement(TYPES);
  const rooms = getRandomElement();
  const guests = getRandomElement();
  const checkin = getRandomArrayElement(TIME);
  const checkout = getRandomArrayElement(TIME);
  const features =FEATURES;
  const description = getRandomArrayElement(DESCRIPTIONS);
  const photos = PHOTOS;

  return {
    author: avatar,
    offer: {
      title,
      address,
      price,
      type,
      rooms,
      guests,
      checkin,
      checkout,
      features,
      description,
      photos,
    },
    location,
  };

};

export {createAdvert};
