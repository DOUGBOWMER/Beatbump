import { c as ct, Z, o as ot, u as ut, j, r as rt } from './index-02d8ed20.js';
import { W } from './Listing-e2741ab7.js';
import { o } from './service-b8fe1ba8.js';
import './utils-c5816fb5.js';
import './index3-a50d3d2e.js';
import './PopperButton-4deb1702.js';
import './stores-1766503b.js';
import './Icon-04791803.js';
import './url-764d83e3.js';

const d={code:".filter.svelte-qsy2vp.svelte-qsy2vp{display:inline-flex;flex-direction:row;margin-bottom:.75em}.ctx-item.svelte-qsy2vp.svelte-qsy2vp{display:flex}.ctx-item.svelte-qsy2vp label.svelte-qsy2vp{margin-right:.75em;white-space:pre}",map:null},q=ct((a,y,$,g)=>{let s=[];Z({},"library");let i=[{label:"Unsorted",params:"nosort",action:async()=>{s=await o.sendMessage("get","favorites");}},{label:"A-Z",params:"az",action:()=>{s=[...s.sort((e,t)=>e.title.localeCompare(t.title))];}},{label:"Z-A",params:"za",action:()=>{s=[...s.sort((e,t)=>t.title.localeCompare(e.title))];}}];return a.css.add(d),`<main><h1>Your Songs</h1>
	<section><div class="filter svelte-qsy2vp"><div class="ctx-item svelte-qsy2vp"><label for="select" class="svelte-qsy2vp">Sort</label>
				<div class="select"><select id="select">${ot(i,(e,t)=>`<option${ut("value",t,0)}>${j(e.label)}</option>`)}</select></div></div></div>
		<section>${ot(s,e=>`${rt(W,"Listing").$$render(a,{data:e},{},{})}`)}</section></section>
</main>`});

export { q as default };
//# sourceMappingURL=_page.svelte-754cd9a1.js.map
