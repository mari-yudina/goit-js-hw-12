import{a as B,S as P,i}from"./assets/vendor-Dy2ZTtfi.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const M="51374392-1d28dcca77fe358de5d7c7fc3",O="https://pixabay.com/api/";async function f(t,s=1){return(await B.get(O,{params:{key:M,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s}})).data}const y=document.querySelector(".gallery");let T=new P(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function g(t){const s=t.map(({webformatURL:r,largeImageURL:c,tags:e,likes:o,views:n,comments:S,downloads:q})=>{const $=["mackerel","domestic animal"],C=e.split(",").map(u=>u.trim()).filter(u=>!$.includes(u)).slice(0,3).join(", ");return`
        <li class="gallery-item">
          <a class="gallery-link" href="${c}">
            <img
              class="gallery-image"
              src="${r}"
              alt="${C}"
             
            />
          </a>
          <div class="image-info">
  <div class="info-item">
    <span class="label">Likes:</span>
    <span class="value">${o}</span>
  </div>
  <div class="info-item">
    <span class="label">Views:</span>
    <span class="value">${n}</span>
  </div>
  <div class="info-item">
    <span class="label">Comments:</span>
    <span class="value">${S}</span>
  </div>
  <div class="info-item">
    <span class="label">Downloads:</span>
    <span class="value">${q}</span>
  </div>
</div>
        </li>`}).join("");y.insertAdjacentHTML("beforeend",s),T.refresh()}function x(){y.innerHTML=""}const h=document.querySelector(".loader");function v(){h.classList.remove("hidden")}function d(){h.classList.add("hidden")}const L=document.querySelector(".load-more");function E(){L.classList.remove("hidden")}function b(){L.classList.add("hidden")}function H(){const t=document.querySelector(".gallery-item");if(!t)return;const{height:s}=t.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}const l=document.querySelector(".form"),p=l.querySelector('input[name="search-text"]'),A=document.querySelector(".load-more");let m=0,w="",a=1;l.addEventListener("submit",async t=>{t.preventDefault();const s=p.value.trim();if(!s){i.warning({title:"Порожнє поле",message:"Введи ключове слово для пошуку зображень!",position:"topCenter",timeout:3e3}),p.focus();return}w=s,a=1,x(),b(),v();try{const r=await f(s,a);if(d(),r.hits.length===0){l.reset(),i.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",timeout:3e3});return}m=r.totalHits,g(r.hits),l.reset(),m>a*15&&E()}catch(r){d(),i.error({message:`Не вдалося отримати зображення: ${r.message}`,position:"topCenter",timeout:3e3})}});A.addEventListener("click",async()=>{a+=1,v();try{const t=await f(w,a);d(),g(t.hits),setTimeout(()=>{H()},200),a*15>=m&&(b(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topCenter"}))}catch(t){d(),i.error({message:`Щось пішло не так при завантаженні наступних зображень: ${t.message}`,position:"topCenter",timeout:3e3})}});
//# sourceMappingURL=index.js.map
