import{a as $,S,i as m}from"./assets/vendor-CNqCr-V-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();async function f(o,e){const r=await $.get("https://pixabay.com/api/",{params:{key:"53154523-05709ccc1510dd918919f2375",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:e}});return console.log(r.data.hits),r.data}const c="/goit-js-hw-12/assets/icons-DsMv-Dn6.svg",p=document.querySelector(".loader"),y=document.querySelector(".gallery"),v=document.querySelector(".js-load-more");let q=new S(".gallery-link",{captionsData:"alt",captionDelay:250});function b(o){return o.map(function(e){const{webformatURL:r,largeImageURL:n,tags:t,likes:s,views:i,comments:L,downloads:w}=e;return`<li class="gallery-item">
            <div class="gallery-img-container">
            <a class="gallery-link" href="${n}">
              <img class="image" src="${r}" alt="${t}" data-source="${n}"  /></a>
            </div>
            <div class="desc-container">
              <ul class="desc-list">
              <li class="icons"><svg class="icon" width="24" height="24">
            <use href="${c}#icon-like"></use>
          </svg><span>${s}</span></li>
              <li class="icons"><svg class="icon" width="24" height="24">
            <use href="${c}#icon-views"></use>
          </svg><span>${i}</span></li>
              <li class="icons"><svg class="icon" width="24" height="24">
            <use href="${c}#icon-comments"></use>
          </svg><span>${L}</span></li>
              <li class="icons"><svg class="icon" width="24" height="24">
            <use href="${c}#icon-downloads"></use>
          </svg><span>${w}</span></li>
              </ul>
            </div>
          </li>`}).join("")}function M(o){if(o.length===0){m.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"rgb(255, 215, 163)"});return}const e=b(o);y.insertAdjacentHTML("beforeend",e),q.refresh()}function k(){y.innerHTML=""}function j(){p.classList.add("is-shown")}function x(){p.classList.remove("is-shown")}function O(){v.classList.add("btn-is-shown")}function d(){v.classList.remove("btn-is-shown")}const g=document.querySelector(".form"),u=document.querySelector("button[type=submit]"),P=document.querySelector('input[name="search-text"]'),D=document.querySelector(".js-load-more");let a=1;const h=15,H=document.querySelector(".gallery");let l;u.disabled=!0;P.addEventListener("input",o=>{u.disabled=o.target.value.trim()===""});D.addEventListener("click",async o=>{a+=1;const e=await f(l,a),r=b(e.hits);H.insertAdjacentHTML("beforeend",r)});g.addEventListener("submit",async o=>{try{if(a=1,o.preventDefault(),d(),k(),l=document.querySelector('input[name="search-text"]').value.trim(),!l)return;j();const e=await f(l,a);console.log("res",e,a),M(e.hits),x(),e.totalHits>h?O():e.hits.length<h&&e.hits.length!==0&&(d(),m.show({message:`We're sorry, but you've reached the end of search results. Total images found: ${e.totalHits}.`,position:"topRight",backgroundColor:"rgb(255, 215, 163)"})),g.reset(),u.disabled=!0}catch(e){console.log(e)}});
//# sourceMappingURL=index.js.map
