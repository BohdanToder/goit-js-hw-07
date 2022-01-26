import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');

galleryItems.forEach(image => {
    const imageWrapperEl = document.createElement('div');
    imageWrapperEl.classList.add('gallery__item');

    const imageLinkEL = document.createElement('a');
    imageLinkEL.classList.add('gallery__link');
    imageLinkEL.href = image.original;

    const imageEL = document.createElement('img');
    imageEL.classList.add('gallery__image');
    imageEL.src = image.preview;
    imageEL.dataset.source = image.original;
    imageEL.alt = image.description;

    imageLinkEL.append(imageEL);
    imageWrapperEl.append(imageLinkEL);
    galleryRef.append(imageWrapperEl);
});

const onImageClick = (event) => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') { 
        return;
    }

    const originalImageEl = event.target.dataset.source;

    const basicLightboxImage = basicLightbox.create(`
    <img src="${originalImageEl}" width="800" height="600">
`);
    
    basicLightboxImage.show()
};

galleryRef.addEventListener('click', onImageClick);
