/**
 * 数字相关方法
 */
declare const _default: {
    /**
     * 数字格式化
     * @param {Number} num
     */
    formatNumber(num: number): string | number;
    /**
     * 判断是否数字
     * @param {Object} num
     */
    isNumber(num: any): boolean;
    /**
     * 多个数的加法运算
     */
    add(...values: number[]): number;
    /**
     * 多个数的减法运算
     */
    subtract(...values: number[]): number;
    /**
     * 多个数的乘法运算
     */
    mutiply(...values: number[]): number;
    /**
     * 多个数的除法运算
     */
    divide(...values: number[]): number;
};
export default _default;
