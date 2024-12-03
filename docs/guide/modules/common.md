---
title: common
---

# common

通用模块

## matchingText

常用正则匹配判断

- 类型

  ```ts
  matchingText(text: string, param: matchingParamType): boolean
  ```

- 详细信息

  第一个入参表示需要匹配的字符串，第二个入参表示匹配的类型，该方法返回一个 `boolean` 值

  关于匹配的类型，取值范围如下：

  `Chinese`：判断字符串是否为中文

  `chinese`：判断字符串是否包含中文

  `email`：判断字符串是否为邮箱

  `username`：判断字符串是否为 4-16 位的用户名(字母数字下划线)

  `int+`：判断字符串是否为正整数

  `int`：判断字符串是否为整数

  `int-`：判断字符串是否为负整数

  `pos`：判断字符串是否为正数

  `neg`：判断字符串是否为负数

  `number`：判断字符串是否为数字

  `phone`：判断字符串是否为手机号

  `idCard`：判断字符串是否为身份证号码

  `url`：判断字符串是否为网址

  `IPv4`：判断字符串是否为 ip 地址

  `hex`：判断字符串是否为十六进制颜色值

  `rgb`：判断字符串是否为 rgb 值

  `rgba`：判断字符串是否为 rgba 值

  `QQ`：判断字符串是否为 QQ 号码

  `weixin`：判断字符串是否为微信号，6 至 20 位，以字母开头，字母，数字，减号，下划线

  `plate`：判断字符串是否为车牌号

- 示例

  ```ts
  import { common } from 'dap-util'
  common.matchingText('rgb(255, 0, 0)', 'rgb') //true
  ```

## getUrlParams

根据参数名获取地址栏参数值

- 类型

  ```ts
  getUrlParams(name: string): string | undefined
  ```

- 详细信息

  提供一个入参，类型为 `string`，表示要获取的地址栏参数名称，该方法返回一个参数值，如果地址栏没有该参数则返回 `undefined`

  该方法本质上可以兼容 `hash` 地址并且参数在 `hash` 后面的情况，但是如果 `hash` 前面也有参数，则不会考虑 `hash` 后面的参数

- 示例

  ```ts
  import { common } from 'dap-util'
  const name = common.getUrlParams('name')
  ```

## isEmptyObject

判断是否空对象

- 类型

  ```ts
  isEmptyObject(obj: any): boolean
  ```

- 详细信息

  提供一个任意类型的入参，判断是否为空对象，返回 `boolean` 值

  所谓的空对象，即该参数的 `typeof` 是 `object`，但是该参数没有任何属性

- 示例

  ```ts
  import { common } from 'dap-util'
  common.isEmptyObject({}) //true
  common.isEmptyObject({ name: 'a' }) //false
  common.isEmptyObject('name') //false
  ```

## equal

判断两个参数是否相等

- 类型

  ```ts
  equal(a: any, b: any): boolean
  ```

- 详细信息

  提供两个任意类型的入参，该方法会对这两个入参进行比较，判断是否相等，返回 `boolean` 值

- 示例

  ```ts
  import { common } from 'dap-util'
  common.equal(1, '1') //false
  common.equal(1, 1) //true
  common.equal({ name: 'a' }, { name: 'b' }) //false
  common.equal({ name: 'a' }, { name: 'a' }) //true
  ```

## isObject

判断是否对象

- 类型

  ```ts
  isObject(val: any): boolean
  ```

- 详细信息

  提供一个任意类型的入参，该方法会判断它是否为对象，返回 `boolean` 值

- 示例

  ```ts
  import { common } from 'dap-util'
  common.isObject('a') //false
  common.isObject({}) //true
  common.isObject({ name: 'a' }) //true
  ```

## copyText

复制指定文本到剪切板

- 类型

  ```ts
  copyText(text: string): Promise<void>
  ```

- 详细信息

  提供一个入参，类型为 `string`，表示需要复制的文字内容

  该方法内部调用的是 `navigator.clipboard.writeText` 方法，因此需要 `https` 支持

- 示例

  ```ts
  import { common } from 'dap-util'
  common.copyText('hello')
  ```

## clone

深度克隆

- 类型

  ```ts
  clone<T>(data: T): T
  ```

- 详细信息

  提供一个任意类型的入参，该方法会对该参数进行克隆，返回克隆的结果

- 示例

  ```ts
  import { common } from 'dap-util'
  const a = {
    name: 'a',
    age: 14
  }
  const b = common.clone(a) // { name: 'a', age: 14 }
  ```
