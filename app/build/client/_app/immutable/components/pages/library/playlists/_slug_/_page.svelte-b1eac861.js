import{S as ge,i as be,s as $e,k as A,l as L,m as D,h as b,n as m,b as H,g as ve,N as We,aa as Ze,d as ye,f as q,t as B,a6 as xe,a as F,c as O,I as w,a7 as et,a8 as tt,a9 as st,ab as nt,ac as at,ad as it,F as Oe,X as lt,Z as rt,B as me,T as ot,aq as we,w as j,q as fe,x as W,r as ce,G as ae,y as Z,L as G,M as Pe,u as de,z as x,D as Ye,V as te,P as Ke,ag as ut,$ as Ee,e as he,a1 as ft,A as re,_ as Ae,Q as ct,J as Le,o as dt}from"../../../../../chunks/index-02d4e276.js";import{I as ht}from"../../../../../chunks/InfoBox-eec41e58.js";import{s as _e,b as pt}from"../../../../../chunks/PopperButton-1074cc5a.js";import{K as _t,C as ue,e as mt,l as M,i as gt,o as ke,k as Te,E as qe,A as Ce,M as Ie,J as bt}from"../../../../../chunks/window-3d9785aa.js";import{c as vt}from"../../../../../chunks/index-a434d751.js";import{f as yt,d as wt}from"../../../../../chunks/index-b9eff58d.js";import{H as kt}from"../../../../../chunks/Header-719d24e0.js";import{p as Je}from"../../../../../chunks/stores-5cf8d32a.js";import{C as It}from"../../../../../chunks/CreatePlaylist-4dafb220.js";import{L as Pt}from"../../../../../chunks/ListInfoBar-4384ddb5.js";import{I as Qe}from"../../../../../chunks/Icon-33dd6fee.js";import{C as Xe,f as $t}from"../../../../../chunks/contexts-267137aa.js";import{g as Me}from"../../../../../chunks/navigation-8392efd7.js";import{S as St}from"../../../../../chunks/url-fcaf9571.js";import{d as Et}from"../../../../../chunks/db-c0455258.js";function De(n,e,t){const l=n.slice();return l[5]=e[t],l[7]=t,l}const At=n=>({item:n&1,index:n&1}),Ne=n=>({item:n[5],receive:n[2],send:n[1],hovering:!0,index:n[7]});function Ve(n,e){let t,l,r,s,a,i=me,f;const u=e[4].default,o=xe(u,e,e[3],Ne);return{key:n,first:null,c(){t=A("div"),o&&o.c(),l=F(),this.h()},l(c){t=L(c,"DIV",{class:!0});var v=D(t);o&&o.l(v),l=O(v),v.forEach(b),this.h()},h(){m(t,"class","item-wrapper"),this.first=t},m(c,v){H(c,t,v),o&&o.m(t,null),w(t,l),f=!0},p(c,v){e=c,o&&o.p&&(!f||v&9)&&et(o,u,e,e[3],f?st(u,e[3],v,At):tt(e[3]),Ne)},r(){a=t.getBoundingClientRect()},f(){nt(t),i(),at(t,a)},a(){i(),i=it(t,a,yt,{duration:300})},i(c){f||(q(o,c),Oe(()=>{s&&s.end(1),r=lt(t,e[2],{duration:400,key:e[7]}),r.start()}),f=!0)},o(c){B(o,c),r&&r.invalidate(),s=rt(t,e[1],{duration:400,key:e[7]}),f=!1},d(c){c&&b(t),o&&o.d(c),c&&s&&s.end()}}}function Lt(n){let e,t=[],l=new Map,r,s=n[0];const a=i=>i[7];for(let i=0;i<s.length;i+=1){let f=De(n,s,i),u=a(f);l.set(u,t[i]=Ve(u,f))}return{c(){e=A("div");for(let i=0;i<t.length;i+=1)t[i].c();this.h()},l(i){e=L(i,"DIV",{class:!0});var f=D(e);for(let u=0;u<t.length;u+=1)t[u].l(f);f.forEach(b),this.h()},h(){m(e,"class","list svelte-1p03bw")},m(i,f){H(i,e,f);for(let u=0;u<t.length;u+=1)t[u].m(e,null);r=!0},p(i,[f]){if(f&15){s=i[0],ve();for(let u=0;u<t.length;u+=1)t[u].r();t=We(t,f,a,1,i,s,l,e,Ze,Ve,null,De);for(let u=0;u<t.length;u+=1)t[u].a();ye()}},i(i){if(!r){for(let f=0;f<s.length;f+=1)q(t[f]);r=!0}},o(i){for(let f=0;f<t.length;f+=1)B(t[f]);r=!1},d(i){i&&b(e);for(let f=0;f<t.length;f+=1)t[f].d()}}}function Tt(n,e,t){let{$$slots:l={},$$scope:r}=e,{items:s=[]}=e;const[a,i]=vt({fallback(f,u){const o=getComputedStyle(f),c=o.transform==="none"?"":o.transform;return{duration:600,easing:_t,css:v=>`
					transform: ${c};
					opacity: ${v}
				`}}});return n.$$set=f=>{"items"in f&&t(0,s=f.items),"$$scope"in f&&t(3,r=f.$$scope)},[s,a,i,r,l]}class qt extends ge{constructor(e){super(),be(this,e,Tt,Lt,$e,{items:0})}}const{window:je}=ut;function Be(n,e,t){const l=n.slice();return l[31]=e[t],l}function Re(n){let e,t,l,r,s;return{c(){e=A("div"),t=A("img"),this.h()},l(a){e=L(a,"DIV",{class:!0});var i=D(e);t=L(i,"IMG",{loading:!0,src:!0,width:!0,height:!0,alt:!0,class:!0}),i.forEach(b),this.h()},h(){var a,i,f,u,o,c;m(t,"loading","lazy"),Ee(t.src,l=(i=(a=n[0].thumbnails)==null?void 0:a[0])==null?void 0:i.url)||m(t,"src",l),m(t,"width",r=(u=(f=n[0].thumbnails)==null?void 0:f[0])==null?void 0:u.width),m(t,"height",s=(c=(o=n[0].thumbnails)==null?void 0:o[0])==null?void 0:c.height),m(t,"alt","thumbnail"),m(t,"class","svelte-56ewkd"),m(e,"class","thumbnail svelte-56ewkd")},m(a,i){H(a,e,i),w(e,t)},p(a,i){var f,u,o,c,v,y;i[0]&1&&!Ee(t.src,l=(u=(f=a[0].thumbnails)==null?void 0:f[0])==null?void 0:u.url)&&m(t,"src",l),i[0]&1&&r!==(r=(c=(o=a[0].thumbnails)==null?void 0:o[0])==null?void 0:c.width)&&m(t,"width",r),i[0]&1&&s!==(s=(y=(v=a[0].thumbnails)==null?void 0:v[0])==null?void 0:y.height)&&m(t,"height",s)},d(a){a&&b(e)}}}function Ge(n){let e,t=n[0].explicit?"E":"",l;return{c(){e=A("span"),l=fe(t),this.h()},l(r){e=L(r,"SPAN",{class:!0});var s=D(e);l=ce(s,t),s.forEach(b),this.h()},h(){m(e,"class","explicit")},m(r,s){H(r,e,s),w(e,l)},p(r,s){s[0]&1&&t!==(t=r[0].explicit?"E":"")&&de(l,t)},d(r){r&&b(e)}}}function ze(n){let e,t=n[0].subtitle,l=[];for(let r=0;r<t.length;r+=1)l[r]=Ue(Be(n,t,r));return{c(){for(let r=0;r<l.length;r+=1)l[r].c();e=he()},l(r){for(let s=0;s<l.length;s+=1)l[s].l(r);e=he()},m(r,s){for(let a=0;a<l.length;a+=1)l[a].m(r,s);H(r,e,s)},p(r,s){if(s[0]&1){t=r[0].subtitle;let a;for(a=0;a<t.length;a+=1){const i=Be(r,t,a);l[a]?l[a].p(i,s):(l[a]=Ue(i),l[a].c(),l[a].m(e.parentNode,e))}for(;a<l.length;a+=1)l[a].d(1);l.length=t.length}},d(r){ft(l,r),r&&b(e)}}}function Ct(n){let e,t=n[31].text+"",l,r;return{c(){e=A("span"),l=fe(t),r=F(),this.h()},l(s){e=L(s,"SPAN",{class:!0});var a=D(e);l=ce(a,t),r=O(a),a.forEach(b),this.h()},h(){m(e,"class","svelte-56ewkd")},m(s,a){H(s,e,a),w(e,l),w(e,r)},p(s,a){a[0]&1&&t!==(t=s[31].text+"")&&de(l,t)},d(s){s&&b(e)}}}function Mt(n){let e,t=n[31].text+"",l,r,s,a;function i(){return n[18](n[31])}return{c(){e=A("a"),l=fe(t),this.h()},l(f){e=L(f,"A",{class:!0,href:!0});var u=D(e);l=ce(u,t),u.forEach(b),this.h()},h(){m(e,"class","artist secondary svelte-56ewkd"),m(e,"href",r=`/artist/${n[31].browseId}`)},m(f,u){H(f,e,u),w(e,l),s||(a=G(e,"click",Pe(i)),s=!0)},p(f,u){n=f,u[0]&1&&t!==(t=n[31].text+"")&&de(l,t),u[0]&1&&r!==(r=`/artist/${n[31].browseId}`)&&m(e,"href",r)},d(f){f&&b(e),s=!1,a()}}}function Ue(n){let e;function t(s,a){var i;return(i=s[31])!=null&&i.browseId?Mt:Ct}let l=t(n),r=l(n);return{c(){r.c(),e=he()},l(s){r.l(s),e=he()},m(s,a){r.m(s,a),H(s,e,a)},p(s,a){l===(l=t(s))&&r?r.p(s,a):(r.d(1),r=l(s),r&&(r.c(),r.m(e.parentNode,e)))},d(s){r.d(s),s&&b(e)}}}function Dt(n){var r,s;let e,t=((((s=(r=n[0])==null?void 0:r.length)==null?void 0:s.text)??n[0].length)||"")+"",l;return{c(){e=A("span"),l=fe(t),this.h()},l(a){e=L(a,"SPAN",{class:!0});var i=D(e);l=ce(i,t),i.forEach(b),this.h()},h(){var a;m(e,"class","length svelte-56ewkd"),ae(e,"hidden",!((a=n[0])!=null&&a.length))},m(a,i){H(a,e,i),w(e,l)},p(a,i){var f,u,o;i[0]&1&&t!==(t=((((u=(f=a[0])==null?void 0:f.length)==null?void 0:u.text)??a[0].length)||"")+"")&&de(l,t),i[0]&1&&ae(e,"hidden",!((o=a[0])!=null&&o.length))},i:me,o:me,d(a){a&&b(e)}}}function Nt(n){let e,t,l,r,s;return t=new pt({props:{tabindex:0,items:n[10]}}),{c(){e=A("div"),j(t.$$.fragment),this.h()},l(a){e=L(a,"DIV",{class:!0,tabindex:!0});var i=D(e);W(t.$$.fragment,i),i.forEach(b),this.h()},h(){m(e,"class","length svelte-56ewkd"),m(e,"tabindex","0")},m(a,i){H(a,e,i),Z(t,e,null),l=!0,r||(s=G(e,"focus",n[19]),r=!0)},p:me,i(a){l||(q(t.$$.fragment,a),l=!0)},o(a){B(t.$$.fragment,a),l=!1},d(a){a&&b(e),x(t),r=!1,s()}}}function Vt(n){var Y,h;let e,t,l,r,s,a,i=n[1]+1+"",f,u,o,c=Array.isArray((Y=n[0])==null?void 0:Y.thumbnails)&&n[0].thumbnails.length!==0,v,y,E,N=n[0].title+"",U,R,K,_,g=Array.isArray(n[0].subtitle),V,I,C,z,Q,ee;Oe(n[17]),r=new Qe({props:{name:"play",color:"inherit",size:"1.5em"}});let P=c&&Re(n),$=((h=n[0])==null?void 0:h.explicit)&&Ge(n),S=g&&ze(n);const oe=[Nt,Dt],d=[];function T(p,k){return p[4]||p[5]<640?0:1}return I=T(n),C=d[I]=oe[I](n),{c(){e=A("article"),t=A("div"),l=A("span"),j(r.$$.fragment),s=F(),a=A("span"),f=fe(i),u=F(),o=A("div"),P&&P.c(),v=F(),y=A("div"),E=A("span"),U=fe(N),R=F(),$&&$.c(),K=F(),_=A("div"),S&&S.c(),V=F(),C.c(),this.h()},l(p){e=L(p,"ARTICLE",{class:!0,tabindex:!0,draggable:!0});var k=D(e);t=L(k,"DIV",{class:!0});var J=D(t);l=L(J,"SPAN",{});var se=D(l);W(r.$$.fragment,se),se.forEach(b),s=O(J),a=L(J,"SPAN",{});var ne=D(a);f=ce(ne,i),ne.forEach(b),J.forEach(b),u=O(k),o=L(k,"DIV",{class:!0});var X=D(o);P&&P.l(X),v=O(X),y=L(X,"DIV",{class:!0});var ie=D(y);E=L(ie,"SPAN",{class:!0});var le=D(E);U=ce(le,N),R=O(le),$&&$.l(le),le.forEach(b),K=O(ie),_=L(ie,"DIV",{class:!0});var pe=D(_);S&&S.l(pe),pe.forEach(b),ie.forEach(b),X.forEach(b),V=O(k),C.l(k),k.forEach(b),this.h()},h(){var p;ae(l,"hidden",n[6]!==!0&&n[4]!==!0),ae(a,"hidden",n[6]!==!1||n[4]!==!1),m(t,"class","index svelte-56ewkd"),m(E,"class","title svelte-56ewkd"),m(_,"class","artists secondary svelte-56ewkd"),m(y,"class","column svelte-56ewkd"),m(o,"class","metadata svelte-56ewkd"),m(e,"class","m-item svelte-56ewkd"),m(e,"tabindex","0"),m(e,"draggable",!0),ae(e,"isPlaying",ue.has(n[2].params.slug)&&((p=n[7])==null?void 0:p.length)>0&&n[8]===n[1])},m(p,k){H(p,e,k),w(e,t),w(t,l),Z(r,l,null),w(t,s),w(t,a),w(a,f),w(e,u),w(e,o),P&&P.m(o,null),w(o,v),w(o,y),w(y,E),w(E,U),w(E,R),$&&$.m(E,null),w(y,K),w(y,_),S&&S.m(_,null),w(e,V),d[I].m(e,null),n[20](e),z=!0,Q||(ee=[G(je,"resize",n[17]),G(e,"click",n[11]),G(e,"pointerenter",n[21]),G(e,"pointerleave",n[22]),G(e,"pointerenter",n[23]),G(e,"dragstart",n[15]),G(e,"drop",Pe(n[16])),G(e,"dragover",Pe(Bt)),G(e,"dragenter",n[24]),G(e,"dragend",n[25]),G(e,"mouseenter",n[26],!0),G(e,"pointerleave",n[27])],Q=!0)},p(p,k){var se,ne,X;(!z||k[0]&80)&&ae(l,"hidden",p[6]!==!0&&p[4]!==!0),(!z||k[0]&2)&&i!==(i=p[1]+1+"")&&de(f,i),(!z||k[0]&80)&&ae(a,"hidden",p[6]!==!1||p[4]!==!1),k[0]&1&&(c=Array.isArray((se=p[0])==null?void 0:se.thumbnails)&&p[0].thumbnails.length!==0),c?P?P.p(p,k):(P=Re(p),P.c(),P.m(o,v)):P&&(P.d(1),P=null),(!z||k[0]&1)&&N!==(N=p[0].title+"")&&de(U,N),(ne=p[0])!=null&&ne.explicit?$?$.p(p,k):($=Ge(p),$.c(),$.m(E,null)):$&&($.d(1),$=null),k[0]&1&&(g=Array.isArray(p[0].subtitle)),g?S?S.p(p,k):(S=ze(p),S.c(),S.m(_,null)):S&&(S.d(1),S=null);let J=I;I=T(p),I===J?d[I].p(p,k):(ve(),B(d[J],1,1,()=>{d[J]=null}),ye(),C=d[I],C?C.p(p,k):(C=d[I]=oe[I](p),C.c()),q(C,1),C.m(e,null)),(!z||k[0]&390)&&ae(e,"isPlaying",ue.has(p[2].params.slug)&&((X=p[7])==null?void 0:X.length)>0&&p[8]===p[1])},i(p){z||(q(r.$$.fragment,p),q(C),z=!0)},o(p){B(r.$$.fragment,p),B(C),z=!1},d(p){p&&b(e),x(r),P&&P.d(),$&&$.d(),S&&S.d(),d[I].d(),n[20](null),Q=!1,Ye(ee)}}}const Bt=()=>{};function Rt(n,e,t){let l,r,s,a,i,f,u;te(n,mt,h=>t(7,r=h)),te(n,St,h=>t(28,s=h)),te(n,M,h=>t(13,a=h)),te(n,Je,h=>t(2,i=h)),te(n,ue,h=>t(14,f=h)),te(n,gt,h=>t(8,u=h));let{item:o}=e,{idx:c}=e,{ctx:v={}}=e,y;const E=Ke(),{page:N,parentPlaylistId:U=null}=Xe.get();let R=!1,K=640,_=[{text:"View Artist",icon:"artist",action:async()=>{Me(`/artist/${o!=null&&o.artistInfo?o.artistInfo.artist[0].browseId:o==null?void 0:o.subtitle[0].browseId}`),await re(),window.scrollTo({behavior:"smooth",top:0,left:0})}},{text:"Remove from Playlist",icon:"x",action:async()=>{await Et(U,o.videoId),E("change")}},{text:"Favorite",icon:"heart",action:()=>{_e.sendMessage("create","favorite",o)}},{text:"Share",icon:"share",action:async()=>{var p,k,J,se,ne,X,ie,le,pe;let h={title:o.title,url:`${s}/listen?id=${o.videoId}`};(k=(p=o.endpoint)==null?void 0:p.pageType)!=null&&k.includes("MUSIC_PAGE_TYPE_PLAYLIST")&&(h={title:o.title,url:`${s}/playlist/${(J=o.endpoint)==null?void 0:J.browseId}`}),(ne=(se=o.endpoint)==null?void 0:se.pageType)!=null&&ne.includes("MUSIC_PAGE_TYPE_ALBUM")&&(h={title:o.title,url:`${s}/release?id=${(X=o.endpoint)==null?void 0:X.browseId}`}),(le=(ie=o.endpoint)==null?void 0:ie.pageType)!=null&&le.includes("MUSIC_PAGE_TYPE_ARTIST")&&(h={title:o.title,text:`${o.title} on AlphaTrack`,url:`${s}/artist/${(pe=o.endpoint)==null?void 0:pe.browseId}`});try{if(!navigator.canShare)await navigator.clipboard.writeText(h.url),ke("Link copied successfully","success");else{const Se=await navigator.share(h);ke("Shared successfully","success")}}catch(Se){ke("Error: "+Se,"error")}}}];async function g(h){const p=h.target;if(!(p&&p.nodeName==="A")){if(N==="queue")if(Te.initialized&&Te.hasActiveSession){if(c===0)return qe(void 0,c===0?1:c),M.updatePosition(1),Ce.previous(!1);if(c===r.length-1){M.updatePosition(c===0?0:c-1),M.next(!0,!0),await re();return}M.updatePosition(c===0?0:c-1),qe(void 0,c===0?0:c-1),await re(),M.next(!0,!0)}else{if(c===0)return M.updatePosition(1),await re(),Ce.previous(!1);M.updatePosition(c-1),await re(),M.next(!0,!1)}else N==="playlist"?(M.updatePosition(c),await M.initPlaylistSession({playlistId:o.playlistId,index:c})):N==="library"?(M.updatePosition(c),E("initLocalPlaylist",{idx:c})):await M.initAutoMixSession({loggingContext:o==null?void 0:o.loggingContext,videoId:o.videoId,playlistId:U,keyId:N==="artist"?0:c,config:{playerParams:o==null?void 0:o.playerParams,type:o==null?void 0:o.musicVideoType}});E("setPageIsPlaying",{id:U})}}function V(h){Ae.call(this,n,h)}function I(h){Ae.call(this,n,h)}function C(){t(5,K=je.innerWidth)}const z=h=>{Me(`/artist/${h.browseId}`),$t.set("closed")},Q=()=>t(4,R=!0);function ee(h){ct[h?"unshift":"push"](()=>{y=h,t(3,y)})}const P=h=>{t(4,R=!0)},$=()=>{t(4,R=!1)},S=h=>{y&&y.contains(h.currentTarget)&&t(4,R=!0)},oe=()=>E("hovering",{idx:c}),d=()=>E("notHovering",null),T=h=>{y&&y.contains(h.currentTarget)&&t(4,R=!0)},Y=h=>{y&&y.contains(h.currentTarget)&&t(4,R=!0),t(4,R=!1)};return n.$$set=h=>{"item"in h&&t(0,o=h.item),"idx"in h&&t(1,c=h.idx),"ctx"in h&&t(12,v=h.ctx)},n.$$.update=()=>{var h;n.$$.dirty[0]&24583&&t(6,l=(N!=="queue"&&N!=="release"?f.has(i.params.slug):!0)&&a.mix.length>0&&a.position===c&&((h=a.mix[c])==null?void 0:h.videoId)===o.videoId)},[o,c,i,y,R,K,l,r,u,E,_,g,v,a,f,V,I,C,z,Q,ee,P,$,S,oe,d,T,Y]}class Gt extends ge{constructor(e){super(),be(this,e,Rt,Vt,ot,{item:0,idx:1,ctx:12},null,[-1,-1])}get item(){return this.$$.ctx[0]}set item(e){this.$$set({item:e}),we()}get idx(){return this.$$.ctx[1]}set idx(e){this.$$set({idx:e}),we()}get ctx(){return this.$$.ctx[12]}set ctx(e){this.$$set({ctx:e}),we()}}function zt(n){let e,t,l,r,s,a,i,f;return l=new Qe({props:{name:"search",size:"1rem"}}),{c(){e=A("div"),t=A("div"),j(l.$$.fragment),r=F(),s=A("input"),this.h()},l(u){e=L(u,"DIV",{role:!0,"aria-activedescendant":!0,class:!0});var o=D(e);t=L(o,"DIV",{role:!0,"aria-label":!0,class:!0});var c=D(t);W(l.$$.fragment,c),c.forEach(b),r=O(o),s=L(o,"INPUT",{"aria-placeholder":!0,id:!0,autocomplete:!0,"aria-autocomplete":!0,autocorrect:!0,type:!0,placeholder:!0,class:!0}),o.forEach(b),this.h()},h(){m(t,"role","button"),m(t,"aria-label","search button"),m(t,"class","searchBtn"),m(s,"aria-placeholder","Search"),m(s,"id","searchBox"),m(s,"autocomplete","off"),m(s,"aria-autocomplete","list"),m(s,"autocorrect","off"),m(s,"type","search"),m(s,"placeholder","Search"),m(s,"class","svelte-qk9vun"),m(e,"role","textbox"),m(e,"aria-activedescendant","searchBox"),m(e,"class","input my-1 svelte-qk9vun")},m(u,o){H(u,e,o),w(e,t),Z(l,t,null),w(e,r),w(e,s),Le(s,n[0]),a=!0,i||(f=[G(t,"click",n[2]),G(s,"keyup",n[3]),G(s,"input",n[4])],i=!0)},p(u,[o]){o&1&&Le(s,u[0])},i(u){a||(q(l.$$.fragment,u),a=!0)},o(u){B(l.$$.fragment,u),a=!1},d(u){u&&b(e),x(l),i=!1,Ye(f)}}}function Ut(n,e,t){let l="";const r=Ke(),s=wt(u=>{r("input",{query:l.toLocaleLowerCase()})},120);function a(){r("input",{query:l.toLocaleLowerCase()})}const i=u=>{u.shiftKey&&u.ctrlKey&&u.repeat||s(u)};function f(){l=this.value,t(0,l)}return[l,s,a,i,f]}class Ht extends ge{constructor(e){super(),be(this,e,Ut,zt,$e,{})}}function He(n){var v,y,E,N,U,R,K;let e,t,l,r,s,a,i,f,u,o,c=n[3]&&Fe(n);return l=new ht({props:{thumbnail:(v=n[1])==null?void 0:v.thumbnail,description:(y=n[1])==null?void 0:y.description,title:(E=n[1])==null?void 0:E.name,editable:!0,type:"playlist",subtitles:[(U=(N=n[1])==null?void 0:N.items)==null?void 0:U.length,((K=(R=n[1])==null?void 0:R.items)==null?void 0:K.length)>1?"Songs":"Song"],buttons:[{icon:"play",text:"Start Playlist",action:n[17]},{icon:"shuffle",text:"Shuffle",action:n[18]},{icon:"edit",text:"Edit Playlist",type:"outlined",action:n[19]}]}}),s=new Ht({}),s.$on("input",n[20]),i=new Pt({}),u=new qt({props:{items:n[0],$$slots:{default:[Ft,({item:_,index:g,send:V,receive:I})=>({28:_,29:g,30:V,31:I}),({item:_,index:g,send:V,receive:I})=>[(_?268435456:0)|(g?536870912:0)|(V?1073741824:0),I?1:0]]},$$scope:{ctx:n}}}),{c(){e=A("main"),c&&c.c(),t=F(),j(l.$$.fragment),r=F(),j(s.$$.fragment),a=F(),j(i.$$.fragment),f=F(),j(u.$$.fragment)},l(_){e=L(_,"MAIN",{});var g=D(e);c&&c.l(g),t=O(g),W(l.$$.fragment,g),r=O(g),W(s.$$.fragment,g),a=O(g),W(i.$$.fragment,g),f=O(g),W(u.$$.fragment,g),g.forEach(b)},m(_,g){H(_,e,g),c&&c.m(e,null),w(e,t),Z(l,e,null),w(e,r),Z(s,e,null),w(e,a),Z(i,e,null),w(e,f),Z(u,e,null),o=!0},p(_,g){var C,z,Q,ee,P,$,S;_[3]?c?(c.p(_,g),g[0]&8&&q(c,1)):(c=Fe(_),c.c(),q(c,1),c.m(e,t)):c&&(ve(),B(c,1,1,()=>{c=null}),ye());const V={};g[0]&2&&(V.thumbnail=(C=_[1])==null?void 0:C.thumbnail),g[0]&2&&(V.description=(z=_[1])==null?void 0:z.description),g[0]&2&&(V.title=(Q=_[1])==null?void 0:Q.name),g[0]&2&&(V.subtitles=[(P=(ee=_[1])==null?void 0:ee.items)==null?void 0:P.length,((S=($=_[1])==null?void 0:$.items)==null?void 0:S.length)>1?"Songs":"Song"]),g[0]&137&&(V.buttons=[{icon:"play",text:"Start Playlist",action:_[17]},{icon:"shuffle",text:"Shuffle",action:_[18]},{icon:"edit",text:"Edit Playlist",type:"outlined",action:_[19]}]),l.$set(V);const I={};g[0]&1&&(I.items=_[0]),g[0]&805306801|g[1]&2&&(I.$$scope={dirty:g,ctx:_}),u.$set(I)},i(_){o||(q(c),q(l.$$.fragment,_),q(s.$$.fragment,_),q(i.$$.fragment,_),q(u.$$.fragment,_),o=!0)},o(_){B(c),B(l.$$.fragment,_),B(s.$$.fragment,_),B(i.$$.fragment,_),B(u.$$.fragment,_),o=!1},d(_){_&&b(e),c&&c.d(),x(l),x(s),x(i),x(u)}}}function Fe(n){var l,r,s,a;let e,t;return e=new It({props:{defaults:{name:(l=n[1])==null?void 0:l.name,thumbnail:(r=n[1])==null?void 0:r.thumbnail,description:(s=n[1])==null?void 0:s.description,id:(a=n[1])==null?void 0:a.id},hasFocus:!0,isLocalPlaylist:!0}}),e.$on("close",n[14]),e.$on("cancel",n[15]),e.$on("submit",n[16]),{c(){j(e.$$.fragment)},l(i){W(e.$$.fragment,i)},m(i,f){Z(e,i,f),t=!0},p(i,f){var o,c,v,y;const u={};f[0]&2&&(u.defaults={name:(o=i[1])==null?void 0:o.name,thumbnail:(c=i[1])==null?void 0:c.thumbnail,description:(v=i[1])==null?void 0:v.description,id:(y=i[1])==null?void 0:y.id}),e.$set(u)},i(i){t||(q(e.$$.fragment,i),t=!0)},o(i){B(e.$$.fragment,i),t=!1},d(i){x(e,i)}}}function Ft(n){let e,t;function l(...s){return n[23](n[29],...s)}function r(...s){return n[25](n[29],...s)}return e=new Gt({props:{item:n[28],idx:n[29]}}),e.$on("hovering",n[21]),e.$on("notHovering",n[22]),e.$on("dragstart",l),e.$on("change",n[24]),e.$on("drop",r),e.$on("initLocalPlaylist",n[26]),e.$on("setPageIsPlaying",n[27]),{c(){j(e.$$.fragment)},l(s){W(e.$$.fragment,s)},m(s,a){Z(e,s,a),t=!0},p(s,a){n=s;const i={};a[0]&268435456&&(i.item=n[28]),a[0]&536870912&&(i.idx=n[29]),e.$set(i)},i(s){t||(q(e.$$.fragment,s),t=!0)},o(s){B(e.$$.fragment,s),t=!1},d(s){x(e,s)}}}function Ot(n){let e,t,l,r;e=new kt({props:{desc:"Playlist",title:"Playlist",url:"/library"}});let s=n[1]!==void 0&&He(n);return{c(){j(e.$$.fragment),t=F(),s&&s.c(),l=he()},l(a){W(e.$$.fragment,a),t=O(a),s&&s.l(a),l=he()},m(a,i){Z(e,a,i),H(a,t,i),s&&s.m(a,i),H(a,l,i),r=!0},p(a,i){a[1]!==void 0?s?(s.p(a,i),i[0]&2&&q(s,1)):(s=He(a),s.c(),q(s,1),s.m(l.parentNode,l)):s&&(ve(),B(s,1,1,()=>{s=null}),ye())},i(a){r||(q(e.$$.fragment,a),q(s),r=!0)},o(a){B(e.$$.fragment,a),B(s),r=!1},d(a){x(e,a),a&&b(t),s&&s.d(a),a&&b(l)}}}function Yt(n,e,t){let l,r,s;te(n,Je,d=>t(6,l=d)),te(n,M,d=>t(7,r=d)),te(n,ue,d=>t(8,s=d));let{data:a}=e;const{playlistName:i}=a;Xe.set({page:"library"});let f=[],u,o,c,v=!1;async function y(){const d=await _e.sendMessage("get","playlist",i);t(1,u={}),Object.assign(u,d),t(1,u),t(0,f=u.items),t(2,o=u==null?void 0:u.thumbnail)}dt(async()=>{await y()});const E=async(d,T)=>{if(v)return;d.dataTransfer.dropEffect="move";const Y=parseInt(d.dataTransfer.getData("text/plain")),h=f;Y<T?(h.splice(T+1,0,h[Y]),h.splice(Y,1)):(h.splice(T,0,h[Y]),h.splice(Y+1,1)),t(0,f=h)},N=(d,T)=>{d.dataTransfer.effectAllowed="move",d.dataTransfer.dropEffect="move";const Y=T;d.dataTransfer.setData("text/plain",Y)};let U=!1;const R=()=>t(3,c=!1),K=()=>t(3,c=!1),_=async({detail:d})=>{await _e.sendMessage("update","playlist",{thumbnail:d==null?void 0:d.thumbnail,id:l.params.slug,name:d==null?void 0:d.title,description:d==null?void 0:d.description}),t(2,o=d==null?void 0:d.thumbnail),t(1,u={...u,thumbnail:d.thumbnail,name:d.title,description:d==null?void 0:d.description}),t(3,c=!1)},g=async()=>{var d;M.updatePosition(0),M.setMix([...f],"local"),ue.add(i),await Ie((d=f[0])==null?void 0:d.videoId)},V=async()=>{var d;M.shuffleRandom(f),M.updatePosition(0),await Ie((d=r.mix[0])==null?void 0:d.videoId)},I=async()=>{t(3,c=!0)},C=({detail:d})=>{t(4,v=d.query.length!==0),t(0,f=bt(u.items,T=>T.title&&T.title.toLocaleLowerCase().includes(d==null?void 0:d.query)))},z=({detail:d})=>t(5,U=d==null?void 0:d.idx),Q=()=>t(5,U=null),ee=(d,T)=>N(T,d),P=async d=>y(),$=async(d,T)=>{v||(E(T,d),await re(),await _e.sendMessage("update","playlist",{items:[...f],id:i,hideAlert:!0}))},S=async({detail:d})=>{var T;!s.has(i)&&M.setMix(f),await re(),await Ie((T=r.mix[d.idx])==null?void 0:T.videoId)},oe=()=>{ue.add(i)};return n.$$set=d=>{"data"in d&&t(13,a=d.data)},[f,u,o,c,v,U,l,r,s,i,y,E,N,a,R,K,_,g,V,I,C,z,Q,ee,P,$,S,oe]}class rs extends ge{constructor(e){super(),be(this,e,Yt,Ot,$e,{data:13},null,[-1,-1])}}export{rs as default};
