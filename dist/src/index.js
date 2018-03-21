"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isipv4;
function isipv4() {
  var inputString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var stringArray = inputString.split(".");

  if (stringArray.length != 4) {

    return false;
  }

  for (var i = 0; i <= stringArray.length - 1; i++) {
    if (stringArray[i] == "") {

      return false;
    }

    if (stringArray[i] > 255) {

      return false;
    }

    var isnum = /^\d+$/.test(stringArray[i]);
    if (isnum == false) {

      return false;
    }
  }

  return true;
}