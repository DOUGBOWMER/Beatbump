import { o } from './index2-e7fe418e.js';

const e=async({fetch:o$1})=>await o$1("/trending.json?q=browse").then(t=>{if(!t.ok)throw o(t.status,t.statusText);return t.json()});

var _page_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: e
});

const index = 19;
const component = async () => (await import('./_page.svelte-698c4728.js')).default;
const file = '_app/immutable/components/pages/trending/_page.svelte-43605e24.js';
const imports = ["_app/immutable/components/pages/trending/_page.svelte-43605e24.js","_app/immutable/chunks/index-02d4e276.js","_app/immutable/chunks/Carousel-82017a45.js","_app/immutable/chunks/CarouselItem-5dcf21ee.js","_app/immutable/chunks/navigation-8392efd7.js","_app/immutable/chunks/singletons-4f84171e.js","_app/immutable/chunks/index-bb96cc25.js","_app/immutable/chunks/Loading-e098347c.js","_app/immutable/chunks/index-a434d751.js","_app/immutable/chunks/window-3d9785aa.js","_app/immutable/chunks/preload-helper-41c905a7.js","_app/immutable/chunks/buffer-8e6379eb.js","_app/immutable/chunks/PopperButton-1074cc5a.js","_app/immutable/chunks/Icon-33dd6fee.js","_app/immutable/chunks/url-fcaf9571.js","_app/immutable/chunks/stores-5cf8d32a.js","_app/immutable/chunks/observer-238713e4.js","_app/immutable/chunks/Header-719d24e0.js","_app/immutable/modules/pages/trending/_page.ts-3c6b52fe.js","_app/immutable/chunks/index-dc735eee.js","_app/immutable/chunks/control-f5b05b5f.js","_app/immutable/chunks/_page-c1e16469.js"];
const stylesheets = ["_app/immutable/assets/_page-a89e6aa7.css","_app/immutable/assets/Carousel-c8eca61c.css","_app/immutable/assets/CarouselItem-03913a7f.css","_app/immutable/assets/Loading-7564a631.css","_app/immutable/assets/PopperButton-3d4bec04.css","_app/immutable/assets/Icon-e9cb2d4c.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page_ts as universal };
//# sourceMappingURL=19-e15b0265.js.map
