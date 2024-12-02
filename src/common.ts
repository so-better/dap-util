export type matchingParamType = 'Chinese' | 'chinese' | 'email' | 'username' | 'int+' | 'int-' | 'int' | 'pos' | 'neg' | 'number' | 'phone' | 'idCard' | 'url' | 'IPv4' | 'hex' | 'rgb' | 'rgba' | 'QQ' | 'weixin' | 'plate'

/**
 * 常用方法
 */
export const common = {
	/**
	 * 常用判断
	 * @param {Object} text 要判断的字符串
	 * @param {Object} param 判断的类型字符串
	 */
	matchingText(text: string, param: matchingParamType) {
		//判断text是否为中文
		if (param == 'Chinese') {
			return /^[\u4e00-\u9fa5]+$/.test(text)
		}
		//判断text是否含有中文
		if (param == 'chinese') {
			return /[\u4e00-\u9fa5]/.test(text)
		}
		//判断text是否为邮箱
		if (param == 'email') {
			return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(text)
		}
		//判断text是否为4-16位的用户名(字母数字下划线)
		if (param == 'username') {
			return /^[a-zA-Z0-9_]{4,16}$/.test(text)
		}
		//判断text是否为正整数
		if (param == 'int+') {
			return /^\d+$/.test(text)
		}
		//判断text是否为负整数
		if (param == 'int-') {
			return /^-\d+$/.test(text)
		}
		//判断text是否为整数
		if (param == 'int') {
			return /^-?\d+$/.test(text)
		}
		//判断text是否为正数
		if (param == 'pos') {
			return /^\d*\.?\d+$/.test(text)
		}
		//判断text是否为负数
		if (param == 'neg') {
			return /^-\d*\.?\d+$/.test(text)
		}
		//判断text是否为数字
		if (param == 'number') {
			return /^-?\d*\.?\d+$/.test(text)
		}
		//判断text是否为手机号
		if (param == 'phone') {
			return /^1[0-9]\d{9}$/.test(text)
		}
		//判断text是否为身份证号
		if (param == 'idCard') {
			return /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(text)
		}
		//判断text是否为网址
		if (param == 'url') {
			return /^(https?|ftp):\/\/(-\.)?([^\s\/?\.#-]+\.?)+(\/[^\s]*)?$/.test(text)
		}
		//判断是否为ip地址
		if (param == 'IPv4') {
			return /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(text)
		}
		//判断是否为十六进制颜色
		if (param == 'hex') {
			return /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(text)
		}
		//判断是否为rgb值
		if (param == 'rgb') {
			return /^rgb\((25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d),\s?(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d),\s?(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\)$/.test(text)
		}
		//判断是否为rgba值
		if (param == 'rgba') {
			return /^rgba\((25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d),\s?(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d),\s?(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d),\s?(0?\.\d|1(\.0)?|0)\)$/.test(text)
		}
		//判断text是否为QQ号码
		if (param == 'QQ') {
			return /^[1-9][0-9]{4,10}$/.test(text)
		}
		//判断text是否为微信号,6至20位，以字母开头，字母，数字，减号，下划线
		if (param == 'weixin') {
			return /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/.test(text)
		}
		//判断text是否为车牌
		if (param == 'plate') {
			return /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/.test(text)
		}
		return false
	},

	/**
	 * 根据参数名获取地址栏参数值
	 * @param {Object} name
	 */
	getUrlParams(name: string) {
		const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
		let search = window.location.search.substring(1)
		if (!search) {
			const arr = window.location.hash.split('?')
			if (arr.length == 2) {
				search = arr[1]
			}
		}
		let r = search.match(reg)
		if (r) {
			return decodeURIComponent(r[2])
		}
	},

	/**
	 * 判断是否空对象
	 * @param {Object} obj
	 */
	isEmptyObject(obj: any) {
		return this.isObject(obj) && Object.keys(obj).length == 0
	},

	/**
	 * 判断两个参数是否相等
	 * @param {Object} a
	 * @param {Object} b
	 */
	equal(a: any, b: any) {
		if (typeof a !== typeof b) {
			return false
		}
		if (this.isObject(a) && this.isObject(b)) {
			const aProps = Object.getOwnPropertyNames(a)
			const bProps = Object.getOwnPropertyNames(b)
			if (aProps.length != bProps.length) {
				return false
			}
			const length = aProps.length
			let isEqual = true
			for (let i = 0; i < length; i++) {
				const propName = aProps[i]
				const propA = a[propName]
				const propB = b[propName]
				if (!this.equal(propA, propB)) {
					isEqual = false
					break
				}
			}
			return isEqual
		}
		return a === b
	},

	/**
	 * 是否对象
	 * @param {Object} val
	 */
	isObject(val: any) {
		return typeof val === 'object' && !!val
	},

	/**
	 * 文本复制
	 * @param {Object} text
	 */
	copyText(text: string) {
		if (!navigator.clipboard) {
			throw new Error("navigator.clipboard must be obtained in a secure environment, such as localhost, 127.0.0.1, or https, so the method won't work")
		}
		return navigator.clipboard.writeText(text)
	},

	/**
	 * 深度克隆
	 * @param {Object} data
	 */
	clone<T>(data: T) {
		if (this.isObject(data)) {
			if (Array.isArray(data)) {
				return data.map((item: any): any => {
					return this.clone(item)
				}) as T
			}
			const newData: any = {}
			for (let key in data) {
				newData[key] = this.clone(data[key])
			}
			return newData as T
		}
		return data as T
	}
}
