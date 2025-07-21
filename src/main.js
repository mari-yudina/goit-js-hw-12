import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader,showLoadMoreButton,hideLoadMoreButton,scrollGallery } from './js/render-functions.js';


const form = document.querySelector('.form');
const input = form.querySelector('input[name="search-text"]');

const loadMoreBtn = document.querySelector('.load-more');
let totalHits = 0;
let currentQuery = '';
let currentPage = 1;


form.addEventListener('submit', async event => {
  event.preventDefault();

  const query = input.value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Порожнє поле',
      message: 'Введи ключове слово для пошуку зображень!',
      position: 'topCenter',
      timeout: 3000,
    });
    input.focus();
    return;
  }
   currentQuery = query;
  currentPage = 1;
 clearGallery();
 hideLoadMoreButton(); 
showLoader();
  try {
    const data = await getImagesByQuery(query, currentPage);
    hideLoader();

    if (data.hits.length === 0) {
      form.reset();

      iziToast.warning({   
        message: 'Sorry, there are no images matching your search query. Please try again!',
      position: 'topCenter',
      timeout: 3000,
    });
      return;
    }

    totalHits = data.totalHits;
    createGallery(data.hits);
    form.reset();

    if (totalHits > currentPage * 15) {
      showLoadMoreButton();
    }
  } catch (error) {
    hideLoader();
    iziToast.error({ 
      message: `Не вдалося отримати зображення: ${error.message}`,
    position: 'topCenter',
    timeout: 3000,
     });
  }
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    hideLoader();
    createGallery(data.hits);
    setTimeout(() => {
  scrollGallery();
}, 200);

    if (currentPage * 15 >= totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topCenter',
      });
    }
  } catch (error) {
    hideLoader();
    iziToast.error({ 
      message: `Щось пішло не так при завантаженні наступних зображень: ${error.message}`,
    position: 'topCenter',
    timeout: 3000,
     });
  }
});