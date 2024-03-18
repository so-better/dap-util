declare const _default: {
    language(): any;
    /**
     * 获取设备类型
     */
    device(): {
        PC: boolean;
        Mobile: boolean;
        iPhone: boolean;
        Phone: boolean;
        iPad: boolean;
        Tablet: boolean;
        WindowsPhone: boolean;
    };
    /**
     * 获取浏览器类型
     */
    browser(): {
        Edge: boolean;
        weixin: boolean;
        QQ: boolean;
        QQBrowser: boolean;
        UC: boolean;
        Chrome: boolean;
        Firefox: boolean;
        sougou: boolean;
        Safari: boolean;
    };
    /**
     * 获取浏览器内核
     */
    browserKernel(): "" | "opera" | "webkit" | "gecko";
    /**
     * 获取操作系统数据
     */
    os(): {
        Windows: boolean;
        Windows_CPU: string;
        Windows_Version: string;
        Mac: boolean;
        Mac_Version: string;
        ios: boolean;
        ios_Version: string;
        Android: boolean;
        Android_Version: string;
        Linux: boolean;
        HarmonyOS: boolean;
        Ubuntu: boolean;
    };
};
export default _default;
