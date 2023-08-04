import { c as ct, A, e as et, j, u as ut, r as rt, o as ot } from './index-02d8ed20.js';
import { y, _ } from './PopperButton-4deb1702.js';
import { u, k as f, o as oe, l } from './utils-c5816fb5.js';
import { o } from './service-b8fe1ba8.js';
import { e } from './url-764d83e3.js';

/* empty css                                          */function U({origin:l,title:i,type:s=null,id:o}){switch(s){case"MUSIC_PAGE_TYPE_ALBUM":return {url:`${l}/release?id=${o}`,title:i};case"MUSIC_PAGE_TYPE_ARTIST":return {title:i,url:`${l}/artist/${o}`};case"MUSIC_PAGE_TYPE_PLAYLIST":return {title:i,url:`${l}/playlist/${o}`};case"SESSION":return {title:i,url:`${l}/session?token=${o}`};default:return {url:`${l}/listen?id=${o}`,title:i}}}const O={code:'article.svelte-kk8ud6.svelte-kk8ud6{--thumbnail-radius:clamp(4px,calc(var(--column-width, 0px) - 32px) * 0.025,8px);contain:layout paint style;margin-bottom:1em;padding:.75em;scroll-snap-align:start;width:var(--column-width)}@media(hover:hover){article.svelte-kk8ud6:hover>.svelte-kk8ud6:where(.image):before{background:linear-gradient(rgba(0,0,0,.534),rgba(0,0,0,.11));opacity:.7;z-index:1}}.item-thumbnail-wrapper.svelte-kk8ud6.svelte-kk8ud6{display:block;margin-bottom:.5em;overflow:hidden;position:relative}.item-thumbnail-wrapper.img16x9.svelte-kk8ud6.svelte-kk8ud6{aspect-ratio:16/9}.item-thumbnail-wrapper.img1x1.svelte-kk8ud6.svelte-kk8ud6{aspect-ratio:1/1}.svelte-kk8ud6.svelte-kk8ud6:where(.item-title.isArtistKind){text-align:center}.svelte-kk8ud6.svelte-kk8ud6:where(.image.isArtistKind){border-radius:99999em!important;height:var(--thumbnail-size);width:var(--thumbnail-size)}a.svelte-kk8ud6.svelte-kk8ud6{color:inherit;transition:color .1s linear}a.svelte-kk8ud6.svelte-kk8ud6:hover{color:#eee}.svelte-kk8ud6.svelte-kk8ud6:where(.item-title){display:block}.svelte-kk8ud6.svelte-kk8ud6:where(.link){-webkit-line-clamp:2;-webkit-box-orient:vertical;display:block;display:-webkit-box;margin-bottom:.325em;overflow:hidden;text-overflow:ellipsis}.item1x1.svelte-kk8ud6.svelte-kk8ud6{position:relative}.item16x9.svelte-kk8ud6.svelte-kk8ud6{width:100%}.img1x1.svelte-kk8ud6.svelte-kk8ud6{aspect-ratio:1/1!important;height:var(--thumbnail-size);width:var(--thumbnail-size)}.img16x9.svelte-kk8ud6.svelte-kk8ud6{aspect-ratio:16/9!important;min-height:var(--thumbnail-size);min-width:calc(var(--column-width)*1);width:100%}.subtitles.svelte-kk8ud6.svelte-kk8ud6{-webkit-line-clamp:2;-webkit-box-orient:vertical;cursor:pointer;display:block;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}.h1.svelte-kk8ud6.svelte-kk8ud6{display:inline;font-size:1em;font-weight:400!important;line-height:1.25}.image.svelte-kk8ud6.svelte-kk8ud6{align-items:center;border-radius:var(--thumbnail-radius);contain:paint;cursor:pointer;display:flex;min-height:100%;overflow:hidden;position:relative;-webkit-user-select:none;user-select:none}.image.svelte-kk8ud6.svelte-kk8ud6:focus{border:none}.image.svelte-kk8ud6.svelte-kk8ud6:before{background-image:linear-gradient(rgba(0,0,0,.502),transparent,transparent);content:"";inset:0;opacity:.1;pointer-events:none;position:absolute;transition:background-image .1s linear,opacity .1s linear;z-index:1}.image.svelte-kk8ud6.svelte-kk8ud6:active:hover:before{background-image:linear-gradient(rgba(0,0,0,.589),rgba(0,0,0,.11));opacity:1}.image.svelte-kk8ud6>.svelte-kk8ud6:where(img){aspect-ratio:inherit;contain:content;height:inherit;height:100%;object-fit:cover;-webkit-user-select:none;user-select:none;width:inherit;width:100%}@media screen and (max-width:640px){.image.svelte-kk8ud6.svelte-kk8ud6:before{background:linear-gradient(rgba(0,0,0,.534),rgba(0,0,0,.11));opacity:.7;z-index:1}}.svelte-kk8ud6.svelte-kk8ud6:where(.item){isolation:isolate}.svelte-kk8ud6:where(.image):hover+.svelte-kk8ud6:where(.item-menu){opacity:1!important}.svelte-kk8ud6.svelte-kk8ud6:where(.image):hover{box-shadow:0 -1px 27px -16px #000!important}.svelte-kk8ud6.svelte-kk8ud6:where(.image):hover:active:hover{box-shadow:0 -1px 27px -12px #000!important}.item-menu.svelte-kk8ud6.svelte-kk8ud6{isolation:isolate;margin:.25rem;opacity:0;position:absolute;right:0;top:0;transition:opacity .1s linear;z-index:5}.item-menu.svelte-kk8ud6.svelte-kk8ud6:focus-visible,.item-menu.svelte-kk8ud6.svelte-kk8ud6:focus-within,.item-menu.svelte-kk8ud6.svelte-kk8ud6:hover{opacity:1}@media screen and (max-width:640px){.item-menu.svelte-kk8ud6.svelte-kk8ud6{opacity:1}}@media screen and (hover:none){.item-menu.svelte-kk8ud6.svelte-kk8ud6{opacity:1}}.item-thumbnail.svelte-kk8ud6.svelte-kk8ud6{border-radius:var(--thumbnail-radius);contain:paint;cursor:pointer;height:100%;overflow:hidden;position:relative;position:absolute;top:0}.item-thumbnail.svelte-kk8ud6:focus-visible>.image.svelte-kk8ud6:before,.item-thumbnail.svelte-kk8ud6:focus-within>.image.svelte-kk8ud6:before,.item-thumbnail.svelte-kk8ud6:hover>.image.svelte-kk8ud6:before{background:linear-gradient(rgba(0,0,0,.534),rgba(0,0,0,.11));opacity:.7;z-index:1}.hidden.svelte-kk8ud6.svelte-kk8ud6{display:none!important;visibility:hidden!important}.image.svelte-kk8ud6.svelte-kk8ud6:focus,img.svelte-kk8ud6.svelte-kk8ud6:focus{outline:none}',map:null},T=/PLAYLIST|ALBUM|SINGLE/,K=/=w\d+-h\d+-/gm,Y=["Favorite","Add to Queue","View Artist"],E=["Favorite","Play Next","View Artist"],J=ct((l$1,i,s,o$1)=>{let m,p,g,x,y$1;g=A(u,t=>p=t),y$1=A(e,t=>x=t);let{index:c}=i,{item:e$1}=i,{type:w=""}=i,{kind:h=""}=i,{aspectRatio:b}=i,{isBrowseEndpoint:f$1=!1}=i;const v=!!(b?.includes("TWO_LINE_STACK")&&h!=="Fans might also like"||b?.includes("16_9"))?"16x9":"1x1";let n=[{text:"View Artist",icon:"artist",action:async()=>{try{const t=e$1.artistInfo?e$1.artistInfo.artist[0].browseId:e$1.subtitle[0].browseId;if(!t)throw new Error(`Expected a valid artistId string, received ${t}`);y(`/artist/${t}`),await et(),window.scrollTo({behavior:"smooth",top:0,left:0});}catch(t){f(`Error: ${t}`,"error");}}},{text:"Add to Queue",icon:"queue",action:function(){u.setTrackWillPlayNext(e$1,p.mix.length),f(`${e$1.title} has been added to your queue!`,"success");}},{text:"Play Next",icon:"queue",action(){u.setTrackWillPlayNext(e$1,p.position),f(`${e$1.title} will play next!`,"success");}},{text:"Add to Playlist",icon:"list-plus",action:async()=>{if(e$1.endpoint?.pageType.match(T)){const S=await(await fetch("/api/v1/get_queue.json?playlistId="+e$1.playlistId)).json();oe.set({state:!0,item:[...S]});}else oe.set({state:!0,item:e$1});}},{text:"Favorite",icon:"heart",action:()=>{o.sendMessage("create","favorite",e$1);}},l.hasActiveSession?{text:"Share Group Session",icon:"share",action:async()=>{}}:{text:"Start Group Session",icon:"users",action:async()=>{}},{text:"Share",icon:"share",action:async()=>{const t=U({origin:x,id:e$1.endpoint?.browseId??e$1.videoId,type:e$1.endpoint?.pageType??null,title:e$1.title});try{navigator.canShare?(await navigator.share(t),f("Shared successfully","success")):(await navigator.clipboard.writeText(t.url),f("Link copied successfully","success"));}catch(I){f("Error: "+I,"error");}}}],a=Array.isArray(e$1?.thumbnails)?e$1?.thumbnails.at(0):{width:0,height:0,url:"",placeholder:""};return i.index===void 0&&s.index&&c!==void 0&&s.index(c),i.item===void 0&&s.item&&e$1!==void 0&&s.item(e$1),i.type===void 0&&s.type&&w!==void 0&&s.type(w),i.kind===void 0&&s.kind&&h!==void 0&&s.kind(h),i.aspectRatio===void 0&&s.aspectRatio&&b!==void 0&&s.aspectRatio(b),i.isBrowseEndpoint===void 0&&s.isBrowseEndpoint&&f$1!==void 0&&s.isBrowseEndpoint(f$1),l$1.css.add(O),(w==="artist"||e$1.endpoint&&e$1.endpoint.pageType?.includes("MUSIC_PAGE_TYPE_ARTIST"))&&(n=n.filter(t=>Y.includes(t.text))),e$1.endpoint?.pageType&&(n=e$1?.endpoint?.pageType.match(T)?[{action:()=>{u.initPlaylistSession({playlistId:e$1.playlistId,params:"wAEB8gECKAE%3D",index:0});},icon:"shuffle",text:"Shuffle"},{action:()=>{u.setTrackWillPlayNext(e$1,p.position);},icon:"queue",text:"Play Next"},{action:()=>{u.initPlaylistSession({playlistId:"RDAMPL"+e$1.playlistId,params:"wAEB8gECeAE%3D",index:0});},icon:"radio",text:"Start Radio"},...n.filter(t=>!E.includes(t.text))]:n.filter(t=>E.includes(t.text))),a.url=a.width<100?a.url.replace(K,"=w240-h240-"):a.url,m=h==="Fans might also like",g(),y$1(),`





<article class="${"item item"+j(v,!0)+" svelte-kk8ud6"}"><section class="${"item-thumbnail-wrapper img"+j(v,!0)+" svelte-kk8ud6"}"><section class="${["item-thumbnail img"+j(v,!0)+" svelte-kk8ud6",m?"isArtistKind":""].join(" ").trim()}"><div class="${["image img"+j(v,!0)+" svelte-kk8ud6"," "+(m?"isArtistKind":"")].join(" ").trim()}" tabindex="0">
				<img alt="${"thumbnail img"+j(v,!0)}"${ut("loading",c>=3?"lazy":null,0)}${ut("width",a.width,0)}${ut("height",a.height,0)}${ut("src",c>=3?a.placeholder:a.url,0)}${ut("data-src",c>=3?a.url:null,0)} class="svelte-kk8ud6"></div>
			<div class="item-menu svelte-kk8ud6">${rt(_,"PopperButton").$$render(l$1,{tabindex:0,items:n},{},{})}</div></section></section>
	<div class="${["item-title svelte-kk8ud6",m?"isArtistKind":""].join(" ").trim()}"><span class="h1 link svelte-kk8ud6">${j(e$1.title)}</span>
		${e$1.subtitle?`<div class="subtitles secondary svelte-kk8ud6">${ot(e$1.subtitle,t=>`${t?.browseId?`<a${ut("href","/artist/"+t?.browseId,0)} class="svelte-kk8ud6"><span class="svelte-kk8ud6">${j(t.text)}</span></a>`:`<span class="svelte-kk8ud6">${j(t.text)}</span>`}`)}</div>`:""}</div>
</article>`});

export { J };
//# sourceMappingURL=CarouselItem-5da4848e.js.map