import { c as ct, Z, r as rt, Y, y as y$1, o as ot, W as W$1, j, u as ut } from './index-02d8ed20.js';
import { k as k$1 } from './Icon-04791803.js';
import { W } from './Listing-e2741ab7.js';
import './stores-1766503b.js';
import './utils-c5816fb5.js';
import { _ as _$1 } from './Button-73d752a2.js';
import { p } from './Loading-c0024efc.js';
import './PopperButton-4deb1702.js';
import './url-764d83e3.js';
import './index3-a50d3d2e.js';

const _={code:".item.svelte-d73wqm.svelte-d73wqm{border-radius:.4rem;cursor:pointer;display:flex;flex-direction:column;flex-wrap:nowrap;gap:.3rem;justify-content:flex-start;padding:.5rem .4rem .4rem;position:relative;width:100%}.item.svelte-d73wqm .img.svelte-d73wqm{margin-bottom:.5em;width:100%}.item.svelte-d73wqm .img img.svelte-d73wqm{height:auto;width:100%}.item-title.svelte-d73wqm.svelte-d73wqm{display:inline;font-family:CommissionerVariable;font-size:1.1em;font-weight:500;letter-spacing:-.02em;padding:.3rem .1rem}.item-description.svelte-d73wqm.svelte-d73wqm{color:#999;font-weight:500}.item-text.svelte-d73wqm.svelte-d73wqm{display:flex;flex-direction:column}@media screen and (min-width:25em) and (max-width:37em){.item.svelte-d73wqm.svelte-d73wqm{max-width:14rem}}@media screen and (min-width:37em) and (max-width:48em){.item.svelte-d73wqm.svelte-d73wqm{max-width:14.75rem}}@media screen and (min-width:48em){.item.svelte-d73wqm.svelte-d73wqm{max-width:16rem}}",map:null},y=ct((t,s,a,m)=>{let{item:e}=s;return s.item===void 0&&a.item&&e!==void 0&&a.item(e),t.css.add(_),`<article class="item svelte-d73wqm"><div class="img svelte-d73wqm"><img${ut("width","200",0)}${ut("height","200",0)} loading="lazy"${ut("src",e.thumbnail,0)} alt="thumbnail" class="svelte-d73wqm"></div>
	<div class="item-text svelte-d73wqm"><div class="item-title svelte-d73wqm">${j(e.name)}</div>
		<div class="item-description svelte-d73wqm"><!-- HTML_TAG_START -->${e?.description?e.description+" &bull; ":""}<!-- HTML_TAG_END -->
			${e.items!==void 0?`${j(e?.items?.length===1?"1 Song":e?.items?.length===0?"No tracks":`${e?.items?.length} Songs`)}`:""}</div></div>
</article>`});const q={code:".grid.svelte-t505r3{--cols:14em;grid-gap:.5rem;display:grid;grid-template-columns:repeat(auto-fill,minmax(var(--cols),1fr));margin:0 auto}@media screen and (min-width:640px){.grid.svelte-t505r3{--cols:16rem}}.h2.svelte-t505r3{font-size:2.074rem;font-weight:700}.header.svelte-t505r3{display:flex;flex-direction:column}@media screen and (min-width:37em) and (max-width:48em){.grid.svelte-t505r3{grid-gap:1rem}}@media screen and (min-width:48em){.grid.svelte-t505r3{grid-gap:1.2rem}}",map:null},P=ct((t,s,a,m)=>{let{items:e=[]}=s,{heading:n=""}=s;return W$1(),s.items===void 0&&a.items&&e!==void 0&&a.items(e),s.heading===void 0&&a.heading&&n!==void 0&&a.heading(n),t.css.add(q),`<div class="grid-container"><div class="header svelte-t505r3"><span class="h2 svelte-t505r3">${j(n)}</span>
		${m.buttons?m.buttons({}):""}</div>
	<div class="grid svelte-t505r3">${e.length>0?`${ot(e,(d,l)=>`${rt(y,"GridItem").$$render(t,{item:d},{},{})}`)}`:""}
		${rt(y,"GridItem").$$render(t,{item:{thumbnail:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJpc29sYXRpb246aXNvbGF0ZSIgdmlld0JveD0iMCAwIDI1NiAyNTYiIHdpZHRoPSIyNTZwdCIgaGVpZ2h0PSIyNTZwdCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJwcmVmaXhfX2EiPjxwYXRoIGQ9Ik0wIDBoMjU2djI1NkgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjxnIGNsaXAtcGF0aD0idXJsKCNwcmVmaXhfX2EpIj48cGF0aCBmaWxsPSIjNDI0MjQyIiBkPSJNMCAwaDI1NnYyNTZIMHoiLz48cGF0aCBkPSJNMTI0LjA0IDkyaDcuOTJ2MzIuMDRIMTY0djcuOTJoLTMyLjA0VjE2NGgtNy45MnYtMzIuMDRIOTJ2LTcuOTJoMzIuMDRWOTJ6IiBmaWxsPSIjZmFmYWZhIi8+PC9nPjwvc3ZnPg==",name:"Add New Playlist"}},{},{})}</div>
</div>`});const G={code:"section.svelte-cy50be:not(:last-of-type){margin-bottom:4.5rem;margin-top:1rem}.list.svelte-cy50be{margin-bottom:1rem;min-height:15%}button.svelte-cy50be{gap:.25rem}header.svelte-cy50be{display:inline}.loader.svelte-cy50be,.loading.svelte-cy50be{position:relative}.loader.svelte-cy50be{height:3em}main.svelte-cy50be{min-height:100%}.loading.svelte-cy50be{display:grid;font-size:1.4em;left:50%;margin:0 auto;max-height:8em;max-width:32em;position:absolute;text-align:center;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}",map:null},k=ct((t,s,a,m)=>{Z("library",{isLibrary:!0});let e=n();async function n(){}return t.css.add(G),`



<main class="resp-content-width svelte-cy50be"><header class="svelte-cy50be"><h1>Your Library</h1>
		<button class="svelte-cy50be">${rt(k$1,"Icon").$$render(t,{name:"send",size:"1.1em"},{},{})}
			<span class="btn-text">Sync Your Data</span></button>
		<div style="margin-block-start: 0.5em;">${rt(_$1,"Button").$$render(t,{outlined:!0},{},{default:()=>`${rt(k$1,"Icon").$$render(t,{name:"upload",size:"1.1em"},{},{})}
				<span class="btn-text">Export Data</span>`})}
			${rt(_$1,"Button").$$render(t,{outlined:!0},{},{default:()=>`${rt(k$1,"Icon").$$render(t,{name:"download",size:"1.1em"},{},{})}
				<span class="btn-text">Import Data</span>`})}</div></header>

	${function(d){return Y(d)?(d.then(null,y$1),`
		<div class="loading svelte-cy50be"><div class="loader svelte-cy50be">${rt(p,"Loading").$$render(t,{size:"3em"},{},{})}</div>
			<p>Please wait...</p></div>
	`):function({favorites:l,playlists:p}){return `
		<section class="svelte-cy50be"><div class="header"><h2>Your Songs</h2>
				<a href="/library/songs">${l?.length>0?"<small>See All</small>":""}</a></div>
			<div class="list svelte-cy50be">${l?.length>0?`${ot(l,r=>`${rt(W,"Listing").$$render(t,{data:r},{},{})}`)}`:`<div class="container"><h4>Empty!</h4>
						<span class="subheading"><em>Add some songs to keep track of what you love!</em></span></div>`}</div></section>
		
		<section class="svelte-cy50be">${function(r){return Y(r)?(r.then(null,y$1),""):function(M){return `
				${rt(P,"Grid").$$render(t,{heading:"Your Playlists",items:p},{},{buttons:()=>`<button slot="buttons" class="outlined svelte-cy50be" style="margin-top:0.75em;">${rt(k$1,"Icon").$$render(t,{name:"x",size:"1.1em"},{},{})}<span class="btn-text">Delete All Playlists</span></button>`})}
			`}()}(p)}</section>
	`}(d)}(e)}
</main>`});

export { k as default };
//# sourceMappingURL=_page.svelte-13af18ac.js.map
