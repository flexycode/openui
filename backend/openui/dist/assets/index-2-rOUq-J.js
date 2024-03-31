var R=Object.defineProperty;var L=(e,r,o)=>r in e?R(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o;var p=(e,r,o)=>(L(e,typeof r!="symbol"?r+"":r,o),o);import{R as h,j as n,t as T,c as P,r as c,$ as v,a as N,b as O,d as _,e as $,f as S,g as I,h as m,N as C,Q as M,i as k,k as B}from"./vendor-BJpsy9o3.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const A="modulepreload",D=function(e){return"/"+e},g={},b=function(r,o,a){let t=Promise.resolve();if(o&&o.length>0){const s=document.getElementsByTagName("link");t=Promise.all(o.map(i=>{if(i=D(i),i in g)return;g[i]=!0;const l=i.endsWith(".css"),w=l?'[rel="stylesheet"]':"";if(!!a)for(let u=s.length-1;u>=0;u--){const f=s[u];if(f.href===i&&(!l||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${w}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":A,l||(d.as="script",d.crossOrigin=""),d.href=i,document.head.appendChild(d),l)return new Promise((u,f)=>{d.addEventListener("load",u),d.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${i}`)))})}))}return t.then(()=>r()).catch(s=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=s,window.dispatchEvent(i),!i.defaultPrevented)throw s})};class j extends h.Component{constructor(){super(...arguments);p(this,"state",{error:void 0})}static getDerivedStateFromError(o){return{error:o}}componentDidCatch(o,a){console.error("Encountered ErrorBoundary:",o,a);const{onError:t}=this.props;t==null||t(o)}render(){const{error:o}=this.state;if(o!==void 0){const{renderError:t}=this.props;return t(o)}const{children:a}=this.props;return a}}p(j,"defaultProps",{children:void 0,onError:void 0});function x({error:e}){return n.jsxs("div",{className:"flex min-h-screen flex-col items-center justify-center",children:[n.jsx("h1",{className:"text-xl","data-testid":"LoadingOrError",children:e?e.message:n.jsx("div",{className:"h-16 w-16 animate-spin rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"})}),e?n.jsx("a",{href:"/",className:"mt-5 text-lg text-blue-500 underline",onClick:r=>{r.preventDefault(),document.location.reload()},children:"Reload"}):void 0]})}x.defaultProps={error:void 0};function U(...e){return T(P(e))}function Z(e,r,o){const a=new Blob([e],{type:r}),t=URL.createObjectURL(a),s=document.createElement("a");s.href=t,s.download=o,document.body.append(s),s.click(),s.remove(),URL.revokeObjectURL(t)}const ee=580,F=N,te=O,re=_,Q=c.forwardRef(({className:e,sideOffset:r=4,...o},a)=>n.jsx(v,{ref:a,sideOffset:r,className:U("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...o}));Q.displayName=v.displayName;const z=500;function oe(e,r=z){const[o,a]=h.useState(e),t=h.useRef(null);return h.useEffect(()=>{const s=Date.now();if(t.current&&s>=t.current+r)t.current=s,a(e);else{const i=window.setTimeout(()=>{t.current=s,a(e)},r);return()=>window.clearTimeout(i)}},[e,r]),o}function V(e){const[r,o]=c.useState(()=>matchMedia(e).matches);return c.useLayoutEffect(()=>{const a=matchMedia(e);function t(){o(a.matches)}return a.addEventListener("change",t),()=>{a.removeEventListener("change",t)}},[e]),r}const q=c.lazy(async()=>b(()=>import("./index-VsdO9OoH.js"),__vite__mapDeps([0,1,2]))),y=c.lazy(async()=>b(()=>import("./Builder-b4JJdzJb.js").then(e=>e.B),__vite__mapDeps([3,1,2]))),W=$(S(n.jsxs(n.Fragment,{children:[n.jsx(m,{path:"/",element:n.jsx(C,{replace:!0,to:"/ai"})}),n.jsx(m,{path:"/ai",element:n.jsx(q,{}),children:n.jsx(m,{path:":id",element:n.jsx(y,{})})}),n.jsx(m,{path:"/ai/shared/:id",element:n.jsx(y,{shared:!0})})]})));function H(){const e=V("(prefers-color-scheme: dark)");return c.useEffect(()=>{e&&document.documentElement.classList.add("dark")},[e]),n.jsx(c.Suspense,{fallback:n.jsx(x,{}),children:n.jsx(j,{renderError:r=>n.jsx(x,{error:r}),children:n.jsx(F,{children:n.jsx(I,{router:W})})})})}const K=1,X=new M({defaultOptions:{queries:{staleTime:Number.POSITIVE_INFINITY,retry:K}}}),E=document.querySelector("#root");E&&k(E).render(n.jsx(c.StrictMode,{children:n.jsx(B,{client:X,children:n.jsx(H,{})})}));export{j as E,x as L,ee as M,te as T,b as _,re as a,Q as b,U as c,Z as d,oe as e,V as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-VsdO9OoH.js","assets/vendor-BJpsy9o3.js","assets/textarea-4A01Dc6n.js","assets/Builder-b4JJdzJb.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}