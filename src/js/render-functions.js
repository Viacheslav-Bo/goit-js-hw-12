const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');
// ===========================================================
// РЕНДЕР
export function createGallery(images) {
  return images
    .map(function (img) {
      const {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = img;
      return `<li class="gallery-item">
            <div class="gallery-img-container">
            <a class="gallery-link" href="${largeImageURL}">
              <img class="image" src="${webformatURL}" alt="${tags}" data-source="${largeImageURL}"  /></a>
            </div>
            <div class="desc-container">
              <ul class="desc-list">
              <li class="Likes">Likes: <span>${likes}</span></li>
              <li class="Views">Views: <span>${views}</span></li>
              <li class="Comments">Comments: <span>${comments}</span></li>
              <li class="Downloads">Downloads: <span>${downloads}</span></li>
              </ul>
            </div>
          </li>`;
    })
    .join('');
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('is-shown');
}

export function hideLoader() {
  loader.classList.remove('is-shown');
}
