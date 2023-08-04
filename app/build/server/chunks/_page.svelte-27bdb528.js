import { c as ct, u as ut, r as rt, o as ot, a as at } from './index-02d8ed20.js';
import { A } from './Carousel-cf94897c.js';
import { O } from './Header-d9be3441.js';
import { p } from './Loading-c0024efc.js';
import './CarouselItem-5da4848e.js';
import './PopperButton-4deb1702.js';
import './stores-1766503b.js';
import './index3-a50d3d2e.js';
import './Icon-04791803.js';
import './utils-c5816fb5.js';
import './service-b8fe1ba8.js';
import './url-764d83e3.js';

const b={code:"main.svelte-1wcuwlb{padding-bottom:4em!important}.viewport.svelte-1wcuwlb{contain:content;height:1.5em;margin-top:9rem;padding-block:2.5em}.loading.svelte-1wcuwlb,.viewport.svelte-1wcuwlb{bottom:0;position:absolute;will-change:visibility}.loading.svelte-1wcuwlb{display:flex;left:0;margin:0 auto;max-height:5em;opacity:0;padding-block:2.5rem;right:0;transition:opacity .5s cubic-bezier(.95,.05,.795,.035);z-index:100}.immersive-thumbnail.svelte-1wcuwlb{contain:layout style paint;left:0;max-width:100%;position:fixed;position:absolute;right:0;top:0;width:100%;z-index:-1}.gradient.svelte-1wcuwlb{background:linear-gradient(to bottom,rgba(0,0,0,.6),var(--theme));height:100%;inset:0;position:absolute;width:100%}.immer-img.svelte-1wcuwlb{border-radius:unset!important;contain:style;inset:0;max-width:100%;object-fit:cover;object-position:top;width:100%}",map:null},H=ct((a,r,l,$)=>{let{data:s}=r,{carousels:c,headerThumbnail:e,continuations:m,visitorData:y,path:w}=s;return r.data===void 0&&l.data&&s!==void 0&&l.data(s),a.css.add(b),`${a.head+=`<!-- HEAD_svelte-10xr24i_START -->${Array.isArray(e)&&e.length!==0&&e[0].url?`<link rel="preload" as="image"${ut("href",e[0].url,0)}>`:""}<!-- HEAD_svelte-10xr24i_END -->`,""}
${rt(O,"Header").$$render(a,{title:"Home",url:w,desc:"Listen to the hottest tracks from your favorite artists, and discover new playlists and mixes."},{},{})}

<div class="immersive-thumbnail svelte-1wcuwlb"><div class="gradient svelte-1wcuwlb" style="--theme: var(--base-bg);"></div>
	${e.length!==0?`<picture>${ot(e,(t,d)=>`${d===0?`<source${ut("media",`(max-width: ${t?.width}px)`,0)}${ut("srcset",t.url,0)}>`:`<source${ut("media",`(min-width: ${e[d-1].width+1}px) and (max-width: ${t?.width}px)`,0)}${ut("srcset",t.url,0)}>`}`)}
			<img${ut("src",e[0].url,0)}${ut("width",e[0].width,0)}${ut("height",e[0].height,0)} decoding="async" class="immer-img svelte-1wcuwlb" alt="large background header"></picture>`:""}</div>
<main data-testid="home" class="svelte-1wcuwlb">${ot(c,t=>`${rt(A,"Carousel").$$render(a,{items:t.items,header:t.header,type:"home",kind:t.header?.type,isBrowseEndpoint:!1},{},{})}`)}
	${Object.keys(m).length?`<div class="viewport svelte-1wcuwlb"></div>

		<div class="loading svelte-1wcuwlb"${at({opacity:0})}>${rt(p,"Loading").$$render(a,{},{},{})}</div>`:""}
</main>`});

export { H as default };
//# sourceMappingURL=_page.svelte-27bdb528.js.map
