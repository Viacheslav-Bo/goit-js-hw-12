import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

// ===================================================================
// БАЗА
const form = document.querySelector('.form');
const submitBtn = document.querySelector('button[type=submit');
const gallery = document.querySelector('.gallery');

let lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

// ===================================================================
// ПОДІЯ інпут
form.addEventListener('input', evt => {
  const searchWord = evt.target.value.trim();
  submitBtn.disabled = !searchWord;
  if (!searchWord) {
    iziToast.show({
      message: 'Please fill in the field to begin your search.',
      position: 'topRight',
      backgroundColor: 'rgb(255, 215, 163)',
    });
  }
});
// ===================================================================
// ПОДІЯ сабміт

form.addEventListener('submit', evt => {
  evt.preventDefault();
  showLoader();
  const searchWord = document
    .querySelector('input[name="search-text"]')
    .value.trim();
  if (!searchWord) {
    return;
  }

  clearGallery();

  function makeMarkup(response) {
    if (response.data.hits.length === 0) {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        backgroundColor: 'rgb(255, 215, 163)',
      });

      hideLoader();

      return;
    }

    const markup = createGallery(response.data.hits);
    gallery.insertAdjacentHTML('afterbegin', markup);

    lightbox.refresh();
    hideLoader();
  }

  getImagesByQuery(searchWord)
    .then(makeMarkup)

    .catch(err => {
      alert('Упс! Щось пішло не так');
      console.error(err);
    });

  evt.target.reset();
  submitBtn.disabled = true;
});
