import dataUtil from './data'
import elementUtil from './element'
import commonUtil from './common'

type EventNameObjType = {
	eventName?: string
	guid?: any
}

//解析绑定事件名称字符串
const parseEventName = (eventName: string) => {
	//先以空格划分
	let eventNames = eventName.split(/[\s]+/g)
	let result: EventNameObjType[] = []
	eventNames.forEach(name => {
		let arr = name.split('.')
		let obj: EventNameObjType = {
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
const updateEvents = (events: any) => {
	let obj: any = {}
	let keys = Object.keys(events)
	keys.forEach(key => {
		if (events[key]) {
			obj[key] = events[key]
		}
	})
	return obj
}

//给元素添加单个事件
const bindSingleListener = (el: HTMLElement, eventName: string, guid: any, fn: (e: Event) => void, options?: AddEventListenerOptions) => {
	//获取该元素上的事件对象events:{click.0:{type:'click',fn:fn}}
	let events = dataUtil.get(el, 'dap-defined-events') || {}
	//如果没有设定guid
	if (!guid) {
		//从该元素上拿到记录的guid值
		guid = dataUtil.get(el, 'dap-event-guid') || 0
		//更新guid
		dataUtil.set(el, 'dap-event-guid', guid + 1)
	}
	//更改guid，结合事件名称作为存储的key值
	guid = eventName + '.' + guid
	//先判断是否已经含有同guid且同类型事件，有则移除
	if (events[guid] && events[guid].type == eventName) {
		el.removeEventListener(eventName, events[guid].fn, events[guid].options)
	}
	//添加事件
	el.addEventListener(eventName, fn, options)
	//添加到events对象里，并更新到节点上
	events[guid] = {
		type: eventName,
		fn: fn,
		options: options
	}
	dataUtil.set(el, 'dap-defined-events', events)
}

//移除元素的单个事件
const unbindSingleListener = (el: HTMLElement, eventName: string, guid: any) => {
	let events = dataUtil.get(el, 'dap-defined-events') || {}
	let keys = Object.keys(events)
	let length = keys.length
	for (let i = 0; i < length; i++) {
		let key = keys[i]
		if (events[key].type == eventName) {
			//如果guid存在则移除该修饰符指定的事件，否则移除全部该类型事件
			if (guid) {
				if (key == eventName + '.' + guid) {
					el.removeEventListener(events[key].type, events[key].fn, events[key].options)
					events[key] = undefined
				}
			} else {
				el.removeEventListener(events[key].type, events[key].fn, events[key].options)
				events[key] = undefined
			}
		}
	}
	//更新events
	events = updateEvents(events)
	dataUtil.set(el, 'dap-defined-events', events)
}

export default {
	/**
	 * 绑定事件
	 * @param {Object} el 元素节点
	 * @param {Object} eventName 事件名称
	 * @param {Object} fn 函数
	 * @param {Object} options 参数
	 */
	on(el: HTMLElement, eventName: string, fn: (e: Event) => void, options?: AddEventListenerOptions) {
		//参数el校验
		if (!(el instanceof Document) && !elementUtil.isElement(el) && !elementUtil.isWindow(el)) {
			throw new TypeError('The first argument must be an element node or window or document')
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
		result.forEach((res: EventNameObjType) => {
			bindSingleListener(el, res.eventName!, res.guid, fn.bind(el), options)
		})
	},

	/**
	 * 事件解绑
	 * @param {Object} el 元素节点
	 * @param {Object} eventName 事件名称
	 */
	off(el: HTMLElement, eventName?: string) {
		//参数el校验
		if (!(el instanceof Document) && !elementUtil.isElement(el) && !elementUtil.isWindow(el)) {
			throw new TypeError('The first argument must be an element node or window or document')
		}
		let events = dataUtil.get(el, 'dap-defined-events')
		if (!events) {
			return
		}
		//事件名称不存在，则移除该元素的全部事件
		if (!eventName) {
			let keys = Object.keys(events)
			let length = keys.length
			for (let i = 0; i < length; i++) {
				let key = keys[i]
				el.removeEventListener(events[key].type, events[key].fn, events[key].options)
			}
			dataUtil.remove(el, 'dap-defined-events')
			dataUtil.remove(el, 'dap-event-guid')
			return
		}
		//解析eventName，获取事件数组以及guid标志
		const result = parseEventName(eventName)
		result.forEach((res: EventNameObjType) => {
			unbindSingleListener(el, res.eventName!, res.guid)
		})
	},

	/**
	 * 获取绑定的所有事件
	 * @param {*} el
	 */
	get(el: HTMLElement) {
		//参数el校验
		if (!(el instanceof Document) && !elementUtil.isElement(el) && !elementUtil.isWindow(el)) {
			throw new TypeError('The first argument must be an element node or window or document')
		}
		let events = dataUtil.get(el, 'dap-defined-events')
		if (!events) {
			return
		}
		return events
	}
}
