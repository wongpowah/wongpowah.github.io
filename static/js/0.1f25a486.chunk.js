webpackJsonp([0],{247:function(n,e,t){"use strict";function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?n:e}function A(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=t(4),i=t.n(a),s=t(7),p=t.n(s),c=t(103),l=t(248),m=(t.n(l),function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}()),C=function(n,e){return Object(c.b)({loader:n,Loading:function(){return i.a.createElement("div",{className:"section-loading"},e)}})},f=C(function(){return t.e(3).then(t.bind(null,250))},"\u95dc\u65bc"),u=C(function(){return t.e(1).then(t.bind(null,253))},"\u7522\u54c1"),d=C(function(){return t.e(2).then(t.bind(null,267))},"\u806f\u7d61"),B={"#about":"\u95dc\u65bc","#products":"\u7522\u54c1","#contact":"\u806f\u7d61"},w=function(n){function e(){return o(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return A(e,n),m(e,[{key:"componentDidMount",value:function(){var n=this;window.onload=function(){return n._scrollToHash()}}},{key:"componentDidUpdate",value:function(){this._scrollToHash()}},{key:"_scrollToHash",value:function(){var n=this.props.history,e=n.location.hash||"#headline",t=document.querySelector(e),o=B[e]?" | "+B[e]:"";t&&setTimeout(function(){t.scrollIntoView({behavior:"smooth",block:"start"}),document.title="\u9ec3\u4fdd\u83ef\u91dd\u8eca\u6709\u9650\u516c\u53f8"+o})}},{key:"render",value:function(){return i.a.createElement("div",{id:"home-wrapper"},i.a.createElement("div",{id:"headline"},i.a.createElement("span",null,"\u540d\u724c\u7e2b\u7d09\u6a5f\u7e3d\u6703",i.a.createElement("br",null),"\u6b77\u53f2\u60a0\u4e45\uff0c\u4fe1\u8b7d\u7d20\u5b5a")),i.a.createElement("div",{id:"about"},i.a.createElement(f,null)),i.a.createElement("div",{id:"products"},i.a.createElement(u,null)),i.a.createElement("div",{id:"contact"},i.a.createElement(d,null)))}}]),e}(a.Component);w.propTypes={history:p.a.shape()},e.default=w},248:function(n,e,t){var o=t(249);"string"===typeof o&&(o=[[n.i,o,""]]);var r={hmr:!1};r.transform=void 0;t(246)(o,r);o.locals&&(n.exports=o.locals)},249:function(n,e,t){e=n.exports=t(245)(!0),e.push([n.i,"@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes slide-up{0%{padding-top:20px;opacity:0}to{padding-top:0;opacity:1}}@keyframes slide-up{0%{padding-top:20px;opacity:0}to{padding-top:0;opacity:1}}@-webkit-keyframes spin{to{transform:rotate(1turn);-webkit-transform:rotate(1turn)}}@keyframes spin{to{transform:rotate(1turn);-webkit-transform:rotate(1turn)}}@-webkit-keyframes bounce{0%,to{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes bounce{0%,to{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}#home-wrapper #headline{position:relative;min-height:100vh;margin-top:-60px;opacity:0;-webkit-animation:slide-up .5s .5s forwards;animation:slide-up .5s .5s forwards}#home-wrapper #headline span{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:90%;max-width:500px;text-align:center;font-size:48px;font-weight:700;color:#fff}@media only screen and (max-width:650px){#home-wrapper #headline span{font-size:32px}}#home-wrapper #about,#home-wrapper #contact,#home-wrapper #products{position:relative;min-height:100vh;-webkit-box-sizing:border-box;box-sizing:border-box;padding:80px 40px}#home-wrapper #about .section-loading,#home-wrapper #contact .section-loading,#home-wrapper #products .section-loading{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);font-size:200px;font-weight:700;text-align:center;opacity:.1}#home-wrapper #about .container,#home-wrapper #contact .container,#home-wrapper #products .container{opacity:0;-webkit-animation:slide-up .5s .5s forwards;animation:slide-up .5s .5s forwards}#home-wrapper #about{background-color:hsla(0,0%,100%,.8)}#home-wrapper #products{background-color:#fff}#home-wrapper #contact{background-color:hsla(0,0%,100%,.8)}","",{version:3,sources:["/Users/johnwong/Documents/GitHub/wongpowah.github.io/app/src/views/pages/home/style.css"],names:[],mappings:"AAAA,2BACE,GACE,SAAW,CAAE,AACf,GACE,SAAW,CAAE,CAAE,AAEnB,mBACE,GACE,SAAW,CAAE,AACf,GACE,SAAW,CAAE,CAAE,AAEnB,4BACE,GACE,iBAAkB,AAClB,SAAW,CAAE,AACf,GACE,cAAiB,AACjB,SAAW,CAAE,CAAE,AAEnB,oBACE,GACE,iBAAkB,AAClB,SAAW,CAAE,AACf,GACE,cAAiB,AACjB,SAAW,CAAE,CAAE,AAEnB,wBACE,GACE,wBAA0B,AAC1B,+BAAkC,CAAE,CAAE,AAE1C,gBACE,GACE,wBAA0B,AAC1B,+BAAkC,CAAE,CAAE,AAE1C,0BACE,MAEE,2BAA4B,AACpB,kBAAoB,CAAE,AAChC,IACE,2BAA4B,AACpB,kBAAoB,CAAE,CAAE,AAEpC,kBACE,MAEE,2BAA4B,AACpB,kBAAoB,CAAE,AAChC,IACE,2BAA4B,AACpB,kBAAoB,CAAE,CAAE,AAEpC,wBACE,kBAAmB,AACnB,iBAAkB,AAClB,iBAAkB,AAClB,UAAW,AACX,4CAA+C,AACvC,mCAAuC,CAAE,AACjD,6BACE,kBAAmB,AACnB,QAAS,AACT,SAAU,AACV,uCAAyC,AACrC,mCAAqC,AACjC,+BAAiC,AACzC,UAAW,AACX,gBAAiB,AACjB,kBAAmB,AACnB,eAAgB,AAChB,gBAAiB,AACjB,UAAe,CAAE,AACjB,yCACE,6BACE,cAAgB,CAAE,CAAE,AAE5B,oEAGE,kBAAmB,AACnB,iBAAkB,AAClB,8BAA+B,AACvB,sBAAuB,AAC/B,iBAAmB,CAAE,AACrB,uHAGE,kBAAmB,AACnB,QAAS,AACT,SAAU,AACV,uCAAyC,AACrC,mCAAqC,AACjC,+BAAiC,AACzC,gBAAiB,AACjB,gBAAkB,AAClB,kBAAmB,AACnB,UAAa,CAAE,AACjB,qGAGE,UAAW,AACX,4CAA+C,AACvC,mCAAuC,CAAE,AAErD,qBACE,mCAA2C,CAAE,AAE/C,wBACE,qBAA0B,CAAE,AAE9B,uBACE,mCAA2C,CAAE",file:"style.css",sourcesContent:["@-webkit-keyframes fade-in {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes fade-in {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@-webkit-keyframes slide-up {\n  from {\n    padding-top: 20px;\n    opacity: 0; }\n  to {\n    padding-top: 0px;\n    opacity: 1; } }\n\n@keyframes slide-up {\n  from {\n    padding-top: 20px;\n    opacity: 0; }\n  to {\n    padding-top: 0px;\n    opacity: 1; } }\n\n@-webkit-keyframes spin {\n  100% {\n    transform: rotate(360deg);\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes spin {\n  100% {\n    transform: rotate(360deg);\n    -webkit-transform: rotate(360deg); } }\n\n@-webkit-keyframes bounce {\n  0%,\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes bounce {\n  0%,\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n#home-wrapper #headline {\n  position: relative;\n  min-height: 100vh;\n  margin-top: -60px;\n  opacity: 0;\n  -webkit-animation: slide-up 0.5s 0.5s forwards;\n          animation: slide-up 0.5s 0.5s forwards; }\n  #home-wrapper #headline span {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n        -ms-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    width: 90%;\n    max-width: 500px;\n    text-align: center;\n    font-size: 48px;\n    font-weight: 700;\n    color: #ffffff; }\n    @media only screen and (max-width: 650px) {\n      #home-wrapper #headline span {\n        font-size: 32px; } }\n\n#home-wrapper #about,\n#home-wrapper #products,\n#home-wrapper #contact {\n  position: relative;\n  min-height: 100vh;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 80px 40px; }\n  #home-wrapper #about .section-loading,\n  #home-wrapper #products .section-loading,\n  #home-wrapper #contact .section-loading {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n        -ms-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    font-size: 200px;\n    font-weight: bold;\n    text-align: center;\n    opacity: 0.1; }\n  #home-wrapper #about .container,\n  #home-wrapper #products .container,\n  #home-wrapper #contact .container {\n    opacity: 0;\n    -webkit-animation: slide-up 0.5s 0.5s forwards;\n            animation: slide-up 0.5s 0.5s forwards; }\n\n#home-wrapper #about {\n  background-color: rgba(255, 255, 255, 0.8); }\n\n#home-wrapper #products {\n  background-color: #ffffff; }\n\n#home-wrapper #contact {\n  background-color: rgba(255, 255, 255, 0.8); }\n"],sourceRoot:""}])}});
//# sourceMappingURL=0.1f25a486.chunk.js.map