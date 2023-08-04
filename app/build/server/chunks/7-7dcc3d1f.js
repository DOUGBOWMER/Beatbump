import { o } from './index2-e7fe418e.js';

const m=async({fetch:t,data:d,url:o$1})=>{const a=await t("/home.json"),r=await a.json();if(!a.ok)throw o(500,`Error: ${a.statusText}`);const{carousels:s,headerThumbnail:n=void 0,continuations:e,visitorData:i}=r;return {carousels:s,headerThumbnail:n,continuations:e,visitorData:i,path:o$1.pathname}};

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: m
});

const index = 7;
const component = async () => (await import('./_page.svelte-27bdb528.js')).default;
const file = '_app/immutable/components/pages/home/_page.svelte-5487c3a3.js';
const imports = ["_app/immutable/components/pages/home/_page.svelte-5487c3a3.js","_app/immutable/chunks/index-02d4e276.js","_app/immutable/chunks/viewport-7af7a1d2.js","_app/immutable/chunks/Carousel-82017a45.js","_app/immutable/chunks/CarouselItem-5dcf21ee.js","_app/immutable/chunks/navigation-8392efd7.js","_app/immutable/chunks/singletons-4f84171e.js","_app/immutable/chunks/index-bb96cc25.js","_app/immutable/chunks/Loading-e098347c.js","_app/immutable/chunks/index-a434d751.js","_app/immutable/chunks/window-3d9785aa.js","_app/immutable/chunks/preload-helper-41c905a7.js","_app/immutable/chunks/buffer-8e6379eb.js","_app/immutable/chunks/PopperButton-1074cc5a.js","_app/immutable/chunks/Icon-33dd6fee.js","_app/immutable/chunks/url-fcaf9571.js","_app/immutable/chunks/stores-5cf8d32a.js","_app/immutable/chunks/observer-238713e4.js","_app/immutable/chunks/Header-719d24e0.js"];
const stylesheets = ["_app/immutable/assets/_page-4b0a03eb.css","_app/immutable/assets/Carousel-c8eca61c.css","_app/immutable/assets/CarouselItem-03913a7f.css","_app/immutable/assets/Loading-7564a631.css","_app/immutable/assets/PopperButton-3d4bec04.css","_app/immutable/assets/Icon-e9cb2d4c.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=7-7dcc3d1f.js.map
