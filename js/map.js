import { renderCard } from './render-card.js';
const SIMILAR_ADV_COUNT = 10;

const addForm = document.querySelector('.ad-form');
const parentsFields = addForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const addressInput = document.querySelector('#address');

const zoom = 13;
const mainPin = {
  size: [52, 52],
  anchor: [26, 52],
};
const iconPin = {
  size: [40, 40],
  anchor: [20, 40],
};

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


const map = L.map('map-canvas');
const initMap = async ()=> {
  map.on('load', () => {
    unlockPageEements();
    getAddress();
  })
    .setView(DefaultCoordinates, zoom);
};

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: mainPin.size,
  iconAnchor: mainPin.anchor,
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
    iconSize: iconPin.size,
    iconAnchor: iconPin.anchor,
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

const makeMarkersForMap = (adverts) => {
  markerGroup.clearLayers();
  adverts.slice(0, SIMILAR_ADV_COUNT).forEach((advert) => {
    createMarker(advert);
  });
};
let serverData = [];
const saveServerData = (offersFromSerever) => {
  serverData = offersFromSerever.slice(0, SIMILAR_ADV_COUNT);
};

export { createMarker, getAddress, initMap };
export { makeMarkersForMap, saveServerData, serverData };
export { resetMap, mapFilters };
export { blockPageEements, blockMapFilters };
export { unlockPageEements, unlockMapFilters };
