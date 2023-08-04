import { c as ct, A, r as rt, L, W as W$1, o as ot, u as ut, j } from './index-02d8ed20.js';
import { u as ue } from './ListItem-17989d74.js';
import { u, j as ae } from './utils-c5816fb5.js';
import { A as A$1 } from './index3-a50d3d2e.js';
import './stores-1766503b.js';
import './url-764d83e3.js';
import { O } from './Header-d9be3441.js';
import { Q } from './InfoBox-83c35639.js';
import { k } from './Icon-04791803.js';
import { c } from './contexts-b32c3976.js';
import './PopperButton-4deb1702.js';
import './service-b8fe1ba8.js';
import './Button-73d752a2.js';

const R={code:"@media screen and (min-width:640px){}",map:null},q=ct((r,i,s,f)=>{let{value:t}=i,{options:l=[]}=i;return W$1(),i.value===void 0&&s.value&&t!==void 0&&s.value(t),i.options===void 0&&s.options&&l!==void 0&&s.options(l),r.css.add(R),`<label class="secondary" for="select">Sort</label>

<div class="select"><select id="select">${ot(l,(o,d)=>`<option${ut("value",d,0)}>${j(o.label)}</option>`)}</select>
</div>`}),M={code:".info-bar.svelte-10cpzmr.svelte-10cpzmr{border-bottom:1px solid rgba(66,66,66,.425);display:grid;grid-template-columns:[index] 6.25rem 1fr 2.9rem;grid-template-rows:1fr;max-width:inherit;padding:.8rem 0 .4rem;width:100%}.info-bar.svelte-10cpzmr .index.svelte-10cpzmr,.info-bar.svelte-10cpzmr .length.svelte-10cpzmr,.info-bar.svelte-10cpzmr .mobile-thumbnail.svelte-10cpzmr,.info-bar.svelte-10cpzmr .title.svelte-10cpzmr{color:#f7f7f7;display:block;font-family:var(--secondary-font-family);position:relative;width:100%}.info-bar.svelte-10cpzmr .index.svelte-10cpzmr,.info-bar.svelte-10cpzmr .mobile-thumbnail.svelte-10cpzmr{display:none;justify-self:center;padding-left:1.5rem}.info-bar.svelte-10cpzmr .mobile-thumbnail.svelte-10cpzmr{display:block;grid-column:index;padding-left:2rem}.info-bar.svelte-10cpzmr .length.svelte-10cpzmr{padding-right:1.5rem}@media screen and (min-width:640px){.info-bar.svelte-10cpzmr.svelte-10cpzmr{grid-template-columns:[index] 9.5rem [title] 1fr 3rem}.info-bar.svelte-10cpzmr .index.svelte-10cpzmr,.info-bar.svelte-10cpzmr .mobile-thumbnail.svelte-10cpzmr{display:block;grid-column:index}.info-bar.svelte-10cpzmr .title.svelte-10cpzmr{grid-column:title;justify-self:flex-start}.info-bar.svelte-10cpzmr .mobile-thumbnail.svelte-10cpzmr{display:none;visibility:none}.info-bar.svelte-10cpzmr .length.svelte-10cpzmr{place-self:center!important}}.sort.svelte-10cpzmr.svelte-10cpzmr{align-content:center;display:flex;flex-direction:column;justify-content:flex-start;margin-bottom:var(--md-spacing)}",map:null},U=ct((r,i,s,f)=>{let{value:t="unsorted"}=i,{options:l=[]}=i;W$1(),i.value===void 0&&s.value&&t!==void 0&&s.value(t),i.options===void 0&&s.options&&l!==void 0&&s.options(l),r.css.add(M);let o,d;do o=!0,d=`${l.length!==0?`<div class="sort resp-content-width svelte-10cpzmr">${rt(q,"Select").$$render(r,{options:l,value:t},{value:e=>{t=e,o=!1;}},{})}</div>`:""}
<div class="info-bar svelte-10cpzmr"><span class="index svelte-10cpzmr">#</span>
	<span class="mobile-thumbnail svelte-10cpzmr">${rt(k,"Icon").$$render(r,{name:"image",size:"1em"},{},{})}</span>
	<span class="title svelte-10cpzmr">Title</span>
	<span class="length svelte-10cpzmr">${rt(k,"Icon").$$render(r,{name:"clock",size:"1em"},{},{})}</span>
</div>`;while(!o);return d});const W={code:".list.svelte-1dla7w7{margin-bottom:.8rem}",map:null},X=ct((r,i,s,f)=>{let{items:t=[]}=i,{hasData:l=!1}=i,{isLoading:o=!1}=i;return W$1(),i.items===void 0&&s.items&&t!==void 0&&s.items(t),i.hasData===void 0&&s.hasData&&l!==void 0&&s.hasData(l),i.isLoading===void 0&&s.isLoading&&o!==void 0&&s.isLoading(o),r.css.add(W),`<div class="list svelte-1dla7w7">${ot(t,(d,e)=>`${f.default?f.default({item:d,index:e}):""}`)}
	${l?"":`<div></div>

		${o?'<div class="loading-results" style="padding: 0em;"><svg role="img" width="50rem" height="6rem" aria-labelledby="loading-aria" viewBox="0 0 575 90" preserveAspectRatio="none" class="s-iYjv5-ishYhK s-iYjv5-ishYhK s-iYjv5-ishYhK"><rect x="5" y="0" width="100%" height="100%" clip-path="url(#clip-path)" class="s-iYjv5-ishYhK s-iYjv5-ishYhK s-iYjv5-ishYhK" style="fill: url(&quot;#fill&quot;);"></rect><defs class="s-iYjv5-ishYhK s-iYjv5-ishYhK s-iYjv5-ishYhK"><clipPath id="clip-path" class="s-iYjv5-ishYhK s-iYjv5-ishYhK s-iYjv5-ishYhK"><rect x="0" y="10%" rx="0" ry="0" width="56" height="70" class="s-iYjv5-ishYhK s-iYjv5-ishYhK s-iYjv5-ishYhK"></rect><rect x="67" y="17" rx="0" ry="0" width="105" height="9" class="s-iYjv5-ishYhK s-iYjv5-ishYhK s-iYjv5-ishYhK"></rect><rect x="67" y="60" rx="0" ry="0" width="94" height="9" class="s-iYjv5-ishYhK s-iYjv5-ishYhK s-iYjv5-ishYhK"></rect><rect x="67" y="38" rx="0" ry="0" width="72" height="9" class="s-iYjv5-ishYhK s-iYjv5-ishYhK s-iYjv5-ishYhK"></rect></clipPath><linearGradient id="fill" class="s-iYjv5-ishYhK s-iYjv5-ishYhK s-iYjv5-ishYhK"><stop offset="0.599964" stop-color="#4f4f4f" stop-opacity="1" class="s-iYjv5-ishYhK s-iYjv5-ishYhK s-iYjv5-ishYhK"><animate attributeName="offset" values="-2; -2; 1" keyTimes="0; 0.25; 1" dur="2s" repeatCount="indefinite" class="s-iYjv5-ishYhK s-iYjv5-ishYhK s-iYjv5-ishYhK"></animate></stop><stop offset="1.59996" stop-color="#757575" stop-opacity="1" class="s-iYjv5-ishYhK s-iYjv5-ishYhK s-iYjv5-ishYhK"><animate attributeName="offset" values="-1; -1; 2" keyTimes="0; 0.25; 1" dur="2s" repeatCount="indefinite" class="s-iYjv5-ishYhK s-iYjv5-ishYhK s-iYjv5-ishYhK"></animate></stop><stop offset="2.59996" stop-color="#4f4f4f" stop-opacity="1" class="s-iYjv5-ishYhK s-iYjv5-ishYhK s-iYjv5-ishYhK"><animate attributeName="offset" values="0; 0; 3" keyTimes="0; 0.25; 1" dur="2s" repeatCount="indefinite" class="s-iYjv5-ishYhK s-iYjv5-ishYhK s-iYjv5-ishYhK"></animate></stop></linearGradient></defs></svg></div>':""}`}
</div>`}),vt=ct((r,i,s,f)=>{let t,l,{data:o}=i;const{tracks:d=[],header:e={thumbnails:[],description:"",playlistId:"",secondSubtitle:[],subtitles:[],title:""},id:g="",continuations:z,carouselContinuations:F,visitorData:J,key:_}=o;let D=640,u$1=e?.title||"",j,K=!1,x=!1;const v=A$1([]);l=A(v,a=>t=a),v.set(d),c.set({page:"playlist",innerWidth:D,parentPlaylistId:g,visitorData:o?.visitorData}),u$1=u$1.length>64?u$1.substring(0,64)+"...":e?.title||"",j=e?.description!==void 0?e?.description.length>240?e?.description.substring(0,240)+"...":e?.description:"";const w=()=>ae.add(g);let Y;const L$1=[{label:"Unsorted",params:"nosort",action:()=>{console.log("nosort");}},{label:"Artist (A-Z)",params:"a-az",action:()=>{L(v,t=[...t.sort((a,m)=>{const n=a.artistInfo.artist[0].text.toLowerCase(),c=m.artistInfo.artist[0].text.toLowerCase();if(n<c)return -1;if(n>c)return 1})],t);}},{label:"Artist (Z-A)",params:"a-za",action:()=>{L(v,t=[...t.sort((a,m)=>{const n=a.artistInfo.artist[0].text.toLowerCase(),c=m.artistInfo.artist[0].text.toLowerCase();if(n<c)return 1;if(n>c)return -1})],t);}},{label:"Title (A-Z)",params:"t-az",action:()=>{L(v,t=[...t.sort((a,m)=>{const n=a.title.toLowerCase(),c=m.title.toLowerCase();if(n<c)return -1;if(n>c)return 1})],t);}},{label:"Title (Z-A)",params:"t-za",action:()=>{L(v,t=[...t.sort((a,m)=>{const n=a.title.toLowerCase(),c=m.title.toLowerCase();if(n<c)return 1;if(n>c)return -1})],t);}}];Y||L$1[0].params,i.data===void 0&&s.data&&o!==void 0&&s.data(o);let p,I;do p=!0,z?.continuation,z?.clickTrackingParams,I=`
${e.title!=="error"?`${rt(O,"Header").$$render(r,{title:e?.title,url:`${_}`,desc:j,image:e?.thumbnails!==null?e?.thumbnails[e?.thumbnails?.length-1]?.url:void 0},{},{})}`:""}
<main>${e.title!=="error"?`${rt(Q,"InfoBox").$$render(r,{subtitles:e?.subtitles,secondSubtitle:e?.secondSubtitle,thumbnail:e?.thumbnails!==null?e?.thumbnails[e?.thumbnails?.length-1].url.replace(/=(w(\d+))-(h(\d+))/g,"=w512-h512"):void 0,title:u$1,description:j,buttons:[{action:()=>{w(),u.initAutoMixSession({playlistId:e.playlistId,config:{playerParams:"wAEB8gECGAE%3D"}});},icon:"shuffle",text:"Shuffle"},{action:()=>{w(),u.initPlaylistSession({playlistId:"RDAMPL"+e.playlistId,index:0,params:"wAEB8gECGAE%3D"});},icon:"play",type:"outlined",text:"Start Radio"},{action:()=>{},icon:{name:"dots",size:"1.25rem"},text:"",type:"icon"}]},{},{})}`:""}
	${rt(U,"ListInfoBar").$$render(r,{options:L$1,value:Y},{value:a=>{Y=a,p=!1;}},{})}

	${rt(X,"List").$$render(r,{items:t,isLoading:K,hasData:x},{items:a=>{t=a,p=!1;},isLoading:a=>{K=a,p=!1;},hasData:a=>{x=a,p=!1;}},{default:({item:a,index:m})=>`${rt(ue,"ListItem").$$render(r,{item:a,idx:m},{},{})}`})}
	<footer></footer>
</main>`;while(!p);return l(),I});

export { vt as default };
//# sourceMappingURL=_page.svelte-2e2525a2.js.map
