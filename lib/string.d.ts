/**
 * 字符串操作
 */
declare const _default: {
    /**
     * 向指定位置插入字符串
     * @param {Object} original 原始字符串
     * @param {Object} str 插入的字符串
     * @param {Object} index 插入的位置
     */
    insert(original: string, str: string, index: number): string;
    /**
     * 删除指定位置的字符串
     * @param {Object} original 原始字符串
     * @param {Object} index 删除的位置序列
     * @param {Object} num 删除的字符串长度
     */
    delete(original: string, index: number, num: number): string;
    /**
     * 替换指定位置的字符串
     * @param {Object} original 原始字符串
     * @param {Object} start 开始位置
     * @param {Object} end 结束位置
     * @param {Object} str 替换的字符串
     */
    replace(original: string, start: number, end: number, str: string): string;
    /**
     * 去除字符串空格
     * @param {Object} str 原始字符串
     * @param {Object} global 为true时去除所有空格，否则只去除两边空格
     */
    trim(str: string, global?: boolean): string;
};
export default _default;
