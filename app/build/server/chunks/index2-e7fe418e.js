class t{constructor(r,s){this.status=r,typeof s=="string"?this.body={message:s}:s?this.body=s:this.body={message:`Error: ${r}`};}toString(){return JSON.stringify(this.body)}}class n{constructor(r,s){this.status=r,this.location=s;}}class i{constructor(r,s){this.status=r,this.data=s;}}function o(e,r){if(isNaN(e)||e<400||e>599)throw new Error(`HTTP error status codes must be between 400 and 599 — ${e} is invalid`);return new t(e,r)}function a(e,r){if(isNaN(e)||e<300||e>308)throw new Error("Invalid status code");return new n(e,r)}function c(e,r){const s=new Headers(r?.headers);return s.has("content-type")||s.set("content-type","application/json"),new Response(JSON.stringify(e),{...r,headers:s})}

export { a, c, i, n, o, t };
//# sourceMappingURL=index2-e7fe418e.js.map
