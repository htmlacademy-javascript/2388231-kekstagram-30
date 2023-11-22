import { renderThumbnail } from './thumbnail.js';
import { showPicture } from './picture.js';

const containerPhoto = document.querySelector('.pictures');

// Отображает галерею при клике на фотографию
const renderGallery = (pictures) =>{
  containerPhoto.addEventListener('click', (evt) =>{
    const thumbnail = evt.target.closest('[data-picture-id]');

    if(!thumbnail){
      return;
    }

    evt.preventDefault();
    const pictureId = +thumbnail.dataset.pictureId;
    const pictureData = pictures.find(({id}) => id === pictureId);
    showPicture(pictureData);
  });

  renderThumbnail(pictures, containerPhoto);
};

export{renderGallery};
