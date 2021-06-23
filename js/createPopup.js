import { similarAvertisement } from './utils/createAdvertisement.js';

const container = document.querySelector('#map-canvas'); // контейнер
// шаблон карточки
const cardTemplate = document.querySelector('#card').content; //внутренности шаблона - доступ к контенту
const popup = cardTemplate.querySelector('.popup'); //объявление

const similarPopups = similarAvertisement;

const translateType = {
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
  palace: 'Дворец',
};

const isValue = (value, item) => value || item.remove();

const createPopupsAdvertContainer = () => {
  const similarPopupsFragment = document.createDocumentFragment();
  similarPopups.forEach((advert) => {
    const newPopup = popup.cloneNode(true); //клонируем объявление
    //заполнение объявления данными:
    !advert.offer.title ? newPopup.querySelector('.popup__title').textContent.remove() : newPopup.querySelector('.popup__title').textContent = advert.offer.title;
    newPopup.querySelector('.popup__text--price').textContent = isValue(`${advert.offer.price}${'₽/ночь'}`);
    newPopup.querySelector('.popup__text--address').textContent = isValue(advert.offer.address);
    newPopup.querySelector('.popup__type').textContent = isValue(translateType[advert.offer.type]);
    newPopup.querySelector('.popup__text--capacity').textContent = isValue(`${advert.offer.rooms} ${'комнаты для'} ${advert.offer.guests} ${'гостей'}`);
    newPopup.querySelector('.popup__text--time').textContent = isValue(`Заезд после ${advert.offer.checkin}, выезд до ${advert.offer.checkout}`);
    newPopup.querySelector('.popup__description').textContent = isValue(advert.offer.description);

    //список фич
    newPopup.querySelector('.popup__avatar').setAttribute('src', advert.author.avatar);
    const feuturesBox = newPopup.querySelector('.popup__features');
    const featureListIncome = advert.offer.features;
    feuturesBox.innerHTML = '';
    featureListIncome.forEach((feature) => {
      const newElement = document.createElement('li');
      newElement.setAttribute('class', `popup__feature popup__feature--${feature}`);
      feuturesBox.appendChild(newElement);
      if (featureListIncome  === '') {
        feuturesBox.remove();
      }
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

    newPopup.classList.add('popup'); //добавляем класс
    similarPopupsFragment.appendChild(newPopup); //собираем во фрагмент
  });
  container.appendChild(similarPopupsFragment); //вставляем в контейнер (в карту)
};

export { createPopupsAdvertContainer };
