!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("vue")):"function"==typeof define&&define.amd?define(["exports","react","vue"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Core={},e.React,e.Vue)}(this,(function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=r(t),i=r(n),u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s={element:"div",id:"svelte-wrapper"};e.toReact=function(e,n){return function(r){var i=t.useRef(null),c=t.useRef(null),a=t.useState(!1),l=a[0],f=a[1];return t.useEffect((function(){var t,n,o=/on([A-Z]{1,}[a-zA-Z]*)/,u=/watch([A-Z]{1,}[a-zA-Z]*)/;c.current=new e({target:i.current,props:r});var s=[];for(var a in r){var l=a.match(o),f=a.match(u);l&&"function"==typeof r[a]&&(null===(t=c.current)||void 0===t||t.$on(""+l[1][0].toLowerCase()+l[1].slice(1),r[a])),f&&"function"==typeof r[a]&&s.push([""+f[1][0].toLowerCase()+f[1].slice(1),r[a]])}if(s.length){var d=null===(n=c.current)||void 0===n?void 0:n.$$.update;d&&(c.current.$$.update=function(){s.forEach((function(e){var t,n,r=e[0],o=e[1],i=null===(t=c.current)||void 0===t?void 0:t.$$.props[r],u=null===(n=c.current)||void 0===n?void 0:n.$$.ctx[i];u&&o(u)})),d.apply(null,arguments)})}return function(){var e;null===(e=c.current)||void 0===e||e.$destroy()}}),[]),t.useEffect((function(){var e;l?null===(e=c.current)||void 0===e||e.$set(r):f(!0)}),[r]),n=n?Object.assign({},s,n):s,o.default.createElement(n.element,{ref:i,id:n.id,className:n.className,style:u({},n.styles)})}},e.toVue=function(e,t){return function(n){return t=t?Object.assign({},s,t):s,i.default.component(t.id,{render:function(e){return e(null==t?void 0:t.element,{ref:"container",attrs:{class:null==t?void 0:t.className,id:null==t?void 0:t.id},style:u({},null==t?void 0:t.styles)})},data:function(){return{comp:null}},mounted:function(){this.comp=new e({target:this.$refs.container,props:n});var t=[];for(var r in this.$listeners){this.comp.$on(r,this.$listeners[r]);var o=r.match(/watch:([^]+)/);o&&"function"==typeof this.$listeners[r]&&t.push([""+o[1][0].toLowerCase()+o[1].slice(1),this.$listeners[r]])}if(t.length){var i=this.comp,u=this.comp.$$.update;this.comp.$$.update=function(){t.forEach((function(e){var t=e[0],n=e[1],r=i.$$.props[t],o=i.$$.ctx[r];o&&n(o)})),u.apply(null,arguments)}}},updated:function(){this.comp.$set(this.$attrs)},destroyed:function(){this.comp.$destroy()}})}},Object.defineProperty(e,"__esModule",{value:!0})}));
