import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');


let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
 
});


export function createGallery(images) {
  const markup = images
    .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
      const unwantedTags = ["mackerel", "domestic animal"];
      const filteredTags = tags
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => !unwantedTags.includes(tag))
        .slice(0, 3)
        .join(', ');
        return `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img
              class="gallery-image"
              src="${webformatURL}"
              alt="${filteredTags}"
             
            />
          </a>
          <div class="image-info">
  <div class="info-item">
    <span class="label">Likes:</span>
    <span class="value">${likes}</span>
  </div>
  <div class="info-item">
    <span class="label">Views:</span>
    <span class="value">${views}</span>
  </div>
  <div class="info-item">
    <span class="label">Comments:</span>
    <span class="value">${comments}</span>
  </div>
  <div class="info-item">
    <span class="label">Downloads:</span>
    <span class="value">${downloads}</span>
  </div>
</div>
        </li>`;
    })
    .join('');

  galleryContainer.innerHTML = markup;
  lightbox.refresh(); 
}


export function clearGallery() {
  galleryContainer.innerHTML = '';
}

const loader = document.querySelector('.loader');

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}
