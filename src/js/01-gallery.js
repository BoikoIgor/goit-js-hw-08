// Add imports above this line
import { galleryItems } from './gallery-items';
// Додаємо імпорти бібліотеки SimpleLightbox
import SimpleLightbox from 'simplelightbox';
// Додатково імпортуємо стилі бібліотеки
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

import { galleryItems } from './gallery-items.js';
// Change code below this line
// Вибираємо потрібне місце для нової розмітки
const galleryContainer = document.querySelector('.gallery');
// Створюємо нову розмітку галареї за шаблоном задачі
const galeryMarkupString = galleryItems
  .map(
    item =>
      `<div class="gallery__item"><a class="gallery__link" href="${item.original}"><img class="gallery__image lazyload" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/></a></div>`
  )
  .join('');
// Додаємо розмітку в ДОМ
galleryContainer.insertAdjacentHTML('beforeend', galeryMarkupString);

// Використовуємо SimpleLightbox
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
