import { h as ht } from './utils-c5816fb5.js';
import './index-02d8ed20.js';

function d(n){return {subtitle:ht(n.shortBylineText?.runs,(e,i)=>n.longBylineText?.runs[i]?.navigationEndpoint!==void 0?{text:e.text,browseId:n.longBylineText.runs[i].navigationEndpoint?.browseEndpoint?.browseId,pageType:n.longBylineText.runs[i]?.navigationEndpoint?.browseEndpoint?.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType}:e),thumbnails:n.thumbnail?.thumbnails||[],artistInfo:{artist:[{text:n.longBylineText?.runs[0]?.text,browseId:n.longBylineText?.runs[0]?.navigationEndpoint?.browseEndpoint?.browseId,pageType:n.longBylineText?.runs[0]?.navigationEndpoint?.browseEndpoint?.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType}]},videoId:n.navigationEndpoint?.watchEndpoint?.videoId,playlistId:n.navigationEndpoint?.watchEndpoint?.playlistId,playlistSetVideoId:(n.navigationEndpoint?.watchEndpoint?.playlistSetVideoId??n.playlistSetVideoId)||void 0,playerParams:n.navigationEndpoint?.watchEndpoint?.playerParams,itct:n.navigationEndpoint?.watchEndpoint?.params,index:n.navigationEndpoint?.watchEndpoint?.index,title:n.title?.runs[0]?.text,autoMixList:n.menu?.menuRenderer?.items[0]?.menuNavigationItemRenderer?.navigationEndpoint?.watchEndpoint?.playlistId,length:n.lengthText?.runs[0]?.text,clickTrackingParams:n.navigationEndpoint?.clickTrackingParams,album:ht(n.menu?.menuRenderer?.items.filter(e=>e?.menuNavigationItemRenderer&&e?.menuNavigationItemRenderer?.icon?.iconType.includes("ALBUM"))??[],e=>{if(!e)return;const i=e?.menuNavigationItemRenderer;return {title:Array.isArray(n.longBylineText?.runs)?n.longBylineText?.runs[n.longBylineText?.runs?.length-3]?.text:i?.text?.runs[0]?.text,browseId:i?.navigationEndpoint?.browseEndpoint?.browseId,pageType:i?.navigationEndpoint?.browseEndpoint?.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType}})[0]}}

export { d };
//# sourceMappingURL=playlistPanelVideoRenderer-b4ee6357.js.map
