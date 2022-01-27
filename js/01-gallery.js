import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');

const createImageMarkup = (items) => {
    return items.map(({ original, preview, description }) => {
        return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`
    }).join('');
};

const imageMarkup = createImageMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', imageMarkup);

const onImageClick = (event) => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') { 
        return;
    }

    const originalImageEl = event.target.dataset.source;
    const altImageRef = event.target.alt;

    const basicLightboxImage = basicLightbox.create(`
    <img src="${originalImageEl}" alt="${altImageRef}" width="800" height="600">
`);
    
    basicLightboxImage.show();
};

galleryRef.addEventListener('click', onImageClick);
