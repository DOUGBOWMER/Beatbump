import { o } from './index2-e7fe418e.js';

const p=async({fetch:t,url:a,parent:r})=>{const o$1=await t("/explore.json?browseId=FEmusic_moods_and_genres"),s=await o$1.json();if(!o$1.ok)throw o(500,o$1.statusText);return {response:s,path:a.pathname}};

var _page_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: p
});

const index = 5;
const component = async () => (await import('./_page.svelte-7a5a1ca0.js')).default;
const file = '_app/immutable/components/pages/explore/_page.svelte-79adb8a7.js';
const imports = ["_app/immutable/components/pages/explore/_page.svelte-79adb8a7.js","_app/immutable/chunks/index-02d4e276.js","_app/immutable/chunks/GridItem.svelte_svelte_type_style_lang-5a34bdc2.js","_app/immutable/chunks/observer-238713e4.js","_app/immutable/chunks/navigation-8392efd7.js","_app/immutable/chunks/singletons-4f84171e.js","_app/immutable/chunks/index-bb96cc25.js","_app/immutable/chunks/window-3d9785aa.js","_app/immutable/chunks/preload-helper-41c905a7.js","_app/immutable/chunks/Header-719d24e0.js","_app/immutable/chunks/url-fcaf9571.js","_app/immutable/chunks/stores-5cf8d32a.js","_app/immutable/modules/pages/explore/_page.ts-029b814d.js","_app/immutable/chunks/index-dc735eee.js","_app/immutable/chunks/control-f5b05b5f.js","_app/immutable/chunks/_page-74acce30.js"];
const stylesheets = ["_app/immutable/assets/_page-c5eabec9.css","_app/immutable/assets/GridItem-e3f38a7b.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page_ts as universal };
//# sourceMappingURL=5-f45d0e97.js.map
