const dataName: string = '_dap-datas'

export type DataHTMLElement = HTMLElement & {
  [key: string]: any
}

export type DataWindow = Window & {
  [key: string]: any
}

export type DataDocument = Document & {
  [key: string]: any
}

/**
 * 元素数据挂载方法
 */
export const data = {
  /**
   * 移除指定数据
   * @param {Object} el
   * @param {Object} key
   */
  remove(el: DataHTMLElement | DataWindow | DataDocument, key?: string) {
    const data = el[dataName] || {}
    if (key) {
      delete data[key]
      el[dataName] = data
    } else {
      el[dataName] = {}
    }
  },

  /**
   * 判断是否含有指定数据
   * @param {Object} el
   * @param {Object} key
   */
  has(el: DataHTMLElement | DataWindow | DataDocument, key: string): boolean {
    return (el[dataName] || {}).hasOwnProperty(key)
  },

  /**
   * 获取元素指定数据
   * @param {Object} el
   * @param {Object} key
   */
  get<T>(el: DataHTMLElement | DataWindow | DataDocument, key?: string) {
    const data = el[dataName] || {}
    return (!!key ? data[key] : data) as T
  },

  /**
   * 设置元素指定数据
   * @param {Object} el
   * @param {Object} key
   * @param {Object} value
   */
  set(el: DataHTMLElement | DataWindow | DataDocument, key: string, value: any) {
    const data = el[dataName] || {}
    data[key] = value
    el[dataName] = data
  }
}
