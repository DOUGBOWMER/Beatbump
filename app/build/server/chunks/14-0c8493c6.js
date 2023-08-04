const c=async({url:s,fetch:n})=>{const e=s.pathname,a=s.searchParams.get("id")||"",o=s.searchParams.get("type")||"",t=await n(`/api/v1/main.json?q=&endpoint=browse${a?`&browseId=${a}`:""}${o?`&pt=${o}`:""}`),r=await t.json();return t.ok?{data:r,id:a,path:e}:{status:t.status,msg:t.body}};

var _page_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: c
});

const index = 14;
const component = async () => (await import('./_page.svelte-8a02ef37.js')).default;
const file = '_app/immutable/components/pages/release/_page.svelte-f49af597.js';
const imports = ["_app/immutable/components/pages/release/_page.svelte-f49af597.js","_app/immutable/chunks/index-02d4e276.js","_app/immutable/chunks/ListItem-5c39b9db.js","_app/immutable/chunks/window-3d9785aa.js","_app/immutable/chunks/index-bb96cc25.js","_app/immutable/chunks/preload-helper-41c905a7.js","_app/immutable/chunks/stores-5cf8d32a.js","_app/immutable/chunks/singletons-4f84171e.js","_app/immutable/chunks/Icon-33dd6fee.js","_app/immutable/chunks/contexts-267137aa.js","_app/immutable/chunks/PopperButton-1074cc5a.js","_app/immutable/chunks/navigation-8392efd7.js","_app/immutable/chunks/url-fcaf9571.js","_app/immutable/chunks/InfoBox-eec41e58.js","_app/immutable/chunks/Button-7bf5be0a.js","_app/immutable/chunks/Header-719d24e0.js","_app/immutable/modules/pages/release/_page.ts-7f5cc3b5.js","_app/immutable/chunks/_page-a7b525ba.js"];
const stylesheets = ["_app/immutable/assets/ListItem-8b990e7d.css","_app/immutable/assets/Icon-e9cb2d4c.css","_app/immutable/assets/PopperButton-3d4bec04.css","_app/immutable/assets/InfoBox-c0b6b8e4.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page_ts as universal };
//# sourceMappingURL=14-0c8493c6.js.map
