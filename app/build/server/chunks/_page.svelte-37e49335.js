import { c as ct, r as rt, j, o as ot } from './index-02d8ed20.js';
import { A } from './Carousel-cf94897c.js';
import { g } from './GridItem.svelte_svelte_type_style_lang-7c30488b.js';
import './stores-1766503b.js';
import './utils-c5816fb5.js';
import { O } from './Header-d9be3441.js';
import { J } from './CarouselItem-5da4848e.js';
import './Icon-04791803.js';
import './index3-a50d3d2e.js';
import './url-764d83e3.js';
import './PopperButton-4deb1702.js';
import './service-b8fe1ba8.js';

const B=ct((t,o,s,$)=>{let{data:e}=o,m=e?.sections,l=e?.path,i=e?.header,n=e?.type;return o.data===void 0&&s.data&&e!==void 0&&s.data(e),`${rt(O,"Header").$$render(t,{title:i+" Playlists",url:l,desc:"Find the perfect playlist that'll match your mood, or fit any occasion."},{},{})}
<main><div class="header"><h1>${j(i)}</h1></div>
	${ot(m,a=>`${n==="grid"?`${rt(g,"Grid").$$render(t,{heading:a.title,items:a.section},{},{item:({item:d,index:p})=>`${rt(J,"CarouselItem").$$render(t,{index:p,aspectRatio:d.aspectRatio,item:d,kind:"isPlaylist",type:"home",isBrowseEndpoint:!0,slot:"item"},{},{})}`})}`:`
			${rt(A,"Carousel").$$render(t,{header:a.header,items:a.results,type:"home",isBrowseEndpoint:!1},{},{})}`}`)}
</main>`});

export { B as default };
//# sourceMappingURL=_page.svelte-37e49335.js.map
