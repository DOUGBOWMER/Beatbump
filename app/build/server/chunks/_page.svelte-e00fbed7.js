import { c as ct, j, r as rt } from './index-02d8ed20.js';
import { J } from './CarouselItem-5da4848e.js';
import { g } from './GridItem.svelte_svelte_type_style_lang-7c30488b.js';
import './stores-1766503b.js';
import './utils-c5816fb5.js';
import './PopperButton-4deb1702.js';
import './Icon-04791803.js';
import './service-b8fe1ba8.js';
import './url-764d83e3.js';
import './index3-a50d3d2e.js';

const _=ct((e,a,r,f)=>{let{data:t}=a;const{header:o,contents:n=[]}=t;return a.data===void 0&&r.data&&t!==void 0&&r.data(t),`<main><h1>${j(o?.artist)}</h1>

	${rt(g,"Grid").$$render(e,{heading:o?.type,items:n},{},{item:({item:i,index:d})=>`${rt(J,"CarouselItem").$$render(e,{isBrowseEndpoint:!0,kind:"trending",slot:"item",index:d,item:i,aspectRatio:i.aspectRatio},{},{})}`})}
</main>`});

export { _ as default };
//# sourceMappingURL=_page.svelte-e00fbed7.js.map
