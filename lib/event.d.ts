declare const _default: {
    /**
     * 绑定事件
     * @param {Object} el 元素节点
     * @param {Object} eventName 事件名称
     * @param {Object} fn 函数
     * @param {Object} options 参数
     */
    on(el: HTMLElement, eventName: string, fn: (e: Event) => void, options: AddEventListenerOptions | undefined): void;
    /**
     * 事件解绑
     * @param {Object} el 元素节点
     * @param {Object} eventName 事件名称
     */
    off(el: HTMLElement, eventName: string): void;
    /**
     * 获取绑定的所有事件
     * @param {*} el
     */
    get(el: HTMLElement): any;
};
export default _default;
