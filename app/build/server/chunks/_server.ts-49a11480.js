import { c, o } from './index2-e7fe418e.js';
import { v } from './musicResponsiveListItemRenderer-cbca5691.js';
import { l } from './musicTwoRowItemRenderer-3121913c.js';
import './index-02d8ed20.js';
import './utils-c5816fb5.js';
import { N } from './request-da4c074d.js';
import './utils.parsers-3568cb71.js';
import './index3-a50d3d2e.js';

const T=async({url:l$1})=>{try{const s=[],t={},m=l$1.searchParams.get("browseId"),i=await(await N("related",{context:{client:{clientName:"WEB_REMIX",clientVersion:"1.20220404.01.00"}},headers:null,params:{browseId:m,params:void 0,browseEndpointContextMusicConfig:{browseEndpointContextMusicConfig:{pageType:"MUSIC_PAGE_TYPE_TRACK_RELATED"}}}})).json(),c$1=Array.isArray(i?.contents?.sectionListRenderer?.contents)?i?.contents?.sectionListRenderer?.contents:[];let a=c$1.length;for(;--a>-1;){const e=c$1[a];if(e?.musicCarouselShelfRenderer){const n={},o=[];let d=e?.musicCarouselShelfRenderer?.contents?.length;for(;--d>-1;){const r=e?.musicCarouselShelfRenderer?.contents[d];r?.musicTwoRowItemRenderer&&o.unshift(l(r)),r?.musicResponsiveListItemRenderer&&o.unshift(v(r));}n.items=o,n.header={title:e?.musicCarouselShelfRenderer?.header?.musicCarouselShelfBasicHeaderRenderer?.title?.runs[0]?.text},s.push(n);}e?.musicDescriptionShelfRenderer&&(t.header=e?.musicDescriptionShelfRenderer?.header?.runs[0]?.text,t.description=e?.musicDescriptionShelfRenderer?.description?.runs[0]?.text);}return c({carousels:s,description:t})}catch(s){throw console.error(s),o(500,s)}};

export { T as GET };
//# sourceMappingURL=_server.ts-49a11480.js.map
