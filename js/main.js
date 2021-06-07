function getRandomFloat(min, max, float = '2') {
  if (min < 0 || max < 0) {
    throw new Error('Уупс!');
  }
  return Number((Math.random() * (max - min) + min).toFixed(float));
}
getRandomFloat(5, 45, 3);

/*
let author {
  avatar: адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 8 с ведущим нулём.
  Например, 01, 02 и т. д. Адреса изображений не повторяются.
}

 let offer{  //объект — содержит информацию об объявлении. Состоит из полей:
  title, строка — заголовок предложения. Придумайте самостоятельно.
  address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.x}}, {{location.y}}.
  price, число — стоимость. Случайное целое положительное число.
  type, строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel.
  rooms, число — количество комнат. Случайное целое положительное число.
  guests, число — количество гостей, которое можно разместить. Случайное целое положительное число.
  checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
  checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
  features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.
  description, строка — описание помещения. Придумайте самостоятельно.
  photos, массив строк — массив случайной длины из значений:
}
*/
const SIMILAR_ADV_COUNT = 10;
// eslint-disable-next-line no-useless-concat
const avatar = `${'img/avatars/user0' + 'getRandomFloat(0, 8, 0)'}${  ''.png}`;
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
const createLocation = () => {
  const latitude = getRandomFloat(35.65000, 35.70000, 5);
  const length = getRandomFloat(139.70000, 139.80000, 5);
  return {
    lat: latitude,
    lgn: length,
  };
};

const getRandomArrayElement = (elements) => elements[getRandomFloat(0, elements.length - 1, 0)];
const getRandomElement = () => getRandomFloat(0, 100500, 0);
const createOffer = () => {
  const randomPrice = getRandomFloat(1, 100500000, 0);
  return {
    title: 'Новое предложeние - лучше старого',
    address: '{{location.x}}, {{location.y}}',
    price: randomPrice,
    type: getRandomArrayElement(TYPE),
    rooms: getRandomElement(),
    guests: getRandomElement(),
    checkin: getRandomArrayElement(TIME),
    checkout: getRandomArrayElement(TIME),
    features: getRandomArrayElement(FEATURES),
    description: 'красивое светлое и мухи не кусают. Ну и конечно, евроремонт',
    photos: getRandomArrayElement(PHOTOS),
  };
};

const createAdvertisement = () => ({
  author: avatar,
  Offer: createOffer(),
  location: createLocation(),
});

// eslint-disable-next-line no-console
console.log(
  createOffer(),
);


const similaraAvertisement = new Array(SIMILAR_ADV_COUNT).fill(null).map(() => createAdvertisement());
console.log(similaraAvertisement);

