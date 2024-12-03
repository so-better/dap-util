---
title: 快速上手
---

# 快速上手

## 获取 dap-util 提供的对象

- 如果你是通过 `cdn` 在线引入 `dap-util` 或者下载 `dap-util` 文件到本地使用，直接通过 `window` 获取 `dap-util` 提供的对象

```ts
const Dap = window.Dap
```

- 如果你是通过 `npm/yarn/pnpm` 引入

```ts
import Dap from 'dap-util'
```

## 使用方法

获取到 `dap-util` 的 `Dap` 对象后，即可通过 `Dap` 来调用各个模块里的函数，如下：

```ts
//调用platform模块的device方法获取运行设备的信息
const result = Dap.platform.device()
```

```ts
//调用common模块的isObeject方法判断是否对象
const isObj = Dap.common.isObject(val)
```

> 关于 dap-util 的模块会在后面文档中尽数列出，具体使用请看后续文档

## 按需引入

`dap-util` 支持按需引入的方式，如下：

```ts
//按需引入platform模块来使用
import { platform } from 'dap-util'
const result = platform.device()
```

```ts
//按需引入common模块来使用
import { common } from 'dap-util'
const isObj = common.isObject(val)
```
