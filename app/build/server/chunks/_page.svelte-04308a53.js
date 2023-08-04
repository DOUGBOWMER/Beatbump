import { c as ct, A, r as rt, j as j$1, o as ot } from './index-02d8ed20.js';
import { O } from './Header-d9be3441.js';
import { g } from './GridItem.svelte_svelte_type_style_lang-7c30488b.js';
import { v } from './stores-1766503b.js';
import './utils-c5816fb5.js';
import { A as A$1 } from './Carousel-cf94897c.js';
import { J } from './CarouselItem-5da4848e.js';
import './index3-a50d3d2e.js';
import './url-764d83e3.js';
import './Icon-04791803.js';
import './PopperButton-4deb1702.js';
import './service-b8fe1ba8.js';

const C={code:".h1.svelte-rfksxd{font-size:2.88rem}.header.svelte-rfksxd{margin-bottom:.8rem}@media screen and (min-width:25em) and (max-width:37em){}@media screen and (min-width:37em) and (max-width:48em){}@media screen and (min-width:48em){}",map:null},j=ct((a,i,m,y)=>{let n,o;o=A(v,e=>n=e);let{data:t}=i,c=t.sections,l=t.header,s=t.title;return i.data===void 0&&m.data&&t!==void 0&&m.data(t),a.css.add(C),o(),`${rt(O,"Header").$$render(a,{title:s?s.replace(","," "):"",url:n.url.pathname,desc:"The latest in music"},{},{})}

<main>${s==="Charts"?`<div class="header svelte-rfksxd"><span class="h1 svelte-rfksxd">${j$1(l)}</span></div>`:""}
	${ot(c,(e,u)=>`${e?.type==="grid"?`${rt(g,"Grid").$$render(a,{heading:l,items:e.section},{},{item:({item:d,index:p})=>`${rt(J,"CarouselItem").$$render(a,{index:p,aspectRatio:d.aspectRatio,item:d,kind:"album",type:"home",isBrowseEndpoint:!0,slot:"item"},{},{})}`,default:({item:d,index:p})=>`
				
			`})}`:`${u===1?`${rt(A$1,"Carousel").$$render(a,{header:e.header,items:e.results,type:"artist",kind:"Fans might also like",isBrowseEndpoint:!0},{},{})}`:`${rt(A$1,"Carousel").$$render(a,{header:e.header,items:e.results,type:"home",isBrowseEndpoint:!1},{},{})}`}`}`)}
</main>`});

export { j as default };
//# sourceMappingURL=_page.svelte-04308a53.js.map
