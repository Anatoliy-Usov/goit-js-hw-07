import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')

function createGalery () {
   const markup = galleryItems.map(
    ({original, preview, description}) =>
        `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" /></a>`).join(''); 
    
    gallery.innerHTML = markup;
}
createGalery(galleryItems);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});