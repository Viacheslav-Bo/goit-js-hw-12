import{a as x,S as k,i as f}from"./assets/vendor-CNqCr-V-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();async function v(o,e){return(await x.get("https://pixabay.com/api/",{params:{key:"53154523-05709ccc1510dd918919f2375",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}})).data}const c="/goit-js-hw-12/assets/icons-DsMv-Dn6.svg",b=document.querySelector(".loader"),m=document.querySelector(".gallery"),w=document.querySelector(".js-load-more");let C=new k(".gallery-link",{captionsData:"alt",captionDelay:250});function P(o){return o.map(function(e){const{webformatURL:a,largeImageURL:i,tags:t,likes:s,views:n,comments:q,downloads:M}=e;return`<li class="gallery-item">
            <div class="gallery-img-container">
            <a class="gallery-link" href="${i}">
              <img class="image" src="${a}" alt="${t}" data-source="${i}"  /></a>
            </div>
            <div class="desc-container">
              <ul class="desc-list">
              <li class="icons"><svg class="icon" width="24" height="24">
            <use href="${c}#icon-like"></use>
          </svg><span>${s}</span></li>
              <li class="icons"><svg class="icon" width="24" height="24">
            <use href="${c}#icon-views"></use>
          </svg><span>${n}</span></li>
              <li class="icons"><svg class="icon" width="24" height="24">
            <use href="${c}#icon-comments"></use>
          </svg><span>${q}</span></li>
              <li class="icons"><svg class="icon" width="24" height="24">
            <use href="${c}#icon-downloads"></use>
          </svg><span>${M}</span></li>
              </ul>
            </div>
          </li>`}).join("")}function L(o){if(!o.hits.length){f.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"rgb(255, 215, 163)"});return}const e=P(o.hits);m.insertAdjacentHTML("beforeend",e),C.refresh()}function B(){m.innerHTML=""}function $(){b.classList.add("is-shown")}function S(){b.classList.remove("is-shown")}function H(){w.classList.add("btn-is-shown")}function d(){w.classList.remove("btn-is-shown")}function O(){window.scrollBy({top:m.firstChild.getBoundingClientRect().height*2,behavior:"smooth"})}const y=document.querySelector(".form"),p=document.querySelector("button[type=submit]"),R=document.querySelector('input[name="search-text"]'),h=document.querySelector(".js-load-more");let l,r=1,u=0;const g=15;p.disabled=!0;R.addEventListener("input",o=>{p.disabled=o.target.value.trim()===""});h.addEventListener("click",async o=>{$();try{r+=1;const e=await v(l,r);u=Math.ceil(e.totalHits/g),h.textContent=`Page: ${r} of ${u}`,L(e),r>=u&&(d(),f.show({message:`We're sorry, but you've reached the end of search results. Total images found: ${e.totalHits}.`,position:"topRight",backgroundColor:"rgb(255, 215, 163)"})),O()}catch(e){console.log("error",e)}finally{S()}});y.addEventListener("submit",async o=>{h.textContent="Load more",d(),$();try{if(r=1,o.preventDefault(),B(),l=document.querySelector('input[name="search-text"]').value.trim(),!l)return;const e=await v(l,r);L(e),e.totalHits>g?H():e.hits.length<g&&e.hits.length!==0&&(d(),f.show({message:`We're sorry, but you've reached the end of search results. Total images found: ${e.totalHits}.`,position:"topRight",backgroundColor:"rgb(255, 215, 163)"})),y.reset(),p.disabled=!0}catch(e){console.log(e)}finally{S()}});
//# sourceMappingURL=index.js.map
