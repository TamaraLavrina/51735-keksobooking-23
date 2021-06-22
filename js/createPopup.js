import{similarAvertisement} from './utils/createAdvertisement.js';

const container = document.querySelector('#map-canvas'); // контейнер
// шаблон карточки
const cardTemplate = document.querySelector('#card').content; //внутренности шаблона - доступ к контенту
const popup = cardTemplate.querySelector('.popup'); //объявление
const similarPopups = similarAvertisement;

const translateType = {
  flat: 'Квартира',
  house: 'Дом',
  bungalow:'Бунгало',
  hotel:'Отель',
  palace:'Дворец',
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
    /*
    const photosBox =  newPopup.querySelector('.popup__photos');
    const photo = photosBox.querySelector('.popup__photo');
    photosBox.textContent = '';
    for (let ij = 0; ij < advert.offer.photos.length; ij++){
      const newPic = photo.cloneNode(true);
      newPic.src = advert.offer.photos[ij];
      photosBox.append(newPic);
    }
    */

    /*
    newPopup.querySelector('.popup__avatar').setAttribute('src', advert.author.avatar);
    const feuturesBox = newPopup.querySelector('.popup__features');
    const featureListIncome = advert.offer.features; //в консоли показывает случайные сгенерированные с массива фичи
    featureListIncome.forEach((feature) => {
      const newElement = document.createElement('li');
      newElement.classList.add(`popup__feature popup__feautere--${feature}`);
      feuturesBox.appendChild(newElement);
    });


    //!advert.offer.features ? feuturesBox.textContent.remove() : feuturesBox = fillFeatureBox();
    //const modifiers = featureListIncome.forEach((feature) => `popup__feautere--${feature}`); // а вот тут  говорит что advert.offer.features.map - не функция и featureListIncome.forEach тоже не функция
    //
    //const fragment = document.createDocumentFragment();
    //for (let i = 0; i < modifiers.length; i++){
    //const newElement = document.createElement('li');
    //newElement.classList.add('popup__feature', modifiers[i]);
    //fragment.appendChild(newElement);
    //}

    //feuturesBox.appendChild(fragment);
    //

*/
    newPopup.classList.add('popup'); //добавляем класс
    similarPopupsFragment.appendChild(newPopup); //собираем во фрагмент
  });
  container.appendChild(similarPopupsFragment); //вставляем в контейнер (в карту)
};

export {createPopupsAdvertContainer};
