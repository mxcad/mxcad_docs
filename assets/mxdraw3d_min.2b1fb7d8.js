
var mxdraw3d = (() => {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(mxdraw3d = {})  {



  return mxdraw3d.ready
}

);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = mxdraw3d;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return mxdraw3d; });
else if (typeof exports === 'object')
  exports["mxdraw3d"] = mxdraw3d;