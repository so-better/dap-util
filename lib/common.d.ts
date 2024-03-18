/**
 * 常用方法
 */
declare const _default: {
    /**
     * 常用判断
     * @param {Object} text 要判断的字符串
     * @param {Object} param 判断的类型字符串
     */
    matchingText(text: string, param: string): boolean;
    /**
     * 根据参数名获取地址栏参数值
     * @param {Object} name
     */
    getUrlParams(name: string): string | null;
    /**
     * 判断是否空对象
     * @param {Object} obj
     */
    isEmptyObject(obj: any): boolean;
    /**
     * 判断两个参数是否相等
     * @param {Object} a
     * @param {Object} b
     */
    equal(a: any, b: any): boolean;
    /**
     * 是否对象
     * @param {Object} val
     */
    isObject(val: any): boolean;
    /**
     * 文本复制
     * @param {Object} text
     */
    copyText(text: string): Promise<void>;
    /**
     * 深度克隆
     * @param {Object} data
     */
    clone(data: any): any;
};
export default _default;
