const numberUtil = require('./number')
/**
 * 字符串操作
 */
module.exports = {

	/**
	 * 向指定位置插入字符串
	 * @param {Object} original 原始字符串
	 * @param {Object} str 插入的字符串
	 * @param {Object} index 插入的位置
	 */
	insert(original, str, index) {
		if(!original || typeof original != 'string'){
			throw new TypeError('The first argument must be a string')
		}
		if(typeof str != 'string'){
			throw new TypeError('The second argument must be a string')
		}
		if(!numberUtil.isNumber(index)){
			throw new TypeError('The third argument must be a number')
		}
		if(index < 0){
			throw new Error('The third argument cannot be less than 0')
		}
		return original.substr(0, index) + str + original.substring(index, original.length)
	},

	/**
	 * 删除指定位置的字符串
	 * @param {Object} original 原始字符串
	 * @param {Object} index 删除的位置序列
	 * @param {Object} num 删除的字符串长度
	 */
	delete(original, index, num) {
		if(!original || typeof original != 'string'){
			throw new TypeError('The first argument must be a string')
		}
		if(!numberUtil.isNumber(index)){
			throw new TypeError('The second argument must be a number')
		}
		if(index < 0){
			throw new Error('The second argument cannot be less than 0')
		}
		if(!numberUtil.isNumber(num)){
			throw new TypeError('The third argument must be a number')
		}
		if(num < 0){
			throw new Error('The third argument cannot be less than 0')
		}
		return original.substr(0, index) + original.substring(index + num, original.length)
	},

	/**
	 * 替换指定位置的字符串
	 * @param {Object} original 原始字符串
	 * @param {Object} start 开始位置
	 * @param {Object} end 结束位置
	 * @param {Object} str 替换的字符串
	 */
	replace(original, start, end, str) {
		if(!original || typeof original != 'string'){
			throw new TypeError('The first argument must be a string')
		}
		if(!numberUtil.isNumber(start)){
			throw new TypeError('The second argument must be a number')
		}
		if(start < 0){
			throw new Error('The second argument cannot be less than 0')
		}
		if(!numberUtil.isNumber(end)){
			throw new TypeError('The third argument must be a number')
		}
		if(end < 0){
			throw new Error('The third argument cannot be less than 0')
		}
		if(typeof str != 'string'){
			throw new TypeError('The fourth argument must be a string')
		}
		return original.substring(0, start) + str + original.substring(end, original.length)
	},

	/**
	 * 去除字符串空格
	 * @param {Object} str
	 * @param {Object} global 为true时去除所有空格，否则只去除两边空格
	 */
	trim(str, global) {
		if (typeof str != "string") {
			throw new TypeError('The first argument must be a string')
		}
		let result = str.replace(/(^\s+)|(\s+$)/g, "")
		if (global) {
			result = result.replace(/\s/g, "")
		}
		return result
	}
}
