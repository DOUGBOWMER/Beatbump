const r=async({params:t,fetch:e,url:a})=>{const s=await e(`/trending/new/${t.slug}.json${a.searchParams.get("params")?`?params=${a.searchParams.get("params")}`:""}${a.searchParams.get("itct")?`&itct=${encodeURIComponent(a.searchParams.get("itct"))}`:""}`),n=await s.json();if(s.ok)return n};

var _page_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: r
});

const index = 20;
const component = async () => (await import('./_page.svelte-04308a53.js')).default;
const file = '_app/immutable/components/pages/trending/new/_slug_/_page.svelte-8de1825b.js';
const imports = ["_app/immutable/components/pages/trending/new/_slug_/_page.svelte-8de1825b.js","_app/immutable/chunks/index-02d4e276.js","_app/immutable/chunks/Header-719d24e0.js","_app/immutable/chunks/index-bb96cc25.js","_app/immutable/chunks/window-3d9785aa.js","_app/immutable/chunks/preload-helper-41c905a7.js","_app/immutable/chunks/url-fcaf9571.js","_app/immutable/chunks/stores-5cf8d32a.js","_app/immutable/chunks/singletons-4f84171e.js","_app/immutable/chunks/GridItem.svelte_svelte_type_style_lang-5a34bdc2.js","_app/immutable/chunks/observer-238713e4.js","_app/immutable/chunks/navigation-8392efd7.js","_app/immutable/chunks/Carousel-82017a45.js","_app/immutable/chunks/CarouselItem-5dcf21ee.js","_app/immutable/chunks/Loading-e098347c.js","_app/immutable/chunks/index-a434d751.js","_app/immutable/chunks/buffer-8e6379eb.js","_app/immutable/chunks/PopperButton-1074cc5a.js","_app/immutable/chunks/Icon-33dd6fee.js","_app/immutable/modules/pages/trending/new/_slug_/_page.ts-25339151.js","_app/immutable/chunks/_page-cc6b5101.js"];
const stylesheets = ["_app/immutable/assets/_page-269a9b3e.css","_app/immutable/assets/GridItem-e3f38a7b.css","_app/immutable/assets/Carousel-c8eca61c.css","_app/immutable/assets/CarouselItem-03913a7f.css","_app/immutable/assets/Loading-7564a631.css","_app/immutable/assets/PopperButton-3d4bec04.css","_app/immutable/assets/Icon-e9cb2d4c.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page_ts as universal };
//# sourceMappingURL=20-c6136efb.js.map
