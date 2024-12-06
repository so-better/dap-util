---
title: string
---

# string

字符串模块

## insert()

向指定位置插入字符串

- 类型

  ```ts
  insert(original: string, str: string, index: number): string
  ```

- 详细信息

  第一个入参表示源字符串，第二个参数表示需要插入的字符串，第三个参数表示插入的位置

  该方法会将指定字符串插入到源字符串中的指定位置，返回新的字符串

- 示例

  ```ts
  import { string } from 'dap-util'
  string.insert('这是一个美好的世界', '且充满无限可能', 6) // 这是一个美好且充满无限可能的世界
  ```

## delete()

删除指定位置的字符串

- 类型

  ```ts
  delete(original: string, index: number, num: number): string
  ```

- 详细信息

  第一个入参表示源字符串，第二个参数表示从哪个位置删除，第三个参数表示删除字符串的长度

  该方法会在删除指定位置的字符串后返回新的字符串

- 示例

  ```ts
  import { string } from 'dap-util'
  string.delete('这是一个美好且充满无限可能的世界', 6, 7) //这是一个美好的世界
  ```

## replace()

替换指定位置的字符串

- 类型

  ```ts
  replace(original: string, start: number, end: number, str: string): string
  ```

- 详细信息

  第一个入参表示源字符串，第二个参数表示替换开始的位置，第三个参数表示替换截止的位置，第四个参数表示替换的字符串

  该方法会将原字符串从开始位置到截止为止之间的字符串删除，然后将替换的字符串插入其中

- 示例

  ```ts
  import { string } from 'dap-util'
  string.replace('这是一个美好且充满无限可能的世界', 4, 13, '糟糕') //这是一个糟糕的世界
  ```

## trim()

去除字符串的空格

- 类型

  ```ts
  trim(str: string, global?: boolean): string
  ```

- 详细信息

  第一个入参表示需要去除空格的字符串，第二个入参表示是否去去除全部的空格，如果为 `false` 或者不设置则只去除字符串两侧的空格

  该方法会返回去除空格后的新字符串

- 示例

  ```ts
  import { string } from 'dap-util'
  //去除两边的空格
  const result = string.trim(' he llo ') // 'he llo'
  //去除所有空格
  const result = string.trim(' he llo ', true) // 'hello'
  ```
