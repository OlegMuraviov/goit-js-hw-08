// Add imports above this line
import SimpleLigthBox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items'; // тут нужно расширение .js???

const galleryEl = document.querySelector('.gallery');
const imagesMarkup = createGridPicture(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', imagesMarkup);

function createGridPicture(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`,
    )
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250ms',
});
// Change code below this line

console.log(galleryItems);
console.log('newpush');
