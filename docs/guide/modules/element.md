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

移除 `class`

- 类型

  ```ts
  removeClass(el: HTMLElement, className: string): void
  ```

- 详细信息

  第一个入参表示需要移除 `class` 的元素，第二个参数表示移除的 `class` 值，支持移除多个，以空格划分

- 示例

  ```ts
  import { element } from 'dap-util'
  element.removeClass(document.body, 'a b') //移除body上的a和b两个class
  ```

## addClass()

添加 `class`

- 类型

  ```ts
  addClass(el: HTMLElement, className: string): void
  ```

- 详细信息

  第一个入参表示需要添加 `class` 的元素，第二个参数表示添加的 `class` 值，支持添加多个，以空格划分

- 示例

  ```ts
  import { element } from 'dap-util'
  element.addClass(document.body, 'a b') //给body添加a和b两个class
  ```

## hasClass()

判断是否拥有指定的 `class`

- 类型

  ```ts
  hasClass(el: HTMLElement, className: string): boolean
  ```

- 详细信息

  第一个入参表示需要判断的元素，第二个参数表示指定的 `class` 值，支持多个，以空格划分

- 示例

  ```ts
  import { element } from 'dap-util'
  element.hasClass(document.body, 'a b') //判断body是否有a和b两个class
  ```

## scrollTopBottomTrigger()

监听元素滚动到顶部或者底部

- 类型

  ```ts
  scrollTopBottomTrigger(el?: HTMLElement | string | Window, callback?: (options: scrollTopBottomResultType) => void): void
  ```

- 详细信息

  第一个入参表示监听的元素，支持 css 选择器字符串，如果未设置则默认为窗口滚动；第二个入参表示回调函数，该函数的回调参数包含 2 个属性：

  - `state`：取值为 `top` | `bottom`，表示滚动到顶部还是底部
  - `target`：滚动的元素

  回调函数会在元素到达顶部或者底部时触发

- 示例

  ```ts
  import { element } from 'dap-util'
  element.scrollTopBottomTrigger(document.body, options => {
    console.log(options.state) //通过state判断是滚动到顶部还是底部
  })
  ```

## getScrollWidth()

获取文档或元素的总宽度

- 类型

  ```ts
  getScrollWidth(el?: HTMLElement | string): number
  ```

- 详细信息

  提供一个入参，表示指定的元素，支持 `css` 字符串选择器，如果不设置则默认为文档元素，该方法会返回该元素或者文档的总宽度，即如果有滚动条，则会包含滚动内容在内的宽度

- 示例

  ```ts
  import { element } from 'dap-util'
  const width = element.getScrollWidth() //获取页面的总宽度
  ```

## getScrollHeight()

获取文档或元素的总高度

- 类型

  ```ts
  getScrollHeight(el?: HTMLElement | string): number
  ```

- 详细信息

  提供一个入参，表示指定的元素，支持 `css` 字符串选择器，如果不设置则默认为文档元素，该方法会返回该元素或者文档的总高度，即如果有滚动条，则会包含滚动内容在内的高度

- 示例

  ```ts
  import { element } from 'dap-util'
  const height = element.getScrollHeight() //获取页面的总高度
  ```

## setScrollTop()

设置滚动条在 Y 轴上的距离

- 类型

  ```ts
  setScrollTop(options: ScrollOptionsType): Promise<void>
  ```

- 详细信息

  提供一个入参，类型为 `ScrollOptionsType`，包含如下属性：

  - `el`：指定的元素，支持 `css` 选择器字符串，支持 `window`
  - `time`：滚动到指定距离的时间，单位 `ms`，不设置或者 `<=0` 则直接设置到指定距离
  - `number`：滚动到的指定距离，单位 `px`

  该方法会将指定元素的垂直滚动条设置到指定的距离，如果设置了 `time`，则会有一个滚动的效果

- 示例

  ```ts
  import { element } from 'dap-util'
  //将窗口的垂直滚动条滚动到120px的位置，用时500ms
  setScrollTop({
    el: window,
    time: 500,
    number: 120
  })
  ```

## getScrollTop()

获取滚动条在 Y 轴上滚动的距离

- 类型

  ```ts
  getScrollTop(el?: HTMLElement | string | Window): number
  ```

- 详细信息

  提供一个入参，类型为 `HTMLElement | string | Window`，表示指定的元素，支持 `css` 选择器字符串，也支持 `window`，如果未指定，则默认为 `window`，该方法返回该元素垂直方向的滚动条滚动的距离，单位 `px`

- 示例

  ```ts
  import { element } from 'dap-util'
  const scrollTop = element.getScrollTop()
  ```

