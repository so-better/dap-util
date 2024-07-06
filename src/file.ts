import commonUtil from './common'
import numberUtil from './number'

export type CompressOptionsType = {
	//压缩图片的宽，单位px，如果不设置默认为原图宽
	width?: number
	//压缩图片质量，默认为原图的0.8
	quality?: number
	//图片类型，jpeg或者webp，默认为jpeg
	mimeType?: string
	//压缩后的最大值，单位kb，默认为0表示不设置此值
	maxSize?: number
	//小于该大小的图片不进行压缩，单位kb，默认为0表示任何图片都要压缩
	minSize?: number
}

export type CompressResultType = {
	file?: File
	url?: string
	quality?: number
	width?: number
	height?: number
}

export default {
	/**
	 * 根据文件获取可预览的图片路径
	 * @param {Object} file
	 */
	getImageUrl(file: File) {
		if (!file || !(file instanceof File)) {
			throw new TypeError('The argument must be a File object')
		}
		return window.URL.createObjectURL(file)
	},

	/**
	 * 将JS的file对象转为BASE64位字符串，通过then方法回调,参数为base64字符串
	 * @param {Object} file
	 */
	dataFileToBase64(file: File) {
		return new Promise<string>((resolve, reject) => {
			if (!file || !(file instanceof File)) {
				reject(new TypeError('The argument must be a File object'))
			}
			let reader = new FileReader()
			reader.readAsDataURL(file) // 读出 base64
			reader.onloadend = () => {
				// 图片的 base64 格式, 可以直接当成 img 的 src 属性值
				let dataURL = <string>reader.result
				// 下面逻辑处理
				resolve(dataURL)
			}
		})
	},

	/**
	 * 将base64位格式文件转换为file对象
	 * @param {Object} base64String base64位格式字符串
	 * @param {Object} fileName 转换后的文件名字，包含后缀
	 */
	dataBase64toFile(base64String: string, fileName: string) {
		if (!base64String || typeof base64String != 'string') {
			throw new TypeError('The first argument must be a string')
		}
		if (!fileName || typeof fileName != 'string') {
			throw new TypeError('The second argument must be a string')
		}
		let arr: string[] = base64String.split(',')
		let mime = arr[0].match(/:(.*?);/)![1]
		let bstr = atob(arr[1])
		let n = bstr.length
		let u8arr = new Uint8Array(n)
		while (n--) {
			u8arr[n] = bstr.charCodeAt(n)
		}
		return new File([u8arr], fileName, {
			type: mime
		})
	},

	/**
	 * 图片压缩方法
	 * @param {*} file 需要压缩的图片File文件
	 * @param {*} opts 压缩参数
	 */
	compressImage(file: File, opts: CompressOptionsType) {
		const options: CompressOptionsType = {
			//压缩图片的宽，单位px，如果不设置默认为原图宽
			width: undefined,
			//压缩图片质量，默认为原图的0.8
			quality: 0.8,
			//图片类型，jpeg或者webp，默认为jpeg
			mimeType: 'jpeg',
			//压缩后的最大值，单位kb，默认为0表示不设置此值
			maxSize: 0,
			//小于该大小的图片不进行压缩，单位kb，默认为0表示任何图片都要压缩
			minSize: 0
		}
		if (commonUtil.isObject(opts)) {
			if (numberUtil.isNumber(opts.width)) {
				options.width = opts.width
			}
			if (numberUtil.isNumber(opts.quality) && opts.quality! >= 0 && opts.quality! <= 1) {
				options.quality = opts.quality
			}
			if (opts.mimeType == 'jpeg' || opts.mimeType == 'webp') {
				options.mimeType = opts.mimeType
			}
			if (numberUtil.isNumber(opts.maxSize)) {
				options.maxSize = opts.maxSize
			}
			if (numberUtil.isNumber(opts.minSize)) {
				options.minSize = opts.minSize
			}
		}

		//压缩图片的具体实现方法
		const createFile = (canvas: HTMLCanvasElement, fileName: string, quality: number): CompressResultType => {
			//压缩后图片的base64
			let url = canvas.toDataURL('image/' + options.mimeType, quality)
			//压缩后图片的file类型文件
			let file = this.dataBase64toFile(url, fileName)
			//比最大尺寸大，继续压缩，此时会降低质量
			if (options.maxSize! > 0 && file.size > options.maxSize! * 1024) {
				quality = quality <= 0 ? 0 : Number((quality - 0.01).toFixed(2))
				const res: CompressResultType = createFile(canvas, fileName, quality)
				url = <string>res.url
				file = <File>res.file
				quality = <number>res.quality
			}
			return {
				file,
				url,
				quality
			}
		}
		return new Promise<CompressResultType>((resolve, reject) => {
			//创建FileReader对象读取文件
			let reader = new FileReader()
			reader.readAsDataURL(file)

			reader.onload = () => {
				//获取文件的base64字符串
				let url = <string>reader.result
				//创建图片对象
				let img = new Image()
				//设置图片链接地址
				img.src = <string>url
				//图片加载完成事件触发
				img.onload = () => {
					//小于minSize的图片不压缩
					if (options.minSize! > 0 && file.size <= options.minSize! * 1024) {
						resolve({
							file,
							url,
							quality: 1,
							width: img.width,
							height: img.height
						})
						return
					}
					//创建画布
					let canvas = document.createElement('canvas')
					//创建2d上下文
					let context = canvas.getContext('2d')!
					//设置画布宽度
					canvas.width = options.width || img.width
					//设置画布高度
					canvas.height = options.width ? options.width / (img.width / img.height) : img.height
					//画图片
					context.drawImage(img, 0, 0, canvas.width, canvas.height)
					//设置压缩图片名称
					let index = file.name.lastIndexOf('.')
					const fileName = file.name.substring(0, index) + '.' + options.mimeType
					//获取生成的文件和base64以及当前quality
					let res = createFile(canvas, fileName, options.quality!)
					resolve({
						...res,
						width: canvas.width,
						height: canvas.height
					})
				}
				img.onerror = () => {
					reject(new Error('Failed to load image file'))
				}
			}

			reader.onerror = () => {
				reject(new Error('Failed to load image file'))
			}
		})
	}
}
