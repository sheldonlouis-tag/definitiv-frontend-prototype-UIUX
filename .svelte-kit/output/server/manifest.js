export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Access_Logo.png","Access_Logo_Tagline.png","auth-hero.jpg","favicon.svg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.BpqN4rHS.js",app:"_app/immutable/entry/app.DJvTrktH.js",imports:["_app/immutable/entry/start.BpqN4rHS.js","_app/immutable/chunks/T9QIhX8Q.js","_app/immutable/chunks/DENQibGw.js","_app/immutable/chunks/Be_f48sb.js","_app/immutable/chunks/m8c6eoRv.js","_app/immutable/entry/app.DJvTrktH.js","_app/immutable/chunks/Be_f48sb.js","_app/immutable/chunks/m8c6eoRv.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DENQibGw.js","_app/immutable/chunks/Jn131pyZ.js","_app/immutable/chunks/DGH7gkaV.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/employee/details",
				pattern: /^\/employee\/details\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/employee/employee/my-details",
				pattern: /^\/employee\/employee\/my-details\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/employee/finance",
				pattern: /^\/employee\/finance\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/employee/finance/banking",
				pattern: /^\/employee\/finance\/banking\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/my-team/employees",
				pattern: /^\/my-team\/employees\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/my-team/employees/[id]",
				pattern: /^\/my-team\/employees\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/my-team/onboarding",
				pattern: /^\/my-team\/onboarding\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/my-team/timesheets",
				pattern: /^\/my-team\/timesheets\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(auth)/signin",
				pattern: /^\/signin\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/employee/details","/employee/employee/my-details","/employee/finance","/employee/finance/banking"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
