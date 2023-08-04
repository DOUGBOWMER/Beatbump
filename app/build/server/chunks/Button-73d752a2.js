import { c as ct, u as ut, j, r as rt } from './index-02d8ed20.js';
import { k } from './Icon-04791803.js';

const _=ct((u,e,t,c)=>{let{icon:a=void 0}=e,{outlined:o=!1}=e,{disabled:l=!1}=e,{type:d="button"}=e,{class:i=""}=e;return e.icon===void 0&&t.icon&&a!==void 0&&t.icon(a),e.outlined===void 0&&t.outlined&&o!==void 0&&t.outlined(o),e.disabled===void 0&&t.disabled&&l!==void 0&&t.disabled(l),e.type===void 0&&t.type&&d!==void 0&&t.type(d),e.class===void 0&&t.class&&i!==void 0&&t.class(i),`<button${ut("type",d,0)} class="${["button "+j(i,!0),o?"outlined":""].join(" ").trim()}" ${l?"disabled":""}>${a?`${rt(k,"Icon").$$render(u,{name:a.name,size:a.size??"1em"},{},{})}`:""}${c.default?c.default({}):""}</button>`});

export { _ };
//# sourceMappingURL=Button-73d752a2.js.map
