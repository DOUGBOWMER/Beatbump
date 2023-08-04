const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android/android-launchericon-192-192.png","apple-touch-icon-120x120.png","apple-touch-icon-152x152.png","apple-touch-icon-180x180.png","apple-touch-icon-60x60.png","apple-touch-icon-76x76.png","apple-touch-icon.png","assets/android-chrome-192x192 (2).png","assets/android-chrome-256x256.png","assets/browserconfig.xml","assets/favicon-16x16.png","assets/favicon-32x32.png","assets/favicon.png","assets/mstile-150x150 (2).png","favicon.ico","favicon.png","icons.svg","manifest.json","robots.txt","service-worker.js"]),
	mimeTypes: {".png":"image/png",".xml":"application/xml",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".json":"application/json",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-fb9e3de4.js","imports":["_app/immutable/start-fb9e3de4.js","_app/immutable/chunks/index-02d4e276.js","_app/immutable/chunks/singletons-4f84171e.js","_app/immutable/chunks/index-bb96cc25.js","_app/immutable/chunks/preload-helper-41c905a7.js","_app/immutable/chunks/control-f5b05b5f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-3acbebb0.js'),
			() => import('./chunks/1-5e388e94.js'),
			() => import('./chunks/2-8806439d.js'),
			() => import('./chunks/3-34641a18.js'),
			() => import('./chunks/4-aac7ce95.js'),
			() => import('./chunks/5-f45d0e97.js'),
			() => import('./chunks/6-5220701a.js'),
			() => import('./chunks/7-7dcc3d1f.js'),
			() => import('./chunks/8-374da9ea.js'),
			() => import('./chunks/9-088e3597.js'),
			() => import('./chunks/10-636eaaa6.js'),
			() => import('./chunks/11-c7d7d1ae.js'),
			() => import('./chunks/12-5c6e97c2.js'),
			() => import('./chunks/13-88a9b12d.js'),
			() => import('./chunks/14-0c8493c6.js'),
			() => import('./chunks/15-f3d277a8.js'),
			() => import('./chunks/16-f180d79f.js'),
			() => import('./chunks/17-252f2cad.js'),
			() => import('./chunks/18-83ccf621.js'),
			() => import('./chunks/19-e15b0265.js'),
			() => import('./chunks/20-c6136efb.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/v1/get_queue.json",
				pattern: /^\/api\/v1\/get_queue\.json\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-b48011d1.js')
			},
			{
				id: "/api/v1/get_search_suggestions.json",
				pattern: /^\/api\/v1\/get_search_suggestions\.json\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-93b3ed8b.js')
			},
			{
				id: "/api/v1/main.json",
				pattern: /^\/api\/v1\/main\.json\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-b661fbfa.js')
			},
			{
				id: "/api/v1/next.json",
				pattern: /^\/api\/v1\/next\.json\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-daa508a9.js')
			},
			{
				id: "/api/v1/player.json",
				pattern: /^\/api\/v1\/player\.json\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-f32b5d28.js')
			},
			{
				id: "/api/v1/playlist.json",
				pattern: /^\/api\/v1\/playlist\.json\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-f0a77fed.js')
			},
			{
				id: "/api/v1/related.json",
				pattern: /^\/api\/v1\/related\.json\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-49a11480.js')
			},
			{
				id: "/api/v1/search.json",
				pattern: /^\/api\/v1\/search\.json\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-95445abc.js')
			},
			{
				id: "/api/v1/stats.json",
				pattern: /^\/api\/v1\/stats\.json\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-19ce89c7.js')
			},
			{
				id: "/artist/[slug]",
				pattern: /^\/artist\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/artist/[slug]/releases.json",
				pattern: /^\/artist\/([^/]+?)\/releases\.json\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('./chunks/_server.ts-abd8e10b.js')
			},
			{
				id: "/artist/[slug]/releases",
				pattern: /^\/artist\/([^/]+?)\/releases\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/explore.json",
				pattern: /^\/explore\.json\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-63376522.js')
			},
			{
				id: "/explore",
				pattern: /^\/explore\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/explore/[slug].json",
				pattern: /^\/explore\/([^/]+?)\.json\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('./chunks/_server.ts-30b89c45.js')
			},
			{
				id: "/explore/[slug]",
				pattern: /^\/explore\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/home.json",
				pattern: /^\/home\.json\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-9d912cb9.js')
			},
			{
				id: "/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/library",
				pattern: /^\/library\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/library/playlists",
				pattern: /^\/library\/playlists\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/library/playlists/[slug]",
				pattern: /^\/library\/playlists\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "/library/songs",
				pattern: /^\/library\/songs\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 11 },
				endpoint: null
			},
			{
				id: "/listen",
				pattern: /^\/listen\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 12 },
				endpoint: null
			},
			{
				id: "/playlist/[slug]",
				pattern: /^\/playlist\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 13 },
				endpoint: null
			},
			{
				id: "/release",
				pattern: /^\/release\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 14 },
				endpoint: null
			},
			{
				id: "/search/[slug]",
				pattern: /^\/search\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 15 },
				endpoint: null
			},
			{
				id: "/session",
				pattern: /^\/session\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 16 },
				endpoint: null
			},
			{
				id: "/settings",
				pattern: /^\/settings\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 17 },
				endpoint: null
			},
			{
				id: "/test",
				pattern: /^\/test\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 18 },
				endpoint: null
			},
			{
				id: "/trending.json",
				pattern: /^\/trending\.json\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-fb8da422.js')
			},
			{
				id: "/trending",
				pattern: /^\/trending\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 19 },
				endpoint: null
			},
			{
				id: "/trending/new/[slug].json",
				pattern: /^\/trending\/new\/([^/]+?)\.json\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('./chunks/_server.ts-3b7d94e7.js')
			},
			{
				id: "/trending/new/[slug]",
				pattern: /^\/trending\/new\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 20 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
