var w=Object.defineProperty;var A=(s,t,r)=>t in s?w(s,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[t]=r;var g=(s,t,r)=>(A(s,typeof t!="symbol"?t+"":t,r),r);const P=typeof globalThis<"u";function h(s,t){const r=s.length;let e=-1;for(;++e<r;)t(s[e],e,s);e=null}class y{constructor(t,r=1){g(this,"$$");this.DB_NAME=t,this.DB_VER=r}init(){this.$$||(this.$$=new Promise((t,r)=>{const e=indexedDB.open(this.DB_NAME,this.DB_VER);e.onerror=()=>r(e.error),e.onsuccess=()=>t(e.result),e.onupgradeneeded=()=>{if(e.result.objectStoreNames.contains("playlists")){const a=e.transaction.objectStore("playlists").getAll();a.onsuccess=l=>{Array.isArray(l.target.result)&&(u.playlists=[...l.target.result],e.result.deleteObjectStore("playlists")),e.result.createObjectStore("playlists",{keyPath:"id"})}}e.result.objectStoreNames.contains("favorites")||e.result.createObjectStore("favorites",{keyPath:"videoId"}),e.result.objectStoreNames.contains("playlists")||e.result.createObjectStore("playlists",{keyPath:"id"})}}))}transaction(t,r,e){if(P)return this.init(),this.$$.then(a=>new Promise((l,o)=>{const i=a.transaction(t,r);i.oncomplete=()=>l(),i.onabort=i.onerror=()=>o(i.error),e(i.objectStore(t))}))}}const u={},p={normal:"useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",alternative:"useandom26T198340PX75pxJACKVERYMINDBUSHWOLFGQZbfghjklqvwyzrict"},b={generate:(s=16,t="normal")=>{let r="",e=s;for(;e--;)r+=p[t][Math.random()*p[t].length|0];return r}};function f(s=16,t="normal"){return b.generate(s,t)}const n=new y("alphatrack",3);function E(s){return new Promise(t=>{n.transaction("playlists","readwrite",r=>{try{const e=r.openCursor(s.id);e.onsuccess=a=>{var o,i,d,c;const l=a.target.result;if(l&&l.update({...l.value,name:(s==null?void 0:s.name)??((o=l==null?void 0:l.value)==null?void 0:o.name),thumbnail:(s==null?void 0:s.thumbnail)??((i=l==null?void 0:l.value)==null?void 0:i.thumbnail),description:(s==null?void 0:s.description)??((d=l==null?void 0:l.value)==null?void 0:d.description),length:Array.isArray(s==null?void 0:s.items)?s==null?void 0:s.items.length:(c=l==null?void 0:l.value)==null?void 0:c.items.length,items:Array.isArray(s==null?void 0:s.items)?[...s.items]:[...l.value.items]}),!s.hideAlert){t({message:"Successfully updated playlist!"});return}t({data:a==null?void 0:a.target.result.value})}}catch(e){t({error:!0,message:"Failed to update playlist. Reason: "+e})}})})}function N(s){return new Promise(t=>{n.transaction("playlists","readwrite",r=>{try{const e=r.put(Object.assign(s,{id:f(32),length:Array.isArray(s==null?void 0:s.items)?[...s.items].length:[s==null?void 0:s.items].length}));e.onsuccess=()=>{t({message:"Created Playlist!"})},e.onerror=()=>{t({error:!0,message:"Error: "+e.error})}}catch(e){t({message:"Error: "+e})}})})}function j(s){return new Promise(t=>{n.transaction("favorites","readwrite",r=>{try{const e=r.put(s);e.onsuccess=()=>{t({message:"Added to favorites!"})}}catch(e){t({message:"Error setting favorite. Reason: "+e})}})})}function D(s){if(!s)throw new Error("No item was provided!");return new Promise(t=>n.transaction("favorites","readwrite",r=>{try{r.delete(s.videoId||s.playlistId),t({message:"Item removed from favorites!"})}catch(e){t({message:"Error removing item from favorites. Reason: "+e})}}))}function S(s){if(!s)throw new Error("No playlist name was provided!");return new Promise(t=>n.transaction("playlists","readwrite",r=>{try{r.delete(s),t({message:"Deleted playlist!"})}catch(e){t({message:"Error deleting playlist. Reason: "+e})}}))}function I(){return new Promise(s=>n.transaction("playlists","readwrite",t=>{try{t.clear().onsuccess=()=>{s({message:"Deleted playlists!"})}}catch(r){s({message:"Error deleting playlists. Reason: "+r})}}))}function R(){return new Promise(s=>n.transaction("favorites","readwrite",t=>{try{const r=t.getAll();r.onsuccess=e=>{var a;Array.isArray((a=e==null?void 0:e.target)==null?void 0:a.result)&&s({data:e.target.result})}}catch(r){s({message:r})}}))}function $(s){return new Promise(t=>n.transaction("playlists","readwrite",r=>{try{const e=r.openCursor(s);e.onsuccess=a=>{t({data:a.target.result.value})},e.onerror=a=>{}}catch(e){console.error(e),t({message:e})}}))}function B(){return new Promise(s=>{n.transaction("playlists","readwrite",t=>{try{u.playlists&&Array.isArray(u.playlists)&&h(u.playlists,e=>{t.put(e)});const r=t.getAll();r.onsuccess=e=>{var l;let a=[];Array.isArray((l=e==null?void 0:e.target)==null?void 0:l.result)&&(a=e.target.result,h(a,(o,i)=>{if(o.id||(a[i].id=f(32),t.put({...a[i]})),Array.isArray(o==null?void 0:o.items)&&(o==null?void 0:o.items.length)!==0){let c=o==null?void 0:o.items.length;for(;c--;)if(Array.isArray(o==null?void 0:o.items[c])){const m=o==null?void 0:o.items[c];a[i].items.splice(c,1),a[i].items=[...a[i].items,...m].flat()}a[i].length=(o==null?void 0:o.items.length)??(o==null?void 0:o.length),t.put({...a[i]})}}),s({data:a}))}}catch(r){console.error(r),s({message:r})}})})}const q={updatePlaylist:E,deletePlaylist:S,createPlaylist:N,deleteFavorite:D,getFavorites:R,getPlaylist:$,getPlaylists:B,deletePlaylists:I,createFavorite:j},O=(s,t,...r)=>{const e=`${s}${t[0].toUpperCase()+t.slice(1)}`;return q[`${e}`](...r)},k=self;k.onmessage=async s=>{const{action:t,type:r,params:e}=s.data;console.log(t,r,e),await O(t,r,...e).then(a=>postMessage(a)).catch(a=>(console.error("[DB:TX Error] ",a),a))};
