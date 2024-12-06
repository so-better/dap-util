export type ScrollOptionsType = {
    el?: HTMLElement | string | Window;
    time?: number;
    number?: number;
};
export type PlacementType = {
    left: number;
    top: number;
    right: number;
    bottom: number;
};
export type scrollTopBottomResultType = {
    state: 'top' | 'bottom';
    target: HTMLElement | Window;
};
/**
 * element相关工具方法
 */
export declare const element: {
    /**
     * 判断是否是Window对象
     * @param {Object} data 入参
     */
    isWindow(data: any): boolean;
    /**
     * 获取元素距离某个定位祖先元素左侧/顶部/底部/右侧的距离
     * @param {Object} el 元素
     * @param {Object} root 定位父元素或者祖先元素，未指定则为document.body
     */
    getElementPoint(el: HTMLElement, root?: HTMLElement): PlacementType;
    /**
     * 判断某个元素是否包含指定元素，包含相等关系和父子关系
     * @param {Object} parentNode 父元素或祖先元素
     * @param {Object} childNode 子元素
     */
    isContains(parentNode: HTMLElement, childNode: HTMLElement): boolean;
    /**
     * 判断某个元素是否是指定元素的父元素
     * @param {Object} parentNode 父元素
     * @param {Object} childNode 子元素
     */
    isParentNode(parentNode: HTMLElement, childNode: HTMLElement): boolean;
    /**
     * 查找某个元素下指定选择器的子元素
     * @param {Object} el 元素
     * @param {Object} selector 支持多选择器，等同于querySelectorAll的参数
     */
    children(el: HTMLElement, selector?: string): HTMLElement[];
    /**
     * 查找某个元素下指定选择器的兄弟元素
     * @param {Object} el 元素
     * @param {Object} selector 取值等同于queryselectorAll的参数，支持多选择器
     */
    siblings(el: HTMLElement, selector?: string): HTMLElement[];
    /**
     * rem与px单位转换
     * @param {Object} num rem数值
     */
    rem2px(num: number): number;
    /**
     * rem与px单位转换
     * @param {Object} num px数值
     */
    px2rem(num: number): number;
    /**
     * 获取元素的内容宽度，内容宽度不包括border和padding
     * @param {Object} el 支持css选择器字符串，未指定则表示document.body
     */
    width(el?: HTMLElement | string): number;
    /**
     * 获取元素的内容高度，内容高度不包括border和padding
     * @param {Object} el 支持css选择器字符串 未指定则表示document.body
     */
    height(el?: HTMLElement | string): number;
    /**
     * 移除class
     * @param {Object} el 元素
     * @param {Object} className 支持多类,以空格划分
     */
    removeClass(el: HTMLElement, className: string): void;
    /**
     * 添加class
     * @param {Object} el 元素
     * @param {Object} className 支持多类,以空格划分
     */
    addClass(el: HTMLElement, className: string): void;
    /**
     * 判断指定元素是否含有指定类名
     * @param {Object} el 元素
     * @param {Object} className 支持多类,以空格划分
     */
    hasClass(el: HTMLElement, className: string): boolean;
    /**
     * 监听元素滚动到顶部或者底部
     * @param {Object} el 支持css选择器字符串 未指定则为窗口滚动
     * @param {Object} callback 回调函数
     */
    scrollTopBottomTrigger(el?: HTMLElement | string | Window, callback?: (options: scrollTopBottomResultType) => void): void;
    /**
     * 获取文档或元素的总宽度
     * @param {Object} el 支持css选择器字符串 未指定则表示整个页面文档
     */
    getScrollWidth(el?: HTMLElement | string): number;
    /**
     * 获取文档或者元素的总高度
     * @param {Object} el 支持css选择器字符串 未指定则表示整个页面文档
     */
    getScrollHeight(el?: HTMLElement | string): number;
    /**
     * 设置滚动条在Y轴上的距离
     * @param {Object} options {el,number,time} el支持css选择器字符串 未指定则为窗口滚动
     */
    setScrollTop(options: ScrollOptionsType): Promise<void>;
    /**
     * 获取滚动条在Y轴上滚动的距离
     * @param {Object} el 支持css选择器字符串 未指定则为窗口滚动
     */
    getScrollTop(el?: HTMLElement | string | Window): number;
    /**
     * 获取滚动条在X轴上滚动的距离
     * @param {Object} el 支持css选择器字符串 未指定则为窗口滚动
     */
    getScrollLeft(el?: HTMLElement | string | Window): number;
    /**
     * 设置滚动条在X轴上的距离
     * @param {Object} options {el,number,time} el支持css选择器字符串 未指定则为窗口滚动
     */
    setScrollLeft(options: ScrollOptionsType): Promise<void>;
    /**
     * 获取元素指定样式
     * @param {Object} el 元素
     * @param {Object} cssName 样式名称
     */
    getCssStyle(el: HTMLElement, cssName: string): string;
    /**
     * 判断字符串属于哪种选择器
     * @param {Object} selector
     */
    getCssSelector(selector: string): {
        type: "id" | "class" | "attribute" | "tag";
        value: string | {
            attributeName: string;
            attributeValue: string;
        };
    };
    /**
     * 获取元素距离可视窗口的位置
     * @param {Object} el 支持css选择器字符串 未指定则为document.body
     */
    getElementBounding(el?: HTMLElement | string): PlacementType;
    /**
     * 判断是否是元素
     * @param {Object} el
     */
    isElement(el: any): boolean;
    /**
     * 字符串转dom
     * @param {Object} html
     */
    string2dom(html: string): HTMLElement | HTMLElement[];
};
