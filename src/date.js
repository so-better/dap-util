import numberUtil from './number'
/**
 * 日期相关方法
 */
export default {
	/**
	 * 获取前N个月的日期，包含本月
	 * @param {Object} date 指定日期，默认为今日
	 * @param {Object} num 指定个数，默认为1
	 */
	getPrevMonths(date, num) {
		if (!date || !(date instanceof Date)) {
			date = new Date()
		}
		if (!numberUtil.isNumber(num)) {
			num = 1
		}

		let dateArray = [date] //日期数组
		for (let i = 0; i < num - 1; i++) {
			let y = date.getFullYear() //获取年份
			let m = date.getMonth() //获取月份
			if (m == 0) {
				m = 12
				y--
			}
			let d = new Date()
			d.setMonth(m - 1)
			d.setFullYear(y)
			dateArray.push(d)
			date = d
		}
		return dateArray
	},

	/**
	 * 获取后N个月的日期，包含本月
	 * @param {Object} date 指定日期，默认为今日
	 * @param {Object} num 指定个数，默认为1
	 */
	getNextMonths(date, num) {
		if (!date || !(date instanceof Date)) {
			date = new Date()
		}
		if (!numberUtil.isNumber(num)) {
			num = 1
		}
		let dateArray = [date] //日期数组
		for (let i = 0; i < num - 1; i++) {
			let y = date.getFullYear() //获取年份
			let m = date.getMonth() //获取月份
			if (m == 11) {
				m = -1
				y++
			}
			let d = new Date()
			d.setMonth(m + 1)
			d.setFullYear(y)
			dateArray.push(d)
			date = d
		}
		return dateArray
	},

	/**
	 * 获取指定天数后的日期
	 * @param {Object} date 指定日期，默认为今日
	 * @param {Object} num 指定天数，默认为1
	 */
	getDateAfter(date, num) {
		if (!date || !(date instanceof Date)) {
			date = new Date()
		}
		if (!numberUtil.isNumber(num)) {
			num = 1
		}
		return new Date(date.getTime() + num * 24 * 60 * 60 * 1000)
	},

	/**
	 * 获取指定天数前的日期
	 * @param {Object} date 指定日期，默认为今日
	 * @param {Object} num 指定天数，默认为1
	 */
	getDateBefore(date, num) {
		if (!date || !(date instanceof Date)) {
			date = new Date()
		}
		if (!numberUtil.isNumber(num)) {
			num = 1
		}
		return new Date(date.getTime() - num * 24 * 60 * 60 * 1000)
	},

	/**
	 * 获取某个月的天数
	 * @param {Object} years
	 * @param {Object} month
	 */
	getDays(year, month) {
		if (!numberUtil.isNumber(year)) {
			throw new TypeError('The first parameter must be a number representing the year')
		}
		if (!numberUtil.isNumber(month)) {
			throw new TypeError('The second argument must be a number representing the month')
		}
		year = parseInt(year)
		month = parseInt(month)
		let d = new Date(year, month, 0)
		return d.getDate()
	}
}
