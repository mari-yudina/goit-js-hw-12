import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';


const form = document.querySelector('.form');
const input = form.querySelector('input[name="search-text"]');


form.addEventListener('submit', event => {
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
 clearGallery(); 
showLoader();
 getImagesByQuery(query)
 .then(data => {
  hideLoader();
  if(data.hits.length === 0){
    form.reset();
    
    iziToast.warning({
      message: 'Sorry, there are no images matching your search query. Please try again!',
      position: 'topCenter',
      timeout: 3000,
    });
   

    return; 
  }
  
  createGallery(data.hits);
  form.reset();
 
 
})
.catch(error => {
  hideLoader();
  
      iziToast.error({
        title: 'Помилка',
        message: `Не вдалося отримати зображення: ${error.message}`,
        position: 'topRight',
        timeout: 3000,
      });
    });
});