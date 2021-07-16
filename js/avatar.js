const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const avatarChooser = document.querySelector('.ad-form-header__input');
const avatarPreview = document.querySelector('.ad-form-header__preview>img');
const photoChooser = document.querySelector('.ad-form__input');
const accomodityPreview = document.querySelector('.ad-form__photo');

const picPreview = (input, preview) => {
  const file = input.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {preview.src = reader.result;});
    reader.readAsDataURL(file);
  }
};

avatarChooser.addEventListener('change',() => picPreview(avatarChooser, avatarPreview));
photoChooser.addEventListener('change',() => picPreview(photoChooser, accomodityPreview));


