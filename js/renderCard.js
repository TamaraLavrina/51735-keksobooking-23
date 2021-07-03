import{createAdvert} from './utils/createAdvertisement.js';
createAdvert();

const translateType = {
  flat: 'Квартира',
  house: 'Дом',
  bungalow:'Бунгало',
  hotel:'Отель',
  palace:'Дворец',
};
const isValue = (value, item) => value || item.remove();

const renderCard = (advert) => {
  const popup = document.querySelector('#card')
    .content
    .querySelector('.popup');
  const newPopup = popup.cloneNode(true); //клонируем объявление
  //заполнение объявления данными:
  newPopup.querySelector('.popup__title').textContent = isValue(advert.offer.title);
  newPopup.querySelector('.popup__text--price').textContent = isValue(`${advert.offer.price}${'₽/ночь'}`);
  newPopup.querySelector('.popup__text--address').textContent = isValue(advert.offer.address);
  newPopup.querySelector('.popup__type').textContent = isValue(translateType[advert.offer.type]);
  newPopup.querySelector('.popup__text--capacity').textContent = isValue(`${advert.offer.rooms} ${'комнаты для'} ${advert.offer.guests} ${'гостей'}`);
  newPopup.querySelector('.popup__text--time').textContent = isValue(`Заезд после ${advert.offer.checkin}, выезд до ${advert.offer.checkout}`);
  newPopup.querySelector('.popup__description').textContent = isValue(advert.offer.description);

  //список удобств

  const featureListElement = newPopup.querySelector('.popup__features');
  featureListElement.innerHTML = '';

  const features = advert.offer.features;
  features.forEach((item) => {
    const listElement = document.createElement('li');
    listElement.setAttribute('class', `popup__feature popup__feature--${item}`);
    featureListElement.appendChild(listElement);
  });

  //массив с фото
  const arrayPhotos = advert.offer.photos;
  const photoElements = newPopup.querySelector('.popup__photos');
  const photoElement = photoElements.querySelector('.popup__photo');
  arrayPhotos.forEach((item) => {
    photoElement.cloneNode(true);
    photoElement.src = item;
    photoElements.appendChild(photoElement);
    if (photoElement.src === '') {
      photoElement.remove();
    }
  });

  const avatar = newPopup.querySelector('.popup__avatar');
  avatar.src = advert.author.avatar;

  return newPopup;
};

export { renderCard };
