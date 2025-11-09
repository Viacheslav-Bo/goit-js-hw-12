import{a as g,S as p,i as l}from"./assets/vendor-wBH-uFy0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function y(o){return g.get("https://pixabay.com/api/",{params:{key:"53154523-05709ccc1510dd918919f2375",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}})}const c=document.querySelector(".loader"),h=document.querySelector(".gallery");function b(o){return o.map(function(r){const{webformatURL:a,largeImageURL:s,tags:e,likes:t,views:i,comments:m,downloads:f}=r;return`<li class="gallery-item">
            <div class="gallery-img-container">
            <a class="gallery-link" href="${s}">
              <img class="image" src="${a}" alt="${e}" data-source="${s}"  /></a>
            </div>
            <div class="desc-container">
              <ul class="desc-list">
              <li class="Likes">Likes: <span>${t}</span></li>
              <li class="Views">Views: <span>${i}</span></li>
              <li class="Comments">Comments: <span>${m}</span></li>
              <li class="Downloads">Downloads: <span>${f}</span></li>
              </ul>
            </div>
          </li>`}).join("")}function L(){h.innerHTML=""}function w(){c.classList.add("is-shown")}function n(){c.classList.remove("is-shown")}const u=document.querySelector(".form"),d=document.querySelector("button[type=submit"),v=document.querySelector(".gallery");let S=new p(".gallery-link",{captionsData:"alt",captionDelay:250});u.addEventListener("input",o=>{const r=o.target.value.trim();d.disabled=!r,r||l.show({message:"Please fill in the field to begin your search.",position:"topRight",backgroundColor:"rgb(255, 215, 163)"})});u.addEventListener("submit",o=>{o.preventDefault(),w();const r=document.querySelector('input[name="search-text"]').value.trim();if(!r)return;L();function a(s){if(s.data.hits.length===0){l.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"rgb(255, 215, 163)"}),n();return}const e=b(s.data.hits);v.insertAdjacentHTML("afterbegin",e),S.refresh(),n()}y(r).then(a).catch(s=>{alert("Упс! Щось пішло не так"),console.error(s)}),o.target.reset(),d.disabled=!0});
//# sourceMappingURL=index.js.map
