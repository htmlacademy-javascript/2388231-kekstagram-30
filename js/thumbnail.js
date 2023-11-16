
const thumbnailPhoto = document
  .querySelector('#picture')
  .content
  .querySelector('.picture');
// Заполняет шаблон данными
const createThumbnail = ({ url, comments, description, likes, id }) => {
  const thumbnail = thumbnailPhoto.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.dataset.pictureId = id;
  return thumbnail;
};

// Отображает шаблон с изображениями на странице
const renderThumbnail = (pictures, containerPhoto) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });
  containerPhoto.append(fragment);
};


export { renderThumbnail};
