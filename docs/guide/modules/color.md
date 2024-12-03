---
title: color
---

# color

颜色模块

## rgb2hsv

RGB 颜色值转 HSV 颜色值

- 类型

  ```ts
  rgb2hsv(rgb: number[]): number[]
  ```

- 详细信息

  该方法接收一个长度为 3 的数字数组，如 `[255,0,0]`，表示 RGB 颜色值，最终返回一个长度为 3 的数字数组，表示 HSV 颜色值

- 示例

  ```ts
  import { color } from 'dap-util'
  const hsv = color.rgb2hsv([255, 0, 0]) //[0, 100, 100]
  ```

## hsv2rgb

HSV 颜色值转 RGB 颜色值

- 类型

  ```ts
  hsv2rgb(hsv: number[]): number[]
  ```

- 详细信息

  该方法接收一个长度为 3 的数字数组，如 `[0,100,100]`，表示 HSV 颜色值，最终返回一个长度为 3 的数字数组，表示 RGB 颜色值

- 示例

  ```ts
  import { color } from 'dap-util'
  const rgb = color.hsv2rgb([0, 100, 100]) //[255, 0, 0]
  ```

## rgb2hex

RGB 颜色值转 HEX 颜色值

- 类型

  ```ts
  rgb2hex(rgb: number[]): string
  ```

- 详细信息

  该方法接收一个长度为 3 的数字数组，如 `[255,0,0]`，表示 RGB 颜色值，最终返回一个字符串，表示 HEX 颜色值，即十六进制颜色值

- 示例

  ```ts
  import { color } from 'dap-util'
  const hex = color.rgb2hex([255, 0, 0]) //#ff0000
  ```

## hex2rgb

HEX 颜色值转 RGB 颜色值

- 类型

  ```ts
  hex2rgb(hex: string): number[]
  ```

- 详细信息

  该方法接收一个字符串，表示 HEX 颜色值，即十六进制颜色值，最终返回一个长度为 3 的数字数组，表示 RGB 颜色值

- 示例

  ```ts
  import { color } from 'dap-util'
  const rgb = color.hex2rgb('#ff0000') //[255, 0, 0]
  ```
