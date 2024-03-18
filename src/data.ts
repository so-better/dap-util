import elementUtil from './element'
const dataName: string = '_dap-datas'

/**
 * 元素数据挂载方法
 */
export default {
	/**
	 * 移除指定数据
	 * @param {Object} el
	 * @param {Object} key
	 */
	remove(el: HTMLElement | Window | Document, key?: string | null) {
		//参数el校验
		if (!(el instanceof Document) && !elementUtil.isElement(el) && !elementUtil.isWindow(el)) {
			throw new TypeError('The first argument must be an element node or window or document')
		}
		let data = (<any>el)[dataName] || {}
		//未指定参数,删除全部
		if (key === undefined || key === null || key === '') {
			;(<any>el)[dataName] = {}
		} else {
			delete data[key]
			;(<any>el)[dataName] = data
		}
	},

	/**
	 * 判断是否含有指定数据
	 * @param {Object} el
	 * @param {Object} key
	 */
	has(el: HTMLElement | Window | Document, key: string) {
		//参数el校验
		if (!(el instanceof Document) && !elementUtil.isElement(el) && !elementUtil.isWindow(el)) {
			throw new TypeError('The first argument must be an element node or window or document')
		}
		if (key === undefined || key === null || key === '') {
			throw new TypeError('The second parameter must be a unique key')
		}
		let data = (<any>el)[dataName] || {}
		return data.hasOwnProperty(key)
	},

	/**
	 * 获取元素指定数据
	 * @param {Object} el
	 * @param {Object} key
	 */
	get(el: HTMLElement | Window | Document, key?: string | null) {
		//参数el校验
		if (!(el instanceof Document) && !elementUtil.isElement(el) && !elementUtil.isWindow(el)) {
			throw new TypeError('The first argument must be an element node or window or document')
		}
		let data = (<any>el)[dataName] || {}
		//未指定参数,返回全部
		if (key === undefined || key === null || key === '') {
			return data
		} else {
			return data[key]
		}
	},

	/**
	 * 设置元素指定数据
	 * @param {Object} el
	 * @param {Object} key
	 * @param {Object} value
	 */
	set(el: HTMLElement | Window | Document, key: string, value?: any) {
		//参数el校验
		if (!(el instanceof Document) && !elementUtil.isElement(el) && !elementUtil.isWindow(el)) {
			throw new TypeError('The first argument must be an element node or window or document')
		}
		if (key === undefined || key === null || key === '') {
			throw new TypeError('The second parameter must be a unique key')
		}
		let data = (<any>el)[dataName] || {}
		data[key] = value
		;(<any>el)[dataName] = data
	}
}
