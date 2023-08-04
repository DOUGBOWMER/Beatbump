import { y, H, A as A$1, E, B } from './index-02d8ed20.js';

const o=[];function z(n,i){return {subscribe:A(n,i).subscribe}}function A(n,i=y){let u;const t=new Set;function a(e){if(H(n,e)&&(n=e,u)){const r=!o.length;for(const s of t)s[1](),o.push(s,n);if(r){for(let s=0;s<o.length;s+=2)o[s][0](o[s+1]);o.length=0;}}}function l(e){a(e(n));}function f(e,r=y){const s=[e,r];return t.add(s),t.size===1&&(u=i(a)||y),e(n),()=>{t.delete(s),t.size===0&&(u(),u=null);}}return {set:a,update:l,subscribe:f}}function S(n,i,u){const t=!Array.isArray(n),a=t?[n]:n,l=i.length<2;return z(u,f=>{let e=!1;const r=[];let s=0,d=y;const g=()=>{if(s)return;d();const c=i(t?r[0]:r,f);l?f(c):d=B(c)?c:y;},_=a.map((c,p)=>A$1(c,h=>{r[p]=h,s&=~(1<<p),e&&g();},()=>{s|=1<<p;}));return e=!0,g(),function(){E(_),d();}})}

export { A, S, z };
//# sourceMappingURL=index3-a50d3d2e.js.map
