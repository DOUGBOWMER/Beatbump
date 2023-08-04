import { t as tt } from './index-02d8ed20.js';
import { A } from './index3-a50d3d2e.js';

function p(){const{set:e,subscribe:t}=A(!1),s=6e5;async function r(){return !1}return setTimeout(r,s),{subscribe:t,check:r}}p();const c=()=>{const e=tt("__svelte__");return {page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated}},v={subscribe(e){return c().page.subscribe(e)}},_={subscribe(e){return c().navigating.subscribe(e)}};

export { _, v };
//# sourceMappingURL=stores-1766503b.js.map
