import{a as m,S as f,i as h}from"./assets/vendor-MgecxatS.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function p(r){return m.get("https://pixabay.com/api/",{params:{key:"53154523-05709ccc1510dd918919f2375",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(s=>s.data.hits)}const l=document.querySelector(".loader"),u=document.querySelector(".gallery");let y=new f(".gallery-link",{captionsData:"alt",captionDelay:250});function v(r){return r.map(function(s){const{webformatURL:i,largeImageURL:o,tags:e,likes:t,views:n,comments:d,downloads:g}=s;return`<li class="gallery-item">
            <div class="gallery-img-container">
            <a class="gallery-link" href="${o}">
              <img class="image" src="${i}" alt="${e}" data-source="${o}"  /></a>
            </div>
            <div class="desc-container">
              <ul class="desc-list">
              <li class="icons"><svg class="icon" width="24" height="24">
            <use href="/icons.svg#icon-like"></use>
          </svg><span>${t}</span></li>
              <li class="icons"><svg class="icon" width="24" height="24">
            <use href="/icons.svg#icon-views"></use>
          </svg><span>${n}</span></li>
              <li class="icons"><svg class="icon" width="24" height="24">
            <use href="/icons.svg#icon-comments"></use>
          </svg><span>${d}</span></li>
              <li class="icons"><svg class="icon" width="24" height="24">
            <use href="/icons.svg#icon-downloads"></use>
          </svg><span>${g}</span></li>
              </ul>
            </div>
          </li>`}).join("")}function b(r){if(r.length===0){h.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"rgb(255, 215, 163)"});return}const s=v(r);u.insertAdjacentHTML("afterbegin",s),S(),y.refresh()}function L(){u.innerHTML=""}function w(){l.classList.add("is-shown")}function S(){l.classList.remove("is-shown")}const c=document.querySelector(".form"),a=document.querySelector("button[type=submit]"),q=document.querySelector('input[name="search-text"]');a.disabled=!0;q.addEventListener("input",r=>{a.disabled=r.target.value.trim()===""});c.addEventListener("submit",r=>{r.preventDefault(),w();const s=document.querySelector('input[name="search-text"]').value.trim();s&&(L(),p(s).then(b).catch(i=>console.log(i)),c.reset(),a.disabled=!0)});
//# sourceMappingURL=index.js.map
