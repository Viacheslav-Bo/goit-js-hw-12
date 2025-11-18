import axios from 'axios';

export async function getImagesByQuery(query, page) {
  const result = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '53154523-05709ccc1510dd918919f2375',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page: page,
    },
  });
  return result.data;
}

// У файлі pixabay-api.js зберігай функції для виконання HTTP-запитів:
// getImagesByQuery(query, page). Ця функція повинна приймати два параметри
// query (пошукове слово, яке є рядком) та page (номер сторінки, яка є числом),
//  здійснювати HTTP-запит і повертати значення властивості data з отриманої відповіді.
// Pixabay API підтримує пагінацію та надає параметри page і per_page.
// Зроби так, щоб у кожній відповіді при пошуку зображень приходило 15 об'єктів
// (за замовчуванням 20).
// Початкове значення параметра page повинно бути 1.
// З кожним наступним запитом його необхідно збільшити на 1.
// У разі пошуку за новим ключовим словом значення page потрібно повернути до початкового,
// оскільки буде пагінація для нової колекції зображень.
