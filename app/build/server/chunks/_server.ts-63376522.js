import { N } from './request-da4c074d.js';
import './utils-c5816fb5.js';
import './index-02d8ed20.js';
import './index3-a50d3d2e.js';

const w=async({url:i})=>{const c=i.searchParams.get("browseId"),r=(await(await N("browse",{context:{client:{clientName:"WEB_REMIX",clientVersion:"1.20220404.01.00"}},params:{browseId:c}})).json()).contents?.singleColumnBrowseResultsRenderer?.tabs[0]?.tabRenderer?.content?.sectionListRenderer?.contents;let s=[];for(let o=0;o<r.length;o++){const{gridRenderer:a}=r[o],{items:e=[],header:d={}}=a;for(let t=0;t<e.length;t++){const n=e[t]?.musicNavigationButtonRenderer;e[t]={text:n?.buttonText?.runs[0]?.text,color:`#${("00000000"+(n?.solid?.leftStripeColor&16777215).toString(16)).slice(-6)}`,endpoint:{params:n?.clickCommand?.browseEndpoint?.params,browseId:n?.clickCommand?.browseEndpoint?.browseId}};}s=[...s,{section:[...e],title:d?.gridHeaderRenderer?.title?.runs[0]?.text}];}return new Response(JSON.stringify(s))};

export { w as GET };
//# sourceMappingURL=_server.ts-63376522.js.map
