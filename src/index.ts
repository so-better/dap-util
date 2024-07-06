import number from './number'
import data from './data'
import element from './element'
import event from './event'
import common from './common'
import color from './color'
import file from './file'
import string from './string'
import platform from './platform'
import speech from './speech'

export type * from './element'
export type * from './file'
export type * from './speech'

const obj = { number, data, element, event, common, color, file, string, platform, speech }

export { obj as default, number, data, element, event, common, color, file, string, platform, speech }
