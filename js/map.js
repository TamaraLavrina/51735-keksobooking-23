import {renderCard} from './renderCard.js';
//import{createAdvert} from './utils/createAdvert.js';
const addForm = document.querySelector('.ad-form');
const parentsFields = addForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const resetButton = document.querySelector('.ad-form__reset');
const submitButton = document.querySelector('.ad-form__submit');
const addressInput = document.querySelector('#address');

const blockPageEements = () => {
  addForm.classList.add ('ad-form--disabled');
  parentsFields.forEach((element) => element.classList.add('disabled'));
  mapFilters.classList.add('map__filters--disabled');
};

const unlockPageEements = () => {
  addForm.classList.remove('ad-form--disabled');
  parentsFields.forEach((element) => element.classList.remove('disabled'));
  mapFilters.classList.remove('map__filters--disabled');

};

export {blockPageEements};
export{unlockPageEements};

const DefaultCoordinates = {
  lat: 35.68152,
  lng: 139.75372,
};

const map = L.map('map-canvas')
  .on('load', () => {
    addForm.classList.remove('ad-form--disabled');
    parentsFields.forEach((element) => element.classList.remove('disabled'));
    mapFilters.classList.remove('map__filters--disabled');
    addressInput.value =  `${DefaultCoordinates.lat}, ${DefaultCoordinates.lng}`;
  })
  .setView(DefaultCoordinates, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});


const mainPinMarker = L.marker(
  {
    lat: 35.67500,
    lng: 139.75000,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('move', (evt) => {
  addressInput.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});

const resetMap = () => {
  mainPinMarker.setLatLng({
    lat: 35.67500,
    lng: 139.75000,
  });

  map.setView({
    lat: 35.67500,
    lng: 139.75000,
  }, 16);
};

resetButton.addEventListener('click', resetMap);
submitButton.addEventListener('click', resetMap);

const markerGroup = L.layerGroup().addTo(map);

const createMarker = (advert) => {
  const { location } = advert;

  const icon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(
    {
      lat: location.lat,
      lng: location.lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(markerGroup)
    .bindPopup(
      renderCard(advert),
      {
        keepInView: true,
      },
    );
};

const markersForMap = (adverts) => {adverts.forEach((advert) => {
  createMarker(advert);
});
};

export {createMarker};
export {markersForMap };

/*
const SIMILAR_ADV_COUNT = 10;
const similarAdverts = new Array(SIMILAR_ADV_COUNT).fill(null).map(() => createAdvert());
similarAdverts.forEach((advert) => {
  createMarker(advert);
});
*/
