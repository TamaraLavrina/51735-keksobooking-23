const addForm = document.querySelector('.ad-form');
const parentsFields = addForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');

const openPage = () => {
  addForm.classList.add ('ad-form--disabled');
  parentsFields.forEach((element) => element.classList.add('disabled'));
  mapFilters.classList.add('map__filters--disabled');
};

const downloadMap = () => {
  addForm.classList.remove('ad-form--disabled');
  parentsFields.forEach((element) => element.classList.remove('disabled'));
  mapFilters.classList.remove('map__filters--disabled');

};

export {openPage};
export{downloadMap};
