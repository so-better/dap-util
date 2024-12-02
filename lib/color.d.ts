/**
 * 颜色相关方法
 */
export declare const color: {
    /**
     * rgb转hsv值
     * @param {Object} rgb rgb值，数组
     */
    rgb2hsv(rgb: number[]): number[];
    /**
     * hsv格式值转rgb值
     * @param {Object} hsv hsv值，数组
     */
    hsv2rgb(hsv: number[]): number[];
    /**
     * rgb值转十六进制
     * @param {Array} rgb rgb值，数组
     */
    rgb2hex(rgb: number[]): string;
    /**
     * 十六进制颜色转rgb
     * @param {String} hex 十六进制颜色值
     */
    hex2rgb(hex: string): number[];
};
