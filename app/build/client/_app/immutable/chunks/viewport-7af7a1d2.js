let r;function s(e){r||(r=new IntersectionObserver(t=>{t.forEach(n=>{const o=n.isIntersecting?"enterViewport":"exitViewport";n.target.dispatchEvent(new CustomEvent(o))})},{rootMargin:e?e.margin:"0px 350px",threshold:0}))}function i(e,t){return s(t),r.observe(e),{destroy(){r.unobserve(e)}}}export{i as v};