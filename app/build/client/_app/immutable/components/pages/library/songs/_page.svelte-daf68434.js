import{S as ne,i as re,s as ae,k as m,q as B,a as T,l as g,m as v,r as V,h as u,c as z,n as S,F as ce,b as $,I as f,K as G,L as J,N as ie,t as C,d as se,f as I,D as _e,ao as fe,o as ue,e as Q,g as oe,a1 as he,E as pe,O as de,B as me,R as ge,w as ve,x as ye,y as ke,z as be}from"../../../../chunks/index-02d4e276.js";import{L as Ee}from"../../../../chunks/Listing-f4e34f2e.js";import{s as W}from"../../../../chunks/PopperButton-1074cc5a.js";function X(o,s,l){const a=o.slice();return a[4]=s[l],a}function x(o,s,l){const a=o.slice();return a[7]=s[l],a[9]=l,a}function ee(o,s){let l,a=s[7].label+"",e;return{key:o,first:null,c(){l=m("option"),e=B(a),this.h()},l(c){l=g(c,"OPTION",{});var t=v(l);e=V(t,a),t.forEach(u),this.h()},h(){l.__value=s[9],l.value=l.__value,this.first=l},m(c,t){$(c,l,t),f(l,e)},p(c,t){s=c},d(c){c&&u(l)}}}function te(o){let s,l;return s=new Ee({props:{data:o[4]}}),{c(){ve(s.$$.fragment)},l(a){ye(s.$$.fragment,a)},m(a,e){ke(s,a,e),l=!0},p(a,e){const c={};e&2&&(c.data=a[4]),s.$set(c)},i(a){l||(I(s.$$.fragment,a),l=!0)},o(a){C(s.$$.fragment,a),l=!1},d(a){be(s,a)}}}function le(o){let s,l,a=o[1],e=[];for(let t=0;t<a.length;t+=1)e[t]=te(X(o,a,t));const c=t=>C(e[t],1,1,()=>{e[t]=null});return{c(){for(let t=0;t<e.length;t+=1)e[t].c();s=Q()},l(t){for(let r=0;r<e.length;r+=1)e[r].l(t);s=Q()},m(t,r){for(let n=0;n<e.length;n+=1)e[n].m(t,r);$(t,s,r),l=!0},p(t,r){if(r&2){a=t[1];let n;for(n=0;n<a.length;n+=1){const k=X(t,a,n);e[n]?(e[n].p(k,r),I(e[n],1)):(e[n]=te(k),e[n].c(),I(e[n],1),e[n].m(s.parentNode,s))}for(oe(),n=a.length;n<e.length;n+=1)c(n);se()}},i(t){if(!l){for(let r=0;r<a.length;r+=1)I(e[r]);l=!0}},o(t){e=e.filter(Boolean);for(let r=0;r<e.length;r+=1)C(e[r]);l=!1},d(t){he(e,t),t&&u(s)}}}function Se(o){let s,l,a,e,c,t,r,n,k,M,b,h,d=[],P=new Map,O,E,Y=o[1],L,A,Z,N=o[2];const F=i=>i[7].params;for(let i=0;i<N.length;i+=1){let _=x(o,N,i),y=F(_);P.set(y,d[i]=ee(y,_))}let p=le(o);return{c(){s=m("main"),l=m("h1"),a=B("Your Songs"),e=T(),c=m("section"),t=m("div"),r=m("div"),n=m("label"),k=B("Sort"),M=T(),b=m("div"),h=m("select");for(let i=0;i<d.length;i+=1)d[i].c();O=T(),E=m("section"),p.c(),this.h()},l(i){s=g(i,"MAIN",{});var _=v(s);l=g(_,"H1",{});var y=v(l);a=V(y,"Your Songs"),y.forEach(u),e=z(_),c=g(_,"SECTION",{});var q=v(c);t=g(q,"DIV",{class:!0});var H=v(t);r=g(H,"DIV",{class:!0});var w=v(r);n=g(w,"LABEL",{for:!0,class:!0});var K=v(n);k=V(K,"Sort"),K.forEach(u),M=z(w),b=g(w,"DIV",{class:!0});var R=v(b);h=g(R,"SELECT",{id:!0});var U=v(h);for(let D=0;D<d.length;D+=1)d[D].l(U);U.forEach(u),R.forEach(u),w.forEach(u),H.forEach(u),O=z(q),E=g(q,"SECTION",{});var j=v(E);p.l(j),j.forEach(u),q.forEach(u),_.forEach(u),this.h()},h(){S(n,"for","select"),S(n,"class","svelte-qsy2vp"),S(h,"id","select"),o[0]===void 0&&ce(()=>o[3].call(h)),S(b,"class","select"),S(r,"class","ctx-item svelte-qsy2vp"),S(t,"class","filter svelte-qsy2vp")},m(i,_){$(i,s,_),f(s,l),f(l,a),f(s,e),f(s,c),f(c,t),f(t,r),f(r,n),f(n,k),f(r,M),f(r,b),f(b,h);for(let y=0;y<d.length;y+=1)d[y].m(h,null);G(h,o[0]),f(c,O),f(c,E),p.m(E,null),L=!0,A||(Z=[J(h,"change",o[3]),J(h,"change",function(){pe(o[2][o[0]].action)&&o[2][o[0]].action.apply(this,arguments)})],A=!0)},p(i,[_]){o=i,_&4&&(N=o[2],d=ie(d,_,F,1,o,N,P,h,de,ee,null,x)),_&5&&G(h,o[0]),_&2&&ae(Y,Y=o[1])?(oe(),C(p,1,1,me),se(),p=le(o),p.c(),I(p,1),p.m(E,null)):p.p(o,_)},i(i){L||(I(p),L=!0)},o(i){C(p),L=!1},d(i){i&&u(s);for(let _=0;_<d.length;_+=1)d[_].d();p.d(i),A=!1,_e(Z)}}}function Ie(o,s,l){let a,e=[];fe({},"library"),ue(()=>(async()=>{l(1,e=await W.sendMessage("get","favorites"))})());let c=[{label:"Unsorted",params:"nosort",action:async()=>{l(1,e=await W.sendMessage("get","favorites"))}},{label:"A-Z",params:"az",action:()=>{l(1,e=[...e.sort((r,n)=>r.title.localeCompare(n.title))])}},{label:"Z-A",params:"za",action:()=>{l(1,e=[...e.sort((r,n)=>n.title.localeCompare(r.title))])}}];function t(){a=ge(this),l(0,a),l(2,c)}return[a,e,c,t]}class qe extends ne{constructor(s){super(),re(this,s,Ie,Se,ae,{})}}export{qe as default};