## getScrollLeft()

获取滚动条在 X 轴上滚动的距离

- 类型

  ```ts
  getScrollLeft(el?: HTMLElement | string | Window): number
  ```

- 详细信息

  提供一个入参，类型为 `HTMLElement | string | Window`，表示指定的元素，支持 `css` 选择器字符串，也支持 `window`，如果未指定，则默认为 `window`，该方法返回该元素水平方向的滚动条滚动的距离，单位 `px`

- 示例

  ```ts
  import { element } from 'dap-util'
  const scrollLeft = element.getScrollLeft()
  ```

## setScrollLeft()

设置滚动条在 X 轴上的距离

- 类型

  ```ts
  setScrollLeft(options: ScrollOptionsType): Promise<void>
  ```

- 详细信息

  提供一个入参，类型为 `ScrollOptionsType`，包含如下属性：

  - `el`：指定的元素，支持 `css` 选择器字符串，支持 `window`
  - `time`：滚动到指定距离的时间，单位 `ms`，不设置或者 `<=0` 则直接设置到指定距离
  - `number`：滚动到的指定距离，单位 `px`

  该方法会将指定元素的横向滚动条设置到指定的距离，如果设置了 `time`，则会有一个滚动的效果

- 示例

  ```ts
  import { element } from 'dap-util'
  //将窗口的横向滚动条滚动到120px的位置，用时500ms
  setScrollLeft({
    el: window,
    time: 500,
    number: 120
  })
  ```

## getCssStyle()

获取元素指定样式

- 类型

  ```ts
  getCssStyle(el: HTMLElement, cssName: string): string
  ```

- 详细信息

  第一个入参表示指定的元素，第二个入参表示 `css` 样式名称，该方法返回该 css 样式名称的值

- 示例

  ```ts
  import { element } from 'dap-util'
  const color = element.getCssStyle(el, 'color') //获取el元素的color值
  ```

## getCssSelector()

判断字符串属于哪种 css 选择器

- 类型

  ```ts
  getCssSelector(selector: string): {
    type: "id" | "class" | "attribute" | "tag";
    value: string | {
        attributeName: string;
        attributeValue: string;
    };
  }
  ```

- 详细信息

  提供一个入参，类型为 `string`，表示需要判断的 `css` 选择器字符串

  该方法返回的值包含 2 个属性：

  - `type`：选择器的类型，可取值为 `id` `class` `attribute` `tag`，分别表示 ID 选择器、类名选择器、属性选择器、标签选择器
  - `value`：选择器的值，如果是属性选择器，可存在属性值的情况下，该属性包含 attributeName 和 attributeValue 两个字段，分别表示属性名称和属性值，如 `[data-id="a"]`，其他情况下返回值都是字符串

- 示例

  ```ts
  import { element } from 'dap-util'
  const val = element.getCssSelector('#a') //a
  const val = element.getCssSelector('.red') //red
  const val = element.getCssSelector('[data-id="a"') //{ attributeName: "data-id", attributeValue: "a" }
  ```

## getElementBounding()

获取元素距离可视窗口的位置

- 类型

  ```ts
  getElementBounding(el?: HTMLElement | string): PlacementType
  ```

- 详细信息

  提供一个入参，表示指定的元素，该方法会获取指定元素到可视窗口之间的距离，返回值包含如下属性：

  - `top`：类型为 `number`，表示指定元素顶部到可视窗口顶部的距离
  - `bottom`：类型为 `number`，表示指定元素底部到可视窗口底部的距离
  - `left`：类型为 `number`，表示指定元素左侧到可视窗口左侧的距离
  - `right`：类型为 `number`，表示指定元素右侧到可视窗口右侧的距离

- 示例

  ```ts
  import { element } from 'dap-util'
  const placement = element.getElementBounding(el)
  ```

## isElement()

判断是否是元素

- 类型

  ```ts
  isElement(el: any): boolean
  ```

- 详细信息

  提供一个任意类型的入参，该方法会判断入参是否为元素类型，所谓元素类型指的是类型为 `Node` 且 `nodeType` 为

- 示例

  ```ts
  import { element } from 'dap-util'
  element.isElement('a') //false
  element.isElement(document.body) //true
  ```

## string2dom()

字符串转 dom

- 类型

  ```ts
  string2dom(html: string): HTMLElement | HTMLElement[]
  ```

- 详细信息

  提供一个入参，类型为 `string`，表示需要转换的字符串，该方法返回一个元素或者元素数组

- 示例

  ```ts
  import { element } from 'dap-util'
  const dom = element.string2dom('<p>hello</p>')
  ```
