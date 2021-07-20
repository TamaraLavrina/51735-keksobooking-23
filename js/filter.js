import { makeMarkersForMap } from './map.js';
import { debounce} from './debounce.js';

const FILTER_TYPE_ANY = 'any';
const priceRange = {
  'low': {
    min: 0,
    max: 10000,
  },
  'middle': {
    min: 10000,
    max: 50000,
  },
  'high': {
    min: 50000,
    max: 1000000,
  },
};

const filterForm = document.querySelector('.map__filters');
const housingTypeSelect = filterForm['housing-type'];
const roomsSelect = filterForm['housing-rooms'];
const guestsSelect = filterForm['housing-guests'];
const priceSelect = filterForm['housing-price'];

const getFeatures = (advert) => {
  const checkedHousingFeatures = filterForm.querySelectorAll('.map__checkbox:checked');
  return Array.from(checkedHousingFeatures).every((checkedFeature) => advert.offer.features && advert.offer.features.includes(checkedFeature.value));
};

const getRoomNumber = (advert) => roomsSelect.value === FILTER_TYPE_ANY ? true : Number(roomsSelect.value) === advert.offer.rooms;
const getGuestsNumber = (advert) => guestsSelect.value === FILTER_TYPE_ANY ? true : Number(guestsSelect.value) === advert.offer.guests;
const getHousingType = (advert) => housingTypeSelect.value === FILTER_TYPE_ANY ? true : housingTypeSelect.value === advert.offer.type;
const getPrice = (advert) => priceSelect.value === FILTER_TYPE_ANY || advert.offer.price >= priceRange[priceSelect.value].min
  && advert.offer.price <= priceRange[priceSelect.value].max;

const filterAdvert = (adverts) => {
  const filteredAdvs = adverts.filter((advert) => getHousingType(advert))
    .filter((advert) => getRoomNumber(advert))
    .filter((advert) => getGuestsNumber(advert))
    .filter((advert) => getPrice(advert))
    .filter((advert) => getFeatures(advert));
  makeMarkersForMap(filteredAdvs);
};

const setFilterFormListener = (offersFromSerever) => filterForm.addEventListener('change', debounce(() => filterAdvert(offersFromSerever)));

export {setFilterFormListener};
