---
title: file
---

# file

文件模块

## getImageUrl()

根据文件获取本地可预览的图片路径

- 类型

  ```ts
  getImageUrl(file: File): string
  ```

- 详细信息

  提供一个入参，类型为 `File`，该方法返回该文件的本地可预览地址

- 示例

  ```ts
  import { file } from 'dap-util'
  const url = file.getImageUrl(imageFile)
  ```

## dataFileToBase64()

`file` 对象转 `base64` 字符串

- 类型

  ```ts
  dataFileToBase64(file: File): Promise<string>
  ```

- 详细信息

  提供一个入参，类型为 `File`，表示需要转换的文件对象，该方法返回一个 `Promise` 对象，通过该对象回调可以获得 `base64` 字符串

- 示例

  ```ts
  import { file } from 'dap-util'
  const base64String = await file.dataFileToBase64(imageFile)
  //或者
  file.dataFileToBase64(imageFile).then(res => {
    const base64String = res
  })
  ```

## dataBase64toFile()

`base64` 字符串转 `file` 对象

- 类型

  ```ts
  dataBase64toFile(base64String: string, fileName: string): File
  ```

- 详细信息

  第一个入参表示需要转换的 `base64` 字符串，第二个入参表示转换成文件的文件名称，该方法返回一个 `File` 对象

- 示例

  ```ts
  import { file } from 'dap-util'
  const image = file.dataBase64toFile(,'image.png')
  ```

## compressImage()

图片压缩

- 类型

  ```ts
  compressImage(file: File, options: CompressOptionsType): Promise<CompressResultType>
  ```

- 详细信息

  第一个入参表示需要压缩的图片文件，第二个入参是压缩的相关配置，具体包含如下属性：

  - `width`：类型为 `number`，表示压缩图片的宽，单位 `px`，如果不设置默认为原图宽
  - `quality`：类型为 `number`，取值 0-1，表示压缩图片质量，默认为原图的 0.8
  - `mimeType`：压缩图片的类型，可取值 `jpeg` `webp`，默认为 `jpeg`
  - `maxSize`：类型为 `number`，表示压缩后的最大值，单位 `kb`，默认为 0 表示不设置此值
  - `minSize`：类型为 `number`，表示压缩后的最小值，小于该大小的图片不进行压缩，单位 `kb`，默认为 0 表示任何图片都要压缩

- 示例

  ```ts
  import { file } from 'dap-util'
  const newImage = file.compressImage(image, {
    width: 800,
    quality: 0.5
  })
  ```
