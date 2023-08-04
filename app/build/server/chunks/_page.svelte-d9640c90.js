import { c as ct, A, r as rt, u as ut, o as ot, j } from './index-02d8ed20.js';
import { A as A$1 } from './Carousel-cf94897c.js';
import { p as pe, m as me, g as ge, q as fe } from './utils-c5816fb5.js';
import { k } from './Icon-04791803.js';
import { p } from './Description-0a45c13e.js';
import { v } from './stores-1766503b.js';
import { u as ue } from './ListItem-17989d74.js';
import { O } from './Header-d9be3441.js';
import { c } from './contexts-b32c3976.js';
import './CarouselItem-5da4848e.js';
import './PopperButton-4deb1702.js';
import './service-b8fe1ba8.js';
import './url-764d83e3.js';
import './index3-a50d3d2e.js';

const P={code:'.row.svelte-cymg3g.svelte-cymg3g{align-items:center!important;flex-direction:row!important;gap:1.2rem}.artist-header.svelte-cymg3g.svelte-cymg3g,.artist-thumbnail.svelte-cymg3g.svelte-cymg3g{display:block;position:relative}.artist-thumbnail.svelte-cymg3g.svelte-cymg3g{background-color:rgba(0,0,0,.1);height:100%;overflow:hidden;padding-top:33vh;transition:background-color .8s cubic-bezier(.19,0,.7,1)}@media only screen and (min-width:1080px) and (max-width:1600px){.artist-thumbnail.svelte-cymg3g.svelte-cymg3g{padding-top:30vh}}@media only screen and (min-width:1601px){.artist-thumbnail.svelte-cymg3g.svelte-cymg3g{padding-top:33vh}}.artist-thumbnail.svelte-cymg3g.svelte-cymg3g:before{content:""}.artist-thumbnail.svelte-cymg3g.svelte-cymg3g:before,.gradient.svelte-cymg3g.svelte-cymg3g{bottom:0;left:0;position:absolute;right:0;top:0}.gradient.svelte-cymg3g.svelte-cymg3g{height:inherit;height:100%;width:100%;z-index:0}.gradient.svelte-cymg3g.svelte-cymg3g:before{content:"";inset:0;z-index:-5}.gradient.svelte-cymg3g.svelte-cymg3g:before,.header-thumbnail.svelte-cymg3g.svelte-cymg3g{height:100%;position:absolute;width:100%}.header-thumbnail.svelte-cymg3g.svelte-cymg3g{border-radius:0;max-height:100%;object-fit:cover;object-position:top;overflow:hidden;top:0;transition:opacity .75s linear;z-index:-1}.artist-content.svelte-cymg3g.svelte-cymg3g{margin:0 auto;max-width:calc(100vw - 2.25rem);padding:1em 0 5vh;padding-bottom:0!important;position:relative;z-index:1}@media only screen and (min-width:640px) and (max-width:1079.9px){.artist-content.svelte-cymg3g.svelte-cymg3g{padding:3vh 1rem .8rem 2rem}}@media only screen and (min-width:1080px) and (max-width:1366px){.artist-content.svelte-cymg3g.svelte-cymg3g{padding:4vh 2rem .8rem}}@media only screen and (min-width:1367px) and (max-width:1600px){.artist-content.svelte-cymg3g.svelte-cymg3g{padding:5vh 2rem 0}}@media only screen and (min-width:1601px){.artist-content.svelte-cymg3g.svelte-cymg3g{padding:3vh 2rem 0}}.artist-content.svelte-cymg3g .content-wrapper.svelte-cymg3g{align-items:flex-start;display:inline-flex;flex-direction:column;flex-wrap:wrap;width:80%}.artist-content.svelte-cymg3g .content-wrapper .content-thumbnail.svelte-cymg3g{max-height:6rem;max-width:6rem}.artist-content.svelte-cymg3g .content-wrapper .name.svelte-cymg3g{display:inline-block;font-family:CommissionerVariable,sans-serif;font-size:2.5rem;font-weight:700;letter-spacing:-.02em;padding-bottom:1rem;text-shadow:rgba(0,0,0,.171) .2rem -.12rem .5rem}@media screen and (min-width:642px) and (max-width:839px){.artist-content.svelte-cymg3g .content-wrapper .name.svelte-cymg3g{font-size:2rem}}@media screen and (min-width:840px) and (max-width:960px){.artist-content.svelte-cymg3g .content-wrapper .name.svelte-cymg3g{font-size:3.5rem;inline-size:100%;overflow-wrap:break-word}}@media screen and (min-width:961px){.artist-content.svelte-cymg3g .content-wrapper .name.svelte-cymg3g{font-size:4.5rem}}@media only screen and (min-width:1080px) and (max-width:1366px){.artist-content.svelte-cymg3g.svelte-cymg3g{max-width:calc(100vw - 14.5625rem)}}@media only screen and (min-width:1367px) and (max-width:1600px){.artist-content.svelte-cymg3g.svelte-cymg3g{max-width:82rem}}@media only screen and (min-width:1601px){.artist-content.svelte-cymg3g.svelte-cymg3g{max-width:87.5rem}}',map:null},L=ct((n,d,m,z)=>{let o,g,c,p$1;o=A(me,e=>e),g=A(ge,e=>e),p$1=A(fe,e=>c=e);let{header:t}=d,{thumbnail:r=[]}=d,{description:a=""}=d,y,w=0,h=0,$;return d.header===void 0&&m.header&&t!==void 0&&m.header(t),d.thumbnail===void 0&&m.thumbnail&&r!==void 0&&m.thumbnail(r),d.description===void 0&&m.description&&a!==void 0&&m.description(a),n.css.add(P),o(),g(),p$1(),`<div class="artist-header svelte-cymg3g"><div class="artist-thumbnail svelte-cymg3g" style="${j("",!0)+";"}"><div${ut("style",`background-image: linear-gradient(1turn, var(--base-bg) ${Math.min(Math.max(0,w),100)}%, transparent); transition: cubic-bezier(0.6, -0.28, 0.74, 0.05) background 120ms`,0)} id="gradient" class="gradient svelte-cymg3g"${ut("this",y,0)}></div>
		<picture class="header-thumbnail svelte-cymg3g">${ot(r,(e,i)=>`${i===0?`<source media="${"(max-width:"+j(e.width,!0)+"px)"}"${ut("srcset",e.url,0)} type="image/jpeg">
					<source${ut("media",`(min-width:${e.width+1}px) and (max-width:${r[i+1].width}px)`,0)}${ut("srcset",e.url,0)} type="image/jpeg">`:`${i===r.length-1?"":`<source${ut("media",`(min-width:${e.width+1}px) and (max-width:${r[i+1].width}px)`,0)}${ut("srcset",r[i+1].url,0)} type="image/jpeg">`}`}`)}
			<img class="header-thumbnail svelte-cymg3g" style="${"opacity:"+j(h,!0)+";"}" loading="eager"${ut("src",r[1]?.url,0)} id="artist_img" alt="Artist Thumbnail"${ut("this",$,0)}></picture>
		<div class="artist-content svelte-cymg3g"><div class="${["content-wrapper svelte-cymg3g",t?.foregroundThumbnails?"row":""].join(" ").trim()}">${t?.foregroundThumbnails?`<picture>${ot(t?.foregroundThumbnails,(e,i)=>`${i===0?`<source media="${"(max-width:"+j(e?.width,!0)+"px)"}"${ut("srcset",e?.url,0)} type="image/jpeg">
								<source${ut("media",`(min-width:${e?.width+1}px) and (max-width:${t?.foregroundThumbnails[i+1].width}px)`,0)}${ut("srcset",e?.url,0)} type="image/jpeg">`:`${i===t?.foregroundThumbnails.length-1?"":`<source${ut("media",`(min-width:${e?.width+1}px) and (max-width:${t?.foregroundThumbnails[i+1].width}px)`,0)}${ut("srcset",t?.foregroundThumbnails[i+1].url,0)} type="image/jpeg">`}`}`)}
						<img class="content-thumbnail svelte-cymg3g" loading="eager"${ut("src",t?.foregroundThumbnails[1]?.url,0)} alt="Artist Thumbnail"></picture>`:""}
				<div class="name svelte-cymg3g">${j(t?.name)}</div>
				${c&&a?`${rt(p,"Description").$$render(n,{description:a},{},{})}`:""}
				<div class="btn-wrpr">${t?.buttons.radio!==null?`<button class="outlined">${rt(k,"Icon").$$render(n,{size:"1.25em",name:"radio"},{},{})}<span class="button-text">Play Radio</span></button>`:""}
					${t?.buttons.shuffle!==!1?`<button>${rt(k,"Icon").$$render(n,{size:"1.25em",name:"shuffle"},{},{})}<span class="button-text">Shuffle</span></button>`:""}</div></div></div></div></div>

`});const S={code:".song-list.svelte-98sgd{margin-bottom:3.3339em}.songs.svelte-98sgd{margin-bottom:1rem}main.svelte-98sgd{padding:1em 0 5vh;padding-bottom:3.3125vh!important}@media only screen and (min-width:640px) and (max-width:1079.9px){main.svelte-98sgd{padding:3vh 1rem .8rem 2rem}}@media only screen and (min-width:1080px) and (max-width:1366px){main.svelte-98sgd{padding:4vh 2rem .8rem}}@media only screen and (min-width:1367px) and (max-width:1600px){main.svelte-98sgd{padding:5vh 2rem 0}}@media only screen and (min-width:1601px){main.svelte-98sgd{padding:3vh 2rem 0}}.artist-body.svelte-98sgd{padding:1em 0 0}",map:null},J=ct((n,d,m,z)=>{let o,g,c$1,p$1;g=A(v,e=>o=e),p$1=A(pe,e=>c$1=e);let{data:t}=d;const{body:r,header:a,visitorData:y}=t;let w=r.carousels??[],h=r.songs??{};o.params.slug;let $=640;return c.set({page:"artist",innerWidth:$}),d.data===void 0&&m.data&&t!==void 0&&m.data(t),n.css.add(S),console.log(t),g(),p$1(),`${rt(O,"Header").$$render(n,{title:a?.name===void 0?"Artist":a?.name,desc:a?.name,url:o.url.pathname,image:a?.thumbnails&&a?.thumbnails[0]?.url},{},{})}

${rt(L,"ArtistPageHeader").$$render(n,{description:a?.description,header:a,thumbnail:a?.thumbnails},{},{})}
<main class="svelte-98sgd"><div class="artist-body svelte-98sgd">${h?.items?.length>0?`<section class="song-list resp-content-width svelte-98sgd"><div class="header"><span class="h2">Songs</span>
					<a style="white-space:pre; display: inline-block;"${ut("href",`/playlist/${h?.header?.browseId}`,0)}><small>See All</small></a></div>
				<section class="songs svelte-98sgd">${ot(h?.items,(e,i)=>`${rt(ue,"ListItem").$$render(n,{item:e,idx:i},{},{})}`)}</section></section>`:""}
		${ot(w,({contents:e,header:i},j)=>`${j===w.length-1?`${rt(A$1,"Carousel").$$render(n,{visitorData:y,items:e,type:"artist",kind:i?.type,isBrowseEndpoint:!0,header:i},{},{default:()=>`&gt;
				`})}`:`${rt(A$1,"Carousel").$$render(n,{items:e,visitorData:y,type:"artist",kind:i?.type,isBrowseEndpoint:!1,header:i},{},{default:()=>`&gt;
				`})}`}`)}
		${c$1&&a?.description?`${rt(p,"Description").$$render(n,{class:"resp-content-width",description:a.description},{},{})}`:""}</div>
</main>`});

export { J as default };
//# sourceMappingURL=_page.svelte-d9640c90.js.map