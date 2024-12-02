export type EventParamsType = {
	text: string
	pitch: number
	rate: number
	volume: number
}

export type SpeechParamsType = {
	//话语的音调
	pitch?: number
	//说话的速度
	rate?: number
	//说话的音量：0-1
	volume?: number
	//播放开始事件
	start?: (e: Event, options: EventParamsType) => void
	//播放结束事件
	end?: (e: Event, options: EventParamsType) => void
	//播放暂停事件
	pause?: (e: Event, options: EventParamsType) => void
	//播放恢复事件
	resume?: (e: Event, options: EventParamsType) => void
	//播放出错事件
	error?: (e: Event, options: EventParamsType) => void
}

/**
 * 语音合成方法
 */
export const speech = {
	/**
	 * 将文字加入语音播报队列
	 * @param {Object} text
	 * @param {Object} options
	 */
	start(text: string, options?: SpeechParamsType) {
		if (!window.SpeechSynthesisUtterance || !window.speechSynthesis) {
			throw new Error('The current browser does not support this syntax')
		}
		const speech = new SpeechSynthesisUtterance()
		speech.text = text
		speech.pitch = options?.pitch ?? 0.8
		speech.rate = options?.rate ?? 1
		speech.volume = options?.volume ?? 1
		speech.lang = 'zh-CN'
		//播放开始后调用
		speech.onstart = event => {
			options?.start?.apply(speech, [
				event,
				{
					text: text,
					pitch: options.pitch ?? 0.8,
					rate: options.rate ?? 1,
					volume: options.volume ?? 1
				}
			])
		}
		//播放结束后调用
		speech.onend = event => {
			options?.end?.apply(speech, [
				event,
				{
					text: text,
					pitch: options.pitch ?? 0.8,
					rate: options.rate ?? 1,
					volume: options.volume ?? 1
				}
			])
		}
		//播放暂停后调用
		speech.onpause = event => {
			options?.pause?.apply(speech, [
				event,
				{
					text: text,
					pitch: options.pitch ?? 0.8,
					rate: options.rate ?? 1,
					volume: options.volume ?? 1
				}
			])
		}
		//播放恢复后调用
		speech.onresume = event => {
			options?.resume?.apply(speech, [
				event,
				{
					text: text,
					pitch: options.pitch ?? 0.8,
					rate: options.rate ?? 1,
					volume: options.volume ?? 1
				}
			])
		}
		//播放出错后调用
		speech.onerror = event => {
			options?.error?.apply(speech, [
				event,
				{
					text: text,
					pitch: options.pitch ?? 0.8,
					rate: options.rate ?? 1,
					volume: options.volume ?? 1
				}
			])
		}
		//加入播放队列
		window.speechSynthesis.speak(speech)
	},
	/**
	 * 停止播报，停止所有播报队列里面的语音
	 */
	stop() {
		if (!window.SpeechSynthesisUtterance || !window.speechSynthesis) {
			throw new Error('The current browser does not support this syntax')
		}
		window.speechSynthesis.cancel()
	},

	/**
	 * 暂停播报
	 */
	pause() {
		if (!window.SpeechSynthesisUtterance || !window.speechSynthesis) {
			throw new Error('The current browser does not support this syntax')
		}
		window.speechSynthesis.pause()
	},

	/**
	 * 恢复暂停的播报
	 */
	resume() {
		if (!window.SpeechSynthesisUtterance || !window.speechSynthesis) {
			throw new Error('The current browser does not support this syntax')
		}
		window.speechSynthesis.resume()
	}
}
