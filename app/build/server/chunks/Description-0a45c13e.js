import { c as ct, W, j, u as ut } from './index-02d8ed20.js';

const d={code:".show-more.svelte-1iqvkik{align-items:center;color:#afafaf;cursor:pointer;display:inline-flex;font-family:system-ui;font-size:1em;font-variant:all-small-caps;font-weight:600;line-height:1;margin-bottom:1.7rem}.show-more.svelte-1iqvkik:hover{color:#c2c2c2;-webkit-text-decoration:underline .05rem solid;text-decoration:underline .05rem solid}.description.svelte-1iqvkik{--line-height:1.4;--lines:3;-webkit-line-clamp:3;-webkit-box-orient:vertical;color:#fff;display:block;display:-webkit-box;font-size:1rem;font-weight:400;letter-spacing:-.0125rem;line-height:var(--line-height);margin-bottom:.8rem;max-height:calc(var(--lines)*1rem*var(--line-height));overflow:hidden;visibility:visible;white-space:normal}.description.expanded.svelte-1iqvkik{--lines:12;--max-lines:var(--lines);-webkit-line-clamp:var(--max-lines);max-height:calc(var(--max-lines)*1rem*var(--line-height))}",map:null},p=ct((a,e,i,m)=>{let o,{description:t=""}=e,{class:s=""}=e,r;return W(),e.description===void 0&&i.description&&t!==void 0&&i.description(t),e.class===void 0&&i.class&&s!==void 0&&i.class(s),a.css.add(d),o=!0,`<div class="${"description-wrapper "+j(s,!0)+" svelte-1iqvkik"}"><div class="${["description svelte-1iqvkik",""].join(" ").trim()}"${ut("this",r,0)}>${j(t)}</div>
	<div class="${["show-more svelte-1iqvkik",o?"hidden":""].join(" ").trim()}"><span class="btn-text">${j("Show More")}</span></div>
</div>`});

export { p };
//# sourceMappingURL=Description-0a45c13e.js.map
