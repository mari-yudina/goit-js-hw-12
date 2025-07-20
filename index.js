import{a as v,S as L,i as c}from"./assets/vendor-Cip_4kvj.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const b="51374392-1d28dcca77fe358de5d7c7fc3",S="https://pixabay.com/api/";function q(i){return v.get(S,{params:{key:b,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40}}).then(s=>s.data)}const p=document.querySelector(".gallery");let w=new L(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function $(i){const s=i.map(({webformatURL:a,largeImageURL:n,tags:e,likes:t,views:r,comments:f,downloads:g})=>{const y=["mackerel","domestic animal"],h=e.split(",").map(l=>l.trim()).filter(l=>!y.includes(l)).slice(0,3).join(", ");return`
        <li class="gallery-item">
          <a class="gallery-link" href="${n}">
            <img
              class="gallery-image"
              src="${a}"
              alt="${h}"
             
            />
          </a>
          <div class="image-info">
  <div class="info-item">
    <span class="label">Likes:</span>
    <span class="value">${t}</span>
  </div>
  <div class="info-item">
    <span class="label">Views:</span>
    <span class="value">${r}</span>
  </div>
  <div class="info-item">
    <span class="label">Comments:</span>
    <span class="value">${f}</span>
  </div>
  <div class="info-item">
    <span class="label">Downloads:</span>
    <span class="value">${g}</span>
  </div>
</div>
        </li>`}).join("");p.innerHTML=s,w.refresh()}function P(){p.innerHTML=""}const m=document.querySelector(".loader");function O(){m.classList.remove("hidden")}function u(){m.classList.add("hidden")}const o=document.querySelector(".form"),d=o.querySelector('input[name="search-text"]');o.addEventListener("submit",i=>{i.preventDefault();const s=d.value.trim();if(!s){c.warning({title:"Порожнє поле",message:"Введи ключове слово для пошуку зображень!",position:"topCenter",timeout:3e3}),d.focus();return}P(),O(),q(s).then(a=>{if(u(),a.hits.length===0){o.reset(),c.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",timeout:3e3});return}$(a.hits),o.reset()}).catch(a=>{u(),c.error({title:"Помилка",message:`Не вдалося отримати зображення: ${a.message}`,position:"topRight",timeout:3e3})})});
//# sourceMappingURL=index.js.map
