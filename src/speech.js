const numberUtil = require('./number')
const commonUtil = require('./common')
/**
 * 语音合成方法
 */
module.exports = {
    /**
     * 将文字加入语音播报队列
     * @param {Object} text
     */
    start(text, params) {
        if (!window.SpeechSynthesisUtterance || !window.speechSynthesis) {
            throw new Error('The current browser does not support this syntax')
        }
        let defaultParams = {
            //话语的音调(0-2，值越大越尖锐,越低越低沉)
            pitch: 0.8,
            //说话的速度(0-10，值越大语速越快,越小语速越慢)
            rate: 1,
            //说话的音量：0-1
            volume: 1,
            //播放开始事件
            start: function () {},
            //播放结束事件
            end: function () {},
            //播放暂停事件
            pause: function () {},
            //播放恢复事件
            resume: function () {},
            //播放出错事件
            error: function () {}
        }
        if (!commonUtil.isObject(params)) {
            params = {}
        }
        if (numberUtil.isNumber(params.pitch)) {
            defaultParams.pitch = params.pitch
        }
        if (numberUtil.isNumber(params.rate)) {
            defaultParams.rate = params.rate
        }
        if (numberUtil.isNumber(params.volume)) {
            defaultParams.volume = params.volume
        }
        if (typeof params.start == 'function') {
            defaultParams.start = params.start
        }
        if (typeof params.end == 'function') {
            defaultParams.end = params.end
        }
        if (typeof params.pause == 'function') {
            defaultParams.pause = params.pause
        }
        if (typeof params.resume == 'function') {
            defaultParams.resume = params.resume
        }
        if (typeof params.error == 'function') {
            defaultParams.error = params.error
        }
        const speech = new SpeechSynthesisUtterance()
        speech.text = text
        speech.pitch = defaultParams.pitch
        speech.rate = defaultParams.rate
        speech.volume = defaultParams.volume
        speech.lang = 'zh-CN'
        //播放开始后调用
        speech.onstart = event => {
            defaultParams.start.apply(speech, [
                event,
                {
                    text: text,
                    pitch: defaultParams.pitch,
                    rate: defaultParams.rate,
                    volume: defaultParams.volume
                }
            ])
        }
        //播放结束后调用
        speech.onend = event => {
            defaultParams.end.apply(speech, [
                event,
                {
                    text: text,
                    pitch: defaultParams.pitch,
                    rate: defaultParams.rate,
                    volume: defaultParams.volume
                }
            ])
        }
        //播放暂停后调用
        speech.onpause = event => {
            defaultParams.pause.apply(speech, [
                event,
                {
                    text: text,
                    pitch: defaultParams.pitch,
                    rate: defaultParams.rate,
                    volume: defaultParams.volume
                }
            ])
        }
        //播放恢复后调用
        speech.onresume = event => {
            defaultParams.resume.apply(speech, [
                event,
                {
                    text: text,
                    pitch: defaultParams.pitch,
                    rate: defaultParams.rate,
                    volume: defaultParams.volume
                }
            ])
        }
        //播放出错后调用
        speech.onerror = event => {
            defaultParams.error.apply(speech, [
                event,
                {
                    text: text,
                    pitch: defaultParams.pitch,
                    rate: defaultParams.rate,
                    volume: defaultParams.volume
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
