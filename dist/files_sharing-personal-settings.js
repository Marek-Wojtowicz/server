/*! For license information please see files_sharing-personal-settings.js.LICENSE.txt */
!function(){"use strict";var n,e={71679:function(n,e,r){var a=r(20144),o=r(22200),i=r(79753),s=r(16453),c=r(26932),l=r(4820),u=r(62520),d=r.n(u);function f(n,e,t,r,a,o,i){try{var s=n[o](i),c=s.value}catch(n){return void t(n)}s.done?e(c):Promise.resolve(c).then(r,a)}var p=(0,s.loadState)("files_sharing","default_share_folder","/"),h=(0,s.loadState)("files_sharing","share_folder",p),g={name:"SelectShareFolderDialogue",data:function(){return{directory:h,defaultDirectory:p}},computed:{readableDirectory:function(){return this.directory?this.directory:"/"}},methods:{pickFolder:function(){var n,e=this;return(n=regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=(0,c.fn)(t("files","Choose a default folder for accepted shares")).startAt(e.readableDirectory).setMultiSelect(!1).setModal(!0).setType(1).setMimeTypeFilter(["httpd/unix-directory"]).allowDirectories().build(),n.prev=1,n.next=4,r.pick();case 4:if(n.t0=n.sent,n.t0){n.next=7;break}n.t0="/";case 7:if((a=n.t0).startsWith("/")){n.next=10;break}throw new Error(t("files","Invalid path selected"));case 10:return e.directory=d().normalize(a),n.next=13,l.default.put((0,i.generateUrl)("/apps/files_sharing/settings/shareFolder"),{shareFolder:e.directory});case 13:n.next=18;break;case 15:n.prev=15,n.t1=n.catch(1),(0,c.x2)(n.t1.message||t("files","Unknown error"));case 18:case"end":return n.stop()}}),n,null,[[1,15]])})),function(){var e=this,t=arguments;return new Promise((function(r,a){var o=n.apply(e,t);function i(n){f(o,r,a,i,s,"next",n)}function s(n){f(o,r,a,i,s,"throw",n)}i(void 0)}))})()},resetFolder:function(){this.directory=this.defaultDirectory,l.default.delete((0,i.generateUrl)("/apps/files_sharing/settings/shareFolder"))}}},v=g,m=r(93379),A=r.n(m),_=r(7795),y=r.n(_),b=r(90569),C=r.n(b),x=r(3565),w=r.n(x),k=r(19216),S=r.n(k),D=r(44589),P=r.n(D),F=r(39598),O={};O.styleTagTransform=P(),O.setAttributes=w(),O.insert=C().bind(null,"head"),O.domAPI=y(),O.insertStyleElement=S(),A()(F.Z,O),F.Z&&F.Z.locals&&F.Z.locals;var Z=r(51900),T=(0,Z.Z)(v,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"share-folder"},[t("span",[n._v(n._s(n.t("files_sharing","Set default folder for accepted shares"))+" ")]),n._v(" "),t("form",{staticClass:"share-folder__form",on:{reset:function(e){return e.preventDefault(),e.stopPropagation(),n.resetFolder.apply(null,arguments)}}},[t("input",{staticClass:"share-folder__picker",attrs:{type:"text",placeholder:n.readableDirectory},on:{click:function(e){return e.preventDefault(),n.pickFolder.apply(null,arguments)}}}),n._v(" "),n.readableDirectory!==n.defaultDirectory?t("input",{staticClass:"share-folder__reset",attrs:{type:"reset","aria-label":n.t("files_sharing","Reset folder to system default")},domProps:{value:n.t("files_sharing","Reset")}}):n._e()])])}),[],!1,null,"1b20ac1d",null);function E(n,e,t,r,a,o,i){try{var s=n[o](i),c=s.value}catch(n){return void t(n)}s.done?e(c):Promise.resolve(c).then(r,a)}var j={name:"PersonalSettings",components:{SelectShareFolderDialogue:T.exports},data:function(){return{accepting:(0,s.loadState)("files_sharing","accept_default"),enforceAcceptShares:(0,s.loadState)("files_sharing","enforce_accept"),allowCustomDirectory:(0,s.loadState)("files_sharing","allow_custom_share_folder")}},methods:{toggleEnabled:function(){var n,e=this;return(n=regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l.default.put((0,i.generateUrl)("/apps/files_sharing/settings/defaultAccept"),{accept:e.accepting});case 3:n.next=9;break;case 5:n.prev=5,n.t0=n.catch(0),(0,c.x2)(t("sharing","Error while toggling options")),console.error(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,5]])})),function(){var e=this,t=arguments;return new Promise((function(r,a){var o=n.apply(e,t);function i(n){E(o,r,a,i,s,"next",n)}function s(n){E(o,r,a,i,s,"throw",n)}i(void 0)}))})()}}},R=j,M=r(59936),B={};B.styleTagTransform=P(),B.setAttributes=w(),B.insert=C().bind(null,"head"),B.domAPI=y(),B.insertStyleElement=S(),A()(M.Z,B),M.Z&&M.Z.locals&&M.Z.locals;var I=(0,Z.Z)(R,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return!n.enforceAcceptShares||n.allowCustomDirectory?t("div",{staticClass:"section",attrs:{id:"files-sharing-personal-settings"}},[t("h2",[n._v(n._s(n.t("files_sharing","Sharing")))]),n._v(" "),n.enforceAcceptShares?n._e():t("p",[t("input",{directives:[{name:"model",rawName:"v-model",value:n.accepting,expression:"accepting"}],staticClass:"checkbox",attrs:{id:"files-sharing-personal-settings-accept",type:"checkbox"},domProps:{checked:Array.isArray(n.accepting)?n._i(n.accepting,null)>-1:n.accepting},on:{change:[function(e){var t=n.accepting,r=e.target,a=!!r.checked;if(Array.isArray(t)){var o=n._i(t,null);r.checked?o<0&&(n.accepting=t.concat([null])):o>-1&&(n.accepting=t.slice(0,o).concat(t.slice(o+1)))}else n.accepting=a},n.toggleEnabled]}}),n._v(" "),t("label",{attrs:{for:"files-sharing-personal-settings-accept"}},[n._v(n._s(n.t("files_sharing","Accept user and group shares by default")))])]),n._v(" "),n.allowCustomDirectory?t("p",[t("SelectShareFolderDialogue")],1):n._e()]):n._e()}),[],!1,null,"188f517d",null).exports;r.nc=btoa((0,o.getRequestToken)()),a.default.prototype.t=t,(new(a.default.extend(I))).$mount("#files-sharing-personal-settings")},59936:function(n,e,t){var r=t(94015),a=t.n(r),o=t(23645),i=t.n(o)()(a());i.push([n.id,"p[data-v-188f517d]{margin-top:12px;margin-bottom:12px}","",{version:3,sources:["webpack://./apps/files_sharing/src/components/PersonalSettings.vue"],names:[],mappings:"AAgFA,mBACC,eAAA,CACA,kBAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\np {\n\tmargin-top: 12px;\n\tmargin-bottom: 12px;\n}\n"],sourceRoot:""}]),e.Z=i},39598:function(n,e,t){var r=t(94015),a=t.n(r),o=t(23645),i=t.n(o)()(a());i.push([n.id,".share-folder__form[data-v-1b20ac1d]{display:flex}.share-folder__picker[data-v-1b20ac1d]{cursor:pointer;min-width:266px}.share-folder__reset[data-v-1b20ac1d]{background-color:transparent;border:none;font-weight:normal;text-decoration:underline;font-size:inherit}","",{version:3,sources:["webpack://./apps/files_sharing/src/components/SelectShareFolderDialogue.vue"],names:[],mappings:"AA0GC,qCACC,YAAA,CAGD,uCACC,cAAA,CACA,eAAA,CAID,sCACC,4BAAA,CACA,WAAA,CACA,kBAAA,CACA,yBAAA,CACA,iBAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.share-folder {\n\t&__form {\n\t\tdisplay: flex;\n\t}\n\n\t&__picker {\n\t\tcursor: pointer;\n\t\tmin-width: 266px;\n\t}\n\n\t// Make the reset button looks like text\n\t&__reset {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tfont-weight: normal;\n\t\ttext-decoration: underline;\n\t\tfont-size: inherit;\n\t}\n}\n"],sourceRoot:""}]),e.Z=i}},r={};function a(n){var t=r[n];if(void 0!==t)return t.exports;var o=r[n]={id:n,loaded:!1,exports:{}};return e[n].call(o.exports,o,o.exports,a),o.loaded=!0,o.exports}a.m=e,a.amdD=function(){throw new Error("define cannot be used indirect")},a.amdO={},n=[],a.O=function(e,t,r,o){if(!t){var i=1/0;for(u=0;u<n.length;u++){t=n[u][0],r=n[u][1],o=n[u][2];for(var s=!0,c=0;c<t.length;c++)(!1&o||i>=o)&&Object.keys(a.O).every((function(n){return a.O[n](t[c])}))?t.splice(c--,1):(s=!1,o<i&&(i=o));if(s){n.splice(u--,1);var l=r();void 0!==l&&(e=l)}}return e}o=o||0;for(var u=n.length;u>0&&n[u-1][2]>o;u--)n[u]=n[u-1];n[u]=[t,r,o]},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,{a:e}),e},a.d=function(n,e){for(var t in e)a.o(e,t)&&!a.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n},a.j=330,function(){var n={330:0};a.O.j=function(e){return 0===n[e]};var e=function(e,t){var r,o,i=t[0],s=t[1],c=t[2],l=0;if(i.some((function(e){return 0!==n[e]}))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(c)var u=c(a)}for(e&&e(t);l<i.length;l++)o=i[l],a.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return a.O(u)},t=self.webpackChunknextcloud=self.webpackChunknextcloud||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var o=a.O(void 0,[874],(function(){return a(71679)}));o=a.O(o)}();
//# sourceMappingURL=files_sharing-personal-settings.js.map?v=beb34e211185cf6b5a3e