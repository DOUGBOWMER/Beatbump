import { c as ct, A, u as ut, j, r as rt, o as ot } from './index-02d8ed20.js';
import { k } from './Icon-04791803.js';
import { W } from './Listing-e2741ab7.js';
import './utils-c5816fb5.js';
import { e } from './url-764d83e3.js';
import './PopperButton-4deb1702.js';
import './stores-1766503b.js';
import './index3-a50d3d2e.js';

const y={code:'.related.svelte-12jpei0{gap:.8rem}.body.svelte-12jpei0,.related.svelte-12jpei0{display:flex;flex-direction:column}.body.svelte-12jpei0{align-items:flex-start;align-self:center;gap:1.25rem;grid-area:body}button.svelte-12jpei0{grid-area:button}header.svelte-12jpei0{background-color:rgba(55,69,83,.19);border-color:#1b1b1b;border-radius:.8em;border-width:1px;display:grid;gap:1rem;grid-template-areas:"img body";grid-template-columns:.5fr 1fr;grid-template-rows:1fr;margin:1em;padding:.8em}@media screen and (min-width:640px){header.svelte-12jpei0{grid-template-areas:"img body" "img .";grid-template-rows:1fr 1fr}}.container.svelte-12jpei0{place-items:center}.image-container.svelte-12jpei0{grid-area:img;height:auto;max-height:20rem;max-width:100%}img.svelte-12jpei0{height:auto;max-height:inherit;max-width:inherit;object-fit:cover;width:inherit;width:100%}',map:null},R=ct((a,l,o,f)=>{let n,d;d=A(e,r=>n=r);let{data:s}=l;const{videoId:g,playlist:p,thumbnails:e$1=[],title:i,related:h}=s;return l.data===void 0&&o.data&&s!==void 0&&o.data(s),a.css.add(y),d(),`${a.head+=`<!-- HEAD_svelte-1jp0azj_START --><meta property="og:title"${ut("content",i,0)}><meta property="og:type" content="music.song"><meta property="og:description"${ut("content",`Listen to ${i} on AlphaTrack`,0)}><meta property="og:site_name" content="AlphaTrack"><meta property="og:image"${ut("content",e$1[e$1.length-1].url,0)}><meta property="og:url"${ut("content",`${n}/listen?id=${g}${p?`&list=${p}`:""}`,0)}>${a.title=`<title>${j(i)} | AlphaTrack</title>`,""}<!-- HEAD_svelte-1jp0azj_END -->`,""}
<main><header class="svelte-12jpei0"><div class="image-container svelte-12jpei0"><img${ut("src",e$1[e$1.length-1]?.url,0)}${ut("width",e$1[e$1.length-1]?.width,0)}${ut("height",e$1[e$1.length-1]?.height,0)}${ut("alt",`Thumbnail for ${i}`,0)} class="svelte-12jpei0"></div>
		<div class="body svelte-12jpei0"><span class="title h4">${j(i)}</span>
			<button class="svelte-12jpei0">${rt(k,"Icon").$$render(a,{name:"play",size:"1.25em",color:"black"},{},{})}<span class="text">Start Listening</span></button></div></header>
	<section class="related svelte-12jpei0"><span class="h2">Related Tracks</span>
		<div class="results">${ot(h?.results,r=>`${rt(W,"Listing").$$render(a,{data:r},{},{})}`)}</div></section>
	<div class="modal"><div class="modal-header"></div>
		<div class="container svelte-12jpei0"></div></div>
</main>`});

export { R as default };
//# sourceMappingURL=_page.svelte-d00f7a9f.js.map
