"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/**
 * 数组去重
 * @param {Array} arr - 原始数组
 * @returns {Array} - 去重数组
 */
function unique(arr) {
  return _toConsumableArray(new Set(arr));
}

/**
 * 检测是否为空
 * @param {string} val
 * @returns
 */
function isEmpty(val) {
  return val == undefined || val == null || val == '';
}

/**
 * 姓名脱敏
 * @param {string} name - 原始姓名
 * @returns {string} - 脱敏后的姓名
 */
function maskName(name) {
  if (name) {
    var chars = Array.from(name);
    var chatsLength = chars.length;
    if (chatsLength == 2) {
      return name.substring(0, 1) + '*';
    } else if (chatsLength == 3) {
      return chars[0] + '*' + chars[chatsLength - 1];
    } else if (chatsLength > 3) {
      return chars[0] + '**' + chars[chatsLength - 1];
    }
  } else {
    return '';
  }
}

/**
 * 手机号脱敏
 * @param {string} phone - 原始手机号
 * @returns {string} - 脱敏后的手机号
 */
function maskPhone(phone) {
  return phone && phone.length == 11 ? phone.slice(0, 3) + '****' + phone.slice(phone.length - 4) : '';
}

/**
 * 证件脱敏
 * @param {string} carNum - 原始证件号
 * @returns {string} - 脱敏后的证件号
 */
function maskCardNumber(cardNum) {
  if (!cardNum) {
    return '';
  }
  var len = cardNum.length;
  var regExp, replaceExp;
  if (len >= 15) {
    regExp = /^(\w{6})\w*(\w{4})$/;
    replaceExp = '$1****$2';
  } else if (len > 8) {
    regExp = /^(\w{2})\w*(\w{2})$/;
    replaceExp = '$1****$2';
  } else if (len > 4) {
    regExp = /^(\w{4})/;
    replaceExp = '****';
  } else {
    regExp = /^(\w{1})/;
    replaceExp = '*';
  }
  return cardNum.replace(regExp, replaceExp);
}
var _default = exports["default"] = {
  unique: unique,
  isEmpty: isEmpty,
  maskName: maskName,
  maskPhone: maskPhone,
  maskCardNumber: maskCardNumber
};