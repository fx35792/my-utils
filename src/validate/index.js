const COM_REG = {
  mobile: /^1[3-9]\d{9}$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
}
/**
 * 校验手机号
 * @param {string} phone - 手机号号码
 * @returns {boolean} - 是否有效
 */
function validatePhone(phone) {
  return COM_REG.mobile.test(phone)
}

/**
 * 校验姓名
 * @param {string} name - 姓名
 * @returns {boolean} - 是否有效
 */
function validateName(name) {
  const reg0 = /^([\p{Unified_Ideograph}·]){2,20}$/u
  const reg = /^[\u4e00-\u9fa5·•]{2,20}$/
  const res2 = /^·/
  const res3 = /·$/
  const res4 = /·{2,}/
  return (reg0.test(name) || reg.test(name)) && !res2.test(name) && !res3.test(name) && !res4.test(name)
}

/**
 * 校验身份证
 * @param {string} idCard - 身份证号
 * @returns {boolean} - 是否有效
 */
function validateIdCard(idCard) {
  if (idCard === '') {
    return false
  }
  if (idCard.length !== 18) {
    return false
  }
  let area = {
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
  }
  if (area[parseInt(idCard.substr(0, 2))] == null) {
    return false
  }
  if (idCard.length === 15) {
    let pattern = /^\d{15}$/
    if (pattern.exec(idCard) == null) {
      return false
    }
    let birth = parseInt('19' + idCard.substr(6, 2))
    let month = idCard.substr(8, 2)
    let day = parseInt(idCard.substr(10, 2))
    switch (month) {
      case '01':
      case '03':
      case '05':
      case '07':
      case '08':
      case '10':
      case '12':
        if (day > 31) {
          return false
        }
        break
      case '04':
      case '06':
      case '09':
      case '11':
        if (day > 30) {
          return false
        }
        break
      case '02':
        if ((birth % 4 === 0 && birth % 100 !== 0) || birth % 400 === 0) {
          if (day > 29) {
            return false
          }
        } else {
          if (day > 28) {
            return false
          }
        }
        break
      default:
        return false
    }
    let nowYear = new Date()
    let year = nowYear.getFullYear()
    return !(year - birth < 15 || year - birth > 100)
  }
  let Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1]
  let lSum = 0
  let nNum = 0
  // let nCheckSum = 0;
  for (let i = 0; i < 17; ++i) {
    if (idCard.charAt(i) < '0' || idCard.charAt(i) > '9') {
      return false
    } else {
      nNum = idCard.charAt(i) - '0'
    }
    lSum += nNum * Wi[i]
  }
  if (idCard.charAt(17) === 'X' || idCard.charAt(17) === 'x') {
    lSum += 10 * Wi[17]
  } else if (idCard.charAt(17) < '0' || idCard.charAt(17) > '9') {
    return false
  } else {
    lSum += (idCard.charAt(17) - '0') * Wi[17]
  }
  return lSum % 11 === 1
}

/**
 * 校验邮箱
 * @param {string} email - 邮箱
 * @returns {boolean} - 是否有效
 */
function validateEmail(email) {
  return COM_REG.email.test(email)
}

export default {
  validatePhone,
  validateName,
  validateIdCard,
  validateEmail
}
