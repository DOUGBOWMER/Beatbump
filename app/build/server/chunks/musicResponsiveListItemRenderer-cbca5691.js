import { i, p } from './utils.parsers-3568cb71.js';

function v(d,p$1,l,m=void 0){const n=d.musicResponsiveListItemRenderer,u=(n.thumbnail?.musicThumbnailRenderer?.thumbnail?.thumbnails||[]).map(r=>({...r,...i(r.url)})),o=Array.isArray(n.flexColumns)&&n.flexColumns,a=o[1]?.musicResponsiveListItemFlexColumnRenderer?.text?.runs,t=o[0]?.musicResponsiveListItemFlexColumnRenderer?.text?.runs[0]||{},s=Array.isArray(a)&&p(a),e=n.navigationEndpoint?.browseEndpoint,i$1=Object.create(null);return Object.assign(i$1,{subtitle:s,artistInfo:{artist:[s[0]]},explicit:"badges"in n,title:t.text,aspectRatio:n.flexColumnDisplayStyle,musicVideoType:t.navigationEndpoint?.watchEndpoint?.watchEndpointMusicConfig?.musicVideoType??t.navigationEndpoint?.watchEndpoint?.watchEndpointMusicSupportedConfigs?.watchEndpointMusicConfig?.musicVideoType,videoId:t.navigationEndpoint?.watchEndpoint?.videoId??void 0,playlistId:t.navigationEndpoint?.watchEndpoint?.playlistId?t?.navigationEndpoint?.watchEndpoint?.playlistId:n.menu?.menuRenderer.items[0].menuNavigationItemRenderer?.navigationEndpoint?.watchEndpoint?.playlistId?n.menu?.menuRenderer?.items[0]?.menuNavigationItemRenderer.navigationEndpoint?.watchEndpoint?.playlistId:n?.watchEndpoint?.playlistId,thumbnails:u,length:"fixedColumns"in n&&n.fixedColumns[0]?.musicResponsiveListItemFixedColumnRenderer?.text?.runs?.length?n.fixedColumns[0]?.musicResponsiveListItemFixedColumnRenderer?.text?.runs[0]?.text:void 0,type:m,params:n.overlay?.musicItemThumbnailOverlayRenderer?.content?.musicPlayButtonRenderer?.playNavigationEndpoint?.watchPlaylistEndpoint?.params??void 0,playerParams:t?.navigationEndpoint?.watchEndpoint?.playerParams||t?.navigationEndpoint?.watchEndpoint?.params,clickTrackingParams:n.overlay?.musicItemThumbnailOverlayRenderer?.content?.musicPlayButtonRenderer?.playNavigationEndpoint?.clickTrackingParams||t?.navigationEndpoint?.clickTrackingParams,loggingContext:n.overlay?.musicItemThumbnailOverlayRenderer?.content?.musicPlayButtonRenderer?.playNavigationEndpoint?.watchEndpoint?.loggingContext}),e&&(i$1.endpoint={browseId:e.browseId,pageType:e.browseEndpointContextSupportedConfigs.browseEndpointContextMusicConfig.pageType}),i$1!==void 0&&p$1&&Object.assign(i$1,{playlistSetVideoId:n?.playlistSetVideoId||n.overlay?.musicItemThumbnailOverlayRenderer.content?.musicPlayButtonRenderer?.playNavigationEndpoint?.watchEndpoint?.playlistSetVideoId,playlistId:l}),Array.isArray(i$1.subtitle)&&i$1.subtitle[0].text==="Artist"&&Object.assign(i$1,{artistInfo:{artist:[{pageType:n.navigationEndpoint?.browseEndpoint?.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType,browseId:n?.navigationEndpoint?.browseEndpoint?.browseId}]}}),i$1}

export { v };
//# sourceMappingURL=musicResponsiveListItemRenderer-cbca5691.js.map
