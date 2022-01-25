import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

galleryItems.forEach(image => {
    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('gallery__item');

    const imageLinkEL = document.createElement('a');
    imageLinkEL.classList.add('gallery__link');
    imageLinkEL.href = image.original;

    const imageEL = document.createElement('img');
    imageEL.classList.add('gallery__image');
    imageEL.src = image.preview;
    imageEL.dataset.source = image.original;
    imageEL.alt = image.description;

    imageLinkEL.append(imageEL);
    imageWrapper.append(imageLinkEL);
    galleryEl.append(imageWrapper);
});

const test = (event) => {
    event.preventDefault();

    let test1 = event.target.dataset.source;

    // console.log(test1);
    // console.log(event.target);
};

galleryEl.addEventListener('click', test);
