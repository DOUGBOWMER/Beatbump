import { c as ct, A as A$1, o as ot, u as ut, j } from './index-02d8ed20.js';
import { A as A$2 } from './index3-a50d3d2e.js';
import { v as ie } from './utils-c5816fb5.js';
import { e } from './url-764d83e3.js';

const R={title:"AlphaTrack",description:"Unlock your music",url:"https://alphatrack.ml/",type:"website",image:"https://alphatrack.ml/favicon.png","og:image":"/favicon.png","og:description":"Unlock your music","og:type":"website","og:url":"https://alphatrack.ml/"},A=()=>{const{subscribe:d,set:a,update:i}=A$2(R);let n="https://alphatrack.ml";const m=t=>i(e=>({...e,description:t,"og:description":t})),u=t=>i(e=>({...e,title:t,"og:title":t})),o=t=>i(e=>({...e,"og:url":n+t,url:n+t})),g=t=>i(e=>({...e,image:t,"og:image":t}));return {subscribe:d,set:a,title:u,url:o,desc:m,image:g,init:(t,e,l,r,s=t+"/favicon.png")=>{t&&(n=n),e&&u(e),l&&o(l),r&&m(r),s&&g(s);}}},_=A(),O=ct((d,a,i,n)=>{let m,u,o,g,h,t;u=A$1(e,c=>m=c),g=A$1(_,c=>o=c),t=A$1(ie,c=>h=c);let{title:e$1}=a,{desc:l=""}=a,{url:r}=a,{image:s="/favicon.png"}=a;return _.init(m,e$1,r,l,s),a.title===void 0&&i.title&&e$1!==void 0&&i.title(e$1),a.desc===void 0&&i.desc&&l!==void 0&&i.desc(l),a.url===void 0&&i.url&&r!==void 0&&i.url(r),a.image===void 0&&i.image&&s!==void 0&&i.image(s),u(),g(),t(),`${d.head+=`<!-- HEAD_svelte-1cieh2e_START -->${ot(Object.entries(o),([c,p])=>`${p?`${["title","description","image"].includes(c)?`<meta${ut("name",c,0)}${ut("content",p,0)}>`:`<meta${ut("property",c,0)}${ut("content",p,0)}>`}`:""}`)}${d.title=`<title>${j(h||o.title)} - AlphaTrack</title>`,""}<!-- HEAD_svelte-1cieh2e_END -->`,""}`});

export { O };
//# sourceMappingURL=Header-d9be3441.js.map
