import { c as ct, r as rt, o as ot, u as ut, j } from './index-02d8ed20.js';
import { g } from './GridItem.svelte_svelte_type_style_lang-7c30488b.js';
import './stores-1766503b.js';
import './utils-c5816fb5.js';
import { O } from './Header-d9be3441.js';
import './index3-a50d3d2e.js';
import './url-764d83e3.js';

const x={code:".box.svelte-rmt93w{align-items:center;background:#17151c;border-radius:.8rem;cursor:pointer;display:inline-flex;flex-direction:row;flex-wrap:nowrap;font-size:100%;height:3rem;justify-content:flex-start;margin-bottom:.8rem;max-width:20rem;min-width:12rem;padding:0 0 0 1rem;text-overflow:clip;white-space:nowrap;width:100%}",map:null},b=ct((t,a,o,w)=>{let{data:e}=a,l=e.path,d=e.response;return a.data===void 0&&o.data&&e!==void 0&&o.data(e),t.css.add(x),`${rt(O,"Header").$$render(t,{title:"Explore",url:l,desc:"Find the perfect playlist that'll match your mood, or fit any occasion."},{},{})}
<main>${ot(d,s=>`${rt(g,"Grid").$$render(t,{items:[...s.section],heading:s.title},{},{item:({item:r})=>`<a slot="item"${ut("style",`border-left: 0.4286rem solid ${r.color}`,0)} class="box svelte-rmt93w"${ut("href",`/explore/${r.endpoint.params}`,0)}>${j(r.text)}
			</a>`})}`)}
</main>`});

export { b as default };
//# sourceMappingURL=_page.svelte-7a5a1ca0.js.map
