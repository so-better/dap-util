# dap-util

[![npm version](https://img.shields.io/npm/v/dap-util)](https://www.npmjs.com/package/dap-util)
[![license](https://img.shields.io/npm/l/dap-util)](https://github.com/so-better/dap-util/blob/master/LICENSE)

一个不依赖于任何库的工具性质的 JS 库，提供大量工具函数方便日常开发。

## 特性

- 零依赖，轻量纯净
- 完整 TypeScript 类型支持
- 按模块组织，支持按需引入
- 涵盖颜色、DOM、事件、文件、数字、字符串、平台检测、语音合成等常用场景

## 安装

```bash
# npm
npm install dap-util

# 安装指定版本
npm install dap-util@1.6.2
```

```bash
# yarn
yarn add dap-util

# yarn 安装指定版本
yarn add dap-util@1.6.2
```

```bash
# pnpm
pnpm add dap-util

# pnpm 安装指定版本
pnpm add dap-util@1.6.2
```

### CDN 使用

```html
<!-- 引入固定版本 -->
<script src="https://unpkg.com/dap-util@1.6.2/lib/dap-util.umd.js"></script>
<!-- 始终引入最新版本 -->
<script src="https://unpkg.com/dap-util/lib/dap-util.umd.js"></script>
```

## 快速上手

### npm/yarn/pnpm 引入

```ts
import Dap from 'dap-util'

// 调用 platform 模块的 device 方法获取运行设备信息
const result = Dap.platform.device()

// 调用 common 模块的 isObject 方法判断是否为对象
const isObj = Dap.common.isObject(val)
```

### 按需引入

```ts
import { platform } from 'dap-util'
const result = platform.device()
```

```ts
import { common } from 'dap-util'
const isObj = common.isObject(val)
```

### CDN 引入

```ts
const Dap = window.Dap
const result = Dap.platform.device()
```

## 模块

| 模块 | 说明 |
|------|------|
| `color` | 颜色相关工具（RGB/HSV/HEX 互转等） |
| `common` | 通用工具（正则匹配、对象比较、深克隆等） |
| `data` | DOM 数据存取（element 上附加自定义数据） |
| `element` | DOM 操作（尺寸、滚动、类名、CSS 读取等） |
| `event` | 事件绑定/解绑管理 |
| `file` | 文件处理（图片压缩、Base64 转换等） |
| `number` | 数字处理（格式化、精确四则运算等） |
| `platform` | 平台/设备/浏览器/系统检测 |
| `speech` | 语音合成（Web Speech API 封装） |
| `string` | 字符串处理（插入、删除、替换、去空格等） |

## 文档

完整文档请访问：[https://www.so-better.cn/docs/dap-util/](https://www.so-better.cn/docs/dap-util/)

## License

[MIT](./LICENSE)
