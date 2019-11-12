(function(t){function n(n){for(var r,i,s=n[0],c=n[1],l=n[2],p=0,u=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&u.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(n);while(u.length)u.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,n=0;n<o.length;n++){for(var e=o[n],r=!0,s=1;s<e.length;s++){var c=e[s];0!==a[c]&&(r=!1)}r&&(o.splice(n--,1),t=i(i.s=e[0]))}return t}var r={},a={app:0},o=[];function i(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=r,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)i.d(e,r,function(n){return t[n]}.bind(null,r));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var d=c;o.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"00b6":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("div",{staticClass:"squares"},t._l(4,(function(t){return e("div",{key:t,staticClass:"square"})})),0)])},a=[],o={name:"Squares"},i=o,s=(e("fea6"),e("2877")),c=Object(s["a"])(i,r,a,!1,null,"17fd915b",null);n["default"]=c.exports},"05e9":function(t,n,e){},"072a":function(t,n,e){"use strict";e.r(n),n["default"]='<template>\n  <div class="preloader loading">\n    <span class="slice"></span>\n    <span class="slice"></span>\n    <span class="slice"></span>\n    <span class="slice"></span>\n    <span class="slice"></span>\n    <span class="slice"></span>\n  </div>\n</template>\n\n<script>\n\nexport default {\n  name: \'Hexagon\',\n};\n<\/script>\n\n<style lang="scss" scoped>\n@for $i from 1 through 6 {\n  @keyframes preload-show-#{$i} {\n    from {\n      transform: rotateZ(60 * $i + deg) rotateY(-90deg) rotateX(0deg);\n      border-left-color: #9c2f2f;\n    }\n  }\n  @keyframes preload-hide-#{$i} {\n    to {\n      transform: rotateZ(60 * $i + deg) rotateY(-90deg) rotateX(0deg);\n      border-left-color: #9c2f2f;\n    }\n  }\n\n  @keyframes preload-cycle-#{$i} {\n    $startIndex: $i * 5;\n    $reverseIndex: (80 - $i * 5);\n\n    #{$startIndex * 1%} {\n      transform: rotateZ(60 * $i + deg) rotateY(90deg) rotateX(0deg);\n      border-left-color: #9c2f2f;\n    }\n    #{$startIndex + 5%},\n    #{$reverseIndex * 1%} {\n      transform: rotateZ(60 * $i + deg) rotateY(0) rotateX(0deg);\n      border-left-color: #f7484e;\n    }\n\n    #{$reverseIndex + 5%},\n    100% {\n      transform: rotateZ(60 * $i + deg) rotateY(90deg) rotateX(0deg);\n      border-left-color: #9c2f2f;\n    }\n  }\n}\n\n@keyframes preload-flip {\n  0% {\n    transform: rotateY(0deg) rotateZ(-60deg);\n  }\n  100% {\n    transform: rotateY(360deg) rotateZ(-60deg);\n  }\n}\n\nbody {\n  background: #efefef;\n}\n\n.preloader {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  font-size: 20px;\n  display: block;\n  width: 3.75em;\n  height: 4.25em;\n  margin-left: -1.875em;\n  margin-top: -2.125em;\n  transform-origin: center center;\n  transform: rotateY(180deg) rotateZ(-60deg);\n\n  .slice {\n    border-top: 1.125em solid transparent;\n    border-right: none;\n    border-bottom: 1em solid transparent;\n    border-left: 1.875em solid #f7484e;\n    position: absolute;\n    top: 0px;\n    left: 50%;\n    transform-origin: left bottom;\n    border-radius: 3px 3px 0 0;\n  }\n\n  @for $i from 1 through 6 {\n    .slice:nth-child(#{$i}) {\n      transform: rotateZ(60 * $i + deg) rotateY(0deg) rotateX(0);\n      animation: 0.15s linear 0.9 - $i * 0.08s preload-hide-#{$i} both 1;\n    }\n  }\n\n  &.loading {\n    animation: 2s preload-flip steps(2) infinite both;\n    @for $i from 1 through 6 {\n      .slice:nth-child(#{$i}) {\n        transform: rotateZ(60 * $i + deg) rotateY(90deg) rotateX(0);\n        animation: 2s preload-cycle-#{$i} linear infinite both;\n      }\n    }\n  }\n}\n</style>\n'},"0b7a":function(t,n,e){},"0e2d":function(t,n,e){"use strict";var r=e("c405"),a=e.n(r);a.a},2930:function(t,n,e){},"3fc0":function(t,n,e){t.exports={"color-alpha":"#acecf7","color-beta":"#ebd2b4","color-gamma":"#f4989c","color-delta":"#dac4f7","color-epsilon":"#d6f6dd","-webkit-transition-duration":"350ms","transition-duration":"350ms","-webkit-transition-timing-function":"ease","transition-timing-function":"ease"}},"442a":function(t,n,e){},"49dc":function(t,n,e){},"4a05":function(t,n,e){"use strict";var r=e("4ab9"),a=e.n(r);a.a},"4ab9":function(t,n,e){},"4b67":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var r=e("2b0e"),a=e("1c54"),o=e.n(a),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"cards"},t._l(t.cards,(function(n,r){return e("Card",{key:r,ref:"cards",refInFor:!0,attrs:{"loader-data":n.loaderData,"white-toolbar":n.darkBackground,types:n.types},on:{codeModalButtonClick:function(e){return t.$refs.codeModal.open(Object.assign({},n,{openerElement:e}))}}})})),1),e("CodeModal",{ref:"codeModal"})],1)},s=[],c=(e("8e6e"),e("ac6a"),e("456d"),e("bd86")),l=e("f753"),d=e.n(l),p=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"code-modal",style:{backgroundColor:"rgba(0,0,0, "+t.backgroundOpacity+")",transition:"background-color "+t.transitionDuration+"ms ease",pointerEvents:t.pointerEvents,overflow:t.overflow},on:{click:t.close}},[e("div",{staticClass:"modal-container"},[e("div",{ref:"modalWrapper",staticClass:"modal-wrapper"},[e("div",{staticClass:"modal",style:{transform:t.transform,transition:t.transition,opacity:t.opacity},on:{click:function(t){t.stopPropagation()}}},[e("div",{staticClass:"top"},[e("button",{staticClass:"close",on:{click:t.close}},[e("Cross")],1)]),e("div",{staticClass:"content"},[t.credit?e("div",{staticClass:"credit"},[t._v("\n            Credit:\n            "),e("a",{staticClass:"credit-url",attrs:{href:t.credit.url,rel:"noopener",target:"_blank"}},[t._v(t._s(t.credit.text))])]):t._e(),t._l([t.loaderSource,t.componentSource].filter((function(t){return t})),(function(t,n){return e("SourceContent",{key:n,staticClass:"source",attrs:{code:t}})}))],2)])])])])},u=[],f=(e("7f7f"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"source"},[e("div",{staticClass:"copy-wrapper"},[e("div",{staticClass:"copied",class:{visible:t.isCopied}},[t._v("Copied!")]),e("button",{staticClass:"button",on:{click:t.copyCode}},[e("Copy",{staticClass:"copy"})],1)]),e("div",{staticClass:"code"},[t._v(t._s(t.code))])])}),h=[],g=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("svg",{staticClass:"copy",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 3774 4612","shape-rendering":"geometricPrecision","text-rendering":"geometricPrecision","image-rendering":"optimizeQuality","fill-rule":"evenodd","clip-rule":"evenodd"}},[e("path",{attrs:{d:"M2708 4211l685-720h-685v720zm360-3865c0 63-51 115-115 115-63 0-115-51-115-115V230H229v3462h113c63 0 115 51 115 115 0 63-51 115-115 115H206c-57 0-108-23-145-60s-60-89-60-145V208c0-57 23-108 60-145S150 3 206 3h2657c56 0 108 23 145 60s60 88 60 145v140zm706 3053c0 52-35 97-83 110L2682 4570c-21 26-53 42-88 42H912c-57 0-108-23-145-60s-60-88-60-145V898c0-57 23-108 60-145s89-60 145-60h2657c56 0 108 23 145 60s60 88 60 145v2501zm-229-137V922H936v3462h1543V3377c0-63 51-115 115-115h951z","fill-rule":"nonzero"}})])},m=[],v={name:"Copy"},b=v,y=(e("4a05"),e("2877")),w=Object(y["a"])(b,g,m,!1,null,"272bd229",null),x=w.exports,C={name:"SourceContent",props:{code:{type:String,required:!0}},components:{Copy:x},data:function(){return{isCopied:!1}},methods:{toggleCopyLabel:function(){var t=this;this.isCopied=!0,setTimeout((function(){t.isCopied=!1}),1e3)},copyCode:function(){navigator.clipboard?navigator.clipboard.writeText(this.code).then(this.toggleCopyLabel):(window.clipboardData.setData("Text",this.code),this.toggleCopyLabel())}}},k=C,O=(e("d343"),Object(y["a"])(k,f,h,!1,null,"198fb3d6",null)),$=O.exports,S=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("svg",{staticClass:"cross",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 2541 2541","shape-rendering":"geometricPrecision","text-rendering":"geometricPrecision","image-rendering":"optimizeQuality","fill-rule":"evenodd","clip-rule":"evenodd"}},[e("path",{attrs:{d:"M29 172c-39-39-39-103 0-142s103-39 142 0l1099 1099L2369 30c39-39 103-39 142 0s39 103 0 142L1412 1271l1099 1099c39 39 39 103 0 142s-103 39-142 0L1270 1413 171 2512c-39 39-103 39-142 0s-39-103 0-142l1099-1099L29 172z","fill-rule":"nonzero"}})])},j=[],E={name:"Cross"},D=E,_=(e("8c5e"),Object(y["a"])(D,S,j,!1,null,"841328d8",null)),P=_.exports;function z(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function T(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?z(e,!0).forEach((function(n){Object(c["a"])(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):z(e).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var I={transition:"",opacity:0,transform:"",overflow:"hidden"},B={name:"CodeModal",components:{Cross:P,SourceContent:$},data:function(){return T({openerElement:{},componentSource:"",loaderSource:"",credit:""},I,{backgroundOpacity:0,pointerEvents:"none",transitionDuration:parseInt(d.a["transition-duration"])})},methods:{open:function(t){var n=this,e=t.credit,r=t.componentSource,a=t.loaderData,o=t.openerElement;o&&(this.openerElement=o,this.componentSource=r,this.loaderSource=T({},a),this.loaderSource.component&&(this.loaderSource.component=this.loaderSource.component.name),this.loaderSource=JSON.stringify(this.loaderSource,null,2),this.credit=e,this.$el.scrollTop=0,this.$nextTick((function(){n.goToOpener(),n.overflow="auto",n.opacity=1,setTimeout((function(){n.transition="transform ".concat(n.transitionDuration,"ms"),n.backgroundOpacity=.5,n.transform="translate(0, 0) scale(1)",n.pointerEvents="auto"}),50)})))},close:function(){var t=this;this.pointerEvents="none",this.goToOpener(),this.backgroundOpacity=0,setTimeout((function(){Object.keys(I).forEach((function(n){return t[n]=I[n]}))}),this.transitionDuration)},goToOpener:function(){var t=this.$refs.modalWrapper.getBoundingClientRect(),n=this.openerElement.getBoundingClientRect(),e="".concat(-1*(t.top+t.height/2-n.top-n.height/2),"px"),r="".concat(-1*(t.left+t.width/2-n.left-n.width/2),"px");this.transform="translate(".concat(r,", ").concat(e,") scale(0)")}}},M=B,q=(e("d9ce"),Object(y["a"])(M,p,u,!1,null,"de97db0e",null)),Y=q.exports,H=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"card",style:t.cardStyle},[e("div",{staticClass:"card-inner"},[e("div",{staticClass:"card-inner-2"},[e("div",{ref:"contentWrapper",staticClass:"content-wrapper"},[e("div",{ref:"content",staticClass:"content",style:t.content.style},[e("div",{ref:"loader",staticClass:"loader"},[e("a",{ref:"loaderButton",staticClass:"loader-button",style:t.loader.style,attrs:{href:"javascript:;"},on:{click:t.loaderExpand}},[e("span",{ref:"loaderHolder",staticClass:"loader-holder"})])]),e("div",{staticClass:"loader-space-saver-container"},[e("div",{staticClass:"loader-space-saver-wrapper"},[e("div",{ref:"loaderSpaceSaver",staticClass:"loader-space-saver"})])]),e("div",{staticClass:"toolbar",style:t.toolbarStyle},[e("button",{staticClass:"close",on:{click:t.contentContract}},[e("Cross")],1),e("button",{staticClass:"expand-wrapper",on:{click:t.contentExpand}},[e("Expand")],1),e("button",{ref:"codeButton",staticClass:"code-wrapper",on:{click:function(n){return t.$emit("codeModalButtonClick",t.$refs.codeButton)}}},[e("Code")],1)])])]),e("div",{staticClass:"background"})])])])},L=[],Z=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("svg",{staticClass:"code",attrs:{xmlns:"http://www.w3.org/2000/svg","shape-rendering":"geometricPrecision","text-rendering":"geometricPrecision","image-rendering":"optimizeQuality","fill-rule":"evenodd","clip-rule":"evenodd",viewBox:"0 0 640 640"}},[e("path",{attrs:{"fill-rule":"nonzero",d:"M234.227 122.352h-89.576L.001 312.618 144.65 502.86h89.576L89.576 312.618l144.651-190.266zm171.557 0h89.576L640 312.618 495.36 502.86h-89.576l144.651-190.242-144.651-190.266zm-40.3-66.639l31.016 7.229c4.878 1.122 7.938 6.047 6.804 10.913L286.137 577.471c-1.146 4.867-6.048 7.926-10.926 6.804l-31.016-7.229c-4.878-1.122-7.937-6.047-6.803-10.913L354.559 62.517c1.146-4.867 6.06-7.926 10.925-6.804z"}})])},R=[],X={name:"Code"},Q=X,W=(e("facd"),Object(y["a"])(Q,Z,R,!1,null,"d8d80680",null)),V=W.exports,A=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("svg",{staticClass:"expand",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 2721 2719","shape-rendering":"geometricPrecision","text-rendering":"geometricPrecision","image-rendering":"optimizeQuality","fill-rule":"evenodd","clip-rule":"evenodd"}},[e("path",{attrs:{d:"M2544 1989c0-49 40-89 89-89s89 40 89 89v637c0 49-40 89-89 89h-647c-49 0-89-40-89-89s40-89 89-89h425l-761-719c-36-33-37-89-4-125s89-37 125-4l774 731v-432zM1989 177c-49 0-89-40-89-89s40-89 89-89h637c49 0 89 40 89 89v647c0 49-40 89-89 89s-89-40-89-89V310l-719 761c-33 36-89 37-125 4s-37-89-4-125l731-774h-432zM177 725c0 49-40 89-89 89s-89-40-89-89V88C-1 39 39-1 88-1h647c49 0 89 40 89 89s-40 89-89 89H310l761 719c36 33 37 89 4 125s-89 37-125 4L176 294v432zm553 1816c49 0 89 40 89 89s-40 89-89 89H93c-49 0-89-40-89-89v-647c0-49 40-89 89-89s89 40 89 89v425l719-761c33-36 89-37 125-4s37 89 4 125l-731 774h432z","fill-rule":"nonzero"}})])},F=[],G={name:"Expand"},J=G,N=(e("e00c"),Object(y["a"])(J,A,F,!1,null,"6197160e",null)),K=N.exports,U=e("3fc0"),tt=e.n(U);function nt(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function et(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?nt(e,!0).forEach((function(n){Object(c["a"])(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):nt(e).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var rt={borderRadius:""},at={position:"",top:"",right:"",width:"",height:"",borderRadius:"",paddingTop:"",transition:""},ot={top:"",left:"",position:"",width:"",height:"",transition:"",zIndex:""},it={fill:""},st={name:"Card",components:{Cross:P,Expand:K,Code:V},props:{loaderData:{type:Object,required:!0},whiteToolbar:{type:Boolean},types:{type:String,default:""}},data:function(){return{cardStyle:et({},rt),content:{isExpanded:!1,style:et({},ot)},loader:{isExpanded:!1,timeoutId:null,style:et({},at)},toolbarStyle:et({},it),transitionDuration:parseInt(tt.a["transition-duration"])}},methods:{contentExpand:function(){var t=this;if(!this.content.isExpanded){var n=this.$refs.contentWrapper.getBoundingClientRect();this.clearLoaderTimeoutId(),this.content.isExpanded=!0,this.content.style=Object.assign(this.content.style,{top:"".concat(n.top,"px"),left:"".concat(n.left,"px"),width:"".concat(n.width,"px"),height:"".concat(n.height,"px"),position:"fixed",zIndex:3}),setTimeout((function(){t.content.style=Object.assign(t.content.style,{transition:"top ".concat(t.transitionDuration,"ms, left ").concat(t.transitionDuration,"ms"),left:"".concat(window.innerWidth/2-n.width/2,"px"),top:"".concat(window.innerHeight/2-n.height/2,"px")}),setTimeout((function(){t.content.style=Object.assign(t.content.style,{transition:"width ".concat(t.transitionDuration,"ms, height ").concat(t.transitionDuration,"ms, top ").concat(t.transitionDuration,"ms, left ").concat(t.transitionDuration,"ms"),top:"".concat(0,"px"),left:"".concat(0,"px"),width:"100%",height:"100%"}),t.cardStyle.borderRadius=0,setTimeout((function(){t.loaderExpand()}),t.transitionDuration)}),t.transitionDuration)}),30)}},contentContract:function(){var t=this;if(this.content.isExpanded){var n=this.$refs.contentWrapper.getBoundingClientRect();this.content.isExpanded=!1,this.cardStyle=Object.assign(this.cardStyle,rt),this.content.style=Object.assign(this.content.style,{top:"".concat(n.top,"px"),left:"".concat(n.left,"px"),width:"".concat(n.width,"px"),height:"".concat(n.height,"px")}),setTimeout((function(){t.content.style=Object.assign(t.content.style,ot),setTimeout((function(){t.loaderContract()}),50)}),this.transitionDuration)}},loaderExpand:function(){var t=this;this.clearLoaderTimeoutId(),this.loader.isExpanded||this.loaderSetBasePosition(),this.loader.isExpanded=!0,setTimeout((function(){t.whiteToolbar&&(t.toolbarStyle.fill="white"),t.loader.style=Object.assign(t.loader.style,{transition:"top ".concat(t.transitionDuration,"ms, right ").concat(t.transitionDuration,"ms, width ").concat(t.transitionDuration,"ms, height ").concat(t.transitionDuration,"ms, border-radius ").concat(t.transitionDuration,"ms"),top:"0",right:"0",width:"100%",height:"100%",borderRadius:"0"}),setTimeout((function(){t.loader.timeoutId=setTimeout((function(){t.loaderContract()}),4e3)}),t.transitionDuration)}),50)},loaderContract:function(){var t=this;this.content.isExpanded||(this.loader.isExpanded=!1,this.loaderSetBasePosition(),this.toolbarStyle=Object.assign(this.toolbarStyle,it),setTimeout((function(){t.loader.style=Object.assign(t.loader.style,at)}),this.transitionDuration))},loaderSetBasePosition:function(){var t=this.$refs.content.getBoundingClientRect(),n=this.$refs.loaderSpaceSaver.getBoundingClientRect();this.loader.style=Object.assign(this.loader.style,{position:"absolute",top:"".concat(n.top-t.top,"px"),right:"".concat(t.right-n.right,"px"),width:"".concat(n.width,"px"),height:"".concat(n.height,"px"),paddingTop:0})},clearLoaderTimeoutId:function(){this.loader.timeoutId&&clearTimeout(this.loader.timeoutId)}},mounted:function(){this.$preloaders.open(et({},this.loaderData,{container:this.$refs.loaderHolder}))}},ct=st,lt=(e("93f4"),Object(y["a"])(ct,H,L,!1,null,"34a6a414",null)),dt=lt.exports,pt=(e("ee13"),e("a071"),e("9a9e"),e("5b43"),e("ad89"),function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)}),ut=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"main"},[e("div",{staticClass:"dank-ass-loader"},[e("div",{staticClass:"row"},[e("div",{staticClass:"arrow up outer outer-18"}),e("div",{staticClass:"arrow down outer outer-17"}),e("div",{staticClass:"arrow up outer outer-16"}),e("div",{staticClass:"arrow down outer outer-15"}),e("div",{staticClass:"arrow up outer outer-14"})]),e("div",{staticClass:"row"},[e("div",{staticClass:"arrow up outer outer-1"}),e("div",{staticClass:"arrow down outer outer-2"}),e("div",{staticClass:"arrow up inner inner-6"}),e("div",{staticClass:"arrow down inner inner-5"}),e("div",{staticClass:"arrow up inner inner-4"}),e("div",{staticClass:"arrow down outer outer-13"}),e("div",{staticClass:"arrow up outer outer-12"})]),e("div",{staticClass:"row"},[e("div",{staticClass:"arrow down outer outer-3"}),e("div",{staticClass:"arrow up outer outer-4"}),e("div",{staticClass:"arrow down inner inner-1"}),e("div",{staticClass:"arrow up inner inner-2"}),e("div",{staticClass:"arrow down inner inner-3"}),e("div",{staticClass:"arrow up outer outer-11"}),e("div",{staticClass:"arrow down outer outer-10"})]),e("div",{staticClass:"row"},[e("div",{staticClass:"arrow down outer outer-5"}),e("div",{staticClass:"arrow up outer outer-6"}),e("div",{staticClass:"arrow down outer outer-7"}),e("div",{staticClass:"arrow up outer outer-8"}),e("div",{staticClass:"arrow down outer outer-9"})])])])}],ft={name:"Danger"},ht=ft,gt=(e("fc09"),Object(y["a"])(ht,pt,ut,!1,null,"e4c8b45e",null));gt.exports;function mt(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function vt(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?mt(e,!0).forEach((function(n){Object(c["a"])(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):mt(e).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var bt={asset:"Asset",component:"Component",text:"Text",html:"Html"},yt={name:"app",components:{Card:dt,CodeModal:Y},computed:{cards:function(){var t=this,n=[{loaderData:{component:e("00b6").default,overlayStyle:{backgroundColor:d.a["color-alpha"]}},componentSource:e("fdb9").default},{loaderData:{component:e("ee13").default,overlayStyle:{backgroundColor:"#ffffff"}},credit:{text:"GlitchWorker",url:"https://codepen.io/glitchworker/pen/mVgogz"},componentSource:e("703b").default},{loaderData:{component:e("a071").default,overlayStyle:{backgroundColor:"#ECF0F1"}},credit:{text:"Roland Lösslein",url:"https://codepen.io/weaintplastic/pen/qEMZbx"},componentSource:e("072a").default},{loaderData:{component:e("ad89").default,overlayStyle:{background:"radial-gradient(circle farthest-corner at center,#3c4b57 0%,#1c262b 100%)",opacity:1}},credit:{text:"Martin van Driel",url:"https://codepen.io/martinvd/pen/xbQJom"},componentSource:e("aa4f").default,darkBackground:!0},{loaderData:{component:e("9a9e").default,overlayStyle:{background:"radial-gradient(#222, #000)",opacity:.9}},credit:{text:"Jack Rugile",url:"https://codepen.io/jackrugile/pen/JddmaX"},componentSource:e("59d7").default,darkBackground:!0},{loaderData:{component:e("5b43").default,overlayStyle:{backgroundColor:"#242F3F",opacity:1}},credit:{text:"Tashfeen",url:"https://codepen.io/tashfene/pen/raEqrJ"},componentSource:e("6648").default,darkBackground:!0},{loaderData:{assetSrc:"https://i.giphy.com/media/TvLuZ00OIADoQ/giphy.webp",overlayStyle:{backgroundColor:"#1874d2",opacity:1}},credit:{text:"via GIPHY",url:"https://giphy.com/gifs/TvLuZ00OIADoQ"}},{loaderData:{cssStyle:{justifyContent:"flex-end"},assetSrc:"https://i.giphy.com/media/l3nWhI38IWDofyDrW/giphy.webp",overlayStyle:{backgroundColor:"#ffffff",opacity:1}},credit:{text:"via GIPHY, Tobias Rothe, @ethor",url:"https://giphy.com/gifs/thinking-l3nWhI38IWDofyDrW"}},{loaderData:{assetSrc:"https://i.giphy.com/media/xTkcEQACH24SMPxIQg/giphy.webp",overlayStyle:{backgroundColor:"#161618",opacity:1}},credit:{text:"via GIPHY, Make it Move, @makeitmove",url:"https://giphy.com/gifs/hand-bored-waiting-xTkcEQACH24SMPxIQg"},darkBackground:!0},{loaderData:{assetSrc:"https://i.giphy.com/media/jAYUbVXgESSti/giphy.webp",overlayStyle:{backgroundColor:"#ecf0ef",opacity:1}},credit:{text:"via GIPHY",url:"https://giphy.com/gifs/google-icon-loading-jAYUbVXgESSti"}},{loaderData:{assetSrc:"//i.imgur.com/FEDTpyE.gif",overlayStyle:{backgroundColor:"black",opacity:1}},credit:{text:"via GIPHY",url:"https://giphy.com/gifs/VseXvvxwowwCc"},darkBackground:!0},{loaderData:{assetSrc:"https://i.giphy.com/media/4T1NFafropdQOrBYw6/giphy.webp",overlayStyle:{background:"linear-gradient(to top, #6c87a7, #4262a8)",opacity:1}},credit:{text:"via GIPHY, Rodney Dangerfield, @rodneydangerfield",url:"https://giphy.com/gifs/rodneydangerfield-loop-flip-diving-4T1NFafropdQOrBYw6"}},{loaderData:{assetSrc:"https://i.giphy.com/media/sM503VtpDzxLy/giphy.webp",overlayStyle:{background:"#44defe",opacity:1}},credit:{text:"via GIPHY",url:"https://giphy.com/gifs/sM503VtpDzxLy"}},{loaderData:{assetSrc:"https://media.giphy.com/media/isodBFMr9EJ7G/giphy.gif",text:"Loading...",textStyle:{color:"white"}},credit:{text:"via GIPHY",url:"https://giphy.com/gifs/frozen-bit-loading-isodBFMr9EJ7G"},darkBackground:!0},{loaderData:{assetSrc:"https://i.giphy.com/media/MTKsRM3QzNeOI59SbO/giphy.webp",overlayStyle:{background:"black",opacity:1}},credit:{text:"via GIPHY",url:"https://giphy.com/gifs/loop-happiness-loading-MTKsRM3QzNeOI59SbO"},darkBackground:!0},{loaderData:{text:"Only text preloader.",textStyle:{textAlign:"center",color:"white",fontSize:"16px"}},darkBackground:!0},{loaderData:{cssStyle:{textAlign:"center"},html:'<div style="padding: 10px;"><p style="color: white; margin-bottom: 10px">Even the sky is not the limit with vue-preloaders.</p><div style="background: pink; padding: 5px">I\'m an injected HTML, <br>check source</div></div>'},darkBackground:!0}];return n.map((function(n){return t.getCardWithType(n)}))}},methods:{getCardWithType:function(t){var n=[],e=t.loaderData,r=e.component,a=e.assetSrc,o=e.text,i=e.html;return r&&n.push(bt.component),a&&n.push(bt.asset),o&&n.push(bt.text),i&&n.push(bt.html),vt({},t,{types:n.join(", ")})}}},wt=yt,xt=(e("8e04"),Object(y["a"])(wt,i,s,!1,null,"c288dac4",null)),Ct=xt.exports;e("fb98");r["a"].config.productionTip=!1,r["a"].use(o.a),new r["a"]({render:function(t){return t(Ct)}}).$mount("#app")},"59d7":function(t,n,e){"use strict";e.r(n),n["default"]='<template>\n  <div class="loader">\n    <div class="loader-inner">\n      <div class="loader-line-wrap">\n        <div class="loader-line"></div>\n      </div>\n      <div class="loader-line-wrap">\n        <div class="loader-line"></div>\n      </div>\n      <div class="loader-line-wrap">\n        <div class="loader-line"></div>\n      </div>\n      <div class="loader-line-wrap">\n        <div class="loader-line"></div>\n      </div>\n      <div class="loader-line-wrap">\n        <div class="loader-line"></div>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\n\nexport default {\n  name: \'Rainbow\',\n};\n<\/script>\n\n<style lang="scss" scoped>\n.loader {\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 99999;\n}\n\n.loader-inner {\n  bottom: 0;\n  height: 60px;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 100px;\n}\n\n.loader-line-wrap {\n  animation: spin 2000ms cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;\n  box-sizing: border-box;\n  height: 50px;\n  left: 0;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  transform-origin: 50% 100%;\n  width: 100px;\n}\n.loader-line {\n  border: 4px solid transparent;\n  border-radius: 100%;\n  box-sizing: border-box;\n  height: 100px;\n  left: 0;\n  margin: 0 auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 100px;\n}\n.loader-line-wrap:nth-child(1) {\n  animation-delay: -50ms;\n}\n.loader-line-wrap:nth-child(2) {\n  animation-delay: -100ms;\n}\n.loader-line-wrap:nth-child(3) {\n  animation-delay: -150ms;\n}\n.loader-line-wrap:nth-child(4) {\n  animation-delay: -200ms;\n}\n.loader-line-wrap:nth-child(5) {\n  animation-delay: -250ms;\n}\n\n.loader-line-wrap:nth-child(1) .loader-line {\n  border-color: hsl(0, 80%, 60%);\n  height: 90px;\n  width: 90px;\n  top: 7px;\n}\n.loader-line-wrap:nth-child(2) .loader-line {\n  border-color: hsl(60, 80%, 60%);\n  height: 76px;\n  width: 76px;\n  top: 14px;\n}\n.loader-line-wrap:nth-child(3) .loader-line {\n  border-color: hsl(120, 80%, 60%);\n  height: 62px;\n  width: 62px;\n  top: 21px;\n}\n.loader-line-wrap:nth-child(4) .loader-line {\n  border-color: hsl(180, 80%, 60%);\n  height: 48px;\n  width: 48px;\n  top: 28px;\n}\n.loader-line-wrap:nth-child(5) .loader-line {\n  border-color: hsl(240, 80%, 60%);\n  height: 34px;\n  width: 34px;\n  top: 35px;\n}\n\n@keyframes spin {\n  0%,\n  15% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n</style>\n'},"5b43":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"wrapper"},[e("span",{staticClass:"loader"},[e("span",{staticClass:"loader-inner"})])])}],o={name:"SquareFill"},i=o,s=(e("0e2d"),e("2877")),c=Object(s["a"])(i,r,a,!1,null,"d57de05c",null);n["default"]=c.exports},"5ca7":function(t,n,e){"use strict";var r=e("442a"),a=e.n(r);a.a},"5e0f":function(t,n,e){"use strict";var r=e("49dc"),a=e.n(r);a.a},"61df":function(t,n,e){},6648:function(t,n,e){"use strict";e.r(n),n["default"]='<template>\n  <div class="wrapper">\n    <span class="loader">\n      <span class="loader-inner"></span>\n    </span>\n  </div>\n</template>\n\n<script>\n\nexport default {\n  name: \'SquareFill\',\n};\n<\/script>\n\n<style lang="scss" scoped>\n.wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.loader {\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  border: 4px solid #fff;\n  animation: loader 2s infinite ease;\n}\n\n.loader-inner {\n  vertical-align: top;\n  display: inline-block;\n  width: 100%;\n  background-color: #fff;\n  animation: loader-inner 2s infinite ease-in;\n}\n\n@keyframes loader {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  25% {\n    transform: rotate(180deg);\n  }\n\n  50% {\n    transform: rotate(180deg);\n  }\n\n  75% {\n    transform: rotate(360deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loader-inner {\n  0% {\n    height: 0%;\n  }\n\n  25% {\n    height: 0%;\n  }\n\n  50% {\n    height: 100%;\n  }\n\n  75% {\n    height: 100%;\n  }\n\n  100% {\n    height: 0%;\n  }\n}\n</style>\n'},"703b":function(t,n,e){"use strict";e.r(n),n["default"]='<template>\n    <div class="loader">\n        <div class="slack">\n            <div class="green"></div>\n            <div class="blue"></div>\n            <div class="orange"></div>\n            <div class="pink"></div>\n        </div>\n    </div>\n</template>\n\n<script>\n\nexport default {\n  name: \'Slack\',\n};\n<\/script>\n\n<style lang="scss" scoped>\n/* Color map */\n$default-color-white: #ffffff;\n$default-color-green: #3EB991;\n$default-color-blue: #6ECADC;\n$default-color-pink: #E01563;\n$default-color-orange: #E9A820;\n\n/* Dot */\n$dot-width: 17px;\n$dot-opacity: .75;\n\n/* Mixins */\n@mixin slack-dot-bg($background-color){\n  &::before {\n    background-color: rgba($background-color, $dot-opacity);\n  }\n}\n\n.loader {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  flex-wrap: nowrap;\n}\n\n/* Slack */\n.slack {\n  width: ($dot-width * 5);\n  height: ($dot-width * 5);\n  align-self: center;\n  position: relative;\n}\n.green, .blue,\n.pink, .orange {\n  position: absolute;\n  width: $dot-width;\n  height: $dot-width;\n  border-radius: $dot-width;\n  display: block;\n  &::before {\n    right: 0;\n    /* Animation */\n    animation-name: slack-width;\n    animation-iteration-count: infinite;\n    animation-direction: alternate;\n    animation-direction: normal;\n    animation-duration: 2s;\n    width: $dot-width;\n    position: absolute;\n    height: $dot-width;\n    content: \'\';\n    display: block;\n    border-radius: $dot-width;\n  }\n}\n.green {\n  top: 0;\n  left: 0;\n  transform: rotate(70deg);\n  @include slack-dot-bg($default-color-green);\n}\n.blue {\n  top: 0;\n  right: 0;\n  transform: rotate(160deg);\n  @include slack-dot-bg($default-color-blue);\n}\n.orange {\n  bottom: 0;\n  right: 0;\n  transform: rotate(-110deg);\n  @include slack-dot-bg($default-color-orange);\n}\n.pink {\n  bottom: 0;\n  left: 0;\n  transform: rotate(-20deg);\n  @include slack-dot-bg($default-color-pink);\n}\n\n@keyframes slack-width {\n  0% { width: $dot-width; right: 0; }\n  30% { width: ($dot-width * 6); right: -($dot-width * 5); }\n  60% { width: $dot-width; right: -($dot-width * 5); }\n}\n</style>\n'},"74bc":function(t,n,e){"use strict";var r=e("ffaa"),a=e.n(r);a.a},"74d0":function(t,n,e){},8408:function(t,n,e){},"8c5e":function(t,n,e){"use strict";var r=e("8408"),a=e.n(r);a.a},"8e04":function(t,n,e){"use strict";var r=e("a51c"),a=e.n(r);a.a},"93f4":function(t,n,e){"use strict";var r=e("2930"),a=e.n(r);a.a},"9a9e":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"loader"},[e("div",{staticClass:"loader-inner"},[e("div",{staticClass:"loader-line-wrap"},[e("div",{staticClass:"loader-line"})]),e("div",{staticClass:"loader-line-wrap"},[e("div",{staticClass:"loader-line"})]),e("div",{staticClass:"loader-line-wrap"},[e("div",{staticClass:"loader-line"})]),e("div",{staticClass:"loader-line-wrap"},[e("div",{staticClass:"loader-line"})]),e("div",{staticClass:"loader-line-wrap"},[e("div",{staticClass:"loader-line"})])])])}],o={name:"Rainbow"},i=o,s=(e("74bc"),e("2877")),c=Object(s["a"])(i,r,a,!1,null,"ecdd6d36",null);n["default"]=c.exports},a071:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"preloader loading"},[e("span",{staticClass:"slice"}),e("span",{staticClass:"slice"}),e("span",{staticClass:"slice"}),e("span",{staticClass:"slice"}),e("span",{staticClass:"slice"}),e("span",{staticClass:"slice"})])}],o={name:"Hexagon"},i=o,s=(e("e176"),e("2877")),c=Object(s["a"])(i,r,a,!1,null,"743b8780",null);n["default"]=c.exports},a51c:function(t,n,e){},aa4f:function(t,n,e){"use strict";e.r(n),n["default"]='<template>\n  <div class="loader">\n    <div class="inner one"></div>\n    <div class="inner two"></div>\n    <div class="inner three"></div>\n  </div>\n</template>\n\n<script>\n\nexport default {\n  name: \'Infinite\',\n};\n<\/script>\n\n<style lang="scss" scoped>\n.loader {\n  position: absolute;\n  top: calc(50% - 32px);\n  left: calc(50% - 32px);\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  perspective: 800px;\n}\n\n.inner {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n\n.inner.one {\n  left: 0%;\n  top: 0%;\n  animation: rotate-one 1s linear infinite;\n  border-bottom: 3px solid #efeffa;\n}\n\n.inner.two {\n  right: 0%;\n  top: 0%;\n  animation: rotate-two 1s linear infinite;\n  border-right: 3px solid #efeffa;\n}\n\n.inner.three {\n  right: 0%;\n  bottom: 0%;\n  animation: rotate-three 1s linear infinite;\n  border-top: 3px solid #efeffa;\n}\n\n@keyframes rotate-one {\n  0% {\n    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);\n  }\n  100% {\n    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);\n  }\n}\n\n@keyframes rotate-two {\n  0% {\n    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);\n  }\n  100% {\n    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);\n  }\n}\n\n@keyframes rotate-three {\n  0% {\n    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);\n  }\n  100% {\n    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);\n  }\n}\n</style>\n'},ad89:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"loader"},[e("div",{staticClass:"inner one"}),e("div",{staticClass:"inner two"}),e("div",{staticClass:"inner three"})])}],o={name:"Infinite"},i=o,s=(e("5e0f"),e("2877")),c=Object(s["a"])(i,r,a,!1,null,"6e36ee38",null);n["default"]=c.exports},af8a:function(t,n,e){},c405:function(t,n,e){},c508:function(t,n,e){},d343:function(t,n,e){"use strict";var r=e("61df"),a=e.n(r);a.a},d9ce:function(t,n,e){"use strict";var r=e("c508"),a=e.n(r);a.a},e00c:function(t,n,e){"use strict";var r=e("74d0"),a=e.n(r);a.a},e176:function(t,n,e){"use strict";var r=e("af8a"),a=e.n(r);a.a},ee13:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"loader"},[e("div",{staticClass:"slack"},[e("div",{staticClass:"green"}),e("div",{staticClass:"blue"}),e("div",{staticClass:"orange"}),e("div",{staticClass:"pink"})])])}],o={name:"Slack"},i=o,s=(e("5ca7"),e("2877")),c=Object(s["a"])(i,r,a,!1,null,"1389f4a9",null);n["default"]=c.exports},f753:function(t,n,e){t.exports={"color-alpha":"#acecf7","color-beta":"#ebd2b4","color-gamma":"#f4989c","color-delta":"#dac4f7","color-epsilon":"#d6f6dd","-webkit-transition-duration":"350ms","transition-duration":"350ms","-webkit-transition-timing-function":"ease","transition-timing-function":"ease"}},facd:function(t,n,e){"use strict";var r=e("0b7a"),a=e.n(r);a.a},fb98:function(t,n,e){t.exports={"color-alpha":"#acecf7","color-beta":"#ebd2b4","color-gamma":"#f4989c","color-delta":"#dac4f7","color-epsilon":"#d6f6dd","-webkit-transition-duration":"350ms","transition-duration":"350ms","-webkit-transition-timing-function":"ease","transition-timing-function":"ease"}},fc09:function(t,n,e){"use strict";var r=e("05e9"),a=e.n(r);a.a},fdb9:function(t,n,e){"use strict";e.r(n),n["default"]='<template>\n  <div class="container">\n    <div class="squares">\n      <div class="square" v-for="i in 4" :key="i"></div>\n    </div>\n  </div>\n</template>\n\n<script>\n\nexport default {\n  name: \'Squares\',\n};\n<\/script>\n\n<style lang="scss" scoped>\n$squares-size: 40px;\n$square-size: $squares-size / 2;\n$animation: 1s linear infinite;\n\n.container {\n  text-align: center;\n}\n\n.squares {\n  position: relative;\n  display: inline-block;\n  width: $squares-size;\n  height: $squares-size;\n  overflow: hidden;\n  transform-origin: bottom left;\n  animation: squares $animation;\n}\n\n.square {\n  position: absolute;\n  width: $square-size;\n  height: 20px;\n  background-color: white;\n  left: 0px;\n  top: 0px;\n\n  &:first-child {\n    top: $square-size;\n  }\n  &:nth-child(2) {\n    left: $square-size;\n    top: $square-size;\n    animation: square2 $animation;\n  }\n  &:nth-child(3) {\n    animation: square3 $animation;\n  }\n  &:last-child {\n    left: $square-size;\n    animation: square4 $animation;\n  }\n}\n\n@keyframes squares {\n  from {\n    transform: scale(1);\n  }\n  90% {\n    transform: scale(1);\n  }\n  to {\n    transform: scale(0.5);\n  }\n}\n@keyframes square2 {\n  from {\n    transform: translateY(-50px);\n  }\n  25% {\n    transform: translate(0);\n  }\n  to {\n    transform: translate(0);\n  }\n}\n@keyframes square3 {\n  from {\n    transform: translateY(-50px);\n  }\n  50% {\n    transform: translate(0);\n  }\n  to {\n    transform: translate(0);\n  }\n}\n@keyframes square4 {\n  from {\n    transform: translateY(-50px);\n  }\n  75% {\n    transform: translate(0);\n  }\n  to {\n    transform: translate(0);\n  }\n}\n</style>\n'},fea6:function(t,n,e){"use strict";var r=e("4b67"),a=e.n(r);a.a},ffaa:function(t,n,e){}});
//# sourceMappingURL=app.e4ac8585.js.map