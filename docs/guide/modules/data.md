---
title: data
---

# data

数据模块

## set

在 `dom` 元素或者 `window` 或者 `Document` 上绑定指定数据

- 类型

  ```ts
  set(el: HTMLElement | Window | Document, key: string, value: any): void
  ```

- 详细信息

  第一个入参表示`dom` 元素或者 `window` 或者 `Document`，第二个入参表示绑定数据的 `key` 值，第三个参数表示绑定的数据

  该方法会将指定数据绑定到 `dom` 元素或者 `window` 或者 `Document` 上

- 示例

  ```ts
  import { data } from 'dap-util'
  data.set(document.body, 'name', 'jack')
  ```

## get

从 `dom` 元素或者 `window` 或者 `Document` 上获取绑定的指定数据

- 类型

  ```ts
  get<T>(el: HTMLElement | Window | Document, key?: string): T
  ```

- 详细信息

  第一个入参表示`dom` 元素或者 `window` 或者 `Document`，第二个入参表示需要获取的数据的 `key` 值，如果没有设置第二个参数，则默认返回绑定的全部数据

- 示例

  ```ts
  import { data } from 'dap-util'
  const name = data.get<string>(document.body, 'name') //jack
  ```

## has

判断 `dom` 元素或者 `window` 或者 `Document` 上是否存在绑定的数据

- 类型

  ```ts
  has(el: HTMLElement | Window | Document, key: string): boolean
  ```

- 详细信息

  第一个入参表示`dom` 元素或者 `window` 或者 `Document`，第二个入参表示需要获取的数据的 `key` 值

  该方法会判断指定 `key` 值的数据是否在 `dom` 元素或者 `window` 或者 `Document` 上，返回 `boolean` 值

- 示例

  ```ts
  import { data } from 'dap-util'
  data.has(document.body, 'name') //true
  ```

## remove

在 `dom` 元素或者 `window` 或者 `Document` 上移除指定数据

- 类型

  ```ts
  remove(el: HTMLElement | Window | Document, key?: string): void
  ```

- 详细信息

  第一个入参表示`dom` 元素或者 `window` 或者 `Document`，第二个入参表示需要移除的数据的 `key` 值，如果没有设置第二个参数，则默认移除绑定的全部数据

- 示例

  ```ts
  import { data } from 'dap-util'
  data.remove(document.body, 'name')
  ```
