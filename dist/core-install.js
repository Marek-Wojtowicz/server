/*! For license information please see core-install.js.LICENSE.txt */
!function(){"use strict";var e,t={84891:function(e,t,n){var r,o,a,i,s=n(19755),d=n.n(s),c=n(9944),l=n(74854),u=(r=document,o=l.emit,a=r.getElementsByTagName("head")[0].getAttribute("data-requesttoken"),{getToken:function(){return a},setToken:function(e){o("csrf-token-update",{token:a=e})}}).getToken;d().fn.extend({showPassword:function(e){var t={fn:null,args:{}};t.fn=e;var n=function(e,t){t.val(e.val())},r=function(e,t,r){e.is(":checked")?(n(t,r),r.show(),t.hide()):(n(r,t),r.hide(),t.show())};return this.each((function(){var e=d()(this),o=d()(e.data("typetoggle")),a=function(e){var t=d()(e),n=d()("<input />");return n.attr({type:"text",class:t.attr("class"),style:t.attr("style"),size:t.attr("size"),name:t.attr("name")+"-clone",tabindex:t.attr("tabindex"),autocomplete:"off"}),void 0!==t.attr("placeholder")&&n.attr("placeholder",t.attr("placeholder")),n}(e);a.insertAfter(e),t.fn&&(t.args.input=e,t.args.checkbox=o,t.args.clone=a),o.bind("click",(function(){r(o,e,a)})),e.bind("keyup",(function(){n(e,a)})),a.bind("keyup",(function(){n(a,e),e.trigger("keyup")})),a.bind("blur",(function(){e.trigger("focusout")})),r(o,e,a),a.closest("form").submit((function(e){a.prop("type","password")})),t.fn&&t.fn(t.args)}))}}),n(79366),n(75289),n(56396),n(33824),d().prototype.tooltip=(i=d().prototype.tooltip,function(e){try{return i.call(this,e)}catch(t){if(t instanceof TypeError&&"destroy"===e)return void 0===window.TESTING&&console.error("Deprecated call $.tooltip('destroy') has been deprecated and should be removed"),i.call(this,"dispose");if(t instanceof TypeError&&"fixTitle"===e)return void 0===window.TESTING&&console.error("Deprecated call $.tooltip('fixTitle') has been deprecated and should be removed"),i.call(this,"_fixTitle")}}),n(99205),n(38554),window.addEventListener("DOMContentLoaded",(function(){var e=!!d()("#hasSQLite").val();d()("#hasMySQL").val(),d()("#hasPostgreSQL").val(),d()("#hasOracle").val(),d()("#selectDbType").buttonset(),d()("#selectDbType p.info a").button("destroy"),d()("#hasSQLite").val()?(d()("#use_other_db").hide(),d()("#use_oracle_db").hide()):d()("#sqliteInformation").hide(),d()("#adminlogin").change((function(){d()("#adminlogin").val(d().trim(d()("#adminlogin").val()))})),d()("#sqlite").click((function(){d()("#use_other_db").slideUp(250),d()("#use_oracle_db").slideUp(250),d()("#sqliteInformation").show(),d()("#dbname").attr("pattern","[0-9a-zA-Z$_-]+")})),d()("#mysql,#pgsql").click((function(){d()("#use_other_db").slideDown(250),d()("#use_oracle_db").slideUp(250),d()("#sqliteInformation").hide(),d()("#dbname").attr("pattern","[0-9a-zA-Z$_-]+")})),d()("#oci").click((function(){d()("#use_other_db").slideDown(250),d()("#use_oracle_db").show(250),d()("#sqliteInformation").hide(),d()("#dbname").attr("pattern","[0-9a-zA-Z$_-.]+")})),d()("#showAdvanced").click((function(e){e.preventDefault(),d()("#datadirContent").slideToggle(250),d()("#databaseBackend").slideToggle(250),d()("#databaseField").slideToggle(250)})),d()("form").submit((function(){var e=d()(this).serializeArray();d()(".float-spinner").show(250),d()(":submit",this).attr("disabled","disabled").val(d()(":submit",this).data("finishing")),d()("input",this).addClass("ui-state-disabled").attr("disabled","disabled"),d()("#selectDbType").find(".ui-button").length>0&&d()("#selectDbType").buttonset("disable"),d()(".strengthify-wrapper, .tipsy").css("-ms-filter",'"progid:DXImageTransform.Microsoft.Alpha(Opacity=30)"').css("filter","alpha(opacity=30)").css("opacity",.3);var t=d()("<form>");t.attr("action",d()(this).attr("action")),t.attr("method","POST");for(var n=0;n<e.length;n++){var r=d()('<input type="hidden">');r.attr(e[n]),t.append(r)}var o=decodeURIComponent((new RegExp("[?|&]redirect_url=([^&;]+?)(&|#|;|$)").exec(location.search)||[,""])[1].replace(/\+/g,"%20"))||"";if(o){var a=d()('<input type="hidden">');a.attr({name:"redirect_url",value:o}),t.append(a)}return t.appendTo(document.body),t.submit(),!1}));var t=d()('input[type="radio"]:checked').val();void 0===t&&d()('input[type="radio"]').first().click(),("sqlite"===t||e&&void 0===t)&&(d()("#datadirContent").hide(250),d()("#databaseBackend").hide(250),d()("#databaseField").hide(250),d()(".float-spinner").hide(250)),d()("#adminpass").strengthify({zxcvbn:OC.linkTo("core","vendor/zxcvbn/dist/zxcvbn.js"),titles:[(0,c.translate)("core","Very weak password"),(0,c.translate)("core","Weak password"),(0,c.translate)("core","So-so password"),(0,c.translate)("core","Good password"),(0,c.translate)("core","Strong password")],drawTitles:!0,nonce:btoa(u())}),d()("#dbpass").showPassword().keyup(),d()("#adminpass").showPassword().keyup()}))}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=t,r.amdD=function(){throw new Error("define cannot be used indirect")},r.amdO={},e=[],r.O=function(t,n,o,a){if(!n){var i=1/0;for(l=0;l<e.length;l++){n=e[l][0],o=e[l][1],a=e[l][2];for(var s=!0,d=0;d<n.length;d++)(!1&a||i>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[d])}))?n.splice(d--,1):(s=!1,a<i&&(i=a));if(s){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[n,o,a]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},r.j=998,function(){var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e}(),function(){r.b=document.baseURI||self.location.href;var e={998:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,i=n[0],s=n[1],d=n[2],c=0;for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(d)var l=d(r);for(t&&t(n);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[i[c]]=0;return r.O(l)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[874],(function(){return r(84891)}));o=r.O(o)}();
//# sourceMappingURL=core-install.js.map?v=cd9ab80dd95f53c017e8