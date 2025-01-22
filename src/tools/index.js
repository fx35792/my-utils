/**
 * 数组去重
 * @param {Array} arr - 原始数组
 * @returns {Array} - 去重数组
 */
function unique(arr) {
  return [...new Set(arr)]
}

/**
 * 检测是否为空
 * @param {string} val
 * @returns
 */
function isEmpty(val) {
  return val == undefined || val == null || val == ''
}

/**
 * 姓名脱敏
 * @param {string} name - 原始姓名
 * @returns {string} - 脱敏后的姓名
 */
function maskName(name) {
  if (name) {
    const chars = Array.from(name)
    const chatsLength = chars.length
    if (chatsLength == 2) {
      return name.substring(0, 1) + '*'
    } else if (chatsLength == 3) {
      return chars[0] + '*' + chars[chatsLength - 1]
    } else if (chatsLength > 3) {
      return chars[0] + '**' + chars[chatsLength - 1]
    }
  } else {
    return ''
  }
}

/**
 * 手机号脱敏
 * @param {string} phone - 原始手机号
 * @returns {string} - 脱敏后的手机号
 */
function maskPhone(phone) {
  return phone && phone.length == 11 ? phone.slice(0, 3) + '****' + phone.slice(phone.length - 4) : ''
}

/**
 * 证件脱敏
 * @param {string} carNum - 原始证件号
 * @returns {string} - 脱敏后的证件号
 */
function maskCardNumber(cardNum) {
  if (!cardNum) {
    return ''
  }

  const len = cardNum.length
  let regExp, replaceExp

  if (len >= 15) {
    regExp = /^(\w{6})\w*(\w{4})$/
    replaceExp = '$1****$2'
  } else if (len > 8) {
    regExp = /^(\w{2})\w*(\w{2})$/
    replaceExp = '$1****$2'
  } else if (len > 4) {
    regExp = /^(\w{4})/
    replaceExp = '****'
  } else {
    regExp = /^(\w{1})/
    replaceExp = '*'
  }

  return cardNum.replace(regExp, replaceExp)
}

export default {
  unique,
  isEmpty,
  maskName,
  maskPhone,
  maskCardNumber
}
