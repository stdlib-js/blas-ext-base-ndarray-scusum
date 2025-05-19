"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=c(function(x,s){
var d=require('@stdlib/ndarray-base-numel-dimension/dist'),v=require('@stdlib/ndarray-base-stride/dist'),i=require('@stdlib/ndarray-base-offset/dist'),u=require('@stdlib/ndarray-base-data-buffer/dist'),m=require('@stdlib/blas-ext-base-scusum/dist').ndarray;function o(e){var r=e[0],t=e[1],a=e[2],q=u(a)[i(a)];return m(d(r,0),q,u(r),v(r,0),i(r),u(t),v(t,0),i(t)),t}s.exports=o
});var f=n();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
