import { c as ct, r as rt, o as ot, j } from './index-02d8ed20.js';
import { A } from './Carousel-cf94897c.js';
import { O } from './Header-d9be3441.js';
import './CarouselItem-5da4848e.js';
import './PopperButton-4deb1702.js';
import './stores-1766503b.js';
import './index3-a50d3d2e.js';
import './Icon-04791803.js';
import './utils-c5816fb5.js';
import './service-b8fe1ba8.js';
import './url-764d83e3.js';

const f=e=>e.results[0].color!==void 0,w=e=>!!e.results[0].title;const u={code:"a.svelte-1mpet7w small.svelte-1mpet7w{color:#afafaf;font-size:.95rem;font-variant-caps:all-petite-caps;font-weight:700;letter-spacing:.05rem;transition:color 75ms ease-in}a.svelte-1mpet7w small.svelte-1mpet7w:hover{color:#fcfcfc;-webkit-text-decoration:underline .001rem solid;text-decoration:underline .001rem solid;text-underline-offset:.001rem}.breakout.svelte-1mpet7w.svelte-1mpet7w{-webkit-overflow-scrolling:touch;border-radius:.8rem;margin-bottom:2rem;position:relative}@media screen and (min-width:960px){.breakout.svelte-1mpet7w.svelte-1mpet7w{margin-bottom:3rem}}.box.svelte-1mpet7w.svelte-1mpet7w{contain:content;display:flex;flex-direction:column;overflow-x:auto;padding:.8rem;width:100%}.scroll.svelte-1mpet7w.svelte-1mpet7w{display:flex;flex-flow:column wrap;gap:.8rem;justify-content:space-around;max-height:calc(-1px + 23em)}.item-box.svelte-1mpet7w.svelte-1mpet7w{align-items:center;background:#201e27;border-left:.5rem solid var(--color,red);border-radius:.3em;contain:content;cursor:pointer;display:flex;flex-direction:row;flex-wrap:nowrap;font-family:CommissionerVariable,sans-serif;height:3.25em;justify-content:flex-start;padding:0 0 0 .8rem;text-overflow:clip;width:13em}",map:null},b=ct((e,l,o,x)=>{let{data:a}=l;const{carouselItems:d,page:m}=a;return l.data===void 0&&o.data&&a!==void 0&&o.data(a),e.css.add(u),`${rt(O,"Header").$$render(e,{title:"Trending",url:m,desc:"The latest trending songs and releases"},{},{})}
<main data-testid="trending">${ot(d,t=>`${w(t)?`${rt(A,"Carousel").$$render(e,{isBrowseEndpoint:!1,header:t.header,items:t.results,type:"trending",kind:"isPlaylist"},{},{})}`:`${f(t)?`<div class="breakout svelte-1mpet7w"><div class="header"><span class="h2">${j(t.header.title)}</span>
					<a class="link svelte-1mpet7w" href="/explore"><small class="svelte-1mpet7w">See All</small></a></div>
				<div class="box svelte-1mpet7w"><div class="scroll svelte-1mpet7w">${ot(t.results,r=>`<a style="${"--color: #"+j(r?.color,!0)}" class="item-box svelte-1mpet7w" href="${"/explore/"+j(r.endpoint.params,!0)}">${j(r.text)}</a>`)}
					</div></div>
			</div>`:""}`}`)}
</main>`});

export { b as default };
//# sourceMappingURL=_page.svelte-698c4728.js.map
