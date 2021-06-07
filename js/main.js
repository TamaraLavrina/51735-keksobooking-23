const SIMILAR_ADV_COUNT = 10;
const TYPE = [
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
  'washer',
  'elevator',
  'conditioner',
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const DESCRIPTION = [
  'красивое светлое и мухи не кусают. Ну и конечно, евроремонт',
  'для славян без кошек и детей - Кекс не рекомендует',
  'можно всех и с детьми, и с кошкамии, и на девичник тоже',
];
function getRandomFloat(min, max, float = '2') {
  if (min < 0 || max < 0) {
    throw new Error('Уупс!');
  }
  return Number((Math.random() * (max - min) + min).toFixed(float));
}

const createLocation = () => {
  const location = {
    lat: getRandomFloat(35.65000, 35.70000, 5),
    lng: getRandomFloat(139.70000, 139.80000, 5),
  };
  return {
    'location.lat, location.lng'
  };
};
const getRandomArrayElement = (elements) => elements[getRandomFloat(0, elements.length - 1, 0)];
const getRandomElement = () => getRandomFloat(0, 100000, 0);
const createOffer = () => {
  const randomPrice = getRandomFloat(1, 1000000, 0);
  return {
    title: 'Предложение №',
    address: createLocation(),
    price: randomPrice,
    type: getRandomArrayElement(TYPE),
    rooms: getRandomElement(),
    guests: getRandomElement(),
    checkin: getRandomArrayElement(TIME),
    checkout: getRandomArrayElement(TIME),
    features: getRandomArrayElement(FEATURES),
    description: getRandomArrayElement(DESCRIPTION),
    photos: getRandomArrayElement(PHOTOS),
  };
};


const createAvatar = () => {
  const advAvatar = getRandomFloat(0, 8, 0);
  return {
    avatar: `img/avatars/user0${advAvatar}.png`,
  };
};


const createAdvertisement = () => ({
  author: createAvatar(),
  Offer: createOffer(),
  location: createLocation(),
});
const similaraAvertisement = new Array(SIMILAR_ADV_COUNT).fill(null).map(() => createAdvertisement());

