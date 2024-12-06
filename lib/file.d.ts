export type CompressOptionsType = {
    width?: number;
    quality?: number;
    mimeType?: 'jpeg' | 'webp';
    maxSize?: number;
    minSize?: number;
};
export type CompressResultType = {
    file?: File;
    url?: string;
    quality?: number;
    width?: number;
    height?: number;
};
export declare const file: {
    /**
     * 根据文件获取本地可预览的图片路径
     * @param {Object} file
     */
    getImageUrl(file: File): string;
    /**
     * 将JS的file对象转为BASE64位字符串，通过then方法回调,参数为base64字符串
     * @param {Object} file
     */
    dataFileToBase64(file: File): Promise<string>;
    /**
     * 将base64位格式文件转换为file对象
     * @param {Object} base64String base64位格式字符串
     * @param {Object} fileName 转换后的文件名字，包含后缀
     */
    dataBase64toFile(base64String: string, fileName: string): File;
    /**
     * 图片压缩方法
     * @param {*} file 需要压缩的图片File文件
     * @param {*} options 压缩参数
     */
    compressImage(file: File, options: CompressOptionsType): Promise<CompressResultType>;
};
