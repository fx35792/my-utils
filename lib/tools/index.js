"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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

// 数组转对象 [{label:'语文', value:'chinese'},{label:'数学', value:'math'}] 转换为 {chinese:'语文', math:'数学'}
function arrToObj() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var label = arguments.length > 1 ? arguments[1] : undefined;
  var value = arguments.length > 2 ? arguments[2] : undefined;
  // 若数组为空 则返回空对象
  if (!arr.length) return {};
  var valueText = value || 'value'; // 作为对象的 key
  var labelText = label || 'label'; // 作为对象的 value
  return arr.reduce(function (acc, item) {
    acc[item[valueText]] = item[labelText];
    return acc;
  }, {});
}

// 对象转数组 {chinese:'语文', math:'数学'} 转换为数组 [{label:'语文', value:'chinese'},{label:'数学', value:'math'}]
function objToArr() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var label = arguments.length > 1 ? arguments[1] : undefined;
  var value = arguments.length > 2 ? arguments[2] : undefined;
  // 若对象为空 则 返回空数组
  if (!Object.values(obj).length) return [];
  var valueText = value || 'value'; // 作为对象的 key
  var labelText = label || 'label'; // 作为对象的 value

  return Object.entries(obj).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      value = _ref2[0],
      label = _ref2[1];
    return _defineProperty(_defineProperty({}, labelText, label), valueText, value);
  });
}
var _default = exports["default"] = {
  unique: unique,
  isEmpty: isEmpty,
  maskName: maskName,
  maskPhone: maskPhone,
  maskCardNumber: maskCardNumber,
  arrToObj: arrToObj,
  objToArr: objToArr
};