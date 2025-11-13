import { getImagesByQuery } from './js/pixabay-api.js';
import {
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  makeMarkup,
} from './js/render-functions.js';

// ===================================================================
// БАЗА
const form = document.querySelector('.form');
const submitBtn = document.querySelector('button[type=submit]');
const input = document.querySelector('input[name="search-text"]');

submitBtn.disabled = true;

// ===================================================================
// ПОДІЯ інпут
input.addEventListener('input', evt => {
  submitBtn.disabled = evt.target.value.trim() === '';
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

  getImagesByQuery(searchWord)
    .then(makeMarkup)
    .catch(error => console.log(error));
  form.reset();
  submitBtn.disabled = true;
});

// при сабміті форми тобі необхідно зберігати те, що ввів користувач у глобальну змінну.
// Поки в галерії нема зображень, кнопка повинна бути прихована.
// Після того як у галереї з'являються зображення, кнопка з'являється в інтерфейсі під галереєю.
// При повторному сабміті форми кнопка спочатку ховається, а після отримання результатів
// запиту знову відображається за потреби.
// Перенеси індикатор завантаження під кнопку завантаження додаткових зображень.

// У відповіді бекенд повертає властивість totalHits — загальна кількість зображень,
// які відповідають критерію пошуку (для безкоштовного акаунту). Якщо користувач дійшов
// до кінця колекції, ховай кнопку Load more і виводь повідомлення з наступним текстом.
// We're sorry, but you've reached the end of search results.

// Зверни увагу, що кінець колекції може бути і на 1й сторінці, і на подальших.

// Після додавання нових елементів до списку зображень на екземплярі SimpleLightbox викликається
// метод refresh()
// Коли користувач отримує результати за максимально можливою сторінкою для конкретного пошукового
// слова, тобто вже немає чого підвантажувати, кнопка Load more зникає і з’являється відповідне
// повідомлення
// При кожному новому сабміті форми номер сторінки скидається до дефолтного 1 і результати
// попередніх запитів зникають

// логіку прокручування сторінки (scroll) робимо саме в цьому файлі.
// Зроби плавне прокручування сторінки після запиту і відтворення кожної наступної групи зображень.
// Для цього отримай у коді висоту однієї карточки галереї, використовуючи функцію
// getBoundingClientRect. Після цього використовуй метод window.scrollBy для прокрутки
// сторінки на дві висоти карточки галереї.
