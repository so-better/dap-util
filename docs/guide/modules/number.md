---
title: number
---

# number

数字模块

## formatNumber()

数字格式化

- 类型

  ```ts
  formatNumber(num: number): string
  ```

- 详细信息

  提供一个入参，类型为 `number`，表示需要格式化的数字，该方法会返回该数字格式化后的字符串

  所谓的格式化，即每隔 3 位数给数值加上逗号

- 示例

  ```ts
  import { number } from 'dap-util'
  const formatNum = number.formatNumber(100000) //1000,00
  ```

## isNumber()

判断是否数字

- 类型

  ```ts
  isNumber(num: any): boolean
  ```

- 详细信息

  提供一个任意类型的入参，判断是否数字类型，返回 `boolean` 值

- 示例

  ```ts
  import { number } from 'dap-util'
  number.isNumber(100) //true
  number.isNumber('100') //false
  number.isNumber(NaN) //false
  ```

## add()

多个数的加法运算

- 类型

  ```ts
  add(...values: number[]): number
  ```

- 详细信息

  将多个数进行累加，参数可以是任意多个，必须都是数字类型，该方法返回累加后的数值

- 示例

  ```ts
  import { number } from 'dap-util'
  number.add(1, 1, 1) //3
  number.add(1, 10, 21) //32
  ```

## subtract()

多个数的减法运算

- 类型

  ```ts
  subtract(...values: number[]): number
  ```

- 详细信息

  将多个数进行累减，参数可以是任意多个，必须都是数字类型，该方法返回累减后的数值

- 示例

  ```ts
  import { number } from 'dap-util'
  number.subtract(1, 1, 1) //-1
  number.subtract(1, 10, 21) //-30
  ```

## mutiply()

多个数的乘法运算

- 类型

  ```ts
  mutiply(...values: number[]): number
  ```

- 详细信息

  将多个数进行累乘，参数可以是任意多个，必须都是数字类型，该方法返回累乘后的数值

- 示例

  ```ts
  import { number } from 'dap-util'
  number.mutiply(1, 1, 1) //1
  number.mutiply(1, 10, 21) //210
  ```

## divide()

多个数的除法运算

- 类型

  ```ts
  divide(...values: number[]): number
  ```

- 详细信息

  将多个数进行累除，参数可以是任意多个，必须都是数字类型，该方法返回累除后的数值

- 示例

  ```ts
  import { number } from 'dap-util'
  number.divide(9, 3, 2) //1.5
  number.divide(100, 1000, 2) //0.05
  ```
