export type OSResultType = {
    Windows: boolean;
    WindowsCPU?: 'x64' | 'x32';
    WindowsVersion?: 'win7' | 'win8' | 'win10';
    Mac: boolean;
    MacVersion: string;
    ios: boolean;
    iosVersion: string;
    Android: boolean;
    AndroidVersion: string;
    Linux: boolean;
    HarmonyOS: boolean;
    Ubuntu: boolean;
};
export declare const platform: {
    language(): string;
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
        Weixin: boolean;
        QQ: boolean;
        QQBrowser: boolean;
        UC: boolean;
        Chrome: boolean;
        Firefox: boolean;
        Sougou: boolean;
        Safari: boolean;
    };
    /**
     * 获取浏览器内核
     */
    browserKernel(): "opera" | "webkit" | "gecko" | undefined;
    /**
     * 获取操作系统数据
     */
    os(): OSResultType;
};
