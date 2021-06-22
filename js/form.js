const MIN_NAME_LENGTH = 30;
const MAX_NAME_LENGTH = 100;
const MAX_PRICE_VALUE = 1000000;

const titleInput = document.querySelector('#title');

titleInput.addEventListener('input', () => {
  const valueLength = titleInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    titleInput.setCustomValidity(`Ещё ${  MIN_NAME_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    titleInput.setCustomValidity(`Удалите лишние ${  valueLength - MAX_NAME_LENGTH } симв.`);
  } else if (valueLength > MIN_NAME_LENGTH && valueLength <= MAX_NAME_LENGTH) {
    titleInput.reportValidity();
  }
});

const priceInput = document.querySelector('#price');
priceInput.addEventListener('input', () => {
  const priceTypeNumber = priceInput.value;

  if (typeof priceTypeNumber !== 'number'){
    priceInput.setCustomValidity('Введите числовое значение');
  } else if (priceTypeNumber > MAX_PRICE_VALUE) {
    priceInput.setCustomValidity(`Не жадничайте. Маскимальная цена - ${ MAX_PRICE_VALUE }`);
  }
  else {
    priceInput.reportValidity();
  }
});

const roomNumberSelect = document.querySelector('#room_number');
const capacitySelect = document.querySelector('#capacity');

roomNumberSelect.addEventListener('change', () =>{
  if (roomNumberSelect.value === Option.value1) {

    capacitySelect.setCustomValidity('для 1 гостя');
  }
  else if(roomNumberSelect.value === Option.value2) {
    capacitySelect.setCustomValidity('для 2 гостей или для 1 гостя');
  }
  else if(roomNumberSelect.value === Option.value3) {
    capacitySelect.setCustomValidity('«для 3 гостей», «для 2 гостей» или «для 1 гостя»');
  }
  else if(roomNumberSelect.value === Option.value1000) {
    capacitySelect.setCustomValidity('«не для гостей»');
  }
  else {
    roomNumberSelect.reportValidity();
  }
});

document.querySelector('.add-form').addEventListener("submit", (evt) => {
  // Каждый раз, когда пользователь пытается отправить данные, мы проверяем
   // валидность полей.
  if (!input.validity.valid) {

    // Если поле невалидно, отображается пользовательское
    // сообщение об ошибке
    error.innerHTML =vvv ;
    error.className = vvv;
    // И мы предотвращаем отправку формы путём отмены события
    evt.preventDefault();
  }
}, false);

