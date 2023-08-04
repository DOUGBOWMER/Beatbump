import { o } from './index2-e7fe418e.js';

const d=async({fetch:s,url:t,params:e})=>{let r=t.searchParams.get("params"),o$1=t.searchParams.get("itct"),i=t.searchParams.get("visitorData");const a=await s(`/artist/${e.slug}/releases.json?visitorData=${i}&params=${r}&itct=${encodeURIComponent(o$1)}`);if(!a.ok)throw o(500,a.statusText);const n=await a.json(),{header:c,contents:m}=n;return {header:c,contents:m}};

var _page_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: d
});

const index = 4;
const component = async () => (await import('./_page.svelte-e00fbed7.js')).default;
const file = '_app/immutable/components/pages/artist/_slug_/releases/_page.svelte-0dc8b5c4.js';
const imports = ["_app/immutable/components/pages/artist/_slug_/releases/_page.svelte-0dc8b5c4.js","_app/immutable/chunks/index-02d4e276.js","_app/immutable/chunks/CarouselItem-5dcf21ee.js","_app/immutable/chunks/navigation-8392efd7.js","_app/immutable/chunks/singletons-4f84171e.js","_app/immutable/chunks/index-bb96cc25.js","_app/immutable/chunks/Loading-e098347c.js","_app/immutable/chunks/index-a434d751.js","_app/immutable/chunks/window-3d9785aa.js","_app/immutable/chunks/preload-helper-41c905a7.js","_app/immutable/chunks/buffer-8e6379eb.js","_app/immutable/chunks/PopperButton-1074cc5a.js","_app/immutable/chunks/Icon-33dd6fee.js","_app/immutable/chunks/url-fcaf9571.js","_app/immutable/chunks/stores-5cf8d32a.js","_app/immutable/chunks/GridItem.svelte_svelte_type_style_lang-5a34bdc2.js","_app/immutable/chunks/observer-238713e4.js","_app/immutable/modules/pages/artist/_slug_/releases/_page.ts-7a770b94.js","_app/immutable/chunks/index-dc735eee.js","_app/immutable/chunks/control-f5b05b5f.js","_app/immutable/chunks/_page-78895bd1.js"];
const stylesheets = ["_app/immutable/assets/CarouselItem-03913a7f.css","_app/immutable/assets/Loading-7564a631.css","_app/immutable/assets/PopperButton-3d4bec04.css","_app/immutable/assets/Icon-e9cb2d4c.css","_app/immutable/assets/GridItem-e3f38a7b.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page_ts as universal };
//# sourceMappingURL=4-aac7ce95.js.map
