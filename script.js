(() => {
"use strict";
const data = window.STILL_US_DATA || {chapters:[],keepsakes:[],letters:[]};
const $ = s => document.querySelector(s);
const esc = v => String(v ?? "").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const img = (src,alt,cls="") => src ? `<img class="${cls}" src="${esc(src)}" alt="${esc(alt)}" onerror="this.remove()">` : "";
function render(){
 const last=[...data.chapters].reverse().find(c=>c.published)||data.chapters[0];
 if(last) $("#featuredCard").innerHTML=`<div class="featured-visual">${img(last.photo,last.title)}${last.photo?"":'<div class="visual-placeholder">a memory<br>to keep</div>'}</div><div class="featured-copy"><span class="date">${esc(last.month)} ${last.year} · CHAPTER ${esc(last.number)}</span><h3>${esc(last.title)}</h3><p>${esc(last.intro)}</p><button class="text-button" data-chapter="${esc(last.number)}">read this chapter ↗</button></div>`;
 $("#monthGrid").innerHTML=data.chapters.map(c=>`<button class="month-card" data-chapter="${esc(c.number)}"><span class="month-number">${esc(c.number)} / ${esc(c.year)}</span><h3>${esc(c.month)}</h3><p>${esc(c.subtitle)}</p><span class="card-bottom"><span><i class="dot ${c.published?"":"draft"}"></i>${c.published?"published":"draft"}</span><span>read entry ↗</span></span></button>`).join("");
 $("#keepsakeGrid").innerHTML=data.keepsakes.length?data.keepsakes.map(k=>`<article class="keepsake-card"><div class="keepsake-image">${img(k.image,k.title)}${k.image?"":`<span>${esc(k.label||"a memory")}</span>`}</div><span class="date">${esc(k.date)}</span><h3>${esc(k.title)}</h3><p>${esc(k.description)}</p></article>`).join(""):'<p class="empty">Your keepsakes will find their place here.</p>';
 $("#letterList").innerHTML=data.letters.length?data.letters.map((l,i)=>`<button class="letter-row" data-letter="${i}"><span><h3>${esc(l.title)}</h3><p>${esc(l.date)}</p></span><span class="arrow">↗</span></button>`).join(""):'<p class="empty">Add a letter in chapters.js.</p>';
}
function openChapter(n){
 const c=data.chapters.find(c=>String(c.number)===String(n)); if(!c)return;
 $("#chapterContent").innerHTML=`<article class="chapter-body"><span class="chapter-kicker">${esc(c.month)} ${c.year} · CHAPTER ${esc(c.number)}</span><h2>${esc(c.title)}</h2><p class="chapter-subtitle">${esc(c.subtitle)}</p><p class="chapter-lead">${esc(c.intro)}</p>${img(c.photo,c.photoCaption||c.title,"chapter-photo")}<p class="date">${esc(c.photoCaption||"")}</p><h3>little moments</h3><ul>${(c.moments||[]).map(m=>`<li>${esc(m)}</li>`).join("")}</ul><h3>what this month taught me</h3><p>${esc(c.lesson)}</p><h3>the harder parts</h3><p>${esc(c.hardPart)}</p><h3>what I hope we keep learning</h3><p>${esc(c.repair)}</p><h3>a letter for you</h3><div class="chapter-letter">${esc(c.letter)}</div></article>`;
 $("#chapterDialog").showModal();
}
function openLetter(i){const l=data.letters[i];if(!l)return;$("#letterContent").innerHTML=`<span class="date">${esc(l.date)}</span><h2>${esc(l.title)}</h2><div class="letter-text">${esc(l.body)}</div>`;$("#letterDialog").showModal();}
document.addEventListener("click",e=>{const c=e.target.closest("[data-chapter]");if(c)openChapter(c.dataset.chapter);const l=e.target.closest("[data-letter]");if(l)openLetter(Number(l.dataset.letter));});
$("#dialogClose").addEventListener("click",()=>$("#chapterDialog").close());
$("#letterDialogClose").addEventListener("click",()=>$("#letterDialog").close());
["chapterDialog","letterDialog"].forEach(id=>$("#"+id).addEventListener("click",e=>{if(e.target===e.currentTarget)e.currentTarget.close();}));
const nav=$("#mainNav"),toggle=$("#menuToggle");
toggle.addEventListener("click",()=>{nav.classList.toggle("open");toggle.textContent=nav.classList.contains("open")?"×":"☰";});
nav.addEventListener("click",e=>{if(e.target.closest("a")){nav.classList.remove("open");toggle.textContent="☰";}});
render();
})();