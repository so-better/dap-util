/**
 * 元素数据挂载方法
 */
declare const _default: {
    /**
     * 移除指定数据
     * @param {Object} el
     * @param {Object} key
     */
    remove(el: HTMLElement | Window | Document, key: string): void;
    /**
     * 判断是否含有指定数据
     * @param {Object} el
     * @param {Object} key
     */
    has(el: HTMLElement | Window | Document, key: string): any;
    /**
     * 获取元素指定数据
     * @param {Object} el
     * @param {Object} key
     */
    get(el: HTMLElement | Window | Document, key: string): any;
    /**
     * 设置元素指定数据
     * @param {Object} el
     * @param {Object} key
     * @param {Object} value
     */
    set(el: HTMLElement | Window | Document, key: string, value: any): void;
};
export default _default;
