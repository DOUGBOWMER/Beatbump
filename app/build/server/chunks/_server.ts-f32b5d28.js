import { N } from './request-da4c074d.js';
import { o, c } from './index2-e7fe418e.js';
import './utils-c5816fb5.js';
import './index-02d8ed20.js';
import './index3-a50d3d2e.js';

const y=async({url:a,locals:m})=>{const e=a.searchParams,s=e.get("videoId")||"",o$1=e.get("list")||"",c$1=e.get("playerParams")||"";try{const t=await N("player",{context:{client:{clientName:"IOS",clientVersion:"17.13.3",hl:"en"}},params:{videoId:s,playlistId:o$1,params:c$1,racyCheckOk:!0,contentCheckOk:!0}});if(!t.ok)throw o(t.status,t.statusText);const n=await t.json();return c(n)}catch(t){throw console.error(t),o(500,t)}};

export { y as GET };
//# sourceMappingURL=_server.ts-f32b5d28.js.map
