# My Utils

`my-utils` 是一个包含常用工具方法和验证方法的 JavaScript 库。它包含了两个主要模块：

- **$tools**：提供了常用的工具方法（如去重、姓名脱敏、证件号脱敏等）。
- **$validate**：提供了常见的数据校验方法（如身份证、姓名、电话、邮箱等验证）。

## 安装

你可以通过 npm 安装 `my-utils`：

```bash
npm i @sunnyfan/my-utils
```

## 使用
1. **工具方法($tools)**
* 导入方式 支持 import 和 require
```
// 使用 import 导入
import { $tools } from 'my-utils';
// 或者使用 require 导入
const { $tools } = require('my-utils');

```
* 提供的方法
-- 
```
const arr = [1, 2, 2, 3];
const result = $tools.unique(arr);
console.log(result); // [1, 2, 3]

const name = '张三';
const maskedName = $tools.maskName(name);
console.log(maskedName); // 张*

...
```

2. **验证方法($validate)**：
* 导入方式 支持 import 和 require
```
// 使用 import 导入
import { $validate } from 'my-utils';
// 或者使用 require 导入
const { $validate } = require('my-utils');

```
* 提供的方法
-- 
```
const name = '张三';
const isValid = validate.validateName(name);
console.log(isValid); // true

const phone = '13800138000';
const isValid = validate.validatePhone(phone);
console.log(isValid); // true

...
```

## 所有方法
1. **工具方法($tools)**：
   - `unique(arr)`：用来去重数组。
   - `isEmpty(arr)`：用来检查是否为空。
   - `maskName(name)`：用来对姓名进行脱敏处理。
   - `maskPhone(name)`：用来对姓名进行脱敏处理。
   - `maskCardNumber(id)`：用来对证件号进行脱敏处理。

2. **验证方法($validate)**：
   - `validateIdCard(id)`：验证身份证号码是否有效。
   - `validateName(name)`：验证姓名是否符合常见规则。
   - `validatePhone(phone)`：验证电话号码是否合法。
   - `validateEmail(email)`：验证邮箱是否合法。

