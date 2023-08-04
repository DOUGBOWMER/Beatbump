import { J as J$1, e as et$1, X as X$1, Q as Q$1, U as U$1, N as N$1 } from './index-02d8ed20.js';
import { S, z, A } from './index3-a50d3d2e.js';

const s=!1;

const ct=s;function ut(i,t,e){let s=e,n=i.length,r=-1;for(;++r<n;)s=t(s,i[r],r,i);return n=null,r=null,s}function T(i,t){for(let e=0;e<i.length;e++)t(i[e],e,i);}function ht(i,t){const e=Array(i.length);for(let s=0;s<i.length;s++)e[s]=t(i[s],s,i);return e}function dt(i,t,e){const s=[];for(let n=0;n<i.length;n++){const r=t(i[n],n,i);e(r)&&s.push(r);}return s}function F(i,t){let e=-1,s=0;const n=[],r=i.length;for(;++e<r;)t(i[e])&&(n[s]=i[e],s++);return n}function K(i,t,e,...s){const n=i.slice(t,t+e);let r=[];return s||(r=[...i.slice(0,t),...i.slice(t+e)]),r=[...i.slice(0,t),...s,...i.slice(t+e)],i.length=0,i.push.apply(i,r),n}function pt(i,t){let e=-1;const s=i.length;for(;++e<s;)if(!t(i[e]))return !1;return !0}function X(i){let t="";for(const e in i)t+=` ${e}="${`${i[e]}`.toString().replace('"','\\"')}"`;return t}function ft(i){let t="<";return i.name&&(t+=i.name),i.attrs&&(t+=X(i.attrs)),t+=i.nodes||i.text?">":"/>",i.text&&(t+=`${i.text}`.replace(/&amp;/g,"&").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")),i.nodes&&(t+=tt(i.nodes)),(i.nodes||i.text)&&(t+=`</${i.name}>`),t}function Z(i,t=0){return `<?xml${X(i.attrs)}?>`}function tt(i){return ut(i,(e,s)=>{switch(s.type){case"element":return e+ft(s);case"declaration":return e+Z(s)}},"")}function gt(i){let t="",e=0;return i.declaration&&(t+=Z(i.declaration,e)),i.nodes&&(t+=tt(i.nodes)),console.log(t),t}function mt(i){return {type:"element",name:"Representation",attrs:{id:i.itag,codecs:i.mimeType.split(" ")[1].match(/"[^"]*/)[0].substr(1),bandwidth:i.bitrate},nodes:[{type:"element",name:"AudioChannelConfiguration",attrs:{schemeIdUri:"urn:mpeg:dash:23003:3:audio_channel_configuration:2011",value:"2"}},{type:"element",name:"BaseURL",text:i.url},{type:"element",name:"SegmentBase",attrs:{indexRange:`${i.indexRange.start}-${i.indexRange.end}`},nodes:[{type:"element",name:"Initialization",attrs:{range:`${i.initRange.start}-${i.initRange.end}`}}]}]}}function yt(i){return {type:"element",name:"Representation",attrs:{id:i.itag,codecs:i.mimeType.split(" ")[1].match(/"[^"]*/)[0].substr(1),bandwidth:i.bitrate,width:i.width,height:i.height,maxPlayoutRate:"1",frameRate:i.fps},nodes:[{type:"element",name:"BaseURL",text:i.url},{type:"element",name:"SegmentBase",attrs:{indexRange:`${i.indexRange.start}-${i.indexRange.end}`},nodes:[{type:"element",name:"Initialization",attrs:{range:`${i.initRange.start}-${i.initRange.end}`}}]}]}}function _t(i){const t=[],e=[],s=[[]];T(i,n=>{if(n.mimeType.indexOf("video")!==-1&&!n?.videoOnly)return;const r=n.mimeType,a=e.indexOf(r);a>-1?s[a].push(n):(e.push(r),s.push([]),s[e.length-1].push(n));});for(let n=0;n<e.length;n++){let r=!1;const a={type:"element",name:"AdaptationSet",attrs:{id:n,mimeType:e[n].split("; ")[0],startWithSAP:"1",subsegmentAlignment:"true"},nodes:[]};e[n].includes("audio")||(a.attrs.scanType="progressive",r=!0),T(s[n],o=>{r?a.nodes.push(yt(o)):a.nodes.push(mt(o));}),t.push(a);}return t}function St(i,t){const e={declaration:{type:"declaration",attrs:{version:"1.0",encoding:"utf-8"}},nodes:[{type:"element",name:"MPD",attrs:{xmlns:"urn:mpeg:dash:schema:mpd:2011",profiles:"urn:mpeg:dash:profile:full:2011","xmlns:yt":"http://youtube.com/yt/2012/10/10",minBufferTime:"PT1.5S",type:"static",mediaPresentationDuration:`PT${t}S`},nodes:[{type:"element",name:"Period",nodes:_t(i)}]}]};return gt(e)}const Q={normal:"useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",alternative:"useandom26T198340PX75pxJACKVERYMINDBUSHWOLFGQZbfghjklqvwyzrict"},xt={generate:(i=16,t="normal")=>{let e="",s=i;for(;s--;)e+=Q[t][Math.random()*Q[t].length|0];return e}};function vt(i=16,t="normal"){return xt.generate(i,t)}const V={dev:"[DEV] ",debug:"[DEBUG] ",log:"[LOG] ",err:"[ERROR] "};function Pt(i){Array.isArray(i)?console.log(V.debug,...i):console.log(V.debug,i);}function bt(...i){arguments.length>1?console.log("[LOG]",...i):console.log("[LOG]",i);}function wt(...i){arguments.length>1?console.error("[ERROR]",...i):console.error("[ERROR]",i);}function Tt(...i){}const g={dev:Tt,debug:Pt,log:bt,err:wt};function j(){}class kt{_value;observers;constructor(t){this._value=t,this.observers=[],this.subscribe=this.subscribe.bind(this),this.notifyObservers=this.notifyObservers.bind(this);}get value(){return this._value}subscribe(t){return this.observers.push(t),t(this.value),()=>{K(this.observers,this.observers.indexOf(t),1);}}notifyObservers(t){T(this.observers,e=>{e(this.value,t);});}}class _ extends kt{constructor(t){super(t),this.set=this.set.bind(this),this.update=this.update.bind(this),this.subscribe=this.subscribe.bind(this);}get value(){return this._value}set value(t){if(this._value!=t){const e=this._value;this._value=t,this.onValueChanged(e);}}set(t){this.value=t;}async updateAsync(t){this.value=await t(this.value);}update(t){this.value=t(this.value);}onValueChanged(t){this.notifyObservers(t);}}const I=(i,t,e)=>{let s=e;const n=t.length<2;let r=j;const{subscribe:a}=S(i,(o,h)=>{s=o;const c=t(o,h);if(n)h(c);else return r=typeof c=="function"?c:j,r},e);return {subscribe:a,get value(){return s}}},At=i=>{let t=i.replace("https://","").split("/");return t=t[2]!==void 0?t[2]:t[1],i="https://redirector.googlevideo.com/"+t,i};function It({data:i={},WebM:t=!1,dash:e=!1,proxyUrl:s=""}){let n;if(e===!0){const c=new URL(s),p=ht(i?.streamingData?.adaptiveFormats,b=>{const x=new URL(b.url),L=x.host;return x.host=c.host??"yt-hls-rewriter.onrender.com",x.searchParams.set("host",L),{...b,url:x.toString()}}),d=i?.videoDetails?.lengthSeconds,m=St(p,d);n="data:application/dash+xml;charset=utf-8;base64,"+btoa(m);}const r=i?.playerConfig?.hlsProxyConfig?.hlsChunkHost,a=i?.streamingData?.adaptiveFormats,o=(i?.streamingData?.hlsManifestUrl).replace(/https:\/\/(.*?)\//,s!==""?s:"https://yt-hls-rewriter.onrender.com/")+("?host="+r),h=dt(a,c=>{if(c.itag<139&&c.itag>251)return null;if(t===!0&&c.itag===251)return {original_url:c.url,url:At(c.url),mimeType:"webm"};if(c.itag===140)return {original_url:c.url,url:c.url,mimeType:"mp4"}},c=>!!c);return {hls:o,dash:n,streams:h}}function Lt(i){const t=i-1;return t*t*t+1}function te(i){return Math.pow(i-1,3)*(1-i)+1}function G(i){return Object.prototype.toString.call(i)==="[object Date]"}function U(i,t){if(i===t||i!==i)return ()=>i;const e=typeof i;if(e!==typeof t||Array.isArray(i)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(i)){const s=t.map((n,r)=>U(i[r],n));return n=>s.map(r=>r(n))}if(e==="object"){if(!i||!t)throw new Error("Object cannot be null");if(G(i)&&G(t)){i=i.getTime(),t=t.getTime();const r=t-i;return a=>new Date(i+a*r)}const s=Object.keys(t),n={};return s.forEach(r=>{n[r]=U(i[r],t[r]);}),r=>{const a={};return s.forEach(o=>{a[o]=n[o](r);}),a}}if(e==="number"){const s=t-i;return n=>i+n*s}throw new Error(`Cannot interpolate ${e} values`)}function Mt(i,t={}){const e=A(i);let s,n=i;function r(a,o){if(i==null)return e.set(i=a),Promise.resolve();n=a;let h=s,c=!1,{delay:p=0,duration:d=400,easing:m=N$1,interpolate:b=U}=X$1(X$1({},t),o);if(d===0)return h&&(h.abort(),h=null),e.set(i=n),Promise.resolve();const x=Q$1()+p;let L;return s=U$1($=>{if($<x)return !0;c||(L=b(i,a),typeof d=="function"&&(d=d(i,a)),c=!0),h&&(h.abort(),h=null);const D=$-x;return D>d?(e.set(i=a),!1):(e.set(i=L(m(D/d))),!0)}),s.promise}return {set:r,update:(a,o)=>r(a(n,i),o),subscribe:e.subscribe}}class N{__target;_eventQueue=new WeakMap;constructor(t){this.__target=t;}dispatch(t,e){const s=this._eventQueue.get(this.__target);if(!s)return;const n=s.get(t);if(!n)return;const r=n.length;let a=-1;for(;++a<r;)n[a](e);}dispose(){this._eventQueue!==null&&this._eventQueue.delete(this.__target),this._eventQueue=null;}off(t,e){const s=this._eventQueue.get(this.__target);if(s){if(t===void 0){s.clear();return}if(e===void 0){s.delete(t);return}}}on(t,e){if(!this.__target)return;const s=this._eventQueue.get(this.__target)??new Map,n=s.get(t)??[];s.set(t,n.concat(e)),this._eventQueue.set(this.__target,s);}once(t,e){if(!this.__target)return;const s=n=>{this.off(t,s),e(n);};this.on(t,s);}}const M=new N({}),ee=function(){return {send(i,t){M.dispatch(i,t);},listen(i,t){M.on(i,t);},dispose(){M.dispose();},off(i,t){M.off(i,t);}}}();class Rt{#e=[];#i=[];#t;constructor(t=3){this.#t=t;}isLocked(){return this.#t<=0}async do(t){const[e,s]=await this.acquire();try{return await t()}finally{queueMicrotask(s);}}acquire(t=1){if(t<=0)throw new Error("Value must be greater than 0. Received: #{value}");return new Promise((e,s)=>{this.#e[t-1]||(this.#e[t-1]=[]),this.#e[t-1].push({resolve:e,reject:s}),this.#s();})}waitForUnlock(t=1){if(t<=0)throw new Error("Value must be greater than 0. Received: #{value}");return new Promise((e,s)=>{this.#i[t-1]||(this.#i[t-1]=[]),this.#i[t-1].push(e),queueMicrotask(this.#s);})}setValue(t){this.#t=t,this.#s();}release(t){this.#t+=t,this.#s();}getValue(){return this.#t}cancel(){const t=this.#e.length;let e=-1;for(;++e<t;){const s=this.#e[e],n=s.length;let r=-1;for(;++r<n;)s[r].reject(null);}this.#e=[];}#s(){for(let t=this.#t;t>0;t--){const e=this.#e[t-1]?.shift();if(!e)continue;const s=this.#t,n=t;this.#t-=t,t=this.#t+1,e.resolve([s,this.#n(n)]);}this.#r();}#n(t){let e=!1;return ()=>{e||(e=!0,this.release(t));}}#r(){for(let t=this.#t;t>0;t--)this.#i[t-1]&&(this.#i[t-1].forEach(e=>e()),this.#i[t-1]=[]);}}class et extends Rt{constructor(){super(1);}}const Et="https:/alphainfinity3.com/donate";let Ct={appearance:{Theme:"Dark","Immersive Queue":!0},playback:{"Dedupe Automix":!1,Quality:"Normal","Prefer WebM Audio":!1,Stream:"HTTP"},appinfo:{Donate:Et,GitHub:"https://github.com/snuffyDev/AlphaTrack"},network:{"HLS Stream Proxy":"https://yt-hls-rewriter.onrender.com/"},search:{Preserve:"Category"}};const k=Ot();function Ot(){return A(Ct)}const ie=A(void 0),se=I(k,i=>i.appearance.Theme),Ht=I(k,i=>i?.playback["Dedupe Automix"]);I(k,i=>i?.playback["Prefer WebM Audio"]);const ne=I(k,i=>i?.search?.Preserve),re=I(k,i=>i?.appearance["Immersive Queue"]),Ut=Nt();function Nt(){const{set:i,subscribe:t,update:e}=A([]);let s=-1;return {subscribe:t,add:({msg:n,type:r,action:a})=>{e(o=>[...o,{msg:n,type:r,action:a,id:++s}]);},remove:({id:n})=>{e(r=>F(r,a=>a.id!==n));}}}const ae=$t();function $t(){const i=new Set(["player-queue"]),{subscribe:t,set:e}=A(i);return {subscribe:t,add(s){i.add(s),e(i);},clear(){i.clear(),e(i);},has(s){return i.has(s)},remove(s){i.has(s)&&i.delete(s);}}}const J=A(!1),oe=A({state:!1}),le=A(!1);class Dt extends N{_allCanPlay=!1;_client;_connection;_connectionStates=new _({});_connections=[];_hasActiveSession=!1;_history=new _([]);_initialized=!1;_once=!1;_peerIds=new Set([]);_peerJs;_rtc;_settings;_type;_unsubscriber;_lock;constructor(){super({}),this._lock=new et,this._unsubscriber=this._connectionStates.subscribe(async t=>{const e=Object.values(t);!this._once&&!this._allCanPlay&&e.length!==0&&pt(e,s=>s?.finished===!0)===!0&&(this._once=!0,this._allCanPlay=!0,await u.next(!0,!1),setTimeout(()=>this._once=!1,25));});}get client(){return this._client}get connection(){return this._connection}get connections(){return this._connections}get hasActiveSession(){return this._hasActiveSession}get history(){return this._history}get initialized(){return this._initialized}get rtc(){return this._rtc}get settings(){return this._settings}get type(){return this._type}async addToQueue(t,e){!this.initialized&&!this.hasActiveSession||await this._lock.do(()=>{u.setTrackWillPlayNext(t,e).then(()=>{this.send("PUT","state.update.mix",u.toJSON(),this.client);});});}allCanPlay(){return [this._allCanPlay,()=>{this._once=!1,this._allCanPlay=!1;}]}connect(t){if(!this._rtc)return;if(this._peerIds.has(t))return f(`Already connected to peer ${t}!`,"error");this._hasActiveSession||(this._hasActiveSession=!0);const e=this._rtc.connect(t,{metadata:{clientId:this.client.clientId,displayName:this.client.displayName,permissions:{},role:"guest"},reliable:!0,serialization:"binary"});this._peerIds.add(t),this._connections.push(e),this.listenToConnection(e),e.on("open",()=>{g.debug(`Established connection to ${t}`),f(`Connected to ${e.peer}`,"success");}),e.on("close",()=>{this.disconnect();});}disconnect(){this._peerIds.clear(),this.type==="guest"&&(this._connection.close(),this._rtc.destroy()),T(this._connections,t=>{t.close();}),this._rtc.destroy(),this._unsubscriber(),this._hasActiveSession=!1,this._initialized=!1,this._connectionStates.set(null);}expAutoMix(t){this.send("PUT","state.set.mix",JSON.stringify(t),this.client);}init(t,e,s={forceSync:!0}){if(this.initialized)return;this._initialized=!0,this._settings=s;const n="bbgs_"+vt(9,"alternative");this._client={clientId:n,displayName:t,role:e||"guest"},this._rtc=new this._peerJs(n,{debug:3}),this._hasActiveSession||(this._hasActiveSession=!0),this._connectionStates.update(r=>({...r,[this._client.clientId]:{finished:!1,paused:!1,playing:!1,pos:0,stalled:!1}})),this._rtc.on("open",r=>{e==="host"&&this.initSession(),this.dispatch("init");});}process(t){if(typeof t!="string")return;const{command:e,data:s,metadata:n,type:r}=JSON.parse(t);if(n.clientId!==this.client.clientId)return this._lock.do(()=>{if(e==="GET"&&r==="action.mix.init"&&u.initAutoMixSession({videoId:s}),e==="CONFIG"&&(this._settings=s),e==="PUT"){if(r==="state.set.mix")try{const a=JSON.parse(s);u.set(a),v(a.mix[a.position].videoId,a.mix[a.position].playlistId).then(o=>{P.updateSrc(o.body),P.play();});}catch(a){if(a.message){console.log(a);const o=parseInt(a.message.match(/\d+$/g)?.at(0));a.message.includes("position")?console.log(s.slice(0,o),s.slice(o)):console.error(a);}}if(r==="state.update.continuation"){const a=JSON.parse(s);if(!a.mix&&!a.mix.length)throw new Error("Provided SessionList is not valid!",{});new Promise(o=>{setTimeout(()=>{o(u.lockedSet(a));});}).then(o=>{u.updatePosition(o.position-1),u.next(!0,!1);});}if(e==="PUT"&&r==="state.update.mix")try{const a=JSON.parse(s);if(!a.mix&&!a.mix.length)throw new Error("Provided SessionList is not valid!",{});u.set(a);}catch{console.error();}}if(e==="PATCH"){if(r==="state.update.position"){const{dir:a=void 0,position:o=0}=s;u.updatePosition(o===0?0:o),typeof a>"u"&&P.skip(),a==="<-"?P.previous(!1):a==="->"&&u.next(!0,!1);}r==="state"&&this._connectionStates.update(a=>({...a,[s.client]:s.state}));}return {command:e,data:s,metadata:n,type:r}})}send(t,e,s,n){this._initialized&&T(this._connections,r=>{this.client.clientId!==r.peer&&n.clientId!==r.peer&&r.send(JSON.stringify({command:t,type:e,data:s,metadata:this.client}),!0);});}sendGroupState(t){this._connectionStates.update(e=>({...e,[this.client.clientId]:t.state})),this.send("PATCH","state",t,this.client);}setAutoMix(t,{videoId:e="",playlistId:s=""}){return this.initializeHostPlayback("automix",{videoId:e,playlistId:s})}setPlaylistMix(t=""){return this.initializeHostPlayback("playlist",{playlistId:t})}updateGuestContinuation(t){this.send("PUT","state.update.continuation",JSON.stringify(t),this._client);}updateGuestTrackQueue(t){this.send("PUT","state.update.mix",JSON.stringify(t),this._client);}initSession(){f("Started Host Session","success"),this._connectionStates.update(t=>({...t,[this.client.clientId]:{finished:!1,paused:!0,playing:!1,pos:0,stalled:!1}})),this._rtc.on("connection",t=>{this._connections.push(t),this.listenToConnection(t),g.debug("Received connection"),t.on("open",()=>{this._peerIds.add(t.peer),t.send(JSON.stringify({data:this.settings,command:"CONFIG",metadata:this.client,type:"state"})),t.send(JSON.stringify({data:[...this._peerIds.values()],command:"CONNECT",metadata:this.client,type:"action"})),J$1(u).mix.length&&t.send(JSON.stringify({command:"PUT",type:"state.set.mix",data:u.toJSON(),metadata:this.client}),!0);});});}initializeHostPlayback(t,e={videoId:"",playlistId:""}){try{return t==="automix"?u.initAutoMixSession({videoId:e?.videoId,playlistId:e?.playlistId}).then(()=>{this.send("PUT","state.set.mix",u.toJSON(),this.client);}):t==="playlist"&&u.initPlaylistSession({index:0,playlistId:e?.playlistId}).then(()=>{this.send("PUT","state.set.mix",u.toJSON(),this.client);}),"OK"}catch(s){return console.error(s),"ERROR"}}listenToConnection(t){t.on("data",async e=>{const s=await this.process(e);if(s.metadata.clientId===this.client.clientId)return f(s.metadata.clientId+"  "+this.client.clientId,"error");if(s.command==="CONNECT"&&Array.isArray(s.data)){const n=F(s.data,a=>a!==this.client.clientId),r=Object.keys(this._rtc.connections);T(n,a=>{r.includes(a)||this.connect(a);});return}this.send(s.command,s.type,s.data,s.metadata);}),t.on("close",()=>{this._connectionStates.update(e=>({...e,[t.peer]:null}));});}}const l=new Dt;function zt(i=[]){return i.filter((t=>e=>!t.has(e.videoId)&&t.add(e.videoId))(new Set))}function w(i={}){const t=Ft(i);return fetch("/api/v1/next.json?"+t,{headers:{accept:"application/json"}}).then(e=>e.json()).catch(e=>{console.error(e);})}const W=new et;function R(){return J.set(!0),()=>J.set(!1)}const q=["clickTrackingParams","continuation","currentMixId","currentMixType","visitorData","related","mix","position"];class Qt{$=new _(void 0);state={clickTrackingParams:"",continuation:"",currentMixId:"",currentMixType:null,visitorData:"",mix:[],position:0,related:null};constructor(){this.$.set(this.state);}get clickTrackingParams(){return this.state.clickTrackingParams}get continuation(){return this.state.continuation}get currentMixId(){return this.state.currentMixId}get mix(){return this.state.mix.slice()}get position(){return this.state.position}get set(){return this.$.set}get value(){return this.state}get subscribe(){return this.$.subscribe}get update(){return this.$.update}currentTrack(t=0){return this.state.mix?.[t]}async next(t=!1,e=!1){let s=this.state.position+1;s>=this.state.mix.length&&(s=this.state.position);const n=this.currentTrack(s),r=await w({visitorData:this.state?.visitorData,params:encodeURIComponent("OAHyAQIIAQ=="),playlistSetVideoId:n?.playlistSetVideoId,index:s,loggingContext:n?.loggingContext?.vssLoggingContext?.serializedContextData,videoId:n?.videoId,playlistId:this.currentMixId,clickTracking:this?.clickTrackingParams});r&&(await this.sanitizeAndUpdate("APPLY",r),await P.next(t,e));}async previous(t=!1){const e=await w({visitorData:this.state?.visitorData,params:encodeURIComponent("OAHyAQIIAQ=="),playlistSetVideoId:this.state.mix[this.position]?.playlistSetVideoId,index:this.state.position,loggingContext:this.currentTrack?.loggingContext?.vssLoggingContext?.serializedContextData,videoId:this.currentTrack?.videoId,playlistId:this.currentMixId,ctoken:this?.continuation,clickTracking:this?.clickTrackingParams});e&&(this.state.related=e.related,await this.sanitizeAndUpdate("APPLY",e),await P.next(!0,!0));}async getMoreLikeThis({playlistId:t}){const e=R();await et$1();try{const s=await w({params:"wAEB8gECeAE%3D",playlistId:t!==null?t.startsWith("RDAMPL")?t:"RDAMPL"+t:this.state.currentMixId});if(!s||!s.results.length)throw new Error("Invalid response returned by `next` endpoint");this.state.mix.length&&s.results.shift();const n=await this.sanitizeAndUpdate("APPLY",{...s,mix:["append",s.results]});l?.initialized&&l?.hasActiveSession&&l.updateGuestTrackQueue(n),await v(this.state.mix[this.state.position+1].videoId,this.state.mix[this.state.position].playlistId,null,!1);}catch(s){g.err(s),f(s,"error");}finally{e();}}async getSessionContinuation({clickTrackingParams:t,ctoken:e,itct:s,key:n,playlistId:r,videoId:a,loggingContext:o}){const h=R();await et$1();try{!t&&!e&&(r=r.startsWith("RDAMPL")?r:"RDAMPL"+r,s="wAEB8gECeAE%3D");const c=await w({visitorData:this.state.visitorData,params:encodeURIComponent("OAHyAQIIAQ=="),playlistSetVideoId:this.state.mix[n]?.playlistSetVideoId,index:n,loggingContext:o?.vssLoggingContext?.serializedContextData,videoId:a,playlistId:r,ctoken:e,clickTracking:t});if(!c||!(Array.isArray(c.results)&&c.results.length)){this.getMoreLikeThis({playlistId:r});return}const p=c.results,d=await this.sanitizeAndUpdate("APPLY",{...c,mix:["append",p]}),m=await v(this.state.mix[n].videoId);return l?.initialized&&l?.hasActiveSession&&l.updateGuestContinuation(d),m.body}catch(c){g.err(c);}finally{h();}}async initAutoMixSession(t){const e=R();try{const{loggingContext:s,keyId:n,clickTracking:r,config:a,playlistId:o,playlistSetVideoId:h,videoId:c}=t;await et$1();let p=!1;this.state.mix&&(p=!0,this.revertState()),this.state.currentMixType="auto";const d=await w({params:a?.playerParams?a?.playerParams:void 0,videoId:c,playlistId:o||void 0,loggingContext:s?s.vssLoggingContext?.serializedContextData:void 0,playlistSetVideoId:h||void 0,clickTracking:r,configType:a?.type||void 0});if(!d||!Array.isArray(d.results))throw new Error("Invalid response was returned from `next` endpoint.");const m=d.results[n??0];v(c??m?.videoId,m?.playlistId,a?.playerParams);const b=await this.sanitizeAndUpdate(p?"SET":"APPLY",{...this.state,...d,mix:["append",d.results]});l?.initialized&&l?.hasActiveSession&&l.expAutoMix(b);}catch(s){g.err(s);}finally{e();}}async initPlaylistSession(t){const e=R();try{let{playlistId:s="",index:n=0,clickTrackingParams:r="",params:a="",videoId:o="",playlistSetVideoId:h="",visitorData:c=""}=t;await et$1(),console.log("this.initPlaylistSession"),(this.state.currentMixType!=="playlist"||this.state.currentMixId!==s)&&this.updatePosition(typeof n=="number"?n:0),this.state.currentMixId!==s&&this.revertState();const p=await w({params:a,playlistId:s.startsWith("VL")?s.slice(2):s,clickTracking:r,visitorData:c,playlistSetVideoId:h,videoId:o});if(!p||!Array.isArray(p.results))throw new Error("Invalid response returned from `next` endpoint.");if(!p.results.length){this.getMoreLikeThis({playlistId:s});return}const d=await this.sanitizeAndUpdate("APPLY",{...p,mix:["set",p.results],currentMixType:"playlist"});return await et$1(),l?.initialized&&l?.hasActiveSession&&l.expAutoMix(d),await v(this.state.mix[n]?.videoId,s,null,!0)}catch(s){return g.err(s),f("Error starting playlist playback.","error"),null}finally{e();}}lockedSet(t){return W.do(async()=>(this.$.set(t),Promise.resolve(this.state)))}removeTrack(t){this.state.mix.splice(t,1),this.$.update(e=>({...e,mix:[...e.mix.slice(0,t),...e.mix.slice(t+1)]}));}async setMix(t,e){const s=await W.do(async()=>(await et$1(),new Promise(n=>{this.sanitizeAndUpdate("SET",{...this.state,mix:["set",t],currentMixType:e}),n(this.state);})));l?.initialized&&l?.hasActiveSession&&l.send("PUT","state.set.mix",JSON.stringify(s),l.client);}async setTrackWillPlayNext(t,e){if(await et$1(),!t){f("No track to remove was provided!","error");return}try{const s=await qt(t),n=this.state.mix.length;K(this.state.mix,e+1,0,...s),await this.sanitizeAndUpdate("APPLY",{mix:["set",this.state.mix]}),n||await v(this.state.mix[0].videoId,this.state.mix[0].playlistId,null,!0);}catch(s){console.error(s),f(`Error: ${s}`,"error");}}shuffle(t,e=!0){if(typeof t!="number")return;e?this.state.mix=[...this.state.mix.slice().slice(0,t),this.state.mix[t],...O(this.state.mix.slice().slice(t+1),crypto.getRandomValues(new Uint8Array(8)).reduce((n,r)=>n+=r,0))]:this.state.mix=O(this.state.mix.slice(),crypto.getRandomValues(new Uint8Array(8)).reduce((n,r)=>n+=r,0));const s=this.sanitizeAndUpdate("APPLY",{mix:this.state.mix});l?.initialized&&l?.hasActiveSession&&l.updateGuestTrackQueue(s);}shuffleRandom(t){this.state.mix=O(t,crypto.getRandomValues(new Uint8Array(8)).reduce((s,n)=>s+=n,0));const e=this.sanitizeAndUpdate("SET",{mix:this.state.mix});l?.initialized&&l?.hasActiveSession&&l.updateGuestTrackQueue(e);}toJSON(){return JSON.stringify(this.state)}updatePosition(t){return typeof t=="number"?(this.sanitizeAndUpdate("APPLY",{position:t}),t):(t==="next"&&this.sanitizeAndUpdate("APPLY",{position:this.state.position+1}),t==="back"&&this.sanitizeAndUpdate("APPLY",{position:this.state.position-1}),this.state.position)}revertState(){return this.state={clickTrackingParams:"",continuation:"",currentMixId:"",currentMixType:null,mix:[],visitorData:"",position:0,related:null},this.state}async sanitizeAndUpdate(t,e){return await this.$.updateAsync(s=>new Promise(n=>{if(t==="APPLY"){let r,a;for(r in e)if(a=e[r],a!=null&&a!=null){if(!q.includes(r)){console.log("SKIPPING INVALID KEY",r);continue}if(r==="related"&&s[r]?.browseId===e[r]?.browseId){s.related=null;continue}if(s[r]===e[r]){console.log("SKIPPING UNCHANGED",r);continue}r==="mix"?(e.mix[0]==="append"?s.mix.push(...e.mix[1]):e.mix[0]==="set"&&(s.mix=e.mix[1]),Ht.value&&(s.mix=zt(s.mix))):e[r]!==void 0&&e[r]!==null&&(s[r]=e[r]);}Object.assign(this.state,s),n({...s,...this.state});}else {const{mix:r}=e;for(const a in e)q.includes(a)||delete e[a];n({...e,mix:r[1]?r[1]:s.mix});}})),this.$.value}}const Vt=new Qt,u=Vt,ce=S(u,i=>i.mix),ue=S(u,i=>i.mix[i.position]),he=S(u,i=>i.position),de=(()=>{let i;const{subscribe:t}=S(u,(e,s)=>{try{(async()=>e.position!==i&&e.related!==null&&await fetch(`/api/v1/related.json?browseId=${e.related?.browseId}`).then(n=>n.json()).then(s))();}catch(n){g.err(n);}});return {subscribe:t}})();function it(i){return t=>()=>{}}const pe=z(!1,it()),fe=z(!1,it());function st(i){return t=>()=>{}}const ge=z(0,st()),me=z(0,st()),jt=new Map,Y=i=>l.sendGroupState(i),C=(i,t)=>l.send("PATCH","state.update.position",{dir:i,position:t},l.client);function B(i){if(typeof i!="string")throw Error(`Expected parameter 'currentUrl' to be a string, received ${i}`);const t=new URL(i);if(!t.hostname.includes("googlevideo.com"))return i;const[e,s,n]=t.hostname.split("."),r=t.searchParams.get("fvip"),a=t.searchParams.get("mn");let[o,h]=e.split("---");return o=o.replace(/\d/g,r),h=a.split(",")[1],t.hostname=`${`${o}---${h}`}.${s}.${n}`,t.toString()}function Gt(i){return i.url!==void 0}class Jt extends N{_HLS;_HLSModule;_isDisposed=!1;__srcUrl;__tick=!1;__unsubscriber;_currentTime=0;_currentTimeStore=new _(0);_currentTimeUnsubscriber;_duration=50;_durationStore=new _(50);_durationUnsubscriber;_hasNextSrc=!1;_initialized=!1;_isWebkit=!1;_nextTrackURL;_paused=new _(!0);_player;_remainingTime=0;_repeat="off";playerType=void 0;_src=new _("");_worksWithHLSjs=new _(!1);_streamType;currentSessionList=()=>J$1(u);errorCount=-1;isHLSPlayer=!1;progress=Mt(0,{duration:this._duration,easing:Lt});constructor(){super({});}get currentTime(){if(!this._player)return this._player.currentTime??this._currentTime}get currentTimeStore(){if(this._player)return this._currentTimeStore}get duration(){if(this._player)return this._duration}get durationStore(){if(this._player)return this._durationStore}set isSeeking(t){this.isSeeking=t;}get isWebkit(){return this._isWebkit}get paused(){return this._paused}get player(){return this._player}get seeking(){return this.isSeeking}get src(){return this._src}set time(t){this._currentTimeStore.set(t);}set volume(t){if(!(!this._player&&!ct)&&(this._player.volume=t,typeof localStorage<"u"))try{localStorage.setItem("volume",`${t}`);}catch(e){g.err("Cannot save to localStorage",e);}}get hasFinishedPlayback(){return this._player.currentTime>=this._player.duration}dispose(){}async next(t=!1,e=!1){if(this._repeat==="track"&&t===!1||this.__tick===!0)return;this.__tick=!0;const s=this.currentSessionList(),n=l.allCanPlay();let r=s.position;if(this._repeat==="playlist"&&s.position===s.mix.length-1){this.handleRepeat(s),this.__tick=!1;return}t===!0&&e===!0?(r=u.updatePosition("next"),s.mix.length-1,C("->",r-1)):r=u.updatePosition("next"),n&&n.length&&n[1]();const a=await this.getNextSongInQueue(r);if(a===null){console.error("RESPONSE ERROR",new Error(`[err] ${a}`));return}this.updateSrc(a),this.__tick=!1;}onEvent(t,e,s={}){this._player.addEventListener(t,e,s),jt.set(t,{cb:e,options:s});}pause(){"mediaSession"in navigator&&(navigator.mediaSession.playbackState="paused"),this._paused.set(!0),this._player.pause();}play(t=null){try{"mediaSession"in navigator&&(navigator.mediaSession.playbackState="playing"),l.initialized===!0&&l.hasActiveSession===!0&&Y({client:l.client.clientId,state:{finished:this.hasFinishedPlayback,paused:!1,playing:!0,pos:this.currentSessionList().position,stalled:!!this._player.error}});const e=this._player.play();e!==void 0?e.then(()=>{this._player.play(),this._paused.set(!1);}).catch(s=>{f(`${s.name}: ${s.message}`,"error");}):(this._paused.set(!1),this.player.play()),this._player.defaultMuted=!1;}catch(e){f("Error starting playback. You can find this error in the console logs as [playback-error]","error"),console.error("[playback-error] ",e);}}previous(t=!1){const e=this.currentSessionList().position;if(e===0){g.log("There's nothing that way!");return}t===!0&&C("<-",e),u.updatePosition("back"),this.getTrackSrc(e-1);}seek(t){if("fastSeek"in this._player){this._player.fastSeek(t);return}this.isHLSPlayer?this._HLS.media.currentTime=t:this.player.currentTime=t,this._currentTimeStore.set(t);}skip(){this.currentTimeStore.set((this._player.duration-1)*2);}updateSrc(t){if(t instanceof Promise){t.then(e=>{this.__srcUrl=e?.original_url,this._src.set(e?.url);});return}this.__srcUrl=t?.url,this._src.set(t?.url);}updateTime(t){this._currentTimeStore.set(t);}repeat(t){t==="track"?this._player.loop=!0:this._player.loop=!1,this._repeat=t;}async loadHLSModule(){return import('./hls-53ad6781.js').then(function (n) { return n.h; }).then(t=>t.default)}handleError(){++this.errorCount>2&&(this.errorCount=0,this.updateSrc({original_url:B(this.player.src),url:B(this.player.src)}));}async createHLSPlayer(t){this.playerType!=="NATIVE"&&(this._HLSModule||(this._HLSModule=await this.loadHLSModule()),this._HLSModule.isSupported()===!0&&(this._HLS&&this._HLS.destroy(),this._HLS=new this._HLSModule({lowLatencyMode:!0,enableWorker:!0,backBufferLength:90}),this._HLS.attachMedia(this._player),this._HLS.on(this._HLSModule.Events.MEDIA_ATTACHED,()=>{this._HLS.loadSource(t);}),this._HLS.on(this._HLSModule.Events.ERROR,(e,s)=>{switch(s.type){case this._HLSModule.ErrorTypes.MEDIA_ERROR:this._HLS.recoverMediaError();break;case this._HLSModule.ErrorTypes.NETWORK_ERROR:this._HLS.startLoad();break}})));}async getNextSongInQueue(t,e=!0){const s=this.currentSessionList();if(s.position>=s.mix.length-1)return l.initialized&&l.hasActiveSession&&l.client.role!=="host"?await this.getTrackSrc(t,e):s.currentMixType!=="playlist"&&!s.continuation&&!s.clickTrackingParams?await this.handleAutoSuggestion(s.position):u.getSessionContinuation({itct:s.mix[s.position]?.itct,videoId:s.mix[s.position]?.videoId,playlistId:s.currentMixId,loggingContext:s.mix[s.position].loggingContext,ctoken:s.continuation,clickTrackingParams:s.clickTrackingParams,key:s.position});try{return this.__tick=!1,await this.getTrackSrc(t,e).then(r=>{if(Gt(r))return r})}catch{}}getTrackSrc(t,e=!0){const s=this.currentSessionList();return v(s.mix[t].videoId,s.mix[t].playlistId,null,e).then(({body:n,error:r})=>r===!0?(this.skip(),r):n).catch(n=>{n.message.includes("The play() request was interrupted")||f(`${n.name}: ${n.message}`,"error");})}async handleAutoSuggestion(t){const e=this.currentSessionList();return await u.getMoreLikeThis({playlistId:e.currentMixId}),this.getTrackSrc(t).then(s=>{function n(r){return r.url!==void 0}if(n(s))return s})}async handleRepeat(t){t.position===t.mix.length-1&&(u.updatePosition(1),await et$1(),this.previous(!1)),this.__tick=!1;}async onEnded(){if(this._repeat==="track")return;const t=this.currentSessionList(),e=t.position===t.mix.length-1;if(this._repeat==="playlist"&&e){await this.handleRepeat(t);return}if(e){u.next();return}if(l.initialized){Promise.resolve(Y({client:l.client.clientId,state:{finished:this.hasFinishedPlayback,paused:!0,playing:!1,pos:this.currentSessionList().position,stalled:!!this._player.error}})).then(()=>{const[s,n]=l.allCanPlay();s&&n();});return}if(this._hasNextSrc===!0&&this._nextTrackURL&&this._nextTrackURL?.url)u.updatePosition("next"),this.updateSrc(this._nextTrackURL);else {const s=u.updatePosition("next");this.getNextSongInQueue(s,!1).then(n=>(this._nextTrackURL=n,this.updateSrc(n),n));}this._hasNextSrc=!1,this._nextTrackURL=null;}async canUseHLSjs(){const t=J$1(k)?.playback?.Stream==="HLS";return t===!0?this._streamType="HLS":this._streamType="HTTP",this.isWebkit&&t?(this.isHLSPlayer=!0,"NATIVE"):t&&(this._HLSModule||(this._HLSModule=await this.loadHLSModule()),this._HLSModule.isSupported())?(this.isHLSPlayer=!0,"HLS.JS"):(this.isHLSPlayer=!1,"UNSUPPORTED")}async setup(){}}const P=new Jt;function Wt({original_url:i,url:t}){P.updateSrc({original_url:i,url:t});}let nt;const f=(i,t,e)=>{Ut.add({msg:i,type:t,action:e});};function O(i,t){let e;if(typeof t=="number"){let s=t;e=()=>{const n=Math.sin(s++)*179426549;return n-Math.floor(n)};}else e=Math.random;for(let s=i.length-1;s>0;s-=1){const n=Math.floor(e()*(s+1)),r=i[s];i[s]=i[n],i[n]=r;}return i}function ye(i){if(isNaN(i))return "...";const t=Math.floor(i/60);return i=Math.floor(i%60),i<10&&(i="0"+i),`${t}:${i}`}const qt=async({videoId:i,playlistId:t})=>{try{const e=`/api/v1/get_queue.json${i?`?videoIds=${i}`:t?"?playlistId="+t:""}`,s=await fetch(e,{headers:{accept:"application/json"}}).then(n=>n.json()).catch(n=>console.log(n));if(Array.isArray(s))return s}catch(e){console.error(e),f(e,"error");}},v=async(i,t,e,s=!0)=>{try{const n=await fetch(`/api/v1/player.json?videoId=${i}${t?`&playlistId=${t}`:""}${e?`&playerParams=${e}`:""}`).then(o=>o.json());if(n&&!n?.streamingData&&n?.playabilityStatus.status==="UNPLAYABLE")return Bt();const r=It({data:n,dash:!1,proxyUrl:nt?.network["HLS Stream Proxy"]??""});return Yt(r,s)}catch(n){console.error(n),f(n,"error");}};function Yt(i,t){let e;return nt?.playback?.Stream==="HLS"?e={original_url:i?.hls,url:i.hls}:e=i.streams[0],t&&Wt({original_url:e.original_url,url:e.url}),{body:{original_url:e.original_url,url:e.url},error:!1}}function Bt(){return console.log("error"),f("An error occurred while initiating playback, skipping...","error","getNextTrack"),{body:null,error:!0}}const Ft=i=>{const t=[];let e="";for(e in i)typeof i[e]!="number"&&!i[e]||t.push(`${encodeURIComponent(e)}=${encodeURIComponent(i[e])}`);return t.join("&")};

export { Ft as F, Ht as H, J, Lt as L, Mt as M, P, T, Ut as U, he as a, ue as b, ce as c, dt as d, ee as e, de as f, ge as g, ht as h, le as i, ae as j, f as k, l, me as m, ne as n, oe as o, pe as p, fe as q, re as r, se as s, te as t, u, ie as v, F as w, k as x, ye as y };
//# sourceMappingURL=utils-c5816fb5.js.map
