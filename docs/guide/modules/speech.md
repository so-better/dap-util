---
title: speech
---

# speech

语音合成模块

## start()

将文字加入语音播报队列

- 类型

  ```ts
  start(text: string, options?: SpeechParamsType): void
  ```

- 详细信息

  第一个入参表示要播报的文字内容，第二个入参表示播报相关的配置属性，包含如下属性：

  - pitch：话语的音调，类型为 `number`
  - rate：说话的速度，类型为 `number`
  - volume：说话的音量，，类型为 `number`，取值为 0-1
  - start：播放开始事件，类型为 `(e: Event, options: EventParamsType) => void`
  - end：播放结束事件，类型为 `(e: Event, options: EventParamsType) => void`
  - pause：播放暂停事件，类型为 `(e: Event, options: EventParamsType) => void`
  - resume：播放恢复事件，类型为 `(e: Event, options: EventParamsType) => void`
  - error：播放出错事件，类型为 `(e: Event, options: EventParamsType) => void`

  上述几个播放事件的第二个参数都是表示当前播放的配置，包含 `text` `pitch` `rate` `volume` 四个属性

- 示例

  ```ts
  import { speech } from 'dap-util'
  speech.start('hello')
  ```

## stop()

停止所有播报队列里面的语音

- 类型

  ```ts
  stop(): void
  ```

- 详细信息

  该方法会停止播报队列里所有的语音

- 示例

  ```ts
  import { speech } from 'dap-util'
  speech.stop()
  ```

## pause()

暂停播报

- 类型

  ```ts
  pause(): void
  ```

- 详细信息

  该方法会暂停当前的语音播报

- 示例

  ```ts
  import { speech } from 'dap-util'
  speech.pause()
  ```

## resume()

恢复暂停的播报

- 类型

  ```ts
  resume(): void
  ```

- 详细信息

  该方法会恢复之前暂停的播报

- 示例

  ```ts
  import { speech } from 'dap-util'
  speech.resume()
  ```
