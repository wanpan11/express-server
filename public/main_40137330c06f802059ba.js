(()=>{var e,t,r,n,o={1546:(e,t,r)=>{"use strict";var n=r(79),o=r(2226),s=(r(2273),r(8424),r(7168),r(5836),r(6445),r(8666),r(5625),r(1165),r(1222),r(1470)),i=(r(8246),r(3772)),a=r(6292),d=r(851),l=r(9852),c=r(5839);var p=r(6372),u=r.n(p),f=r(5250),m=function(e){var t=e.full;return(0,f.jsx)(l.Z,{className:u()((0,s.Z)({},"_wyNClZe2MFpYjHsxEkN",t)),children:(0,f.jsx)(c.Z,{size:"large",tip:"数据加载中..."})})};const g=(0,n.memo)(m);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=function e(t){return t.map((function(t){var r=t.id,o=t.path,s=t.title,a=t.index,d=t.component,l=t.childrenList,c=void 0===l?[]:l,p={key:r};return d&&(p.element=(0,f.jsx)(n.Suspense,{fallback:(0,f.jsx)(g,{full:!0}),children:(0,f.jsx)(d,{title:s,children:c.length?(0,f.jsx)(i.j3,{}):null})})),a?(0,f.jsx)(i.AW,h(h({},p),{},{index:!0})):(0,f.jsx)(i.AW,h(h({},p),{},{path:o,children:c.length?e(c):void 0}))}))};const b=function(){return(0,f.jsx)(a.VK,{children:(0,f.jsx)(i.Z5,{children:v(d.Z)})})};var j=document.getElementById("root");(0,o.s)(j).render((0,f.jsx)(n.StrictMode,{children:(0,f.jsx)(b,{})}))},851:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s}),r(5287),r(5836),r(7765),r(9336),r(475);var n=r(79),o=function(e){return(0,n.lazy)((function(){return r(5883)("./pages".concat(e))}))};const s=[{id:"0",path:"*",title:"登录",component:o("/login")},{id:"1",path:"/system",title:"",component:o("/system"),childrenList:[{id:"11",index:!0,title:"首页",component:o("/system/home")},{id:"12",path:"/system/data",title:"数据报表",childrenList:[{id:"121",title:"销售数据",index:!0,component:o("/system/data/report")}]},{id:"13",path:"/system/setting",title:"系统设置",childrenList:[{id:"131",title:"厂商管理",index:!0,component:o("/system/setting/company")},{id:"132",title:"开发管理",path:"/system/setting/dev",component:o("/system/setting/dev")}]}]}]},5883:(e,t,r)=>{var n={"./pages/login":[7273,606,430,746,282,273],"./pages/login/":[7273,606,430,746,282,273],"./pages/login/index":[7273,606,430,746,282,273],"./pages/login/index.module.less":[1638,638],"./pages/login/index.tsx":[7273,606,430,746,282,273],"./pages/system":[6880,606,746,246,526,880],"./pages/system/":[6880,606,746,246,526,880],"./pages/system/data/report":[4582,606,430,582],"./pages/system/data/report.tsx":[4582,606,430,582],"./pages/system/home":[8614,606,430,614],"./pages/system/home/":[8614,606,430,614],"./pages/system/home/index":[8614,606,430,614],"./pages/system/home/index.tsx":[8614,606,430,614],"./pages/system/index":[6880,606,746,246,526,880],"./pages/system/index.tsx":[6880,606,746,246,526,880],"./pages/system/setting/company":[7634,606,430,746,246,282,562,634],"./pages/system/setting/company.tsx":[7634,606,430,746,246,282,562,634],"./pages/system/setting/dev":[7162,606,430,162],"./pages/system/setting/dev.tsx":[7162,606,430,162]};function o(e){if(!r.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],o=t[0];return Promise.all(t.slice(1).map(r.e)).then((()=>r(o)))}o.keys=()=>Object.keys(n),o.id=5883,e.exports=o}},s={};function i(e){var t=s[e];if(void 0!==t)return t.exports;var r=s[e]={exports:{}};return o[e].call(r.exports,r,r.exports,i),r.exports}i.m=o,e=[],i.O=(t,r,n,o)=>{if(!r){var s=1/0;for(c=0;c<e.length;c++){for(var[r,n,o]=e[c],a=!0,d=0;d<r.length;d++)(!1&o||s>=o)&&Object.keys(i.O).every((e=>i.O[e](r[d])))?r.splice(d--,1):(a=!1,o<s&&(s=o));if(a){e.splice(c--,1);var l=n();void 0!==l&&(t=l)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,n,o]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var s={};t=t||[null,r({}),r([]),r(r)];for(var a=2&n&&e;"object"==typeof a&&!~t.indexOf(a);a=r(a))Object.getOwnPropertyNames(a).forEach((t=>s[t]=()=>e[t]));return s.default=()=>e,i.d(o,s),o},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>606===e?"8959caac872473ebca38.vendor.js":430===e?"a48949c7dc5c1836c33c.vendor.js":746===e?"1631120ff9572b9f2399.vendor.js":282===e?"ce7857f639990775cf7d.vendor.js":246===e?"0b7edb179f45efac90de.vendor.js":526===e?"e2941820e626219f89ab.vendor.js":562===e?"67e74131f234a7d99bbd.vendor.js":"js/"+e+"_"+{162:"4168d9d92e2bb65138a3",273:"985ac426d2a3b91a3766",582:"07f99b209bdd83e9d9b9",614:"e681c0586cfef1ddeb4c",634:"4d13fa8b41d19d4436e9",638:"152ac0aeb08adfd28341",880:"f6dcd65d85da12ac32e1"}[e]+".js",i.miniCssF=e=>"styles/"+e+".css",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},i.l=(e,t,r,o)=>{if(n[e])n[e].push(t);else{var s,a;if(void 0!==r)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var c=d[l];if(c.getAttribute("src")==e){s=c;break}}s||(a=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=e),n[e]=[t];var p=(t,r)=>{s.onerror=s.onload=null,clearTimeout(u);var o=n[e];if(delete n[e],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(r))),t)return t(r)},u=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),a&&document.head.appendChild(s)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/",(()=>{if("undefined"!=typeof document){var e={179:0};i.f.miniCss=(t,r)=>{e[t]?r.push(e[t]):0!==e[t]&&{273:1,634:1,638:1,880:1}[t]&&r.push(e[t]=(e=>new Promise(((t,r)=>{var n=i.miniCssF(e),o=i.p+n;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(i=r[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var s=document.getElementsByTagName("style");for(n=0;n<s.length;n++){var i;if((o=(i=s[n]).getAttribute("data-href"))===e||o===t)return i}})(n,o))return t();((e,t,r,n,o)=>{var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onerror=s.onload=r=>{if(s.onerror=s.onload=null,"load"===r.type)n();else{var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=i,d.request=a,s.parentNode.removeChild(s),o(d)}},s.href=t,document.head.appendChild(s)})(e,o,0,t,r)})))(t).then((()=>{e[t]=0}),(r=>{throw delete e[t],r})))}}})(),(()=>{var e={179:0};i.f.j=(t,r)=>{var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var s=i.p+i.u(t),a=new Error;i.l(s,(r=>{if(i.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",a.name="ChunkLoadError",a.type=o,a.request=s,n[1](a)}}),"chunk-"+t,t)}},i.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[s,a,d]=r,l=0;if(s.some((t=>0!==e[t]))){for(n in a)i.o(a,n)&&(i.m[n]=a[n]);if(d)var c=d(i)}for(t&&t(r);l<s.length;l++)o=s[l],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(c)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=i.O(void 0,[972],(()=>i(1546)));a=i.O(a)})();