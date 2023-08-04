import { a } from './index2-e7fe418e.js';

const v=async({url:s,params:c,fetch:e})=>{const t=s.searchParams.get("id"),a$1=s.searchParams.get("list")||void 0;if(!t)throw a(301,"/trending");const[o,n]=await Promise.all([e(`/api/v1/player.json?videoId=${t||""}${a$1?`&playlistId=${a$1}`:""}`).then(i=>i.json()),e(`/api/v1/next.json?videoId=${t||""}${a$1?`&playlistId=${a$1}`:""}`).then(i=>i.json())]),{videoDetails:{title:d="",videoId:r="",thumbnail:{thumbnails:l=[]}={}}={}}=o;return {title:d,thumbnails:l,videoId:r,playlist:a$1,related:n,data:o}};

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: v
});

const index = 12;
const component = async () => (await import('./_page.svelte-d00f7a9f.js')).default;
const file = '_app/immutable/components/pages/listen/_page.svelte-f87b4b83.js';
const imports = ["_app/immutable/components/pages/listen/_page.svelte-f87b4b83.js","_app/immutable/chunks/index-02d4e276.js","_app/immutable/chunks/Icon-33dd6fee.js","_app/immutable/chunks/Listing-f4e34f2e.js","_app/immutable/chunks/Loading-e098347c.js","_app/immutable/chunks/index-a434d751.js","_app/immutable/chunks/window-3d9785aa.js","_app/immutable/chunks/index-bb96cc25.js","_app/immutable/chunks/preload-helper-41c905a7.js","_app/immutable/chunks/navigation-8392efd7.js","_app/immutable/chunks/singletons-4f84171e.js","_app/immutable/chunks/buffer-8e6379eb.js","_app/immutable/chunks/PopperButton-1074cc5a.js","_app/immutable/chunks/url-fcaf9571.js","_app/immutable/chunks/stores-5cf8d32a.js"];
const stylesheets = ["_app/immutable/assets/_page-7c747450.css","_app/immutable/assets/Icon-e9cb2d4c.css","_app/immutable/assets/Listing-a3276042.css","_app/immutable/assets/Loading-7564a631.css","_app/immutable/assets/PopperButton-3d4bec04.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=12-5c6e97c2.js.map
