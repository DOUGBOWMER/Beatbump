const l=/=w\d+-h\d+-/gm;function i(n){const t={url:"",placeholder:""};if(!n.includes("lh3.googleusercontent.com")){const r=n.split("?")[0];return t.url=r,t.placeholder=r?.replace("sddefault","default"),t}const e=n?.replace("-rj","-rw");return t.url=e,t.placeholder=e?.replace(l,"=w1-h1-fSoften=50,50,05-"),t}function p(n){const t=n.length;let e=-1;for(;++e<t;){const o=n[e];if(o.navigationEndpoint===void 0){n[e]=o;continue}n[e]={text:o.text,browseId:o.navigationEndpoint.browseEndpoint?.browseId,pageType:o.navigationEndpoint.browseEndpoint.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType};}return n}

export { i, p };
//# sourceMappingURL=utils.parsers-3568cb71.js.map
