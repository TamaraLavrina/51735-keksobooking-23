import { renderCard } from './renderCard.js';
const SIMILAR_ADV_COUNT = 10;

const addForm = document.querySelector('.ad-form');
const parentsFields = addForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const addressInput = document.querySelector('#address');

const blockPageEements = () => {
  addForm.classList.add('ad-form--disabled');
  parentsFields.forEach((element) => element.classList.add('disabled'));
};

const blockMapFilters = () => {
  mapFilters.classList.add('map__filters--disabled');
};

const unlockPageEements = () => {
  addForm.classList.remove('ad-form--disabled');
  parentsFields.forEach((element) => element.classList.remove('disabled'));
};

const unlockMapFilters = () => {
  mapFilters.classList.remove('map__filters--disabled');
};

const DefaultCoordinates = {
  lat: 35.68152,
  lng: 139.75372,
};
const getAddress = () => addressInput.value = `${DefaultCoordinates.lat}, ${DefaultCoordinates.lng}`;

const map = L.map('map-canvas')
  .on('load', () => {
    unlockPageEements();
    unlockMapFilters();
    getAddress();
  })
  .setView(DefaultCoordinates, 13);

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
  (DefaultCoordinates),
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
  mainPinMarker.setLatLng(DefaultCoordinates);
  map.setView(DefaultCoordinates, 13);
};

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

const markersForMap = (adverts) => {
  markerGroup.clearLayers();
  adverts.slice(0, SIMILAR_ADV_COUNT).forEach((advert) => {
    createMarker(advert);
  });
};

export { createMarker, getAddress};
export { markersForMap };
export { resetMap, mapFilters};
export { blockPageEements, blockMapFilters };
export { unlockPageEements, unlockMapFilters };
