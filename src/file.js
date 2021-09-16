module.exports = {
	/**
	 * 根据文件获取可预览的图片路径
	 * @param {File} file
	 */
	getImageUrl(file) {
		if(!file || !(file instanceof File)){
			throw new TypeError('The argument must be a File object')
		}
		return window.URL.createObjectURL(file)
	},

	/**
	 * 将JS的file对象转为BASE64位字符串，通过then方法回调,参数为base64字符串
	 * @param {Object} file 
	 */
	dataFileToBase64(file) {
		return new Promise((reslove, reject) => {
			if(!file || !(file instanceof File)){
				reject(new TypeError('The argument must be a File object'))
			}
			let reader = new FileReader()
			reader.readAsDataURL(file) // 读出 base64
			reader.onloadend = () => {
				// 图片的 base64 格式, 可以直接当成 img 的 src 属性值        
				let dataURL = reader.result
				// 下面逻辑处理
				reslove(dataURL)
			}
		})
	},

	/**
	 * 将base64位格式文件转换为file对象
	 * @param {Object} base64String base64位格式字符串
	 * @param {Object} filename 转换后的文件名字，包含后缀
	 */
	dataBase64toFile(base64String, filename) {
		if(!base64String || typeof base64String != 'string'){
			throw new TypeError('The first argument must be a string')
		}
		if(!base64String || typeof base64String != 'string'){
			throw new TypeError('The file name is undefined')
		}
		let arr = base64String.split(',')
		let mime = arr[0].match(/:(.*?);/)[1]
		let bstr = atob(arr[1])
		let n = bstr.length
		let u8arr = new Uint8Array(n)
		while (n--) {
			u8arr[n] = bstr.charCodeAt(n)
		}
		return new File([u8arr], filename, {
			type: mime
		})
	}
}
