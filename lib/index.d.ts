import number from './number';
import data from './data';
import element from './element';
import event from './event';
import common from './common';
import color from './color';
import file from './file';
import string from './string';
import platform from './platform';
import speech from './speech';
export type * from './element';
export type * from './file';
export type * from './speech';
declare const obj: {
    number: {
        formatNumber(num: number): string | number;
        isNumber(num: any): boolean;
        add(...values: number[]): number;
        subtract(...values: number[]): number;
        mutiply(...values: number[]): number;
        divide(...values: number[]): number;
    };
    data: {
        remove(el: HTMLElement | Window | Document, key?: string | null | undefined): void;
        has(el: HTMLElement | Window | Document, key: string): any;
        get(el: HTMLElement | Window | Document, key?: string | null | undefined): any;
        set(el: HTMLElement | Window | Document, key: string, value?: any): void;
    };
    element: {
        isWindow(data: any): any;
        getElementPoint(el: HTMLElement, root?: HTMLElement | undefined): import("./element").PlacementType;
        isContains(parentNode: HTMLElement, childNode: HTMLElement): boolean;
        isParentNode(parentNode: HTMLElement, childNode: HTMLElement): boolean;
        children(el: HTMLElement, selector?: string | undefined): Element[];
        siblings(el: HTMLElement, selector?: string | undefined): Element[];
        rem2px(num: number): number;
        px2rem(num: number): number;
        width(el?: string | HTMLElement | undefined): number;
        height(el?: string | HTMLElement | undefined): number;
        removeClass(el: HTMLElement, className: string): void;
        addClass(el: HTMLElement, className: string): void;
        hasClass(el: HTMLElement, className: string): boolean;
        scrollTopBottomTrigger(el?: string | HTMLElement | Window | undefined, callback?: ((options: any) => void) | undefined): void;
        getScrollWidth(el?: string | HTMLElement | undefined): number;
        getScrollHeight(el?: string | HTMLElement | undefined): number;
        setScrollTop(options: import("./element").ScrollOptionsType): Promise<void>;
        getScrollTop(el?: string | HTMLElement | Window | undefined): number;
        getScrollLeft(el?: string | HTMLElement | Window | undefined): number;
        setScrollLeft(options: import("./element").ScrollOptionsType): Promise<void>;
        getCssStyle(el: HTMLElement, cssName: string): string;
        getCssSelector(selector: string): {
            type: string;
            value: any;
        };
        getElementBounding(el?: string | HTMLElement | undefined): import("./element").PlacementType;
        isElement(el: any): any;
        string2dom(html: string): Element | Element[];
    };
    event: {
        on(el: HTMLElement | Window | Document, eventName: string, fn: (e: Event) => void, options?: AddEventListenerOptions | undefined): void;
        off(el: HTMLElement | Window | Document, eventName?: string | undefined): void;
        get(el: HTMLElement | Window | Document): any;
    };
    common: {
        matchingText(text: string, param: string): boolean;
        getUrlParams(name: string): string | null;
        isEmptyObject(obj: any): boolean;
        equal(a: any, b: any): boolean;
        isObject(val: any): boolean;
        copyText(text: string): Promise<void>;
        clone(data: any): any;
    };
    color: {
        rgb2hsv(rgb: number[]): number[];
        hsv2rgb(hsv: number[]): number[];
        rgb2hex(rgb: number[]): string;
        hex2rgb(hex: string): number[];
    };
    file: {
        getImageUrl(file: File): string;
        dataFileToBase64(file: File): Promise<string>;
        dataBase64toFile(base64String: string, fileName: string): File;
        compressImage(file: File, opts: import("./file").CompressOptionsType): Promise<import("./file").CompressResultType>;
    };
    string: {
        insert(original: string, str: string, index: number): string;
        delete(original: string, index: number, num: number): string;
        replace(original: string, start: number, end: number, str: string): string;
        trim(str: string, global?: boolean | undefined): string;
    };
    platform: {
        language(): any;
        device(): {
            PC: boolean;
            Mobile: boolean;
            iPhone: boolean;
            Phone: boolean;
            iPad: boolean;
            Tablet: boolean;
            WindowsPhone: boolean;
        };
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
        browserKernel(): "" | "opera" | "webkit" | "gecko";
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
    speech: {
        start(text: string, params?: import("./speech").SpeechParamsType | undefined): void;
        stop(): void;
        pause(): void;
        resume(): void;
    };
};
export { obj as default, number, data, element, event, common, color, file, string, platform, speech };
