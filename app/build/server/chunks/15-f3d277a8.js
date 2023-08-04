const l=async({url:e,params:n,fetch:t})=>{const a=n.slug,s=e.searchParams.get("filter")||"",c=`/api/v1/search.json?q=${a}${s!==""?`&filter=${encodeURIComponent(s)}`:""}`,o=await(await t(c)).json();return Object.assign(o,{filter:s}),console.log(o),o};

var _page_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: l
});

const index = 15;
const component = async () => (await import('./_page.svelte-dff17bdd.js')).default;
const file = '_app/immutable/components/pages/search/_slug_/_page.svelte-47a49c99.js';
const imports = ["_app/immutable/components/pages/search/_slug_/_page.svelte-47a49c99.js","_app/immutable/chunks/index-02d4e276.js","_app/immutable/chunks/stores-5cf8d32a.js","_app/immutable/chunks/singletons-4f84171e.js","_app/immutable/chunks/index-bb96cc25.js","_app/immutable/chunks/navigation-8392efd7.js","_app/immutable/chunks/Listing-f4e34f2e.js","_app/immutable/chunks/Loading-e098347c.js","_app/immutable/chunks/index-a434d751.js","_app/immutable/chunks/window-3d9785aa.js","_app/immutable/chunks/preload-helper-41c905a7.js","_app/immutable/chunks/buffer-8e6379eb.js","_app/immutable/chunks/PopperButton-1074cc5a.js","_app/immutable/chunks/Icon-33dd6fee.js","_app/immutable/chunks/url-fcaf9571.js","_app/immutable/chunks/viewport-7af7a1d2.js","_app/immutable/chunks/Header-719d24e0.js","_app/immutable/modules/pages/search/_slug_/_page.ts-d32182ca.js","_app/immutable/chunks/_page-5916d6d7.js"];
const stylesheets = ["_app/immutable/assets/_page-133ac10b.css","_app/immutable/assets/Listing-a3276042.css","_app/immutable/assets/Loading-7564a631.css","_app/immutable/assets/PopperButton-3d4bec04.css","_app/immutable/assets/Icon-e9cb2d4c.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page_ts as universal };
//# sourceMappingURL=15-f3d277a8.js.map
