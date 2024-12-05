---
title: event
---

# event

事件模块

## on()

给元素绑定事件

- 类型

  ```ts
  on(el: HTMLElement | Window | Document, eventName: string, fn: (e: Event) => void, options?: AddEventListenerOptions): void
  ```

- 详细信息

  第一个入参表示绑定事件的元素，同时支持 `window` 和 `document`；第二个入参表示事件名称，如“click”；第三个参数是可选参数，表示事件修饰参数，等同于 `addEventListener` 函数的第三个参数

  第二个参数在设置事件名称时，支持设置事件修饰名称，如“click.a”，后面的“a”就是修饰名称，同时也支持绑定多个事件，每个事件之间通过空格隔开

- 示例

  ```ts
  import { event } from 'dap-util'
  //设置事件
  event.on(document.body, 'click', e => {
    console.log('click')
  })
  //设置事件修饰名称
  event.on(document.body, 'mousedown.a', e => {
    console.log('mousedown.a')
  })
  //绑定多个事件
  event.on(document.body, 'mousedown click.a', e => {
    console.log('mousedown.a')
  })
  ```

## off()

解绑元素事件

- 类型

  ```ts
  off(el: HTMLElement | Window | Document, eventName?: string): void
  ```

- 详细信息

  第一个入参表示解绑事件的元素，同时支持 `window` 和 `document`；第二个入参表示事件名称，如“click”

  第二个参数支持设置事件修饰名称，如“click.a”，后面的“a”就是修饰名称，同时也支持解绑多个事件，每个事件之间通过空格隔开

- 示例

  ```ts
  import { event } from 'dap-util'
  //解绑事件
  event.off(document.body, 'click')
  //解绑带事件修饰名称的事件
  event.off(document.body, 'mousedown.a')
  //同时解绑多个事件
  event.off(document.body, 'mousedown click.a')
  ```

## get()

获取元素绑定的所有事件

- 类型

  ```ts
  get(el: HTMLElement | Window | Document): EventObjType | undefined
  ```

- 详细信息

  提供一个入参，表示获取事件的元素，同时支持 `window` 和 `document`，该方法返回一个对象，每个 key 表示带修饰名称的事件名称，每个值表示事件配置，包含 `type`（事件名，如“click”） `fn`（执行函数） `options`（在 on 方法中设置的第三个参数）三个属性

- 示例

  ```ts
  import { event } from 'dap-util'
  const events = event.get(document.body)
  ```
