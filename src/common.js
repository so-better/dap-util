/**
 * 常用方法
 */
export default {
	/**
	 * 常用判断
	 * @param {Object} text 要判断的字符串
	 * @param {Object} params 判断的类型字符串
	 */
	matchingText(text, params) {
		if (!text || typeof text != 'string') {
			throw new TypeError('The first argument must be a string')
		}
		if (!params || typeof params != 'string') {
			throw new TypeError('The second argument must be a string')
		}
		let reg = null
		//判断text是否为中文
		if (params == 'Chinese') {
			reg = /^[\u4e00-\u9fa5]+$/
		}
		//判断text是否含有中文
		if (params == 'chinese') {
			reg = /[\u4e00-\u9fa5]/
		}
		//判断text是否为邮箱
		if (params == 'email') {
			reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
		}
		//判断text是否为4-16位的用户名(字母数字下划线)
		if (params == 'username') {
			reg = /^[a-zA-Z0-9_]{4,16}$/
		}
		//判断text是否为正整数
		if (params == 'int+') {
			reg = /^\d+$/
		}
		//判断text是否为负整数
		if (params == 'int-') {
			reg = /^-\d+$/
		}
		//判断text是否为整数
		if (params == 'int') {
			reg = /^-?\d+$/
		}
		//判断text是否为正数
		if (params == 'pos') {
			reg = /^\d*\.?\d+$/
		}
		//判断text是否为负数
		if (params == 'neg') {
			reg = /^-\d*\.?\d+$/
		}
		//判断text是否为数字
		if (params == 'number') {
			reg = /^-?\d*\.?\d+$/
		}
		//判断text是否为手机号
		if (params == 'phone') {
			reg = /^1[0-9]\d{9}$/
		}
		//判断text是否为身份证号
		if (params == 'idCard') {
			reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
		}
		//判断text是否为网址
		if (params == 'url') {
			reg = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
		}
		//判断是否为ip地址
		if (params == 'IPv4') {
			reg = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
		}
		//判断是否为十六进制颜色
		if (params == 'hex') {
			reg = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
		}
		//判断text是否为QQ号码
		if (params == 'QQ') {
			reg = /^[1-9][0-9]{4,10}$/
		}
		//判断text是否为微信号,6至20位，以字母开头，字母，数字，减号，下划线
		if (params == 'weixin') {
			reg = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/
		}
		//判断text是否为车牌
		if (params == 'plate') {
			reg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/
		}

		if (!reg) {
			throw new Error('The second parameter is out of scope')
		}
		return reg.test(text)
	},

	/**
	 * 根据参数名获取地址栏参数值
	 * @param {Object} name
	 */
	getUrlParams(name) {
		if (!name || typeof name != 'string') {
			throw new TypeError('The argument must be a string')
		}
		let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
		let search = window.location.search.substr(1)
		if (!search) {
			let arr = window.location.hash.split('?')
			if (arr.length == 2) {
				search = arr[1]
			}
		}
		let r = search.match(reg)
		if (r) {
			return decodeURIComponent(r[2])
		}
		return null
	},

	/**
	 * 判断是否空对象
	 * @param {Object} obj
	 */
	isEmptyObject(obj) {
		if (this.isObject(obj)) {
			if (Object.keys(obj).length == 0) {
				return true
			} else {
				return false
			}
		} else {
			return false
		}
	},

	/**
	 * 判断两个参数是否相等
	 * @param {Object} a
	 * @param {Object} b
	 */
	equal(a, b) {
		if (typeof a !== typeof b) {
			return false
		}
		if (this.isObject(a) && this.isObject(b)) {
			a = Object.assign({}, a)
			b = Object.assign({}, b)
			let aProps = Object.getOwnPropertyNames(a)
			let bProps = Object.getOwnPropertyNames(b)
			if (aProps.length != bProps.length) {
				return false
			}
			let length = aProps.length
			for (let i = 0; i < length; i++) {
				let propName = aProps[i]
				let propA = a[propName]
				let propB = b[propName]
				if (this.isObject(propA)) {
					if (this.equal(propA, propB)) {
						return true
					} else {
						return false
					}
				} else if (propA !== propB) {
					return false
				}
			}
			return true
		} else {
			return a === b
		}
	},

	/**
	 * 是否对象
	 * @param {Object} val
	 */
	isObject(val) {
		if (typeof val === 'object' && val) {
			return true
		}
		return false
	},

	/**
	 * 文本复制
	 * @param {Object} text
	 */
	copyText(text) {
		if (!text || typeof text != 'string') {
			throw new TypeError('No text to copy is defined')
		}
		if (!navigator.clipboard) {
			throw new Error("navigator.clipboard must be obtained in a secure environment, such as localhost, 127.0.0.1, or https, so the editor's copy, paste, and cut functions cannot be used")
		}
		return navigator.clipboard.writeText(text)
	}
}
