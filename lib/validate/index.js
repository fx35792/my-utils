"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var COM_REG = {
  mobile: /^1[3-9]\d{9}$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
};
/**
 * 校验手机号
 * @param {string} phone - 手机号号码
 * @returns {boolean} - 是否有效
 */
function validatePhone(phone) {
  return COM_REG.mobile.test(phone);
}

/**
 * 校验姓名
 * @param {string} name - 姓名
 * @returns {boolean} - 是否有效
 */
function validateName(name) {
  var reg0 = /^((?:[\xB7\u3400-\u4DBF\u4E00-\u9FFF\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])){2,20}$/;
  var reg = /^[\u4e00-\u9fa5·•]{2,20}$/;
  var res2 = /^·/;
  var res3 = /·$/;
  var res4 = /·{2,}/;
  return (reg0.test(name) || reg.test(name)) && !res2.test(name) && !res3.test(name) && !res4.test(name);
}

/**
 * 校验身份证
 * @param {string} idCard - 身份证号
 * @returns {boolean} - 是否有效
 */
function validateIdCard(idCard) {
  if (idCard === '') {
    return false;
  }
  if (idCard.length !== 18) {
    return false;
  }
  var area = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北',
    43: '巴中',
    44: '广东',
    45: '广西',
    46: '无锡',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    83: '台湾',
    91: '国外'
  };
  if (area[parseInt(idCard.substr(0, 2))] == null) {
    return false;
  }
  if (idCard.length === 15) {
    var pattern = /^\d{15}$/;
    if (pattern.exec(idCard) == null) {
      return false;
    }
    var birth = parseInt('19' + idCard.substr(6, 2));
    var month = idCard.substr(8, 2);
    var day = parseInt(idCard.substr(10, 2));
    switch (month) {
      case '01':
      case '03':
      case '05':
      case '07':
      case '08':
      case '10':
      case '12':
        if (day > 31) {
          return false;
        }
        break;
      case '04':
      case '06':
      case '09':
      case '11':
        if (day > 30) {
          return false;
        }
        break;
      case '02':
        if (birth % 4 === 0 && birth % 100 !== 0 || birth % 400 === 0) {
          if (day > 29) {
            return false;
          }
        } else {
          if (day > 28) {
            return false;
          }
        }
        break;
      default:
        return false;
    }
    var nowYear = new Date();
    var year = nowYear.getFullYear();
    return !(year - birth < 15 || year - birth > 100);
  }
  var Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1];
  var lSum = 0;
  var nNum = 0;
  // let nCheckSum = 0;
  for (var i = 0; i < 17; ++i) {
    if (idCard.charAt(i) < '0' || idCard.charAt(i) > '9') {
      return false;
    } else {
      nNum = idCard.charAt(i) - '0';
    }
    lSum += nNum * Wi[i];
  }
  if (idCard.charAt(17) === 'X' || idCard.charAt(17) === 'x') {
    lSum += 10 * Wi[17];
  } else if (idCard.charAt(17) < '0' || idCard.charAt(17) > '9') {
    return false;
  } else {
    lSum += (idCard.charAt(17) - '0') * Wi[17];
  }
  return lSum % 11 === 1;
}

/**
 * 校验邮箱
 * @param {string} email - 邮箱
 * @returns {boolean} - 是否有效
 */
function validateEmail(email) {
  return COM_REG.email.test(email);
}
var _default = exports["default"] = {
  validatePhone: validatePhone,
  validateName: validateName,
  validateIdCard: validateIdCard,
  validateEmail: validateEmail
};