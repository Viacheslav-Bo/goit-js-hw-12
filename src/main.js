import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import { clearGallery, showLoader, makeMarkup } from './js/render-functions.js';

// ===================================================================
// БАЗА
const form = document.querySelector('.form');
const submitBtn = document.querySelector('button[type=submit]');

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

  getImagesByQuery(searchWord)
    .then(makeMarkup)
    .catch(error => console.log(error));
});
// submitBtn.disabled = true;

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
