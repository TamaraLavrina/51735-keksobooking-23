const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const PhotoSize = {
  height: '70',
  width: '70',
};

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

const accomodityPhotoPreview  = () => {
  if (accomodityPreview.firstChild) {
    accomodityPreview.firstChild.remove();
  }
  const photo = document.createElement('img');
  photo.height = PhotoSize.height;
  photo.width = PhotoSize.width;
  accomodityPreview.appendChild(photo);
  return photo;
};
const changePreview = (chooser, preview) => {
  const file = chooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((type) => fileName.endsWith(type));

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      preview.src = reader.result;
    });
    reader.readAsDataURL(file);
  }
};

const resetPhotoPreview = () => {
  avatarPreview.src = 'img/muffin-grey.svg';
  if (accomodityPreview.firstChild) {
    accomodityPreview.firstChild.remove();
  }
};

avatarChooser.addEventListener('change',() => picPreview(avatarChooser, avatarPreview));
photoChooser.addEventListener('change', () => changePreview(photoChooser, accomodityPhotoPreview()));

export {accomodityPhotoPreview, resetPhotoPreview};

