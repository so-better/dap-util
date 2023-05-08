const stringUtil = require('./string')
const numberUtil = require('./number')
/**
 * element相关工具方法
 */
module.exports = {
	/**
	 * 判断是否是Window对象
	 * @param {Object} data 入参
	 */
	isWindow(data) {
		if (data && data.constructor && data.constructor.name) {
			return data.constructor.name == 'Window'
		}
		return false
	},
	/**
	 * 获取元素距离指定祖先元素左侧/顶部/底部/右侧的距离
	 * @param {Object} el 元素
	 * @param {Object} root 父元素或者祖先元素，未指定则为document.body
	 */
	getElementPoint(el, root) {
		if (!this.isElement(el)) {
			throw new TypeError('The first argument must be an element')
		}
		if (!this.isElement(root)) {
			root = document.body
		}

		if (!this.isContains(root, el)) {
			throw new Error('The second argument and the first argument have no hierarchical relationship')
		}

		let obj = el
		let offsetTop = 0
		let offsetLeft = 0
		//判断是否有定位父容器，如果存在则累加其边距
		while (this.isElement(el) && this.isContains(root, el) && root !== el) {
			offsetTop += el.offsetTop //叠加父容器的上边距
			offsetLeft += el.offsetLeft //叠加父容器的左边距
			el = el.offsetParent
		}
		let offsetRight = root.offsetWidth - offsetLeft - obj.offsetWidth
		let offsetBottom = root.offsetHeight - offsetTop - obj.offsetHeight
		return {
			top: offsetTop,
			left: offsetLeft,
			right: offsetRight,
			bottom: offsetBottom
		}
	},

	/**
	 * 判断某个节点是否包含指定节点，包含相等关系和父子关系
	 * @param {Object} parentNode 父节点或祖先节点
	 * @param {Object} childNode 子节点
	 */
	isContains(parentNode, childNode) {
		//元素不是节点
		if (!this.isElement(parentNode)) {
			throw new TypeError('The first argument must be an element')
		}
		if (!this.isElement(childNode)) {
			throw new TypeError('The second argument must be an element')
		}
		if (parentNode === childNode) {
			return true
		}
		//如果浏览器支持contains
		if (parentNode.contains) {
			return parentNode.contains(childNode)
		}
		//火狐支持
		if (parentNode.compareDocumentPosition) {
			return !!(parentNode.compareDocumentPosition(childNode) & 16)
		}
	},

	/**
	 * 判断某个节点是否是指定节点的父节点
	 * @param {Object} parentNode 父节点
	 * @param {Object} childNode 子节点
	 */
	isParentNode(parentNode, childNode) {
		//元素不是节点
		if (!this.isElement(parentNode)) {
			throw new TypeError('The first argument must be an element')
		}
		if (!this.isElement(childNode)) {
			throw new TypeError('The second argument must be an element')
		}
		if (parentNode === childNode) {
			return false
		}
		return childNode.parentNode === parentNode
	},

	/**
	 * 查找某个节点下指定选择器的子元素
	 * @param {Object} el 元素节点
	 * @param {Object} selector 支持多选择器，等同于querySelectorAll的参数
	 */
	children(el, selector) {
		//元素不是节点
		if (!this.isElement(el)) {
			throw new TypeError('The first argument must be an element')
		}
		if (selector && typeof selector != 'string') {
			throw new TypeError('The second argument must be a string')
		}
		const res = el.querySelectorAll(selector || '*')
		return [...res].filter(ele => {
			return ele.parentNode === el
		})
	},

	/**
	 * 查找某个节点下指定选择器的兄弟节点
	 * @param {Object} el 元素节点
	 * @param {Object} selector 取值等同于queryselectorAll的参数，支持多选择器
	 */
	siblings(el, selector) {
		//元素不是节点
		if (!this.isElement(el)) {
			throw new TypeError('The first argument must be an element')
		}
		if (selector && typeof selector != 'string') {
			throw new TypeError('The second argument must be a string')
		}
		if (!el.parentNode) {
			return []
		}
		const res = el.parentNode.querySelectorAll(selector || '*')
		return [...res].filter(ele => {
			return ele.parentNode === el.parentNode && ele != el
		})
	},

	/**
	 * rem与px单位转换
	 * @param {Object} num rem数值
	 */
	rem2px(num) {
		if (!numberUtil.isNumber(num)) {
			throw new TypeError('The argument must be a number')
		}
		let fs = this.getCssStyle(document.documentElement, 'font-size')
		return numberUtil.mutiply(num, parseFloat(fs))
	},

	/**
	 * rem与px单位转换
	 * @param {Object} num px数值
	 */
	px2rem(num) {
		if (!numberUtil.isNumber(num)) {
			throw new TypeError('The argument must be a number')
		}
		let fs = this.getCssStyle(document.documentElement, 'font-size')
		return numberUtil.divide(num, parseFloat(fs))
	},

	/**
	 * 获取元素的内容宽度，内容宽度不包括border和padding
	 * @param {Object} el 支持css选择器字符串，未指定则表示document.body
	 */
	width(el) {
		if (typeof el == 'string' && el) {
			el = document.body.querySelector(el)
		}
		if (!this.isElement(el)) {
			el = document.body
		}
		let clientWidth = el.clientWidth //获取元素包括内边距在内的宽度
		let paddingLeft_width = parseFloat(this.getCssStyle(el, 'padding-left')) //左内边距
		let paddingRight_width = parseFloat(this.getCssStyle(el, 'padding-right')) //右内边距宽度
		return numberUtil.subtract(clientWidth, paddingLeft_width, paddingRight_width)
	},

	/**
	 * 获取元素的内容高度，内容高度不包括border和padding
	 * @param {Object} el 支持css选择器字符串 未指定则表示document.body
	 */
	height(el) {
		if (typeof el == 'string' && el) {
			el = document.body.querySelector(el)
		}
		if (!this.isElement(el)) {
			el = document.body
		}
		let clientHeight = el.clientHeight //获取元素包括内边距在内的高度
		let paddingTop_height = parseFloat(this.getCssStyle(el, 'padding-top')) //上内边距
		let paddingBottom_height = parseFloat(this.getCssStyle(el, 'padding-bottom')) //下内边距宽度
		return numberUtil.subtract(clientHeight, paddingTop_height, paddingBottom_height)
	},

	/**
	 * 移除class
	 * @param {Object} el 元素节点
	 * @param {Object} className 支持多类,以空格划分
	 */
	removeClass(el, className) {
		//元素不是节点
		if (!this.isElement(el)) {
			throw new TypeError('The first argument must be an element')
		}
		if (!className || typeof className != 'string') {
			throw new TypeError('The second argument must be a string')
		}
		let classList = el.classList
		let classArray = stringUtil.trim(className).split(/\s+/) //按照空格划分
		classArray.forEach((item, index) => {
			classList.remove(item)
		})
	},

	/**
	 * 添加class
	 * @param {Object} el 元素节点
	 * @param {Object} className 支持多类,以空格划分
	 */
	addClass(el, className) {
		//元素不是节点
		if (!this.isElement(el)) {
			throw new TypeError('The first argument must be an element')
		}
		if (!className || typeof className != 'string') {
			throw new TypeError('The second argument must be a string')
		}
		let classList = el.classList
		let classArray = stringUtil.trim(className).split(/\s+/) //按照空格划分
		classArray.forEach((item, index) => {
			classList.add(item)
		})
	},

	/**
	 * 判断指定元素是否含有指定类名
	 * @param {Object} el 元素节点
	 * @param {Object} className 支持多类,以空格划分
	 */
	hasClass(el, className) {
		//元素不是节点
		if (!this.isElement(el)) {
			throw new TypeError('The first argument must be an element')
		}
		if (!className || typeof className != 'string') {
			throw new TypeError('The second argument must be a string')
		}
		let classList = el.classList
		let classArray = stringUtil.trim(className).split(/\s+/) //按照空格划分
		return classArray.every((item, index) => {
			return classList.contains(item)
		})
	},

	/**
	 * 监听元素滚动到顶部或者底部
	 * @param {Object} el 支持css选择器字符串 未指定则为窗口滚动
	 * @param {Object} callback 回调函数
	 */
	scrollTopBottomTrigger(el, callback) {
		if (typeof el == 'string' && el) {
			el = document.body.querySelector(el)
		}
		let scrollEle = window
		if (this.isElement(el) && el != document.body && el != document.documentElement) {
			scrollEle = el
		}
		if (typeof el == 'function') {
			callback = el
		}
		//滑动到底部时是否触发回调函数的标识，解决ios系统下多次触发回调的bug
		let flag = true
		scrollEle.addEventListener('scroll', e => {
			if (this.getScrollTop(scrollEle) <= 0) {
				//滑动到顶部
				let options = {
					state: 'top',
					target: scrollEle
				}
				if (!flag) {
					return
				}
				if (typeof callback == 'function') {
					flag = false
					callback(options)
				}
			} else {
				//滑动到底部
				let options = {
					state: 'bottom',
					target: scrollEle
				}
				let height = 0
				if (scrollEle == window) {
					height = window.innerHeight
				} else {
					height = scrollEle.clientHeight
				}
				//+1是为了防止出现小数点误差
				if (numberUtil.add(this.getScrollTop(scrollEle), height) + 1 >= this.getScrollHeight(scrollEle) && height != this.getScrollHeight(scrollEle)) {
					if (!flag) {
						return
					}
					if (typeof callback == 'function') {
						flag = false
						callback(options)
					}
				} else {
					flag = true
				}
			}
		})
	},

	/**
	 * 获取文档或元素的总宽度
	 * @param {Object} el 支持css选择器字符串 未指定则表示整个页面文档
	 */
	getScrollWidth(el) {
		if (typeof el == 'string' && el) {
			el = document.body.querySelector(el)
		}
		let scrollWidth = 0
		if (this.isElement(el) && el != document.documentElement && el != document.body) {
			scrollWidth = el.scrollWidth
		} else {
			if (document.documentElement.scrollWidth == 0 || document.body.scrollWidth == 0) {
				scrollWidth = document.documentElement.scrollWidth || document.body.scrollWidth
			} else {
				scrollWidth = document.documentElement.scrollWidth > document.body.scrollWidth ? document.documentElement.scrollWidth : document.body.scrollWidth
			}
		}
		return scrollWidth
	},

	/**
	 * 获取文档或者元素的总高度
	 * @param {Object} el 支持css选择器字符串 未指定则表示整个页面文档
	 */
	getScrollHeight(el) {
		if (typeof el == 'string' && el) {
			el = document.body.querySelector(el)
		}
		let scrollHeight = 0
		if (this.isElement(el) && el != document.documentElement && el != document.body) {
			scrollHeight = el.scrollHeight
		} else {
			if (document.documentElement.scrollHeight == 0 || document.body.scrollHeight == 0) {
				scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
			} else {
				scrollHeight = document.documentElement.scrollHeight > document.body.scrollHeight ? document.documentElement.scrollHeight : document.body.scrollHeight
			}
		}
		return scrollHeight
	},

	/**
	 * 设置滚动条在Y轴上的距离
	 * @param {Object} options {el,number,time} el支持css选择器字符串 未指定则为窗口滚动
	 */
	setScrollTop(options) {
		let isWindow = false
		let el = options.el
		if (typeof el == 'string' && el) {
			el = document.body.querySelector(el)
		}
		let number = options.number || 0
		let time = options.time || 0
		if (!this.isElement(el) || el == document.body || el == document.documentElement || el == window) {
			isWindow = true
		}
		return new Promise((resolve, reject) => {
			if (time <= 0) {
				if (isWindow) {
					document.documentElement.scrollTop = document.body.scrollTop = number
				} else {
					el.scrollTop = number
				}
				resolve()
			} else {
				let spacingTime = 10 // 设置循环的间隔时间  值越小消耗性能越高
				let spacingIndex = numberUtil.divide(time, spacingTime) // 计算循环的次数
				// 获取当前滚动条位置
				let nowTop = this.getScrollTop(el)
				let everTop = numberUtil.divide(numberUtil.subtract(number, nowTop), spacingIndex) // 计算每次滑动的距离
				let scrollTimer = setInterval(() => {
					if (spacingIndex > 0) {
						spacingIndex--
						if (isWindow) {
							document.documentElement.scrollTop = document.body.scrollTop = nowTop = numberUtil.add(nowTop, everTop)
						} else {
							el.scrollTop = nowTop = numberUtil.add(nowTop, everTop)
						}
					} else {
						clearInterval(scrollTimer) // 清除计时器
						resolve()
					}
				}, spacingTime)
			}
		})
	},

	/**
	 * 获取滚动条在Y轴上滚动的距离
	 * @param {Object} el 支持css选择器字符串 未指定则为窗口滚动
	 */
	getScrollTop(el) {
		if (typeof el == 'string' && el) {
			el = document.body.querySelector(el)
		}
		let scrollTop = 0
		//如果是元素节点
		if (this.isElement(el) && el != document.body && el != document.documentElement && el != window) {
			scrollTop = el.scrollTop
		} else {
			if (document.documentElement.scrollTop == 0 || document.body.scrollTop == 0) {
				scrollTop = document.documentElement.scrollTop || document.body.scrollTop
			} else {
				scrollTop = document.documentElement.scrollTop > document.body.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop
			}
		}
		return scrollTop
	},

	/**
	 * 获取滚动条在X轴上滚动的距离
	 * @param {Object} el 支持css选择器字符串 未指定则为窗口滚动
	 */
	getScrollLeft(el) {
		if (typeof el == 'string' && el) {
			el = document.body.querySelector(el)
		}
		let scrollLeft = 0
		//如果是元素节点
		if (this.isElement(el) && el != document.body && el != document.documentElement && el != window) {
			scrollLeft = el.scrollLeft
		} else {
			if (document.documentElement.scrollLeft == 0 || document.body.scrollLeft == 0) {
				scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft
			} else {
				scrollLeft = document.documentElement.scrollLeft > document.body.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft
			}
		}
		return scrollLeft
	},

	/**
	 * 设置滚动条在X轴上的距离
	 * @param {Object} options {el,number,time} el支持css选择器字符串 未指定则为窗口滚动
	 */
	setScrollLeft(options) {
		let isWindow = false
		let el = options.el
		if (typeof el == 'string' && el) {
			el = document.body.querySelector(el)
		}
		let number = options.number || 0
		let time = options.time || 0
		if (!this.isElement(el) || el == document.body || el == document.documentElement || el == window) {
			isWindow = true
		}
		return new Promise((resolve, reject) => {
			if (time <= 0) {
				if (isWindow) {
					document.documentElement.scrollLeft = document.body.scrollLeft = number
				} else {
					el.scrollLeft = number
				}
				resolve()
			} else {
				let spacingTime = 10 // 设置循环的间隔时间  值越小消耗性能越高
				let spacingIndex = numberUtil.divide(time, spacingTime) // 计算循环的次数
				// 获取当前滚动条位置
				let nowLeft = this.getScrollLeft(el)
				let everLeft = numberUtil.divide(numberUtil.subtract(number, nowLeft), spacingIndex) // 计算每次滑动的距离
				let scrollTimer = setInterval(() => {
					if (spacingIndex > 0) {
						spacingIndex--
						if (isWindow) {
							document.documentElement.scrollLeft = document.body.scrollLeft = nowLeft = numberUtil.add(nowLeft, everLeft)
						} else {
							el.scrollLeft = nowLeft = numberUtil.add(nowLeft, everLeft)
						}
					} else {
						clearInterval(scrollTimer) // 清除计时器
						resolve()
					}
				}, spacingTime)
			}
		})
	},

	/**
	 * 获取元素指定样式
	 * @param {Object} el 元素
	 * @param {Object} cssName 样式名称
	 */
	getCssStyle(el, cssName) {
		//元素不是节点
		if (!this.isElement(el)) {
			throw new TypeError('The first argument must be an element')
		}
		if (!cssName || typeof cssName != 'string') {
			throw new TypeError('The second argument must be a string')
		}
		let cssText = ''
		//兼容IE9-IE11、chrome、firefox、safari、opera；不兼容IE7-IE8
		if (document.defaultView && document.defaultView.getComputedStyle) {
			cssText = document.defaultView.getComputedStyle(el)[cssName]
		}
		//兼容IE7-IE11；不兼容chrome、firefox、safari、opera
		else {
			cssText = el.currentStyle[cssName]
		}
		return cssText
	},

	/**
	 * 判断字符串属于哪种选择器
	 * @param {Object} selector
	 */
	getCssSelector(selector) {
		if (!selector || typeof selector != 'string') {
			throw new TypeError('The argument must be a selector string')
		}
		//id选择器，以#开头的字符串
		if (/^#{1}/.test(selector)) {
			return {
				type: 'id',
				value: selector.substr(1)
			}
		}
		//类名选择器，以.开头的字符串
		if (/^\./.test(selector)) {
			return {
				type: 'class',
				value: selector.substr(1)
			}
		}
		//属性选择器，以[]包裹的字符串
		if (/^\[(.+)\]$/.test(selector)) {
			let type = 'attribute'
			let value = ''
			let attribute = stringUtil.trim(selector, true).substring(1, stringUtil.trim(selector, true).length - 1)
			let arry = attribute.split('=')
			if (arry.length == 1) {
				value = arry[0]
			}
			if (arry.length == 2) {
				value = {
					attributeName: arry[0],
					attributeValue: arry[1].replace(/\'/g, '').replace(/\"/g, '') //去除属性值的单引号或者双引号
				}
			}
			return {
				type,
				value
			}
		}

		//默认为标签名选择器
		return {
			type: 'tag',
			value: selector
		}
	},

	/**
	 * 获取元素距离可视窗口的位置
	 * @param {Object} el 支持css选择器字符串 未指定则为document.body
	 */
	getElementBounding(el) {
		if (typeof el == 'string' && el) {
			el = document.body.querySelector(el)
		}
		if (!this.isElement(el)) {
			el = document.body
		}
		let point = el.getBoundingClientRect()
		let top = point.top //元素顶部距离可视窗口上边的距离

		let bottom = numberUtil.subtract(document.documentElement.clientHeight || window.innerHeight, point.bottom) //元素底部距离可视窗口底部的距离
		let left = point.left //元素左侧距离可视窗口左边的距离
		let right = numberUtil.subtract(document.documentElement.clientWidth || window.innerWidth, point.right) //元素右侧距离可视窗口右边的距离
		return {
			top,
			bottom,
			left,
			right
		}
	},

	/**
	 * 判断是否是元素节点
	 * @param {Object} el
	 */
	isElement(el, text = false) {
		if (text) {
			return el && (el.nodeType === 1 || el.nodeType === 3) && el instanceof Node
		}
		return el && el.nodeType === 1 && el instanceof Node
	},

	/**
	 * 字符串转dom
	 * @param {Object} str
	 */
	string2dom(str) {
		if (!str || typeof str != 'string') {
			throw new TypeError('The argument must be an HTML string')
		}
		let parentEle = document.createElement('div')
		parentEle.innerHTML = str
		if (parentEle.children.length == 1) {
			return parentEle.children[0]
		} else {
			return parentEle.children
		}
	}
}
