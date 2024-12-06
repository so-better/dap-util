---
title: platform
---

# platform

平台终端模块

## language()

获取设备语言类型

- 类型

  ```ts
  language(): string
  ```

- 详细信息

  该方法返回当前浏览器的语言类型

- 示例

  ```ts
  import { platform } from 'dap-util'
  platform.language() //zh-CN
  ```

## device()

获取设备类型

- 类型

  ```ts
  device(): {
    PC: boolean;
    Mobile: boolean;
    iPhone: boolean;
    Phone: boolean;
    iPad: boolean;
    Tablet: boolean;
    WindowsPhone: boolean;
  }
  ```

- 详细信息

  该方法会判断当前浏览器所在的设备类型，并返回一个对象，该对象包含如下属性：

  - `PC`：是否 `PC` 电脑端
  - `Mobile`：是否移动端
  - `iPhone`：是否 `iPhone`
  - `Phone`：是否手机
  - `iPad`：是否 `iPad`
  - `Tablet`：是否平板电脑
  - `WindowsPhone`：是否 `s` 系统手机

- 示例

  ```ts
  import { platform } from 'dap-util'
  platform.device() //{ PC: true, Mobile: false, iPhone: false, Phone: false, iPad: false, Tablet: false, WindowsPhone: false}
  ```

## browser()

获取浏览器类型

- 类型

  ```ts
  browser(): {
    Edge: boolean;
    Weixin: boolean;
    QQ: boolean;
    QQBrowser: boolean;
    UC: boolean;
    Chrome: boolean;
    Firefox: boolean;
    Sougou: boolean;
    Safari: boolean;
  }
  ```

- 详细信息

  该方法会判断当前浏览器类型，并返回一个对象，该对象包含如下属性：

  - `Edge`：是否 `edge` 浏览器
  - `Weixin`：是否微信内置浏览器
  - `QQ`：是否 `QQ` 内置浏览器
  - `QQBrowser`：是否 `QQ` 浏览器
  - `UC`：是否 `UC` 浏览器
  - `Chrome`：是否谷歌浏览器
  - `Firefox`：是否火狐浏览器
  - `Sougou`：是否搜狗浏览器
  - `Safari`：是否 `safari` 浏览器

- 示例

  ```ts
  import { platform } from 'dap-util'
  platform.browser() //{ Edge: false, Weixin: false, QQ: false, QQBrowser: false, UC: false, Chrome: true, Firefox: false, Sougou: false, Safari: false }
  ```

## browserKernel()

获取浏览器内核

- 类型

  ```ts
  browserKernel(): "opera" | "webkit" | "gecko" | undefined
  ```

- 详细信息

  该方法用于获取当前浏览器内核，返回值可取值为 `opera` `webkit` `gecko`，如果内核都不是这三者，则返回 `undefined`

- 示例

  ```ts
  import { platform } from 'dap-util'
  platform.browserKernel() //webkit
  ```

## os()

获取操作系统数据

- 类型

  ```ts
  os(): OSResultType
  ```

- 详细信息

  该方法会返回当前浏览器所在系统的数据，包含如下属性：

  - `Windows`：是否 `windows` 系统
  - `WindowsCPU`：`windows` 系统的 cpu 类型，值为“x64”或者“x32”
  - `WindowsVersion`：`windows` 系统的版本，可取值 `win7` `win8` `win10`
  - Mac：是否 `Mac` 系统
  - MacVersion：`Mac` 系统版本号
  - ios：是否 `ios` 系统
  - iosVersion：`ios` 系统版本号
  - Android：是否安卓系统
  - AndroidVersion：安卓系统版本号
  - Linux：是否 `linux` 系统
  - HarmonyOS：是否鸿蒙系统
  - Ubuntu：是否 `unbuntu` 系统

- 示例

  ```ts
  import { platform } from 'dap-util'
  const { Mac } = platform.os() //判断是否Mac系统
  ```
