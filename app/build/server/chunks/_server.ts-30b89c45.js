import { c } from './index2-e7fe418e.js';
import { N } from './request-da4c074d.js';
import { v } from './musicResponsiveListItemRenderer-cbca5691.js';
import { l } from './musicTwoRowItemRenderer-3121913c.js';
import './index-02d8ed20.js';
import './utils-c5816fb5.js';
import './utils.parsers-3568cb71.js';
import './index3-a50d3d2e.js';

const B=async({url:t,params:e})=>{const{slug:o}=e,a=await(await N("browse",{context:{client:{clientName:"WEB_REMIX",clientVersion:"1.20220404.01.00"}},params:{browseId:"FEmusic_moods_and_genres_category",params:o}})).json();let{header:{musicHeaderRenderer:{title:{runs:[{text:d=""}={}]=[]}={}}={}}={},contents:{singleColumnBrowseResultsRenderer:{tabs:[{tabRenderer:{content:{sectionListRenderer:{contents:p=[]}={}}={}}={}}={}]=[]}={}}={}}=await a,i=[],m=[],s=[];for(let n=0;n<p.length;n++){const r={...p[n]};r?.musicCarouselShelfRenderer&&i.push(r),r?.gridRenderer&&m.push(r);}if(i.length!==0){if(s=i.map(({musicCarouselShelfRenderer:n},r)=>f({musicCarouselShelfRenderer:n})),s.length!==0)return c({data:a,sections:s,header:d,type:"carousel"})}else return s=m.map(({gridRenderer:n={}})=>{const{items:r=[],header:l$1={}}=n;return {section:r.map(w=>l(w)),title:l$1?.gridHeaderRenderer?.title?.runs[0]?.text}}),c({sections:s,header:d,type:"grid"})};function g(t){return t.map(({musicCarouselShelfBasicHeaderRenderer:e}={})=>{const o={};return e?.moreContentButton?.buttonRenderer?.navigationEndpoint?.browseEndpoint?.browseId&&(o.browseId=e?.moreContentButton?.buttonRenderer?.navigationEndpoint?.browseEndpoint?.browseId),e?.moreContentButton?.buttonRenderer?.navigationEndpoint?.browseEndpoint?.params&&(o.params=e?.moreContentButton?.buttonRenderer?.navigationEndpoint?.browseEndpoint?.params),o.title=e.title.runs[0].text,o})}function E(t){return t.map(({...e})=>{if(e.musicTwoRowItemRenderer)return l(e);if(e.musicResponsiveListItemRenderer)return v(e);throw new Error(`Unable to parse items, can't find ${e}`)})}function f({musicCarouselShelfRenderer:t}){return {header:g([t.header])[0],results:E(t.contents)}}

export { B as GET };
//# sourceMappingURL=_server.ts-30b89c45.js.map
