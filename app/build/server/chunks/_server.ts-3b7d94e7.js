import { c } from './index2-e7fe418e.js';
import { v } from './musicResponsiveListItemRenderer-cbca5691.js';
import { l } from './musicTwoRowItemRenderer-3121913c.js';
import './index-02d8ed20.js';
import './utils-c5816fb5.js';
import { o } from './parsers-0c76649c.js';
import './utils.parsers-3568cb71.js';
import './index3-a50d3d2e.js';

const L=async({params:n})=>{const{slug:s}=n,d=await(await fetch("https://music.youtube.com/youtubei/v1/browse?key=AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30&prettyPrint=false",{method:"POST",keepalive:!0,body:JSON.stringify({context:{client:{clientName:"WEB_REMIX",clientVersion:"0.1"},user:{lockedSafetyMode:!1}},browseId:`${s}`}),headers:{"Content-Type":"application/json; charset=utf-8",Origin:"https://music.youtube.com"}})).json();let{header:{musicHeaderRenderer:{title:{runs:[{text:c$1=""}={}]=[]}={}}={}}={},contents:{singleColumnBrowseResultsRenderer:{tabs:[{tabRenderer:{content:{sectionListRenderer:{contents:o=[]}={}}={}}={}}={}]=[]}={}}={}}=await d;s.includes("videos");let u=[],l$1=[],i=[];for(let e=0;e<o.length;e++){const t=o[e];t?.musicCarouselShelfRenderer&&u.push(t),t?.gridRenderer&&l$1.push(t);}if(u.length!==0)for(let e=0;e<o.length;e++){const t=o[e];t?.musicCarouselShelfRenderer&&i.push(I(t));}if(l$1.length!==0)for(let e=-1;++e<o.length;){const{gridRenderer:t={}}=o[e],p=t.items,m=t.header,f=p.map(h=>l(h));i.push({section:f,type:"grid",title:m?.gridHeaderRenderer?.title?.runs[0]?.text});}return c({title:(()=>{const e=s.split("_");for(let t=0;t<e.length;t++)e[t]=e[t][0].toUpperCase()+e[t].substr(1);return e.join(" "),e.shift(),e.join(" ")})(),sections:i,header:c$1,data:d})};function w({musicCarouselShelfBasicHeaderRenderer:n}){if(n){let s,r;return n?.strapline?.runs[0]?.text&&(s=n.strapline.runs[0].text),n?.moreContentButton?.buttonRenderer?.navigationEndpoint?.browseEndpoint?.browseId&&(r=n?.moreContentButton?.buttonRenderer?.navigationEndpoint?.browseEndpoint?.browseId),{title:n.title.runs[0].text,subheading:s,browseId:r}}}function y(n=[]){return n.map(r=>{if("musicTwoRowItemRenderer"in r)return l(r);if("musicResponsiveListItemRenderer"in r)return v(r);if("musicNavigationButtonRenderer"in r)return o(r)})}function I(n){return {header:w(n.musicCarouselShelfRenderer?.header??n.musicImmersiveCarouselShelfRenderer?.header),type:"carousel",results:y(n.musicCarouselShelfRenderer?.contents??n.musicImmersiveCarouselShelfRenderer?.contents)}}

export { L as GET };
//# sourceMappingURL=_server.ts-3b7d94e7.js.map
