import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');

galleryItems.forEach(image => {
    const imageItemEl = document.createElement('li');

    const imageLinkEL = document.createElement('a');
    imageLinkEL.classList.add('gallery__item');
    imageLinkEL.href = image.original;

    const imageEL = document.createElement('img');
    imageEL.classList.add('gallery__image');
    imageEL.src = image.preview;
    imageEL.alt = image.description;

    imageLinkEL.append(imageEL);
    imageItemEl.append(imageLinkEL)
    galleryRef.append(imageItemEl);
});

new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });


