import{a as b,S as w,i as h}from"./assets/vendor-CNqCr-V-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();async function L(o,t){const n=await b.get("https://pixabay.com/api/",{params:{key:"53154523-05709ccc1510dd918919f2375",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:t}});return console.log(n.data.hits),n.data}const a="/goit-js-hw-12/assets/icons-DsMv-Dn6.svg",m=document.querySelector(".loader"),f=document.querySelector(".gallery"),p=document.querySelector(".js-load-more");let $=new w(".gallery-link",{captionsData:"alt",captionDelay:250});function S(o){return o.map(function(t){const{webformatURL:r,largeImageURL:n,tags:e,likes:s,views:i,comments:y,downloads:v}=t;return`<li class="gallery-item">
            <div class="gallery-img-container">
            <a class="gallery-link" href="${n}">
              <img class="image" src="${r}" alt="${e}" data-source="${n}"  /></a>
            </div>
            <div class="desc-container">
              <ul class="desc-list">
              <li class="icons"><svg class="icon" width="24" height="24">
            <use href="${a}#icon-like"></use>
          </svg><span>${s}</span></li>
              <li class="icons"><svg class="icon" width="24" height="24">
            <use href="${a}#icon-views"></use>
          </svg><span>${i}</span></li>
              <li class="icons"><svg class="icon" width="24" height="24">
            <use href="${a}#icon-comments"></use>
          </svg><span>${y}</span></li>
              <li class="icons"><svg class="icon" width="24" height="24">
            <use href="${a}#icon-downloads"></use>
          </svg><span>${v}</span></li>
              </ul>
            </div>
          </li>`}).join("")}function q(o){if(o.length===0){h.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"rgb(255, 215, 163)"});return}const t=S(o);f.insertAdjacentHTML("afterbegin",t),$.refresh()}function P(){f.innerHTML=""}function M(){m.classList.add("is-shown")}function k(){m.classList.remove("is-shown")}function x(){p.classList.add("btn-is-shown")}function l(){p.classList.remove("btn-is-shown")}const u=document.querySelector(".form"),c=document.querySelector("button[type=submit]"),O=document.querySelector('input[name="search-text"]');document.querySelector(".js-load-more");let d=[],j=1;const g=15;c.disabled=!0;O.addEventListener("input",o=>{c.disabled=o.target.value.trim()===""});u.addEventListener("submit",async o=>{try{o.preventDefault(),l(),P();const t=document.querySelector('input[name="search-text"]').value.trim();if(d.push(t),console.log(d),!t)return;M();const r=await L(t,j);q(r.hits),k(),r.hits.length>g?x():r.hits.length<g&&r.hits.length!==0&&(l(),h.show({message:`We're sorry, but you've reached the end of search results. Total images found: ${r.totalHits}.`,position:"topRight",backgroundColor:"rgb(255, 215, 163)"})),u.reset(),c.disabled=!0}catch(t){console.log(t)}});
//# sourceMappingURL=index.js.map
