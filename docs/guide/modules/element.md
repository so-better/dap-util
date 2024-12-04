---
title: element
---

# element

元素模块

## isWindow()

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

## getElementPoint()

获取元素距离指定祖先元素的位置

- 类型

  ```ts
  getElementPoint(el: HTMLElement, root?: HTMLElement): PlacementType
  ```

- 详细信息

  第一个入参表示指定的元素，第二个入参表示目标元素，即指定的元素的定位父元素或者祖先元素，未设置则默认为 `document.body`

  该方法会计算指定元素到目标元素之间的距离，返回值包含如下属性：

  - `top`：类型为 `number`，表示指定元素顶部到目标元素顶部的距离
  - `bottom`：类型为 `number`，表示指定元素底部到目标元素底部的距离
  - `left`：类型为 `number`，表示指定元素左侧到目标元素左侧的距离
  - `right`：类型为 `number`，表示指定元素右侧到目标元素右侧的距离

- 示例

  ```ts
  import { element } from 'dap-util'
  //假定el是target的子元素
  const placement = element.getElementPoint(el, target)
  ```

## isContains()

判断某个元素是否包含另一个元素

- 类型

  ```ts
  isContains(parentNode: HTMLElement, childNode: HTMLElement): boolean
  ```

- 详细信息

  第一个入参表示指定元素，第二个入参表示目标元素，该方法会判断目标元素是不是指定元素的子孙元素，即指定元素是包含目标元素的，如果二者是同一个元素，也视为包含关系，该方法返回 `boolean` 值

- 示例

  ```ts
  import { element } from 'dap-util'
  const isContains = element.isContains(el, target)
  ```

## isParentNode()

判断某个元素是否另一个元素的父元素

- 类型

  ```ts
  isParentNode(parentNode: HTMLElement, childNode: HTMLElement): boolean
  ```

- 详细信息

  第一个入参表示指定的元素，第二个入参表示目标元素，该方法会判断指定元素是否目标元素的父元素，返回 `boolean` 值

- 示例

  ```ts
  import { element } from 'dap-util'
  const isParentNode = element.isParentNode(el, target)
  ```

## children()

获取某个元素的子元素

- 类型

  ```ts
  children(el: HTMLElement, selector?: string): HTMLElement[]
  ```

- 详细信息

  第一个入参表示指定的元素，第二个入参表示指定的选择器字符串，等同于 `querySelectorAll` 的参数，如果不设置则默认查询所有的子元素，如果设置了，则只查找符合选择器的子元素

- 示例

  ```ts
  import { element } from 'dap-util'
  const children = element.children(document.body, '.a') // 查找body下的 class 是 a 的元素
  ```

## siblings()

获取某个元素的兄弟元素

- 类型

  ```ts
  siblings(el: HTMLElement, selector?: string): HTMLElement[]
  ```

- 详细信息

  第一个入参表示指定的元素，第二个入参表示指定的选择器字符串，等同于 `querySelectorAll` 的参数，如果不设置则默认查询所有的兄弟元素，如果设置了，则只查找符合选择器的兄弟元素

- 示例

  ```ts
  import { element } from 'dap-util'
  const elements = element.siblings(el, '.a') // 查找el的兄弟元素中 class 是 a 的元素
  ```

## rem2px()

`rem` 的值转为 `px` 的值

- 类型

  ```ts
  rem2px(num: number): number
  ```

- 详细信息

  提供一个入参，类型为 `number`，表示 `rem` 单位的值，该方法会返回一个值，表示 `px` 单位的值

- 示例

  ```ts
  import { element } from 'dap-util'
  const pxValue = element.rem2px(1) //默认情况下1rem=16px，则输出16
  ```

## px2rem()

`px` 的值转为 `rem` 的值

- 类型

  ```ts
  px2rem(num: number): number
  ```

- 详细信息

  提供一个入参，类型为 `number`，表示 `px` 单位的值，该方法会返回一个值，表示 `rem` 单位的值

- 示例

  ```ts
  import { element } from 'dap-util'
  const remValue = element.px2rem(32) //默认情况下1rem=16px，则输出2
  ```

## width()

获取元素的内容宽度

- 类型

  ```ts
  width(el?: HTMLElement | string): number
  ```

- 详细信息

  提供一个入参，类型为 `HTMLElement | string`，表示指定的元素，支持 css 选择器字符串，如果不设置则默认为 `document.body`

  该方法会返回指定元素的内容宽度，所谓内容宽度指的是不包括边框宽度和内边距大小

- 示例

  ```ts
  import { element } from 'dap-util'
  const width = element.width(document.body) // 获取body的内容宽度
  ```

## height()

获取元素的内容高度

- 类型

  ```ts
  height(el?: HTMLElement | string): number
  ```

- 详细信息

  提供一个入参，类型为 `HTMLElement | string`，表示指定的元素，支持 css 选择器字符串，如果不设置则默认为 `document.body`

  该方法会返回指定元素的内容高度，所谓内容高度指的是不包括边框宽度和内边距大小

- 示例

  ```ts
  import { element } from 'dap-util'
  const height = element.height(document.body) // 获取body的内容高度
  ```

## removeClass()

## addClass()

## hasClass()

## scrollTopBottomTrigger()

## getScrollWidth()

## getScrollHeight()

## setScrollTop()

## getScrollTop()

## getScrollLeft()

## setScrollLeft()

## getCssStyle()

## getCssSelector()

## getElementBounding()

## isElement()

## string2dom()
