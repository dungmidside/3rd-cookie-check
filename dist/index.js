!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.cookieCheck=o():e.cookieCheck=o()}(self,(function(){return(()=>{var e={607:(e,o,t)=>{var r,n,i;!function(p){if("object"==typeof e.exports){var d=p(t(875),o);void 0!==d&&(e.exports=d)}else n=[t,o],void 0===(i="function"==typeof(r=p)?r.apply(o,n):r)||(e.exports=i)}((function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t=null;o.default=function(e){if(null!==t)return Promise.resolve({supported:t});var o=e.timeout,r=e.eventCode,n=e.iframeSrc;return new Promise((function(e){var i=document.createElement("iframe");i.id="3pc",i.src=n||"https://dungmidside.github.io/3rd-cookie-check/checkpage.html",i.style.display="none",i.style.position="fixed",window.addEventListener("message",(function o(n){var p=n.data;(!r||p!==r.supported&&p!==r.unsupported)&&(r||"3pc.supported"!==p&&"3pc.unsupported"!==p)||(t=r?p===r.supported:"3pc.supported"===p,e({supported:t,timeout:!1}),document.body.removeChild(i),window.removeEventListener("message",o))}),!1),setTimeout((function(){null===t&&(e({supported:t=!1,timeout:!0}),document.body.removeChild(i))}),o||1e3),document.body.appendChild(i)}))}}))},875:e=>{function o(e){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}o.keys=()=>[],o.resolve=o,o.id=875,e.exports=o}},o={};function t(r){var n=o[r];if(void 0!==n)return n.exports;var i=o[r]={exports:{}};return e[r](i,i.exports,t),i.exports}return t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),t(607)})()}));
//# sourceMappingURL=index.js.map