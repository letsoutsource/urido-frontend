(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[468,731],{15861:e=>{!function(){var t={229:function(e){var t,n,r,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function u(){throw Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:u}catch(e){n=u}}();var s=[],a=!1,c=-1;function d(){a&&r&&(a=!1,r.length?s=r.concat(s):c=-1,s.length&&f())}function f(){if(!a){var e=l(d);a=!0;for(var t=s.length;t;){for(r=s,s=[];++c<t;)r&&r[c].run();c=-1,t=s.length}r=null,a=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new p(e,t)),1!==s.length||a||l(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},u=!0;try{t[e](i,i.exports,r),u=!1}finally{u&&delete n[e]}return i.exports}r.ab="//";var o=r(229);e.exports=o}()},15912:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{NEXT_REQUEST_META:function(){return n},addRequestMeta:function(){return i},getRequestMeta:function(){return r},removeRequestMeta:function(){return u},setRequestMeta:function(){return o}});let n=Symbol.for("NextInternalRequestMeta");function r(e,t){let r=e[n]||{};return"string"==typeof t?r[t]:r}function o(e,t){return e[n]=t,t}function i(e,t,n){let i=r(e);return i[t]=n,o(e,i)}function u(e,t){let n=r(e);return delete n[t],o(e,n)}},38880:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});let r=n(64252)._(n(14232)).default.createContext({})},53748:(e,t,n)=>{"use strict";var r=n(65364);Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return y},defaultHead:function(){return f}});let o=n(64252),i=n(88365),u=n(37876),l=i._(n(14232)),s=o._(n(54361)),a=n(38880),c=n(92458),d=n(96392);function f(e){void 0===e&&(e=!1);let t=[(0,u.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,u.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(79482);let h=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:n}=t;return e.reduce(p,[]).reverse().concat(f(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return o=>{let i=!0,u=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){u=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?i=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(let e=0,t=h.length;e<t;e++){let t=h[e];if(o.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?i=!1:n.add(t);else{let e=o.props[t],n=r[t]||new Set;("name"!==t||!u)&&n.has(e)?i=!1:(n.add(e),r[t]=n)}}}}return i}}()).reverse().map((e,t)=>{let o=e.key||t;if(r.env.__NEXT_OPTIMIZE_FONTS&&!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,l.default.cloneElement(e,t)}return l.default.cloneElement(e,{key:o})})}let y=function(e){let{children:t}=e,n=(0,l.useContext)(a.AmpStateContext),r=(0,l.useContext)(c.HeadManagerContext);return(0,u.jsx)(s.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,d.isInAmpMode)(n),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},54361:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let r=n(14232),o=r.useLayoutEffect,i=r.useEffect;function u(e){let{headManager:t,reduceComponentsToState:n}=e;function u(){if(t&&t.mountedInstances){let o=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(o,e))}}return o(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=u),()=>{t&&(t._pendingUpdate=u)})),i(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},65364:(e,t,n)=>{"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(15861)},79468:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c}});let r=n(64252),o=n(37876),i=r._(n(14232)),u=r._(n(53748));n(15912);let l={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function s(e){let{req:t,res:n,err:r}=e;return{statusCode:n&&n.statusCode?n.statusCode:r?r.statusCode:404,hostname:window.location.hostname}}let a={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class c extends i.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,n=this.props.title||l[e]||"An unexpected error has occurred";return(0,o.jsxs)("div",{style:a.error,children:[(0,o.jsx)(u.default,{children:(0,o.jsx)("title",{children:e?e+": "+n:"Application error: a client-side exception has occurred"})}),(0,o.jsxs)("div",{style:a.desc,children:[(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?(0,o.jsx)("h1",{className:"next-error-h1",style:a.h1,children:e}):null,(0,o.jsx)("div",{style:a.wrap,children:(0,o.jsxs)("h2",{style:a.h2,children:[this.props.title||e?n:(0,o.jsxs)(o.Fragment,{children:["Application error: a client-side exception has occurred"," ",!!this.props.hostname&&(0,o.jsxs)(o.Fragment,{children:["while loading ",this.props.hostname]})," ","(see the browser console for more information)"]}),"."]})})]})]})}}c.displayName="ErrorPage",c.getInitialProps=s,c.origGetInitialProps=s,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},79482:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},92164:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return n(79468)}])},96392:(e,t)=>{"use strict";function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})}},e=>{var t=t=>e(e.s=t);e.O(0,[636,593,792],()=>t(92164)),_N_E=e.O()}]);