export type DataHTMLElement = HTMLElement & {
    [key: string]: any;
};
export type DataWindow = Window & {
    [key: string]: any;
};
export type DataDocument = Document & {
    [key: string]: any;
};
/**
 * 元素数据挂载方法
 */
export declare const data: {
    /**
     * 移除指定数据
     * @param {Object} el
     * @param {Object} key
     */
    remove(el: DataHTMLElement | DataWindow | DataDocument, key?: string): void;
    /**
     * 判断是否含有指定数据
     * @param {Object} el
     * @param {Object} key
     */
    has(el: DataHTMLElement | DataWindow | DataDocument, key: string): boolean;
    /**
     * 获取元素指定数据
     * @param {Object} el
     * @param {Object} key
     */
    get<T>(el: DataHTMLElement | DataWindow | DataDocument, key?: string): T;
    /**
     * 设置元素指定数据
     * @param {Object} el
     * @param {Object} key
     * @param {Object} value
     */
    set(el: DataHTMLElement | DataWindow | DataDocument, key: string, value: any): void;
};
