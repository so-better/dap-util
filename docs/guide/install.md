---
title: 安装
---

# 安装

## 下载 dap-util 本地到使用

- 下载地址：[dap-util](https://registry.npmmirror.com/dap-util/download/dap-util-1.5.9.tgz)
- 下载完成后最终解压得到一个 package 文件夹，进入 package 文件夹后，将 package 目录下的整个 lib 目录拷贝到你的项目下
- 在 html 页面中引入 js

```html
<!-- 使用全局构建版本 -->
<script src="lib/dap-util.umd.js" type="text/javascript"></script>
```

```html
<!-- 使用es模块构建版本 -->
<script type="module">
  import { data } from 'lib/dap-util.es.js'
</script>
```

## 通过 CDN 使用 dap-util

你可以借助 `script` 标签直接通过 CDN 来使用 `dap-util`

```html
<!-- 引入固定版本的dap-util -->
<script src="https://unpkg.com/dap-util@1.5.9/lib/dap-util.umd.js"></script>
<!-- 始终引入最新的dap-util -->
<script src="https://unpkg.com/dap-util/lib/dap-util.umd.js"></script>
```

```html
<!-- 使用CDN上的es模块构建版本 -->
<script type="module">
  import { data } from 'https://unpkg.com/dap-util/lib/dap-util.es.js'
</script>
```

## 通过 npm/yarn/pnpm 安装 dap-util

> 假设你已了解关于  html、css  和  javascript  的中级知识，并且对于 npm，es6，webpack 已经有了足够的了解，我们更推荐这类安装方式

::: code-group

```bash [npm]
npm install dap-util

# 安装指定版本
npm install dap-util@1.5.9
```

```bash [yarn]
yarn install dap-util

# 安装指定版本
yarn install dap-util@1.5.9
```

```bash [pnpm]
pnpm install dap-util

# 安装指定版本
pnpm install dap-util@1.5.9
```

:::
