const dataUtil = require('./data')
const elementUtil = require('./element')
const commonUtil = require('./common')

//解析绑定事件名称字符串
const parseEventName = eventName => {
	//先以空格划分
	let eventNames = eventName.split(/[\s]+/g)
	let result = []
	eventNames.forEach(name => {
		let arr = name.split('.')
		let obj = {
			eventName: arr[0]
		}
		if (arr.length > 1) {
			obj.guid = arr[1]
		}
		result.push(obj)
	})
	return result
}

//更新事件对象，移除空的元素
const updateEvents = events => {
	let obj = {}
	let keys = Object.keys(events)
	keys.forEach(key => {
		if (events[key]) {
			obj[key] = events[key]
		}
	})
	return obj
}

//给元素添加单个事件
const bindSingleListener = (elm, eventName, guid, fn, options) => {
	//获取该元素上的事件对象events:{click_0:{type:'click',fn:fn}}
	let events = dataUtil.get(elm, 'dap-defined-events') || {}
	//如果没有设定guid
	if (!guid) {
		//从该元素上拿到记录的guid值
		guid = dataUtil.get(elm, 'dap-event-guid') || 0
		//更新guid
		dataUtil.set(elm, 'dap-event-guid', guid + 1)
	}
	//更改guid，结合事件名称作为存储的key值
	guid = eventName + '_' + guid
	//先判断是否已经含有同guid且同类型事件，有则移除
	if (events[guid] && events[guid].type == eventName) {
		elm.removeEventListener(eventName, events[guid].fn, events[guid].options)
	}
	//添加事件
	elm.addEventListener(eventName, fn, options)
	//添加到events对象里，并更新到节点上
	events[guid] = {
		type: eventName,
		fn: fn,
		options: options
	}
	dataUtil.set(elm, 'dap-defined-events', events)
}

//移除元素的单个事件
const unbindSingleListener = (elm, eventName, guid) => {
	let events = dataUtil.get(elm, 'dap-defined-events') || {}
	let keys = Object.keys(events)
	let length = keys.length
	for (let i = 0; i < length; i++) {
		let key = keys[i]
		if (events[key].type == eventName) {
			//如果guid存在则移除该修饰符指定的事件，否则移除全部该类型事件
			if (guid) {
				if (key == eventName + '_' + guid) {
					elm.removeEventListener(events[key].type, events[key].fn, events[key].options)
					events[key] = undefined
				}
			} else {
				elm.removeEventListener(events[key].type, events[key].fn, events[key].options)
				events[key] = undefined
			}
		}
	}
	//更新events
	events = updateEvents(events)
	dataUtil.set(elm, 'dap-defined-events', events)
}

module.exports = {
	/**
	 * 绑定事件
	 * @param {Element} elm
	 * @param {String} eventName
	 * @param {Function} fn
	 * @param {Object} options 
	 */
	on(elm, eventName, fn, options) {
		//参数elm校验
		if (!elementUtil.isElement(elm)) {
			throw new TypeError('The first argument must be an element node')
		}
		//参数eventName校验
		if (!eventName || typeof eventName != 'string') {
			throw new TypeError('The second argument must be a string')
		}
		//参数fn校验
		if (!fn || typeof fn != 'function') {
			throw new TypeError('The third argument must be a function')
		}
		//参数options校验
		if (!commonUtil.isObject(options)) {
			options = {}
		}
		//解析eventName，获取事件数组以及guid标志
		const result = parseEventName(eventName)
		//批量添加事件
		result.forEach(res => {
			bindSingleListener(elm, res.eventName, res.guid, fn.bind(elm), options)
		})
	},

	/**
	 * 事件解绑
	 * @param {Element} elm
	 * @param {String} eventName
	 */
	off(elm, eventName) {
		let events = dataUtil.get(elm, 'dap-defined-events')
		if (!events) {
			return
		}
		//事件名称不存在，则移除该元素的全部事件
		if (!eventName) {
			let keys = Object.keys(events)
			let length = keys.length
			for (let i = 0; i < length; i++) {
				let key = keys[i]
				elm.removeEventListener(events[key].type, events[key].fn, events[key].options)
			}
			dataUtil.remove(elm, 'dap-defined-events')
			dataUtil.remove(elm, 'dap-event-guid')
			return
		}
		//解析eventName，获取事件数组以及guid标志
		const result = parseEventName(eventName)
		result.forEach(res => {
			unbindSingleListener(elm, res.eventName, res.guid)
		})
	}
}
