import { $tools } from '../lib/index'
// const { $tools } = require('../lib')
const { unique, isEmpty, maskPhone, maskName, maskCardNumber } = $tools
test('数组去重', () => {
  expect(unique([1, 2, 2, 3])).toEqual([1, 2, 3])
})
test('是否为空', () => {
  expect(isEmpty('')).toEqual(true)
})
test('手机号脱敏功能', () => {
  expect(maskPhone('18311098924')).toBe('183****8924')
})
test('姓名脱敏功能', () => {
  expect(maskName('张三')).toBe('张*')
})

test('证件号脱敏功能', () => {
  expect(maskCardNumber('130427199106120556')).toBe('130427****0556')
})
