import { c as ct, r as rt, j, u as ut } from './index-02d8ed20.js';
import './utils-c5816fb5.js';
import { O } from './Header-d9be3441.js';
import { _ } from './Button-73d752a2.js';
import './index3-a50d3d2e.js';
import './url-764d83e3.js';
import './stores-1766503b.js';
import './Icon-04791803.js';

const b=ct((t,o,s,u)=>{let{data:e}=o;const{hostId:h,hostDisplayName:a,url:n}=e;let i;return o.data===void 0&&s.data&&e!==void 0&&s.data(e),`${rt(O,"Header").$$render(t,{title:`${a}'s AlphaTrack Group Session`,desc:`Join ${a}'s Group Session on AlphaTrack`,url:n},{},{})}
<main><h2>Join ${j(a)}&#39;s Group Session</h2>
	<p>Please enter a display name below in order to continue with joining.</p>
	<br>
	<div class="input"><input type="text" placeholder="Display Name"${ut("value",i,0)}></div>
	<br>

	${rt(_,"Button").$$render(t,{disabled:!i},{},{default:()=>"Join Session"})}
</main>`});

export { b as default };
//# sourceMappingURL=_page.svelte-09d42486.js.map
