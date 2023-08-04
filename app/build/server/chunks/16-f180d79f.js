class o{static toBase64(t){return btoa(t)}static fromBase64(t){return atob(t)}}const r=async({url:a})=>{const t=o.fromBase64(decodeURIComponent(a.searchParams.get("token")));try{const{clientId:e,displayName:s}=JSON.parse(t);return {hostId:e,hostDisplayName:s,url:a.pathname+`?${a.searchParams.toString()}`}}catch(e){throw e(500,e)}};

var _page_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: r
});

const index = 16;
const component = async () => (await import('./_page.svelte-09d42486.js')).default;
const file = '_app/immutable/components/pages/session/_page.svelte-904ac128.js';
const imports = ["_app/immutable/components/pages/session/_page.svelte-904ac128.js","_app/immutable/chunks/index-02d4e276.js","_app/immutable/chunks/window-3d9785aa.js","_app/immutable/chunks/index-bb96cc25.js","_app/immutable/chunks/preload-helper-41c905a7.js","_app/immutable/chunks/strings-7c502f3a.js","_app/immutable/chunks/Header-719d24e0.js","_app/immutable/chunks/url-fcaf9571.js","_app/immutable/chunks/stores-5cf8d32a.js","_app/immutable/chunks/singletons-4f84171e.js","_app/immutable/chunks/Button-7bf5be0a.js","_app/immutable/chunks/Icon-33dd6fee.js","_app/immutable/modules/pages/session/_page.ts-495dd845.js","_app/immutable/chunks/buffer-8e6379eb.js","_app/immutable/chunks/_page-f3e36964.js"];
const stylesheets = ["_app/immutable/assets/Icon-e9cb2d4c.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page_ts as universal };
//# sourceMappingURL=16-f180d79f.js.map
