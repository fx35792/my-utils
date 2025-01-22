"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "$tools", {
  enumerable: true,
  get: function get() {
    return _index["default"];
  }
});
Object.defineProperty(exports, "$validate", {
  enumerable: true,
  get: function get() {
    return _index2["default"];
  }
});
var _index = _interopRequireDefault(require("./tools/index.js"));
var _index2 = _interopRequireDefault(require("./validate/index.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
module.exports = {
  $tools: _index["default"],
  $validate: _index2["default"]
};