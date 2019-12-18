"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = debounce;

function debounce(callback, delay) {
  var timerClear = function timerClear() {
    return clear = true;
  };

  var clear = true;
  return function (event) {
    if (clear) {
      clear = false;
      setTimeout(timerClear, delay);
      callback(event);
    }
  };
}