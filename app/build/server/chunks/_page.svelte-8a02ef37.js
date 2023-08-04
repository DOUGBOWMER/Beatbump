import { c as ct, A, r as rt, o as ot } from './index-02d8ed20.js';
import { u as ue } from './ListItem-17989d74.js';
import { v } from './musicResponsiveListItemRenderer-cbca5691.js';
import { h as ht, w as F, u, j as ae } from './utils-c5816fb5.js';
import { Q } from './InfoBox-83c35639.js';
import { v as v$1 } from './stores-1766503b.js';
import { O } from './Header-d9be3441.js';
import { c, m } from './contexts-b32c3976.js';
import './Icon-04791803.js';
import './PopperButton-4deb1702.js';
import './service-b8fe1ba8.js';
import './url-764d83e3.js';
import './index3-a50d3d2e.js';
import './utils.parsers-3568cb71.js';
import './Button-73d752a2.js';

function _(e){const r=e.contents?.singleColumnBrowseResultsRenderer?.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].musicShelfRenderer.contents||[],i=ht(r,({musicResponsiveListItemRenderer:n},a)=>({...v({musicResponsiveListItemRenderer:n}),index:a})),l=(()=>{console.log(e.header.musicDetailHeaderRenderer.subtitle.runs);const n=e.header?.musicDetailHeaderRenderer?.subtitle?.runs.at(-1),a=e.header?.musicDetailHeaderRenderer?.subtitle?.runs[0],o=F(e.header?.musicDetailHeaderRenderer?.subtitle?.runs,s=>!!s?.navigationEndpoint?.browseEndpoint?.browseId).map(s=>({name:s.text,channelId:s?.navigationEndpoint?.browseEndpoint?.browseId||""}));return {playlistId:e.header?.musicDetailHeaderRenderer.menu?.menuRenderer?.topLevelButtons[0].buttonRenderer.navigationEndpoint.watchPlaylistEndpoint.playlistId,subtitles:[{year:n.text,tracks:e.header?.musicDetailHeaderRenderer?.secondSubtitle?.runs[0].text,length:e.header?.musicDetailHeaderRenderer?.secondSubtitle?.runs[2]?.text,type:a.text,contentRating:!!e.header?.musicDetailHeaderRenderer?.hasOwnProperty("subtitleBadges")}],secondSubtitle:[],artist:o,thumbnails:e.header?.musicDetailHeaderRenderer?.thumbnail?.croppedSquareThumbnailRenderer?.thumbnail?.thumbnails,title:e.header?.musicDetailHeaderRenderer.title?.runs[0].text,autoMixId:e.header?.musicDetailHeaderRenderer.menu?.menuRenderer?.items[1]?.menuNavigationItemRenderer?.navigationEndpoint?.watchPlaylistEndpoint?.playlistId||null}})();return {items:i,releaseInfo:l}}const j=ct((e,r,i,b)=>{let l,n;n=A(v$1,d=>l=d);let{data:a}=r,{data:o,id:s,path:h}=a;const I=_(o);let{items:R,releaseInfo:t}=I;const c$1=()=>ae.add(s),y=()=>{c$1(),u.initPlaylistSession({playlistId:t.playlistId,index:0}),u.updatePosition(0);},g=()=>{c$1(),u.initPlaylistSession({playlistId:t?.autoMixId,params:"wAEB",index:0});};let p=t?.thumbnails[0]?.url.replace(/=(w(\d+))-(h(\d+))/g,"=w512-h512");return c.set({parentPlaylistId:t.playlistId,page:"release"}),m.set({page:"release"}),r.data===void 0&&i.data&&a!==void 0&&i.data(a),s=l.url.searchParams.get("id"),n(),`${rt(O,"Header").$$render(e,{title:t.title,desc:`${t.title} by ${t?.artist[0]?.name} on AlphaTrack`,url:h+`?id=${s}`,image:p},{},{})}
<main data-testid="release">${rt(Q,"InfoBox").$$render(e,{thumbnail:p,buttons:[{text:"Play Album",action:()=>y(),icon:"play"},{text:"Album Radio",action:()=>g(),icon:"play"},{icon:"dots",type:"icon"}],title:t.title,artist:t.artist,subtitles:t.subtitles,type:"release"},{},{})}
	${ot(R,(d,f)=>`${rt(ue,"ListItem").$$render(e,{item:d,idx:f},{},{})}`)}</main>

`});

export { j as default };
//# sourceMappingURL=_page.svelte-8a02ef37.js.map
