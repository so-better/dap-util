const elementUtil = require('./element')
const dataName = '_dap-datas'
/**
 * 元素数据挂载方法
 */
module.exports = {
	
	/**
	 * 移除指定数据
	 * @param {Element} elm
	 * @param {String} key
	 */
	remove(elm,key){
		if (!elementUtil.isElement(elm)) {
			throw new TypeError('The first argument must be an element')
		}
		let data = elm[dataName] || {}
		//未指定参数,删除全部
		if (key === undefined || key === null || key === '') {
			elm[dataName] = {}
		} else {
			delete data[key]
			elm[dataName] = data
		}
	},
	
	/**
	 * 判断是否含有指定数据
	 * @param {Element} elm
	 * @param {String} key
	 */
	has(elm,key){
		if (!elementUtil.isElement(elm)) {
			throw new TypeError('The first argument must be an element')
		}
		if (key === undefined || key === null || key === '') {
			throw new TypeError('The second parameter must be a unique key')
		}
		let data = elm[dataName] || {}
		return data.hasOwnProperty(key)
	},
	
	/**
	 * 获取元素指定数据
	 * @param {Element} elm
	 * @param {String} key
	 */
	get(elm, key) {
		if (!elementUtil.isElement(elm)) {
			throw new TypeError('The first argument must be an element')
		}
		let data = elm[dataName] || {}
		//未指定参数,返回全部
		if (key === undefined || key === null || key === '') {
			return data
		} else {
			return data[key]
		}
	},

	/**
	 * 获取元素指定数据
	 * @param {Element} elm
	 * @param {String} key
	 * @param {Object} value
	 */
	set(elm, key, value) {
		if (!elementUtil.isElement(elm)) {
			throw new TypeError('The first argument must be an element')
		}
		if (key === undefined || key === null || key === '') {
			throw new TypeError('The second parameter must be a unique key')
		}
		let data = elm[dataName] || {}
		data[key] = value
		elm[dataName] = data
	}
}
