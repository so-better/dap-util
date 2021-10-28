const elementUtil = require('./element')
/**
 * 常用方法
 */
module.exports = {

	/**
	 * 判断是否指定的访问终端
	 * @param {Object} params 访问终端名称
	 */
	judgeAccessTerminalBrowser(params) {
		if(!params || typeof params != 'string'){
			throw new TypeError('The argument must be a string')
		}
		let u = navigator.userAgent
		if (params.toLocaleLowerCase() == 'ie') { //IE内核
			return u.indexOf('Trident') > -1
		} else if (params.toLocaleLowerCase() == 'opera') { //opera内核
			return u.indexOf('Presto') > -1
		} else if (params.toLocaleLowerCase() == 'webkit') { //webkit内核
			return u.indexOf('AppleWebKit') > -1
		} else if (params.toLocaleLowerCase() == 'gecko') { //火狐内核
			return u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1
		} else if (params.toLocaleLowerCase() == 'edge') { //edge浏览器
			return !!u.match(/Edg\/([\d.]+)/)
		}else if (params.toLocaleLowerCase() == 'mobile') { //移动终端
			return !!u.match(/AppleWebKit.*Mobile.*/)
		} else if (params.toLocaleLowerCase() == 'ios') { //ios系统
			return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
		} else if (params.toLocaleLowerCase() == 'android') { //安卓系统
			return u.indexOf('Android') > -1
		} else if (params.toLocaleLowerCase() == 'iphone') { //苹果手机
			return u.indexOf('iPhone') > -1
		} else if (params.toLocaleLowerCase() == 'ipad') { //ipad
			return u.indexOf('iPad') > -1
		} else if (params.toLocaleLowerCase() == 'webapp') { //web应用程序
			return u.indexOf('Safari') == -1
		} else if (params.toLocaleLowerCase() == 'weixin') { //微信内置浏览器
			return u.indexOf('MicroMessenger') > -1
		} else if (params.toLocaleLowerCase() == 'qq') { //QQ内置浏览器
			return u.indexOf('QQ') > -1
		} else if (params.toLocaleLowerCase() == 'qqbrowser') { //qq浏览器
			return u.indexOf("MQQBrowser") > -1
		} else if (params.toLocaleLowerCase() == 'language') { //语言类型
			return (navigator.browserLanguage || navigator.language).toLocaleLowerCase()
		} else if (params.toLocaleLowerCase() == 'uc') { //uc浏览器
			return u.indexOf("UCBrowser") > -1
		} else if (params.toLocaleLowerCase() == 'chrome') { //谷歌浏览器
			return u.indexOf("Chrome") > -1
		} else if (params.toLocaleLowerCase() == 'firefox') { //火狐浏览器
			return u.indexOf("Firefox") > -1
		} else if (params.toLocaleLowerCase() == 'sougou') { //搜狗浏览器
			return u.toLowerCase().indexOf('se 2.x') > -1
		} else if (params.toLocaleLowerCase() == 'iebrowser') { //ie浏览器
			return window.ActiveXObject || "ActiveXObject" in window
		} else if (params.toLocaleLowerCase() == 'windows') { //windows系统
			return u.indexOf("Windows") > -1
		} else if (params.toLocaleLowerCase() == 'tablet') { //平板电脑
			return (u.indexOf('iPad') > -1) || (u.indexOf('Android') > -1 && !/(?:Mobile)/.test(u)) || (u.indexOf("Firefox") > -1 && /(?:Tablet)/.test(u))
		} else if (params.toLocaleLowerCase() == 'phone') { //手机
			return (u.indexOf('Android') > -1 && /(?:Mobile)/.test(u)) || (u.indexOf('iPhone') > - 1) || (/(?:Windows Phone)/.test(u))
		} else if (params.toLocaleLowerCase() == 'windowsphone') { //windows手机
			return /(?:Windows Phone)/.test(u)
		} else if (params.toLocaleLowerCase() == 'mac') {//mac电脑
			return /macintosh|mac os x/i.test(u)
		} else if (params.toLocaleLowerCase() == 'win32') {//win32系统
			return u.toLowerCase().indexOf("win32") > -1 || u.toLowerCase().indexOf("wow32") > -1
		} else if (params.toLocaleLowerCase() == 'win64') {//win64系统
			return u.toLowerCase().indexOf("win64") > -1 || u.toLowerCase().indexOf("wow64") > -1
		}
		
		return false
	},

	/**
	 * 常用判断
	 * @param {Object} text 要判断的字符串
	 * @param {Object} params 判断的类型字符串
	 */
	matchingText(text, params) {
		if(!text || typeof text != 'string'){
			throw new TypeError('The first argument must be a string')
		}
		if(!params || typeof params != 'string'){
			throw new TypeError('The second argument must be a string')
		}
		let reg = null
		//判断text是否为中文
		if (params == "Chinese") {
			reg = /^[\u4e00-\u9fa5]+$/
		}
		//判断text是否含有中文
		if (params == "chinese") {
			reg = /[\u4e00-\u9fa5]/
		}
		//判断text是否为邮箱
		if (params == "email") {
			reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
		}
		//判断text是否为4-16位的用户名(字母数字下划线)
		if (params == "userName") {
			reg = /^[a-zA-Z0-9_]{4,16}$/
		}
		//判断text是否为正整数
		if (params == "int+") {
			reg = /^\d+$/
		}
		//判断text是否为负整数
		if (params == "int-") {
			reg = /^-\d+$/
		}
		//判断text是否为整数
		if (params == "int") {
			reg = /^-?\d+$/
		}
		//判断text是否为正数
		if (params == "pos") {
			reg = /^\d*\.?\d+$/
		}
		//判断text是否为负数
		if (params == "neg") {
			reg = /^-\d*\.?\d+$/
		}
		//判断text是否为数字
		if (params == "number") {
			reg = /^-?\d*\.?\d+$/
		}
		//判断text是否为手机号
		if (params == "phone") {
			reg = /^1[0-9]\d{9}$/
		}
		//判断text是否为身份证号
		if (params == "idCard") {
			reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
		}
		//判断text是否为网址
		if (params == "url") {
			reg = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
		}
		//判断是否为ip地址
		if (params == "IPv4") {
			reg = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
		}
		//判断是否为十六进制颜色
		if (params == "hex") {
			reg = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
		}
		//判断text是否为日期(./-以及年月日)
		if (params == "date") {
			let reg1 = /^((\d{4})(-)(\d{2})(-)(\d{2}))$/
			let reg2 = /^(\d{4})(\/)(\d{2})(\/)(\d{2})$/
			let reg3 = /^(\d{4})(\.)(\d{2})(\.)(\d{2})$/
			let reg4 = /^(\d{4})(年)(\d{2})(月)(\d{2})(日)$/
			return reg1.test(text) || reg2.test(text) || reg3.test(text) || reg4.test(text)
		}
		//判断text是否为时间
		if (params == "time") { //如22:22:22
			reg = /^(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$/
		}
		//判断text是否为QQ号码
		if (params == "QQ") {
			reg = /^[1-9][0-9]{4,10}$/
		}
		//判断text是否为微信号,6至20位，以字母开头，字母，数字，减号，下划线
		if (params == "weixin") {
			reg = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/
		}
		//判断text是否为车牌
		if (params == "plate") {
			reg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/
		}
		
		if(!reg){
			throw new Error('The second parameter is out of scope')
		}
		return reg.test(text)
	},

	/**
	 * 根据参数名获取地址栏参数值
	 * @param {Object} name
	 */
	getUrlParams(name) {
		if(!name || typeof name != 'string'){
			throw new TypeError('The argument must be a string')
		}
		let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
		let search = window.location.search.substr(1)
		if (!search) {
			let arr = window.location.hash.split("?")
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
			a = Object.assign({},a)
			b = Object.assign({},b)
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
		if (typeof val === "object" && val) {
			return true
		}
		return false
	},

	/**
	 * 文本复制
	 * @param {Object} text
	 */
	copyText(text) {
		if(!text || typeof text != 'string'){
			throw new TypeError('No text to copy is defined')
		}
		let el = elementUtil.string2dom('<span>' + text + '</span>')
		document.body.appendChild(el)
		const range = document.createRange()
		range.selectNode(el)
		const selection = window.getSelection()
		if (selection.rangeCount > 0) {
			selection.removeAllRanges()
		}
		selection.addRange(range)
		document.execCommand('copy')
		document.body.removeChild(el)
	}
}
