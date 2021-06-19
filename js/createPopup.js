
import{similarAvertisement} from './utils/createAdvertisement.js';

const container = document.querySelector('#map-canvas'); // контейнер
// шаблон карточки
const cardTemplate = document.querySelector('#card').content; //внутренности шаблона - доступ к контенту
const popup = cardTemplate.querySelector('.popup'); //объявление
const similarPopups = similarAvertisement(); // я вот тут не уверена, что происходит я просто притащила сюда массив получается и назвала его? потому что в браузере
//омассив создается а вот объявленияем и близко не пахнет.
/*
const translateType{
    flat: 'Квартира',
    house: 'Дом',
    bungalow:'Бунгало',
    hotel:'Отель',
    palace:'Дворец',
};
*/

const similarPopupsFragment = document.createDocumentFragment();
similarPopups.forEach(() => {
  const newPopup = popup.cloneNode(true); //клонируем объявление
  //заполнение объявления данными:
  newPopup.querySelector('.popup__title').textContent = similarAvertisement.offer.title;
  newPopup.querySelector('.popup__text--price').textContent = `${similarAvertisement.offer.price}${'₽/ночь'}`;
  newPopup.querySelector('.popup__text--address').textContent = similarAvertisement.offer.address;
  newPopup.querySelector('.popup__type').textContent = similarAvertisement.offer.type; //не понимаю как заменять значения
  newPopup.querySelector('.popup__text--capacity').textContent =  `${similarAvertisement.offer.rooms} ${'комнаты для'} ${similarAvertisement.offer.guests} ${'гостей'}`;
  newPopup.querySelector('.popup__text--time').textContent = `Заезд после ${similarAvertisement.offer.checkin}, выезд до ${similarAvertisement.offer.checkout}`;
  const featuresBox = newPopup.querySelector('.popup__features');
  featuresBox.removeChild('li');
  similarAvertisement.offer.features.forEach(() => {
    document.createElement('li');
    li.setAttribute('class', `feature feature--${similarAvertisement.offer.features}`),
    featuresBox.appendChild('li');
  });

  newPopup.querySelector('.popup__description').textContent = similarAvertisement.offer.description;
  newPopup.querySelector('.popup__photos').textContent = similarAvertisement.offer.photos;
  newPopup.querySelector('.popup__avatar').setAttribute('src', similarAvertisement.author.avatar);


  newPopup.classList.add('popup'); //добавляем класс
  similarPopupsFragment.appendChild(newPopup); //собираем во фрагмент
  container.appendChild(similarPopupsFragment); //вставляем в контейнер (в карту)
});


