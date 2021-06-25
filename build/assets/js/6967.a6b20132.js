exports.id = 6967;
exports.ids = [6967];
exports.modules = {

/***/ 66967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSwipeBackGesture": () => (/* binding */ createSwipeBackGesture)
/* harmony export */ });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98840);
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31402);
/* harmony import */ var _gesture_controller_31cb6bb9_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36221);
var createSwipeBackGesture=function(r,e,t,a,n){var o=r.ownerDocument.defaultView;var i=function(r){return r.startX<=50&&e()};var v=function(r){var e=r.deltaX;var t=e/o.innerWidth;a(t)};var c=function(r){var e=r.deltaX;var t=o.innerWidth;var a=e/t;var i=r.velocityX;var v=t/2;var c=i>=0&&(i>.2||r.deltaX>v);var s=c?1-a:a;var u=s*t;var d=0;if(u>5){var l=u/Math.abs(i);d=Math.min(l,540)}n(c,a<=0?.01:(0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__.j)(0,a,.9999),d)};return (0,_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_0__.createGesture)({el:r,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:i,onStart:t,onMove:v,onEnd:c})};

/***/ })

};
;