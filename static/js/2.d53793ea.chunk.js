webpackJsonp([2],{267:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(4),o=e.n(a),A=e(35),c=e(268),i=e(271),r=(e.n(i),function(){return o.a.createElement("div",{id:"contact-container",className:"container"},o.a.createElement("div",{id:"contact-title"},"\u806f\u7d61"),o.a.createElement("div",{className:"contact-content"},o.a.createElement("div",{className:"contact-info"},o.a.createElement("div",{className:"content-title"},"\u9999\u6e2f\u7e3d\u516c\u53f8"),o.a.createElement("div",{className:"content-address"},"\u4e5d\u9f8d\u8354\u679d\u89d2\u905378-80\u865f"),o.a.createElement("div",{className:"content-phone"},o.a.createElement("p",null,"\u96fb\u8a71\uff1a",o.a.createElement("span",null,"+852")," 2391 6768"),o.a.createElement("p",null,"\u50b3\u771f\uff1a",o.a.createElement("span",null,"+852")," 2789 1538"),o.a.createElement("p",null,"\u96fb\u90f5\uff1a",o.a.createElement(A.a,{to:"mailto://info@wongpowah.com.hk"},"info@wongpowah.com.hk")))),o.a.createElement("div",{className:"map-container"},o.a.createElement(c.a,{center:{lat:22.324302,lng:114.166341},zoom:15}))),o.a.createElement("div",{className:"contact-branch"},"\u83ef\u88d4\u91dd\u8eca\uff08\u6df1\u5733\uff09\u6709\u9650\u516c\u53f8"),o.a.createElement("div",{className:"contact-content"},o.a.createElement("div",{className:"contact-info secondary"},o.a.createElement("div",{className:"content-title"},"\u6df1\u5733\u7e3d\u516c\u53f8"),o.a.createElement("div",{className:"content-address"},"\u5ee3\u6771\u7701\u6df1\u5733\u5e02\u798f\u7530\u5340",o.a.createElement("br",null),"\u6ff1\u6cb3\u5927\u90535022\u865f",o.a.createElement("br",null),"\u806f\u5408\u5ee3\u5834 A\u5ea7",o.a.createElement("br",null),"2210\u5ba4",o.a.createElement("br",null),"\u90f5\u653f\u7de8\u78bc\uff1a518000"),o.a.createElement("div",{className:"content-phone"},o.a.createElement("p",null,"\u96fb\u8a71\uff1a",o.a.createElement("span",null,"+86 755")," 2360 4173"))),o.a.createElement("div",{className:"map-container"},o.a.createElement(c.a,{center:{lat:22.529952,lng:114.068913},zoom:15}))),o.a.createElement("div",{className:"contact-content"},o.a.createElement("div",{className:"contact-info secondary"},o.a.createElement("div",{className:"content-title"},"\u4e0a\u6d77\u652f\u884c"),o.a.createElement("div",{className:"content-address"},"\u4e0a\u6d77\u5e02\u5ef6\u5b89\u4e2d\u8def841\u865f",o.a.createElement("br",null),"\u6771\u65b9\u6d77\u5916\u5927\u5ec8",o.a.createElement("br",null),"1701\u5ba4"),o.a.createElement("div",{className:"content-phone"},o.a.createElement("p",null,"\u96fb\u8a71\uff1a",o.a.createElement("span",null,"+8621")," 6289 6086"),o.a.createElement("p",null,"\u50b3\u771f\uff1a",o.a.createElement("span",null,"+8621")," 6289 6087"))),o.a.createElement("div",{className:"map-container"},o.a.createElement(c.a,{center:{lat:31.223239,lng:121.454261},zoom:15}))))});t.default=r},268:function(n,t,e){"use strict";function a(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function o(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?n:t}function A(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}var c=e(4),i=e.n(c),r=e(7),s=e.n(r),p=e(59),l=e.n(p),m=e(269),C=(e.n(m),function(){function n(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}return function(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}}()),f=this,d=!1,E=!1,B=[];window.onGoogleAPILoaded=function(){B.map(function(n){return n()}),E=!0};var k=function(n){if(!d){d=!0;var t=document.createElement("script");t.type="text/javascript",t.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBscHxR1IISA-NVEUqbM8wICGDEqZ5RgH4&callback=onGoogleAPILoaded",t.async=!0,t.defer=!0,document.body.appendChild(t)}E?f.loadMap():B.push(n)},u=function(n){function t(n){a(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return e.state={loading:!0},k(function(){return e.loadMap()}),e}return A(t,n),C(t,[{key:"loadMap",value:function(){var n=this,t=this.props,e=t.center,a=t.zoom,o=google.maps,A=o.Map,c=o.Marker,i=new A(this.map,{center:e,zoom:a});i.addListener("idle",function(){return n.setState({loading:!1})}),new c({map:i,position:e})}},{key:"render",value:function(){var n=this,t=this.state.loading;return i.a.createElement("div",{className:l()("map",{loading:t}),ref:function(t){return n.map=t}})}}]),t}(c.Component);u.propTypes={center:s.a.shape({lat:s.a.number,lng:s.a.number}),zoom:s.a.number},t.a=u},269:function(n,t,e){var a=e(270);"string"===typeof a&&(a=[[n.i,a,""]]);var o={hmr:!1};o.transform=void 0;e(246)(a,o);a.locals&&(n.exports=a.locals)},270:function(n,t,e){t=n.exports=e(245)(!0),t.push([n.i,'@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes slide-up{0%{padding-top:20px;opacity:0}to{padding-top:0;opacity:1}}@keyframes slide-up{0%{padding-top:20px;opacity:0}to{padding-top:0;opacity:1}}@-webkit-keyframes spin{to{transform:rotate(1turn);-webkit-transform:rotate(1turn)}}@keyframes spin{to{transform:rotate(1turn);-webkit-transform:rotate(1turn)}}@-webkit-keyframes bounce{0%,to{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes bounce{0%,to{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}.map{position:relative;width:100%;height:100%}.map.loading{background-color:#d0d0d0}.map.loading:after,.map.loading:before{content:" ";position:absolute;top:50%;left:50%;width:40px;height:40px;margin-top:-20px;margin-left:-20px;border-radius:50%;background-color:#a0a0a0;opacity:.6;z-index:1;-webkit-animation:map-loading 2s infinite ease-in-out;animation:map-loading 2s infinite ease-in-out}.map.loading:after{-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes map-loading{0%,to{transform:scale(0);-webkit-transform:scale(0)}50%{transform:scale(1);-webkit-transform:scale(1)}}@keyframes map-loading{0%,to{transform:scale(0);-webkit-transform:scale(0)}50%{transform:scale(1);-webkit-transform:scale(1)}}',"",{version:3,sources:["/Users/johnwong/Documents/GitHub/wongpowah.github.io/app/src/views/components/map/style.css"],names:[],mappings:"AAAA,2BACE,GACE,SAAW,CAAE,AACf,GACE,SAAW,CAAE,CAAE,AAEnB,mBACE,GACE,SAAW,CAAE,AACf,GACE,SAAW,CAAE,CAAE,AAEnB,4BACE,GACE,iBAAkB,AAClB,SAAW,CAAE,AACf,GACE,cAAiB,AACjB,SAAW,CAAE,CAAE,AAEnB,oBACE,GACE,iBAAkB,AAClB,SAAW,CAAE,AACf,GACE,cAAiB,AACjB,SAAW,CAAE,CAAE,AAEnB,wBACE,GACE,wBAA0B,AAC1B,+BAAkC,CAAE,CAAE,AAE1C,gBACE,GACE,wBAA0B,AAC1B,+BAAkC,CAAE,CAAE,AAE1C,0BACE,MAEE,2BAA4B,AACpB,kBAAoB,CAAE,AAChC,IACE,2BAA4B,AACpB,kBAAoB,CAAE,CAAE,AAEpC,kBACE,MAEE,2BAA4B,AACpB,kBAAoB,CAAE,AAChC,IACE,2BAA4B,AACpB,kBAAoB,CAAE,CAAE,AAEpC,KACE,kBAAmB,AACnB,WAAY,AACZ,WAAa,CAAE,AACf,aACE,wBAA0B,CAAE,AAC5B,uCACE,YAAa,AACb,kBAAmB,AACnB,QAAS,AACT,SAAU,AACV,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,kBAAmB,AACnB,yBAA0B,AAC1B,WAAa,AACb,UAAW,AACX,sDAAuD,AAC/C,6CAA+C,CAAE,AAC3D,mBACE,4BAA6B,AACrB,mBAAqB,CAAE,AAErC,+BACE,MAEE,mBAAoB,AACpB,0BAA4B,CAAE,AAChC,IACE,mBAAoB,AACpB,0BAA4B,CAAE,CAAE,AAEpC,uBACE,MAEE,mBAAoB,AACpB,0BAA4B,CAAE,AAChC,IACE,mBAAoB,AACpB,0BAA4B,CAAE,CAAE",file:"style.css",sourcesContent:['@-webkit-keyframes fade-in {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes fade-in {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@-webkit-keyframes slide-up {\n  from {\n    padding-top: 20px;\n    opacity: 0; }\n  to {\n    padding-top: 0px;\n    opacity: 1; } }\n\n@keyframes slide-up {\n  from {\n    padding-top: 20px;\n    opacity: 0; }\n  to {\n    padding-top: 0px;\n    opacity: 1; } }\n\n@-webkit-keyframes spin {\n  100% {\n    transform: rotate(360deg);\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes spin {\n  100% {\n    transform: rotate(360deg);\n    -webkit-transform: rotate(360deg); } }\n\n@-webkit-keyframes bounce {\n  0%,\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes bounce {\n  0%,\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n.map {\n  position: relative;\n  width: 100%;\n  height: 100%; }\n  .map.loading {\n    background-color: #d0d0d0; }\n    .map.loading::before, .map.loading::after {\n      content: " ";\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      width: 40px;\n      height: 40px;\n      margin-top: -20px;\n      margin-left: -20px;\n      border-radius: 50%;\n      background-color: #a0a0a0;\n      opacity: 0.6;\n      z-index: 1;\n      -webkit-animation: map-loading 2s infinite ease-in-out;\n              animation: map-loading 2s infinite ease-in-out; }\n    .map.loading::after {\n      -webkit-animation-delay: -1s;\n              animation-delay: -1s; }\n\n@-webkit-keyframes map-loading {\n  0%,\n  100% {\n    transform: scale(0);\n    -webkit-transform: scale(0); }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1); } }\n\n@keyframes map-loading {\n  0%,\n  100% {\n    transform: scale(0);\n    -webkit-transform: scale(0); }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1); } }\n'],sourceRoot:""}])},271:function(n,t,e){var a=e(272);"string"===typeof a&&(a=[[n.i,a,""]]);var o={hmr:!1};o.transform=void 0;e(246)(a,o);a.locals&&(n.exports=a.locals)},272:function(n,t,e){t=n.exports=e(245)(!0),t.push([n.i,"@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes slide-up{0%{padding-top:20px;opacity:0}to{padding-top:0;opacity:1}}@keyframes slide-up{0%{padding-top:20px;opacity:0}to{padding-top:0;opacity:1}}@-webkit-keyframes spin{to{transform:rotate(1turn);-webkit-transform:rotate(1turn)}}@keyframes spin{to{transform:rotate(1turn);-webkit-transform:rotate(1turn)}}@-webkit-keyframes bounce{0%,to{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes bounce{0%,to{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}#contact-container{max-width:1000px;margin:auto}#contact-container #contact-title{font-size:48px;text-align:center}@media only screen and (max-width:650px){#contact-container #contact-title{font-size:32px}}#contact-container .contact-branch{margin-top:50px;padding-top:20px;font-size:24px;border-top:1px solid #a0a0a0}@media only screen and (max-width:650px){#contact-container .contact-branch{text-align:center}}#contact-container .contact-content{margin-top:40px}#contact-container .contact-content .contact-info{width:50%;float:left}@media only screen and (max-width:650px){#contact-container .contact-content .contact-info{width:auto;text-align:center;float:none}}#contact-container .contact-content .contact-info.secondary{text-align:right;float:right}@media only screen and (max-width:650px){#contact-container .contact-content .contact-info.secondary{text-align:center;float:none}}#contact-container .contact-content .contact-info .content-title{font-size:24px;margin-bottom:20px}@media only screen and (max-width:650px){#contact-container .contact-content .contact-info .content-title{font-size:18px}}#contact-container .contact-content .contact-info .content-address,#contact-container .contact-content .contact-info .content-phone{display:block;font-size:18px;line-height:24px;margin-bottom:40px;color:#555}@media only screen and (max-width:650px){#contact-container .contact-content .contact-info .content-address,#contact-container .contact-content .contact-info .content-phone{font-size:16px}}#contact-container .contact-content .contact-info .content-address span,#contact-container .contact-content .contact-info .content-phone span{font-style:italic;padding-right:10px}#contact-container .contact-content .contact-info .content-phone{font-weight:200}#contact-container .contact-content .map-container{width:auto;height:300px;overflow:hidden;border-radius:5px;-webkit-box-shadow:rgba(0,0,0,.2) 0 1px 5px;box-shadow:0 1px 5px rgba(0,0,0,.2)}","",{version:3,sources:["/Users/johnwong/Documents/GitHub/wongpowah.github.io/app/src/views/pages/home/contact/style.css"],names:[],mappings:"AAAA,2BACE,GACE,SAAW,CAAE,AACf,GACE,SAAW,CAAE,CAAE,AAEnB,mBACE,GACE,SAAW,CAAE,AACf,GACE,SAAW,CAAE,CAAE,AAEnB,4BACE,GACE,iBAAkB,AAClB,SAAW,CAAE,AACf,GACE,cAAiB,AACjB,SAAW,CAAE,CAAE,AAEnB,oBACE,GACE,iBAAkB,AAClB,SAAW,CAAE,AACf,GACE,cAAiB,AACjB,SAAW,CAAE,CAAE,AAEnB,wBACE,GACE,wBAA0B,AAC1B,+BAAkC,CAAE,CAAE,AAE1C,gBACE,GACE,wBAA0B,AAC1B,+BAAkC,CAAE,CAAE,AAE1C,0BACE,MAEE,2BAA4B,AACpB,kBAAoB,CAAE,AAChC,IACE,2BAA4B,AACpB,kBAAoB,CAAE,CAAE,AAEpC,kBACE,MAEE,2BAA4B,AACpB,kBAAoB,CAAE,AAChC,IACE,2BAA4B,AACpB,kBAAoB,CAAE,CAAE,AAEpC,mBACE,iBAAkB,AAClB,WAAa,CAAE,AACf,kCACE,eAAgB,AAChB,iBAAmB,CAAE,AACrB,yCACE,kCACE,cAAgB,CAAE,CAAE,AAC1B,mCACE,gBAAiB,AACjB,iBAAkB,AAClB,eAAgB,AAChB,4BAA8B,CAAE,AAChC,yCACE,mCACE,iBAAmB,CAAE,CAAE,AAC7B,oCACE,eAAiB,CAAE,AACnB,kDACE,UAAW,AACX,UAAY,CAAE,AACd,yCACE,kDACE,WAAY,AACZ,kBAAmB,AACnB,UAAY,CAAE,CAAE,AACpB,4DACE,iBAAkB,AAClB,WAAa,CAAE,AACf,yCACE,4DACE,kBAAmB,AACnB,UAAY,CAAE,CAAE,AACtB,iEACE,eAAgB,AAChB,kBAAoB,CAAE,AACtB,yCACE,iEACE,cAAgB,CAAE,CAAE,AAC1B,oIAEE,cAAe,AACf,eAAgB,AAChB,iBAAkB,AAClB,mBAAoB,AACpB,UAAe,CAAE,AACjB,yCACE,oIAEE,cAAgB,CAAE,CAAE,AACxB,8IAEE,kBAAmB,AACnB,kBAAoB,CAAE,AAC1B,iEACE,eAAiB,CAAE,AACvB,mDACE,WAAY,AACZ,aAAc,AACd,gBAAiB,AACjB,kBAAmB,AACnB,4CAAmD,AAC3C,mCAA2C,CAAE",file:"style.css",sourcesContent:["@-webkit-keyframes fade-in {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes fade-in {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@-webkit-keyframes slide-up {\n  from {\n    padding-top: 20px;\n    opacity: 0; }\n  to {\n    padding-top: 0px;\n    opacity: 1; } }\n\n@keyframes slide-up {\n  from {\n    padding-top: 20px;\n    opacity: 0; }\n  to {\n    padding-top: 0px;\n    opacity: 1; } }\n\n@-webkit-keyframes spin {\n  100% {\n    transform: rotate(360deg);\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes spin {\n  100% {\n    transform: rotate(360deg);\n    -webkit-transform: rotate(360deg); } }\n\n@-webkit-keyframes bounce {\n  0%,\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes bounce {\n  0%,\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n#contact-container {\n  max-width: 1000px;\n  margin: auto; }\n  #contact-container #contact-title {\n    font-size: 48px;\n    text-align: center; }\n    @media only screen and (max-width: 650px) {\n      #contact-container #contact-title {\n        font-size: 32px; } }\n  #contact-container .contact-branch {\n    margin-top: 50px;\n    padding-top: 20px;\n    font-size: 24px;\n    border-top: 1px solid #a0a0a0; }\n    @media only screen and (max-width: 650px) {\n      #contact-container .contact-branch {\n        text-align: center; } }\n  #contact-container .contact-content {\n    margin-top: 40px; }\n    #contact-container .contact-content .contact-info {\n      width: 50%;\n      float: left; }\n      @media only screen and (max-width: 650px) {\n        #contact-container .contact-content .contact-info {\n          width: auto;\n          text-align: center;\n          float: none; } }\n      #contact-container .contact-content .contact-info.secondary {\n        text-align: right;\n        float: right; }\n        @media only screen and (max-width: 650px) {\n          #contact-container .contact-content .contact-info.secondary {\n            text-align: center;\n            float: none; } }\n      #contact-container .contact-content .contact-info .content-title {\n        font-size: 24px;\n        margin-bottom: 20px; }\n        @media only screen and (max-width: 650px) {\n          #contact-container .contact-content .contact-info .content-title {\n            font-size: 18px; } }\n      #contact-container .contact-content .contact-info .content-address,\n      #contact-container .contact-content .contact-info .content-phone {\n        display: block;\n        font-size: 18px;\n        line-height: 24px;\n        margin-bottom: 40px;\n        color: #555555; }\n        @media only screen and (max-width: 650px) {\n          #contact-container .contact-content .contact-info .content-address,\n          #contact-container .contact-content .contact-info .content-phone {\n            font-size: 16px; } }\n        #contact-container .contact-content .contact-info .content-address span,\n        #contact-container .contact-content .contact-info .content-phone span {\n          font-style: italic;\n          padding-right: 10px; }\n      #contact-container .contact-content .contact-info .content-phone {\n        font-weight: 200; }\n    #contact-container .contact-content .map-container {\n      width: auto;\n      height: 300px;\n      overflow: hidden;\n      border-radius: 5px;\n      -webkit-box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px;\n              box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px; }\n"],sourceRoot:""}])}});
//# sourceMappingURL=2.d53793ea.chunk.js.map