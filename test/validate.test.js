// import { $validate } from '../lib/index'
const { $validate } = require('../lib')
const { validatePhone, validateName, validateIdCard, validateEmail } = $validate
test('电话校验', () => {
  expect(validatePhone('13800138000')).toBe(true)
  expect(validatePhone('123')).toBe(false)
})
test('姓名校验', () => {
  expect(validateName('张三')).toBe(true);
  expect(validateName('123')).toBe(false);
})
test('身份证校验', () => {
  expect(validateIdCard('130427199106120556')).toBe(true);
  expect(validateIdCard('123456')).toBe(false);
})
test('邮箱校验', () => {
  expect(validateEmail('test@example.com')).toBe(true);
  expect(validateEmail('test@com')).toBe(false);
})
