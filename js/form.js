import {resetScale} from './scale.js';
import {init as initEffect, reset as resetEffect} from './effects.js';

const MAX_HASHTAG_COUNT = 5;
const VALID_HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;
const textError = {
  INVALID_COUNT: `Количество введенных хэштегов должно быть не больше ${MAX_HASHTAG_COUNT}.`,
  NOT_UNIQUE: 'Хэштеги не могут повторяться',
  INVALID_PATTERN: 'Некорректный хештег',
};

const body = document.querySelector('body');
const formUpload = document.querySelector('.img-upload__form');
const formOverlay = formUpload.querySelector('.img-upload__overlay');
const cancelButton = formUpload.querySelector('.img-upload__cancel');
const fileUploadField = formUpload.querySelector('.img-upload__input');
const hashtagsField = formUpload.querySelector('.text__hashtags');
const commentsField = formUpload.querySelector('.text__description');

const pristine = new Pristine(formUpload, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

const openModalForm = () => {
  formOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeModalForm = () => {
  formUpload.reset();
  resetScale();
  resetEffect();
  pristine.reset();
  formOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const isTextFieldFocused = () =>
  document.activeElement === hashtagsField ||
  document.activeElement === commentsField;

const normalizeTags = (tagString) => tagString
  .trim()
  .split(' ')
  .filter((tag) => Boolean(tag.length));

const hasValidTags = (value) => normalizeTags(value).every((tag) => VALID_HASHTAG.test(tag));

const hasValidCount = (value) => normalizeTags(value).length <= MAX_HASHTAG_COUNT;

const hasUniqueTags = (value) => {
  const lowerCaseTags = normalizeTags(value).map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    closeModalForm();
  }
}

const onCancelButtonClick = () => {
  closeModalForm();
};

const onFileInputChange = () => {
  openModalForm();
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

pristine.addValidator(
  hashtagsField,
  hasValidCount,
  textError.INVALID_COUNT,
  3,
  true
);

pristine.addValidator(
  hashtagsField,
  hasUniqueTags,
  textError.NOT_UNIQUE,
  2,
  true
);

pristine.addValidator(
  hashtagsField,
  hasValidTags,
  textError.INVALID_PATTERN,
  1,
  true
);

formUpload.addEventListener('submit', onFormSubmit);
fileUploadField.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', onCancelButtonClick);
initEffect();
