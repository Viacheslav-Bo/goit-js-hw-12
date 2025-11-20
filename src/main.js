import { getImagesByQuery } from './js/pixabay-api.js';
import {
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  makeMarkup,
} from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// ===================================================================
// БАЗА
const form = document.querySelector('.form');
const submitBtn = document.querySelector('button[type=submit]');
const input = document.querySelector('input[name="search-text"]');
const btnLoadMore = document.querySelector('.js-load-more');

// ===================================================================
// ПОЧАТКОВІ ЗНАЧЕННЯ
let searchWord;
let page = 1;
let total_pages = 0;
const perPage = 15;
submitBtn.disabled = true;

// ===================================================================
// ПОДІЯ інпут
input.addEventListener('input', evt => {
  submitBtn.disabled = evt.target.value.trim() === '';
});
// ===================================================================
// СКРОЛ
function scroll() {
  const lastItem = document.querySelector('.gallery .gallery-item:last-child');
  if (!lastItem) return;
  window.scrollBy({
    top: lastItem.getBoundingClientRect().height * 2,
    behavior: 'smooth',
  });
}
// ===================================================================
// ФУНКЦІЯ IZITOAST
function notification(message) {
  iziToast.show({
    message: message,
    position: 'topRight',
    backgroundColor: 'rgb(255, 215, 163)',
  });
}

// ===================================================================
// ПОДІЯ CLICK LOADMORE
btnLoadMore.addEventListener('click', async evt => {
  showLoader();
  try {
    page += 1;
    const res = await getImagesByQuery(searchWord, page);

    total_pages = Math.ceil(res.totalHits / perPage);
    btnLoadMore.textContent = `Page: ${page} of ${total_pages}`;

    makeMarkup(res);

    if (page >= total_pages) {
      hideLoadMoreButton();
      notification(
        `We're sorry, but you've reached the end of search results. Total images found: ${res.totalHits}.`
      );
    }

    scroll();
  } catch (error) {
    console.log('error', error);
  } finally {
    hideLoader();
  }
});

// ===================================================================
// ПОДІЯ сабміт
form.addEventListener('submit', async evt => {
  btnLoadMore.textContent = 'Load more';
  hideLoadMoreButton();
  showLoader();
  try {
    page = 1;
    evt.preventDefault();
    clearGallery();

    searchWord = document
      .querySelector('input[name="search-text"]')
      .value.trim();

    if (!searchWord) {
      return;
    }

    const res = await getImagesByQuery(searchWord, page);

    makeMarkup(res);

    if (res.totalHits > perPage) {
      showLoadMoreButton();
    } else if (res.hits.length < perPage && res.hits.length !== 0) {
      hideLoadMoreButton();
      notification(
        `We're sorry, but you've reached the end of search results. Total images found: ${res.totalHits}.`
      );
    }

    form.reset();
    submitBtn.disabled = true;
  } catch (error) {
    console.log(error);
    notification(`Oops! Something went wrong. Please try again later.`);
  } finally {
    hideLoader();
  }
});

// Відсутнє повідомлення про помилку, якщо не знайдено зображень: у коді не передбачено перевірку
// цієї ситуації та відображення помилки через iziToast. User Flow не містить повідомлення для користувача,
// якщо не повернуто результатів (res.hits.length === 0).

// Логіка скролінгу (scroll функція) імпортується та використовується напряму. Відповідно до специфікації,
// уся логіка скролінгу має бути реалізована у головному файлі; лише допоміжна логіка скролінгу дозволена
// поза межами головного файлу.

// Рендеринг галереї (makeMarkup) може бути неправильно реалізований щодо ініціалізації SimpleLightbox:
// якщо lightbox ініціалізується поза логікою рендерингу, це не відповідає вимозі повної інкапсуляції
// у модулі рендерингу (не можу перевірити за цим фрагментом, але позначаю як потенційну проблему,
// оскільки скролінг не імплементований локально).

// Обробка помилок не показує ніяких сповіщень користувачеві; помилки лише логуються у консоль.
// Немає зворотного зв’язку у разі невдачі запиту.

// ==================================================================================================
// при сабміті форми тобі необхідно зберігати те, що ввів користувач у глобальну змінну.
// Поки в галерії нема зображень, кнопка повинна бути прихована.
// Після того як у галереї з'являються зображення, кнопка з'являється в інтерфейсі під галереєю.
// При повторному сабміті форми кнопка спочатку ховається, а після отримання результатів
// запиту знову відображається за потреби.

// У відповіді бекенд повертає властивість totalHits — загальна кількість зображень,
// які відповідають критерію пошуку (для безкоштовного акаунту). Якщо користувач дійшов
// до кінця колекції, ховай кнопку Load more і виводь повідомлення з наступним текстом.
// We're sorry, but you've reached the end of search results.

// При кожному новому сабміті форми номер сторінки скидається до дефолтного 1 і результати
// попередніх запитів зникають

// Зверни увагу, що кінець колекції може бути і на 1й сторінці, і на подальших.

// Коли користувач отримує результати за максимально можливою сторінкою для конкретного пошукового
// слова, тобто вже немає чого підвантажувати, кнопка Load more зникає і з’являється відповідне
// повідомлення

// Перенеси індикатор завантаження під кнопку завантаження додаткових зображень.

// Після додавання нових елементів до списку зображень на екземплярі SimpleLightbox викликається
// метод refresh()

// логіку прокручування сторінки (scroll) робимо саме в цьому файлі.
// Зроби плавне прокручування сторінки після запиту і відтворення кожної наступної групи зображень.
// Для цього отримай у коді висоту однієї карточки галереї, використовуючи функцію
// getBoundingClientRect. Після цього використовуй метод window.scrollBy для прокрутки
// сторінки на дві висоти карточки галереї.
