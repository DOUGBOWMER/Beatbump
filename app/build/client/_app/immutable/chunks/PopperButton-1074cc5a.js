var y=Object.defineProperty;var z=(t,e,n)=>e in t?y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var _=(t,e,n)=>(z(t,typeof e!="symbol"?e+"":e,n),n);import{o as b}from"./window-3d9785aa.js";import{al as E,S as L,i as S,T as I,k as P,w as R,l as x,m as C,x as B,h as v,n as f,b as N,y as O,U as W,E as D,f as U,t as j,z as M}from"./index-02d4e276.js";import{I as q}from"./Icon-33dd6fee.js";import{w as p}from"./index-bb96cc25.js";class T{constructor(){_(this,"worker",null)}async setup(){return this.worker?this.worker:new Worker(new URL(""+new URL("../workers/worker-c5d6f69e.js",import.meta.url).href,self.location),{name:"idb"})}async sendMessage(e,n,...i){return this.worker===null&&(this.worker=await this.setup()),await new Promise((a,o)=>{function l(r){const{data:s}=r;s.error&&b(s.message,"error"),s.message&&b(s.message,"success"),s.data&&(this.worker.onmessage=null,a(s.data)),this.worker.onmessage=null,a(s.data)}this.worker.onmessage=l,this.worker.postMessage({action:e,type:n,params:i})})}}const Z=new T,k=V();function V(){const{set:t,subscribe:e}=p({items:[],isOpen:!1,type:""});return{subscribe:e,set:n=>{d.set(!0),t(n)},reset:()=>(d.set(!1),t({items:[],isOpen:!1,type:void 0,x:void 0,y:void 0,bottom:void 0}),!1)}}const d=p(!1),m=A();function A(){const{subscribe:t,set:e}=p();return{subscribe:t,set:n=>{e(n)},get:()=>E(m)}}function F(t){let e,n,i,a,o,l;return n=new q({props:{color:"#f2f2f2",size:t[3],name:"dots"}}),{c(){e=P("div"),R(n.$$.fragment),this.h()},l(r){e=x(r,"DIV",{class:!0,role:!0,"aria-label":!0,tabindex:!0});var s=C(e);B(n.$$.fragment,s),s.forEach(v),this.h()},h(){f(e,"class","dd-button svelte-gbizax"),f(e,"role","button"),f(e,"aria-label","menu"),f(e,"tabindex",t[4])},m(r,s){N(r,e,s),O(n,e,null),a=!0,o||(l=W(i=G.call(null,e,{items:t[0],metadata:t[2],type:t[1]})),o=!0)},p(r,[s]){const u={};s&8&&(u.size=r[3]),n.$set(u),(!a||s&16)&&f(e,"tabindex",r[4]),i&&D(i.update)&&s&7&&i.update.call(null,{items:r[0],metadata:r[2],type:r[1]})},i(r){a||(U(n.$$.fragment,r),a=!0)},o(r){j(n.$$.fragment,r),a=!1},d(r){r&&v(e),M(n),o=!1,l()}}}function G(t,{items:e=[],type:n="",metadata:i={}}){let a,o,l,r=!1;const s=c=>{c.key==="Space"&&(t.click(),r=!1)};function u(c){r&&!t.contains(c.target)&&!t.isSameNode(c.target)&&(d.set(!1),r=!1,k.reset(),m.set(new WeakRef({value:null})))}function g(c){var h;if(c.stopPropagation(),((h=m.get())==null?void 0:h.deref())===t){r=!1,k.reset(),m.set(new WeakRef({value:null}));return}else r=!0,m.set(new WeakRef(t));const w=t.getBoundingClientRect();console.log(i),a=w.left,o=w.top,l=w.bottom,d.set(!0),k.set({items:e,srcNode:t,direction:"normal",isOpen:!0,type:n,x:a,y:o,metadata:i,bottom:l})}return t.addEventListener("click",g),t.addEventListener("keydown",s,{capture:!0}),document.addEventListener("click",u,{capture:!0}),{destroy(){document.removeEventListener("click",u,!0),t.removeEventListener("click",g,!0),t.removeEventListener("keydown",s,!0)}}}function H(t,e,n){let{items:i=[]}=e,{type:a=""}=e,{metadata:o={}}=e,{size:l="1.8rem"}=e,{tabindex:r=0}=e;return t.$$set=s=>{"items"in s&&n(0,i=s.items),"type"in s&&n(1,a=s.type),"metadata"in s&&n(2,o=s.metadata),"size"in s&&n(3,l=s.size),"tabindex"in s&&n(4,r=s.tabindex)},[i,a,o,l,r]}class $ extends L{constructor(e){super(),S(this,e,H,F,I,{items:0,type:1,metadata:2,size:3,tabindex:4})}}export{k as P,m as a,$ as b,d as i,Z as s};