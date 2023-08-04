import { N } from './request-da4c074d.js';
import { v as v$1 } from './musicResponsiveListItemRenderer-cbca5691.js';
import { l } from './musicTwoRowItemRenderer-3121913c.js';
import { d as dt } from './utils-c5816fb5.js';
import './index-02d8ed20.js';
import { o as o$1 } from './parsers-0c76649c.js';
import { o, c } from './index2-e7fe418e.js';
import './utils.parsers-3568cb71.js';
import './index3-a50d3d2e.js';

const A=async({url:n})=>{const e=n.searchParams;let t=e.get("ctoken")||"",o$1=e.get("itct")||"";o$1=decodeURIComponent(o$1),t=decodeURIComponent(t);const a=e.get("visitorData")||"",u="FEmusic_home",s=await N("home",{context:{client:{visitorData:`${a}`,clientName:"WEB_REMIX",clientVersion:"1.20220404.01.00",hl:"en",userAgent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36 Edg/95.0.1020.40,gzip(gfe)"}},headers:null,params:{browseId:t===""?u:""},continuation:t!==""&&{ctoken:t,continuation:t,type:"next",itct:o$1}}).then(r=>{if(!r.ok)throw o(r.status,r.statusText);return r.json()}),i=s.responseContext?.visitorData;if(t==="")return w(s,i);const c$1=s.continuationContents?.sectionListContinuation,p=c$1.contents,f=Array.isArray(c$1?.continuations)?c$1.continuations[0]?.nextContinuationData:{},b=dt(p,r=>{if("musicCarouselShelfRenderer"in r)return m(r)},Boolean);return c({carousels:b,continuations:f})};function w(n,e){let t=n.background?.musicThumbnailRenderer?.thumbnail?.thumbnails??[];const o=n.contents?.singleColumnBrowseResultsRenderer?.tabs[0]?.tabRenderer?.content?.sectionListRenderer,a=o.contents||[],u=o.continuations[0]?.nextContinuationData,s=dt(a,i=>{if("musicCarouselShelfRenderer"in i)return m(i);if("musicImmersiveCarouselShelfRenderer"in i)return t=i.musicImmersiveCarouselShelfRenderer.backgroundImage?.simpleVideoThumbnailRenderer?.thumbnail?.thumbnails||[],m(i)},Boolean);return c({carousels:s,headerThumbnail:t,visitorData:e,continuations:u})}function v({musicCarouselShelfBasicHeaderRenderer:n}){if(n){let e,t;return n?.strapline?.runs[0]?.text&&(e=n.strapline.runs[0].text),n?.moreContentButton?.buttonRenderer?.navigationEndpoint?.browseEndpoint?.browseId&&(t=n?.moreContentButton?.buttonRenderer?.navigationEndpoint?.browseEndpoint?.browseId),{title:n.title.runs[0].text,subheading:e,browseId:t}}}function x(n=[]){return n.map(t=>{if("musicTwoRowItemRenderer"in t)return l(t);if("musicResponsiveListItemRenderer"in t)return v$1(t);if("musicNavigationButtonRenderer"in t)return o$1(t)})}function m(n){const e=n?.musicCarouselShelfRenderer??n?.musicImmersiveCarouselShelfRenderer,t=v(e?.header),o=x(e?.contents);return {header:t,items:o}}

export { A as GET };
//# sourceMappingURL=_server.ts-9d912cb9.js.map
