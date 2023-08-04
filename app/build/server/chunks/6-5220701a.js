const l=async({url:t,params:a,fetch:e})=>{const s=await e(`/explore/${a.slug}.json`),{sections:n,data:o,header:p,type:r}=await s.json();let c=t.pathname;return {sections:n,header:p,data:o,type:r,path:c}};

var _page_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: l
});

const index = 6;
const component = async () => (await import('./_page.svelte-37e49335.js')).default;
const file = '_app/immutable/components/pages/explore/_slug_/_page.svelte-7818304b.js';
const imports = ["_app/immutable/components/pages/explore/_slug_/_page.svelte-7818304b.js","_app/immutable/chunks/index-02d4e276.js","_app/immutable/chunks/Carousel-82017a45.js","_app/immutable/chunks/CarouselItem-5dcf21ee.js","_app/immutable/chunks/navigation-8392efd7.js","_app/immutable/chunks/singletons-4f84171e.js","_app/immutable/chunks/index-bb96cc25.js","_app/immutable/chunks/Loading-e098347c.js","_app/immutable/chunks/index-a434d751.js","_app/immutable/chunks/window-3d9785aa.js","_app/immutable/chunks/preload-helper-41c905a7.js","_app/immutable/chunks/buffer-8e6379eb.js","_app/immutable/chunks/PopperButton-1074cc5a.js","_app/immutable/chunks/Icon-33dd6fee.js","_app/immutable/chunks/url-fcaf9571.js","_app/immutable/chunks/stores-5cf8d32a.js","_app/immutable/chunks/observer-238713e4.js","_app/immutable/chunks/GridItem.svelte_svelte_type_style_lang-5a34bdc2.js","_app/immutable/chunks/Header-719d24e0.js","_app/immutable/modules/pages/explore/_slug_/_page.ts-92cacfd6.js","_app/immutable/chunks/_page-e229a4fa.js"];
const stylesheets = ["_app/immutable/assets/Carousel-c8eca61c.css","_app/immutable/assets/CarouselItem-03913a7f.css","_app/immutable/assets/Loading-7564a631.css","_app/immutable/assets/PopperButton-3d4bec04.css","_app/immutable/assets/Icon-e9cb2d4c.css","_app/immutable/assets/GridItem-e3f38a7b.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page_ts as universal };
//# sourceMappingURL=6-5220701a.js.map
