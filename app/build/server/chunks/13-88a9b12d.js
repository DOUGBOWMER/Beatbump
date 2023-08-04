import { o } from './index2-e7fe418e.js';

const w=async({params:o$1,url:s,fetch:n})=>{const{slug:a}=o$1,t=await n(`/api/v1/playlist.json?list=${a}`),i=await t.json(),{tracks:r=[],header:e={},continuations:c={},carouselContinuations:l,visitorData:u}=await i;if(!t.ok)throw console.log("ERROR"),o(t.status,t.statusText);return {tracks:r,visitorData:u,continuations:c,carouselContinuations:l,header:e,id:a,key:s.pathname}};

var _page_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: w
});

const index = 13;
const component = async () => (await import('./_page.svelte-2e2525a2.js')).default;
const file = '_app/immutable/components/pages/playlist/_slug_/_page.svelte-6ea9aacc.js';
const imports = ["_app/immutable/components/pages/playlist/_slug_/_page.svelte-6ea9aacc.js","_app/immutable/chunks/index-02d4e276.js","_app/immutable/chunks/ListItem-5c39b9db.js","_app/immutable/chunks/window-3d9785aa.js","_app/immutable/chunks/index-bb96cc25.js","_app/immutable/chunks/preload-helper-41c905a7.js","_app/immutable/chunks/stores-5cf8d32a.js","_app/immutable/chunks/singletons-4f84171e.js","_app/immutable/chunks/Icon-33dd6fee.js","_app/immutable/chunks/contexts-267137aa.js","_app/immutable/chunks/PopperButton-1074cc5a.js","_app/immutable/chunks/navigation-8392efd7.js","_app/immutable/chunks/url-fcaf9571.js","_app/immutable/chunks/viewport-7af7a1d2.js","_app/immutable/chunks/Carousel-82017a45.js","_app/immutable/chunks/CarouselItem-5dcf21ee.js","_app/immutable/chunks/Loading-e098347c.js","_app/immutable/chunks/index-a434d751.js","_app/immutable/chunks/buffer-8e6379eb.js","_app/immutable/chunks/observer-238713e4.js","_app/immutable/chunks/Header-719d24e0.js","_app/immutable/chunks/InfoBox-eec41e58.js","_app/immutable/chunks/Button-7bf5be0a.js","_app/immutable/chunks/ListInfoBar-4384ddb5.js","_app/immutable/modules/pages/playlist/_slug_/_page.ts-b76674d8.js","_app/immutable/chunks/index-dc735eee.js","_app/immutable/chunks/control-f5b05b5f.js","_app/immutable/chunks/_page-e27696fd.js"];
const stylesheets = ["_app/immutable/assets/_page-3864ad7e.css","_app/immutable/assets/ListItem-8b990e7d.css","_app/immutable/assets/Icon-e9cb2d4c.css","_app/immutable/assets/PopperButton-3d4bec04.css","_app/immutable/assets/Carousel-c8eca61c.css","_app/immutable/assets/CarouselItem-03913a7f.css","_app/immutable/assets/Loading-7564a631.css","_app/immutable/assets/InfoBox-c0b6b8e4.css","_app/immutable/assets/ListInfoBar-01cf3047.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page_ts as universal };
//# sourceMappingURL=13-88a9b12d.js.map
