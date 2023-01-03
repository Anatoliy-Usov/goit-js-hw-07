import { galleryItems } from './gallery-items.js';
// Change code below this line

const allGallery = document.querySelector('.gallery')

function createGalery () {
   const markup = galleryItems.map(
    ({original, preview, description}) =>
        `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
    />
  </a>
</div>`,
   ).join(''); 
   allGallery.insertAdjacentHTML('beforeend', markup);
}

createGalery ()

allGallery.addEventListener('click', runFullImg);

function runFullImg (params) {
    params.preventDefault();
     
basicLightbox.create(`
		<img width="1280" height="855" src=${event.target.dataset.source}>
	`).show();

}

