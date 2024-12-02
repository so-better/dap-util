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

export const file = {
	/**
	 * 根据文件获取可预览的图片路径
	 * @param {Object} file
	 */
	getImageUrl(file: File) {
		return window.URL.createObjectURL(file)
	},

	/**
	 * 将JS的file对象转为BASE64位字符串，通过then方法回调,参数为base64字符串
	 * @param {Object} file
	 */
	dataFileToBase64(file: File) {
		return new Promise<string>(resolve => {
			const reader = new FileReader()
			reader.readAsDataURL(file) // 读出 base64
			reader.onloadend = () => {
				// 图片的 base64 格式, 可以直接当成 img 的 src 属性值
				const dataURL = reader.result as string
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
		const arr: string[] = base64String.split(',')
		const mime = arr[0].match(/:(.*?);/)![1]
		const bstr = atob(arr[1])
		let n = bstr.length
		const u8arr = new Uint8Array(n)
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
	 * @param {*} options 压缩参数
	 */
	compressImage(file: File, options: CompressOptionsType) {
		//压缩图片的具体实现方法
		const createFile = (canvas: HTMLCanvasElement, fileName: string, quality: number): CompressResultType => {
			//压缩后图片的base64
			let url = canvas.toDataURL('image/' + (options.mimeType ?? 'jpeg'), quality)
			//压缩后图片的file类型文件
			let file = this.dataBase64toFile(url, fileName)
			//比最大尺寸大，继续压缩，此时会降低质量
			if (options.maxSize && options.maxSize > 0 && file.size > options.maxSize * 1024) {
				quality = quality <= 0 ? 0 : Number((quality - 0.01).toFixed(2))
				const res: CompressResultType = createFile(canvas, fileName, quality)
				url = res.url!
				file = res.file!
				quality = res.quality!
			}
			return {
				file,
				url,
				quality
			}
		}
		return new Promise<CompressResultType>((resolve, reject) => {
			//创建FileReader对象读取文件
			const reader = new FileReader()
			reader.readAsDataURL(file)
			reader.onload = () => {
				//获取文件的base64字符串
				const url = reader.result as string
				//创建图片对象
				const img = new Image()
				//设置图片链接地址
				img.src = url
				//图片加载完成事件触发
				img.onload = () => {
					//小于minSize的图片不压缩
					if (options.minSize && options.minSize > 0 && file.size <= options.minSize * 1024) {
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
					const canvas = document.createElement('canvas')
					//创建2d上下文
					const context = canvas.getContext('2d')!
					//设置画布宽度
					canvas.width = options.width || img.width
					//设置画布高度
					canvas.height = options.width ? options.width / (img.width / img.height) : img.height
					//画图片
					context.drawImage(img, 0, 0, canvas.width, canvas.height)
					//设置压缩图片名称
					const index = file.name.lastIndexOf('.')
					const fileName = file.name.substring(0, index) + '.' + (options.mimeType ?? 'jpeg')
					//获取生成的文件和base64以及当前quality
					let res = createFile(canvas, fileName, options.quality ?? 0.8)
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
