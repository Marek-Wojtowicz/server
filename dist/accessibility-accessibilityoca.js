/*! For license information please see accessibility-accessibilityoca.js.LICENSE.txt */
!function(){"use strict";var e,t={27214:function(e,t,r){var n=r(16453);OCA.Accessibility=(0,n.loadState)("accessibility","data"),OCA.Accessibility.checkMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(OCA.Accessibility.theme="dark"),!1!==OCA.Accessibility.theme?document.body.classList.add("theme--".concat(OCA.Accessibility.theme)):document.body.classList.add("theme--light"),!1!==OCA.Accessibility.highcontrast&&document.body.classList.add("theme--highcontrast")}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={id:e,loaded:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=t,n.amdD=function(){throw new Error("define cannot be used indirect")},n.amdO={},e=[],n.O=function(t,r,i,o){if(!r){var c=1/0;for(l=0;l<e.length;l++){r=e[l][0],i=e[l][1],o=e[l][2];for(var a=!0,u=0;u<r.length;u++)(!1&o||c>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(a=!1,o<c&&(c=o));if(a){e.splice(l--,1);var s=i();void 0!==s&&(t=s)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,i,o]},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},n.j=883,function(){var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e}(),function(){n.b=document.baseURI||self.location.href;var e={883:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,o,c=r[0],a=r[1],u=r[2],s=0;for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(u)var l=u(n);for(t&&t(r);s<c.length;s++)o=c[s],n.o(e,o)&&e[o]&&e[o][0](),e[c[s]]=0;return n.O(l)},r=self.webpackChunknextcloud=self.webpackChunknextcloud||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var i=n.O(void 0,[874],(function(){return n(27214)}));i=n.O(i)}();
//# sourceMappingURL=accessibility-accessibilityoca.js.map?v=9535f7add9f4fe6e8066