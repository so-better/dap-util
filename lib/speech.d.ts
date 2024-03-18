type EventParamsType = {
    text: string;
    pitch: number;
    rate: number;
    volume: number;
};
type SpeechParamsType = {
    pitch?: number;
    rate?: number;
    volume?: number;
    start?: (e: Event, options: EventParamsType) => void;
    end?: (e: Event, options: EventParamsType) => void;
    pause?: (e: Event, options: EventParamsType) => void;
    resume?: (e: Event, options: EventParamsType) => void;
    error?: (e: Event, options: EventParamsType) => void;
};
/**
 * 语音合成方法
 */
declare const _default: {
    /**
     * 将文字加入语音播报队列
     * @param {Object} text
     */
    start(text: string, params?: SpeechParamsType): void;
    /**
     * 停止播报，停止所有播报队列里面的语音
     */
    stop(): void;
    /**
     * 暂停播报
     */
    pause(): void;
    /**
     * 恢复暂停的播报
     */
    resume(): void;
};
export default _default;
