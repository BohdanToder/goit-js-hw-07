import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');

const createImageMarkup = (items) => {
    return items.map(({ original, preview, description }) => {
        return `<li>
                    <a class="gallery__item" href="${original}">
                        <img class="gallery__image" src="${preview}" alt="${description}" />
                    </a>
                </li>`
    }).join('');
};

const imageMarkup = createImageMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', imageMarkup);

new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });


