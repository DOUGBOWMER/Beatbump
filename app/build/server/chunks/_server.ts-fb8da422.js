import { N } from './request-da4c074d.js';
import { v } from './musicResponsiveListItemRenderer-cbca5691.js';
import { l } from './musicTwoRowItemRenderer-3121913c.js';
import './index-02d8ed20.js';
import './utils-c5816fb5.js';
import { o as o$1 } from './parsers-0c76649c.js';
import { o, c as c$1 } from './index2-e7fe418e.js';
import './utils.parsers-3568cb71.js';
import './index3-a50d3d2e.js';

const M=async()=>{let t=[];return t=((await await N("home",{context:{client:{clientName:"WEB_REMIX",clientVersion:"1.20220404.01.00"}},params:{browseId:"FEmusic_explore"},headers:null}).then(e=>{if(!e.ok)throw o(e.status,e.statusText);return e.json()}))?.contents?.singleColumnBrowseResultsRenderer?.tabs[0]?.tabRenderer?.content?.sectionListRenderer?.contents).filter(e=>"musicCarouselShelfRenderer"in e).map(e=>c(e)),c$1({carouselItems:t})};function m({musicCarouselShelfBasicHeaderRenderer:t}){if(t){let o,n;return t?.strapline?.runs[0]?.text&&(o=t.strapline.runs[0].text),t?.moreContentButton?.buttonRenderer?.navigationEndpoint?.browseEndpoint?.browseId&&(n=t?.moreContentButton?.buttonRenderer?.navigationEndpoint?.browseEndpoint?.browseId),{title:t.title.runs[0].text,subheading:o,browseId:n}}}function d(t=[]){return t.map(n=>{if("musicTwoRowItemRenderer"in n)return l(n);if("musicResponsiveListItemRenderer"in n)return v(n);if("musicNavigationButtonRenderer"in n)return o$1(n)})}function c({musicCarouselShelfRenderer:t}){return {header:m(t?.header),results:d(t?.contents)}}

export { M as GET };
//# sourceMappingURL=_server.ts-fb8da422.js.map
