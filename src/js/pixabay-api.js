import axios from 'axios';

const API_KEY = '51374392-1d28dcca77fe358de5d7c7fc3';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page = 1) {
  const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
         page,
      },
    })
    return response.data;
}