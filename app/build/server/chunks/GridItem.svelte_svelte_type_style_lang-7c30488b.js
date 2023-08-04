import { c as ct, j, o as ot } from './index-02d8ed20.js';

const o={code:".grid.svelte-14qu840{grid-gap:.5em;--grid-column-count:2;--thumbnail-size:12.5rem;--column-width:calc(var(--thumbnail-size) + 0.75rem);--grid-columns:repeat(auto-fill,minmax(var(--column-width),1fr));display:grid;grid-template-columns:var(--grid-columns);justify-content:center;margin:0 auto}@media screen and (min-width:460px) and (max-width:619px){.grid.svelte-14qu840{--grid-column-count:3}}@media screen and (min-width:620px) and (max-width:1148px){.grid.svelte-14qu840{--grid-column-count:4}}@media screen and (min-width:1149px) and (max-width:1400px){.grid.svelte-14qu840{--grid-column-count:6}}@media screen and (min-width:1401px){.grid.svelte-14qu840{--thumbnail-size:13rem;--grid-column-count:7}}.grid-container.svelte-14qu840{-webkit-margin-before:0;-webkit-margin-after:1.5em;margin-block-end:1.5em;margin-block-start:0;margin-inline:auto}",map:null},g=ct((d,e,i,a)=>{let{items:t=[]}=e,{heading:n=""}=e;return e.items===void 0&&i.items&&t!==void 0&&i.items(t),e.heading===void 0&&i.heading&&n!==void 0&&i.heading(n),d.css.add(o),`<div class="grid-container svelte-14qu840"><div class="header resp-content-width"><span class="h2">${j(n)}</span></div>
	<div class="grid resp-content-width svelte-14qu840">${ot(t,(r,m)=>`${a.item?a.item({item:r,index:m}):""}`)}</div>
</div>`});

export { g };
//# sourceMappingURL=GridItem.svelte_svelte_type_style_lang-7c30488b.js.map
