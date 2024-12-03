---
title: element
---

# element

元素模块

## isWindow

判断是否 `Window` 对象

- 类型

  ```ts
  isWindow(data: any): boolean
  ```

- 详细信息

  提供一个任意类型的入参，该方法会判断它是否为 `Window` 对象，返回 `boolean` 值

- 示例

  ```ts
  import { element } from 'dap-util'
  element.isWindow(window) //true
  element.isWindow('a') //false
  ```
